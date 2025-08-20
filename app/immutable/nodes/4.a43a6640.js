import{s as zi,f as ot,l as Wt,g as at,h as zt,m as Kt,d as D,j as J,r as za,i as et,u as V,J as mi,Q as Id,n as oi,v as Sn,O as fl,L as _i,p as Le,K as xe,M as gl,a as B,x as se,c as z,G as yo,w as wd,y as pn,z as oe}from"../chunks/scheduler.41e0bfa2.js";import{S as Gi,i as Wi,f as Fe,b as lt,d as ct,m as ht,a as $,t as K,e as dt,g as yi,c as vi}from"../chunks/index.e3f19884.js";import{e as Cn}from"../chunks/each.e59479a4.js";import{C as ai,l as Ss}from"../chunks/localstorage-enabled-store.d14c25f6.js";import{D as Ad,a as er,r as Cs}from"../chunks/result-columns-store.556559a0.js";import{T as Ga}from"../chunks/TextInput.7c8bfe68.js";import{S as Rd}from"../chunks/Searchbar.779a8de0.js";import{g as Pd}from"../chunks/user-id-store.83f6419e.js";import{a as Wa}from"../chunks/format-tag.7e313273.js";import{M as Ka}from"../chunks/tag-modifier-data.021c0243.js";import{T as Ae}from"../chunks/TextButton.a7c32e3b.js";import{n as Sd,s as Xe}from"../chunks/supertags-store.71274ea7.js";import{H as Cd,a as Yr}from"../chunks/Heading3.9d1c4e59.js";import{g as pl,i as kd,a as Vd,b as kt,_ as zs,C as Gs,r as Ti,c as vo,d as Nd,e as ml,f as Dd,S as xn,E as To,h as bd,j as Od,q as Pr,L as ce,k as Jt,l as Md,m as _l,F as Ki,n as Ld,o as xd,p as Fd,s as Ud}from"../chunks/index.esm2017.b35d87a0.js";import{c as $d,a as qd}from"../chunks/tag-utils.ceb6413c.js";import{a as jd,b as Bd}from"../chunks/analytics.b280da65.js";import{b as ks}from"../chunks/blocked-content-store.101e0b86.js";import{w as zd}from"../chunks/index.d94cff24.js";import"../chunks/firebase.68ed9652.js";import{S as vt}from"../chunks/store-keys.402ed1b9.js";import{t as Vs}from"../chunks/theme-store.627642a8.js";function Gd(n){let t,e=Wa(n[0].name)+"",r,i,s,o;return{c(){t=ot("button"),r=Wt(e),this.h()},l(a){t=at(a,"BUTTON",{type:!0,class:!0});var u=zt(t);r=Kt(u,e),u.forEach(D),this.h()},h(){J(t,"type","button"),J(t,"class",i=za(Ka[n[0].modifier])+" svelte-1kb5f0w")},m(a,u){et(a,t,u),V(t,r),s||(o=[mi(t,"click",n[1]),mi(t,"contextmenu",Id(n[2]))],s=!0)},p(a,[u]){u&1&&e!==(e=Wa(a[0].name)+"")&&oi(r,e),u&1&&i!==(i=za(Ka[a[0].modifier])+" svelte-1kb5f0w")&&J(t,"class",i)},i:Sn,o:Sn,d(a){a&&D(t),s=!1,fl(o)}}}function Wd(n,t,e){let{tag:r}=t;function i(o){_i.call(this,n,o)}function s(o){_i.call(this,n,o)}return n.$$set=o=>{"tag"in o&&e(0,r=o.tag)},[r,i,s]}class yl extends Gi{constructor(t){super(),Wi(this,t,Wd,Gd,zi,{tag:0})}}function Ha(n,t,e){const r=n.slice();return r[14]=t[e],r[16]=e,r}function Qa(n){let t,e;function r(){return n[7](n[16])}function i(){return n[8](n[16],n[14])}return t=new yl({props:{tag:n[14]}}),t.$on("click",r),t.$on("contextmenu",i),{c(){lt(t.$$.fragment)},l(s){ct(t.$$.fragment,s)},m(s,o){ht(t,s,o),e=!0},p(s,o){n=s;const a={};o&2&&(a.tag=n[14]),t.$set(a)},i(s){e||($(t.$$.fragment,s),e=!0)},o(s){K(t.$$.fragment,s),e=!1},d(s){dt(t,s)}}}function Kd(n){let t;return{c(){t=Wt("Save")},l(e){t=Kt(e,"Save")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function Hd(n){let t;return{c(){t=Wt("Cancel")},l(e){t=Kt(e,"Cancel")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function Qd(n){let t,e,r="Edit Supertag",i,s,o="Name",a,u,l,c,h,d="Description",f,y,R,E,I,x="Add or remove tags",j,F,tt,Q,yt,H,Rt,it,Pt;function wt(P){n[4](P)}let T={placeholder:"Name",autocomplete:"false"};n[1].name!==void 0&&(T.value=n[1].name),u=new Ga({props:T}),Le.push(()=>Fe(u,"value",wt));function G(P){n[5](P)}let Zt={placeholder:"Description",autocomplete:"false"};n[1].description!==void 0&&(Zt.value=n[1].description),y=new Ga({props:Zt}),Le.push(()=>Fe(y,"value",G)),F=new Rd({props:{placeholder:"Search for tags",fetchSuggestions:Pd}}),F.$on("pick",n[6]);let te=Cn(n[1].tags),U=[];for(let P=0;P<te.length;P+=1)U[P]=Qa(Ha(n,te,P));const ke=P=>K(U[P],1,1,()=>{U[P]=null});return H=new Ae({props:{title:"Save changes",$$slots:{default:[Kd]},$$scope:{ctx:n}}}),H.$on("click",n[9]),it=new Ae({props:{type:"secondary",title:"Cancel",$$slots:{default:[Hd]},$$scope:{ctx:n}}}),it.$on("click",n[10]),{c(){t=ot("div"),e=ot("h3"),e.textContent=r,i=B(),s=ot("span"),s.textContent=o,a=B(),lt(u.$$.fragment),c=B(),h=ot("span"),h.textContent=d,f=B(),lt(y.$$.fragment),E=B(),I=ot("span"),I.textContent=x,j=B(),lt(F.$$.fragment),tt=B(),Q=ot("ul");for(let P=0;P<U.length;P+=1)U[P].c();yt=B(),lt(H.$$.fragment),Rt=B(),lt(it.$$.fragment),this.h()},l(P){t=at(P,"DIV",{class:!0});var m=zt(t);e=at(m,"H3",{"data-svelte-h":!0}),se(e)!=="svelte-1q4lkkx"&&(e.textContent=r),i=z(m),s=at(m,"SPAN",{class:!0,"data-svelte-h":!0}),se(s)!=="svelte-15ueaex"&&(s.textContent=o),a=z(m),ct(u.$$.fragment,m),c=z(m),h=at(m,"SPAN",{class:!0,"data-svelte-h":!0}),se(h)!=="svelte-rmspr8"&&(h.textContent=d),f=z(m),ct(y.$$.fragment,m),E=z(m),I=at(m,"SPAN",{class:!0,"data-svelte-h":!0}),se(I)!=="svelte-1ripwej"&&(I.textContent=x),j=z(m),ct(F.$$.fragment,m),tt=z(m),Q=at(m,"UL",{class:!0});var C=zt(Q);for(let st=0;st<U.length;st+=1)U[st].l(C);C.forEach(D),yt=z(m),ct(H.$$.fragment,m),Rt=z(m),ct(it.$$.fragment,m),m.forEach(D),this.h()},h(){J(s,"class","svelte-1hhm2px"),J(h,"class","svelte-1hhm2px"),J(I,"class","svelte-1hhm2px"),J(Q,"class","svelte-1hhm2px"),J(t,"class","svelte-1hhm2px")},m(P,m){et(P,t,m),V(t,e),V(t,i),V(t,s),V(t,a),ht(u,t,null),V(t,c),V(t,h),V(t,f),ht(y,t,null),V(t,E),V(t,I),V(t,j),ht(F,t,null),V(t,tt),V(t,Q);for(let C=0;C<U.length;C+=1)U[C]&&U[C].m(Q,null);V(t,yt),ht(H,t,null),V(t,Rt),ht(it,t,null),Pt=!0},p(P,m){const C={};!l&&m&2&&(l=!0,C.value=P[1].name,xe(()=>l=!1)),u.$set(C);const st={};if(!R&&m&2&&(R=!0,st.value=P[1].description,xe(()=>R=!1)),y.$set(st),m&2){te=Cn(P[1].tags);let Y;for(Y=0;Y<te.length;Y+=1){const le=Ha(P,te,Y);U[Y]?(U[Y].p(le,m),$(U[Y],1)):(U[Y]=Qa(le),U[Y].c(),$(U[Y],1),U[Y].m(Q,null))}for(yi(),Y=te.length;Y<U.length;Y+=1)ke(Y);vi()}const Yt={};m&131072&&(Yt.$$scope={dirty:m,ctx:P}),H.$set(Yt);const ut={};m&131072&&(ut.$$scope={dirty:m,ctx:P}),it.$set(ut)},i(P){if(!Pt){$(u.$$.fragment,P),$(y.$$.fragment,P),$(F.$$.fragment,P);for(let m=0;m<te.length;m+=1)$(U[m]);$(H.$$.fragment,P),$(it.$$.fragment,P),Pt=!0}},o(P){K(u.$$.fragment,P),K(y.$$.fragment,P),K(F.$$.fragment,P),U=U.filter(Boolean);for(let m=0;m<U.length;m+=1)K(U[m]);K(H.$$.fragment,P),K(it.$$.fragment,P),Pt=!1},d(P){P&&D(t),dt(u),dt(y),dt(F),yo(U,P),dt(H),dt(it)}}}function Yd(n){let t,e,r;function i(o){n[11](o)}let s={$$slots:{default:[Qd]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.dialog=n[0]),t=new Ad({props:s}),Le.push(()=>Fe(t,"dialog",i)),t.$on("close",n[12]),{c(){lt(t.$$.fragment)},l(o){ct(t.$$.fragment,o)},m(o,a){ht(t,o,a),r=!0},p(o,[a]){const u={};a&131075&&(u.$$scope={dirty:a,ctx:o}),!e&&a&1&&(e=!0,u.dialog=o[0],xe(()=>e=!1)),t.$set(u)},i(o){r||($(t.$$.fragment,o),r=!0)},o(o){K(t.$$.fragment,o),r=!1},d(o){dt(t,o)}}}function Xd(n,t,e){let{dialog:r}=t,{supertag:i}=t;const s=gl(),o=()=>s("edit",{oldName:i.name,newSupertag:a});let a={...i,tags:[...i.tags]};function u(I){n.$$.not_equal(a.name,I)&&(a.name=I,e(1,a))}function l(I){n.$$.not_equal(a.description,I)&&(a.description=I,e(1,a))}const c=I=>{e(1,a.tags=[...a.tags,{modifier:I.detail.modifier,name:I.detail.label}],a)},h=I=>{a.tags.splice(I,1),e(1,a.tags=[...a.tags],a)},d=(I,x)=>{e(1,a.tags[I].modifier=Sd(x.modifier),a)},f=()=>{o(),r.close()},y=()=>r.close();function R(I){r=I,e(0,r)}function E(I){_i.call(this,n,I)}return n.$$set=I=>{"dialog"in I&&e(0,r=I.dialog),"supertag"in I&&e(3,i=I.supertag)},[r,a,o,i,u,l,c,h,d,f,y,R,E]}class Jd extends Gi{constructor(t){super(),Wi(this,t,Xd,Yd,zi,{dialog:0,supertag:3})}}function Ya(n,t,e){const r=n.slice();return r[10]=t[e],r}function Xa(n){let t,e;return t=new yl({props:{tag:n[10]}}),{c(){lt(t.$$.fragment)},l(r){ct(t.$$.fragment,r)},m(r,i){ht(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.tag=r[10]),t.$set(s)},i(r){e||($(t.$$.fragment,r),e=!0)},o(r){K(t.$$.fragment,r),e=!1},d(r){dt(t,r)}}}function Zd(n){let t,e,r=n[0].name+"",i,s,o,a=Object.keys(n[0].tags).length+"",u,l,c,h,d,f,y,R,E=(n[0].description||n[0].name)+"",I,x,j,F,tt,Q,yt,H,Rt,it,Pt,wt,T=Cn(n[0].tags),G=[];for(let m=0;m<T.length;m+=1)G[m]=Xa(Ya(n,T,m));const Zt=m=>K(G[m],1,1,()=>{G[m]=null});function te(m){n[6](m)}let U={title:"Delete Supertag",warning:"Are you sure? You will not be able to undo it.",labelCancel:"No, keep it!",labelConfirm:"Yes, delete it."};n[1]!==void 0&&(U.dialog=n[1]),tt=new ai({props:U}),Le.push(()=>Fe(tt,"dialog",te)),tt.$on("confirm",n[7]);function ke(m){n[8](m)}let P={supertag:n[0]};return n[2]!==void 0&&(P.dialog=n[2]),H=new Jd({props:P}),Le.push(()=>Fe(H,"dialog",ke)),H.$on("edit",n[9]),{c(){t=ot("li"),e=ot("h3"),i=Wt(r),s=B(),o=ot("small"),u=Wt(a),l=Wt(" tags"),c=B(),h=ot("button"),d=B(),f=ot("button"),y=B(),R=ot("span"),I=Wt(E),x=B(),j=ot("ol");for(let m=0;m<G.length;m+=1)G[m].c();F=B(),lt(tt.$$.fragment),yt=B(),lt(H.$$.fragment),this.h()},l(m){t=at(m,"LI",{class:!0});var C=zt(t);e=at(C,"H3",{class:!0});var st=zt(e);i=Kt(st,r),st.forEach(D),s=z(C),o=at(C,"SMALL",{class:!0});var Yt=zt(o);u=Kt(Yt,a),l=Kt(Yt," tags"),Yt.forEach(D),c=z(C),h=at(C,"BUTTON",{type:!0,class:!0}),zt(h).forEach(D),d=z(C),f=at(C,"BUTTON",{type:!0,class:!0}),zt(f).forEach(D),y=z(C),R=at(C,"SPAN",{class:!0});var ut=zt(R);I=Kt(ut,E),ut.forEach(D),x=z(C),j=at(C,"OL",{class:!0});var Y=zt(j);for(let le=0;le<G.length;le+=1)G[le].l(Y);Y.forEach(D),C.forEach(D),F=z(m),ct(tt.$$.fragment,m),yt=z(m),ct(H.$$.fragment,m),this.h()},h(){J(e,"class","svelte-1u6eufx"),J(o,"class","svelte-1u6eufx"),J(h,"type","button"),J(h,"class","codicon codicon-edit svelte-1u6eufx"),J(f,"type","button"),J(f,"class","codicon codicon-close svelte-1u6eufx"),J(R,"class","svelte-1u6eufx"),J(j,"class","svelte-1u6eufx"),J(t,"class","svelte-1u6eufx")},m(m,C){et(m,t,C),V(t,e),V(e,i),V(t,s),V(t,o),V(o,u),V(o,l),V(t,c),V(t,h),V(t,d),V(t,f),V(t,y),V(t,R),V(R,I),V(t,x),V(t,j);for(let st=0;st<G.length;st+=1)G[st]&&G[st].m(j,null);et(m,F,C),ht(tt,m,C),et(m,yt,C),ht(H,m,C),it=!0,Pt||(wt=[mi(h,"click",n[4]),mi(f,"click",n[5])],Pt=!0)},p(m,[C]){if((!it||C&1)&&r!==(r=m[0].name+"")&&oi(i,r),(!it||C&1)&&a!==(a=Object.keys(m[0].tags).length+"")&&oi(u,a),(!it||C&1)&&E!==(E=(m[0].description||m[0].name)+"")&&oi(I,E),C&1){T=Cn(m[0].tags);let ut;for(ut=0;ut<T.length;ut+=1){const Y=Ya(m,T,ut);G[ut]?(G[ut].p(Y,C),$(G[ut],1)):(G[ut]=Xa(Y),G[ut].c(),$(G[ut],1),G[ut].m(j,null))}for(yi(),ut=T.length;ut<G.length;ut+=1)Zt(ut);vi()}const st={};!Q&&C&2&&(Q=!0,st.dialog=m[1],xe(()=>Q=!1)),tt.$set(st);const Yt={};C&1&&(Yt.supertag=m[0]),!Rt&&C&4&&(Rt=!0,Yt.dialog=m[2],xe(()=>Rt=!1)),H.$set(Yt)},i(m){if(!it){for(let C=0;C<T.length;C+=1)$(G[C]);$(tt.$$.fragment,m),$(H.$$.fragment,m),it=!0}},o(m){G=G.filter(Boolean);for(let C=0;C<G.length;C+=1)K(G[C]);K(tt.$$.fragment,m),K(H.$$.fragment,m),it=!1},d(m){m&&(D(t),D(F),D(yt)),yo(G,m),dt(tt,m),dt(H,m),Pt=!1,fl(wt)}}}function tf(n,t,e){const r=gl();let{supertag:i}=t,s,o;const a=()=>{o.showModal(),er("dialog")},u=()=>{s.showModal(),er("dialog")};function l(f){s=f,e(1,s)}const c=()=>r("remove",i);function h(f){o=f,e(2,o)}function d(f){_i.call(this,n,f)}return n.$$set=f=>{"supertag"in f&&e(0,i=f.supertag)},[i,s,o,r,a,u,l,c,h,d]}class ef extends Gi{constructor(t){super(),Wi(this,t,tf,Zd,zi,{supertag:0})}}function Eo(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function vl(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const nf=vl,Tl=new To("auth","Firebase",vl());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ei=new _l("@firebase/auth");function rf(n,...t){Ei.logLevel<=ce.WARN&&Ei.warn(`Auth (${xn}): ${n}`,...t)}function ui(n,...t){Ei.logLevel<=ce.ERROR&&Ei.error(`Auth (${xn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,...t){throw Io(n,...t)}function ge(n,...t){return Io(n,...t)}function El(n,t,e){const r=Object.assign(Object.assign({},nf()),{[t]:e});return new To("auth","Firebase",r).create(t,{appName:n.name})}function sf(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ye(n,"argument-error"),El(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Io(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return Tl.create(n,...t)}function M(n,t,...e){if(!n)throw Io(t,...e)}function Ee(n){const t="INTERNAL ASSERTION FAILED: "+n;throw ui(t),new Error(t)}function Re(n,t){n||Ee(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ws(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function of(){return Ja()==="http:"||Ja()==="https:"}function Ja(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function af(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(of()||Dd()||"connection"in navigator)?navigator.onLine:!0}function uf(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Re(e>t,"Short delay should be less than long delay!"),this.isMobile=kd()||Vd()}get(){return af()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wo(n,t){Re(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cf=new Sr(3e4,6e4);function Ao(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Fn(n,t,e,r,i={}){return wl(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Pr(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Il.fetch()(Al(n,n.config.apiHost,e,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function wl(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},lf),t);try{const i=new df(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Xr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Xr(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Xr(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Xr(n,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw El(n,c,l);ye(n,c)}}catch(i){if(i instanceof Ki)throw i;ye(n,"network-request-failed",{message:String(i)})}}async function hf(n,t,e,r,i={}){const s=await Fn(n,t,e,r,i);return"mfaPendingCredential"in s&&ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Al(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?wo(n.config,i):`${n.config.apiScheme}://${i}`}class df{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),cf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Xr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=ge(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ff(n,t){return Fn(n,"POST","/v1/accounts:delete",t)}async function gf(n,t){return Fn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function nr(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function pf(n,t=!1){const e=kt(n),r=await e.getIdToken(t),i=Ro(r);M(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:nr(Ns(i.auth_time)),issuedAtTime:nr(Ns(i.iat)),expirationTime:nr(Ns(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Ns(n){return Number(n)*1e3}function Ro(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return ui("JWT malformed, contained fewer than 3 sections"),null;try{const i=Ld(e);return i?JSON.parse(i):(ui("Failed to decode base64 JWT payload"),null)}catch(i){return ui("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function mf(n){const t=Ro(n);return M(t,"internal-error"),M(typeof t.exp<"u","internal-error"),M(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function lr(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Ki&&_f(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function _f({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=nr(this.lastLoginAt),this.creationTime=nr(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ii(n){var t;const e=n.auth,r=await n.getIdToken(),i=await lr(n,gf(e,{idToken:r}));M(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?Ef(s.providerUserInfo):[],a=Tf(n.providerData,o),u=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Rl(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function vf(n){const t=kt(n);await Ii(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function Tf(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function Ef(n){return n.map(t=>{var{providerId:e}=t,r=Eo(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function If(n,t){const e=await wl(n,{},async()=>{const r=Pr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Al(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Il.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function wf(n,t){return Fn(n,"POST","/v2/accounts:revokeToken",Ao(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){M(t.idToken,"internal-error"),M(typeof t.idToken<"u","internal-error"),M(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):mf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return M(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await If(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new cr;return r&&(M(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(M(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(M(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new cr,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n,t){M(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class rn{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=Eo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new yf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Rl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await lr(this,this.stsTokenManager.getToken(this.auth,t));return M(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return pf(this,t)}reload(){return vf(this)}_assign(t){this!==t&&(M(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){M(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ii(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await lr(this,ff(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,u,l,c;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,y=(o=e.photoURL)!==null&&o!==void 0?o:void 0,R=(a=e.tenantId)!==null&&a!==void 0?a:void 0,E=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,I=(l=e.createdAt)!==null&&l!==void 0?l:void 0,x=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:j,emailVerified:F,isAnonymous:tt,providerData:Q,stsTokenManager:yt}=e;M(j&&yt,t,"internal-error");const H=cr.fromJSON(this.name,yt);M(typeof j=="string",t,"internal-error"),Ne(h,t.name),Ne(d,t.name),M(typeof F=="boolean",t,"internal-error"),M(typeof tt=="boolean",t,"internal-error"),Ne(f,t.name),Ne(y,t.name),Ne(R,t.name),Ne(E,t.name),Ne(I,t.name),Ne(x,t.name);const Rt=new rn({uid:j,auth:t,email:d,emailVerified:F,displayName:h,isAnonymous:tt,photoURL:y,phoneNumber:f,tenantId:R,stsTokenManager:H,createdAt:I,lastLoginAt:x});return Q&&Array.isArray(Q)&&(Rt.providerData=Q.map(it=>Object.assign({},it))),E&&(Rt._redirectEventId=E),Rt}static async _fromIdTokenResponse(t,e,r=!1){const i=new cr;i.updateFromServerResponse(e);const s=new rn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ii(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Za=new Map;function Ie(n){Re(n instanceof Function,"Expected a class definition");let t=Za.get(n);return t?(Re(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Za.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pl{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Pl.type="NONE";const tu=Pl;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function li(n,t,e){return`firebase:${n}:${t}:${e}`}class In{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=li(this.userKey,i.apiKey,s),this.fullPersistenceKey=li("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new In(Ie(tu),t,r);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ie(tu);const o=li(r,t.config.apiKey,t.name);let a=null;for(const l of e)try{const c=await l._get(o);if(c){const h=rn._fromJSON(t,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new In(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new In(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function eu(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(kl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Sl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(Nl(t))return"Blackberry";if(Dl(t))return"Webos";if(Po(t))return"Safari";if((t.includes("chrome/")||Cl(t))&&!t.includes("edge/"))return"Chrome";if(Vl(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Sl(n=Jt()){return/firefox\//i.test(n)}function Po(n=Jt()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Cl(n=Jt()){return/crios\//i.test(n)}function kl(n=Jt()){return/iemobile/i.test(n)}function Vl(n=Jt()){return/android/i.test(n)}function Nl(n=Jt()){return/blackberry/i.test(n)}function Dl(n=Jt()){return/webos/i.test(n)}function Hi(n=Jt()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Af(n=Jt()){var t;return Hi(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function Rf(){return Md()&&document.documentMode===10}function bl(n=Jt()){return Hi(n)||Vl(n)||Dl(n)||Nl(n)||/windows phone/i.test(n)||kl(n)}function Pf(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ol(n,t=[]){let e;switch(n){case"Browser":e=eu(Jt());break;case"Worker":e=`${eu(Jt())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${xn}/${r}`}/**
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
 */class Sf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const u=t(s);o(u)}catch(u){a(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Cf(n,t={}){return Fn(n,"GET","/v2/passwordPolicy",Ao(n,t))}/**
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
 */const kf=6;class Vf{constructor(t){var e,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:kf,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Nf{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new nu(this),this.idTokenSubscription=new nu(this),this.beforeStateQueue=new Sf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Tl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ie(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await In.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return M(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ii(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=uf()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?kt(t):null;return e&&M(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&M(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Cf(this),e=new Vf(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new To("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await wf(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ie(t)||this._popupRedirectResolver;M(e,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[Ie(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(M(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{o=!0,u()}}else{const u=t.addObserver(e);return()=>{o=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return M(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Ol(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&rf(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Qi(n){return kt(n)}class nu{constructor(t){this.auth=t,this.observer=null,this.addObserver=bd(e=>this.observer=e)}get next(){return M(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Df(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function bf(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=ge("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Df().appendChild(r)})}function Of(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mf(n,t){const e=vo(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Od(s,t??{}))return i;ye(i,"already-initialized")}return e.initialize({options:t})}function Lf(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Ie);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function xf(n,t,e){const r=Qi(n);M(r._canInitEmulator,r,"emulator-config-failed"),M(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=Ml(t),{host:o,port:a}=Ff(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||Uf()}function Ml(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Ff(n){const t=Ml(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:ru(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:ru(o)}}}function ru(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function Uf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ee("not implemented")}_getIdTokenResponse(t){return Ee("not implemented")}_linkToIdToken(t,e){return Ee("not implemented")}_getReauthenticationResolver(t){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,t){return hf(n,"POST","/v1/accounts:signInWithIdp",Ao(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $f="http://localhost";class on extends Ll{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new on(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ye("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=Eo(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new on(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return wn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,wn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wn(t,e)}buildRequest(){const t={requestUri:$f,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Pr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr extends So{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Cr{constructor(){super("facebook.com")}static credential(t){return on._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return De.credentialFromTaggedObject(t)}static credentialFromError(t){return De.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return De.credential(t.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Cr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return on._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Te.credential(e,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Cr{constructor(){super("github.com")}static credential(t){return on._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return be.credential(t.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Cr{constructor(){super("twitter.com")}static credential(t,e){return on._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Oe.credentialFromTaggedObject(t)}static credentialFromError(t){return Oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Oe.credential(e,r)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await rn._fromIdTokenResponse(t,r,i),o=iu(r);return new kn({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=iu(r);return new kn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function iu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wi extends Ki{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,wi.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new wi(t,e,r,i)}}function xl(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?wi._fromErrorAndOperation(n,s,t,r):s})}async function qf(n,t,e=!1){const r=await lr(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return kn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function jf(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await lr(n,xl(r,i,t,n),e);M(s.idToken,r,"internal-error");const o=Ro(s.idToken);M(o,r,"internal-error");const{sub:a}=o;return M(n.uid===a,r,"user-mismatch"),kn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Bf(n,t,e=!1){const r="signIn",i=await xl(n,r,t),s=await kn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zf(n,t){return kt(n).setPersistence(t)}function Gf(n,t,e,r){return kt(n).onIdTokenChanged(t,e,r)}function Wf(n,t,e){return kt(n).beforeAuthStateChanged(t,e)}function Kf(n){return kt(n).signOut()}const Ai="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fl{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ai,"1"),this.storage.removeItem(Ai),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hf(){const n=Jt();return Po(n)||Hi(n)}const Qf=1e3,Yf=10;class Ul extends Fl{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Hf()&&Pf(),this.fallbackToPolling=bl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Rf()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Yf):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Qf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}Ul.type="LOCAL";const $l=Ul;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends Fl{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}ql.type="SESSION";const jl=ql;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Yi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,s)),u=await Xf(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Yi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Co(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Co("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return window}function Zf(n){pe().location.href=n}/**
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
 */function Bl(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function tg(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function eg(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function ng(){return Bl()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zl="firebaseLocalStorageDb",rg=1,Ri="firebaseLocalStorage",Gl="fbase_key";class kr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Xi(n,t){return n.transaction([Ri],t?"readwrite":"readonly").objectStore(Ri)}function ig(){const n=indexedDB.deleteDatabase(zl);return new kr(n).toPromise()}function Ks(){const n=indexedDB.open(zl,rg);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(Ri,{keyPath:Gl})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(Ri)?t(r):(r.close(),await ig(),t(await Ks()))})})}async function su(n,t,e){const r=Xi(n,!0).put({[Gl]:t,value:e});return new kr(r).toPromise()}async function sg(n,t){const e=Xi(n,!1).get(t),r=await new kr(e).toPromise();return r===void 0?null:r.value}function ou(n,t){const e=Xi(n,!0).delete(t);return new kr(e).toPromise()}const og=800,ag=3;class Wl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Ks(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>ag)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Bl()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Yi._getInstance(ng()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await tg(),!this.activeServiceWorker)return;this.sender=new Jf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||eg()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Ks();return await su(t,Ai,"1"),await ou(t,Ai),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>su(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>sg(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>ou(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Xi(i,!1).getAll();return new kr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),og)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Wl.type="LOCAL";const ug=Wl;new Sr(3e4,6e4);/**
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
 */function Kl(n,t){return t?Ie(t):(M(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ko extends Ll{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return wn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return wn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function lg(n){return Bf(n.auth,new ko(n),n.bypassAuthState)}function cg(n){const{auth:t,user:e}=n;return M(e,t,"internal-error"),jf(e,new ko(n),n.bypassAuthState)}async function hg(n){const{auth:t,user:e}=n;return M(e,t,"internal-error"),qf(e,new ko(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hl{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return lg;case"linkViaPopup":case"linkViaRedirect":return hg;case"reauthViaPopup":case"reauthViaRedirect":return cg;default:ye(this.auth,"internal-error")}}resolve(t){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg=new Sr(2e3,1e4);async function fg(n,t,e){const r=Qi(n);sf(n,t,So);const i=Kl(r,e);return new Je(r,"signInViaPopup",t,i).executeNotNull()}class Je extends Hl{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Je.currentPopupAction&&Je.currentPopupAction.cancel(),Je.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return M(t,this.auth,"internal-error"),t}async onExecution(){Re(this.filter.length===1,"Popup operations only handle one event");const t=Co();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Je.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,dg.get())};t()}}Je.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gg="pendingRedirect",ci=new Map;class pg extends Hl{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=ci.get(this.auth._key());if(!t){try{const r=await mg(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}ci.set(this.auth._key(),t)}return this.bypassAuthState||ci.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function mg(n,t){const e=vg(t),r=yg(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function _g(n,t){ci.set(n._key(),t)}function yg(n){return Ie(n._redirectPersistence)}function vg(n){return li(gg,n.config.apiKey,n.name)}async function Tg(n,t,e=!1){const r=Qi(n),i=Kl(r,t),o=await new pg(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eg=10*60*1e3;class Ig{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!wg(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Ql(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(ge(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=Eg&&this.cachedEventUids.clear(),this.cachedEventUids.has(au(t))}saveEventToCache(t){this.cachedEventUids.add(au(t)),this.lastProcessedEventTime=Date.now()}}function au(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Ql({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function wg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Ql(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ag(n,t={}){return Fn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Pg=/^https?/;async function Sg(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Ag(n);for(const e of t)try{if(Cg(e))return}catch{}ye(n,"unauthorized-domain")}function Cg(n){const t=Ws(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Pg.test(e))return!1;if(Rg.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const kg=new Sr(3e4,6e4);function uu(){const n=pe().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Vg(n){return new Promise((t,e)=>{var r,i,s;function o(){uu(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{uu(),e(ge(n,"network-request-failed"))},timeout:kg.get()})}if(!((i=(r=pe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=pe().gapi)===null||s===void 0)&&s.load)o();else{const a=Of("iframefcb");return pe()[a]=()=>{gapi.load?o():e(ge(n,"network-request-failed"))},bf(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>e(u))}}).catch(t=>{throw hi=null,t})}let hi=null;function Ng(n){return hi=hi||Vg(n),hi}/**
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
 */const Dg=new Sr(5e3,15e3),bg="__/auth/iframe",Og="emulator/auth/iframe",Mg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Lg=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function xg(n){const t=n.config;M(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?wo(t,Og):`https://${n.config.authDomain}/${bg}`,r={apiKey:t.apiKey,appName:n.name,v:xn},i=Lg.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Pr(r).slice(1)}`}async function Fg(n){const t=await Ng(n),e=pe().gapi;return M(e,n,"internal-error"),t.open({where:document.body,url:xg(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Mg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ge(n,"network-request-failed"),a=pe().setTimeout(()=>{s(o)},Dg.get());function u(){pe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const Ug={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},$g=500,qg=600,jg="_blank",Bg="http://localhost";class lu{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function zg(n,t,e,r=$g,i=qg){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},Ug),{width:r.toString(),height:i.toString(),top:s,left:o}),l=Jt().toLowerCase();e&&(a=Cl(l)?jg:e),Sl(l)&&(t=t||Bg,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,y])=>`${d}${f}=${y},`,"");if(Af(l)&&a!=="_self")return Gg(t||"",a),new lu(null);const h=window.open(t||"",a,c);M(h,n,"popup-blocked");try{h.focus()}catch{}return new lu(h)}function Gg(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const Wg="__/auth/handler",Kg="emulator/auth/handler",Hg=encodeURIComponent("fac");async function cu(n,t,e,r,i,s){M(n.config.authDomain,n,"auth-domain-config-required"),M(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:xn,eventId:i};if(t instanceof So){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",xd(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(t instanceof Cr){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await n._getAppCheckToken(),l=u?`#${Hg}=${encodeURIComponent(u)}`:"";return`${Qg(n)}?${Pr(a).slice(1)}${l}`}function Qg({config:n}){return n.emulator?wo(n,Kg):`https://${n.authDomain}/${Wg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ds="webStorageSupport";class Yg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=jl,this._completeRedirectFn=Tg,this._overrideRedirectResult=_g}async _openPopup(t,e,r,i){var s;Re((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await cu(t,e,r,Ws(),i);return zg(t,o,Co())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await cu(t,e,r,Ws(),i);return Zf(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Re(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Fg(t),r=new Ig(t);return e.register("authEvent",i=>(M(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Ds,{type:Ds},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Ds];o!==void 0&&e(!!o),ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Sg(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return bl()||Po()||Hi()}}const Xg=Yg;var hu="@firebase/auth",du="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){M(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function tp(n){zs(new Gs("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;M(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ol(n)},l=new Nf(r,i,s,u);return Lf(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),zs(new Gs("auth-internal",t=>{const e=Qi(t.getProvider("auth").getImmediate());return(r=>new Jg(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ti(hu,du,Zg(n)),Ti(hu,du,"esm2017")}/**
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
 */const ep=5*60,np=pl("authIdTokenMaxAge")||ep;let fu=null;const rp=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>np)return;const i=e==null?void 0:e.token;fu!==i&&(fu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ze(n=ml()){const t=vo(n,"auth");if(t.isInitialized())return t.getImmediate();const e=Mf(n,{popupRedirectResolver:Xg,persistence:[ug,$l,jl]}),r=pl("authTokenSyncURL");if(r){const s=rp(r);Wf(e,s,()=>s(e.currentUser)),Gf(e,o=>s(o))}const i=Nd("auth");return i&&xf(e,`http://${i}`),e}tp("Browser");let ip=new Te;zf(ze(),$l);const sp=async()=>fg(ze(),ip),op=async()=>Kf(ze());var ap=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Vo=Vo||{},b=ap||self;function Ji(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function Vr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function up(n){return Object.prototype.hasOwnProperty.call(n,bs)&&n[bs]||(n[bs]=++lp)}var bs="closure_uid_"+(1e9*Math.random()>>>0),lp=0;function cp(n,t,e){return n.call.apply(n.bind,arguments)}function hp(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function Ut(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?Ut=cp:Ut=hp,Ut.apply(null,arguments)}function Jr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Nt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ge(){this.s=this.s,this.o=this.o}var dp=0;Ge.prototype.s=!1;Ge.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),dp!=0)&&up(this)};Ge.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Yl=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function No(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function gu(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Ji(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function $t(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}$t.prototype.h=function(){this.defaultPrevented=!0};var fp=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{b.addEventListener("test",()=>{},t),b.removeEventListener("test",()=>{},t)}catch{}return n}();function hr(n){return/^[\s\xa0]*$/.test(n)}function Zi(){var n=b.navigator;return n&&(n=n.userAgent)?n:""}function he(n){return Zi().indexOf(n)!=-1}function Do(n){return Do[" "](n),n}Do[" "]=function(){};function gp(n,t){var e=om;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var pp=he("Opera"),Vn=he("Trident")||he("MSIE"),Xl=he("Edge"),Hs=Xl||Vn,Jl=he("Gecko")&&!(Zi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge"))&&!(he("Trident")||he("MSIE"))&&!he("Edge"),mp=Zi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge");function Zl(){var n=b.document;return n?n.documentMode:void 0}var Qs;t:{var Os="",Ms=function(){var n=Zi();if(Jl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Xl)return/Edge\/([\d\.]+)/.exec(n);if(Vn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(mp)return/WebKit\/(\S+)/.exec(n);if(pp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(Ms&&(Os=Ms?Ms[1]:""),Vn){var Ls=Zl();if(Ls!=null&&Ls>parseFloat(Os)){Qs=String(Ls);break t}}Qs=Os}var Ys;if(b.document&&Vn){var pu=Zl();Ys=pu||parseInt(Qs,10)||void 0}else Ys=void 0;var _p=Ys;function dr(n,t){if($t.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Jl){t:{try{Do(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:yp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&dr.$.h.call(this)}}Nt(dr,$t);var yp={2:"touch",3:"pen",4:"mouse"};dr.prototype.h=function(){dr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Nr="closure_listenable_"+(1e6*Math.random()|0),vp=0;function Tp(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++vp,this.fa=this.ia=!1}function ts(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function bo(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function Ep(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function tc(n){const t={};for(const e in n)t[e]=n[e];return t}const mu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function ec(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<mu.length;s++)e=mu[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function es(n){this.src=n,this.g={},this.h=0}es.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Js(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new Tp(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Xs(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Yl(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(ts(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Js(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Oo="closure_lm_"+(1e6*Math.random()|0),xs={};function nc(n,t,e,r,i){if(r&&r.once)return ic(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)nc(n,t[s],e,r,i);return null}return e=xo(e),n&&n[Nr]?n.O(t,e,Vr(r)?!!r.capture:!!r,i):rc(n,t,e,!1,r,i)}function rc(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=Vr(i)?!!i.capture:!!i,a=Lo(n);if(a||(n[Oo]=a=new es(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Ip(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)fp||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(oc(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Ip(){function n(e){return t.call(n.src,n.listener,e)}const t=wp;return n}function ic(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)ic(n,t[s],e,r,i);return null}return e=xo(e),n&&n[Nr]?n.P(t,e,Vr(r)?!!r.capture:!!r,i):rc(n,t,e,!0,r,i)}function sc(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)sc(n,t[s],e,r,i);else r=Vr(r)?!!r.capture:!!r,e=xo(e),n&&n[Nr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Js(s,e,r,i),-1<e&&(ts(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Lo(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Js(t,e,r,i)),(e=-1<n?t[n]:null)&&Mo(e))}function Mo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Nr])Xs(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(oc(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Lo(t))?(Xs(e,n),e.h==0&&(e.src=null,t[Oo]=null)):ts(n)}}}function oc(n){return n in xs?xs[n]:xs[n]="on"+n}function wp(n,t){if(n.fa)n=!0;else{t=new dr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&Mo(n),n=e.call(r,t)}return n}function Lo(n){return n=n[Oo],n instanceof es?n:null}var Fs="__closure_events_fn_"+(1e9*Math.random()>>>0);function xo(n){return typeof n=="function"?n:(n[Fs]||(n[Fs]=function(t){return n.handleEvent(t)}),n[Fs])}function Vt(){Ge.call(this),this.i=new es(this),this.S=this,this.J=null}Nt(Vt,Ge);Vt.prototype[Nr]=!0;Vt.prototype.removeEventListener=function(n,t,e,r){sc(this,n,t,e,r)};function Mt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new $t(t,n);else if(t instanceof $t)t.target=t.target||n;else{var i=t;t=new $t(r,n),ec(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Zr(o,r,!0,t)&&i}if(o=t.g=n,i=Zr(o,r,!0,t)&&i,i=Zr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Zr(o,r,!1,t)&&i}Vt.prototype.N=function(){if(Vt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)ts(e[r]);delete n.g[t],n.h--}}this.J=null};Vt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Vt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Zr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Xs(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Fo=b.JSON.stringify;class Ap{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function Rp(){var n=Uo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Pp{constructor(){this.h=this.g=null}add(t,e){const r=ac.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var ac=new Ap(()=>new Sp,n=>n.reset());class Sp{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Cp(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function kp(n){b.setTimeout(()=>{throw n},0)}let fr,gr=!1,Uo=new Pp,uc=()=>{const n=b.Promise.resolve(void 0);fr=()=>{n.then(Vp)}};var Vp=()=>{for(var n;n=Rp();){try{n.h.call(n.g)}catch(e){kp(e)}var t=ac;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}gr=!1};function ns(n,t){Vt.call(this),this.h=n||1,this.g=t||b,this.j=Ut(this.qb,this),this.l=Date.now()}Nt(ns,Vt);v=ns.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Mt(this,"tick"),this.ga&&($o(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function $o(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){ns.$.N.call(this),$o(this),delete this.g};function qo(n,t,e){if(typeof n=="function")e&&(n=Ut(n,e));else if(n&&typeof n.handleEvent=="function")n=Ut(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(n,t||0)}function lc(n){n.g=qo(()=>{n.g=null,n.i&&(n.i=!1,lc(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class Np extends Ge{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:lc(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function pr(n){Ge.call(this),this.h=n,this.g={}}Nt(pr,Ge);var _u=[];function cc(n,t,e,r){Array.isArray(e)||(e&&(_u[0]=e.toString()),e=_u);for(var i=0;i<e.length;i++){var s=nc(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function hc(n){bo(n.g,function(t,e){this.g.hasOwnProperty(e)&&Mo(t)},n),n.g={}}pr.prototype.N=function(){pr.$.N.call(this),hc(this)};pr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function rs(){this.g=!0}rs.prototype.Ea=function(){this.g=!1};function Dp(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function bp(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Tn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+Mp(n,e)+(r?" "+r:"")})}function Op(n,t){n.info(function(){return"TIMEOUT: "+t})}rs.prototype.info=function(){};function Mp(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Fo(e)}catch{return t}}var hn={},yu=null;function is(){return yu=yu||new Vt}hn.Ta="serverreachability";function dc(n){$t.call(this,hn.Ta,n)}Nt(dc,$t);function mr(n){const t=is();Mt(t,new dc(t))}hn.STAT_EVENT="statevent";function fc(n,t){$t.call(this,hn.STAT_EVENT,n),this.stat=t}Nt(fc,$t);function Ht(n){const t=is();Mt(t,new fc(t,n))}hn.Ua="timingevent";function gc(n,t){$t.call(this,hn.Ua,n),this.size=t}Nt(gc,$t);function Dr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){n()},t)}var ss={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},pc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function jo(){}jo.prototype.h=null;function vu(n){return n.h||(n.h=n.i())}function mc(){}var br={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function Bo(){$t.call(this,"d")}Nt(Bo,$t);function zo(){$t.call(this,"c")}Nt(zo,$t);var Zs;function os(){}Nt(os,jo);os.prototype.g=function(){return new XMLHttpRequest};os.prototype.i=function(){return{}};Zs=new os;function Or(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new pr(this),this.P=Lp,n=Hs?125:void 0,this.V=new ns(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new _c}function _c(){this.i=null,this.g="",this.h=!1}var Lp=45e3,to={},Pi={};v=Or.prototype;v.setTimeout=function(n){this.P=n};function eo(n,t,e){n.L=1,n.v=us(Pe(t)),n.s=e,n.S=!0,yc(n,null)}function yc(n,t){n.G=Date.now(),Mr(n),n.A=Pe(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Pc(e.i,"t",r),n.C=0,e=n.l.J,n.h=new _c,n.g=Kc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new Np(Ut(n.Pa,n,n.g),n.O)),cc(n.U,n.g,"readystatechange",n.nb),t=n.I?tc(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),mr(),Dp(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&de(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const c=de(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Hs||this.g&&(this.h.h||this.g.ja()||wu(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?mr(3):mr(2)),as(this);var e=this.g.da();this.ca=e;e:if(vc(this)){var r=wu(this.g);n="";var i=r.length,s=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ze(this),rr(this);var o="";break e}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,bp(this.j,this.u,this.A,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!hr(a)){var l=a;break e}}l=null}if(e=l)Tn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,no(this,e);else{this.i=!1,this.o=3,Ht(12),Ze(this),rr(this);break t}}this.S?(Tc(this,c,o),Hs&&this.i&&c==3&&(cc(this.U,this.V,"tick",this.mb),this.V.start())):(Tn(this.j,this.m,o,null),no(this,o)),c==4&&Ze(this),this.i&&!this.J&&(c==4?Bc(this.l,this):(this.i=!1,Mr(this)))}else rm(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Ht(12)):(this.o=0,Ht(13)),Ze(this),rr(this)}}}catch{}finally{}};function vc(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function Tc(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=xp(n,e),i==Pi){t==4&&(n.o=4,Ht(14),r=!1),Tn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==to){n.o=4,Ht(15),Tn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Tn(n.j,n.m,i,null),no(n,i);vc(n)&&i!=Pi&&i!=to&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Ht(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Yo(t),t.M=!0,Ht(11))):(Tn(n.j,n.m,e,"[Invalid Chunked Response]"),Ze(n),rr(n))}v.mb=function(){if(this.g){var n=de(this.g),t=this.g.ja();this.C<t.length&&(as(this),Tc(this,n,t),this.i&&n!=4&&Mr(this))}};function xp(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Pi:(e=Number(t.substring(e,r)),isNaN(e)?to:(r+=1,r+e>t.length?Pi:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,Ze(this)};function Mr(n){n.Y=Date.now()+n.P,Ec(n,n.P)}function Ec(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Dr(Ut(n.lb,n),t)}function as(n){n.B&&(b.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Op(this.j,this.A),this.L!=2&&(mr(),Ht(17)),Ze(this),this.o=2,rr(this)):Ec(this,this.Y-n)};function rr(n){n.l.H==0||n.J||Bc(n.l,n)}function Ze(n){as(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,$o(n.V),hc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function no(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||ro(e.i,n))){if(!n.K&&ro(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)ki(e),hs(e);else break t;Qo(e),Ht(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Dr(Ut(e.ib,e),6e3));if(1>=kc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else tn(e,11)}else if((n.K||e.g==n)&&ki(e),!hr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(e.V=l[0],l=l[1],e.H==2)if(l[0]=="c"){e.K=l[1],e.pa=l[2];const c=l[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const h=l[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const y=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(y){var s=r.i;s.g||y.indexOf("spdy")==-1&&y.indexOf("quic")==-1&&y.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Go(s,s.h),s.h=null))}if(r.F){const R=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;R&&(r.Da=R,ft(r.I,r.F,R))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=Wc(r,r.J?r.pa:null,r.Y),o.K){Vc(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(as(a),Mr(a)),r.g=o}else qc(r);0<e.j.length&&ds(e)}else l[0]!="stop"&&l[0]!="close"||tn(e,7);else e.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?tn(e,7):Ho(e):l[0]!="noop"&&e.h&&e.h.Aa(l),e.A=0)}}mr(4)}catch{}}function Fp(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Ji(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function Up(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Ji(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Ic(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Ji(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=Up(n),r=Fp(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var wc=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function $p(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof sn){this.h=n.h,Si(this,n.j),this.s=n.s,this.g=n.g,Ci(this,n.m),this.l=n.l;var t=n.i,e=new _r;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),Tu(this,e),this.o=n.o}else n&&(t=String(n).match(wc))?(this.h=!1,Si(this,t[1]||"",!0),this.s=Xn(t[2]||""),this.g=Xn(t[3]||"",!0),Ci(this,t[4]),this.l=Xn(t[5]||"",!0),Tu(this,t[6]||"",!0),this.o=Xn(t[7]||"")):(this.h=!1,this.i=new _r(null,this.h))}sn.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Jn(t,Eu,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Jn(t,Eu,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Jn(e,e.charAt(0)=="/"?Bp:jp,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Jn(e,Gp)),n.join("")};function Pe(n){return new sn(n)}function Si(n,t,e){n.j=e?Xn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Ci(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function Tu(n,t,e){t instanceof _r?(n.i=t,Wp(n.i,n.h)):(e||(t=Jn(t,zp)),n.i=new _r(t,n.h))}function ft(n,t,e){n.i.set(t,e)}function us(n){return ft(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Xn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Jn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,qp),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function qp(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var Eu=/[#\/\?@]/g,jp=/[#\?:]/g,Bp=/[#\?]/g,zp=/[#\?@]/g,Gp=/#/g;function _r(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function We(n){n.g||(n.g=new Map,n.h=0,n.i&&$p(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=_r.prototype;v.add=function(n,t){We(this),this.i=null,n=Un(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Ac(n,t){We(n),t=Un(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function Rc(n,t){return We(n),t=Un(n,t),n.g.has(t)}v.forEach=function(n,t){We(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){We(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){We(this);let t=[];if(typeof n=="string")Rc(this,n)&&(t=t.concat(this.g.get(Un(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return We(this),this.i=null,n=Un(this,n),Rc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Pc(n,t,e){Ac(n,t),0<e.length&&(n.i=null,n.g.set(Un(n,t),No(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Un(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function Wp(n,t){t&&!n.j&&(We(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Ac(this,r),Pc(this,i,e))},n)),n.j=t}var Kp=class{constructor(n,t){this.g=n,this.map=t}};function Sc(n){this.l=n||Hp,b.PerformanceNavigationTiming?(n=b.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Hp=10;function Cc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function kc(n){return n.h?1:n.g?n.g.size:0}function ro(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Go(n,t){n.g?n.g.add(t):n.h=t}function Vc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Sc.prototype.cancel=function(){if(this.i=Nc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function Nc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return No(n.i)}var Qp=class{stringify(n){return b.JSON.stringify(n,void 0)}parse(n){return b.JSON.parse(n,void 0)}};function Yp(){this.g=new Qp}function Xp(n,t,e){const r=e||"";try{Ic(n,function(i,s){let o=i;Vr(i)&&(o=Fo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Jp(n,t){const e=new rs;if(b.Image){const r=new Image;r.onload=Jr(ti,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Jr(ti,e,r,"TestLoadImage: error",!1,t),r.onabort=Jr(ti,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Jr(ti,e,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function ti(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Lr(n){this.l=n.ec||null,this.j=n.ob||!1}Nt(Lr,jo);Lr.prototype.g=function(){return new ls(this.l,this.j)};Lr.prototype.i=function(n){return function(){return n}}({});function ls(n,t){Vt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=Wo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Nt(ls,Vt);var Wo=0;v=ls.prototype;v.open=function(n,t){if(this.readyState!=Wo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,yr(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,xr(this)),this.readyState=Wo};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,yr(this)),this.g&&(this.readyState=3,yr(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Dc(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Dc(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?xr(this):yr(this),this.readyState==3&&Dc(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,xr(this))};v.Ya=function(n){this.g&&(this.response=n,xr(this))};v.ka=function(){this.g&&xr(this)};function xr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,yr(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function yr(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(ls.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Zp=b.JSON.parse;function _t(n){Vt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=bc,this.L=this.M=!1}Nt(_t,Vt);var bc="",tm=/^https?$/i,em=["POST","PUT"];v=_t.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Zs.g(),this.C=this.u?vu(this.u):vu(Zs),this.g.onreadystatechange=Ut(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Iu(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&n instanceof b.FormData,!(0<=Yl(em,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Lc(this),0<this.B&&((this.L=nm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=Ut(this.ua,this)):this.A=qo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Iu(this,s)}};function nm(n){return Vn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof Vo<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Mt(this,"timeout"),this.abort(8))};function Iu(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Oc(n),cs(n)}function Oc(n){n.F||(n.F=!0,Mt(n,"complete"),Mt(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Mt(this,"complete"),Mt(this,"abort"),cs(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),cs(this,!0)),_t.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?Mc(this):this.kb())};v.kb=function(){Mc(this)};function Mc(n){if(n.h&&typeof Vo<"u"&&(!n.C[1]||de(n)!=4||n.da()!=2)){if(n.v&&de(n)==4)qo(n.La,0,n);else if(Mt(n,"readystatechange"),de(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(wc)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!tm.test(i?i.toLowerCase():"")}e=r}if(e)Mt(n,"complete"),Mt(n,"success");else{n.m=6;try{var s=2<de(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Oc(n)}}finally{cs(n)}}}}function cs(n,t){if(n.g){Lc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Mt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Lc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(b.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function de(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Zp(t)}};function wu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case bc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function rm(n){const t={};n=(n.g&&2<=de(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(hr(n[r]))continue;var e=Cp(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}Ep(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function xc(n){let t="";return bo(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Ko(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=xc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):ft(n,t,e))}function Kn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Fc(n){this.Ga=0,this.j=[],this.l=new rs,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,n),this.hb=Kn("retryDelaySeedMs",1e4,n),this.eb=Kn("forwardChannelMaxRetries",2,n),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Sc(n&&n.concurrentRequestLimit),this.Ja=new Yp,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Fc.prototype;v.ra=8;v.H=1;function Ho(n){if(Uc(n),n.H==3){var t=n.W++,e=Pe(n.I);if(ft(e,"SID",n.K),ft(e,"RID",t),ft(e,"TYPE","terminate"),Fr(n,e),t=new Or(n,n.l,t),t.L=2,t.v=us(Pe(e)),e=!1,b.navigator&&b.navigator.sendBeacon)try{e=b.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&b.Image&&(new Image().src=t.v,e=!0),e||(t.g=Kc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Mr(t)}Gc(n)}function hs(n){n.g&&(Yo(n),n.g.cancel(),n.g=null)}function Uc(n){hs(n),n.u&&(b.clearTimeout(n.u),n.u=null),ki(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&b.clearTimeout(n.m),n.m=null)}function ds(n){if(!Cc(n.i)&&!n.m){n.m=!0;var t=n.Na;fr||uc(),gr||(fr(),gr=!0),Uo.add(t,n),n.C=0}}function im(n,t){return kc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Dr(Ut(n.Na,n,t),zc(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new Or(this,this.l,n);let s=this.s;if(this.U&&(s?(s=tc(s),ec(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=$c(this,i,t),e=Pe(this.I),ft(e,"RID",n),ft(e,"CVER",22),this.F&&ft(e,"X-HTTP-Session-Id",this.F),Fr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(xc(s)))+"&"+t:this.o&&Ko(e,this.o,s)),Go(this.i,i),this.bb&&ft(e,"TYPE","init"),this.P?(ft(e,"$req",t),ft(e,"SID","null"),i.aa=!0,eo(i,e,null)):eo(i,e,t),this.H=2}}else this.H==3&&(n?Au(this,n):this.j.length==0||Cc(this.i)||Au(this))};function Au(n,t){var e;t?e=t.m:e=n.W++;const r=Pe(n.I);ft(r,"SID",n.K),ft(r,"RID",e),ft(r,"AID",n.V),Fr(n,r),n.o&&n.s&&Ko(r,n.o,n.s),e=new Or(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=$c(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Go(n.i,e),eo(e,r,t)}function Fr(n,t){n.na&&bo(n.na,function(e,r){ft(t,r,e)}),n.h&&Ic({},function(e,r){ft(t,r,e)})}function $c(n,t,e){e=Math.min(n.j.length,e);var r=n.h?Ut(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{Xp(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function qc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;fr||uc(),gr||(fr(),gr=!0),Uo.add(t,n),n.A=0}}function Qo(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Dr(Ut(n.Ma,n),zc(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,jc(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Dr(Ut(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Ht(10),hs(this),jc(this))};function Yo(n){n.B!=null&&(b.clearTimeout(n.B),n.B=null)}function jc(n){n.g=new Or(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Pe(n.wa);ft(t,"RID","rpc"),ft(t,"SID",n.K),ft(t,"AID",n.V),ft(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&ft(t,"TO",n.qa),ft(t,"TYPE","xmlhttp"),Fr(n,t),n.o&&n.s&&Ko(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=us(Pe(t)),e.s=null,e.S=!0,yc(e,n)}v.ib=function(){this.v!=null&&(this.v=null,hs(this),Qo(this),Ht(19))};function ki(n){n.v!=null&&(b.clearTimeout(n.v),n.v=null)}function Bc(n,t){var e=null;if(n.g==t){ki(n),Yo(n),n.g=null;var r=2}else if(ro(n.i,t))e=t.F,Vc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=is(),Mt(r,new gc(r,e)),ds(n)}else qc(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&im(n,t)||r==2&&Qo(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:tn(n,5);break;case 4:tn(n,10);break;case 3:tn(n,6);break;default:tn(n,2)}}}function zc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function tn(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=Ut(n.pb,n);e||(e=new sn("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Si(e,"https"),us(e)),Jp(e.toString(),r)}else Ht(2);n.H=0,n.h&&n.h.za(t),Gc(n),Uc(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Ht(2)):(this.l.info("Failed to ping google.com"),Ht(1))};function Gc(n){if(n.H=0,n.ma=[],n.h){const t=Nc(n.i);(t.length!=0||n.j.length!=0)&&(gu(n.ma,t),gu(n.ma,n.j),n.i.i.length=0,No(n.j),n.j.length=0),n.h.ya()}}function Wc(n,t,e){var r=e instanceof sn?Pe(e):new sn(e);if(r.g!="")t&&(r.g=t+"."+r.g),Ci(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new sn(null);r&&Si(s,r),t&&(s.g=t),i&&Ci(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&ft(r,e,t),ft(r,"VER",n.ra),Fr(n,r),r}function Kc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new _t(new Lr({ob:!0})):new _t(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Hc(){}v=Hc.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Vi(){if(Vn&&!(10<=Number(_p)))throw Error("Environmental error: no available transport.")}Vi.prototype.g=function(n,t){return new re(n,t)};function re(n,t){Vt.call(this),this.g=new Fc(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!hr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!hr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new $n(this)}Nt(re,Vt);re.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Ht(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=Wc(n,null,n.Y),ds(n)};re.prototype.close=function(){Ho(this.g)};re.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Fo(n),n=e);t.j.push(new Kp(t.fb++,n)),t.H==3&&ds(t)};re.prototype.N=function(){this.g.h=null,delete this.j,Ho(this.g),delete this.g,re.$.N.call(this)};function Qc(n){Bo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Nt(Qc,Bo);function Yc(){zo.call(this),this.status=1}Nt(Yc,zo);function $n(n){this.g=n}Nt($n,Hc);$n.prototype.Ba=function(){Mt(this.g,"a")};$n.prototype.Aa=function(n){Mt(this.g,new Qc(n))};$n.prototype.za=function(n){Mt(this.g,new Yc)};$n.prototype.ya=function(){Mt(this.g,"b")};function sm(){this.blockSize=-1}function ae(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Nt(ae,sm);ae.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function Us(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ae.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)Us(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){Us(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){Us(this,r),i=0;break}}this.h=i,this.i+=t};ae.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function rt(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var om={};function Xo(n){return-128<=n&&128>n?gp(n,function(t){return new rt([t|0],0>t?-1:0)}):new rt([n|0],0>n?-1:0)}function fe(n){if(isNaN(n)||!isFinite(n))return An;if(0>n)return bt(fe(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=io;return new rt(t,0)}function Xc(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return bt(Xc(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=fe(Math.pow(t,8)),r=An,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=fe(Math.pow(t,s)),r=r.R(s).add(fe(o))):(r=r.R(e),r=r.add(fe(o)))}return r}var io=4294967296,An=Xo(0),so=Xo(1),Ru=Xo(16777216);v=rt.prototype;v.ea=function(){if(ie(this))return-bt(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:io+r)*t,t*=io}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(we(this))return"0";if(ie(this))return"-"+bt(this).toString(n);for(var t=fe(Math.pow(n,6)),e=this,r="";;){var i=Di(e,t).g;e=Ni(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,we(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function we(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ie(n){return n.h==-1}v.X=function(n){return n=Ni(this,n),ie(n)?-1:we(n)?0:1};function bt(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new rt(e,~n.h).add(so)}v.abs=function(){return ie(this)?bt(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new rt(e,e[e.length-1]&-2147483648?-1:0)};function Ni(n,t){return n.add(bt(t))}v.R=function(n){if(we(this)||we(n))return An;if(ie(this))return ie(n)?bt(this).R(bt(n)):bt(bt(this).R(n));if(ie(n))return bt(this.R(bt(n)));if(0>this.X(Ru)&&0>n.X(Ru))return fe(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,ei(e,2*r+2*i),e[2*r+2*i+1]+=s*u,ei(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,ei(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,ei(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new rt(e,0)};function ei(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Hn(n,t){this.g=n,this.h=t}function Di(n,t){if(we(t))throw Error("division by zero");if(we(n))return new Hn(An,An);if(ie(n))return t=Di(bt(n),t),new Hn(bt(t.g),bt(t.h));if(ie(t))return t=Di(n,bt(t)),new Hn(bt(t.g),t.h);if(30<n.g.length){if(ie(n)||ie(t))throw Error("slowDivide_ only works with positive integers.");for(var e=so,r=t;0>=r.X(n);)e=Pu(e),r=Pu(r);var i=mn(e,1),s=mn(r,1);for(r=mn(r,2),e=mn(e,2);!we(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=mn(r,1),e=mn(e,1)}return t=Ni(n,i.R(t)),new Hn(i,t)}for(i=An;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=fe(e),o=s.R(t);ie(o)||0<o.X(n);)e-=r,s=fe(e),o=s.R(t);we(s)&&(s=so),i=i.add(s),n=Ni(n,o)}return new Hn(i,n)}v.gb=function(n){return Di(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new rt(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new rt(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new rt(e,this.h^n.h)};function Pu(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new rt(e,n.h)}function mn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new rt(i,n.h)}Vi.prototype.createWebChannel=Vi.prototype.g;re.prototype.send=re.prototype.u;re.prototype.open=re.prototype.m;re.prototype.close=re.prototype.close;ss.NO_ERROR=0;ss.TIMEOUT=8;ss.HTTP_ERROR=6;pc.COMPLETE="complete";mc.EventType=br;br.OPEN="a";br.CLOSE="b";br.ERROR="c";br.MESSAGE="d";Vt.prototype.listen=Vt.prototype.O;_t.prototype.listenOnce=_t.prototype.P;_t.prototype.getLastError=_t.prototype.Sa;_t.prototype.getLastErrorCode=_t.prototype.Ia;_t.prototype.getStatus=_t.prototype.da;_t.prototype.getResponseJson=_t.prototype.Wa;_t.prototype.getResponseText=_t.prototype.ja;_t.prototype.send=_t.prototype.ha;_t.prototype.setWithCredentials=_t.prototype.Oa;ae.prototype.digest=ae.prototype.l;ae.prototype.reset=ae.prototype.reset;ae.prototype.update=ae.prototype.j;rt.prototype.add=rt.prototype.add;rt.prototype.multiply=rt.prototype.R;rt.prototype.modulo=rt.prototype.gb;rt.prototype.compare=rt.prototype.X;rt.prototype.toNumber=rt.prototype.ea;rt.prototype.toString=rt.prototype.toString;rt.prototype.getBits=rt.prototype.D;rt.fromNumber=fe;rt.fromString=Xc;var am=function(){return new Vi},um=function(){return is()},$s=ss,lm=pc,cm=hn,Su={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},hm=Lr,ni=mc,dm=_t,fm=ae,Rn=rt;const Cu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ft{constructor(t){this.uid=t}isAuthenticated(){return this.uid!=null}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}Ft.UNAUTHENTICATED=new Ft(null),Ft.GOOGLE_CREDENTIALS=new Ft("google-credentials-uid"),Ft.FIRST_PARTY=new Ft("first-party-uid"),Ft.MOCK_USER=new Ft("mock-user");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qn="10.5.2";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const an=new _l("@firebase/firestore");function Qn(){return an.logLevel}function A(n,...t){if(an.logLevel<=ce.DEBUG){const e=t.map(Jo);an.debug(`Firestore (${qn}): ${n}`,...e)}}function Se(n,...t){if(an.logLevel<=ce.ERROR){const e=t.map(Jo);an.error(`Firestore (${qn}): ${n}`,...e)}}function Nn(n,...t){if(an.logLevel<=ce.WARN){const e=t.map(Jo);an.warn(`Firestore (${qn}): ${n}`,...e)}}function Jo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function k(n="Unexpected state"){const t=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw Se(t),new Error(t)}function nt(n,t){n||k()}function L(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Ki{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class gm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ft.UNAUTHENTICATED))}shutdown(){}}class pm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class mm{constructor(t){this.t=t,this.currentUser=Ft.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{A("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(A("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(A("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(nt(typeof r.accessToken=="string"),new Jc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return nt(t===null||typeof t=="string"),new Ft(t)}}class _m{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ft.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class ym{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new _m(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ft.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class vm{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class Tm{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&A("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,A("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{A("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):A("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(nt(typeof e.token=="string"),this.R=e.token,new vm(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Em(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=Em(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function X(n,t){return n<t?-1:n>t?1:0}function Dn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class At{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return At.fromMillis(Date.now())}static fromDate(t){return At.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new At(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new At(0,0))}static max(){return new N(new At(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vr{constructor(t,e,r){e===void 0?e=0:e>t.length&&k(),r===void 0?r=t.length-e:r>t.length-e&&k(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return vr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof vr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class gt extends vr{construct(t,e,r){return new gt(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new w(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new gt(e)}static emptyPath(){return new gt([])}}const Im=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Ot extends vr{construct(t,e,r){return new Ot(t,e,r)}static isValidIdentifier(t){return Im.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Ot.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Ot(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new w(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new w(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new w(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Ot(e)}static emptyPath(){return new Ot([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.path=t}static fromPath(t){return new S(gt.fromString(t))}static fromName(t){return new S(gt.fromString(t).popFirst(5))}static empty(){return new S(gt.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&gt.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return gt.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new S(new gt(t.slice()))}}function wm(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=N.fromTimestamp(r===1e9?new At(e+1,0):new At(e,r));return new $e(i,S.empty(),t)}function Am(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $e(N.min(),S.empty(),-1)}static max(){return new $e(N.max(),S.empty(),-1)}}function Rm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=S.comparator(n.documentKey,t.documentKey),e!==0?e:X(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pm="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Sm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ur(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Pm)throw n;A("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&k(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof p?e:p.resolve(e)}catch(e){return p.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):p.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):p.reject(e)}static resolve(t){return new p((e,r)=>{e(t)})}static reject(t){return new p((e,r)=>{r(t)})}static waitFor(t){return new p((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=p.resolve(!1);for(const r of t)e=e.next(i=>i?p.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new p((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;e(t[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new p((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function $r(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Zo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Zo._e=-1;function qr(n){return n==null}function bi(n){return n===0&&1/n==-1/0}function Cm(n){return typeof n=="number"&&Number.isInteger(n)&&!bi(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ku(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function dn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function th(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mt{constructor(t,e){this.comparator=t,this.root=e||Dt.EMPTY}insert(t,e){return new mt(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,Dt.BLACK,null,null))}remove(t){return new mt(this.comparator,this.root.remove(t,this.comparator).copy(null,null,Dt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ri(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ri(this.root,t,this.comparator,!1)}getReverseIterator(){return new ri(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ri(this.root,t,this.comparator,!0)}}class ri{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class Dt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??Dt.RED,this.left=i??Dt.EMPTY,this.right=s??Dt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new Dt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return Dt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return Dt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,Dt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,Dt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw k();const t=this.left.check();if(t!==this.right.check())throw k();return t+(this.isRed()?0:1)}}Dt.EMPTY=null,Dt.RED=!0,Dt.BLACK=!1;Dt.EMPTY=new class{constructor(){this.size=0}get key(){throw k()}get value(){throw k()}get color(){throw k()}get left(){throw k()}get right(){throw k()}copy(t,e,r,i,s){return this}insert(t,e,r){return new Dt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lt{constructor(t){this.comparator=t,this.data=new mt(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Vu(this.data.getIterator())}getIteratorFrom(t){return new Vu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof Lt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Lt(this.comparator);return e.data=t,e}}class Vu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.fields=t,t.sort(Ot.comparator)}static empty(){return new ee([])}unionWith(t){let e=new Lt(Ot.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ee(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Dn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class eh extends Error{constructor(){super(...arguments),this.name="Base64DecodeError"}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new eh("Invalid base64 string: "+s):s}}(t);return new qt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new qt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}qt.EMPTY_BYTE_STRING=new qt("");const km=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qe(n){if(nt(!!n),typeof n=="string"){let t=0;const e=km.exec(n);if(nt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Et(n.seconds),nanos:Et(n.nanos)}}function Et(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function un(n){return typeof n=="string"?qt.fromBase64String(n):qt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ta(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function ea(n){const t=n.mapValue.fields.__previous_value__;return ta(t)?ea(t):t}function Tr(n){const t=qe(n.mapValue.fields.__local_write_time__.timestampValue);return new At(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vm{constructor(t,e,r,i,s,o,a,u,l){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class Er{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Er("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Er&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ii={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?ta(n)?4:Nm(n)?9007199254740991:10:k()}function ve(n,t){if(n===t)return!0;const e=ln(n);if(e!==ln(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return Tr(n).isEqual(Tr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qe(i.timestampValue),a=qe(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return un(i.bytesValue).isEqual(un(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return Et(i.geoPointValue.latitude)===Et(s.geoPointValue.latitude)&&Et(i.geoPointValue.longitude)===Et(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return Et(i.integerValue)===Et(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=Et(i.doubleValue),a=Et(s.doubleValue);return o===a?bi(o)===bi(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Dn(n.arrayValue.values||[],t.arrayValue.values||[],ve);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(ku(o)!==ku(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ve(o[u],a[u])))return!1;return!0}(n,t);default:return k()}}function Ir(n,t){return(n.values||[]).find(e=>ve(e,t))!==void 0}function bn(n,t){if(n===t)return 0;const e=ln(n),r=ln(t);if(e!==r)return X(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=Et(s.integerValue||s.doubleValue),u=Et(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return Nu(n.timestampValue,t.timestampValue);case 4:return Nu(Tr(n),Tr(t));case 5:return X(n.stringValue,t.stringValue);case 6:return function(s,o){const a=un(s),u=un(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=X(a[l],u[l]);if(c!==0)return c}return X(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=X(Et(s.latitude),Et(o.latitude));return a!==0?a:X(Et(s.longitude),Et(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=bn(a[l],u[l]);if(c)return c}return X(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ii.mapValue&&o===ii.mapValue)return 0;if(s===ii.mapValue)return 1;if(o===ii.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){const d=X(u[h],c[h]);if(d!==0)return d;const f=bn(a[u[h]],l[c[h]]);if(f!==0)return f}return X(u.length,c.length)}(n.mapValue,t.mapValue);default:throw k()}}function Nu(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return X(n,t);const e=qe(n),r=qe(t),i=X(e.seconds,r.seconds);return i!==0?i:X(e.nanos,r.nanos)}function On(n){return oo(n)}function oo(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=qe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return un(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return S.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=oo(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${oo(e.fields[o])}`;return i+"}"}(n.mapValue):k()}function Du(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function ao(n){return!!n&&"integerValue"in n}function na(n){return!!n&&"arrayValue"in n}function bu(n){return!!n&&"nullValue"in n}function Ou(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function di(n){return!!n&&"mapValue"in n}function ir(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return dn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=ir(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=ir(n.arrayValue.values[e]);return t}return Object.assign({},n)}function Nm(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gt{constructor(t){this.value=t}static empty(){return new Gt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!di(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ir(e)}setAll(t){let e=Ot.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=ir(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());di(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ve(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];di(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){dn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Gt(ir(this.value))}}function nh(n){const t=[];return dn(n.fields,(e,r)=>{const i=new Ot([e]);if(di(r)){const s=nh(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ee(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ct{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new Ct(t,0,N.min(),N.min(),N.min(),Gt.empty(),0)}static newFoundDocument(t,e,r,i){return new Ct(t,1,e,N.min(),r,i,0)}static newNoDocument(t,e){return new Ct(t,2,e,N.min(),N.min(),Gt.empty(),0)}static newUnknownDocument(t,e){return new Ct(t,3,e,N.min(),N.min(),Gt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Gt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Gt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof Ct&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new Ct(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Oi{constructor(t,e){this.position=t,this.inclusive=e}}function Mu(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=S.comparator(S.fromName(o.referenceValue),e.key):r=bn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Lu(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ve(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class Mi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Dm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class rh{}class It extends rh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Om(t,e,r):e==="array-contains"?new xm(t,r):e==="in"?new Fm(t,r):e==="not-in"?new Um(t,r):e==="array-contains-any"?new $m(t,r):new It(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new Mm(t,r):new Lm(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(bn(e,this.value)):e!==null&&ln(this.value)===ln(e)&&this.matchesComparison(bn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return k()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class ue extends rh{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new ue(t,e)}matches(t){return ih(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function ih(n){return n.op==="and"}function sh(n){return bm(n)&&ih(n)}function bm(n){for(const t of n.filters)if(t instanceof ue)return!1;return!0}function uo(n){if(n instanceof It)return n.field.canonicalString()+n.op.toString()+On(n.value);if(sh(n))return n.filters.map(t=>uo(t)).join(",");{const t=n.filters.map(e=>uo(e)).join(",");return`${n.op}(${t})`}}function oh(n,t){return n instanceof It?function(r,i){return i instanceof It&&r.op===i.op&&r.field.isEqual(i.field)&&ve(r.value,i.value)}(n,t):n instanceof ue?function(r,i){return i instanceof ue&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&oh(o,i.filters[a]),!0):!1}(n,t):void k()}function ah(n){return n instanceof It?function(e){return`${e.field.canonicalString()} ${e.op} ${On(e.value)}`}(n):n instanceof ue?function(e){return e.op.toString()+" {"+e.getFilters().map(ah).join(" ,")+"}"}(n):"Filter"}class Om extends It{constructor(t,e,r){super(t,e,r),this.key=S.fromName(r.referenceValue)}matches(t){const e=S.comparator(t.key,this.key);return this.matchesComparison(e)}}class Mm extends It{constructor(t,e){super(t,"in",e),this.keys=uh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Lm extends It{constructor(t,e){super(t,"not-in",e),this.keys=uh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function uh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>S.fromName(r.referenceValue))}class xm extends It{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return na(e)&&Ir(e.arrayValue,this.value)}}class Fm extends It{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Ir(this.value.arrayValue,e)}}class Um extends It{constructor(t,e){super(t,"not-in",e)}matches(t){if(Ir(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Ir(this.value.arrayValue,e)}}class $m extends It{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!na(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Ir(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qm{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function xu(n,t=null,e=[],r=[],i=null,s=null,o=null){return new qm(n,t,e,r,i,s,o)}function ra(n){const t=L(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>uo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),qr(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>On(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>On(r)).join(",")),t.ce=e}return t.ce}function ia(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Dm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!oh(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Lu(n.startAt,t.startAt)&&Lu(n.endAt,t.endAt)}function lo(n){return S.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jr{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function jm(n,t,e,r,i,s,o,a){return new jr(n,t,e,r,i,s,o,a)}function sa(n){return new jr(n)}function Fu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function lh(n){return n.collectionGroup!==null}function sr(n){const t=L(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new Lt(Ot.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new Mi(s,r))}),e.has(Ot.keyField().canonicalString())||t.le.push(new Mi(Ot.keyField(),r))}return t.le}function _e(n){const t=L(n);return t.he||(t.he=Bm(t,sr(n))),t.he}function Bm(n,t){if(n.limitType==="F")return xu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new Mi(i.field,s)});const e=n.endAt?new Oi(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Oi(n.startAt.position,n.startAt.inclusive):null;return xu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function co(n,t){const e=n.filters.concat([t]);return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function ho(n,t,e){return new jr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function fs(n,t){return ia(_e(n),_e(t))&&n.limitType===t.limitType}function ch(n){return`${ra(_e(n))}|lt:${n.limitType}`}function _n(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>ah(i)).join(", ")}]`),qr(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>On(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>On(i)).join(",")),`Target(${r})`}(_e(n))}; limitType=${n.limitType})`}function gs(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):S.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of sr(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=Mu(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,sr(r),i)||r.endAt&&!function(o,a,u){const l=Mu(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,sr(r),i))}(n,t)}function zm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function hh(n){return(t,e)=>{let r=!1;for(const i of sr(n)){const s=Gm(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Gm(n,t,e){const r=n.field.isKeyField()?S.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?bn(u,l):k()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return k()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){dn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return th(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wm=new mt(S.comparator);function Ce(){return Wm}const dh=new mt(S.comparator);function Zn(...n){let t=dh;for(const e of n)t=t.insert(e.key,e);return t}function fh(n){let t=dh;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function en(){return or()}function gh(){return or()}function or(){return new jn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Km=new mt(S.comparator),Hm=new Lt(S.comparator);function q(...n){let t=Hm;for(const e of n)t=t.add(e);return t}const Qm=new Lt(X);function Ym(){return Qm}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ph(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:bi(t)?"-0":t}}function mh(n){return{integerValue:""+n}}function Xm(n,t){return Cm(t)?mh(t):ph(n,t)}/**
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
 */class ps{constructor(){this._=void 0}}function Jm(n,t,e){return n instanceof Li?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&ta(s)&&(s=ea(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof wr?yh(n,t):n instanceof Ar?vh(n,t):function(i,s){const o=_h(i,s),a=Uu(o)+Uu(i.Ie);return ao(o)&&ao(i.Ie)?mh(a):ph(i.serializer,a)}(n,t)}function Zm(n,t,e){return n instanceof wr?yh(n,t):n instanceof Ar?vh(n,t):e}function _h(n,t){return n instanceof xi?function(r){return ao(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Li extends ps{}class wr extends ps{constructor(t){super(),this.elements=t}}function yh(n,t){const e=Th(t);for(const r of n.elements)e.some(i=>ve(i,r))||e.push(r);return{arrayValue:{values:e}}}class Ar extends ps{constructor(t){super(),this.elements=t}}function vh(n,t){let e=Th(t);for(const r of n.elements)e=e.filter(i=>!ve(i,r));return{arrayValue:{values:e}}}class xi extends ps{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function Uu(n){return Et(n.integerValue||n.doubleValue)}function Th(n){return na(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function t_(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof wr&&i instanceof wr||r instanceof Ar&&i instanceof Ar?Dn(r.elements,i.elements,ve):r instanceof xi&&i instanceof xi?ve(r.Ie,i.Ie):r instanceof Li&&i instanceof Li}(n.transform,t.transform)}class e_{constructor(t,e){this.version=t,this.transformResults=e}}class Xt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Xt}static exists(t){return new Xt(void 0,t)}static updateTime(t){return new Xt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class ms{}function Eh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new oa(n.key,Xt.none()):new Br(n.key,n.data,Xt.none());{const e=n.data,r=Gt.empty();let i=new Lt(Ot.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ke(n.key,r,new ee(i.toArray()),Xt.none())}}function n_(n,t,e){n instanceof Br?function(i,s,o){const a=i.value.clone(),u=qu(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ke?function(i,s,o){if(!fi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=qu(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Ih(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function ar(n,t,e,r){return n instanceof Br?function(s,o,a,u){if(!fi(s.precondition,o))return a;const l=s.value.clone(),c=ju(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ke?function(s,o,a,u){if(!fi(s.precondition,o))return a;const l=ju(s.fieldTransforms,u,o),c=o.data;return c.setAll(Ih(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return fi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function r_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=_h(r.transform,i||null);s!=null&&(e===null&&(e=Gt.empty()),e.set(r.field,s))}return e||null}function $u(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Dn(r,i,(s,o)=>t_(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class Br extends ms{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ke extends ms{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Ih(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function qu(n,t,e){const r=new Map;nt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Zm(o,a,e[i]))}return r}function ju(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Jm(s,o,t))}return r}class oa extends ms{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class wh extends ms{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class i_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&n_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=ar(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=ar(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=gh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=Eh(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(N.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),q())}isEqual(t){return this.batchId===t.batchId&&Dn(this.mutations,t.mutations,(e,r)=>$u(e,r))&&Dn(this.baseMutations,t.baseMutations,(e,r)=>$u(e,r))}}class aa{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){nt(t.mutations.length===r.length);let i=function(){return Km}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new aa(t,e,r,i)}}/**
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
 */class s_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class o_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Tt,W;function Ah(n){switch(n){default:return k();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function Rh(n){if(n===void 0)return Se("GRPC error has no .code"),g.UNKNOWN;switch(n){case Tt.OK:return g.OK;case Tt.CANCELLED:return g.CANCELLED;case Tt.UNKNOWN:return g.UNKNOWN;case Tt.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case Tt.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case Tt.INTERNAL:return g.INTERNAL;case Tt.UNAVAILABLE:return g.UNAVAILABLE;case Tt.UNAUTHENTICATED:return g.UNAUTHENTICATED;case Tt.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case Tt.NOT_FOUND:return g.NOT_FOUND;case Tt.ALREADY_EXISTS:return g.ALREADY_EXISTS;case Tt.PERMISSION_DENIED:return g.PERMISSION_DENIED;case Tt.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case Tt.ABORTED:return g.ABORTED;case Tt.OUT_OF_RANGE:return g.OUT_OF_RANGE;case Tt.UNIMPLEMENTED:return g.UNIMPLEMENTED;case Tt.DATA_LOSS:return g.DATA_LOSS;default:return k()}}(W=Tt||(Tt={}))[W.OK=0]="OK",W[W.CANCELLED=1]="CANCELLED",W[W.UNKNOWN=2]="UNKNOWN",W[W.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",W[W.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",W[W.NOT_FOUND=5]="NOT_FOUND",W[W.ALREADY_EXISTS=6]="ALREADY_EXISTS",W[W.PERMISSION_DENIED=7]="PERMISSION_DENIED",W[W.UNAUTHENTICATED=16]="UNAUTHENTICATED",W[W.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",W[W.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",W[W.ABORTED=10]="ABORTED",W[W.OUT_OF_RANGE=11]="OUT_OF_RANGE",W[W.UNIMPLEMENTED=12]="UNIMPLEMENTED",W[W.INTERNAL=13]="INTERNAL",W[W.UNAVAILABLE=14]="UNAVAILABLE",W[W.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function a_(){return new TextEncoder}/**
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
 */const u_=new Rn([4294967295,4294967295],0);function Bu(n){const t=a_().encode(n),e=new fm;return e.update(t),new Uint8Array(e.digest())}function zu(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Rn([e,r],0),new Rn([i,s],0)]}class ua{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new tr(`Invalid padding: ${e}`);if(r<0)throw new tr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new tr(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Rn.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Rn.fromNumber(r)));return i.compare(u_)===1&&(i=new Rn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=Bu(t),[r,i]=zu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new ua(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=Bu(t),[r,i]=zu(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _s{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,zr.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new _s(N.min(),i,new mt(X),Ce(),q())}}class zr{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new zr(r,e,q(),q(),q())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gi{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class Ph{constructor(t,e){this.targetId=t,this.fe=e}}class Sh{constructor(t,e,r=qt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Gu{constructor(){this.ge=0,this.pe=Ku(),this.ye=qt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=q(),e=q(),r=q();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:k()}}),new zr(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Ku()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class l_{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ce(),this.Qe=Wu(),this.Ke=new mt(X)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:k()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(lo(s))if(r===0){const o=new S(s.path);this.We(e,o,Ct.newNoDocument(o,N.min()))}else nt(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,l)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=un(r).toUint8Array()}catch(u){if(u instanceof eh)return Nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new ua(o,i,s)}catch(u){return Nn(u instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&lo(a.target)){const u=new S(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,Ct.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=q();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ye(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new _s(t,e,this.Ke,this.qe,r);return this.qe=Ce(),this.Qe=Wu(),this.Ke=new mt(X),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Gu,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new Lt(X),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||A("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Gu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function Wu(){return new mt(S.comparator)}function Ku(){return new mt(S.comparator)}const c_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),h_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),d_=(()=>({and:"AND",or:"OR"}))();class f_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function fo(n,t){return n.useProto3Json||qr(t)?t:{value:t}}function Fi(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ch(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function g_(n,t){return Fi(n,t.toTimestamp())}function ne(n){return nt(!!n),N.fromTimestamp(function(e){const r=qe(e);return new At(r.seconds,r.nanos)}(n))}function la(n,t){return function(r){return new gt(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function kh(n){const t=gt.fromString(n);return nt(Oh(t)),t}function Ui(n,t){return la(n.databaseId,t.path)}function ur(n,t){const e=kh(t);if(e.get(1)!==n.databaseId.projectId)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new w(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new S(Vh(e))}function go(n,t){return la(n.databaseId,t)}function p_(n){const t=kh(n);return t.length===4?gt.emptyPath():Vh(t)}function Rr(n){return new gt(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Vh(n){return nt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Hu(n,t,e){return{name:Ui(n,t),fields:e.value.mapValue.fields}}function m_(n,t){return"found"in t?function(r,i){nt(!!i.found),i.found.name,i.found.updateTime;const s=ur(r,i.found.name),o=ne(i.found.updateTime),a=i.found.createTime?ne(i.found.createTime):N.min(),u=new Gt({mapValue:{fields:i.found.fields}});return Ct.newFoundDocument(s,o,a,u)}(n,t):"missing"in t?function(r,i){nt(!!i.missing),nt(!!i.readTime);const s=ur(r,i.missing),o=ne(i.readTime);return Ct.newNoDocument(s,o)}(n,t):k()}function __(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:k()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(nt(c===void 0||typeof c=="string"),qt.fromBase64String(c||"")):(nt(c===void 0||c instanceof Uint8Array),qt.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?g.UNKNOWN:Rh(l.code);return new w(c,l.message||"")}(o);e=new Sh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ur(n,r.document.name),s=ne(r.document.updateTime),o=r.document.createTime?ne(r.document.createTime):N.min(),a=new Gt({mapValue:{fields:r.document.fields}}),u=Ct.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];e=new gi(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ur(n,r.document),s=r.readTime?ne(r.readTime):N.min(),o=Ct.newNoDocument(i,s),a=r.removedTargetIds||[];e=new gi([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ur(n,r.document),s=r.removedTargetIds||[];e=new gi([],s,i,null)}else{if(!("filter"in t))return k();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new o_(i,s),a=r.targetId;e=new Ph(a,o)}}return e}function Nh(n,t){let e;if(t instanceof Br)e={update:Hu(n,t.key,t.value)};else if(t instanceof oa)e={delete:Ui(n,t.key)};else if(t instanceof Ke)e={update:Hu(n,t.key,t.data),updateMask:P_(t.fieldMask)};else{if(!(t instanceof wh))return k();e={verify:Ui(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Li)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof wr)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof Ar)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof xi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw k()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:g_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:k()}(n,t.precondition)),e}function y_(n,t){return n&&n.length>0?(nt(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?ne(i.updateTime):ne(s);return o.isEqual(N.min())&&(o=ne(s)),new e_(o,i.transformResults||[])}(e,t))):[]}function v_(n,t){return{documents:[go(n,t.path)]}}function T_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=go(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=go(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return bh(ue.create(u,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:yn(h.field),direction:w_(h.dir)}}(l))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=fo(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function E_(n){let t=p_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){nt(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(h){const d=Dh(h);return d instanceof ue&&sh(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(y){return new Mi(vn(y.field),function(E){switch(E){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(y.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,qr(d)?null:d}(e.limit));let u=null;e.startAt&&(u=function(h){const d=!!h.before,f=h.values||[];return new Oi(f,d)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Oi(f,d)}(e.endAt)),jm(t,i,o,s,a,"F",u,l)}function I_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return k()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Dh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=vn(e.unaryFilter.field);return It.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vn(e.unaryFilter.field);return It.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vn(e.unaryFilter.field);return It.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vn(e.unaryFilter.field);return It.create(o,"!=",{nullValue:"NULL_VALUE"});default:return k()}}(n):n.fieldFilter!==void 0?function(e){return It.create(vn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return k()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return ue.create(e.compositeFilter.filters.map(r=>Dh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return k()}}(e.compositeFilter.op))}(n):k()}function w_(n){return c_[n]}function A_(n){return h_[n]}function R_(n){return d_[n]}function yn(n){return{fieldPath:n.canonicalString()}}function vn(n){return Ot.fromServerFormat(n.fieldPath)}function bh(n){return n instanceof It?function(e){if(e.op==="=="){if(Ou(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NAN"}};if(bu(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Ou(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NOT_NAN"}};if(bu(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yn(e.field),op:A_(e.op),value:e.value}}}(n):n instanceof ue?function(e){const r=e.getFilters().map(i=>bh(i));return r.length===1?r[0]:{compositeFilter:{op:R_(e.op),filters:r}}}(n):k()}function P_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Oh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e,r,i,s=N.min(),o=N.min(),a=qt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Me(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(t){this.ut=t}}function C_(n){const t=E_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?ho(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class k_{constructor(){this.on=new V_}addToCollectionParentIndex(t,e){return this.on.add(e),p.resolve()}getCollectionParents(t,e){return p.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return p.resolve()}deleteFieldIndex(t,e){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,e){return p.resolve()}getDocumentsMatchingTarget(t,e){return p.resolve(null)}getIndexType(t,e){return p.resolve(0)}getFieldIndexes(t,e){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,e){return p.resolve($e.min())}getMinOffsetFromCollectionGroup(t,e){return p.resolve($e.min())}updateCollectionGroup(t,e,r){return p.resolve()}updateIndexEntries(t,e){return p.resolve()}}class V_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new Lt(gt.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new Lt(gt.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mn{constructor(t){this.xn=t}next(){return this.xn+=2,this.xn}static On(){return new Mn(0)}static Nn(){return new Mn(-1)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(){this.changes=new jn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,Ct.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?p.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class D_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class b_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&ar(r.mutation,i,ee.empty(),At.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,q()).next(()=>r))}getLocalViewOfDocuments(t,e,r=q()){const i=en();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Zn();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=en();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,q()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Ce();const o=or(),a=function(){return or()}();return e.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Ke)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),ar(c.mutation,l,c.mutation.getFieldMask(),At.now())):o.set(l.key,ee.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),e.forEach((l,c)=>{var h;return a.set(l,new D_(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=or();let i=new mt((o,a)=>o-a),s=q();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=e.get(u);if(l===null)return;let c=r.get(u)||ee.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||q()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=gh();c.forEach(d=>{if(!s.has(d)){const f=Eh(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return S.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):lh(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):p.resolve(en());let a=-1,u=s;return o.next(l=>p.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?p.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,u,l,q())).next(c=>({batchId:a,changes:fh(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new S(e)).next(r=>{let i=Zn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Zn();return this.indexManager.getCollectionParents(t,s).next(a=>p.forEach(a,u=>{const l=function(h,d){return new jr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,l)=>{const c=l.getKey();o.get(c)===null&&(o=o.insert(c,Ct.newInvalidDocument(c)))});let a=Zn();return o.forEach((u,l)=>{const c=s.get(u);c!==void 0&&ar(c.mutation,l,ee.empty(),At.now()),gs(e,l)&&(a=a.insert(u,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return p.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ne(i.createTime)}}(e)),p.resolve()}getNamedQuery(t,e){return p.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:C_(i.bundledQuery),readTime:ne(i.readTime)}}(e)),p.resolve()}}/**
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
 */class M_{constructor(){this.overlays=new mt(S.comparator),this.lr=new Map}getOverlay(t,e){return p.resolve(this.overlays.get(e))}getOverlays(t,e){const r=en();return p.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),p.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),p.resolve()}getOverlaysForCollection(t,e,r){const i=en(),s=e.length+1,o=new S(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return p.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new mt((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=en(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=en(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return p.resolve(a)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new s_(e,r));let s=this.lr.get(e);s===void 0&&(s=q(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(){this.hr=new Lt(St.Pr),this.Ir=new Lt(St.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new St(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new St(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new S(new gt([])),r=new St(e,t),i=new St(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new S(new gt([])),r=new St(e,t),i=new St(e,t+1);let s=q();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new St(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class St{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return S.comparator(t.key,e.key)||X(t.gr,e.gr)}static Tr(t,e){return X(t.gr,e.gr)||S.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class L_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new Lt(St.Pr)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new i_(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new St(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,e){return p.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new St(e,0),i=new St(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new Lt(X);return e.forEach(i=>{const s=new St(i,0),o=new St(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),p.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;S.isDocumentKey(s)||(s=s.child(""));const o=new St(new S(s),0);let a=new Lt(X);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gr)),!0)},o),p.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){nt(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return p.forEach(e.mutations,i=>{const s=new St(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new St(e,0),i=this.yr.firstAfterOrEqual(r);return p.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t){this.Cr=t,this.docs=function(){return new mt(S.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return p.resolve(r?r.document.mutableCopy():Ct.newInvalidDocument(e))}getEntries(t,e){let r=Ce();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():Ct.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Ce();const o=e.path,a=new S(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||Rm(Am(c),r)<=0||(i.has(c.key)||gs(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,e,r,i){k()}vr(t,e){return p.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new F_(this)}getSize(t){return p.resolve(this.size)}}class F_ extends N_{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),p.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_{constructor(t){this.persistence=t,this.Fr=new jn(e=>ra(e),ia),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ca,this.targetCount=0,this.Nr=Mn.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),p.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Mn(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,p.resolve()}updateTargetData(t,e){return this.kn(e),p.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return p.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),p.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),p.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return p.resolve(r)}containsKey(t,e){return p.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $_{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Zo(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new U_(this),this.indexManager=new k_,this.remoteDocumentCache=function(i){return new x_(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new S_(e),this.Kr=new O_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new M_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new L_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){A("MemoryPersistence","Starting transaction:",t);const i=new q_(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class q_ extends Sm{constructor(t){super(),this.currentSequenceNumber=t}}class ha{constructor(t){this.persistence=t,this.Gr=new ca,this.zr=null}static jr(t){return new ha(t)}get Hr(){if(this.zr)return this.zr;throw k()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),p.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),p.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Hr,r=>{const i=S.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,N.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return p.or([()=>p.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class da{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=q(),i=q();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new da(t,e.fromCache,r,i)}}/**
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
 */class j_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new j_;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?(Qn()<=ce.DEBUG&&A("QueryEngine","SDK will not create cache indexes for query:",_n(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),p.resolve()):(Qn()<=ce.DEBUG&&A("QueryEngine","Query:",_n(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Qn()<=ce.DEBUG&&A("QueryEngine","The SDK decides to create cache indexes for query:",_n(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_e(e))):p.resolve())}zi(t,e){if(Fu(e))return p.resolve(null);let r=_e(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=ho(e,null,"F"),r=_e(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=q(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.Yi(e,a);return this.Zi(e,l,o,u.readTime)?this.zi(t,ho(e,null,"F")):this.Xi(t,l,e,u)}))})))}ji(t,e,r,i){return Fu(e)||i.isEqual(N.min())?p.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?p.resolve(null):(Qn()<=ce.DEBUG&&A("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_n(e)),this.Xi(t,o,e,wm(i,-1)).next(a=>a))})}Yi(t,e){let r=new Lt(hh(t));return e.forEach((i,s)=>{gs(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return Qn()<=ce.DEBUG&&A("QueryEngine","Using full collection scan to execute query:",_n(e)),this.Gi.getDocumentsMatchingQuery(t,e,$e.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class z_{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new mt(X),this.ns=new jn(s=>ra(s),ia),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new b_(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function G_(n,t,e,r){return new z_(n,t,e,r)}async function Mh(n,t){const e=L(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=q();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return e.localDocuments.getDocuments(r,u).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function W_(n,t){const e=L(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const h=l.batch,d=h.keys();let f=p.resolve();return d.forEach(y=>{f=f.next(()=>c.getEntry(u,y)).next(R=>{const E=l.docVersions.get(y);nt(E!==null),R.version.compareTo(E)<0&&(h.applyToRemoteDocument(R,l),R.isValidDocument()&&(R.setReadTime(l.commitVersion),c.addEntry(R)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=q();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Lh(n){const t=L(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function K_(n,t){const e=L(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(qt.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(R,E,I){return R.resumeToken.approximateByteSize()===0||E.snapshotVersion.toMicroseconds()-R.snapshotVersion.toMicroseconds()>=3e8?!0:I.addedDocuments.size+I.modifiedDocuments.size+I.removedDocuments.size>0}(d,f,c)&&a.push(e.qr.updateTargetData(s,f))});let u=Ce(),l=q();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(H_(s,o,t.documentUpdates).next(c=>{u=c.us,l=c.cs})),!r.isEqual(N.min())){const c=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(e.ts=i,s))}function H_(n,t,e){let r=q(),i=q();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Ce();return e.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(N.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):A("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{us:o,cs:i}})}function Q_(n,t){const e=L(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function Y_(n,t){const e=L(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,p.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new Me(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function po(n,t,e){const r=L(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!$r(o))throw o;A("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Qu(n,t,e){const r=L(n);let i=N.min(),s=q();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,c){const h=L(u),d=h.ns.get(c);return d!==void 0?p.resolve(h.ts.get(d)):h.qr.getTargetData(l,c)}(r,o,_e(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:N.min(),e?s:q())).next(a=>(X_(r,zm(t),a),{documents:a,ls:s})))}function X_(n,t,e){let r=n.rs.get(t)||N.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}class Yu{constructor(){this.activeTargetIds=Ym()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class J_{constructor(){this.eo=new Yu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Yu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){A("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){A("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let si=null;function qs(){return si===null?si=function(){return 268435456+Math.round(2147483648*Math.random())}():si++,"0x"+si.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class ey{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xt="WebChannelConnection";class ny extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(e,r,i,s,o){const a=qs(),u=this.So(e,r);A("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,s,o),this.Do(e,u,l,i).then(c=>(A("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw Nn("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}Co(e,r,i,s,o,a){return this.wo(e,r,i,s,o)}bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}So(e,r){const i=ty[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,i){const s=qs();return new Promise((o,a)=>{const u=new dm;u.setWithCredentials(!0),u.listenOnce(lm.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case $s.NO_ERROR:const c=u.getResponseJson();A(xt,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case $s.TIMEOUT:A(xt,`RPC '${t}' ${s} timed out`),a(new w(g.DEADLINE_EXCEEDED,"Request time out"));break;case $s.HTTP_ERROR:const h=u.getStatus();if(A(xt,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const y=function(E){const I=E.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(I)>=0?I:g.UNKNOWN}(f.status);a(new w(y,f.message))}else a(new w(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new w(g.UNAVAILABLE,"Connection failed."));break;default:k()}}finally{A(xt,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);A(xt,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",l,r,15)})}vo(t,e,r){const i=qs(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=am(),a=um(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new hm({})),this.bo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const c=s.join("");A(xt,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let d=!1,f=!1;const y=new ey({co:E=>{f?A(xt,`Not sending because RPC '${t}' stream ${i} is closed:`,E):(d||(A(xt,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),A(xt,`RPC '${t}' stream ${i} sending:`,E),h.send(E))},lo:()=>h.close()}),R=(E,I,x)=>{E.listen(I,j=>{try{x(j)}catch(F){setTimeout(()=>{throw F},0)}})};return R(h,ni.EventType.OPEN,()=>{f||A(xt,`RPC '${t}' stream ${i} transport opened.`)}),R(h,ni.EventType.CLOSE,()=>{f||(f=!0,A(xt,`RPC '${t}' stream ${i} transport closed`),y.Ro())}),R(h,ni.EventType.ERROR,E=>{f||(f=!0,Nn(xt,`RPC '${t}' stream ${i} transport errored:`,E),y.Ro(new w(g.UNAVAILABLE,"The operation could not be completed")))}),R(h,ni.EventType.MESSAGE,E=>{var I;if(!f){const x=E.data[0];nt(!!x);const j=x,F=j.error||((I=j[0])===null||I===void 0?void 0:I.error);if(F){A(xt,`RPC '${t}' stream ${i} received error:`,F);const tt=F.status;let Q=function(Rt){const it=Tt[Rt];if(it!==void 0)return Rh(it)}(tt),yt=F.message;Q===void 0&&(Q=g.INTERNAL,yt="Unknown error status: "+tt+" with message "+F.message),f=!0,y.Ro(new w(Q,yt)),h.close()}else A(xt,`RPC '${t}' stream ${i} received:`,x),y.Vo(x)}}),R(a,cm.STAT_EVENT,E=>{E.stat===Su.PROXY?A(xt,`RPC '${t}' stream ${i} detected buffering proxy`):E.stat===Su.NOPROXY&&A(xt,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{y.Ao()},0),y}}function js(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ys(n){return new f_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fa{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&A("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xh{constructor(t,e,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new fa(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(Se(e.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===e&&this.s_(r,i)},r=>{t(()=>{const i=new w(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return A("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(A("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ry extends xh{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=__(this.serializer,t),r=function(s){if(!("targetChange"in s))return N.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?N.min():o.readTime?ne(o.readTime):N.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=Rr(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=lo(u)?{documents:v_(s,u)}:{query:T_(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ch(s,o.resumeToken);const l=fo(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(N.min())>0){a.readTime=Fi(s,o.snapshotVersion.toTimestamp());const l=fo(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=I_(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=Rr(this.serializer),e.removeTarget=t,this.e_(e)}}class iy extends xh{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(nt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=y_(t.writeResults,t.commitTime),r=ne(t.commitTime);return this.listener.I_(r,e)}return nt(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Rr(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>Nh(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new w(g.UNKNOWN,i.toString())})}Co(t,e,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new w(g.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class oy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Se(e),this.f_=!1):A("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ay{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{fn(this)&&(A("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=L(u);l.C_.add(4),await Gr(l),l.M_.set("Unknown"),l.C_.delete(4),await vs(l)}(this))})}),this.M_=new oy(r,i)}}async function vs(n){if(fn(n))for(const t of n.v_)await t(!0)}async function Gr(n){for(const t of n.v_)await t(!1)}function Fh(n,t){const e=L(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),ma(e)?pa(e):Bn(e).Ho()&&ga(e,t))}function Uh(n,t){const e=L(n),r=Bn(e);e.D_.delete(t),r.Ho()&&$h(e,t),e.D_.size===0&&(r.Ho()?r.Zo():fn(e)&&e.M_.set("Unknown"))}function ga(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(N.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Bn(n).u_(t)}function $h(n,t){n.x_.Oe(t),Bn(n).c_(t)}function pa(n){n.x_=new l_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Bn(n).start(),n.M_.g_()}function ma(n){return fn(n)&&!Bn(n).jo()&&n.D_.size>0}function fn(n){return L(n).C_.size===0}function qh(n){n.x_=void 0}async function uy(n){n.D_.forEach((t,e)=>{ga(n,t)})}async function ly(n,t){qh(n),ma(n)?(n.M_.w_(t),pa(n)):n.M_.set("Unknown")}async function cy(n,t,e){if(n.M_.set("Online"),t instanceof Sh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,t)}catch(r){A("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await $i(n,r)}else if(t instanceof gi?n.x_.$e(t):t instanceof Ph?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(N.min()))try{const r=await Lh(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.D_.get(l);c&&s.D_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=s.D_.get(u);if(!c)return;s.D_.set(u,c.withResumeToken(qt.EMPTY_BYTE_STRING,c.snapshotVersion)),$h(s,u);const h=new Me(c.target,u,l,c.sequenceNumber);ga(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){A("RemoteStore","Failed to raise snapshot:",r),await $i(n,r)}}async function $i(n,t,e){if(!$r(t))throw t;n.C_.add(1),await Gr(n),n.M_.set("Offline"),e||(e=()=>Lh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{A("RemoteStore","Retrying IndexedDB access"),await e(),n.C_.delete(1),await vs(n)})}function jh(n,t){return t().catch(e=>$i(n,e,t))}async function Ts(n){const t=L(n),e=je(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;hy(t);)try{const i=await Q_(t.localStore,r);if(i===null){t.b_.length===0&&e.Zo();break}r=i.batchId,dy(t,i)}catch(i){await $i(t,i)}Bh(t)&&zh(t)}function hy(n){return fn(n)&&n.b_.length<10}function dy(n,t){n.b_.push(t);const e=je(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function Bh(n){return fn(n)&&!je(n).jo()&&n.b_.length>0}function zh(n){je(n).start()}async function fy(n){je(n).E_()}async function gy(n){const t=je(n);for(const e of n.b_)t.P_(e.mutations)}async function py(n,t,e){const r=n.b_.shift(),i=aa.from(r,t,e);await jh(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await Ts(n)}async function my(n,t){t&&je(n).h_&&await async function(r,i){if(function(o){return Ah(o)&&o!==g.ABORTED}(i.code)){const s=r.b_.shift();je(r).Yo(),await jh(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await Ts(r)}}(n,t),Bh(n)&&zh(n)}async function Ju(n,t){const e=L(n);e.asyncQueue.verifyOperationInProgress(),A("RemoteStore","RemoteStore received new credentials");const r=fn(e);e.C_.add(3),await Gr(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await vs(e)}async function _y(n,t){const e=L(n);t?(e.C_.delete(2),await vs(e)):t||(e.C_.add(2),await Gr(e),e.M_.set("Unknown"))}function Bn(n){return n.O_||(n.O_=function(e,r,i){const s=L(e);return s.A_(),new ry(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:uy.bind(null,n),Io:ly.bind(null,n),a_:cy.bind(null,n)}),n.v_.push(async t=>{t?(n.O_.Yo(),ma(n)?pa(n):n.M_.set("Unknown")):(await n.O_.stop(),qh(n))})),n.O_}function je(n){return n.N_||(n.N_=function(e,r,i){const s=L(e);return s.A_(),new iy(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:fy.bind(null,n),Io:my.bind(null,n),T_:gy.bind(null,n),I_:py.bind(null,n)}),n.v_.push(async t=>{t?(n.N_.Yo(),await Ts(n)):(await n.N_.stop(),n.b_.length>0&&(A("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _a{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new _a(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new w(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ya(n,t){if(Se("AsyncQueue",`${t}: ${n}`),$r(n))return new w(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||S.comparator(e.key,r.key):(e,r)=>S.comparator(e.key,r.key),this.keyedMap=Zn(),this.sortedSet=new mt(this.comparator)}static emptySet(t){return new Pn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
  `+t.join(`  
`)+`
)`}copy(t,e){const r=new Pn;return r.comparator=this.comparator,r.keyedMap=t,r.sortedSet=e,r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Zu{constructor(){this.B_=new mt(S.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):k():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ln{constructor(t,e,r,i,s,o,a,u,l){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Ln(t,e,Pn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&fs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yy{constructor(){this.k_=void 0,this.listeners=[]}}class vy{constructor(){this.queries=new jn(t=>ch(t),fs),this.onlineState="Unknown",this.q_=new Set}}async function Gh(n,t){const e=L(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new yy),i)try{s.k_=await e.onListen(r)}catch(o){const a=ya(o,`Initialization of query '${_n(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.Q_(e.onlineState),s.k_&&t.K_(s.k_)&&va(e)}async function Wh(n,t){const e=L(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function Ty(n,t){const e=L(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&va(e)}function Ey(n,t,e){const r=L(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function va(n){n.q_.forEach(t=>{t.next()})}class Kh{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ln(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=Ln.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(t){this.key=t}}class Qh{constructor(t){this.key=t}}class Iy{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=q(),this.mutatedKeys=q(),this._a=hh(t),this.aa=new Pn(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new Zu,i=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),f=gs(this.query,h)?h:null,y=!!d&&this.mutatedKeys.has(d.key),R=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let E=!1;d&&f?d.data.isEqual(f.data)?y!==R&&(r.track({type:3,doc:f}),E=!0):this.ha(d,f)||(r.track({type:2,doc:f}),E=!0,(u&&this._a(f,u)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),E=!0):d&&!f&&(r.track({type:1,doc:d}),E=!0,(u||l)&&(a=!0)),E&&(f?(o=o.add(f),s=R?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((l,c)=>function(d,f){const y=R=>{switch(R){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return k()}};return y(d)-y(f)}(l.type,c.type)||this._a(l.doc,c.doc)),this.Pa(r);const o=e?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new Ln(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Zu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=q(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new Qh(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new Hh(r))}),e}da(t){this.ia=t.ls,this.oa=q();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Ln.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class wy{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Ay{constructor(t){this.key=t,this.Ra=!1}}class Ry{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new jn(a=>ch(a),fs),this.fa=new Map,this.ga=new Set,this.pa=new mt(S.comparator),this.ya=new Map,this.wa=new ca,this.Sa={},this.ba=new Map,this.Da=Mn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Py(n,t){const e=Ly(n);let r,i;const s=e.ma.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await Y_(e.localStore,_e(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Sy(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Fh(e.remoteStore,o)}return i}async function Sy(n,t,e,r,i){n.va=(h,d,f)=>async function(R,E,I,x){let j=E.view.ca(I);j.Zi&&(j=await Qu(R.localStore,E.query,!1).then(({documents:Q})=>E.view.ca(Q,j)));const F=x&&x.targetChanges.get(E.targetId),tt=E.view.applyChanges(j,R.isPrimaryClient,F);return el(R,E.targetId,tt.Ta),tt.snapshot}(n,h,d,f);const s=await Qu(n.localStore,t,!0),o=new Iy(t,s.ls),a=o.ca(s.documents),u=zr.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,u);el(n,e,l.Ta);const c=new wy(t,e,o);return n.ma.set(t,c),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),l.snapshot}async function Cy(n,t){const e=L(n),r=e.ma.get(t),i=e.fa.get(r.targetId);if(i.length>1)return e.fa.set(r.targetId,i.filter(s=>!fs(s,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await po(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),Uh(e.remoteStore,r.targetId),mo(e,r.targetId)}).catch(Ur)):(mo(e,r.targetId),await po(e.localStore,r.targetId,!0))}async function ky(n,t,e){const r=xy(n);try{const i=await function(o,a){const u=L(o),l=At.now(),c=a.reduce((f,y)=>f.add(y.key),q());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",f=>{let y=Ce(),R=q();return u.ss.getEntries(f,c).next(E=>{y=E,y.forEach((I,x)=>{x.isValidDocument()||(R=R.add(I))})}).next(()=>u.localDocuments.getOverlayedDocuments(f,y)).next(E=>{h=E;const I=[];for(const x of a){const j=r_(x,h.get(x.key).overlayedDocument);j!=null&&I.push(new Ke(x.key,j,nh(j.value.mapValue),Xt.exists(!0)))}return u.mutationQueue.addMutationBatch(f,l,I,a)}).next(E=>{d=E;const I=E.applyToLocalDocumentSet(h,R);return u.documentOverlayCache.saveOverlays(f,E.batchId,I)})}).then(()=>({batchId:d.batchId,changes:fh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.Sa[o.currentUser.toKey()];l||(l=new mt(X)),l=l.insert(a,u),o.Sa[o.currentUser.toKey()]=l}(r,i.batchId,e),await Wr(r,i.changes),await Ts(r.remoteStore)}catch(i){const s=ya(i,"Failed to persist write");e.reject(s)}}async function Yh(n,t){const e=L(n);try{const r=await K_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.ya.get(s);o&&(nt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?nt(o.Ra):i.removedDocuments.size>0&&(nt(o.Ra),o.Ra=!1))}),await Wr(e,r,t)}catch(r){await Ur(r)}}function tl(n,t,e){const r=L(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=L(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&va(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vy(n,t,e){const r=L(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new mt(S.comparator);o=o.insert(s,Ct.newNoDocument(s,N.min()));const a=q().add(s),u=new _s(N.min(),new Map,new mt(X),o,a);await Yh(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),Ta(r)}else await po(r.localStore,t,!1).then(()=>mo(r,t,e)).catch(Ur)}async function Ny(n,t){const e=L(n),r=t.batch.batchId;try{const i=await W_(e.localStore,t);Jh(e,r,null),Xh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Wr(e,i)}catch(i){await Ur(i)}}async function Dy(n,t,e){const r=L(n);try{const i=await function(o,a){const u=L(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(nt(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,t);Jh(r,t,e),Xh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Wr(r,i)}catch(i){await Ur(i)}}function Xh(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function Jh(n,t,e){const r=L(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function mo(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||Zh(n,r)})}function Zh(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(Uh(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),Ta(n))}function el(n,t,e){for(const r of e)r instanceof Hh?(n.wa.addReference(r.key,t),by(n,r)):r instanceof Qh?(A("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||Zh(n,r.key)):k()}function by(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(A("SyncEngine","New document in limbo: "+e),n.ga.add(r),Ta(n))}function Ta(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new S(gt.fromString(t)),r=n.Da.next();n.ya.set(r,new Ay(e)),n.pa=n.pa.insert(e,r),Fh(n.remoteStore,new Me(_e(sa(e.path)),r,"TargetPurposeLimboResolution",Zo._e))}}async function Wr(n,t,e){const r=L(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,e).then(l=>{if((l||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=da.Qi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,l){const c=L(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(l,d=>p.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>p.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!$r(h))throw h;A("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),y=f.snapshotVersion,R=f.withLastLimboFreeSnapshotVersion(y);c.ts=c.ts.insert(d,R)}}}(r.localStore,s))}async function Oy(n,t){const e=L(n);if(!e.currentUser.isEqual(t)){A("SyncEngine","User change. New user:",t.toKey());const r=await Mh(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new w(g.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Wr(e,r._s)}}function My(n,t){const e=L(n),r=e.ya.get(t);if(r&&r.Ra)return q().add(r.key);{let i=q();const s=e.fa.get(t);if(!s)return i;for(const o of s){const a=e.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function Ly(n){const t=L(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Yh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=My.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vy.bind(null,t),t.Va.a_=Ty.bind(null,t.eventManager),t.Va.Fa=Ey.bind(null,t.eventManager),t}function xy(n){const t=L(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Ny.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Dy.bind(null,t),t}class nl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ys(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return G_(this.persistence,new B_,t.initialUser,this.serializer)}createPersistence(t){return new $_(ha.jr,this.serializer)}createSharedClientState(t){return new J_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Fy{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>tl(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Oy.bind(null,this.syncEngine),await _y(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new vy}()}createDatastore(t){const e=ys(t.databaseInfo.databaseId),r=function(s){return new ny(s)}(t.databaseInfo);return function(s,o,a,u){return new sy(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new ay(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>tl(this.syncEngine,e,0),function(){return Xu.D()?new Xu:new Z_}())}createSyncEngine(t,e){return function(i,s,o,a,u,l,c){const h=new Ry(i,s,o,a,u,l);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=L(e);A("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await Gr(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class td{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Se("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new w(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=L(i),a=Rr(o.serializer)+"/documents",u={documents:s.map(d=>Ui(o.serializer,d))},l=await o.Co("BatchGetDocuments",a,u,s.length),c=new Map;l.forEach(d=>{const f=m_(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());nt(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new oa(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=S.fromPath(r);this.mutations.push(new wh(i,this.precondition(i)))}),await async function(r,i){const s=L(r),o=Rr(s.serializer)+"/documents",a={writes:i.map(u=>Nh(s.serializer,u))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw k();e=N.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new w(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(N.min())?Xt.exists(!1):Xt.updateTime(e):Xt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(N.min()))throw new w(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Xt.updateTime(e)}return Xt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $y{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new fa(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const t=new Uy(this.datastore),e=this.za(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(t){try{const e=this.updateFunction(t);return!qr(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(t){this.Wa>0&&this.Ha(t)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(t)}Ha(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Ah(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qy{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Ft.UNAUTHENTICATED,this.clientId=Zc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{A("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(A("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ya(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function Bs(n,t){n.asyncQueue.verifyOperationInProgress(),A("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await Mh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function rl(n,t){n.asyncQueue.verifyOperationInProgress();const e=await By(n);A("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Ju(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Ju(t.remoteStore,s)),n._onlineComponents=t}function jy(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function By(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){A("FirestoreClient","Using user provided OfflineComponentProvider");try{await Bs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!jy(e))throw e;Nn("Error using user provided cache. Falling back to memory cache: "+e),await Bs(n,new nl)}}else A("FirestoreClient","Using default OfflineComponentProvider"),await Bs(n,new nl);return n._offlineComponents}async function Ea(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(A("FirestoreClient","Using user provided OnlineComponentProvider"),await rl(n,n._uninitializedComponentsProvider._online)):(A("FirestoreClient","Using default OnlineComponentProvider"),await rl(n,new Fy))),n._onlineComponents}function zy(n){return Ea(n).then(t=>t.syncEngine)}function Gy(n){return Ea(n).then(t=>t.datastore)}async function ed(n){const t=await Ea(n),e=t.eventManager;return e.onListen=Py.bind(null,t.syncEngine),e.onUnlisten=Cy.bind(null,t.syncEngine),e}function Wy(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new td({next:d=>{o.enqueueAndForget(()=>Wh(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new w(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&u&&u.source==="server"?l.reject(new w(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Kh(sa(a.path),c,{includeMetadataChanges:!0,J_:!0});return Gh(s,h)}(await ed(n),n.asyncQueue,t,e,r)),r.promise}function Ky(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new td({next:d=>{o.enqueueAndForget(()=>Wh(s,h)),d.fromCache&&u.source==="server"?l.reject(new w(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Kh(a,c,{includeMetadataChanges:!0,J_:!0});return Gh(s,h)}(await ed(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */function nd(n){const t={};return n.timeoutSeconds!==void 0&&(t.timeoutSeconds=n.timeoutSeconds),t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const il=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rd(n,t,e){if(!e)throw new w(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Hy(n,t,e,r){if(t===!0&&r===!0)throw new w(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function sl(n){if(!S.isDocumentKey(n))throw new w(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function ol(n){if(S.isDocumentKey(n))throw new w(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function Es(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":k()}function Be(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new w(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=Es(n);throw new w(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new w(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new w(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Hy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=nd((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new w(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Is{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new al({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new w(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new w(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new al(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new gm;switch(r.type){case"firstParty":return new ym(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new w(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=il.get(e);r&&(A("ComponentProvider","Removing Datastore"),il.delete(e),r.terminate())}(this),Promise.resolve()}}function Qy(n,t,e,r={}){var i;const s=(n=Be(n,Is))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ft.MOCK_USER;else{a=Ud(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new w(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ft(l)}n._authCredentials=new pm(new Jc(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class Qt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Qt(this.firestore,t,this._key)}}class Ue extends zn{constructor(t,e,r){super(t,e,sa(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Qt(this.firestore,null,new S(t))}withConverter(t){return new Ue(this.firestore,t,this._path)}}function id(n,t,...e){if(n=kt(n),rd("collection","path",t),n instanceof Is){const r=gt.fromString(t,...e);return ol(r),new Ue(n,null,r)}{if(!(n instanceof Qt||n instanceof Ue))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(t,...e));return ol(r),new Ue(n.firestore,null,r)}}function qi(n,t,...e){if(n=kt(n),arguments.length===1&&(t=Zc.newId()),rd("doc","path",t),n instanceof Is){const r=gt.fromString(t,...e);return sl(r),new Qt(n,null,new S(r))}{if(!(n instanceof Qt||n instanceof Ue))throw new w(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(gt.fromString(t,...e));return sl(r),new Qt(n.firestore,n instanceof Ue?n.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yy{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new fa(this,"async_queue_retry"),this.iu=()=>{const e=js();e&&A("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=js();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=js();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new me;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!$r(t))throw t;A("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Se("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=_a.createAndSchedule(this,t,e,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&k()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class Kr extends Is{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Yy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||sd(this),this._firestoreClient.terminate()}}function nn(n,t){const e=typeof n=="object"?n:ml(),r=typeof n=="string"?n:t||"(default)",i=vo(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Fd("firestore");s&&Qy(i,...s)}return i}function ws(n){return n._firestoreClient||sd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function sd(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,l,c){return new Vm(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,nd(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new qy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new cn(qt.fromBase64String(t))}catch(e){throw new w(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new cn(qt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new w(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Ot(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ia{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wa{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xy=/^__.*__$/;class Jy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new Br(t,this.data,e,this.fieldTransforms)}}class od{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function ad(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw k()}}class Aa{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Aa(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return ji(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(ad(this.Iu)&&Xy.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Zy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ys(t)}pu(t,e,r,i=!1){return new Aa({Iu:t,methodName:e,gu:r,path:Ot.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function Ra(n){const t=n._freezeSettings(),e=ys(n._databaseId);return new Zy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function ud(n,t,e,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,t,e,i);Pa("Data must be an object, but it was:",o,r);const a=ld(r,o);let u,l;if(s.merge)u=new ee(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=_o(t,h,e);if(!o.contains(d))throw new w(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);hd(c,d)||c.push(d)}u=new ee(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Jy(new Gt(a),u,l)}class Rs extends Ia{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof Rs}}function tv(n,t,e,r){const i=n.pu(1,t,e);Pa("Data must be an object, but it was:",i,r);const s=[],o=Gt.empty();dn(r,(u,l)=>{const c=Sa(t,u,e);l=kt(l);const h=i.Ru(c);if(l instanceof Rs)s.push(c);else{const d=Hr(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ee(s);return new od(o,a,i.fieldTransforms)}function ev(n,t,e,r,i,s){const o=n.pu(1,t,e),a=[_o(t,r,e)],u=[i];if(s.length%2!=0)throw new w(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(_o(t,s[d])),u.push(s[d+1]);const l=[],c=Gt.empty();for(let d=a.length-1;d>=0;--d)if(!hd(l,a[d])){const f=a[d];let y=u[d];y=kt(y);const R=o.Ru(f);if(y instanceof Rs)l.push(f);else{const E=Hr(y,R);E!=null&&(l.push(f),c.set(f,E))}}const h=new ee(l);return new od(c,h,o.fieldTransforms)}function nv(n,t,e,r=!1){return Hr(e,n.pu(r?4:3,t))}function Hr(n,t){if(cd(n=kt(n)))return Pa("Unsupported field value:",t,n),ld(n,t);if(n instanceof Ia)return function(r,i){if(!ad(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Hr(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=kt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Xm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=At.fromDate(r);return{timestampValue:Fi(i.serializer,s)}}if(r instanceof At){const s=new At(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Fi(i.serializer,s)}}if(r instanceof wa)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:Ch(i.serializer,r._byteString)};if(r instanceof Qt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:la(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${Es(r)}`)}(n,t)}function ld(n,t){const e={};return th(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dn(n,(r,i)=>{const s=Hr(i,t.Eu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function cd(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof At||n instanceof wa||n instanceof cn||n instanceof Qt||n instanceof Ia)}function Pa(n,t,e){if(!cd(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=Es(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}function _o(n,t,e){if((t=kt(t))instanceof As)return t._internalPath;if(typeof t=="string")return Sa(n,t);throw ji("Field path arguments must be of type string or ",n,!1,void 0,e)}const rv=new RegExp("[~\\*/\\[\\]]");function Sa(n,t,e){if(t.search(rv)>=0)throw ji(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new As(...t.split("."))._internalPath}catch{throw ji(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function ji(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new w(g.INVALID_ARGUMENT,a+n+u)}function hd(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Bi{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Qt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new iv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(dd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class iv extends Bi{data(){return super.data()}}function dd(n,t){return typeof t=="string"?Sa(n,t):t instanceof As?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new w(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Ca{}class ov extends Ca{}function fd(n,t,...e){let r=[];t instanceof Ca&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof Va).length,a=s.filter(u=>u instanceof ka).length;if(o>1||o>0&&a>0)throw new w(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class ka extends ov{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new ka(t,e,r)}_apply(t){const e=this._parse(t);return gd(t._query,e),new zn(t.firestore,t.converter,co(t._query,e))}_parse(t){const e=Ra(t.firestore);return function(s,o,a,u,l,c,h){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new w(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){ll(h,c);const f=[];for(const y of h)f.push(ul(u,s,y));d={arrayValue:{values:f}}}else d=ul(u,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||ll(h,c),d=nv(a,o,h,c==="in"||c==="not-in");return It.create(l,c,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Va extends Ca{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Va(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:ue.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)gd(o,u),o=co(o,u)}(t._query,e),new zn(t.firestore,t.converter,co(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ul(n,t,e){if(typeof(e=kt(e))=="string"){if(e==="")throw new w(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!lh(t)&&e.indexOf("/")!==-1)throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(gt.fromString(e));if(!S.isDocumentKey(r))throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Du(n,new S(r))}if(e instanceof Qt)return Du(n,e._key);throw new w(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${Es(e)}.`)}function ll(n,t){if(!Array.isArray(n)||n.length===0)throw new w(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function gd(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new w(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class pd{convertValue(t,e="none"){switch(ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return Et(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(un(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw k()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return dn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new wa(Et(t.latitude),Et(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=ea(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(Tr(t));default:return null}}convertTimestamp(t){const e=qe(t);return new At(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=gt.fromString(t);nt(Oh(r));const i=new Er(r.get(1),r.get(3)),s=new S(r.popFirst(5));return i.isEqual(e)||Se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function md(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class av extends pd{constructor(t){super(),this.firestore=t}convertBytes(t){return new cn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Qt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Na extends Bi{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new pi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(dd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class pi extends Na{data(t={}){return super.data(t)}}class uv{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new En(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new pi(this._firestore,this._userDataWriter,r.key,r,new En(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new pi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new En(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new pi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new En(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:lv(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function lv(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return k()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cv(n){n=Be(n,Qt);const t=Be(n.firestore,Kr);return Wy(ws(t),n._key).then(e=>fv(t,n,e))}class Da extends pd{constructor(t){super(),this.firestore=t}convertBytes(t){return new cn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Qt(this.firestore,null,e)}}function _d(n){n=Be(n,zn);const t=Be(n.firestore,Kr),e=ws(t),r=new Da(t);return sv(n._query),Ky(e,n._query).then(i=>new uv(t,r,n,i))}function hv(n,t,e){n=Be(n,Qt);const r=Be(n.firestore,Kr),i=md(n.converter,t,e);return dv(r,[ud(Ra(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Xt.none())])}function dv(n,t){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>ky(await zy(r),i,s)),s.promise}(ws(n),t)}function fv(n,t,e){const r=e.docs.get(t._key),i=new Da(n);return new Na(n,i,t._key,r,new En(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const gv={maxAttempts:5};function Yn(n,t){if((n=kt(n)).firestore!==t)throw new w(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class pv extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=Ra(e)}get(e){const r=Yn(e,this._firestore),i=new av(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return k();const o=s[0];if(o.isFoundDocument())return new Bi(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new Bi(this._firestore,i,r._key,null,r.converter);throw k()})}set(e,r,i){const s=Yn(e,this._firestore),o=md(s.converter,r,i),a=ud(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=Yn(e,this._firestore);let a;return a=typeof(r=kt(r))=="string"||r instanceof As?ev(this._dataReader,"Transaction.update",o._key,r,i,s):tv(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=Yn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Yn(t,this._firestore),r=new Da(this._firestore);return super.get(t).then(i=>new Na(this._firestore,r,e._key,i._document,new En(!1,!1),e.converter))}}function mv(n,t,e){n=Be(n,Kr);const r=Object.assign(Object.assign({},gv),e);return function(s){if(s.maxAttempts<1)throw new w(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new me;return s.asyncQueue.enqueueAndForget(async()=>{const l=await Gy(s);new $y(s.asyncQueue,l,a,o,u).run()}),u.promise}(ws(n),i=>t(new pv(n,i)),r)}(function(t,e=!0){(function(i){qn=i})(xn),zs(new Gs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Kr(new mm(r.getProvider("auth-internal")),new Tm(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new w(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Er(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),Ti(Cu,"4.3.2",t),Ti(Cu,"4.3.2","esm2017")})();const _v=async()=>{jd();const n=await yv(),t=await Tv();return{settings:n,supertags:t}},yv=async()=>{var n;try{const{currentUser:t}=ze();if(t)return(n=(await cv(qi(nn(),"users",t.uid))).data())==null?void 0:n.preferences}catch(t){console.warn("Failed to get user document:",t);return}},vv=async n=>{try{const{currentUser:t}=ze();t&&await hv(qi(nn(),"users",t.uid),n,{merge:!0})}catch(t){console.warn("Failed to save user document:",t)}},Tv=async()=>{try{const{currentUser:n}=ze();if(n){const t=await _d(fd(id(nn(),`users/${n.uid}/supertags`))),e=[];return t.forEach(r=>{const i=r.data();e.push($d(r.id,i.description,Object.entries(i.tags).map(s=>qd(s[1],s[0]))))}),e}}catch(n){console.warn("Failed to get user document:",n);return}},Ev=async n=>{try{const{currentUser:t}=ze();t&&await mv(nn(),async e=>{(await _d(fd(id(nn(),`users/${t.uid}/supertags`)))).forEach(async i=>e.delete(qi(nn(),`users/${t.uid}/supertags/${i.id}`))),n.map(i=>e.set(qi(nn(),`users/${t.uid}/supertags`,i.name),{description:i.description,tags:Object.fromEntries(i.tags.map(s=>[s.name,s.modifier]))}))})}catch(t){console.warn("Failed to save user document:",t)}},Iv=async(n,t)=>{Bd(),await vv(n),await Ev(t)},wv=()=>{const n=zd(!1);return ze().onAuthStateChanged(t=>{n.set(t!==null)}),n},Av=wv(),Rv=async n=>{try{const t="kurosearch-config.json";if("showSaveFilePicker"in window){const r=await(await showSaveFilePicker({suggestedName:t})).createWritable();await r.write(n),await r.close()}else{const e=document.createElement("a"),r=new Blob([n],{type:"text/plain"});e.href=URL.createObjectURL(r),e.download=t,e.click(),URL.revokeObjectURL(e.href)}}catch(t){console.error(t)}},Pv=async()=>new Promise(async(n,t)=>{try{if("showOpenFilePicker"in window){const[e]=await showOpenFilePicker(),r=await e.getFile();n(await r.text())}else{let e;const r=i=>{var s=i.target.files[0];if(s){var o=new FileReader;o.onload=a=>{n(a.target.result),document.body.removeChild(e)},o.readAsText(s)}};e=document.createElement("input"),e.type="file",e.style.display="none",e.onchange=r,document.body.appendChild(e),e.click()}}catch(e){t(e)}});function cl(n,t,e){const r=n.slice();return r[26]=t[e],r}function Sv(n){let t;return{c(){t=Wt("Account")},l(e){t=Kt(e,"Account")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function Cv(n){let t;return{c(){t=Wt("Supertags")},l(e){t=Kt(e,"Supertags")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function hl(n){let t,e=`You don't have any supertags yet. You can create them when you have more than one tag\r
				active.`,r,i,s="NOTE: If you had supertags before, please try signing in with Google below and loading them.";return{c(){t=ot("p"),t.textContent=e,r=B(),i=ot("p"),i.textContent=s,this.h()},l(o){t=at(o,"P",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-u30t20"&&(t.textContent=e),r=z(o),i=at(o,"P",{class:!0,"data-svelte-h":!0}),se(i)!=="svelte-1p8u7b5"&&(i.textContent=s),this.h()},h(){J(t,"class","svelte-1jfbuy4"),J(i,"class","svelte-1jfbuy4")},m(o,a){et(o,t,a),et(o,r,a),et(o,i,a)},d(o){o&&(D(t),D(r),D(i))}}}function dl(n){let t,e;return t=new ef({props:{supertag:n[26]}}),t.$on("remove",n[13]),t.$on("edit",n[14]),{c(){lt(t.$$.fragment)},l(r){ct(t.$$.fragment,r)},m(r,i){ht(t,r,i),e=!0},p(r,i){const s={};i&8&&(s.supertag=r[26]),t.$set(s)},i(r){e||($(t.$$.fragment,r),e=!0)},o(r){K(t.$$.fragment,r),e=!1},d(r){dt(t,r)}}}function kv(n){let t;return{c(){t=Wt("Import/Export Data")},l(e){t=Kt(e,"Import/Export Data")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function Vv(n){let t,e="Download Config File";return{c(){t=ot("span"),t.textContent=e,this.h()},l(r){t=at(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-wwbsqq"&&(t.textContent=e),this.h()},h(){J(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,i){et(r,t,i)},p:Sn,d(r){r&&D(t)}}}function Nv(n){let t,e="Load Config File";return{c(){t=ot("span"),t.textContent=e,this.h()},l(r){t=at(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-1ld4bre"&&(t.textContent=e),this.h()},h(){J(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,i){et(r,t,i)},p:Sn,d(r){r&&D(t)}}}function Dv(n){let t;return{c(){t=Wt("Google Account Syncing")},l(e){t=Kt(e,"Google Account Syncing")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function bv(n){let t,e;return t=new Ae({props:{title:"Sign in with google to backup data",$$slots:{default:[Mv]},$$scope:{ctx:n}}}),t.$on("click",n[18]),{c(){lt(t.$$.fragment)},l(r){ct(t.$$.fragment,r)},m(r,i){ht(t,r,i),e=!0},p(r,i){const s={};i&536870912&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||($(t.$$.fragment,r),e=!0)},o(r){K(t.$$.fragment,r),e=!1},d(r){dt(t,r)}}}function Ov(n){let t,e,r,i,s,o;return t=new Ae({props:{type:"secondary",title:"Apply your settings from the cloud.",$$slots:{default:[Lv]},$$scope:{ctx:n}}}),t.$on("click",n[15]),r=new Ae({props:{type:"secondary",title:"Store current settings in the cloud.",$$slots:{default:[xv]},$$scope:{ctx:n}}}),r.$on("click",n[16]),s=new Ae({props:{title:"Sign out",$$slots:{default:[Fv]},$$scope:{ctx:n}}}),s.$on("click",n[17]),{c(){lt(t.$$.fragment),e=B(),lt(r.$$.fragment),i=B(),lt(s.$$.fragment)},l(a){ct(t.$$.fragment,a),e=z(a),ct(r.$$.fragment,a),i=z(a),ct(s.$$.fragment,a)},m(a,u){ht(t,a,u),et(a,e,u),ht(r,a,u),et(a,i,u),ht(s,a,u),o=!0},p(a,u){const l={};u&536870912&&(l.$$scope={dirty:u,ctx:a}),t.$set(l);const c={};u&536870912&&(c.$$scope={dirty:u,ctx:a}),r.$set(c);const h={};u&536870912&&(h.$$scope={dirty:u,ctx:a}),s.$set(h)},i(a){o||($(t.$$.fragment,a),$(r.$$.fragment,a),$(s.$$.fragment,a),o=!0)},o(a){K(t.$$.fragment,a),K(r.$$.fragment,a),K(s.$$.fragment,a),o=!1},d(a){a&&(D(e),D(i)),dt(t,a),dt(r,a),dt(s,a)}}}function Mv(n){let t;return{c(){t=Wt("Connect Google User")},l(e){t=Kt(e,"Connect Google User")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function Lv(n){let t,e="Load Config";return{c(){t=ot("span"),t.textContent=e,this.h()},l(r){t=at(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-g2l2uz"&&(t.textContent=e),this.h()},h(){J(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,i){et(r,t,i)},p:Sn,d(r){r&&D(t)}}}function xv(n){let t,e="Save config";return{c(){t=ot("span"),t.textContent=e,this.h()},l(r){t=at(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-kmcvvq"&&(t.textContent=e),this.h()},h(){J(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,i){et(r,t,i)},p:Sn,d(r){r&&D(t)}}}function Fv(n){let t;return{c(){t=Wt("Sign Out")},l(e){t=Kt(e,"Sign Out")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function Uv(n){let t;return{c(){t=Wt("Delete Data")},l(e){t=Kt(e,"Delete Data")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function $v(n){let t;return{c(){t=Wt("Delete Data")},l(e){t=Kt(e,"Delete Data")},m(e,r){et(e,t,r)},d(e){e&&D(t)}}}function qv(n){let t,e,r,i,s,o,a,u,l,c,h,d,f,y,R="Load and save preferences and supertags to and from a file.",E,I,x,j,F,tt,Q,yt,H,Rt="Load and save preferences and supertags to and from Google.",it,Pt,wt,T,G,Zt,te,U,ke,P,m,C,st,Yt,ut,Y,le,Qr;i=new Cd({props:{$$slots:{default:[Sv]},$$scope:{ctx:n}}}),o=new Yr({props:{$$slots:{default:[Cv]},$$scope:{ctx:n}}});let jt=n[3].items.length===0&&hl(),He=Cn(n[3].items),pt=[];for(let _=0;_<He.length;_+=1)pt[_]=dl(cl(n,He,_));const yd=_=>K(pt[_],1,1,()=>{pt[_]=null});d=new Yr({props:{$$slots:{default:[kv]},$$scope:{ctx:n}}}),x=new Ae({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[Vv]},$$scope:{ctx:n}}}),x.$on("click",n[11]),F=new Ae({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[Nv]},$$scope:{ctx:n}}}),F.$on("click",n[12]),Q=new Yr({props:{$$slots:{default:[Dv]},$$scope:{ctx:n}}});const ba=[Ov,bv],Ve=[];function Oa(_,O){return _[8]?0:1}wt=Oa(n),T=Ve[wt]=ba[wt](n),Zt=new Yr({props:{$$slots:{default:[Uv]},$$scope:{ctx:n}}}),U=new Ae({props:{title:"Delete all your data.",$$slots:{default:[$v]},$$scope:{ctx:n}}}),U.$on("click",n[19]);function vd(_){n[20](_)}let Ma={title:"Load Data",warning:"This will replace all your current settings with settings save online. Are you sure you want to do that?",labelConfirm:"Yes, load settings.",labelCancel:"Cancel"};n[0]!==void 0&&(Ma.dialog=n[0]),P=new ai({props:Ma}),Le.push(()=>Fe(P,"dialog",vd)),P.$on("confirm",n[21]);function Td(_){n[22](_)}let La={title:"Save data online",warning:"This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?",labelConfirm:"Yes, backup online",labelCancel:"Cancel"};n[1]!==void 0&&(La.dialog=n[1]),st=new ai({props:La}),Le.push(()=>Fe(st,"dialog",Td)),st.$on("confirm",n[23]);function Ed(_){n[24](_)}let xa={title:"Delete Data",warning:"This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?",labelConfirm:"Yes, delete it.",labelCancel:"Cancel"};return n[2]!==void 0&&(xa.dialog=n[2]),Y=new ai({props:xa}),Le.push(()=>Fe(Y,"dialog",Ed)),Y.$on("confirm",n[9]),{c(){t=ot("meta"),e=B(),r=ot("section"),lt(i.$$.fragment),s=B(),lt(o.$$.fragment),a=B(),u=ot("div"),jt&&jt.c(),l=B(),c=ot("ul");for(let _=0;_<pt.length;_+=1)pt[_].c();h=B(),lt(d.$$.fragment),f=B(),y=ot("p"),y.textContent=R,E=B(),I=ot("div"),lt(x.$$.fragment),j=B(),lt(F.$$.fragment),tt=B(),lt(Q.$$.fragment),yt=B(),H=ot("p"),H.textContent=Rt,it=B(),Pt=ot("div"),T.c(),G=B(),lt(Zt.$$.fragment),te=B(),lt(U.$$.fragment),ke=B(),lt(P.$$.fragment),C=B(),lt(st.$$.fragment),ut=B(),lt(Y.$$.fragment),this.h()},l(_){const O=wd("svelte-z5j1sh",document.head);t=at(O,"META",{name:!0,content:!0}),O.forEach(D),e=z(_),r=at(_,"SECTION",{class:!0});var Z=zt(r);ct(i.$$.fragment,Z),s=z(Z),ct(o.$$.fragment,Z),a=z(Z),u=at(Z,"DIV",{class:!0});var Qe=zt(u);jt&&jt.l(Qe),l=z(Qe),c=at(Qe,"UL",{});var Gn=zt(c);for(let gn=0;gn<pt.length;gn+=1)pt[gn].l(Gn);Gn.forEach(D),Qe.forEach(D),h=z(Z),ct(d.$$.fragment,Z),f=z(Z),y=at(Z,"P",{class:!0,"data-svelte-h":!0}),se(y)!=="svelte-rgkk1o"&&(y.textContent=R),E=z(Z),I=at(Z,"DIV",{class:!0});var Ye=zt(I);ct(x.$$.fragment,Ye),j=z(Ye),ct(F.$$.fragment,Ye),Ye.forEach(D),tt=z(Z),ct(Q.$$.fragment,Z),yt=z(Z),H=at(Z,"P",{class:!0,"data-svelte-h":!0}),se(H)!=="svelte-pw0g5c"&&(H.textContent=Rt),it=z(Z),Pt=at(Z,"DIV",{class:!0});var Wn=zt(Pt);T.l(Wn),Wn.forEach(D),G=z(Z),ct(Zt.$$.fragment,Z),te=z(Z),ct(U.$$.fragment,Z),Z.forEach(D),ke=z(_),ct(P.$$.fragment,_),C=z(_),ct(st.$$.fragment,_),ut=z(_),ct(Y.$$.fragment,_),this.h()},h(){document.title="kurosearch - Account",J(t,"name","description"),J(t,"content","All of your account data is available on this page."),J(u,"class","supertags"),J(y,"class","svelte-1jfbuy4"),J(I,"class","button-row svelte-1jfbuy4"),J(H,"class","svelte-1jfbuy4"),J(Pt,"class","button-row svelte-1jfbuy4"),J(r,"class","svelte-1jfbuy4")},m(_,O){V(document.head,t),et(_,e,O),et(_,r,O),ht(i,r,null),V(r,s),ht(o,r,null),V(r,a),V(r,u),jt&&jt.m(u,null),V(u,l),V(u,c);for(let Z=0;Z<pt.length;Z+=1)pt[Z]&&pt[Z].m(c,null);V(r,h),ht(d,r,null),V(r,f),V(r,y),V(r,E),V(r,I),ht(x,I,null),V(I,j),ht(F,I,null),V(r,tt),ht(Q,r,null),V(r,yt),V(r,H),V(r,it),V(r,Pt),Ve[wt].m(Pt,null),V(r,G),ht(Zt,r,null),V(r,te),ht(U,r,null),et(_,ke,O),ht(P,_,O),et(_,C,O),ht(st,_,O),et(_,ut,O),ht(Y,_,O),Qr=!0},p(_,[O]){const Z={};O&536870912&&(Z.$$scope={dirty:O,ctx:_}),i.$set(Z);const Qe={};if(O&536870912&&(Qe.$$scope={dirty:O,ctx:_}),o.$set(Qe),_[3].items.length===0?jt||(jt=hl(),jt.c(),jt.m(u,l)):jt&&(jt.d(1),jt=null),O&8){He=Cn(_[3].items);let Bt;for(Bt=0;Bt<He.length;Bt+=1){const Ba=cl(_,He,Bt);pt[Bt]?(pt[Bt].p(Ba,O),$(pt[Bt],1)):(pt[Bt]=dl(Ba),pt[Bt].c(),$(pt[Bt],1),pt[Bt].m(c,null))}for(yi(),Bt=He.length;Bt<pt.length;Bt+=1)yd(Bt);vi()}const Gn={};O&536870912&&(Gn.$$scope={dirty:O,ctx:_}),d.$set(Gn);const Ye={};O&536870912&&(Ye.$$scope={dirty:O,ctx:_}),x.$set(Ye);const Wn={};O&536870912&&(Wn.$$scope={dirty:O,ctx:_}),F.$set(Wn);const gn={};O&536870912&&(gn.$$scope={dirty:O,ctx:_}),Q.$set(gn);let Ps=wt;wt=Oa(_),wt===Ps?Ve[wt].p(_,O):(yi(),K(Ve[Ps],1,1,()=>{Ve[Ps]=null}),vi(),T=Ve[wt],T?T.p(_,O):(T=Ve[wt]=ba[wt](_),T.c()),$(T,1),T.m(Pt,null));const Fa={};O&536870912&&(Fa.$$scope={dirty:O,ctx:_}),Zt.$set(Fa);const Ua={};O&536870912&&(Ua.$$scope={dirty:O,ctx:_}),U.$set(Ua);const $a={};!m&&O&1&&(m=!0,$a.dialog=_[0],xe(()=>m=!1)),P.$set($a);const qa={};!Yt&&O&2&&(Yt=!0,qa.dialog=_[1],xe(()=>Yt=!1)),st.$set(qa);const ja={};!le&&O&4&&(le=!0,ja.dialog=_[2],xe(()=>le=!1)),Y.$set(ja)},i(_){if(!Qr){$(i.$$.fragment,_),$(o.$$.fragment,_);for(let O=0;O<He.length;O+=1)$(pt[O]);$(d.$$.fragment,_),$(x.$$.fragment,_),$(F.$$.fragment,_),$(Q.$$.fragment,_),$(T),$(Zt.$$.fragment,_),$(U.$$.fragment,_),$(P.$$.fragment,_),$(st.$$.fragment,_),$(Y.$$.fragment,_),Qr=!0}},o(_){K(i.$$.fragment,_),K(o.$$.fragment,_),pt=pt.filter(Boolean);for(let O=0;O<pt.length;O+=1)K(pt[O]);K(d.$$.fragment,_),K(x.$$.fragment,_),K(F.$$.fragment,_),K(Q.$$.fragment,_),K(T),K(Zt.$$.fragment,_),K(U.$$.fragment,_),K(P.$$.fragment,_),K(st.$$.fragment,_),K(Y.$$.fragment,_),Qr=!1},d(_){_&&(D(e),D(r),D(ke),D(C),D(ut)),D(t),dt(i),dt(o),jt&&jt.d(),yo(pt,_),dt(d),dt(x),dt(F),dt(Q),Ve[wt].d(),dt(Zt),dt(U),dt(P,_),dt(st,_),dt(Y,_)}}}function jv(n,t,e){let r,i,s,o,a,u;pn(n,Xe,T=>e(3,r=T)),pn(n,Cs,T=>e(4,i=T)),pn(n,ks,T=>e(5,s=T)),pn(n,Vs,T=>e(6,o=T)),pn(n,Ss,T=>e(7,a=T)),pn(n,Av,T=>e(8,u=T));const l=()=>{Xe.reset()},c=()=>({[vt.LocalstorageEnabled]:a,[vt.Theme]:o,[vt.BlockedContent]:s,[vt.ResultColumns]:i,[vt.Supertags]:r}),h=T=>{oe(Ss,a=T[vt.LocalstorageEnabled],a),oe(Vs,o=T[vt.Theme],o),oe(ks,s=T[vt.BlockedContent],s),oe(Cs,i=T[vt.ResultColumns],i),oe(Xe,r=T[vt.Supertags],r)},d=async()=>{try{const T=c(),G=JSON.stringify(T,void 0,2);await Rv(G)}catch(T){console.error(T)}},f=async()=>{try{const T=await Pv(),G=JSON.parse(T);h(G)}catch(T){console.error(T)}};let y,R,E;const I=T=>Xe.remove(T.detail),x=T=>{Xe.update(T.detail.oldName,T.detail.newSupertag)},j=()=>{y.showModal(),er("dialog")},F=()=>{R.showModal(),er("dialog")},tt=()=>op(),Q=()=>sp(),yt=()=>{E.showModal(),er("dialog")};function H(T){y=T,e(0,y)}const Rt=async()=>{const T=await _v();T.settings&&(T.settings[vt.LocalstorageEnabled]&&oe(Ss,a=T.settings[vt.LocalstorageEnabled],a),T.settings[vt.Theme]&&oe(Vs,o=T.settings[vt.Theme],o),T.settings[vt.BlockedContent]&&oe(ks,s=T.settings[vt.BlockedContent],s),T.settings[vt.ResultColumns]&&oe(Cs,i=T.settings[vt.ResultColumns],i),T.settings[vt.Supertags]&&oe(Xe,r=T.settings[vt.Supertags],r)),T.supertags&&oe(Xe,r.items=T.supertags,r)};function it(T){R=T,e(1,R)}const Pt=async()=>{await Iv(c(),r.items)};function wt(T){E=T,e(2,E)}return[y,R,E,r,i,s,o,a,u,l,c,d,f,I,x,j,F,tt,Q,yt,H,Rt,it,Pt,wt]}class gT extends Gi{constructor(t){super(),Wi(this,t,jv,qv,zi,{})}}export{gT as component};
