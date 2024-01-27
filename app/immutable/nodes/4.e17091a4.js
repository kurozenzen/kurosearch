import{s as ji,f as it,l as Ht,g as st,h as Wt,m as Qt,d as D,j as ct,r as ja,i as Z,u as V,G as gi,R as Td,n as ii,v as Sn,I as hl,M as pi,p as Le,D as xe,E as dl,a as q,y as se,c as j,H as mo,x as Ed,C as pn,O as ae}from"../chunks/scheduler.19d3c358.js";import{S as Bi,i as zi,f as Fe,b as ot,d as at,m as ut,a as U,t as G,e as lt,g as mi,c as _i}from"../chunks/index.2b8f9697.js";import{e as Cn}from"../chunks/each.e59479a4.js";import{C as si,l as Rs}from"../chunks/localstorage-enabled-store.d90b0021.js";import{D as Id,r as Ps}from"../chunks/result-columns-store.9e2a8a54.js";import{T as Ba}from"../chunks/TextInput.169e006c.js";import{S as wd}from"../chunks/Searchbar.fe06fd75.js";import{g as Ad}from"../chunks/tags.49324235.js";import{a as za}from"../chunks/format-tag.7e313273.js";import{M as Ga}from"../chunks/tag-modifier-data.021c0243.js";import{T as Ae}from"../chunks/TextButton.789ba0e4.js";import{n as Rd,s as Xe}from"../chunks/supertags-store.6b070b5e.js";import{H as Pd,a as Hr}from"../chunks/Heading3.7b972ebe.js";import{g as fl,i as Sd,a as Cd,b as Vt,_ as js,C as Bs,r as yi,c as _o,d as kd,e as gl,f as Vd,S as xn,E as yo,h as Nd,j as Dd,q as Rr,L as ce,k as te,l as bd,m as pl,F as Gi,n as Od,o as Md,p as Ld,s as xd}from"../chunks/index.esm2017.b35d87a0.js";import{c as Fd,a as Ud}from"../chunks/tag-utils.ceb6413c.js";import{a as $d,b as qd}from"../chunks/analytics.b280da65.js";import{b as Ss}from"../chunks/blocked-content-store.510169cf.js";import{w as jd}from"../chunks/index.9a744ac7.js";import"../chunks/firebase.68ed9652.js";import{S as Tt}from"../chunks/store-keys.daa8b517.js";import{t as Cs}from"../chunks/theme-store.fdf29f94.js";function Bd(n){let t,e=za(n[0].name)+"",r,i,s,o;return{c(){t=it("button"),r=Ht(e),this.h()},l(a){t=st(a,"BUTTON",{class:!0});var u=Wt(t);r=Qt(u,e),u.forEach(D),this.h()},h(){ct(t,"class",i=ja(Ga[n[0].modifier])+" svelte-1kb5f0w")},m(a,u){Z(a,t,u),V(t,r),s||(o=[gi(t,"click",n[1]),gi(t,"contextmenu",Td(n[2]))],s=!0)},p(a,[u]){u&1&&e!==(e=za(a[0].name)+"")&&ii(r,e),u&1&&i!==(i=ja(Ga[a[0].modifier])+" svelte-1kb5f0w")&&ct(t,"class",i)},i:Sn,o:Sn,d(a){a&&D(t),s=!1,hl(o)}}}function zd(n,t,e){let{tag:r}=t;function i(o){pi.call(this,n,o)}function s(o){pi.call(this,n,o)}return n.$$set=o=>{"tag"in o&&e(0,r=o.tag)},[r,i,s]}class ml extends Bi{constructor(t){super(),zi(this,t,zd,Bd,ji,{tag:0})}}function Wa(n,t,e){const r=n.slice();return r[14]=t[e],r[16]=e,r}function Ka(n){let t,e;function r(){return n[7](n[16])}function i(){return n[8](n[16],n[14])}return t=new ml({props:{tag:n[14]}}),t.$on("click",r),t.$on("contextmenu",i),{c(){ot(t.$$.fragment)},l(s){at(t.$$.fragment,s)},m(s,o){ut(t,s,o),e=!0},p(s,o){n=s;const a={};o&2&&(a.tag=n[14]),t.$set(a)},i(s){e||(U(t.$$.fragment,s),e=!0)},o(s){G(t.$$.fragment,s),e=!1},d(s){lt(t,s)}}}function Gd(n){let t;return{c(){t=Ht("Save")},l(e){t=Qt(e,"Save")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Wd(n){let t;return{c(){t=Ht("Cancel")},l(e){t=Qt(e,"Cancel")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Kd(n){let t,e,r="Edit Supertag",i,s,o="Name",a,u,l,c,h,d="Description",f,E,A,y,T,W="Add or remove tags",x,K,B,rt,gt,nt,At,H,mt;function Rt(k){n[4](k)}let w={placeholder:"Name",autocomplete:"false"};n[1].name!==void 0&&(w.value=n[1].name),u=new Ba({props:w}),Le.push(()=>Fe(u,"value",Rt));function F(k){n[5](k)}let ke={placeholder:"Description",autocomplete:"false"};n[1].description!==void 0&&(ke.value=n[1].description),E=new Ba({props:ke}),Le.push(()=>Fe(E,"value",F)),K=new wd({props:{placeholder:"Search for tags",fetchSuggestions:Ad}}),K.$on("pick",n[6]);let Pt=Cn(n[1].tags),Q=[];for(let k=0;k<Pt.length;k+=1)Q[k]=Ka(Wa(n,Pt,k));const Jt=k=>G(Q[k],1,1,()=>{Q[k]=null});return nt=new Ae({props:{title:"Save changes",$$slots:{default:[Gd]},$$scope:{ctx:n}}}),nt.$on("click",n[9]),H=new Ae({props:{type:"secondary",title:"Cancel",$$slots:{default:[Wd]},$$scope:{ctx:n}}}),H.$on("click",n[10]),{c(){t=it("div"),e=it("h3"),e.textContent=r,i=q(),s=it("span"),s.textContent=o,a=q(),ot(u.$$.fragment),c=q(),h=it("span"),h.textContent=d,f=q(),ot(E.$$.fragment),y=q(),T=it("span"),T.textContent=W,x=q(),ot(K.$$.fragment),B=q(),rt=it("ul");for(let k=0;k<Q.length;k+=1)Q[k].c();gt=q(),ot(nt.$$.fragment),At=q(),ot(H.$$.fragment),this.h()},l(k){t=st(k,"DIV",{class:!0});var m=Wt(t);e=st(m,"H3",{"data-svelte-h":!0}),se(e)!=="svelte-1q4lkkx"&&(e.textContent=r),i=j(m),s=st(m,"SPAN",{class:!0,"data-svelte-h":!0}),se(s)!=="svelte-15ueaex"&&(s.textContent=o),a=j(m),at(u.$$.fragment,m),c=j(m),h=st(m,"SPAN",{class:!0,"data-svelte-h":!0}),se(h)!=="svelte-rmspr8"&&(h.textContent=d),f=j(m),at(E.$$.fragment,m),y=j(m),T=st(m,"SPAN",{class:!0,"data-svelte-h":!0}),se(T)!=="svelte-1ripwej"&&(T.textContent=W),x=j(m),at(K.$$.fragment,m),B=j(m),rt=st(m,"UL",{class:!0});var P=Wt(rt);for(let vt=0;vt<Q.length;vt+=1)Q[vt].l(P);P.forEach(D),gt=j(m),at(nt.$$.fragment,m),At=j(m),at(H.$$.fragment,m),m.forEach(D),this.h()},h(){ct(s,"class","svelte-1hhm2px"),ct(h,"class","svelte-1hhm2px"),ct(T,"class","svelte-1hhm2px"),ct(rt,"class","svelte-1hhm2px"),ct(t,"class","svelte-1hhm2px")},m(k,m){Z(k,t,m),V(t,e),V(t,i),V(t,s),V(t,a),ut(u,t,null),V(t,c),V(t,h),V(t,f),ut(E,t,null),V(t,y),V(t,T),V(t,x),ut(K,t,null),V(t,B),V(t,rt);for(let P=0;P<Q.length;P+=1)Q[P]&&Q[P].m(rt,null);V(t,gt),ut(nt,t,null),V(t,At),ut(H,t,null),mt=!0},p(k,m){const P={};!l&&m&2&&(l=!0,P.value=k[1].name,xe(()=>l=!1)),u.$set(P);const vt={};if(!A&&m&2&&(A=!0,vt.value=k[1].description,xe(()=>A=!1)),E.$set(vt),m&2){Pt=Cn(k[1].tags);let ht;for(ht=0;ht<Pt.length;ht+=1){const oe=Wa(k,Pt,ht);Q[ht]?(Q[ht].p(oe,m),U(Q[ht],1)):(Q[ht]=Ka(oe),Q[ht].c(),U(Q[ht],1),Q[ht].m(rt,null))}for(mi(),ht=Pt.length;ht<Q.length;ht+=1)Jt(ht);_i()}const Bt={};m&131072&&(Bt.$$scope={dirty:m,ctx:k}),nt.$set(Bt);const Y={};m&131072&&(Y.$$scope={dirty:m,ctx:k}),H.$set(Y)},i(k){if(!mt){U(u.$$.fragment,k),U(E.$$.fragment,k),U(K.$$.fragment,k);for(let m=0;m<Pt.length;m+=1)U(Q[m]);U(nt.$$.fragment,k),U(H.$$.fragment,k),mt=!0}},o(k){G(u.$$.fragment,k),G(E.$$.fragment,k),G(K.$$.fragment,k),Q=Q.filter(Boolean);for(let m=0;m<Q.length;m+=1)G(Q[m]);G(nt.$$.fragment,k),G(H.$$.fragment,k),mt=!1},d(k){k&&D(t),lt(u),lt(E),lt(K),mo(Q,k),lt(nt),lt(H)}}}function Hd(n){let t,e,r;function i(o){n[11](o)}let s={$$slots:{default:[Kd]},$$scope:{ctx:n}};return n[0]!==void 0&&(s.dialog=n[0]),t=new Id({props:s}),Le.push(()=>Fe(t,"dialog",i)),t.$on("close",n[12]),{c(){ot(t.$$.fragment)},l(o){at(t.$$.fragment,o)},m(o,a){ut(t,o,a),r=!0},p(o,[a]){const u={};a&131075&&(u.$$scope={dirty:a,ctx:o}),!e&&a&1&&(e=!0,u.dialog=o[0],xe(()=>e=!1)),t.$set(u)},i(o){r||(U(t.$$.fragment,o),r=!0)},o(o){G(t.$$.fragment,o),r=!1},d(o){lt(t,o)}}}function Qd(n,t,e){let{dialog:r}=t,{supertag:i}=t;const s=dl(),o=()=>s("edit",{oldName:i.name,newSupertag:a});let a={...i,tags:[...i.tags]};function u(T){n.$$.not_equal(a.name,T)&&(a.name=T,e(1,a))}function l(T){n.$$.not_equal(a.description,T)&&(a.description=T,e(1,a))}const c=T=>{e(1,a.tags=[...a.tags,{modifier:T.detail.modifier,name:T.detail.label}],a)},h=T=>{a.tags.splice(T,1),e(1,a.tags=[...a.tags],a)},d=(T,W)=>{e(1,a.tags[T].modifier=Rd(W.modifier),a)},f=()=>{o(),r.close()},E=()=>r.close();function A(T){r=T,e(0,r)}function y(T){pi.call(this,n,T)}return n.$$set=T=>{"dialog"in T&&e(0,r=T.dialog),"supertag"in T&&e(3,i=T.supertag)},[r,a,o,i,u,l,c,h,d,f,E,A,y]}class Yd extends Bi{constructor(t){super(),zi(this,t,Qd,Hd,ji,{dialog:0,supertag:3})}}function Ha(n,t,e){const r=n.slice();return r[10]=t[e],r}function Qa(n){let t,e;return t=new ml({props:{tag:n[10]}}),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,i){const s={};i&1&&(s.tag=r[10]),t.$set(s)},i(r){e||(U(t.$$.fragment,r),e=!0)},o(r){G(t.$$.fragment,r),e=!1},d(r){lt(t,r)}}}function Xd(n){let t,e,r=n[0].name+"",i,s,o,a=Object.keys(n[0].tags).length+"",u,l,c,h,d,f,E,A,y=(n[0].description||n[0].name)+"",T,W,x,K,B,rt,gt,nt,At,H,mt,Rt,w=Cn(n[0].tags),F=[];for(let m=0;m<w.length;m+=1)F[m]=Qa(Ha(n,w,m));const ke=m=>G(F[m],1,1,()=>{F[m]=null});function Pt(m){n[6](m)}let Q={title:"Delete Supertag",warning:"Are you sure? You will not be able to undo it.",labelCancel:"No, keep it!",labelConfirm:"Yes, delete it."};n[1]!==void 0&&(Q.dialog=n[1]),B=new si({props:Q}),Le.push(()=>Fe(B,"dialog",Pt)),B.$on("confirm",n[7]);function Jt(m){n[8](m)}let k={supertag:n[0]};return n[2]!==void 0&&(k.dialog=n[2]),nt=new Yd({props:k}),Le.push(()=>Fe(nt,"dialog",Jt)),nt.$on("edit",n[9]),{c(){t=it("li"),e=it("h3"),i=Ht(r),s=q(),o=it("small"),u=Ht(a),l=Ht(" tags"),c=q(),h=it("button"),d=q(),f=it("button"),E=q(),A=it("span"),T=Ht(y),W=q(),x=it("ol");for(let m=0;m<F.length;m+=1)F[m].c();K=q(),ot(B.$$.fragment),gt=q(),ot(nt.$$.fragment),this.h()},l(m){t=st(m,"LI",{class:!0});var P=Wt(t);e=st(P,"H3",{class:!0});var vt=Wt(e);i=Qt(vt,r),vt.forEach(D),s=j(P),o=st(P,"SMALL",{class:!0});var Bt=Wt(o);u=Qt(Bt,a),l=Qt(Bt," tags"),Bt.forEach(D),c=j(P),h=st(P,"BUTTON",{class:!0}),Wt(h).forEach(D),d=j(P),f=st(P,"BUTTON",{class:!0}),Wt(f).forEach(D),E=j(P),A=st(P,"SPAN",{class:!0});var Y=Wt(A);T=Qt(Y,y),Y.forEach(D),W=j(P),x=st(P,"OL",{class:!0});var ht=Wt(x);for(let oe=0;oe<F.length;oe+=1)F[oe].l(ht);ht.forEach(D),P.forEach(D),K=j(m),at(B.$$.fragment,m),gt=j(m),at(nt.$$.fragment,m),this.h()},h(){ct(e,"class","svelte-1u6eufx"),ct(o,"class","svelte-1u6eufx"),ct(h,"class","codicon codicon-edit svelte-1u6eufx"),ct(f,"class","codicon codicon-close svelte-1u6eufx"),ct(A,"class","svelte-1u6eufx"),ct(x,"class","svelte-1u6eufx"),ct(t,"class","svelte-1u6eufx")},m(m,P){Z(m,t,P),V(t,e),V(e,i),V(t,s),V(t,o),V(o,u),V(o,l),V(t,c),V(t,h),V(t,d),V(t,f),V(t,E),V(t,A),V(A,T),V(t,W),V(t,x);for(let vt=0;vt<F.length;vt+=1)F[vt]&&F[vt].m(x,null);Z(m,K,P),ut(B,m,P),Z(m,gt,P),ut(nt,m,P),H=!0,mt||(Rt=[gi(h,"click",n[4]),gi(f,"click",n[5])],mt=!0)},p(m,[P]){if((!H||P&1)&&r!==(r=m[0].name+"")&&ii(i,r),(!H||P&1)&&a!==(a=Object.keys(m[0].tags).length+"")&&ii(u,a),(!H||P&1)&&y!==(y=(m[0].description||m[0].name)+"")&&ii(T,y),P&1){w=Cn(m[0].tags);let Y;for(Y=0;Y<w.length;Y+=1){const ht=Ha(m,w,Y);F[Y]?(F[Y].p(ht,P),U(F[Y],1)):(F[Y]=Qa(ht),F[Y].c(),U(F[Y],1),F[Y].m(x,null))}for(mi(),Y=w.length;Y<F.length;Y+=1)ke(Y);_i()}const vt={};!rt&&P&2&&(rt=!0,vt.dialog=m[1],xe(()=>rt=!1)),B.$set(vt);const Bt={};P&1&&(Bt.supertag=m[0]),!At&&P&4&&(At=!0,Bt.dialog=m[2],xe(()=>At=!1)),nt.$set(Bt)},i(m){if(!H){for(let P=0;P<w.length;P+=1)U(F[P]);U(B.$$.fragment,m),U(nt.$$.fragment,m),H=!0}},o(m){F=F.filter(Boolean);for(let P=0;P<F.length;P+=1)G(F[P]);G(B.$$.fragment,m),G(nt.$$.fragment,m),H=!1},d(m){m&&(D(t),D(K),D(gt)),mo(F,m),lt(B,m),lt(nt,m),mt=!1,hl(Rt)}}}function Jd(n,t,e){const r=dl();let{supertag:i}=t,s,o;const a=()=>o.showModal(),u=()=>s.showModal();function l(f){s=f,e(1,s)}const c=()=>r("remove",i);function h(f){o=f,e(2,o)}function d(f){pi.call(this,n,f)}return n.$$set=f=>{"supertag"in f&&e(0,i=f.supertag)},[i,s,o,r,a,u,l,c,h,d]}class Zd extends Bi{constructor(t){super(),zi(this,t,Jd,Xd,ji,{supertag:0})}}function vo(n,t){var e={};for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&t.indexOf(r)<0&&(e[r]=n[r]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(n);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(n,r[i])&&(e[r[i]]=n[r[i]]);return e}function _l(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const tf=_l,yl=new yo("auth","Firebase",_l());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vi=new pl("@firebase/auth");function ef(n,...t){vi.logLevel<=ce.WARN&&vi.warn(`Auth (${xn}): ${n}`,...t)}function oi(n,...t){vi.logLevel<=ce.ERROR&&vi.error(`Auth (${xn}): ${n}`,...t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(n,...t){throw To(n,...t)}function ge(n,...t){return To(n,...t)}function vl(n,t,e){const r=Object.assign(Object.assign({},tf()),{[t]:e});return new yo("auth","Firebase",r).create(t,{appName:n.name})}function nf(n,t,e){const r=e;if(!(t instanceof r))throw r.name!==t.constructor.name&&ye(n,"argument-error"),vl(n,"argument-error",`Type of ${t.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function To(n,...t){if(typeof n!="string"){const e=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=n.name),n._errorFactory.create(e,...r)}return yl.create(n,...t)}function O(n,t,...e){if(!n)throw To(t,...e)}function Ee(n){const t="INTERNAL ASSERTION FAILED: "+n;throw oi(t),new Error(t)}function Re(n,t){n||Ee(t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function rf(){return Ya()==="http:"||Ya()==="https:"}function Ya(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sf(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(rf()||Vd()||"connection"in navigator)?navigator.onLine:!0}function of(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{constructor(t,e){this.shortDelay=t,this.longDelay=e,Re(e>t,"Short delay should be less than long delay!"),this.isMobile=Sd()||Cd()}get(){return sf()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Eo(n,t){Re(n.emulator,"Emulator should always be set here");const{url:e}=n.emulator;return t?`${e}${t.startsWith("/")?t.slice(1):t}`:e}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tl{static initialize(t,e,r){this.fetchImpl=t,e&&(this.headersImpl=e),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;if(typeof globalThis<"u"&&globalThis.fetch)return globalThis.fetch;if(typeof fetch<"u")return fetch;Ee("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;if(typeof globalThis<"u"&&globalThis.Headers)return globalThis.Headers;if(typeof Headers<"u")return Headers;Ee("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;if(typeof globalThis<"u"&&globalThis.Response)return globalThis.Response;if(typeof Response<"u")return Response;Ee("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const af={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const uf=new Pr(3e4,6e4);function Io(n,t){return n.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:n.tenantId}):t}async function Fn(n,t,e,r,i={}){return El(n,i,async()=>{let s={},o={};r&&(t==="GET"?o=r:s={body:JSON.stringify(r)});const a=Rr(Object.assign({key:n.config.apiKey},o)).slice(1),u=await n._getAdditionalHeaders();return u["Content-Type"]="application/json",n.languageCode&&(u["X-Firebase-Locale"]=n.languageCode),Tl.fetch()(Il(n,n.config.apiHost,e,a),Object.assign({method:t,headers:u,referrerPolicy:"no-referrer"},s))})}async function El(n,t,e){n._canInitEmulator=!1;const r=Object.assign(Object.assign({},af),t);try{const i=new cf(n),s=await Promise.race([e(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Qr(n,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[u,l]=a.split(" : ");if(u==="FEDERATED_USER_ID_ALREADY_LINKED")throw Qr(n,"credential-already-in-use",o);if(u==="EMAIL_EXISTS")throw Qr(n,"email-already-in-use",o);if(u==="USER_DISABLED")throw Qr(n,"user-disabled",o);const c=r[u]||u.toLowerCase().replace(/[_\s]+/g,"-");if(l)throw vl(n,c,l);ye(n,c)}}catch(i){if(i instanceof Gi)throw i;ye(n,"network-request-failed",{message:String(i)})}}async function lf(n,t,e,r,i={}){const s=await Fn(n,t,e,r,i);return"mfaPendingCredential"in s&&ye(n,"multi-factor-auth-required",{_serverResponse:s}),s}function Il(n,t,e,r){const i=`${t}${e}?${r}`;return n.config.emulator?Eo(n.config,i):`${n.config.apiScheme}://${i}`}class cf{constructor(t){this.auth=t,this.timer=null,this.promise=new Promise((e,r)=>{this.timer=setTimeout(()=>r(ge(this.auth,"network-request-failed")),uf.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Qr(n,t,e){const r={appName:n.name};e.email&&(r.email=e.email),e.phoneNumber&&(r.phoneNumber=e.phoneNumber);const i=ge(n,t,r);return i.customData._tokenResponse=e,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hf(n,t){return Fn(n,"POST","/v1/accounts:delete",t)}async function df(n,t){return Fn(n,"POST","/v1/accounts:lookup",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function er(n){if(n)try{const t=new Date(Number(n));if(!isNaN(t.getTime()))return t.toUTCString()}catch{}}async function ff(n,t=!1){const e=Vt(n),r=await e.getIdToken(t),i=wo(r);O(i&&i.exp&&i.auth_time&&i.iat,e.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:er(ks(i.auth_time)),issuedAtTime:er(ks(i.iat)),expirationTime:er(ks(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function ks(n){return Number(n)*1e3}function wo(n){const[t,e,r]=n.split(".");if(t===void 0||e===void 0||r===void 0)return oi("JWT malformed, contained fewer than 3 sections"),null;try{const i=Od(e);return i?JSON.parse(i):(oi("Failed to decode base64 JWT payload"),null)}catch(i){return oi("Caught error parsing JWT payload as JSON",i==null?void 0:i.toString()),null}}function gf(n){const t=wo(n);return O(t,"internal-error"),O(typeof t.exp<"u","internal-error"),O(typeof t.iat<"u","internal-error"),Number(t.exp)-Number(t.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ur(n,t,e=!1){if(e)return t;try{return await t}catch(r){throw r instanceof Gi&&pf(r)&&n.auth.currentUser===n&&await n.auth.signOut(),r}}function pf({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mf{constructor(t){this.user=t,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(t){var e;if(t){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((e=this.user.stsTokenManager.expirationTime)!==null&&e!==void 0?e:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(t=!1){if(!this.isRunning)return;const e=this.getInterval(t);this.timerId=setTimeout(async()=>{await this.iteration()},e)}async iteration(){try{await this.user.getIdToken(!0)}catch(t){(t==null?void 0:t.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wl{constructor(t,e){this.createdAt=t,this.lastLoginAt=e,this._initializeTime()}_initializeTime(){this.lastSignInTime=er(this.lastLoginAt),this.creationTime=er(this.createdAt)}_copy(t){this.createdAt=t.createdAt,this.lastLoginAt=t.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ti(n){var t;const e=n.auth,r=await n.getIdToken(),i=await ur(n,df(e,{idToken:r}));O(i==null?void 0:i.users.length,e,"internal-error");const s=i.users[0];n._notifyReloadListener(s);const o=!((t=s.providerUserInfo)===null||t===void 0)&&t.length?vf(s.providerUserInfo):[],a=yf(n.providerData,o),u=n.isAnonymous,l=!(n.email&&s.passwordHash)&&!(a!=null&&a.length),c=u?l:!1,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new wl(s.createdAt,s.lastLoginAt),isAnonymous:c};Object.assign(n,h)}async function _f(n){const t=Vt(n);await Ti(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function yf(n,t){return[...n.filter(r=>!t.some(i=>i.providerId===r.providerId)),...t]}function vf(n){return n.map(t=>{var{providerId:e}=t,r=vo(t,["providerId"]);return{providerId:e,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tf(n,t){const e=await El(n,{},async()=>{const r=Rr({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=n.config,o=Il(n,i,"/v1/token",`key=${s}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Tl.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:e.access_token,expiresIn:e.expires_in,refreshToken:e.refresh_token}}async function Ef(n,t){return Fn(n,"POST","/v2/accounts:revokeToken",Io(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lr{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(t){O(t.idToken,"internal-error"),O(typeof t.idToken<"u","internal-error"),O(typeof t.refreshToken<"u","internal-error");const e="expiresIn"in t&&typeof t.expiresIn<"u"?Number(t.expiresIn):gf(t.idToken);this.updateTokensAndExpiration(t.idToken,t.refreshToken,e)}async getToken(t,e=!1){return O(!this.accessToken||this.refreshToken,t,"user-token-expired"),!e&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(t,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(t,e){const{accessToken:r,refreshToken:i,expiresIn:s}=await Tf(t,e);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(t,e,r){this.refreshToken=e||null,this.accessToken=t||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(t,e){const{refreshToken:r,accessToken:i,expirationTime:s}=e,o=new lr;return r&&(O(typeof r=="string","internal-error",{appName:t}),o.refreshToken=r),i&&(O(typeof i=="string","internal-error",{appName:t}),o.accessToken=i),s&&(O(typeof s=="number","internal-error",{appName:t}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(t){this.accessToken=t.accessToken,this.refreshToken=t.refreshToken,this.expirationTime=t.expirationTime}_clone(){return Object.assign(new lr,this.toJSON())}_performRefresh(){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ne(n,t){O(typeof n=="string"||typeof n>"u","internal-error",{appName:t})}class rn{constructor(t){var{uid:e,auth:r,stsTokenManager:i}=t,s=vo(t,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new mf(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=e,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new wl(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(t){const e=await ur(this,this.stsTokenManager.getToken(this.auth,t));return O(e,this.auth,"internal-error"),this.accessToken!==e&&(this.accessToken=e,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),e}getIdTokenResult(t){return ff(this,t)}reload(){return _f(this)}_assign(t){this!==t&&(O(this.uid===t.uid,this.auth,"internal-error"),this.displayName=t.displayName,this.photoURL=t.photoURL,this.email=t.email,this.emailVerified=t.emailVerified,this.phoneNumber=t.phoneNumber,this.isAnonymous=t.isAnonymous,this.tenantId=t.tenantId,this.providerData=t.providerData.map(e=>Object.assign({},e)),this.metadata._copy(t.metadata),this.stsTokenManager._assign(t.stsTokenManager))}_clone(t){const e=new rn(Object.assign(Object.assign({},this),{auth:t,stsTokenManager:this.stsTokenManager._clone()}));return e.metadata._copy(this.metadata),e}_onReload(t){O(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=t,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(t){this.reloadListener?this.reloadListener(t):this.reloadUserInfo=t}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(t,e=!1){let r=!1;t.idToken&&t.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(t),r=!0),e&&await Ti(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const t=await this.getIdToken();return await ur(this,hf(this.auth,{idToken:t})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(t=>Object.assign({},t)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(t,e){var r,i,s,o,a,u,l,c;const h=(r=e.displayName)!==null&&r!==void 0?r:void 0,d=(i=e.email)!==null&&i!==void 0?i:void 0,f=(s=e.phoneNumber)!==null&&s!==void 0?s:void 0,E=(o=e.photoURL)!==null&&o!==void 0?o:void 0,A=(a=e.tenantId)!==null&&a!==void 0?a:void 0,y=(u=e._redirectEventId)!==null&&u!==void 0?u:void 0,T=(l=e.createdAt)!==null&&l!==void 0?l:void 0,W=(c=e.lastLoginAt)!==null&&c!==void 0?c:void 0,{uid:x,emailVerified:K,isAnonymous:B,providerData:rt,stsTokenManager:gt}=e;O(x&&gt,t,"internal-error");const nt=lr.fromJSON(this.name,gt);O(typeof x=="string",t,"internal-error"),Ne(h,t.name),Ne(d,t.name),O(typeof K=="boolean",t,"internal-error"),O(typeof B=="boolean",t,"internal-error"),Ne(f,t.name),Ne(E,t.name),Ne(A,t.name),Ne(y,t.name),Ne(T,t.name),Ne(W,t.name);const At=new rn({uid:x,auth:t,email:d,emailVerified:K,displayName:h,isAnonymous:B,photoURL:E,phoneNumber:f,tenantId:A,stsTokenManager:nt,createdAt:T,lastLoginAt:W});return rt&&Array.isArray(rt)&&(At.providerData=rt.map(H=>Object.assign({},H))),y&&(At._redirectEventId=y),At}static async _fromIdTokenResponse(t,e,r=!1){const i=new lr;i.updateFromServerResponse(e);const s=new rn({uid:e.localId,auth:t,stsTokenManager:i,isAnonymous:r});return await Ti(s),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xa=new Map;function Ie(n){Re(n instanceof Function,"Expected a class definition");let t=Xa.get(n);return t?(Re(t instanceof n,"Instance stored in cache mismatched with class"),t):(t=new n,Xa.set(n,t),t)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Al{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(t,e){this.storage[t]=e}async _get(t){const e=this.storage[t];return e===void 0?null:e}async _remove(t){delete this.storage[t]}_addListener(t,e){}_removeListener(t,e){}}Al.type="NONE";const Ja=Al;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ai(n,t,e){return`firebase:${n}:${t}:${e}`}class In{constructor(t,e,r){this.persistence=t,this.auth=e,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ai(this.userKey,i.apiKey,s),this.fullPersistenceKey=ai("persistence",i.apiKey,s),this.boundEventHandler=e._onStorageEvent.bind(e),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(t){return this.persistence._set(this.fullUserKey,t.toJSON())}async getCurrentUser(){const t=await this.persistence._get(this.fullUserKey);return t?rn._fromJSON(this.auth,t):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(t){if(this.persistence===t)return;const e=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=t,e)return this.setCurrentUser(e)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(t,e,r="authUser"){if(!e.length)return new In(Ie(Ja),t,r);const i=(await Promise.all(e.map(async l=>{if(await l._isAvailable())return l}))).filter(l=>l);let s=i[0]||Ie(Ja);const o=ai(r,t.config.apiKey,t.name);let a=null;for(const l of e)try{const c=await l._get(o);if(c){const h=rn._fromJSON(t,c);l!==s&&(a=h),s=l;break}}catch{}const u=i.filter(l=>l._shouldAllowMigration);return!s._shouldAllowMigration||!u.length?new In(s,t,r):(s=u[0],a&&await s._set(o,a.toJSON()),await Promise.all(e.map(async l=>{if(l!==s)try{await l._remove(o)}catch{}})),new In(s,t,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Za(n){const t=n.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(Sl(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(Rl(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(kl(t))return"Blackberry";if(Vl(t))return"Webos";if(Ao(t))return"Safari";if((t.includes("chrome/")||Pl(t))&&!t.includes("edge/"))return"Chrome";if(Cl(t))return"Android";{const e=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=n.match(e);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Rl(n=te()){return/firefox\//i.test(n)}function Ao(n=te()){const t=n.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function Pl(n=te()){return/crios\//i.test(n)}function Sl(n=te()){return/iemobile/i.test(n)}function Cl(n=te()){return/android/i.test(n)}function kl(n=te()){return/blackberry/i.test(n)}function Vl(n=te()){return/webos/i.test(n)}function Wi(n=te()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function If(n=te()){var t;return Wi(n)&&!!(!((t=window.navigator)===null||t===void 0)&&t.standalone)}function wf(){return bd()&&document.documentMode===10}function Nl(n=te()){return Wi(n)||Cl(n)||Vl(n)||kl(n)||/windows phone/i.test(n)||Sl(n)}function Af(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n,t=[]){let e;switch(n){case"Browser":e=Za(te());break;case"Worker":e=`${Za(te())}-${n}`;break;default:e=n}const r=t.length?t.join(","):"FirebaseCore-web";return`${e}/JsCore/${xn}/${r}`}/**
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
 */class Rf{constructor(t){this.auth=t,this.queue=[]}pushCallback(t,e){const r=s=>new Promise((o,a)=>{try{const u=t(s);o(u)}catch(u){a(u)}});r.onAbort=e,this.queue.push(r);const i=this.queue.length-1;return()=>{this.queue[i]=()=>Promise.resolve()}}async runMiddleware(t){if(this.auth.currentUser===t)return;const e=[];try{for(const r of this.queue)await r(t),r.onAbort&&e.push(r.onAbort)}catch(r){e.reverse();for(const i of e)try{i()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:r==null?void 0:r.message})}}}/**
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
 */async function Pf(n,t={}){return Fn(n,"GET","/v2/passwordPolicy",Io(n,t))}/**
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
 */const Sf=6;class Cf{constructor(t){var e,r,i,s;const o=t.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(e=o.minPasswordLength)!==null&&e!==void 0?e:Sf,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=t.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(i=(r=t.allowedNonAlphanumericCharacters)===null||r===void 0?void 0:r.join(""))!==null&&i!==void 0?i:"",this.forceUpgradeOnSignin=(s=t.forceUpgradeOnSignin)!==null&&s!==void 0?s:!1,this.schemaVersion=t.schemaVersion}validatePassword(t){var e,r,i,s,o,a;const u={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(t,u),this.validatePasswordCharacterOptions(t,u),u.isValid&&(u.isValid=(e=u.meetsMinPasswordLength)!==null&&e!==void 0?e:!0),u.isValid&&(u.isValid=(r=u.meetsMaxPasswordLength)!==null&&r!==void 0?r:!0),u.isValid&&(u.isValid=(i=u.containsLowercaseLetter)!==null&&i!==void 0?i:!0),u.isValid&&(u.isValid=(s=u.containsUppercaseLetter)!==null&&s!==void 0?s:!0),u.isValid&&(u.isValid=(o=u.containsNumericCharacter)!==null&&o!==void 0?o:!0),u.isValid&&(u.isValid=(a=u.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),u}validatePasswordLengthOptions(t,e){const r=this.customStrengthOptions.minPasswordLength,i=this.customStrengthOptions.maxPasswordLength;r&&(e.meetsMinPasswordLength=t.length>=r),i&&(e.meetsMaxPasswordLength=t.length<=i)}validatePasswordCharacterOptions(t,e){this.updatePasswordCharacterOptionsStatuses(e,!1,!1,!1,!1);let r;for(let i=0;i<t.length;i++)r=t.charAt(i),this.updatePasswordCharacterOptionsStatuses(e,r>="a"&&r<="z",r>="A"&&r<="Z",r>="0"&&r<="9",this.allowedNonAlphanumericCharacters.includes(r))}updatePasswordCharacterOptionsStatuses(t,e,r,i,s){this.customStrengthOptions.containsLowercaseLetter&&(t.containsLowercaseLetter||(t.containsLowercaseLetter=e)),this.customStrengthOptions.containsUppercaseLetter&&(t.containsUppercaseLetter||(t.containsUppercaseLetter=r)),this.customStrengthOptions.containsNumericCharacter&&(t.containsNumericCharacter||(t.containsNumericCharacter=i)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(t.containsNonAlphanumericCharacter||(t.containsNonAlphanumericCharacter=s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kf{constructor(t,e,r,i){this.app=t,this.heartbeatServiceProvider=e,this.appCheckServiceProvider=r,this.config=i,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new tu(this),this.idTokenSubscription=new tu(this),this.beforeStateQueue=new Rf(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=yl,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=t.name,this.clientVersion=i.sdkClientVersion}_initializeWithPersistence(t,e){return e&&(this._popupRedirectResolver=Ie(e)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await In.create(this,t),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(e),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const t=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!t)){if(this.currentUser&&t&&this.currentUser.uid===t.uid){this._currentUser._assign(t),await this.currentUser.getIdToken();return}await this._updateCurrentUser(t,!0)}}async initializeCurrentUser(t){var e;const r=await this.assertedPersistence.getCurrentUser();let i=r,s=!1;if(t&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(e=this.redirectUser)===null||e===void 0?void 0:e._redirectEventId,a=i==null?void 0:i._redirectEventId,u=await this.tryRedirectSignIn(t);(!o||o===a)&&(u!=null&&u.user)&&(i=u.user,s=!0)}if(!i)return this.directlySetCurrentUser(null);if(!i._redirectEventId){if(s)try{await this.beforeStateQueue.runMiddleware(i)}catch(o){i=r,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return i?this.reloadAndSetCurrentUserOrClear(i):this.directlySetCurrentUser(null)}return O(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===i._redirectEventId?this.directlySetCurrentUser(i):this.reloadAndSetCurrentUserOrClear(i)}async tryRedirectSignIn(t){let e=null;try{e=await this._popupRedirectResolver._completeRedirectFn(this,t,!0)}catch{await this._setRedirectUser(null)}return e}async reloadAndSetCurrentUserOrClear(t){try{await Ti(t)}catch(e){if((e==null?void 0:e.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(t)}useDeviceLanguage(){this.languageCode=of()}async _delete(){this._deleted=!0}async updateCurrentUser(t){const e=t?Vt(t):null;return e&&O(e.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(e&&e._clone(this))}async _updateCurrentUser(t,e=!1){if(!this._deleted)return t&&O(this.tenantId===t.tenantId,this,"tenant-id-mismatch"),e||await this.beforeStateQueue.runMiddleware(t),this.queue(async()=>{await this.directlySetCurrentUser(t),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(t){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ie(t))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(t){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const e=this._getPasswordPolicyInternal();return e.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):e.validatePassword(t)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const t=await Pf(this),e=new Cf(t);this.tenantId===null?this._projectPasswordPolicy=e:this._tenantPasswordPolicies[this.tenantId]=e}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(t){this._errorFactory=new yo("auth","Firebase",t())}onAuthStateChanged(t,e,r){return this.registerStateListener(this.authStateSubscription,t,e,r)}beforeAuthStateChanged(t,e){return this.beforeStateQueue.pushCallback(t,e)}onIdTokenChanged(t,e,r){return this.registerStateListener(this.idTokenSubscription,t,e,r)}authStateReady(){return new Promise((t,e)=>{if(this.currentUser)t();else{const r=this.onAuthStateChanged(()=>{r(),t()},e)}})}async revokeAccessToken(t){if(this.currentUser){const e=await this.currentUser.getIdToken(),r={providerId:"apple.com",tokenType:"ACCESS_TOKEN",token:t,idToken:e};this.tenantId!=null&&(r.tenantId=this.tenantId),await Ef(this,r)}}toJSON(){var t;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(t=this._currentUser)===null||t===void 0?void 0:t.toJSON()}}async _setRedirectUser(t,e){const r=await this.getOrInitRedirectPersistenceManager(e);return t===null?r.removeCurrentUser():r.setCurrentUser(t)}async getOrInitRedirectPersistenceManager(t){if(!this.redirectPersistenceManager){const e=t&&Ie(t)||this._popupRedirectResolver;O(e,this,"argument-error"),this.redirectPersistenceManager=await In.create(this,[Ie(e._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(t){var e,r;return this._isInitialized&&await this.queue(async()=>{}),((e=this._currentUser)===null||e===void 0?void 0:e._redirectEventId)===t?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===t?this.redirectUser:null}async _persistUserIfCurrent(t){if(t===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(t))}_notifyListenersIfCurrent(t){t===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var t,e;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(e=(t=this.currentUser)===null||t===void 0?void 0:t.uid)!==null&&e!==void 0?e:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(t,e,r,i){if(this._deleted)return()=>{};const s=typeof e=="function"?e:e.next.bind(e);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(O(a,this,"internal-error"),a.then(()=>{o||s(this.currentUser)}),typeof e=="function"){const u=t.addObserver(e,r,i);return()=>{o=!0,u()}}else{const u=t.addObserver(e);return()=>{o=!0,u()}}}async directlySetCurrentUser(t){this.currentUser&&this.currentUser!==t&&this._currentUser._stopProactiveRefresh(),t&&this.isProactiveRefreshEnabled&&t._startProactiveRefresh(),this.currentUser=t,t?await this.assertedPersistence.setCurrentUser(t):await this.assertedPersistence.removeCurrentUser()}queue(t){return this.operations=this.operations.then(t,t),this.operations}get assertedPersistence(){return O(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(t){!t||this.frameworks.includes(t)||(this.frameworks.push(t),this.frameworks.sort(),this.clientVersion=Dl(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var t;const e={"X-Client-Version":this.clientVersion};this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId);const r=await((t=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getHeartbeatsHeader());r&&(e["X-Firebase-Client"]=r);const i=await this._getAppCheckToken();return i&&(e["X-Firebase-AppCheck"]=i),e}async _getAppCheckToken(){var t;const e=await((t=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||t===void 0?void 0:t.getToken());return e!=null&&e.error&&ef(`Error while retrieving App Check token: ${e.error}`),e==null?void 0:e.token}}function Ki(n){return Vt(n)}class tu{constructor(t){this.auth=t,this.observer=null,this.addObserver=Nd(e=>this.observer=e)}get next(){return O(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vf(){var n,t;return(t=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&t!==void 0?t:document}function Nf(n){return new Promise((t,e)=>{const r=document.createElement("script");r.setAttribute("src",n),r.onload=t,r.onerror=i=>{const s=ge("internal-error");s.customData=i,e(s)},r.type="text/javascript",r.charset="UTF-8",Vf().appendChild(r)})}function Df(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bf(n,t){const e=_o(n,"auth");if(e.isInitialized()){const i=e.getImmediate(),s=e.getOptions();if(Dd(s,t??{}))return i;ye(i,"already-initialized")}return e.initialize({options:t})}function Of(n,t){const e=(t==null?void 0:t.persistence)||[],r=(Array.isArray(e)?e:[e]).map(Ie);t!=null&&t.errorMap&&n._updateErrorMap(t.errorMap),n._initializeWithPersistence(r,t==null?void 0:t.popupRedirectResolver)}function Mf(n,t,e){const r=Ki(n);O(r._canInitEmulator,r,"emulator-config-failed"),O(/^https?:\/\//.test(t),r,"invalid-emulator-scheme");const i=!!(e!=null&&e.disableWarnings),s=bl(t),{host:o,port:a}=Lf(t),u=a===null?"":`:${a}`;r.config.emulator={url:`${s}//${o}${u}/`},r.settings.appVerificationDisabledForTesting=!0,r.emulatorConfig=Object.freeze({host:o,port:a,protocol:s.replace(":",""),options:Object.freeze({disableWarnings:i})}),i||xf()}function bl(n){const t=n.indexOf(":");return t<0?"":n.substr(0,t+1)}function Lf(n){const t=bl(n),e=/(\/\/)?([^?#/]+)/.exec(n.substr(t.length));if(!e)return{host:"",port:null};const r=e[2].split("@").pop()||"",i=/^(\[[^\]]+\])(:|$)/.exec(r);if(i){const s=i[1];return{host:s,port:eu(r.substr(s.length+1))}}else{const[s,o]=r.split(":");return{host:s,port:eu(o)}}}function eu(n){if(!n)return null;const t=Number(n);return isNaN(t)?null:t}function xf(){function n(){const t=document.createElement("p"),e=t.style;t.innerText="Running in emulator mode. Do not use with production credentials.",e.position="fixed",e.width="100%",e.backgroundColor="#ffffff",e.border=".1em solid #000000",e.color="#b50000",e.bottom="0px",e.left="0px",e.margin="0px",e.zIndex="10000",e.textAlign="center",t.classList.add("firebase-emulator-warning"),document.body.appendChild(t)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol{constructor(t,e){this.providerId=t,this.signInMethod=e}toJSON(){return Ee("not implemented")}_getIdTokenResponse(t){return Ee("not implemented")}_linkToIdToken(t,e){return Ee("not implemented")}_getReauthenticationResolver(t){return Ee("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function wn(n,t){return lf(n,"POST","/v1/accounts:signInWithIdp",Io(n,t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ff="http://localhost";class on extends Ol{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(t){const e=new on(t.providerId,t.signInMethod);return t.idToken||t.accessToken?(t.idToken&&(e.idToken=t.idToken),t.accessToken&&(e.accessToken=t.accessToken),t.nonce&&!t.pendingToken&&(e.nonce=t.nonce),t.pendingToken&&(e.pendingToken=t.pendingToken)):t.oauthToken&&t.oauthTokenSecret?(e.accessToken=t.oauthToken,e.secret=t.oauthTokenSecret):ye("argument-error"),e}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(t){const e=typeof t=="string"?JSON.parse(t):t,{providerId:r,signInMethod:i}=e,s=vo(e,["providerId","signInMethod"]);if(!r||!i)return null;const o=new on(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(t){const e=this.buildRequest();return wn(t,e)}_linkToIdToken(t,e){const r=this.buildRequest();return r.idToken=e,wn(t,r)}_getReauthenticationResolver(t){const e=this.buildRequest();return e.autoCreate=!1,wn(t,e)}buildRequest(){const t={requestUri:Ff,returnSecureToken:!0};if(this.pendingToken)t.pendingToken=this.pendingToken;else{const e={};this.idToken&&(e.id_token=this.idToken),this.accessToken&&(e.access_token=this.accessToken),this.secret&&(e.oauth_token_secret=this.secret),e.providerId=this.providerId,this.nonce&&!this.pendingToken&&(e.nonce=this.nonce),t.postBody=Rr(e)}return t}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ro{constructor(t){this.providerId=t,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(t){this.defaultLanguageCode=t}setCustomParameters(t){return this.customParameters=t,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Sr extends Ro{constructor(){super(...arguments),this.scopes=[]}addScope(t){return this.scopes.includes(t)||this.scopes.push(t),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class De extends Sr{constructor(){super("facebook.com")}static credential(t){return on._fromParams({providerId:De.PROVIDER_ID,signInMethod:De.FACEBOOK_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return De.credentialFromTaggedObject(t)}static credentialFromError(t){return De.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return De.credential(t.oauthAccessToken)}catch{return null}}}De.FACEBOOK_SIGN_IN_METHOD="facebook.com";De.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te extends Sr{constructor(){super("google.com"),this.addScope("profile")}static credential(t,e){return on._fromParams({providerId:Te.PROVIDER_ID,signInMethod:Te.GOOGLE_SIGN_IN_METHOD,idToken:t,accessToken:e})}static credentialFromResult(t){return Te.credentialFromTaggedObject(t)}static credentialFromError(t){return Te.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthIdToken:e,oauthAccessToken:r}=t;if(!e&&!r)return null;try{return Te.credential(e,r)}catch{return null}}}Te.GOOGLE_SIGN_IN_METHOD="google.com";Te.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class be extends Sr{constructor(){super("github.com")}static credential(t){return on._fromParams({providerId:be.PROVIDER_ID,signInMethod:be.GITHUB_SIGN_IN_METHOD,accessToken:t})}static credentialFromResult(t){return be.credentialFromTaggedObject(t)}static credentialFromError(t){return be.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t||!("oauthAccessToken"in t)||!t.oauthAccessToken)return null;try{return be.credential(t.oauthAccessToken)}catch{return null}}}be.GITHUB_SIGN_IN_METHOD="github.com";be.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oe extends Sr{constructor(){super("twitter.com")}static credential(t,e){return on._fromParams({providerId:Oe.PROVIDER_ID,signInMethod:Oe.TWITTER_SIGN_IN_METHOD,oauthToken:t,oauthTokenSecret:e})}static credentialFromResult(t){return Oe.credentialFromTaggedObject(t)}static credentialFromError(t){return Oe.credentialFromTaggedObject(t.customData||{})}static credentialFromTaggedObject({_tokenResponse:t}){if(!t)return null;const{oauthAccessToken:e,oauthTokenSecret:r}=t;if(!e||!r)return null;try{return Oe.credential(e,r)}catch{return null}}}Oe.TWITTER_SIGN_IN_METHOD="twitter.com";Oe.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kn{constructor(t){this.user=t.user,this.providerId=t.providerId,this._tokenResponse=t._tokenResponse,this.operationType=t.operationType}static async _fromIdTokenResponse(t,e,r,i=!1){const s=await rn._fromIdTokenResponse(t,r,i),o=nu(r);return new kn({user:s,providerId:o,_tokenResponse:r,operationType:e})}static async _forOperation(t,e,r){await t._updateTokensIfNecessary(r,!0);const i=nu(r);return new kn({user:t,providerId:i,_tokenResponse:r,operationType:e})}}function nu(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei extends Gi{constructor(t,e,r,i){var s;super(e.code,e.message),this.operationType=r,this.user=i,Object.setPrototypeOf(this,Ei.prototype),this.customData={appName:t.name,tenantId:(s=t.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:e.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(t,e,r,i){return new Ei(t,e,r,i)}}function Ml(n,t,e,r){return(t==="reauthenticate"?e._getReauthenticationResolver(n):e._getIdTokenResponse(n)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?Ei._fromErrorAndOperation(n,s,t,r):s})}async function Uf(n,t,e=!1){const r=await ur(n,t._linkToIdToken(n.auth,await n.getIdToken()),e);return kn._forOperation(n,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $f(n,t,e=!1){const{auth:r}=n,i="reauthenticate";try{const s=await ur(n,Ml(r,i,t,n),e);O(s.idToken,r,"internal-error");const o=wo(s.idToken);O(o,r,"internal-error");const{sub:a}=o;return O(n.uid===a,r,"user-mismatch"),kn._forOperation(n,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&ye(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function qf(n,t,e=!1){const r="signIn",i=await Ml(n,r,t),s=await kn._fromIdTokenResponse(n,r,i);return e||await n._updateCurrentUser(s.user),s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jf(n,t){return Vt(n).setPersistence(t)}function Bf(n,t,e,r){return Vt(n).onIdTokenChanged(t,e,r)}function zf(n,t,e){return Vt(n).beforeAuthStateChanged(t,e)}function Gf(n){return Vt(n).signOut()}const Ii="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ll{constructor(t,e){this.storageRetriever=t,this.type=e}_isAvailable(){try{return this.storage?(this.storage.setItem(Ii,"1"),this.storage.removeItem(Ii),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(t,e){return this.storage.setItem(t,JSON.stringify(e)),Promise.resolve()}_get(t){const e=this.storage.getItem(t);return Promise.resolve(e?JSON.parse(e):null)}_remove(t){return this.storage.removeItem(t),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wf(){const n=te();return Ao(n)||Wi(n)}const Kf=1e3,Hf=10;class xl extends Ll{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(t,e)=>this.onStorageEvent(t,e),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=Wf()&&Af(),this.fallbackToPolling=Nl(),this._shouldAllowMigration=!0}forAllChangedKeys(t){for(const e of Object.keys(this.listeners)){const r=this.storage.getItem(e),i=this.localCache[e];r!==i&&t(e,i,r)}}onStorageEvent(t,e=!1){if(!t.key){this.forAllChangedKeys((o,a,u)=>{this.notifyListeners(o,u)});return}const r=t.key;if(e?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(t.newValue!==o)t.newValue!==null?this.storage.setItem(r,t.newValue):this.storage.removeItem(r);else if(this.localCache[r]===t.newValue&&!e)return}const i=()=>{const o=this.storage.getItem(r);!e&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);wf()&&s!==t.newValue&&t.newValue!==t.oldValue?setTimeout(i,Hf):i()}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e&&JSON.parse(e))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((t,e,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:t,oldValue:e,newValue:r}),!0)})},Kf)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(t,e){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[t]||(this.listeners[t]=new Set,this.localCache[t]=this.storage.getItem(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(t,e){await super._set(t,e),this.localCache[t]=JSON.stringify(e)}async _get(t){const e=await super._get(t);return this.localCache[t]=JSON.stringify(e),e}async _remove(t){await super._remove(t),delete this.localCache[t]}}xl.type="LOCAL";const Fl=xl;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ul extends Ll{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(t,e){}_removeListener(t,e){}}Ul.type="SESSION";const $l=Ul;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qf(n){return Promise.all(n.map(async t=>{try{return{fulfilled:!0,value:await t}}catch(e){return{fulfilled:!1,reason:e}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hi{constructor(t){this.eventTarget=t,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(t){const e=this.receivers.find(i=>i.isListeningto(t));if(e)return e;const r=new Hi(t);return this.receivers.push(r),r}isListeningto(t){return this.eventTarget===t}async handleEvent(t){const e=t,{eventId:r,eventType:i,data:s}=e.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;e.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async l=>l(e.origin,s)),u=await Qf(a);e.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:u})}_subscribe(t,e){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[t]||(this.handlersMap[t]=new Set),this.handlersMap[t].add(e)}_unsubscribe(t,e){this.handlersMap[t]&&e&&this.handlersMap[t].delete(e),(!e||this.handlersMap[t].size===0)&&delete this.handlersMap[t],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Hi.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Po(n="",t=10){let e="";for(let r=0;r<t;r++)e+=Math.floor(Math.random()*10);return n+e}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yf{constructor(t){this.target=t,this.handlers=new Set}removeMessageHandler(t){t.messageChannel&&(t.messageChannel.port1.removeEventListener("message",t.onMessage),t.messageChannel.port1.close()),this.handlers.delete(t)}async _send(t,e,r=50){const i=typeof MessageChannel<"u"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,u)=>{const l=Po("",20);i.port1.start();const c=setTimeout(()=>{u(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(h){const d=h;if(d.data.eventId===l)switch(d.data.status){case"ack":clearTimeout(c),s=setTimeout(()=>{u(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(d.data.response);break;default:clearTimeout(c),clearTimeout(s),u(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:t,eventId:l,data:e},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pe(){return window}function Xf(n){pe().location.href=n}/**
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
 */function ql(){return typeof pe().WorkerGlobalScope<"u"&&typeof pe().importScripts=="function"}async function Jf(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function Zf(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function tg(){return ql()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jl="firebaseLocalStorageDb",eg=1,wi="firebaseLocalStorage",Bl="fbase_key";class Cr{constructor(t){this.request=t}toPromise(){return new Promise((t,e)=>{this.request.addEventListener("success",()=>{t(this.request.result)}),this.request.addEventListener("error",()=>{e(this.request.error)})})}}function Qi(n,t){return n.transaction([wi],t?"readwrite":"readonly").objectStore(wi)}function ng(){const n=indexedDB.deleteDatabase(jl);return new Cr(n).toPromise()}function Gs(){const n=indexedDB.open(jl,eg);return new Promise((t,e)=>{n.addEventListener("error",()=>{e(n.error)}),n.addEventListener("upgradeneeded",()=>{const r=n.result;try{r.createObjectStore(wi,{keyPath:Bl})}catch(i){e(i)}}),n.addEventListener("success",async()=>{const r=n.result;r.objectStoreNames.contains(wi)?t(r):(r.close(),await ng(),t(await Gs()))})})}async function ru(n,t,e){const r=Qi(n,!0).put({[Bl]:t,value:e});return new Cr(r).toPromise()}async function rg(n,t){const e=Qi(n,!1).get(t),r=await new Cr(e).toPromise();return r===void 0?null:r.value}function iu(n,t){const e=Qi(n,!0).delete(t);return new Cr(e).toPromise()}const ig=800,sg=3;class zl{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await Gs(),this.db)}async _withRetries(t){let e=0;for(;;)try{const r=await this._openDb();return await t(r)}catch(r){if(e++>sg)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return ql()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Hi._getInstance(tg()),this.receiver._subscribe("keyChanged",async(t,e)=>({keyProcessed:(await this._poll()).includes(e.key)})),this.receiver._subscribe("ping",async(t,e)=>["keyChanged"])}async initializeSender(){var t,e;if(this.activeServiceWorker=await Jf(),!this.activeServiceWorker)return;this.sender=new Yf(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);r&&!((t=r[0])===null||t===void 0)&&t.fulfilled&&!((e=r[0])===null||e===void 0)&&e.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(t){if(!(!this.sender||!this.activeServiceWorker||Zf()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:t},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const t=await Gs();return await ru(t,Ii,"1"),await iu(t,Ii),!0}catch{}return!1}async _withPendingWrite(t){this.pendingWrites++;try{await t()}finally{this.pendingWrites--}}async _set(t,e){return this._withPendingWrite(async()=>(await this._withRetries(r=>ru(r,t,e)),this.localCache[t]=e,this.notifyServiceWorker(t)))}async _get(t){const e=await this._withRetries(r=>rg(r,t));return this.localCache[t]=e,e}async _remove(t){return this._withPendingWrite(async()=>(await this._withRetries(e=>iu(e,t)),delete this.localCache[t],this.notifyServiceWorker(t)))}async _poll(){const t=await this._withRetries(i=>{const s=Qi(i,!1).getAll();return new Cr(s).toPromise()});if(!t)return[];if(this.pendingWrites!==0)return[];const e=[],r=new Set;for(const{fbase_key:i,value:s}of t)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),e.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),e.push(i));return e}notifyListeners(t,e){this.localCache[t]=e;const r=this.listeners[t];if(r)for(const i of Array.from(r))i(e)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),ig)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(t,e){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[t]||(this.listeners[t]=new Set,this._get(t)),this.listeners[t].add(e)}_removeListener(t,e){this.listeners[t]&&(this.listeners[t].delete(e),this.listeners[t].size===0&&delete this.listeners[t]),Object.keys(this.listeners).length===0&&this.stopPolling()}}zl.type="LOCAL";const og=zl;new Pr(3e4,6e4);/**
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
 */function Gl(n,t){return t?Ie(t):(O(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class So extends Ol{constructor(t){super("custom","custom"),this.params=t}_getIdTokenResponse(t){return wn(t,this._buildIdpRequest())}_linkToIdToken(t,e){return wn(t,this._buildIdpRequest(e))}_getReauthenticationResolver(t){return wn(t,this._buildIdpRequest())}_buildIdpRequest(t){const e={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return t&&(e.idToken=t),e}}function ag(n){return qf(n.auth,new So(n),n.bypassAuthState)}function ug(n){const{auth:t,user:e}=n;return O(e,t,"internal-error"),$f(e,new So(n),n.bypassAuthState)}async function lg(n){const{auth:t,user:e}=n;return O(e,t,"internal-error"),Uf(e,new So(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wl{constructor(t,e,r,i,s=!1){this.auth=t,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(e)?e:[e]}execute(){return new Promise(async(t,e)=>{this.pendingPromise={resolve:t,reject:e};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(t){const{urlResponse:e,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=t;if(o){this.reject(o);return}const u={auth:this.auth,requestUri:e,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(u))}catch(l){this.reject(l)}}onError(t){this.reject(t)}getIdpTask(t){switch(t){case"signInViaPopup":case"signInViaRedirect":return ag;case"linkViaPopup":case"linkViaRedirect":return lg;case"reauthViaPopup":case"reauthViaRedirect":return ug;default:ye(this.auth,"internal-error")}}resolve(t){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(t),this.unregisterAndCleanUp()}reject(t){Re(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(t),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cg=new Pr(2e3,1e4);async function hg(n,t,e){const r=Ki(n);nf(n,t,Ro);const i=Gl(r,e);return new Je(r,"signInViaPopup",t,i).executeNotNull()}class Je extends Wl{constructor(t,e,r,i,s){super(t,e,i,s),this.provider=r,this.authWindow=null,this.pollId=null,Je.currentPopupAction&&Je.currentPopupAction.cancel(),Je.currentPopupAction=this}async executeNotNull(){const t=await this.execute();return O(t,this.auth,"internal-error"),t}async onExecution(){Re(this.filter.length===1,"Popup operations only handle one event");const t=Po();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],t),this.authWindow.associatedEvent=t,this.resolver._originValidation(this.auth).catch(e=>{this.reject(e)}),this.resolver._isIframeWebStorageSupported(this.auth,e=>{e||this.reject(ge(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var t;return((t=this.authWindow)===null||t===void 0?void 0:t.associatedEvent)||null}cancel(){this.reject(ge(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,Je.currentPopupAction=null}pollUserCancellation(){const t=()=>{var e,r;if(!((r=(e=this.authWindow)===null||e===void 0?void 0:e.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(ge(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(t,cg.get())};t()}}Je.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dg="pendingRedirect",ui=new Map;class fg extends Wl{constructor(t,e,r=!1){super(t,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],e,void 0,r),this.eventId=null}async execute(){let t=ui.get(this.auth._key());if(!t){try{const r=await gg(this.resolver,this.auth)?await super.execute():null;t=()=>Promise.resolve(r)}catch(e){t=()=>Promise.reject(e)}ui.set(this.auth._key(),t)}return this.bypassAuthState||ui.set(this.auth._key(),()=>Promise.resolve(null)),t()}async onAuthEvent(t){if(t.type==="signInViaRedirect")return super.onAuthEvent(t);if(t.type==="unknown"){this.resolve(null);return}if(t.eventId){const e=await this.auth._redirectUserForId(t.eventId);if(e)return this.user=e,super.onAuthEvent(t);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function gg(n,t){const e=_g(t),r=mg(n);if(!await r._isAvailable())return!1;const i=await r._get(e)==="true";return await r._remove(e),i}function pg(n,t){ui.set(n._key(),t)}function mg(n){return Ie(n._redirectPersistence)}function _g(n){return ai(dg,n.config.apiKey,n.name)}async function yg(n,t,e=!1){const r=Ki(n),i=Gl(r,t),o=await new fg(r,i,e).execute();return o&&!e&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vg=10*60*1e3;class Tg{constructor(t){this.auth=t,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(t){this.consumers.add(t),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,t)&&(this.sendToConsumer(this.queuedRedirectEvent,t),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(t){this.consumers.delete(t)}onEvent(t){if(this.hasEventBeenHandled(t))return!1;let e=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(t,r)&&(e=!0,this.sendToConsumer(t,r),this.saveEventToCache(t))}),this.hasHandledPotentialRedirect||!Eg(t)||(this.hasHandledPotentialRedirect=!0,e||(this.queuedRedirectEvent=t,e=!0)),e}sendToConsumer(t,e){var r;if(t.error&&!Kl(t)){const i=((r=t.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";e.onError(ge(this.auth,i))}else e.onAuthEvent(t)}isEventForConsumer(t,e){const r=e.eventId===null||!!t.eventId&&t.eventId===e.eventId;return e.filter.includes(t.type)&&r}hasEventBeenHandled(t){return Date.now()-this.lastProcessedEventTime>=vg&&this.cachedEventUids.clear(),this.cachedEventUids.has(su(t))}saveEventToCache(t){this.cachedEventUids.add(su(t)),this.lastProcessedEventTime=Date.now()}}function su(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(t=>t).join("-")}function Kl({type:n,error:t}){return n==="unknown"&&(t==null?void 0:t.code)==="auth/no-auth-event"}function Eg(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Kl(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ig(n,t={}){return Fn(n,"GET","/v1/projects",t)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wg=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Ag=/^https?/;async function Rg(n){if(n.config.emulator)return;const{authorizedDomains:t}=await Ig(n);for(const e of t)try{if(Pg(e))return}catch{}ye(n,"unauthorized-domain")}function Pg(n){const t=zs(),{protocol:e,hostname:r}=new URL(t);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&r===""?e==="chrome-extension:"&&n.replace("chrome-extension://","")===t.replace("chrome-extension://",""):e==="chrome-extension:"&&o.hostname===r}if(!Ag.test(e))return!1;if(wg.test(n))return r===n;const i=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
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
 */const Sg=new Pr(3e4,6e4);function ou(){const n=pe().___jsl;if(n!=null&&n.H){for(const t of Object.keys(n.H))if(n.H[t].r=n.H[t].r||[],n.H[t].L=n.H[t].L||[],n.H[t].r=[...n.H[t].L],n.CP)for(let e=0;e<n.CP.length;e++)n.CP[e]=null}}function Cg(n){return new Promise((t,e)=>{var r,i,s;function o(){ou(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{ou(),e(ge(n,"network-request-failed"))},timeout:Sg.get()})}if(!((i=(r=pe().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)t(gapi.iframes.getContext());else if(!((s=pe().gapi)===null||s===void 0)&&s.load)o();else{const a=Df("iframefcb");return pe()[a]=()=>{gapi.load?o():e(ge(n,"network-request-failed"))},Nf(`https://apis.google.com/js/api.js?onload=${a}`).catch(u=>e(u))}}).catch(t=>{throw li=null,t})}let li=null;function kg(n){return li=li||Cg(n),li}/**
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
 */const Vg=new Pr(5e3,15e3),Ng="__/auth/iframe",Dg="emulator/auth/iframe",bg={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Og=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Mg(n){const t=n.config;O(t.authDomain,n,"auth-domain-config-required");const e=t.emulator?Eo(t,Dg):`https://${n.config.authDomain}/${Ng}`,r={apiKey:t.apiKey,appName:n.name,v:xn},i=Og.get(n.config.apiHost);i&&(r.eid=i);const s=n._getFrameworks();return s.length&&(r.fw=s.join(",")),`${e}?${Rr(r).slice(1)}`}async function Lg(n){const t=await kg(n),e=pe().gapi;return O(e,n,"internal-error"),t.open({where:document.body,url:Mg(n),messageHandlersFilter:e.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:bg,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=ge(n,"network-request-failed"),a=pe().setTimeout(()=>{s(o)},Vg.get());function u(){pe().clearTimeout(a),i(r)}r.ping(u).then(u,()=>{s(o)})}))}/**
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
 */const xg={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fg=500,Ug=600,$g="_blank",qg="http://localhost";class au{constructor(t){this.window=t,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function jg(n,t,e,r=Fg,i=Ug){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const u=Object.assign(Object.assign({},xg),{width:r.toString(),height:i.toString(),top:s,left:o}),l=te().toLowerCase();e&&(a=Pl(l)?$g:e),Rl(l)&&(t=t||qg,u.scrollbars="yes");const c=Object.entries(u).reduce((d,[f,E])=>`${d}${f}=${E},`,"");if(If(l)&&a!=="_self")return Bg(t||"",a),new au(null);const h=window.open(t||"",a,c);O(h,n,"popup-blocked");try{h.focus()}catch{}return new au(h)}function Bg(n,t){const e=document.createElement("a");e.href=n,e.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),e.dispatchEvent(r)}/**
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
 */const zg="__/auth/handler",Gg="emulator/auth/handler",Wg=encodeURIComponent("fac");async function uu(n,t,e,r,i,s){O(n.config.authDomain,n,"auth-domain-config-required"),O(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:e,redirectUrl:r,v:xn,eventId:i};if(t instanceof Ro){t.setDefaultLanguage(n.languageCode),o.providerId=t.providerId||"",Md(t.getCustomParameters())||(o.customParameters=JSON.stringify(t.getCustomParameters()));for(const[c,h]of Object.entries(s||{}))o[c]=h}if(t instanceof Sr){const c=t.getScopes().filter(h=>h!=="");c.length>0&&(o.scopes=c.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];const u=await n._getAppCheckToken(),l=u?`#${Wg}=${encodeURIComponent(u)}`:"";return`${Kg(n)}?${Rr(a).slice(1)}${l}`}function Kg({config:n}){return n.emulator?Eo(n,Gg):`https://${n.authDomain}/${zg}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vs="webStorageSupport";class Hg{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=$l,this._completeRedirectFn=yg,this._overrideRedirectResult=pg}async _openPopup(t,e,r,i){var s;Re((s=this.eventManagers[t._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=await uu(t,e,r,zs(),i);return jg(t,o,Po())}async _openRedirect(t,e,r,i){await this._originValidation(t);const s=await uu(t,e,r,zs(),i);return Xf(s),new Promise(()=>{})}_initialize(t){const e=t._key();if(this.eventManagers[e]){const{manager:i,promise:s}=this.eventManagers[e];return i?Promise.resolve(i):(Re(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(t);return this.eventManagers[e]={promise:r},r.catch(()=>{delete this.eventManagers[e]}),r}async initAndGetManager(t){const e=await Lg(t),r=new Tg(t);return e.register("authEvent",i=>(O(i==null?void 0:i.authEvent,t,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[t._key()]={manager:r},this.iframes[t._key()]=e,r}_isIframeWebStorageSupported(t,e){this.iframes[t._key()].send(Vs,{type:Vs},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Vs];o!==void 0&&e(!!o),ye(t,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(t){const e=t._key();return this.originValidationPromises[e]||(this.originValidationPromises[e]=Rg(t)),this.originValidationPromises[e]}get _shouldInitProactively(){return Nl()||Ao()||Wi()}}const Qg=Hg;var lu="@firebase/auth",cu="1.4.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yg{constructor(t){this.auth=t,this.internalListeners=new Map}getUid(){var t;return this.assertAuthConfigured(),((t=this.auth.currentUser)===null||t===void 0?void 0:t.uid)||null}async getToken(t){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(t)}:null}addAuthTokenListener(t){if(this.assertAuthConfigured(),this.internalListeners.has(t))return;const e=this.auth.onIdTokenChanged(r=>{t((r==null?void 0:r.stsTokenManager.accessToken)||null)});this.internalListeners.set(t,e),this.updateProactiveRefresh()}removeAuthTokenListener(t){this.assertAuthConfigured();const e=this.internalListeners.get(t);e&&(this.internalListeners.delete(t),e(),this.updateProactiveRefresh())}assertAuthConfigured(){O(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xg(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function Jg(n){js(new Bs("auth",(t,{options:e})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),s=t.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=r.options;O(o&&!o.includes(":"),"invalid-api-key",{appName:r.name});const u={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Dl(n)},l=new kf(r,i,s,u);return Of(l,e),l},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((t,e,r)=>{t.getProvider("auth-internal").initialize()})),js(new Bs("auth-internal",t=>{const e=Ki(t.getProvider("auth").getImmediate());return(r=>new Yg(r))(e)},"PRIVATE").setInstantiationMode("EXPLICIT")),yi(lu,cu,Xg(n)),yi(lu,cu,"esm2017")}/**
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
 */const Zg=5*60,tp=fl("authIdTokenMaxAge")||Zg;let hu=null;const ep=n=>async t=>{const e=t&&await t.getIdTokenResult(),r=e&&(new Date().getTime()-Date.parse(e.issuedAtTime))/1e3;if(r&&r>tp)return;const i=e==null?void 0:e.token;hu!==i&&(hu=i,await fetch(n,{method:i?"POST":"DELETE",headers:i?{Authorization:`Bearer ${i}`}:{}}))};function ze(n=gl()){const t=_o(n,"auth");if(t.isInitialized())return t.getImmediate();const e=bf(n,{popupRedirectResolver:Qg,persistence:[og,Fl,$l]}),r=fl("authTokenSyncURL");if(r){const s=ep(r);zf(e,s,()=>s(e.currentUser)),Bf(e,o=>s(o))}const i=kd("auth");return i&&Mf(e,`http://${i}`),e}Jg("Browser");let np=new Te;jf(ze(),Fl);const rp=async()=>hg(ze(),np),ip=async()=>Gf(ze());var sp=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{},v,Co=Co||{},b=sp||self;function Yi(n){var t=typeof n;return t=t!="object"?t:n?Array.isArray(n)?"array":t:"null",t=="array"||t=="object"&&typeof n.length=="number"}function kr(n){var t=typeof n;return t=="object"&&n!=null||t=="function"}function op(n){return Object.prototype.hasOwnProperty.call(n,Ns)&&n[Ns]||(n[Ns]=++ap)}var Ns="closure_uid_"+(1e9*Math.random()>>>0),ap=0;function up(n,t,e){return n.call.apply(n.bind,arguments)}function lp(n,t,e){if(!n)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var i=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(i,r),n.apply(t,i)}}return function(){return n.apply(t,arguments)}}function $t(n,t,e){return Function.prototype.bind&&Function.prototype.bind.toString().indexOf("native code")!=-1?$t=up:$t=lp,$t.apply(null,arguments)}function Yr(n,t){var e=Array.prototype.slice.call(arguments,1);return function(){var r=e.slice();return r.push.apply(r,arguments),n.apply(this,r)}}function Dt(n,t){function e(){}e.prototype=t.prototype,n.$=t.prototype,n.prototype=new e,n.prototype.constructor=n,n.ac=function(r,i,s){for(var o=Array(arguments.length-2),a=2;a<arguments.length;a++)o[a-2]=arguments[a];return t.prototype[i].apply(r,o)}}function Ge(){this.s=this.s,this.o=this.o}var cp=0;Ge.prototype.s=!1;Ge.prototype.sa=function(){!this.s&&(this.s=!0,this.N(),cp!=0)&&op(this)};Ge.prototype.N=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const Hl=Array.prototype.indexOf?function(n,t){return Array.prototype.indexOf.call(n,t,void 0)}:function(n,t){if(typeof n=="string")return typeof t!="string"||t.length!=1?-1:n.indexOf(t,0);for(let e=0;e<n.length;e++)if(e in n&&n[e]===t)return e;return-1};function ko(n){const t=n.length;if(0<t){const e=Array(t);for(let r=0;r<t;r++)e[r]=n[r];return e}return[]}function du(n,t){for(let e=1;e<arguments.length;e++){const r=arguments[e];if(Yi(r)){const i=n.length||0,s=r.length||0;n.length=i+s;for(let o=0;o<s;o++)n[i+o]=r[o]}else n.push(r)}}function qt(n,t){this.type=n,this.g=this.target=t,this.defaultPrevented=!1}qt.prototype.h=function(){this.defaultPrevented=!0};var hp=function(){if(!b.addEventListener||!Object.defineProperty)return!1;var n=!1,t=Object.defineProperty({},"passive",{get:function(){n=!0}});try{b.addEventListener("test",()=>{},t),b.removeEventListener("test",()=>{},t)}catch{}return n}();function cr(n){return/^[\s\xa0]*$/.test(n)}function Xi(){var n=b.navigator;return n&&(n=n.userAgent)?n:""}function he(n){return Xi().indexOf(n)!=-1}function Vo(n){return Vo[" "](n),n}Vo[" "]=function(){};function dp(n,t){var e=im;return Object.prototype.hasOwnProperty.call(e,n)?e[n]:e[n]=t(n)}var fp=he("Opera"),Vn=he("Trident")||he("MSIE"),Ql=he("Edge"),Ws=Ql||Vn,Yl=he("Gecko")&&!(Xi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge"))&&!(he("Trident")||he("MSIE"))&&!he("Edge"),gp=Xi().toLowerCase().indexOf("webkit")!=-1&&!he("Edge");function Xl(){var n=b.document;return n?n.documentMode:void 0}var Ks;t:{var Ds="",bs=function(){var n=Xi();if(Yl)return/rv:([^\);]+)(\)|;)/.exec(n);if(Ql)return/Edge\/([\d\.]+)/.exec(n);if(Vn)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(n);if(gp)return/WebKit\/(\S+)/.exec(n);if(fp)return/(?:Version)[ \/]?(\S+)/.exec(n)}();if(bs&&(Ds=bs?bs[1]:""),Vn){var Os=Xl();if(Os!=null&&Os>parseFloat(Ds)){Ks=String(Os);break t}}Ks=Ds}var Hs;if(b.document&&Vn){var fu=Xl();Hs=fu||parseInt(Ks,10)||void 0}else Hs=void 0;var pp=Hs;function hr(n,t){if(qt.call(this,n?n.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,n){var e=this.type=n.type,r=n.changedTouches&&n.changedTouches.length?n.changedTouches[0]:null;if(this.target=n.target||n.srcElement,this.g=t,t=n.relatedTarget){if(Yl){t:{try{Vo(t.nodeName);var i=!0;break t}catch{}i=!1}i||(t=null)}}else e=="mouseover"?t=n.fromElement:e=="mouseout"&&(t=n.toElement);this.relatedTarget=t,r?(this.clientX=r.clientX!==void 0?r.clientX:r.pageX,this.clientY=r.clientY!==void 0?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=n.clientX!==void 0?n.clientX:n.pageX,this.clientY=n.clientY!==void 0?n.clientY:n.pageY,this.screenX=n.screenX||0,this.screenY=n.screenY||0),this.button=n.button,this.key=n.key||"",this.ctrlKey=n.ctrlKey,this.altKey=n.altKey,this.shiftKey=n.shiftKey,this.metaKey=n.metaKey,this.pointerId=n.pointerId||0,this.pointerType=typeof n.pointerType=="string"?n.pointerType:mp[n.pointerType]||"",this.state=n.state,this.i=n,n.defaultPrevented&&hr.$.h.call(this)}}Dt(hr,qt);var mp={2:"touch",3:"pen",4:"mouse"};hr.prototype.h=function(){hr.$.h.call(this);var n=this.i;n.preventDefault?n.preventDefault():n.returnValue=!1};var Vr="closure_listenable_"+(1e6*Math.random()|0),_p=0;function yp(n,t,e,r,i){this.listener=n,this.proxy=null,this.src=t,this.type=e,this.capture=!!r,this.la=i,this.key=++_p,this.fa=this.ia=!1}function Ji(n){n.fa=!0,n.listener=null,n.proxy=null,n.src=null,n.la=null}function No(n,t,e){for(const r in n)t.call(e,n[r],r,n)}function vp(n,t){for(const e in n)t.call(void 0,n[e],e,n)}function Jl(n){const t={};for(const e in n)t[e]=n[e];return t}const gu="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function Zl(n,t){let e,r;for(let i=1;i<arguments.length;i++){r=arguments[i];for(e in r)n[e]=r[e];for(let s=0;s<gu.length;s++)e=gu[s],Object.prototype.hasOwnProperty.call(r,e)&&(n[e]=r[e])}}function Zi(n){this.src=n,this.g={},this.h=0}Zi.prototype.add=function(n,t,e,r,i){var s=n.toString();n=this.g[s],n||(n=this.g[s]=[],this.h++);var o=Ys(n,t,r,i);return-1<o?(t=n[o],e||(t.ia=!1)):(t=new yp(t,this.src,s,!!r,i),t.ia=e,n.push(t)),t};function Qs(n,t){var e=t.type;if(e in n.g){var r=n.g[e],i=Hl(r,t),s;(s=0<=i)&&Array.prototype.splice.call(r,i,1),s&&(Ji(t),n.g[e].length==0&&(delete n.g[e],n.h--))}}function Ys(n,t,e,r){for(var i=0;i<n.length;++i){var s=n[i];if(!s.fa&&s.listener==t&&s.capture==!!e&&s.la==r)return i}return-1}var Do="closure_lm_"+(1e6*Math.random()|0),Ms={};function tc(n,t,e,r,i){if(r&&r.once)return nc(n,t,e,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)tc(n,t[s],e,r,i);return null}return e=Mo(e),n&&n[Vr]?n.O(t,e,kr(r)?!!r.capture:!!r,i):ec(n,t,e,!1,r,i)}function ec(n,t,e,r,i,s){if(!t)throw Error("Invalid event type");var o=kr(i)?!!i.capture:!!i,a=Oo(n);if(a||(n[Do]=a=new Zi(n)),e=a.add(t,e,r,o,s),e.proxy)return e;if(r=Tp(),e.proxy=r,r.src=n,r.listener=e,n.addEventListener)hp||(i=o),i===void 0&&(i=!1),n.addEventListener(t.toString(),r,i);else if(n.attachEvent)n.attachEvent(ic(t.toString()),r);else if(n.addListener&&n.removeListener)n.addListener(r);else throw Error("addEventListener and attachEvent are unavailable.");return e}function Tp(){function n(e){return t.call(n.src,n.listener,e)}const t=Ep;return n}function nc(n,t,e,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)nc(n,t[s],e,r,i);return null}return e=Mo(e),n&&n[Vr]?n.P(t,e,kr(r)?!!r.capture:!!r,i):ec(n,t,e,!0,r,i)}function rc(n,t,e,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)rc(n,t[s],e,r,i);else r=kr(r)?!!r.capture:!!r,e=Mo(e),n&&n[Vr]?(n=n.i,t=String(t).toString(),t in n.g&&(s=n.g[t],e=Ys(s,e,r,i),-1<e&&(Ji(s[e]),Array.prototype.splice.call(s,e,1),s.length==0&&(delete n.g[t],n.h--)))):n&&(n=Oo(n))&&(t=n.g[t.toString()],n=-1,t&&(n=Ys(t,e,r,i)),(e=-1<n?t[n]:null)&&bo(e))}function bo(n){if(typeof n!="number"&&n&&!n.fa){var t=n.src;if(t&&t[Vr])Qs(t.i,n);else{var e=n.type,r=n.proxy;t.removeEventListener?t.removeEventListener(e,r,n.capture):t.detachEvent?t.detachEvent(ic(e),r):t.addListener&&t.removeListener&&t.removeListener(r),(e=Oo(t))?(Qs(e,n),e.h==0&&(e.src=null,t[Do]=null)):Ji(n)}}}function ic(n){return n in Ms?Ms[n]:Ms[n]="on"+n}function Ep(n,t){if(n.fa)n=!0;else{t=new hr(t,this);var e=n.listener,r=n.la||n.src;n.ia&&bo(n),n=e.call(r,t)}return n}function Oo(n){return n=n[Do],n instanceof Zi?n:null}var Ls="__closure_events_fn_"+(1e9*Math.random()>>>0);function Mo(n){return typeof n=="function"?n:(n[Ls]||(n[Ls]=function(t){return n.handleEvent(t)}),n[Ls])}function Nt(){Ge.call(this),this.i=new Zi(this),this.S=this,this.J=null}Dt(Nt,Ge);Nt.prototype[Vr]=!0;Nt.prototype.removeEventListener=function(n,t,e,r){rc(this,n,t,e,r)};function Lt(n,t){var e,r=n.J;if(r)for(e=[];r;r=r.J)e.push(r);if(n=n.S,r=t.type||t,typeof t=="string")t=new qt(t,n);else if(t instanceof qt)t.target=t.target||n;else{var i=t;t=new qt(r,n),Zl(t,i)}if(i=!0,e)for(var s=e.length-1;0<=s;s--){var o=t.g=e[s];i=Xr(o,r,!0,t)&&i}if(o=t.g=n,i=Xr(o,r,!0,t)&&i,i=Xr(o,r,!1,t)&&i,e)for(s=0;s<e.length;s++)o=t.g=e[s],i=Xr(o,r,!1,t)&&i}Nt.prototype.N=function(){if(Nt.$.N.call(this),this.i){var n=this.i,t;for(t in n.g){for(var e=n.g[t],r=0;r<e.length;r++)Ji(e[r]);delete n.g[t],n.h--}}this.J=null};Nt.prototype.O=function(n,t,e,r){return this.i.add(String(n),t,!1,e,r)};Nt.prototype.P=function(n,t,e,r){return this.i.add(String(n),t,!0,e,r)};function Xr(n,t,e,r){if(t=n.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.fa&&o.capture==e){var a=o.listener,u=o.la||o.src;o.ia&&Qs(n.i,o),i=a.call(u,r)!==!1&&i}}return i&&!r.defaultPrevented}var Lo=b.JSON.stringify;class Ip{constructor(t,e){this.i=t,this.j=e,this.h=0,this.g=null}get(){let t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t}}function wp(){var n=xo;let t=null;return n.g&&(t=n.g,n.g=n.g.next,n.g||(n.h=null),t.next=null),t}class Ap{constructor(){this.h=this.g=null}add(t,e){const r=sc.get();r.set(t,e),this.h?this.h.next=r:this.g=r,this.h=r}}var sc=new Ip(()=>new Rp,n=>n.reset());class Rp{constructor(){this.next=this.g=this.h=null}set(t,e){this.h=t,this.g=e,this.next=null}reset(){this.next=this.g=this.h=null}}function Pp(n){var t=1;n=n.split(":");const e=[];for(;0<t&&n.length;)e.push(n.shift()),t--;return n.length&&e.push(n.join(":")),e}function Sp(n){b.setTimeout(()=>{throw n},0)}let dr,fr=!1,xo=new Ap,oc=()=>{const n=b.Promise.resolve(void 0);dr=()=>{n.then(Cp)}};var Cp=()=>{for(var n;n=wp();){try{n.h.call(n.g)}catch(e){Sp(e)}var t=sc;t.j(n),100>t.h&&(t.h++,n.next=t.g,t.g=n)}fr=!1};function ts(n,t){Nt.call(this),this.h=n||1,this.g=t||b,this.j=$t(this.qb,this),this.l=Date.now()}Dt(ts,Nt);v=ts.prototype;v.ga=!1;v.T=null;v.qb=function(){if(this.ga){var n=Date.now()-this.l;0<n&&n<.8*this.h?this.T=this.g.setTimeout(this.j,this.h-n):(this.T&&(this.g.clearTimeout(this.T),this.T=null),Lt(this,"tick"),this.ga&&(Fo(this),this.start()))}};v.start=function(){this.ga=!0,this.T||(this.T=this.g.setTimeout(this.j,this.h),this.l=Date.now())};function Fo(n){n.ga=!1,n.T&&(n.g.clearTimeout(n.T),n.T=null)}v.N=function(){ts.$.N.call(this),Fo(this),delete this.g};function Uo(n,t,e){if(typeof n=="function")e&&(n=$t(n,e));else if(n&&typeof n.handleEvent=="function")n=$t(n.handleEvent,n);else throw Error("Invalid listener argument");return 2147483647<Number(t)?-1:b.setTimeout(n,t||0)}function ac(n){n.g=Uo(()=>{n.g=null,n.i&&(n.i=!1,ac(n))},n.j);const t=n.h;n.h=null,n.m.apply(null,t)}class kp extends Ge{constructor(t,e){super(),this.m=t,this.j=e,this.h=null,this.i=!1,this.g=null}l(t){this.h=arguments,this.g?this.i=!0:ac(this)}N(){super.N(),this.g&&(b.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function gr(n){Ge.call(this),this.h=n,this.g={}}Dt(gr,Ge);var pu=[];function uc(n,t,e,r){Array.isArray(e)||(e&&(pu[0]=e.toString()),e=pu);for(var i=0;i<e.length;i++){var s=tc(t,e[i],r||n.handleEvent,!1,n.h||n);if(!s)break;n.g[s.key]=s}}function lc(n){No(n.g,function(t,e){this.g.hasOwnProperty(e)&&bo(t)},n),n.g={}}gr.prototype.N=function(){gr.$.N.call(this),lc(this)};gr.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")};function es(){this.g=!0}es.prototype.Ea=function(){this.g=!1};function Vp(n,t,e,r,i,s){n.info(function(){if(n.g)if(s)for(var o="",a=s.split("&"),u=0;u<a.length;u++){var l=a[u].split("=");if(1<l.length){var c=l[0];l=l[1];var h=c.split("_");o=2<=h.length&&h[1]=="type"?o+(c+"="+l+"&"):o+(c+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+`
`+e+`
`+o})}function Np(n,t,e,r,i,s,o){n.info(function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+`
`+e+`
`+s+" "+o})}function Tn(n,t,e,r){n.info(function(){return"XMLHTTP TEXT ("+t+"): "+bp(n,e)+(r?" "+r:"")})}function Dp(n,t){n.info(function(){return"TIMEOUT: "+t})}es.prototype.info=function(){};function bp(n,t){if(!n.g)return t;if(!t)return null;try{var e=JSON.parse(t);if(e){for(n=0;n<e.length;n++)if(Array.isArray(e[n])){var r=e[n];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if(s!="noop"&&s!="stop"&&s!="close")for(var o=1;o<i.length;o++)i[o]=""}}}}return Lo(e)}catch{return t}}var hn={},mu=null;function ns(){return mu=mu||new Nt}hn.Ta="serverreachability";function cc(n){qt.call(this,hn.Ta,n)}Dt(cc,qt);function pr(n){const t=ns();Lt(t,new cc(t))}hn.STAT_EVENT="statevent";function hc(n,t){qt.call(this,hn.STAT_EVENT,n),this.stat=t}Dt(hc,qt);function Yt(n){const t=ns();Lt(t,new hc(t,n))}hn.Ua="timingevent";function dc(n,t){qt.call(this,hn.Ua,n),this.size=t}Dt(dc,qt);function Nr(n,t){if(typeof n!="function")throw Error("Fn must not be null and must be a function");return b.setTimeout(function(){n()},t)}var rs={NO_ERROR:0,rb:1,Eb:2,Db:3,yb:4,Cb:5,Fb:6,Qa:7,TIMEOUT:8,Ib:9},fc={wb:"complete",Sb:"success",Ra:"error",Qa:"abort",Kb:"ready",Lb:"readystatechange",TIMEOUT:"timeout",Gb:"incrementaldata",Jb:"progress",zb:"downloadprogress",$b:"uploadprogress"};function $o(){}$o.prototype.h=null;function _u(n){return n.h||(n.h=n.i())}function gc(){}var Dr={OPEN:"a",vb:"b",Ra:"c",Hb:"d"};function qo(){qt.call(this,"d")}Dt(qo,qt);function jo(){qt.call(this,"c")}Dt(jo,qt);var Xs;function is(){}Dt(is,$o);is.prototype.g=function(){return new XMLHttpRequest};is.prototype.i=function(){return{}};Xs=new is;function br(n,t,e,r){this.l=n,this.j=t,this.m=e,this.W=r||1,this.U=new gr(this),this.P=Op,n=Ws?125:void 0,this.V=new ts(n),this.I=null,this.i=!1,this.s=this.A=this.v=this.L=this.G=this.Y=this.B=null,this.F=[],this.g=null,this.C=0,this.o=this.u=null,this.ca=-1,this.J=!1,this.O=0,this.M=null,this.ba=this.K=this.aa=this.S=!1,this.h=new pc}function pc(){this.i=null,this.g="",this.h=!1}var Op=45e3,Js={},Ai={};v=br.prototype;v.setTimeout=function(n){this.P=n};function Zs(n,t,e){n.L=1,n.v=os(Pe(t)),n.s=e,n.S=!0,mc(n,null)}function mc(n,t){n.G=Date.now(),Or(n),n.A=Pe(n.v);var e=n.A,r=n.W;Array.isArray(r)||(r=[String(r)]),Ac(e.i,"t",r),n.C=0,e=n.l.J,n.h=new pc,n.g=Gc(n.l,e?t:null,!n.s),0<n.O&&(n.M=new kp($t(n.Pa,n,n.g),n.O)),uc(n.U,n.g,"readystatechange",n.nb),t=n.I?Jl(n.I):{},n.s?(n.u||(n.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",n.g.ha(n.A,n.u,n.s,t)):(n.u="GET",n.g.ha(n.A,n.u,null,t)),pr(),Vp(n.j,n.u,n.A,n.m,n.W,n.s)}v.nb=function(n){n=n.target;const t=this.M;t&&de(n)==3?t.l():this.Pa(n)};v.Pa=function(n){try{if(n==this.g)t:{const c=de(this.g);var t=this.g.Ia();const h=this.g.da();if(!(3>c)&&(c!=3||Ws||this.g&&(this.h.h||this.g.ja()||Eu(this.g)))){this.J||c!=4||t==7||(t==8||0>=h?pr(3):pr(2)),ss(this);var e=this.g.da();this.ca=e;e:if(_c(this)){var r=Eu(this.g);n="";var i=r.length,s=de(this.g)==4;if(!this.h.i){if(typeof TextDecoder>"u"){Ze(this),nr(this);var o="";break e}this.h.i=new b.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,n+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=n,this.C=0,o=this.h.g}else o=this.g.ja();if(this.i=e==200,Np(this.j,this.u,this.A,this.m,this.W,c,e),this.i){if(this.aa&&!this.K){e:{if(this.g){var a,u=this.g;if((a=u.g?u.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!cr(a)){var l=a;break e}}l=null}if(e=l)Tn(this.j,this.m,e,"Initial handshake response via X-HTTP-Initial-Response"),this.K=!0,to(this,e);else{this.i=!1,this.o=3,Yt(12),Ze(this),nr(this);break t}}this.S?(yc(this,c,o),Ws&&this.i&&c==3&&(uc(this.U,this.V,"tick",this.mb),this.V.start())):(Tn(this.j,this.m,o,null),to(this,o)),c==4&&Ze(this),this.i&&!this.J&&(c==4?qc(this.l,this):(this.i=!1,Or(this)))}else em(this.g),e==400&&0<o.indexOf("Unknown SID")?(this.o=3,Yt(12)):(this.o=0,Yt(13)),Ze(this),nr(this)}}}catch{}finally{}};function _c(n){return n.g?n.u=="GET"&&n.L!=2&&n.l.Ha:!1}function yc(n,t,e){let r=!0,i;for(;!n.J&&n.C<e.length;)if(i=Mp(n,e),i==Ai){t==4&&(n.o=4,Yt(14),r=!1),Tn(n.j,n.m,null,"[Incomplete Response]");break}else if(i==Js){n.o=4,Yt(15),Tn(n.j,n.m,e,"[Invalid Chunk]"),r=!1;break}else Tn(n.j,n.m,i,null),to(n,i);_c(n)&&i!=Ai&&i!=Js&&(n.h.g="",n.C=0),t!=4||e.length!=0||n.h.h||(n.o=1,Yt(16),r=!1),n.i=n.i&&r,r?0<e.length&&!n.ba&&(n.ba=!0,t=n.l,t.g==n&&t.ca&&!t.M&&(t.l.info("Great, no buffering proxy detected. Bytes received: "+e.length),Ho(t),t.M=!0,Yt(11))):(Tn(n.j,n.m,e,"[Invalid Chunked Response]"),Ze(n),nr(n))}v.mb=function(){if(this.g){var n=de(this.g),t=this.g.ja();this.C<t.length&&(ss(this),yc(this,n,t),this.i&&n!=4&&Or(this))}};function Mp(n,t){var e=n.C,r=t.indexOf(`
`,e);return r==-1?Ai:(e=Number(t.substring(e,r)),isNaN(e)?Js:(r+=1,r+e>t.length?Ai:(t=t.slice(r,r+e),n.C=r+e,t)))}v.cancel=function(){this.J=!0,Ze(this)};function Or(n){n.Y=Date.now()+n.P,vc(n,n.P)}function vc(n,t){if(n.B!=null)throw Error("WatchDog timer not null");n.B=Nr($t(n.lb,n),t)}function ss(n){n.B&&(b.clearTimeout(n.B),n.B=null)}v.lb=function(){this.B=null;const n=Date.now();0<=n-this.Y?(Dp(this.j,this.A),this.L!=2&&(pr(),Yt(17)),Ze(this),this.o=2,nr(this)):vc(this,this.Y-n)};function nr(n){n.l.H==0||n.J||qc(n.l,n)}function Ze(n){ss(n);var t=n.M;t&&typeof t.sa=="function"&&t.sa(),n.M=null,Fo(n.V),lc(n.U),n.g&&(t=n.g,n.g=null,t.abort(),t.sa())}function to(n,t){try{var e=n.l;if(e.H!=0&&(e.g==n||eo(e.i,n))){if(!n.K&&eo(e.i,n)&&e.H==3){try{var r=e.Ja.g.parse(t)}catch{r=null}if(Array.isArray(r)&&r.length==3){var i=r;if(i[0]==0){t:if(!e.u){if(e.g)if(e.g.G+3e3<n.G)Si(e),ls(e);else break t;Ko(e),Yt(18)}}else e.Fa=i[1],0<e.Fa-e.V&&37500>i[2]&&e.G&&e.A==0&&!e.v&&(e.v=Nr($t(e.ib,e),6e3));if(1>=Sc(e.i)&&e.oa){try{e.oa()}catch{}e.oa=void 0}}else tn(e,11)}else if((n.K||e.g==n)&&Si(e),!cr(t))for(i=e.Ja.g.parse(t),t=0;t<i.length;t++){let l=i[t];if(e.V=l[0],l=l[1],e.H==2)if(l[0]=="c"){e.K=l[1],e.pa=l[2];const c=l[3];c!=null&&(e.ra=c,e.l.info("VER="+e.ra));const h=l[4];h!=null&&(e.Ga=h,e.l.info("SVER="+e.Ga));const d=l[5];d!=null&&typeof d=="number"&&0<d&&(r=1.5*d,e.L=r,e.l.info("backChannelRequestTimeoutMs_="+r)),r=e;const f=n.g;if(f){const E=f.g?f.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(E){var s=r.i;s.g||E.indexOf("spdy")==-1&&E.indexOf("quic")==-1&&E.indexOf("h2")==-1||(s.j=s.l,s.g=new Set,s.h&&(Bo(s,s.h),s.h=null))}if(r.F){const A=f.g?f.g.getResponseHeader("X-HTTP-Session-Id"):null;A&&(r.Da=A,dt(r.I,r.F,A))}}e.H=3,e.h&&e.h.Ba(),e.ca&&(e.S=Date.now()-n.G,e.l.info("Handshake RTT: "+e.S+"ms")),r=e;var o=n;if(r.wa=zc(r,r.J?r.pa:null,r.Y),o.K){Cc(r.i,o);var a=o,u=r.L;u&&a.setTimeout(u),a.B&&(ss(a),Or(a)),r.g=o}else Uc(r);0<e.j.length&&cs(e)}else l[0]!="stop"&&l[0]!="close"||tn(e,7);else e.H==3&&(l[0]=="stop"||l[0]=="close"?l[0]=="stop"?tn(e,7):Wo(e):l[0]!="noop"&&e.h&&e.h.Aa(l),e.A=0)}}pr(4)}catch{}}function Lp(n){if(n.Z&&typeof n.Z=="function")return n.Z();if(typeof Map<"u"&&n instanceof Map||typeof Set<"u"&&n instanceof Set)return Array.from(n.values());if(typeof n=="string")return n.split("");if(Yi(n)){for(var t=[],e=n.length,r=0;r<e;r++)t.push(n[r]);return t}t=[],e=0;for(r in n)t[e++]=n[r];return t}function xp(n){if(n.ta&&typeof n.ta=="function")return n.ta();if(!n.Z||typeof n.Z!="function"){if(typeof Map<"u"&&n instanceof Map)return Array.from(n.keys());if(!(typeof Set<"u"&&n instanceof Set)){if(Yi(n)||typeof n=="string"){var t=[];n=n.length;for(var e=0;e<n;e++)t.push(e);return t}t=[],e=0;for(const r in n)t[e++]=r;return t}}}function Tc(n,t){if(n.forEach&&typeof n.forEach=="function")n.forEach(t,void 0);else if(Yi(n)||typeof n=="string")Array.prototype.forEach.call(n,t,void 0);else for(var e=xp(n),r=Lp(n),i=r.length,s=0;s<i;s++)t.call(void 0,r[s],e&&e[s],n)}var Ec=RegExp("^(?:([^:/?#.]+):)?(?://(?:([^\\\\/?#]*)@)?([^\\\\/?#]*?)(?::([0-9]+))?(?=[\\\\/?#]|$))?([^?#]+)?(?:\\?([^#]*))?(?:#([\\s\\S]*))?$");function Fp(n,t){if(n){n=n.split("&");for(var e=0;e<n.length;e++){var r=n[e].indexOf("="),i=null;if(0<=r){var s=n[e].substring(0,r);i=n[e].substring(r+1)}else s=n[e];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function sn(n){if(this.g=this.s=this.j="",this.m=null,this.o=this.l="",this.h=!1,n instanceof sn){this.h=n.h,Ri(this,n.j),this.s=n.s,this.g=n.g,Pi(this,n.m),this.l=n.l;var t=n.i,e=new mr;e.i=t.i,t.g&&(e.g=new Map(t.g),e.h=t.h),yu(this,e),this.o=n.o}else n&&(t=String(n).match(Ec))?(this.h=!1,Ri(this,t[1]||"",!0),this.s=Xn(t[2]||""),this.g=Xn(t[3]||"",!0),Pi(this,t[4]),this.l=Xn(t[5]||"",!0),yu(this,t[6]||"",!0),this.o=Xn(t[7]||"")):(this.h=!1,this.i=new mr(null,this.h))}sn.prototype.toString=function(){var n=[],t=this.j;t&&n.push(Jn(t,vu,!0),":");var e=this.g;return(e||t=="file")&&(n.push("//"),(t=this.s)&&n.push(Jn(t,vu,!0),"@"),n.push(encodeURIComponent(String(e)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e=this.m,e!=null&&n.push(":",String(e))),(e=this.l)&&(this.g&&e.charAt(0)!="/"&&n.push("/"),n.push(Jn(e,e.charAt(0)=="/"?qp:$p,!0))),(e=this.i.toString())&&n.push("?",e),(e=this.o)&&n.push("#",Jn(e,Bp)),n.join("")};function Pe(n){return new sn(n)}function Ri(n,t,e){n.j=e?Xn(t,!0):t,n.j&&(n.j=n.j.replace(/:$/,""))}function Pi(n,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);n.m=t}else n.m=null}function yu(n,t,e){t instanceof mr?(n.i=t,zp(n.i,n.h)):(e||(t=Jn(t,jp)),n.i=new mr(t,n.h))}function dt(n,t,e){n.i.set(t,e)}function os(n){return dt(n,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),n}function Xn(n,t){return n?t?decodeURI(n.replace(/%25/g,"%2525")):decodeURIComponent(n):""}function Jn(n,t,e){return typeof n=="string"?(n=encodeURI(n).replace(t,Up),e&&(n=n.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n):null}function Up(n){return n=n.charCodeAt(0),"%"+(n>>4&15).toString(16)+(n&15).toString(16)}var vu=/[#\/\?@]/g,$p=/[#\?:]/g,qp=/[#\?]/g,jp=/[#\?@]/g,Bp=/#/g;function mr(n,t){this.h=this.g=null,this.i=n||null,this.j=!!t}function We(n){n.g||(n.g=new Map,n.h=0,n.i&&Fp(n.i,function(t,e){n.add(decodeURIComponent(t.replace(/\+/g," ")),e)}))}v=mr.prototype;v.add=function(n,t){We(this),this.i=null,n=Un(this,n);var e=this.g.get(n);return e||this.g.set(n,e=[]),e.push(t),this.h+=1,this};function Ic(n,t){We(n),t=Un(n,t),n.g.has(t)&&(n.i=null,n.h-=n.g.get(t).length,n.g.delete(t))}function wc(n,t){return We(n),t=Un(n,t),n.g.has(t)}v.forEach=function(n,t){We(this),this.g.forEach(function(e,r){e.forEach(function(i){n.call(t,i,r,this)},this)},this)};v.ta=function(){We(this);const n=Array.from(this.g.values()),t=Array.from(this.g.keys()),e=[];for(let r=0;r<t.length;r++){const i=n[r];for(let s=0;s<i.length;s++)e.push(t[r])}return e};v.Z=function(n){We(this);let t=[];if(typeof n=="string")wc(this,n)&&(t=t.concat(this.g.get(Un(this,n))));else{n=Array.from(this.g.values());for(let e=0;e<n.length;e++)t=t.concat(n[e])}return t};v.set=function(n,t){return We(this),this.i=null,n=Un(this,n),wc(this,n)&&(this.h-=this.g.get(n).length),this.g.set(n,[t]),this.h+=1,this};v.get=function(n,t){return n?(n=this.Z(n),0<n.length?String(n[0]):t):t};function Ac(n,t,e){Ic(n,t),0<e.length&&(n.i=null,n.g.set(Un(n,t),ko(e)),n.h+=e.length)}v.toString=function(){if(this.i)return this.i;if(!this.g)return"";const n=[],t=Array.from(this.g.keys());for(var e=0;e<t.length;e++){var r=t[e];const s=encodeURIComponent(String(r)),o=this.Z(r);for(r=0;r<o.length;r++){var i=s;o[r]!==""&&(i+="="+encodeURIComponent(String(o[r]))),n.push(i)}}return this.i=n.join("&")};function Un(n,t){return t=String(t),n.j&&(t=t.toLowerCase()),t}function zp(n,t){t&&!n.j&&(We(n),n.i=null,n.g.forEach(function(e,r){var i=r.toLowerCase();r!=i&&(Ic(this,r),Ac(this,i,e))},n)),n.j=t}var Gp=class{constructor(n,t){this.g=n,this.map=t}};function Rc(n){this.l=n||Wp,b.PerformanceNavigationTiming?(n=b.performance.getEntriesByType("navigation"),n=0<n.length&&(n[0].nextHopProtocol=="hq"||n[0].nextHopProtocol=="h2")):n=!!(b.g&&b.g.Ka&&b.g.Ka()&&b.g.Ka().dc),this.j=n?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Wp=10;function Pc(n){return n.h?!0:n.g?n.g.size>=n.j:!1}function Sc(n){return n.h?1:n.g?n.g.size:0}function eo(n,t){return n.h?n.h==t:n.g?n.g.has(t):!1}function Bo(n,t){n.g?n.g.add(t):n.h=t}function Cc(n,t){n.h&&n.h==t?n.h=null:n.g&&n.g.has(t)&&n.g.delete(t)}Rc.prototype.cancel=function(){if(this.i=kc(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&this.g.size!==0){for(const n of this.g.values())n.cancel();this.g.clear()}};function kc(n){if(n.h!=null)return n.i.concat(n.h.F);if(n.g!=null&&n.g.size!==0){let t=n.i;for(const e of n.g.values())t=t.concat(e.F);return t}return ko(n.i)}var Kp=class{stringify(n){return b.JSON.stringify(n,void 0)}parse(n){return b.JSON.parse(n,void 0)}};function Hp(){this.g=new Kp}function Qp(n,t,e){const r=e||"";try{Tc(n,function(i,s){let o=i;kr(i)&&(o=Lo(i)),t.push(r+s+"="+encodeURIComponent(o))})}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Yp(n,t){const e=new es;if(b.Image){const r=new Image;r.onload=Yr(Jr,e,r,"TestLoadImage: loaded",!0,t),r.onerror=Yr(Jr,e,r,"TestLoadImage: error",!1,t),r.onabort=Yr(Jr,e,r,"TestLoadImage: abort",!1,t),r.ontimeout=Yr(Jr,e,r,"TestLoadImage: timeout",!1,t),b.setTimeout(function(){r.ontimeout&&r.ontimeout()},1e4),r.src=n}else t(!1)}function Jr(n,t,e,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch{}}function Mr(n){this.l=n.ec||null,this.j=n.ob||!1}Dt(Mr,$o);Mr.prototype.g=function(){return new as(this.l,this.j)};Mr.prototype.i=function(n){return function(){return n}}({});function as(n,t){Nt.call(this),this.F=n,this.u=t,this.m=void 0,this.readyState=zo,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}Dt(as,Nt);var zo=0;v=as.prototype;v.open=function(n,t){if(this.readyState!=zo)throw this.abort(),Error("Error reopening a connection");this.C=n,this.B=t,this.readyState=1,_r(this)};v.send=function(n){if(this.readyState!=1)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};n&&(t.body=n),(this.F||b).fetch(new Request(this.B,t)).then(this.$a.bind(this),this.ka.bind(this))};v.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted.").catch(()=>{}),1<=this.readyState&&this.g&&this.readyState!=4&&(this.g=!1,Lr(this)),this.readyState=zo};v.$a=function(n){if(this.g&&(this.l=n,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=n.headers,this.readyState=2,_r(this)),this.g&&(this.readyState=3,_r(this),this.g)))if(this.responseType==="arraybuffer")n.arrayBuffer().then(this.Ya.bind(this),this.ka.bind(this));else if(typeof b.ReadableStream<"u"&&"body"in n){if(this.j=n.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Vc(this)}else n.text().then(this.Za.bind(this),this.ka.bind(this))};function Vc(n){n.j.read().then(n.Xa.bind(n)).catch(n.ka.bind(n))}v.Xa=function(n){if(this.g){if(this.u&&n.value)this.response.push(n.value);else if(!this.u){var t=n.value?n.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!n.done}))&&(this.response=this.responseText+=t)}n.done?Lr(this):_r(this),this.readyState==3&&Vc(this)}};v.Za=function(n){this.g&&(this.response=this.responseText=n,Lr(this))};v.Ya=function(n){this.g&&(this.response=n,Lr(this))};v.ka=function(){this.g&&Lr(this)};function Lr(n){n.readyState=4,n.l=null,n.j=null,n.A=null,_r(n)}v.setRequestHeader=function(n,t){this.v.append(n,t)};v.getResponseHeader=function(n){return this.h&&this.h.get(n.toLowerCase())||""};v.getAllResponseHeaders=function(){if(!this.h)return"";const n=[],t=this.h.entries();for(var e=t.next();!e.done;)e=e.value,n.push(e[0]+": "+e[1]),e=t.next();return n.join(`\r
`)};function _r(n){n.onreadystatechange&&n.onreadystatechange.call(n)}Object.defineProperty(as.prototype,"withCredentials",{get:function(){return this.m==="include"},set:function(n){this.m=n?"include":"same-origin"}});var Xp=b.JSON.parse;function yt(n){Nt.call(this),this.headers=new Map,this.u=n||null,this.h=!1,this.C=this.g=null,this.I="",this.m=0,this.j="",this.l=this.G=this.v=this.F=!1,this.B=0,this.A=null,this.K=Nc,this.L=this.M=!1}Dt(yt,Nt);var Nc="",Jp=/^https?$/i,Zp=["POST","PUT"];v=yt.prototype;v.Oa=function(n){this.M=n};v.ha=function(n,t,e,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.I+"; newUri="+n);t=t?t.toUpperCase():"GET",this.I=n,this.j="",this.m=0,this.F=!1,this.h=!0,this.g=this.u?this.u.g():Xs.g(),this.C=this.u?_u(this.u):_u(Xs),this.g.onreadystatechange=$t(this.La,this);try{this.G=!0,this.g.open(t,String(n),!0),this.G=!1}catch(s){Tu(this,s);return}if(n=e||"",e=new Map(this.headers),r)if(Object.getPrototypeOf(r)===Object.prototype)for(var i in r)e.set(i,r[i]);else if(typeof r.keys=="function"&&typeof r.get=="function")for(const s of r.keys())e.set(s,r.get(s));else throw Error("Unknown input type for opt_headers: "+String(r));r=Array.from(e.keys()).find(s=>s.toLowerCase()=="content-type"),i=b.FormData&&n instanceof b.FormData,!(0<=Hl(Zp,t))||r||i||e.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8");for(const[s,o]of e)this.g.setRequestHeader(s,o);this.K&&(this.g.responseType=this.K),"withCredentials"in this.g&&this.g.withCredentials!==this.M&&(this.g.withCredentials=this.M);try{Oc(this),0<this.B&&((this.L=tm(this.g))?(this.g.timeout=this.B,this.g.ontimeout=$t(this.ua,this)):this.A=Uo(this.ua,this.B,this)),this.v=!0,this.g.send(n),this.v=!1}catch(s){Tu(this,s)}};function tm(n){return Vn&&typeof n.timeout=="number"&&n.ontimeout!==void 0}v.ua=function(){typeof Co<"u"&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Lt(this,"timeout"),this.abort(8))};function Tu(n,t){n.h=!1,n.g&&(n.l=!0,n.g.abort(),n.l=!1),n.j=t,n.m=5,Dc(n),us(n)}function Dc(n){n.F||(n.F=!0,Lt(n,"complete"),Lt(n,"error"))}v.abort=function(n){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=n||7,Lt(this,"complete"),Lt(this,"abort"),us(this))};v.N=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),us(this,!0)),yt.$.N.call(this)};v.La=function(){this.s||(this.G||this.v||this.l?bc(this):this.kb())};v.kb=function(){bc(this)};function bc(n){if(n.h&&typeof Co<"u"&&(!n.C[1]||de(n)!=4||n.da()!=2)){if(n.v&&de(n)==4)Uo(n.La,0,n);else if(Lt(n,"readystatechange"),de(n)==4){n.h=!1;try{const o=n.da();t:switch(o){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break t;default:t=!1}var e;if(!(e=t)){var r;if(r=o===0){var i=String(n.I).match(Ec)[1]||null;!i&&b.self&&b.self.location&&(i=b.self.location.protocol.slice(0,-1)),r=!Jp.test(i?i.toLowerCase():"")}e=r}if(e)Lt(n,"complete"),Lt(n,"success");else{n.m=6;try{var s=2<de(n)?n.g.statusText:""}catch{s=""}n.j=s+" ["+n.da()+"]",Dc(n)}}finally{us(n)}}}}function us(n,t){if(n.g){Oc(n);const e=n.g,r=n.C[0]?()=>{}:null;n.g=null,n.C=null,t||Lt(n,"ready");try{e.onreadystatechange=r}catch{}}}function Oc(n){n.g&&n.L&&(n.g.ontimeout=null),n.A&&(b.clearTimeout(n.A),n.A=null)}v.isActive=function(){return!!this.g};function de(n){return n.g?n.g.readyState:0}v.da=function(){try{return 2<de(this)?this.g.status:-1}catch{return-1}};v.ja=function(){try{return this.g?this.g.responseText:""}catch{return""}};v.Wa=function(n){if(this.g){var t=this.g.responseText;return n&&t.indexOf(n)==0&&(t=t.substring(n.length)),Xp(t)}};function Eu(n){try{if(!n.g)return null;if("response"in n.g)return n.g.response;switch(n.K){case Nc:case"text":return n.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in n.g)return n.g.mozResponseArrayBuffer}return null}catch{return null}}function em(n){const t={};n=(n.g&&2<=de(n)&&n.g.getAllResponseHeaders()||"").split(`\r
`);for(let r=0;r<n.length;r++){if(cr(n[r]))continue;var e=Pp(n[r]);const i=e[0];if(e=e[1],typeof e!="string")continue;e=e.trim();const s=t[i]||[];t[i]=s,s.push(e)}vp(t,function(r){return r.join(", ")})}v.Ia=function(){return this.m};v.Sa=function(){return typeof this.j=="string"?this.j:String(this.j)};function Mc(n){let t="";return No(n,function(e,r){t+=r,t+=":",t+=e,t+=`\r
`}),t}function Go(n,t,e){t:{for(r in e){var r=!1;break t}r=!0}r||(e=Mc(e),typeof n=="string"?e!=null&&encodeURIComponent(String(e)):dt(n,t,e))}function Kn(n,t,e){return e&&e.internalChannelParams&&e.internalChannelParams[n]||t}function Lc(n){this.Ga=0,this.j=[],this.l=new es,this.pa=this.wa=this.I=this.Y=this.g=this.Da=this.F=this.na=this.o=this.U=this.s=null,this.fb=this.W=0,this.cb=Kn("failFast",!1,n),this.G=this.v=this.u=this.m=this.h=null,this.aa=!0,this.Fa=this.V=-1,this.ba=this.A=this.C=0,this.ab=Kn("baseRetryDelayMs",5e3,n),this.hb=Kn("retryDelaySeedMs",1e4,n),this.eb=Kn("forwardChannelMaxRetries",2,n),this.xa=Kn("forwardChannelRequestTimeoutMs",2e4,n),this.va=n&&n.xmlHttpFactory||void 0,this.Ha=n&&n.useFetchStreams||!1,this.L=void 0,this.J=n&&n.supportsCrossDomainXhr||!1,this.K="",this.i=new Rc(n&&n.concurrentRequestLimit),this.Ja=new Hp,this.P=n&&n.fastHandshake||!1,this.O=n&&n.encodeInitMessageHeaders||!1,this.P&&this.O&&(this.O=!1),this.bb=n&&n.bc||!1,n&&n.Ea&&this.l.Ea(),n&&n.forceLongPolling&&(this.aa=!1),this.ca=!this.P&&this.aa&&n&&n.detectBufferingProxy||!1,this.qa=void 0,n&&n.longPollingTimeout&&0<n.longPollingTimeout&&(this.qa=n.longPollingTimeout),this.oa=void 0,this.S=0,this.M=!1,this.ma=this.B=null}v=Lc.prototype;v.ra=8;v.H=1;function Wo(n){if(xc(n),n.H==3){var t=n.W++,e=Pe(n.I);if(dt(e,"SID",n.K),dt(e,"RID",t),dt(e,"TYPE","terminate"),xr(n,e),t=new br(n,n.l,t),t.L=2,t.v=os(Pe(e)),e=!1,b.navigator&&b.navigator.sendBeacon)try{e=b.navigator.sendBeacon(t.v.toString(),"")}catch{}!e&&b.Image&&(new Image().src=t.v,e=!0),e||(t.g=Gc(t.l,null),t.g.ha(t.v)),t.G=Date.now(),Or(t)}Bc(n)}function ls(n){n.g&&(Ho(n),n.g.cancel(),n.g=null)}function xc(n){ls(n),n.u&&(b.clearTimeout(n.u),n.u=null),Si(n),n.i.cancel(),n.m&&(typeof n.m=="number"&&b.clearTimeout(n.m),n.m=null)}function cs(n){if(!Pc(n.i)&&!n.m){n.m=!0;var t=n.Na;dr||oc(),fr||(dr(),fr=!0),xo.add(t,n),n.C=0}}function nm(n,t){return Sc(n.i)>=n.i.j-(n.m?1:0)?!1:n.m?(n.j=t.F.concat(n.j),!0):n.H==1||n.H==2||n.C>=(n.cb?0:n.eb)?!1:(n.m=Nr($t(n.Na,n,t),jc(n,n.C)),n.C++,!0)}v.Na=function(n){if(this.m)if(this.m=null,this.H==1){if(!n){this.W=Math.floor(1e5*Math.random()),n=this.W++;const i=new br(this,this.l,n);let s=this.s;if(this.U&&(s?(s=Jl(s),Zl(s,this.U)):s=this.U),this.o!==null||this.O||(i.I=s,s=null),this.P)t:{for(var t=0,e=0;e<this.j.length;e++){e:{var r=this.j[e];if("__data__"in r.map&&(r=r.map.__data__,typeof r=="string")){r=r.length;break e}r=void 0}if(r===void 0)break;if(t+=r,4096<t){t=e;break t}if(t===4096||e===this.j.length-1){t=e+1;break t}}t=1e3}else t=1e3;t=Fc(this,i,t),e=Pe(this.I),dt(e,"RID",n),dt(e,"CVER",22),this.F&&dt(e,"X-HTTP-Session-Id",this.F),xr(this,e),s&&(this.O?t="headers="+encodeURIComponent(String(Mc(s)))+"&"+t:this.o&&Go(e,this.o,s)),Bo(this.i,i),this.bb&&dt(e,"TYPE","init"),this.P?(dt(e,"$req",t),dt(e,"SID","null"),i.aa=!0,Zs(i,e,null)):Zs(i,e,t),this.H=2}}else this.H==3&&(n?Iu(this,n):this.j.length==0||Pc(this.i)||Iu(this))};function Iu(n,t){var e;t?e=t.m:e=n.W++;const r=Pe(n.I);dt(r,"SID",n.K),dt(r,"RID",e),dt(r,"AID",n.V),xr(n,r),n.o&&n.s&&Go(r,n.o,n.s),e=new br(n,n.l,e,n.C+1),n.o===null&&(e.I=n.s),t&&(n.j=t.F.concat(n.j)),t=Fc(n,e,1e3),e.setTimeout(Math.round(.5*n.xa)+Math.round(.5*n.xa*Math.random())),Bo(n.i,e),Zs(e,r,t)}function xr(n,t){n.na&&No(n.na,function(e,r){dt(t,r,e)}),n.h&&Tc({},function(e,r){dt(t,r,e)})}function Fc(n,t,e){e=Math.min(n.j.length,e);var r=n.h?$t(n.h.Va,n.h,n):null;t:{var i=n.j;let s=-1;for(;;){const o=["count="+e];s==-1?0<e?(s=i[0].g,o.push("ofs="+s)):s=0:o.push("ofs="+s);let a=!0;for(let u=0;u<e;u++){let l=i[u].g;const c=i[u].map;if(l-=s,0>l)s=Math.max(0,i[u].g-100),a=!1;else try{Qp(c,o,"req"+l+"_")}catch{r&&r(c)}}if(a){r=o.join("&");break t}}}return n=n.j.splice(0,e),t.F=n,r}function Uc(n){if(!n.g&&!n.u){n.ba=1;var t=n.Ma;dr||oc(),fr||(dr(),fr=!0),xo.add(t,n),n.A=0}}function Ko(n){return n.g||n.u||3<=n.A?!1:(n.ba++,n.u=Nr($t(n.Ma,n),jc(n,n.A)),n.A++,!0)}v.Ma=function(){if(this.u=null,$c(this),this.ca&&!(this.M||this.g==null||0>=this.S)){var n=2*this.S;this.l.info("BP detection timer enabled: "+n),this.B=Nr($t(this.jb,this),n)}};v.jb=function(){this.B&&(this.B=null,this.l.info("BP detection timeout reached."),this.l.info("Buffering proxy detected and switch to long-polling!"),this.G=!1,this.M=!0,Yt(10),ls(this),$c(this))};function Ho(n){n.B!=null&&(b.clearTimeout(n.B),n.B=null)}function $c(n){n.g=new br(n,n.l,"rpc",n.ba),n.o===null&&(n.g.I=n.s),n.g.O=0;var t=Pe(n.wa);dt(t,"RID","rpc"),dt(t,"SID",n.K),dt(t,"AID",n.V),dt(t,"CI",n.G?"0":"1"),!n.G&&n.qa&&dt(t,"TO",n.qa),dt(t,"TYPE","xmlhttp"),xr(n,t),n.o&&n.s&&Go(t,n.o,n.s),n.L&&n.g.setTimeout(n.L);var e=n.g;n=n.pa,e.L=1,e.v=os(Pe(t)),e.s=null,e.S=!0,mc(e,n)}v.ib=function(){this.v!=null&&(this.v=null,ls(this),Ko(this),Yt(19))};function Si(n){n.v!=null&&(b.clearTimeout(n.v),n.v=null)}function qc(n,t){var e=null;if(n.g==t){Si(n),Ho(n),n.g=null;var r=2}else if(eo(n.i,t))e=t.F,Cc(n.i,t),r=1;else return;if(n.H!=0){if(t.i)if(r==1){e=t.s?t.s.length:0,t=Date.now()-t.G;var i=n.C;r=ns(),Lt(r,new dc(r,e)),cs(n)}else Uc(n);else if(i=t.o,i==3||i==0&&0<t.ca||!(r==1&&nm(n,t)||r==2&&Ko(n)))switch(e&&0<e.length&&(t=n.i,t.i=t.i.concat(e)),i){case 1:tn(n,5);break;case 4:tn(n,10);break;case 3:tn(n,6);break;default:tn(n,2)}}}function jc(n,t){let e=n.ab+Math.floor(Math.random()*n.hb);return n.isActive()||(e*=2),e*t}function tn(n,t){if(n.l.info("Error code "+t),t==2){var e=null;n.h&&(e=null);var r=$t(n.pb,n);e||(e=new sn("//www.google.com/images/cleardot.gif"),b.location&&b.location.protocol=="http"||Ri(e,"https"),os(e)),Yp(e.toString(),r)}else Yt(2);n.H=0,n.h&&n.h.za(t),Bc(n),xc(n)}v.pb=function(n){n?(this.l.info("Successfully pinged google.com"),Yt(2)):(this.l.info("Failed to ping google.com"),Yt(1))};function Bc(n){if(n.H=0,n.ma=[],n.h){const t=kc(n.i);(t.length!=0||n.j.length!=0)&&(du(n.ma,t),du(n.ma,n.j),n.i.i.length=0,ko(n.j),n.j.length=0),n.h.ya()}}function zc(n,t,e){var r=e instanceof sn?Pe(e):new sn(e);if(r.g!="")t&&(r.g=t+"."+r.g),Pi(r,r.m);else{var i=b.location;r=i.protocol,t=t?t+"."+i.hostname:i.hostname,i=+i.port;var s=new sn(null);r&&Ri(s,r),t&&(s.g=t),i&&Pi(s,i),e&&(s.l=e),r=s}return e=n.F,t=n.Da,e&&t&&dt(r,e,t),dt(r,"VER",n.ra),xr(n,r),r}function Gc(n,t,e){if(t&&!n.J)throw Error("Can't create secondary domain capable XhrIo object.");return t=e&&n.Ha&&!n.va?new yt(new Mr({ob:!0})):new yt(n.va),t.Oa(n.J),t}v.isActive=function(){return!!this.h&&this.h.isActive(this)};function Wc(){}v=Wc.prototype;v.Ba=function(){};v.Aa=function(){};v.za=function(){};v.ya=function(){};v.isActive=function(){return!0};v.Va=function(){};function Ci(){if(Vn&&!(10<=Number(pp)))throw Error("Environmental error: no available transport.")}Ci.prototype.g=function(n,t){return new re(n,t)};function re(n,t){Nt.call(this),this.g=new Lc(t),this.l=n,this.h=t&&t.messageUrlParams||null,n=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(n?n["X-Client-Protocol"]="webchannel":n={"X-Client-Protocol":"webchannel"}),this.g.s=n,n=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(n?n["X-WebChannel-Content-Type"]=t.messageContentType:n={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.Ca&&(n?n["X-WebChannel-Client-Profile"]=t.Ca:n={"X-WebChannel-Client-Profile":t.Ca}),this.g.U=n,(n=t&&t.cc)&&!cr(n)&&(this.g.o=n),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!cr(t)&&(this.g.F=t,n=this.h,n!==null&&t in n&&(n=this.h,t in n&&delete n[t])),this.j=new $n(this)}Dt(re,Nt);re.prototype.m=function(){this.g.h=this.j,this.A&&(this.g.J=!0);var n=this.g,t=this.l,e=this.h||void 0;Yt(0),n.Y=t,n.na=e||{},n.G=n.aa,n.I=zc(n,null,n.Y),cs(n)};re.prototype.close=function(){Wo(this.g)};re.prototype.u=function(n){var t=this.g;if(typeof n=="string"){var e={};e.__data__=n,n=e}else this.v&&(e={},e.__data__=Lo(n),n=e);t.j.push(new Gp(t.fb++,n)),t.H==3&&cs(t)};re.prototype.N=function(){this.g.h=null,delete this.j,Wo(this.g),delete this.g,re.$.N.call(this)};function Kc(n){qo.call(this),n.__headers__&&(this.headers=n.__headers__,this.statusCode=n.__status__,delete n.__headers__,delete n.__status__);var t=n.__sm__;if(t){t:{for(const e in t){n=e;break t}n=void 0}(this.i=n)&&(n=this.i,t=t!==null&&n in t?t[n]:void 0),this.data=t}else this.data=n}Dt(Kc,qo);function Hc(){jo.call(this),this.status=1}Dt(Hc,jo);function $n(n){this.g=n}Dt($n,Wc);$n.prototype.Ba=function(){Lt(this.g,"a")};$n.prototype.Aa=function(n){Lt(this.g,new Kc(n))};$n.prototype.za=function(n){Lt(this.g,new Hc)};$n.prototype.ya=function(){Lt(this.g,"b")};function rm(){this.blockSize=-1}function ue(){this.blockSize=-1,this.blockSize=64,this.g=Array(4),this.m=Array(this.blockSize),this.i=this.h=0,this.reset()}Dt(ue,rm);ue.prototype.reset=function(){this.g[0]=1732584193,this.g[1]=4023233417,this.g[2]=2562383102,this.g[3]=271733878,this.i=this.h=0};function xs(n,t,e){e||(e=0);var r=Array(16);if(typeof t=="string")for(var i=0;16>i;++i)r[i]=t.charCodeAt(e++)|t.charCodeAt(e++)<<8|t.charCodeAt(e++)<<16|t.charCodeAt(e++)<<24;else for(i=0;16>i;++i)r[i]=t[e++]|t[e++]<<8|t[e++]<<16|t[e++]<<24;t=n.g[0],e=n.g[1],i=n.g[2];var s=n.g[3],o=t+(s^e&(i^s))+r[0]+3614090360&4294967295;t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[1]+3905402710&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[2]+606105819&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[3]+3250441966&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[4]+4118548399&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[5]+1200080426&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[6]+2821735955&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[7]+4249261313&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[8]+1770035416&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[9]+2336552879&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[10]+4294925233&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[11]+2304563134&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(s^e&(i^s))+r[12]+1804603682&4294967295,t=e+(o<<7&4294967295|o>>>25),o=s+(i^t&(e^i))+r[13]+4254626195&4294967295,s=t+(o<<12&4294967295|o>>>20),o=i+(e^s&(t^e))+r[14]+2792965006&4294967295,i=s+(o<<17&4294967295|o>>>15),o=e+(t^i&(s^t))+r[15]+1236535329&4294967295,e=i+(o<<22&4294967295|o>>>10),o=t+(i^s&(e^i))+r[1]+4129170786&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[6]+3225465664&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[11]+643717713&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[0]+3921069994&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[5]+3593408605&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[10]+38016083&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[15]+3634488961&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[4]+3889429448&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[9]+568446438&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[14]+3275163606&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[3]+4107603335&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[8]+1163531501&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(i^s&(e^i))+r[13]+2850285829&4294967295,t=e+(o<<5&4294967295|o>>>27),o=s+(e^i&(t^e))+r[2]+4243563512&4294967295,s=t+(o<<9&4294967295|o>>>23),o=i+(t^e&(s^t))+r[7]+1735328473&4294967295,i=s+(o<<14&4294967295|o>>>18),o=e+(s^t&(i^s))+r[12]+2368359562&4294967295,e=i+(o<<20&4294967295|o>>>12),o=t+(e^i^s)+r[5]+4294588738&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[8]+2272392833&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[11]+1839030562&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[14]+4259657740&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[1]+2763975236&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[4]+1272893353&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[7]+4139469664&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[10]+3200236656&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[13]+681279174&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[0]+3936430074&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[3]+3572445317&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[6]+76029189&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(e^i^s)+r[9]+3654602809&4294967295,t=e+(o<<4&4294967295|o>>>28),o=s+(t^e^i)+r[12]+3873151461&4294967295,s=t+(o<<11&4294967295|o>>>21),o=i+(s^t^e)+r[15]+530742520&4294967295,i=s+(o<<16&4294967295|o>>>16),o=e+(i^s^t)+r[2]+3299628645&4294967295,e=i+(o<<23&4294967295|o>>>9),o=t+(i^(e|~s))+r[0]+4096336452&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[7]+1126891415&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[14]+2878612391&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[5]+4237533241&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[12]+1700485571&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[3]+2399980690&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[10]+4293915773&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[1]+2240044497&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[8]+1873313359&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[15]+4264355552&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[6]+2734768916&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[13]+1309151649&4294967295,e=i+(o<<21&4294967295|o>>>11),o=t+(i^(e|~s))+r[4]+4149444226&4294967295,t=e+(o<<6&4294967295|o>>>26),o=s+(e^(t|~i))+r[11]+3174756917&4294967295,s=t+(o<<10&4294967295|o>>>22),o=i+(t^(s|~e))+r[2]+718787259&4294967295,i=s+(o<<15&4294967295|o>>>17),o=e+(s^(i|~t))+r[9]+3951481745&4294967295,n.g[0]=n.g[0]+t&4294967295,n.g[1]=n.g[1]+(i+(o<<21&4294967295|o>>>11))&4294967295,n.g[2]=n.g[2]+i&4294967295,n.g[3]=n.g[3]+s&4294967295}ue.prototype.j=function(n,t){t===void 0&&(t=n.length);for(var e=t-this.blockSize,r=this.m,i=this.h,s=0;s<t;){if(i==0)for(;s<=e;)xs(this,n,s),s+=this.blockSize;if(typeof n=="string"){for(;s<t;)if(r[i++]=n.charCodeAt(s++),i==this.blockSize){xs(this,r),i=0;break}}else for(;s<t;)if(r[i++]=n[s++],i==this.blockSize){xs(this,r),i=0;break}}this.h=i,this.i+=t};ue.prototype.l=function(){var n=Array((56>this.h?this.blockSize:2*this.blockSize)-this.h);n[0]=128;for(var t=1;t<n.length-8;++t)n[t]=0;var e=8*this.i;for(t=n.length-8;t<n.length;++t)n[t]=e&255,e/=256;for(this.j(n),n=Array(16),t=e=0;4>t;++t)for(var r=0;32>r;r+=8)n[e++]=this.g[t]>>>r&255;return n};function et(n,t){this.h=t;for(var e=[],r=!0,i=n.length-1;0<=i;i--){var s=n[i]|0;r&&s==t||(e[i]=s,r=!1)}this.g=e}var im={};function Qo(n){return-128<=n&&128>n?dp(n,function(t){return new et([t|0],0>t?-1:0)}):new et([n|0],0>n?-1:0)}function fe(n){if(isNaN(n)||!isFinite(n))return An;if(0>n)return Ot(fe(-n));for(var t=[],e=1,r=0;n>=e;r++)t[r]=n/e|0,e*=no;return new et(t,0)}function Qc(n,t){if(n.length==0)throw Error("number format error: empty string");if(t=t||10,2>t||36<t)throw Error("radix out of range: "+t);if(n.charAt(0)=="-")return Ot(Qc(n.substring(1),t));if(0<=n.indexOf("-"))throw Error('number format error: interior "-" character');for(var e=fe(Math.pow(t,8)),r=An,i=0;i<n.length;i+=8){var s=Math.min(8,n.length-i),o=parseInt(n.substring(i,i+s),t);8>s?(s=fe(Math.pow(t,s)),r=r.R(s).add(fe(o))):(r=r.R(e),r=r.add(fe(o)))}return r}var no=4294967296,An=Qo(0),ro=Qo(1),wu=Qo(16777216);v=et.prototype;v.ea=function(){if(ie(this))return-Ot(this).ea();for(var n=0,t=1,e=0;e<this.g.length;e++){var r=this.D(e);n+=(0<=r?r:no+r)*t,t*=no}return n};v.toString=function(n){if(n=n||10,2>n||36<n)throw Error("radix out of range: "+n);if(we(this))return"0";if(ie(this))return"-"+Ot(this).toString(n);for(var t=fe(Math.pow(n,6)),e=this,r="";;){var i=Vi(e,t).g;e=ki(e,i.R(t));var s=((0<e.g.length?e.g[0]:e.h)>>>0).toString(n);if(e=i,we(e))return s+r;for(;6>s.length;)s="0"+s;r=s+r}};v.D=function(n){return 0>n?0:n<this.g.length?this.g[n]:this.h};function we(n){if(n.h!=0)return!1;for(var t=0;t<n.g.length;t++)if(n.g[t]!=0)return!1;return!0}function ie(n){return n.h==-1}v.X=function(n){return n=ki(this,n),ie(n)?-1:we(n)?0:1};function Ot(n){for(var t=n.g.length,e=[],r=0;r<t;r++)e[r]=~n.g[r];return new et(e,~n.h).add(ro)}v.abs=function(){return ie(this)?Ot(this):this};v.add=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0,i=0;i<=t;i++){var s=r+(this.D(i)&65535)+(n.D(i)&65535),o=(s>>>16)+(this.D(i)>>>16)+(n.D(i)>>>16);r=o>>>16,s&=65535,o&=65535,e[i]=o<<16|s}return new et(e,e[e.length-1]&-2147483648?-1:0)};function ki(n,t){return n.add(Ot(t))}v.R=function(n){if(we(this)||we(n))return An;if(ie(this))return ie(n)?Ot(this).R(Ot(n)):Ot(Ot(this).R(n));if(ie(n))return Ot(this.R(Ot(n)));if(0>this.X(wu)&&0>n.X(wu))return fe(this.ea()*n.ea());for(var t=this.g.length+n.g.length,e=[],r=0;r<2*t;r++)e[r]=0;for(r=0;r<this.g.length;r++)for(var i=0;i<n.g.length;i++){var s=this.D(r)>>>16,o=this.D(r)&65535,a=n.D(i)>>>16,u=n.D(i)&65535;e[2*r+2*i]+=o*u,Zr(e,2*r+2*i),e[2*r+2*i+1]+=s*u,Zr(e,2*r+2*i+1),e[2*r+2*i+1]+=o*a,Zr(e,2*r+2*i+1),e[2*r+2*i+2]+=s*a,Zr(e,2*r+2*i+2)}for(r=0;r<t;r++)e[r]=e[2*r+1]<<16|e[2*r];for(r=t;r<2*t;r++)e[r]=0;return new et(e,0)};function Zr(n,t){for(;(n[t]&65535)!=n[t];)n[t+1]+=n[t]>>>16,n[t]&=65535,t++}function Hn(n,t){this.g=n,this.h=t}function Vi(n,t){if(we(t))throw Error("division by zero");if(we(n))return new Hn(An,An);if(ie(n))return t=Vi(Ot(n),t),new Hn(Ot(t.g),Ot(t.h));if(ie(t))return t=Vi(n,Ot(t)),new Hn(Ot(t.g),t.h);if(30<n.g.length){if(ie(n)||ie(t))throw Error("slowDivide_ only works with positive integers.");for(var e=ro,r=t;0>=r.X(n);)e=Au(e),r=Au(r);var i=mn(e,1),s=mn(r,1);for(r=mn(r,2),e=mn(e,2);!we(r);){var o=s.add(r);0>=o.X(n)&&(i=i.add(e),s=o),r=mn(r,1),e=mn(e,1)}return t=ki(n,i.R(t)),new Hn(i,t)}for(i=An;0<=n.X(t);){for(e=Math.max(1,Math.floor(n.ea()/t.ea())),r=Math.ceil(Math.log(e)/Math.LN2),r=48>=r?1:Math.pow(2,r-48),s=fe(e),o=s.R(t);ie(o)||0<o.X(n);)e-=r,s=fe(e),o=s.R(t);we(s)&&(s=ro),i=i.add(s),n=ki(n,o)}return new Hn(i,n)}v.gb=function(n){return Vi(this,n).h};v.and=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)&n.D(r);return new et(e,this.h&n.h)};v.or=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)|n.D(r);return new et(e,this.h|n.h)};v.xor=function(n){for(var t=Math.max(this.g.length,n.g.length),e=[],r=0;r<t;r++)e[r]=this.D(r)^n.D(r);return new et(e,this.h^n.h)};function Au(n){for(var t=n.g.length+1,e=[],r=0;r<t;r++)e[r]=n.D(r)<<1|n.D(r-1)>>>31;return new et(e,n.h)}function mn(n,t){var e=t>>5;t%=32;for(var r=n.g.length-e,i=[],s=0;s<r;s++)i[s]=0<t?n.D(s+e)>>>t|n.D(s+e+1)<<32-t:n.D(s+e);return new et(i,n.h)}Ci.prototype.createWebChannel=Ci.prototype.g;re.prototype.send=re.prototype.u;re.prototype.open=re.prototype.m;re.prototype.close=re.prototype.close;rs.NO_ERROR=0;rs.TIMEOUT=8;rs.HTTP_ERROR=6;fc.COMPLETE="complete";gc.EventType=Dr;Dr.OPEN="a";Dr.CLOSE="b";Dr.ERROR="c";Dr.MESSAGE="d";Nt.prototype.listen=Nt.prototype.O;yt.prototype.listenOnce=yt.prototype.P;yt.prototype.getLastError=yt.prototype.Sa;yt.prototype.getLastErrorCode=yt.prototype.Ia;yt.prototype.getStatus=yt.prototype.da;yt.prototype.getResponseJson=yt.prototype.Wa;yt.prototype.getResponseText=yt.prototype.ja;yt.prototype.send=yt.prototype.ha;yt.prototype.setWithCredentials=yt.prototype.Oa;ue.prototype.digest=ue.prototype.l;ue.prototype.reset=ue.prototype.reset;ue.prototype.update=ue.prototype.j;et.prototype.add=et.prototype.add;et.prototype.multiply=et.prototype.R;et.prototype.modulo=et.prototype.gb;et.prototype.compare=et.prototype.X;et.prototype.toNumber=et.prototype.ea;et.prototype.toString=et.prototype.toString;et.prototype.getBits=et.prototype.D;et.fromNumber=fe;et.fromString=Qc;var sm=function(){return new Ci},om=function(){return ns()},Fs=rs,am=fc,um=hn,Ru={xb:0,Ab:1,Bb:2,Ub:3,Zb:4,Wb:5,Xb:6,Vb:7,Tb:8,Yb:9,PROXY:10,NOPROXY:11,Rb:12,Nb:13,Ob:14,Mb:15,Pb:16,Qb:17,tb:18,sb:19,ub:20},lm=Mr,ti=gc,cm=yt,hm=ue,Rn=et;const Pu="@firebase/firestore";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */const an=new pl("@firebase/firestore");function Qn(){return an.logLevel}function R(n,...t){if(an.logLevel<=ce.DEBUG){const e=t.map(Yo);an.debug(`Firestore (${qn}): ${n}`,...e)}}function Se(n,...t){if(an.logLevel<=ce.ERROR){const e=t.map(Yo);an.error(`Firestore (${qn}): ${n}`,...e)}}function Nn(n,...t){if(an.logLevel<=ce.WARN){const e=t.map(Yo);an.warn(`Firestore (${qn}): ${n}`,...e)}}function Yo(n){if(typeof n=="string")return n;try{/**
* @license
* Copyright 2020 Google LLC
*
* Licensed under the Apache License, Version 2.0 (the "License");
* you may not use this file except in compliance with the License.
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
 */function C(n="Unexpected state"){const t=`FIRESTORE (${qn}) INTERNAL ASSERTION FAILED: `+n;throw Se(t),new Error(t)}function tt(n,t){n||C()}function M(n,t){return n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const g={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class I extends Gi{constructor(t,e){super(t,e),this.code=t,this.message=e,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Yc{constructor(t,e){this.user=e,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${t}`)}}class dm{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(Ut.UNAUTHENTICATED))}shutdown(){}}class fm{constructor(t){this.token=t,this.changeListener=null}getToken(){return Promise.resolve(this.token)}invalidateToken(){}start(t,e){this.changeListener=e,t.enqueueRetryable(()=>e(this.token.user))}shutdown(){this.changeListener=null}}class gm{constructor(t){this.t=t,this.currentUser=Ut.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let r=this.i;const i=u=>this.i!==r?(r=this.i,e(u)):Promise.resolve();let s=new me;this.o=()=>{this.i++,this.currentUser=this.u(),s.resolve(),s=new me,t.enqueueRetryable(()=>i(this.currentUser))};const o=()=>{const u=s;t.enqueueRetryable(async()=>{await u.promise,await i(this.currentUser)})},a=u=>{R("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=u,this.auth.addAuthTokenListener(this.o),o()};this.t.onInit(u=>a(u)),setTimeout(()=>{if(!this.auth){const u=this.t.getImmediate({optional:!0});u?a(u):(R("FirebaseAuthCredentialsProvider","Auth not yet detected"),s.resolve(),s=new me)}},0),o()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(r=>this.i!==t?(R("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):r?(tt(typeof r.accessToken=="string"),new Yc(r.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return tt(t===null||typeof t=="string"),new Ut(t)}}class pm{constructor(t,e,r){this.l=t,this.h=e,this.P=r,this.type="FirstParty",this.user=Ut.FIRST_PARTY,this.I=new Map}T(){return this.P?this.P():null}get headers(){this.I.set("X-Goog-AuthUser",this.l);const t=this.T();return t&&this.I.set("Authorization",t),this.h&&this.I.set("X-Goog-Iam-Authorization-Token",this.h),this.I}}class mm{constructor(t,e,r){this.l=t,this.h=e,this.P=r}getToken(){return Promise.resolve(new pm(this.l,this.h,this.P))}start(t,e){t.enqueueRetryable(()=>e(Ut.FIRST_PARTY))}shutdown(){}invalidateToken(){}}class _m{constructor(t){this.value=t,this.type="AppCheck",this.headers=new Map,t&&t.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class ym{constructor(t){this.A=t,this.forceRefresh=!1,this.appCheck=null,this.R=null}start(t,e){const r=s=>{s.error!=null&&R("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${s.error.message}`);const o=s.token!==this.R;return this.R=s.token,R("FirebaseAppCheckTokenProvider",`Received ${o?"new":"existing"} token.`),o?e(s.token):Promise.resolve()};this.o=s=>{t.enqueueRetryable(()=>r(s))};const i=s=>{R("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=s,this.appCheck.addTokenListener(this.o)};this.A.onInit(s=>i(s)),setTimeout(()=>{if(!this.appCheck){const s=this.A.getImmediate({optional:!0});s?i(s):R("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}},0)}getToken(){const t=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(t).then(e=>e?(tt(typeof e.token=="string"),this.R=e.token,new _m(e.token)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vm(n){const t=typeof self<"u"&&(self.crypto||self.msCrypto),e=new Uint8Array(n);if(t&&typeof t.getRandomValues=="function")t.getRandomValues(e);else for(let r=0;r<n;r++)e[r]=Math.floor(256*Math.random());return e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xc{static newId(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let r="";for(;r.length<20;){const i=vm(40);for(let s=0;s<i.length;++s)r.length<20&&i[s]<e&&(r+=t.charAt(i[s]%t.length))}return r}}function X(n,t){return n<t?-1:n>t?1:0}function Dn(n,t,e){return n.length===t.length&&n.every((r,i)=>e(r,t[i]))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new I(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new I(g.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new I(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new I(g.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return St.fromMillis(Date.now())}static fromDate(t){return St.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),r=Math.floor(1e6*(t-1e3*e));return new St(e,r)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?X(this.nanoseconds,t.nanoseconds):X(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N{constructor(t){this.timestamp=t}static fromTimestamp(t){return new N(t)}static min(){return new N(new St(0,0))}static max(){return new N(new St(253402300799,999999999))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yr{constructor(t,e,r){e===void 0?e=0:e>t.length&&C(),r===void 0?r=t.length-e:r>t.length-e&&C(),this.segments=t,this.offset=e,this.len=r}get length(){return this.len}isEqual(t){return yr.comparator(this,t)===0}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof yr?t.forEach(r=>{e.push(r)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=t===void 0?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return this.length===0}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,r=this.limit();e<r;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const r=Math.min(t.length,e.length);for(let i=0;i<r;i++){const s=t.get(i),o=e.get(i);if(s<o)return-1;if(s>o)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class ft extends yr{construct(t,e,r){return new ft(t,e,r)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const r of t){if(r.indexOf("//")>=0)throw new I(g.INVALID_ARGUMENT,`Invalid segment (${r}). Paths must not contain // in them.`);e.push(...r.split("/").filter(i=>i.length>0))}return new ft(e)}static emptyPath(){return new ft([])}}const Tm=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class Mt extends yr{construct(t,e,r){return new Mt(t,e,r)}static isValidIdentifier(t){return Tm.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),Mt.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return this.length===1&&this.get(0)==="__name__"}static keyField(){return new Mt(["__name__"])}static fromServerFormat(t){const e=[];let r="",i=0;const s=()=>{if(r.length===0)throw new I(g.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(r),r=""};let o=!1;for(;i<t.length;){const a=t[i];if(a==="\\"){if(i+1===t.length)throw new I(g.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const u=t[i+1];if(u!=="\\"&&u!=="."&&u!=="`")throw new I(g.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);r+=u,i+=2}else a==="`"?(o=!o,i++):a!=="."||o?(r+=a,i++):(s(),i++)}if(s(),o)throw new I(g.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new Mt(e)}static emptyPath(){return new Mt([])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S{constructor(t){this.path=t}static fromPath(t){return new S(ft.fromString(t))}static fromName(t){return new S(ft.fromString(t).popFirst(5))}static empty(){return new S(ft.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(t){return t!==null&&ft.comparator(this.path,t.path)===0}toString(){return this.path.toString()}static comparator(t,e){return ft.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new S(new ft(t.slice()))}}function Em(n,t){const e=n.toTimestamp().seconds,r=n.toTimestamp().nanoseconds+1,i=N.fromTimestamp(r===1e9?new St(e+1,0):new St(e,r));return new $e(i,S.empty(),t)}function Im(n){return new $e(n.readTime,n.key,-1)}class $e{constructor(t,e,r){this.readTime=t,this.documentKey=e,this.largestBatchId=r}static min(){return new $e(N.min(),S.empty(),-1)}static max(){return new $e(N.max(),S.empty(),-1)}}function wm(n,t){let e=n.readTime.compareTo(t.readTime);return e!==0?e:(e=S.comparator(n.documentKey,t.documentKey),e!==0?e:X(n.largestBatchId,t.largestBatchId))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Am="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Rm{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Fr(n){if(n.code!==g.FAILED_PRECONDITION||n.message!==Am)throw n;R("LocalStore","Unexpectedly lost primary lease")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class p{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)},e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&C(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new p((r,i)=>{this.nextCallback=s=>{this.wrapSuccess(t,s).next(r,i)},this.catchCallback=s=>{this.wrapFailure(e,s).next(r,i)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof p?e:p.resolve(e)}catch(e){return p.reject(e)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):p.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):p.reject(e)}static resolve(t){return new p((e,r)=>{e(t)})}static reject(t){return new p((e,r)=>{r(t)})}static waitFor(t){return new p((e,r)=>{let i=0,s=0,o=!1;t.forEach(a=>{++i,a.next(()=>{++s,o&&s===i&&e()},u=>r(u))}),o=!0,s===i&&e()})}static or(t){let e=p.resolve(!1);for(const r of t)e=e.next(i=>i?p.resolve(i):r());return e}static forEach(t,e){const r=[];return t.forEach((i,s)=>{r.push(e.call(this,i,s))}),this.waitFor(r)}static mapArray(t,e){return new p((r,i)=>{const s=t.length,o=new Array(s);let a=0;for(let u=0;u<s;u++){const l=u;e(t[l]).next(c=>{o[l]=c,++a,a===s&&r(o)},c=>i(c))}})}static doWhile(t,e){return new p((r,i)=>{const s=()=>{t()===!0?e().next(()=>{s()},i):r()};s()})}}function Ur(n){return n.name==="IndexedDbTransactionError"}/**
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
 */class Xo{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=r=>this.se(r),this.oe=r=>e.writeSequenceNumber(r))}se(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.oe&&this.oe(t),t}}Xo._e=-1;function $r(n){return n==null}function Ni(n){return n===0&&1/n==-1/0}function Pm(n){return typeof n=="number"&&Number.isInteger(n)&&!Ni(n)&&n<=Number.MAX_SAFE_INTEGER&&n>=Number.MIN_SAFE_INTEGER}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Su(n){let t=0;for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t++;return t}function dn(n,t){for(const e in n)Object.prototype.hasOwnProperty.call(n,e)&&t(e,n[e])}function Jc(n){for(const t in n)if(Object.prototype.hasOwnProperty.call(n,t))return!1;return!0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(t,e){this.comparator=t,this.root=e||bt.EMPTY}insert(t,e){return new _t(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,bt.BLACK,null,null))}remove(t){return new _t(this.comparator,this.root.remove(t,this.comparator).copy(null,null,bt.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const r=this.comparator(t,e.key);if(r===0)return e.value;r<0?e=e.left:r>0&&(e=e.right)}return null}indexOf(t){let e=0,r=this.root;for(;!r.isEmpty();){const i=this.comparator(t,r.key);if(i===0)return e+r.left.size;i<0?r=r.left:(e+=r.left.size+1,r=r.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,r)=>(t(e,r),!1))}toString(){const t=[];return this.inorderTraversal((e,r)=>(t.push(`${e}:${r}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new ei(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new ei(this.root,t,this.comparator,!1)}getReverseIterator(){return new ei(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new ei(this.root,t,this.comparator,!0)}}class ei{constructor(t,e,r,i){this.isReverse=i,this.nodeStack=[];let s=1;for(;!t.isEmpty();)if(s=e?r(t.key,e):1,e&&i&&(s*=-1),s<0)t=this.isReverse?t.left:t.right;else{if(s===0){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(this.nodeStack.length===0)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class bt{constructor(t,e,r,i,s){this.key=t,this.value=e,this.color=r??bt.RED,this.left=i??bt.EMPTY,this.right=s??bt.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,r,i,s){return new bt(t??this.key,e??this.value,r??this.color,i??this.left,s??this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,r){let i=this;const s=r(t,i.key);return i=s<0?i.copy(null,null,null,i.left.insert(t,e,r),null):s===0?i.copy(null,e,null,null,null):i.copy(null,null,null,null,i.right.insert(t,e,r)),i.fixUp()}removeMin(){if(this.left.isEmpty())return bt.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let r,i=this;if(e(t,i.key)<0)i.left.isEmpty()||i.left.isRed()||i.left.left.isRed()||(i=i.moveRedLeft()),i=i.copy(null,null,null,i.left.remove(t,e),null);else{if(i.left.isRed()&&(i=i.rotateRight()),i.right.isEmpty()||i.right.isRed()||i.right.left.isRed()||(i=i.moveRedRight()),e(t,i.key)===0){if(i.right.isEmpty())return bt.EMPTY;r=i.right.min(),i=i.copy(r.key,r.value,null,null,i.right.removeMin())}i=i.copy(null,null,null,null,i.right.remove(t,e))}return i.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,bt.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,bt.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed()||this.right.isRed())throw C();const t=this.left.check();if(t!==this.right.check())throw C();return t+(this.isRed()?0:1)}}bt.EMPTY=null,bt.RED=!0,bt.BLACK=!1;bt.EMPTY=new class{constructor(){this.size=0}get key(){throw C()}get value(){throw C()}get color(){throw C()}get left(){throw C()}get right(){throw C()}copy(t,e,r,i,s){return this}insert(t,e,r){return new bt(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t){this.comparator=t,this.data=new _t(this.comparator)}has(t){return this.data.get(t)!==null}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,r)=>(t(e),!1))}forEachInRange(t,e){const r=this.data.getIteratorFrom(t[0]);for(;r.hasNext();){const i=r.getNext();if(this.comparator(i.key,t[1])>=0)return;e(i.key)}}forEachWhile(t,e){let r;for(r=e!==void 0?this.data.getIteratorFrom(e):this.data.getIterator();r.hasNext();)if(!t(r.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Cu(this.data.getIterator())}getIteratorFrom(t){return new Cu(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(r=>{e=e.add(r)}),e}isEqual(t){if(!(t instanceof xt)||this.size!==t.size)return!1;const e=this.data.getIterator(),r=t.data.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(this.comparator(i,s)!==0)return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new xt(this.comparator);return e.data=t,e}}class Cu{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ee{constructor(t){this.fields=t,t.sort(Mt.comparator)}static empty(){return new ee([])}unionWith(t){let e=new xt(Mt.comparator);for(const r of this.fields)e=e.add(r);for(const r of t)e=e.add(r);return new ee(e.toArray())}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return Dn(this.fields,t.fields,(e,r)=>e.isEqual(r))}}/**
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
 */class jt{constructor(t){this.binaryString=t}static fromBase64String(t){const e=function(i){try{return atob(i)}catch(s){throw typeof DOMException<"u"&&s instanceof DOMException?new Zc("Invalid base64 string: "+s):s}}(t);return new jt(e)}static fromUint8Array(t){const e=function(i){let s="";for(let o=0;o<i.length;++o)s+=String.fromCharCode(i[o]);return s}(t);return new jt(e)}[Symbol.iterator](){let t=0;return{next:()=>t<this.binaryString.length?{value:this.binaryString.charCodeAt(t++),done:!1}:{value:void 0,done:!0}}}toBase64(){return function(e){return btoa(e)}(this.binaryString)}toUint8Array(){return function(e){const r=new Uint8Array(e.length);for(let i=0;i<e.length;i++)r[i]=e.charCodeAt(i);return r}(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return X(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}jt.EMPTY_BYTE_STRING=new jt("");const Sm=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function qe(n){if(tt(!!n),typeof n=="string"){let t=0;const e=Sm.exec(n);if(tt(!!e),e[1]){let i=e[1];i=(i+"000000000").substr(0,9),t=Number(i)}const r=new Date(n);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:It(n.seconds),nanos:It(n.nanos)}}function It(n){return typeof n=="number"?n:typeof n=="string"?Number(n):0}function un(n){return typeof n=="string"?jt.fromBase64String(n):jt.fromUint8Array(n)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jo(n){var t,e;return((e=(((t=n==null?void 0:n.mapValue)===null||t===void 0?void 0:t.fields)||{}).__type__)===null||e===void 0?void 0:e.stringValue)==="server_timestamp"}function Zo(n){const t=n.mapValue.fields.__previous_value__;return Jo(t)?Zo(t):t}function vr(n){const t=qe(n.mapValue.fields.__local_write_time__.timestampValue);return new St(t.seconds,t.nanos)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cm{constructor(t,e,r,i,s,o,a,u,l){this.databaseId=t,this.appId=e,this.persistenceKey=r,this.host=i,this.ssl=s,this.forceLongPolling=o,this.autoDetectLongPolling=a,this.longPollingOptions=u,this.useFetchStreams=l}}class Tr{constructor(t,e){this.projectId=t,this.database=e||"(default)"}static empty(){return new Tr("","")}get isDefaultDatabase(){return this.database==="(default)"}isEqual(t){return t instanceof Tr&&t.projectId===this.projectId&&t.database===this.database}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ni={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function ln(n){return"nullValue"in n?0:"booleanValue"in n?1:"integerValue"in n||"doubleValue"in n?2:"timestampValue"in n?3:"stringValue"in n?5:"bytesValue"in n?6:"referenceValue"in n?7:"geoPointValue"in n?8:"arrayValue"in n?9:"mapValue"in n?Jo(n)?4:km(n)?9007199254740991:10:C()}function ve(n,t){if(n===t)return!0;const e=ln(n);if(e!==ln(t))return!1;switch(e){case 0:case 9007199254740991:return!0;case 1:return n.booleanValue===t.booleanValue;case 4:return vr(n).isEqual(vr(t));case 3:return function(i,s){if(typeof i.timestampValue=="string"&&typeof s.timestampValue=="string"&&i.timestampValue.length===s.timestampValue.length)return i.timestampValue===s.timestampValue;const o=qe(i.timestampValue),a=qe(s.timestampValue);return o.seconds===a.seconds&&o.nanos===a.nanos}(n,t);case 5:return n.stringValue===t.stringValue;case 6:return function(i,s){return un(i.bytesValue).isEqual(un(s.bytesValue))}(n,t);case 7:return n.referenceValue===t.referenceValue;case 8:return function(i,s){return It(i.geoPointValue.latitude)===It(s.geoPointValue.latitude)&&It(i.geoPointValue.longitude)===It(s.geoPointValue.longitude)}(n,t);case 2:return function(i,s){if("integerValue"in i&&"integerValue"in s)return It(i.integerValue)===It(s.integerValue);if("doubleValue"in i&&"doubleValue"in s){const o=It(i.doubleValue),a=It(s.doubleValue);return o===a?Ni(o)===Ni(a):isNaN(o)&&isNaN(a)}return!1}(n,t);case 9:return Dn(n.arrayValue.values||[],t.arrayValue.values||[],ve);case 10:return function(i,s){const o=i.mapValue.fields||{},a=s.mapValue.fields||{};if(Su(o)!==Su(a))return!1;for(const u in o)if(o.hasOwnProperty(u)&&(a[u]===void 0||!ve(o[u],a[u])))return!1;return!0}(n,t);default:return C()}}function Er(n,t){return(n.values||[]).find(e=>ve(e,t))!==void 0}function bn(n,t){if(n===t)return 0;const e=ln(n),r=ln(t);if(e!==r)return X(e,r);switch(e){case 0:case 9007199254740991:return 0;case 1:return X(n.booleanValue,t.booleanValue);case 2:return function(s,o){const a=It(s.integerValue||s.doubleValue),u=It(o.integerValue||o.doubleValue);return a<u?-1:a>u?1:a===u?0:isNaN(a)?isNaN(u)?0:-1:1}(n,t);case 3:return ku(n.timestampValue,t.timestampValue);case 4:return ku(vr(n),vr(t));case 5:return X(n.stringValue,t.stringValue);case 6:return function(s,o){const a=un(s),u=un(o);return a.compareTo(u)}(n.bytesValue,t.bytesValue);case 7:return function(s,o){const a=s.split("/"),u=o.split("/");for(let l=0;l<a.length&&l<u.length;l++){const c=X(a[l],u[l]);if(c!==0)return c}return X(a.length,u.length)}(n.referenceValue,t.referenceValue);case 8:return function(s,o){const a=X(It(s.latitude),It(o.latitude));return a!==0?a:X(It(s.longitude),It(o.longitude))}(n.geoPointValue,t.geoPointValue);case 9:return function(s,o){const a=s.values||[],u=o.values||[];for(let l=0;l<a.length&&l<u.length;++l){const c=bn(a[l],u[l]);if(c)return c}return X(a.length,u.length)}(n.arrayValue,t.arrayValue);case 10:return function(s,o){if(s===ni.mapValue&&o===ni.mapValue)return 0;if(s===ni.mapValue)return 1;if(o===ni.mapValue)return-1;const a=s.fields||{},u=Object.keys(a),l=o.fields||{},c=Object.keys(l);u.sort(),c.sort();for(let h=0;h<u.length&&h<c.length;++h){const d=X(u[h],c[h]);if(d!==0)return d;const f=bn(a[u[h]],l[c[h]]);if(f!==0)return f}return X(u.length,c.length)}(n.mapValue,t.mapValue);default:throw C()}}function ku(n,t){if(typeof n=="string"&&typeof t=="string"&&n.length===t.length)return X(n,t);const e=qe(n),r=qe(t),i=X(e.seconds,r.seconds);return i!==0?i:X(e.nanos,r.nanos)}function On(n){return io(n)}function io(n){return"nullValue"in n?"null":"booleanValue"in n?""+n.booleanValue:"integerValue"in n?""+n.integerValue:"doubleValue"in n?""+n.doubleValue:"timestampValue"in n?function(e){const r=qe(e);return`time(${r.seconds},${r.nanos})`}(n.timestampValue):"stringValue"in n?n.stringValue:"bytesValue"in n?function(e){return un(e).toBase64()}(n.bytesValue):"referenceValue"in n?function(e){return S.fromName(e).toString()}(n.referenceValue):"geoPointValue"in n?function(e){return`geo(${e.latitude},${e.longitude})`}(n.geoPointValue):"arrayValue"in n?function(e){let r="[",i=!0;for(const s of e.values||[])i?i=!1:r+=",",r+=io(s);return r+"]"}(n.arrayValue):"mapValue"in n?function(e){const r=Object.keys(e.fields||{}).sort();let i="{",s=!0;for(const o of r)s?s=!1:i+=",",i+=`${o}:${io(e.fields[o])}`;return i+"}"}(n.mapValue):C()}function Vu(n,t){return{referenceValue:`projects/${n.projectId}/databases/${n.database}/documents/${t.path.canonicalString()}`}}function so(n){return!!n&&"integerValue"in n}function ta(n){return!!n&&"arrayValue"in n}function Nu(n){return!!n&&"nullValue"in n}function Du(n){return!!n&&"doubleValue"in n&&isNaN(Number(n.doubleValue))}function ci(n){return!!n&&"mapValue"in n}function rr(n){if(n.geoPointValue)return{geoPointValue:Object.assign({},n.geoPointValue)};if(n.timestampValue&&typeof n.timestampValue=="object")return{timestampValue:Object.assign({},n.timestampValue)};if(n.mapValue){const t={mapValue:{fields:{}}};return dn(n.mapValue.fields,(e,r)=>t.mapValue.fields[e]=rr(r)),t}if(n.arrayValue){const t={arrayValue:{values:[]}};for(let e=0;e<(n.arrayValue.values||[]).length;++e)t.arrayValue.values[e]=rr(n.arrayValue.values[e]);return t}return Object.assign({},n)}function km(n){return(((n.mapValue||{}).fields||{}).__type__||{}).stringValue==="__max__"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kt{constructor(t){this.value=t}static empty(){return new Kt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let r=0;r<t.length-1;++r)if(e=(e.mapValue.fields||{})[t.get(r)],!ci(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=rr(e)}setAll(t){let e=Mt.emptyPath(),r={},i=[];t.forEach((o,a)=>{if(!e.isImmediateParentOf(a)){const u=this.getFieldsMap(e);this.applyChanges(u,r,i),r={},i=[],e=a.popLast()}o?r[a.lastSegment()]=rr(o):i.push(a.lastSegment())});const s=this.getFieldsMap(e);this.applyChanges(s,r,i)}delete(t){const e=this.field(t.popLast());ci(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return ve(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let r=0;r<t.length;++r){let i=e.mapValue.fields[t.get(r)];ci(i)&&i.mapValue.fields||(i={mapValue:{fields:{}}},e.mapValue.fields[t.get(r)]=i),e=i}return e.mapValue.fields}applyChanges(t,e,r){dn(e,(i,s)=>t[i]=s);for(const i of r)delete t[i]}clone(){return new Kt(rr(this.value))}}function th(n){const t=[];return dn(n.fields,(e,r)=>{const i=new Mt([e]);if(ci(r)){const s=th(r.mapValue).fields;if(s.length===0)t.push(i);else for(const o of s)t.push(i.child(o))}else t.push(i)}),new ee(t)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kt{constructor(t,e,r,i,s,o,a){this.key=t,this.documentType=e,this.version=r,this.readTime=i,this.createTime=s,this.data=o,this.documentState=a}static newInvalidDocument(t){return new kt(t,0,N.min(),N.min(),N.min(),Kt.empty(),0)}static newFoundDocument(t,e,r,i){return new kt(t,1,e,N.min(),r,i,0)}static newNoDocument(t,e){return new kt(t,2,e,N.min(),N.min(),Kt.empty(),0)}static newUnknownDocument(t,e){return new kt(t,3,e,N.min(),N.min(),Kt.empty(),2)}convertToFoundDocument(t,e){return!this.createTime.isEqual(N.min())||this.documentType!==2&&this.documentType!==0||(this.createTime=t),this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=Kt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=Kt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=N.min(),this}setReadTime(t){return this.readTime=t,this}get hasLocalMutations(){return this.documentState===1}get hasCommittedMutations(){return this.documentState===2}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return this.documentType!==0}isFoundDocument(){return this.documentType===1}isNoDocument(){return this.documentType===2}isUnknownDocument(){return this.documentType===3}isEqual(t){return t instanceof kt&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}mutableCopy(){return new kt(this.key,this.documentType,this.version,this.readTime,this.createTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {createTime: ${this.createTime}}), {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}/**
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
 */class Di{constructor(t,e){this.position=t,this.inclusive=e}}function bu(n,t,e){let r=0;for(let i=0;i<n.position.length;i++){const s=t[i],o=n.position[i];if(s.field.isKeyField()?r=S.comparator(S.fromName(o.referenceValue),e.key):r=bn(o,e.data.field(s.field)),s.dir==="desc"&&(r*=-1),r!==0)break}return r}function Ou(n,t){if(n===null)return t===null;if(t===null||n.inclusive!==t.inclusive||n.position.length!==t.position.length)return!1;for(let e=0;e<n.position.length;e++)if(!ve(n.position[e],t.position[e]))return!1;return!0}/**
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
 */class bi{constructor(t,e="asc"){this.field=t,this.dir=e}}function Vm(n,t){return n.dir===t.dir&&n.field.isEqual(t.field)}/**
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
 */class eh{}class wt extends eh{constructor(t,e,r){super(),this.field=t,this.op=e,this.value=r}static create(t,e,r){return t.isKeyField()?e==="in"||e==="not-in"?this.createKeyFieldInFilter(t,e,r):new Dm(t,e,r):e==="array-contains"?new Mm(t,r):e==="in"?new Lm(t,r):e==="not-in"?new xm(t,r):e==="array-contains-any"?new Fm(t,r):new wt(t,e,r)}static createKeyFieldInFilter(t,e,r){return e==="in"?new bm(t,r):new Om(t,r)}matches(t){const e=t.data.field(this.field);return this.op==="!="?e!==null&&this.matchesComparison(bn(e,this.value)):e!==null&&ln(this.value)===ln(e)&&this.matchesComparison(bn(e,this.value))}matchesComparison(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return t===0;case"!=":return t!==0;case">":return t>0;case">=":return t>=0;default:return C()}}isInequality(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}getFlattenedFilters(){return[this]}getFilters(){return[this]}}class le extends eh{constructor(t,e){super(),this.filters=t,this.op=e,this.ue=null}static create(t,e){return new le(t,e)}matches(t){return nh(this)?this.filters.find(e=>!e.matches(t))===void 0:this.filters.find(e=>e.matches(t))!==void 0}getFlattenedFilters(){return this.ue!==null||(this.ue=this.filters.reduce((t,e)=>t.concat(e.getFlattenedFilters()),[])),this.ue}getFilters(){return Object.assign([],this.filters)}}function nh(n){return n.op==="and"}function rh(n){return Nm(n)&&nh(n)}function Nm(n){for(const t of n.filters)if(t instanceof le)return!1;return!0}function oo(n){if(n instanceof wt)return n.field.canonicalString()+n.op.toString()+On(n.value);if(rh(n))return n.filters.map(t=>oo(t)).join(",");{const t=n.filters.map(e=>oo(e)).join(",");return`${n.op}(${t})`}}function ih(n,t){return n instanceof wt?function(r,i){return i instanceof wt&&r.op===i.op&&r.field.isEqual(i.field)&&ve(r.value,i.value)}(n,t):n instanceof le?function(r,i){return i instanceof le&&r.op===i.op&&r.filters.length===i.filters.length?r.filters.reduce((s,o,a)=>s&&ih(o,i.filters[a]),!0):!1}(n,t):void C()}function sh(n){return n instanceof wt?function(e){return`${e.field.canonicalString()} ${e.op} ${On(e.value)}`}(n):n instanceof le?function(e){return e.op.toString()+" {"+e.getFilters().map(sh).join(" ,")+"}"}(n):"Filter"}class Dm extends wt{constructor(t,e,r){super(t,e,r),this.key=S.fromName(r.referenceValue)}matches(t){const e=S.comparator(t.key,this.key);return this.matchesComparison(e)}}class bm extends wt{constructor(t,e){super(t,"in",e),this.keys=oh("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Om extends wt{constructor(t,e){super(t,"not-in",e),this.keys=oh("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function oh(n,t){var e;return(((e=t.arrayValue)===null||e===void 0?void 0:e.values)||[]).map(r=>S.fromName(r.referenceValue))}class Mm extends wt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return ta(e)&&Er(e.arrayValue,this.value)}}class Lm extends wt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return e!==null&&Er(this.value.arrayValue,e)}}class xm extends wt{constructor(t,e){super(t,"not-in",e)}matches(t){if(Er(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return e!==null&&!Er(this.value.arrayValue,e)}}class Fm extends wt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!ta(e)||!e.arrayValue.values)&&e.arrayValue.values.some(r=>Er(this.value.arrayValue,r))}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Um{constructor(t,e=null,r=[],i=[],s=null,o=null,a=null){this.path=t,this.collectionGroup=e,this.orderBy=r,this.filters=i,this.limit=s,this.startAt=o,this.endAt=a,this.ce=null}}function Mu(n,t=null,e=[],r=[],i=null,s=null,o=null){return new Um(n,t,e,r,i,s,o)}function ea(n){const t=M(n);if(t.ce===null){let e=t.path.canonicalString();t.collectionGroup!==null&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map(r=>oo(r)).join(","),e+="|ob:",e+=t.orderBy.map(r=>function(s){return s.field.canonicalString()+s.dir}(r)).join(","),$r(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map(r=>On(r)).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map(r=>On(r)).join(",")),t.ce=e}return t.ce}function na(n,t){if(n.limit!==t.limit||n.orderBy.length!==t.orderBy.length)return!1;for(let e=0;e<n.orderBy.length;e++)if(!Vm(n.orderBy[e],t.orderBy[e]))return!1;if(n.filters.length!==t.filters.length)return!1;for(let e=0;e<n.filters.length;e++)if(!ih(n.filters[e],t.filters[e]))return!1;return n.collectionGroup===t.collectionGroup&&!!n.path.isEqual(t.path)&&!!Ou(n.startAt,t.startAt)&&Ou(n.endAt,t.endAt)}function ao(n){return S.isDocumentKey(n.path)&&n.collectionGroup===null&&n.filters.length===0}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qr{constructor(t,e=null,r=[],i=[],s=null,o="F",a=null,u=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=r,this.filters=i,this.limit=s,this.limitType=o,this.startAt=a,this.endAt=u,this.le=null,this.he=null,this.Pe=null,this.startAt,this.endAt}}function $m(n,t,e,r,i,s,o,a){return new qr(n,t,e,r,i,s,o,a)}function ra(n){return new qr(n)}function Lu(n){return n.filters.length===0&&n.limit===null&&n.startAt==null&&n.endAt==null&&(n.explicitOrderBy.length===0||n.explicitOrderBy.length===1&&n.explicitOrderBy[0].field.isKeyField())}function ah(n){return n.collectionGroup!==null}function ir(n){const t=M(n);if(t.le===null){t.le=[];const e=new Set;for(const s of t.explicitOrderBy)t.le.push(s),e.add(s.field.canonicalString());const r=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";(function(o){let a=new xt(Mt.comparator);return o.filters.forEach(u=>{u.getFlattenedFilters().forEach(l=>{l.isInequality()&&(a=a.add(l.field))})}),a})(t).forEach(s=>{e.has(s.canonicalString())||s.isKeyField()||t.le.push(new bi(s,r))}),e.has(Mt.keyField().canonicalString())||t.le.push(new bi(Mt.keyField(),r))}return t.le}function _e(n){const t=M(n);return t.he||(t.he=qm(t,ir(n))),t.he}function qm(n,t){if(n.limitType==="F")return Mu(n.path,n.collectionGroup,t,n.filters,n.limit,n.startAt,n.endAt);{t=t.map(i=>{const s=i.dir==="desc"?"asc":"desc";return new bi(i.field,s)});const e=n.endAt?new Di(n.endAt.position,n.endAt.inclusive):null,r=n.startAt?new Di(n.startAt.position,n.startAt.inclusive):null;return Mu(n.path,n.collectionGroup,t,n.filters,n.limit,e,r)}}function uo(n,t){const e=n.filters.concat([t]);return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),e,n.limit,n.limitType,n.startAt,n.endAt)}function lo(n,t,e){return new qr(n.path,n.collectionGroup,n.explicitOrderBy.slice(),n.filters.slice(),t,e,n.startAt,n.endAt)}function hs(n,t){return na(_e(n),_e(t))&&n.limitType===t.limitType}function uh(n){return`${ea(_e(n))}|lt:${n.limitType}`}function _n(n){return`Query(target=${function(e){let r=e.path.canonicalString();return e.collectionGroup!==null&&(r+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(r+=`, filters: [${e.filters.map(i=>sh(i)).join(", ")}]`),$r(e.limit)||(r+=", limit: "+e.limit),e.orderBy.length>0&&(r+=`, orderBy: [${e.orderBy.map(i=>function(o){return`${o.field.canonicalString()} (${o.dir})`}(i)).join(", ")}]`),e.startAt&&(r+=", startAt: ",r+=e.startAt.inclusive?"b:":"a:",r+=e.startAt.position.map(i=>On(i)).join(",")),e.endAt&&(r+=", endAt: ",r+=e.endAt.inclusive?"a:":"b:",r+=e.endAt.position.map(i=>On(i)).join(",")),`Target(${r})`}(_e(n))}; limitType=${n.limitType})`}function ds(n,t){return t.isFoundDocument()&&function(r,i){const s=i.key.path;return r.collectionGroup!==null?i.key.hasCollectionId(r.collectionGroup)&&r.path.isPrefixOf(s):S.isDocumentKey(r.path)?r.path.isEqual(s):r.path.isImmediateParentOf(s)}(n,t)&&function(r,i){for(const s of ir(r))if(!s.field.isKeyField()&&i.data.field(s.field)===null)return!1;return!0}(n,t)&&function(r,i){for(const s of r.filters)if(!s.matches(i))return!1;return!0}(n,t)&&function(r,i){return!(r.startAt&&!function(o,a,u){const l=bu(o,a,u);return o.inclusive?l<=0:l<0}(r.startAt,ir(r),i)||r.endAt&&!function(o,a,u){const l=bu(o,a,u);return o.inclusive?l>=0:l>0}(r.endAt,ir(r),i))}(n,t)}function jm(n){return n.collectionGroup||(n.path.length%2==1?n.path.lastSegment():n.path.get(n.path.length-2))}function lh(n){return(t,e)=>{let r=!1;for(const i of ir(n)){const s=Bm(i,t,e);if(s!==0)return s;r=r||i.field.isKeyField()}return 0}}function Bm(n,t,e){const r=n.field.isKeyField()?S.comparator(t.key,e.key):function(s,o,a){const u=o.data.field(s),l=a.data.field(s);return u!==null&&l!==null?bn(u,l):C()}(n.field,t,e);switch(n.dir){case"asc":return r;case"desc":return-1*r;default:return C()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={},this.innerSize=0}get(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r!==void 0){for(const[i,s]of r)if(this.equalsFn(i,t))return s}}has(t){return this.get(t)!==void 0}set(t,e){const r=this.mapKeyFn(t),i=this.inner[r];if(i===void 0)return this.inner[r]=[[t,e]],void this.innerSize++;for(let s=0;s<i.length;s++)if(this.equalsFn(i[s][0],t))return void(i[s]=[t,e]);i.push([t,e]),this.innerSize++}delete(t){const e=this.mapKeyFn(t),r=this.inner[e];if(r===void 0)return!1;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],t))return r.length===1?delete this.inner[e]:r.splice(i,1),this.innerSize--,!0;return!1}forEach(t){dn(this.inner,(e,r)=>{for(const[i,s]of r)t(i,s)})}isEmpty(){return Jc(this.inner)}size(){return this.innerSize}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const zm=new _t(S.comparator);function Ce(){return zm}const ch=new _t(S.comparator);function Zn(...n){let t=ch;for(const e of n)t=t.insert(e.key,e);return t}function hh(n){let t=ch;return n.forEach((e,r)=>t=t.insert(e,r.overlayedDocument)),t}function en(){return sr()}function dh(){return sr()}function sr(){return new jn(n=>n.toString(),(n,t)=>n.isEqual(t))}const Gm=new _t(S.comparator),Wm=new xt(S.comparator);function $(...n){let t=Wm;for(const e of n)t=t.add(e);return t}const Km=new xt(X);function Hm(){return Km}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fh(n,t){if(n.useProto3Json){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Ni(t)?"-0":t}}function gh(n){return{integerValue:""+n}}function Qm(n,t){return Pm(t)?gh(t):fh(n,t)}/**
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
 */class fs{constructor(){this._=void 0}}function Ym(n,t,e){return n instanceof Oi?function(i,s){const o={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:i.seconds,nanos:i.nanoseconds}}}};return s&&Jo(s)&&(s=Zo(s)),s&&(o.fields.__previous_value__=s),{mapValue:o}}(e,t):n instanceof Ir?mh(n,t):n instanceof wr?_h(n,t):function(i,s){const o=ph(i,s),a=xu(o)+xu(i.Ie);return so(o)&&so(i.Ie)?gh(a):fh(i.serializer,a)}(n,t)}function Xm(n,t,e){return n instanceof Ir?mh(n,t):n instanceof wr?_h(n,t):e}function ph(n,t){return n instanceof Mi?function(r){return so(r)||function(s){return!!s&&"doubleValue"in s}(r)}(t)?t:{integerValue:0}:null}class Oi extends fs{}class Ir extends fs{constructor(t){super(),this.elements=t}}function mh(n,t){const e=yh(t);for(const r of n.elements)e.some(i=>ve(i,r))||e.push(r);return{arrayValue:{values:e}}}class wr extends fs{constructor(t){super(),this.elements=t}}function _h(n,t){let e=yh(t);for(const r of n.elements)e=e.filter(i=>!ve(i,r));return{arrayValue:{values:e}}}class Mi extends fs{constructor(t,e){super(),this.serializer=t,this.Ie=e}}function xu(n){return It(n.integerValue||n.doubleValue)}function yh(n){return ta(n)&&n.arrayValue.values?n.arrayValue.values.slice():[]}function Jm(n,t){return n.field.isEqual(t.field)&&function(r,i){return r instanceof Ir&&i instanceof Ir||r instanceof wr&&i instanceof wr?Dn(r.elements,i.elements,ve):r instanceof Mi&&i instanceof Mi?ve(r.Ie,i.Ie):r instanceof Oi&&i instanceof Oi}(n.transform,t.transform)}class Zm{constructor(t,e){this.version=t,this.transformResults=e}}class Zt{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new Zt}static exists(t){return new Zt(void 0,t)}static updateTime(t){return new Zt(t)}get isNone(){return this.updateTime===void 0&&this.exists===void 0}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function hi(n,t){return n.updateTime!==void 0?t.isFoundDocument()&&t.version.isEqual(n.updateTime):n.exists===void 0||n.exists===t.isFoundDocument()}class gs{}function vh(n,t){if(!n.hasLocalMutations||t&&t.fields.length===0)return null;if(t===null)return n.isNoDocument()?new ia(n.key,Zt.none()):new jr(n.key,n.data,Zt.none());{const e=n.data,r=Kt.empty();let i=new xt(Mt.comparator);for(let s of t.fields)if(!i.has(s)){let o=e.field(s);o===null&&s.length>1&&(s=s.popLast(),o=e.field(s)),o===null?r.delete(s):r.set(s,o),i=i.add(s)}return new Ke(n.key,r,new ee(i.toArray()),Zt.none())}}function t_(n,t,e){n instanceof jr?function(i,s,o){const a=i.value.clone(),u=Uu(i.fieldTransforms,s,o.transformResults);a.setAll(u),s.convertToFoundDocument(o.version,a).setHasCommittedMutations()}(n,t,e):n instanceof Ke?function(i,s,o){if(!hi(i.precondition,s))return void s.convertToUnknownDocument(o.version);const a=Uu(i.fieldTransforms,s,o.transformResults),u=s.data;u.setAll(Th(i)),u.setAll(a),s.convertToFoundDocument(o.version,u).setHasCommittedMutations()}(n,t,e):function(i,s,o){s.convertToNoDocument(o.version).setHasCommittedMutations()}(0,t,e)}function or(n,t,e,r){return n instanceof jr?function(s,o,a,u){if(!hi(s.precondition,o))return a;const l=s.value.clone(),c=$u(s.fieldTransforms,u,o);return l.setAll(c),o.convertToFoundDocument(o.version,l).setHasLocalMutations(),null}(n,t,e,r):n instanceof Ke?function(s,o,a,u){if(!hi(s.precondition,o))return a;const l=$u(s.fieldTransforms,u,o),c=o.data;return c.setAll(Th(s)),c.setAll(l),o.convertToFoundDocument(o.version,c).setHasLocalMutations(),a===null?null:a.unionWith(s.fieldMask.fields).unionWith(s.fieldTransforms.map(h=>h.field))}(n,t,e,r):function(s,o,a){return hi(s.precondition,o)?(o.convertToNoDocument(o.version).setHasLocalMutations(),null):a}(n,t,e)}function e_(n,t){let e=null;for(const r of n.fieldTransforms){const i=t.data.field(r.field),s=ph(r.transform,i||null);s!=null&&(e===null&&(e=Kt.empty()),e.set(r.field,s))}return e||null}function Fu(n,t){return n.type===t.type&&!!n.key.isEqual(t.key)&&!!n.precondition.isEqual(t.precondition)&&!!function(r,i){return r===void 0&&i===void 0||!(!r||!i)&&Dn(r,i,(s,o)=>Jm(s,o))}(n.fieldTransforms,t.fieldTransforms)&&(n.type===0?n.value.isEqual(t.value):n.type!==1||n.data.isEqual(t.data)&&n.fieldMask.isEqual(t.fieldMask))}class jr extends gs{constructor(t,e,r,i=[]){super(),this.key=t,this.value=e,this.precondition=r,this.fieldTransforms=i,this.type=0}getFieldMask(){return null}}class Ke extends gs{constructor(t,e,r,i,s=[]){super(),this.key=t,this.data=e,this.fieldMask=r,this.precondition=i,this.fieldTransforms=s,this.type=1}getFieldMask(){return this.fieldMask}}function Th(n){const t=new Map;return n.fieldMask.fields.forEach(e=>{if(!e.isEmpty()){const r=n.data.field(e);t.set(e,r)}}),t}function Uu(n,t,e){const r=new Map;tt(n.length===e.length);for(let i=0;i<e.length;i++){const s=n[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Xm(o,a,e[i]))}return r}function $u(n,t,e){const r=new Map;for(const i of n){const s=i.transform,o=e.data.field(i.field);r.set(i.field,Ym(s,o,t))}return r}class ia extends gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Eh extends gs{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class n_{constructor(t,e,r,i){this.batchId=t,this.localWriteTime=e,this.baseMutations=r,this.mutations=i}applyToRemoteDocument(t,e){const r=e.mutationResults;for(let i=0;i<this.mutations.length;i++){const s=this.mutations[i];s.key.isEqual(t.key)&&t_(s,t,r[i])}}applyToLocalView(t,e){for(const r of this.baseMutations)r.key.isEqual(t.key)&&(e=or(r,t,e,this.localWriteTime));for(const r of this.mutations)r.key.isEqual(t.key)&&(e=or(r,t,e,this.localWriteTime));return e}applyToLocalDocumentSet(t,e){const r=dh();return this.mutations.forEach(i=>{const s=t.get(i.key),o=s.overlayedDocument;let a=this.applyToLocalView(o,s.mutatedFields);a=e.has(i.key)?null:a;const u=vh(o,a);u!==null&&r.set(i.key,u),o.isValidDocument()||o.convertToNoDocument(N.min())}),r}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),$())}isEqual(t){return this.batchId===t.batchId&&Dn(this.mutations,t.mutations,(e,r)=>Fu(e,r))&&Dn(this.baseMutations,t.baseMutations,(e,r)=>Fu(e,r))}}class sa{constructor(t,e,r,i){this.batch=t,this.commitVersion=e,this.mutationResults=r,this.docVersions=i}static from(t,e,r){tt(t.mutations.length===r.length);let i=function(){return Gm}();const s=t.mutations;for(let o=0;o<s.length;o++)i=i.insert(s[o].key,r[o].version);return new sa(t,e,r,i)}}/**
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
 */class r_{constructor(t,e){this.largestBatchId=t,this.mutation=e}getKey(){return this.mutation.key}isEqual(t){return t!==null&&this.mutation===t.mutation}toString(){return`Overlay{
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
 */class i_{constructor(t,e){this.count=t,this.unchangedNames=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Et,z;function Ih(n){switch(n){default:return C();case g.CANCELLED:case g.UNKNOWN:case g.DEADLINE_EXCEEDED:case g.RESOURCE_EXHAUSTED:case g.INTERNAL:case g.UNAVAILABLE:case g.UNAUTHENTICATED:return!1;case g.INVALID_ARGUMENT:case g.NOT_FOUND:case g.ALREADY_EXISTS:case g.PERMISSION_DENIED:case g.FAILED_PRECONDITION:case g.ABORTED:case g.OUT_OF_RANGE:case g.UNIMPLEMENTED:case g.DATA_LOSS:return!0}}function wh(n){if(n===void 0)return Se("GRPC error has no .code"),g.UNKNOWN;switch(n){case Et.OK:return g.OK;case Et.CANCELLED:return g.CANCELLED;case Et.UNKNOWN:return g.UNKNOWN;case Et.DEADLINE_EXCEEDED:return g.DEADLINE_EXCEEDED;case Et.RESOURCE_EXHAUSTED:return g.RESOURCE_EXHAUSTED;case Et.INTERNAL:return g.INTERNAL;case Et.UNAVAILABLE:return g.UNAVAILABLE;case Et.UNAUTHENTICATED:return g.UNAUTHENTICATED;case Et.INVALID_ARGUMENT:return g.INVALID_ARGUMENT;case Et.NOT_FOUND:return g.NOT_FOUND;case Et.ALREADY_EXISTS:return g.ALREADY_EXISTS;case Et.PERMISSION_DENIED:return g.PERMISSION_DENIED;case Et.FAILED_PRECONDITION:return g.FAILED_PRECONDITION;case Et.ABORTED:return g.ABORTED;case Et.OUT_OF_RANGE:return g.OUT_OF_RANGE;case Et.UNIMPLEMENTED:return g.UNIMPLEMENTED;case Et.DATA_LOSS:return g.DATA_LOSS;default:return C()}}(z=Et||(Et={}))[z.OK=0]="OK",z[z.CANCELLED=1]="CANCELLED",z[z.UNKNOWN=2]="UNKNOWN",z[z.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",z[z.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",z[z.NOT_FOUND=5]="NOT_FOUND",z[z.ALREADY_EXISTS=6]="ALREADY_EXISTS",z[z.PERMISSION_DENIED=7]="PERMISSION_DENIED",z[z.UNAUTHENTICATED=16]="UNAUTHENTICATED",z[z.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",z[z.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",z[z.ABORTED=10]="ABORTED",z[z.OUT_OF_RANGE=11]="OUT_OF_RANGE",z[z.UNIMPLEMENTED=12]="UNIMPLEMENTED",z[z.INTERNAL=13]="INTERNAL",z[z.UNAVAILABLE=14]="UNAVAILABLE",z[z.DATA_LOSS=15]="DATA_LOSS";/**
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
 */function s_(){return new TextEncoder}/**
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
 */const o_=new Rn([4294967295,4294967295],0);function qu(n){const t=s_().encode(n),e=new hm;return e.update(t),new Uint8Array(e.digest())}function ju(n){const t=new DataView(n.buffer),e=t.getUint32(0,!0),r=t.getUint32(4,!0),i=t.getUint32(8,!0),s=t.getUint32(12,!0);return[new Rn([e,r],0),new Rn([i,s],0)]}class oa{constructor(t,e,r){if(this.bitmap=t,this.padding=e,this.hashCount=r,e<0||e>=8)throw new tr(`Invalid padding: ${e}`);if(r<0)throw new tr(`Invalid hash count: ${r}`);if(t.length>0&&this.hashCount===0)throw new tr(`Invalid hash count: ${r}`);if(t.length===0&&e!==0)throw new tr(`Invalid padding when bitmap length is 0: ${e}`);this.Te=8*t.length-e,this.Ee=Rn.fromNumber(this.Te)}de(t,e,r){let i=t.add(e.multiply(Rn.fromNumber(r)));return i.compare(o_)===1&&(i=new Rn([i.getBits(0),i.getBits(1)],0)),i.modulo(this.Ee).toNumber()}Ae(t){return(this.bitmap[Math.floor(t/8)]&1<<t%8)!=0}mightContain(t){if(this.Te===0)return!1;const e=qu(t),[r,i]=ju(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);if(!this.Ae(o))return!1}return!0}static create(t,e,r){const i=t%8==0?0:8-t%8,s=new Uint8Array(Math.ceil(t/8)),o=new oa(s,i,e);return r.forEach(a=>o.insert(a)),o}insert(t){if(this.Te===0)return;const e=qu(t),[r,i]=ju(e);for(let s=0;s<this.hashCount;s++){const o=this.de(r,i,s);this.Re(o)}}Re(t){const e=Math.floor(t/8),r=t%8;this.bitmap[e]|=1<<r}}class tr extends Error{constructor(){super(...arguments),this.name="BloomFilterError"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ps{constructor(t,e,r,i,s){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=r,this.documentUpdates=i,this.resolvedLimboDocuments=s}static createSynthesizedRemoteEventForCurrentChange(t,e,r){const i=new Map;return i.set(t,Br.createSynthesizedTargetChangeForCurrentChange(t,e,r)),new ps(N.min(),i,new _t(X),Ce(),$())}}class Br{constructor(t,e,r,i,s){this.resumeToken=t,this.current=e,this.addedDocuments=r,this.modifiedDocuments=i,this.removedDocuments=s}static createSynthesizedTargetChangeForCurrentChange(t,e,r){return new Br(r,e,$(),$(),$())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(t,e,r,i){this.Ve=t,this.removedTargetIds=e,this.key=r,this.me=i}}class Ah{constructor(t,e){this.targetId=t,this.fe=e}}class Rh{constructor(t,e,r=jt.EMPTY_BYTE_STRING,i=null){this.state=t,this.targetIds=e,this.resumeToken=r,this.cause=i}}class Bu{constructor(){this.ge=0,this.pe=Gu(),this.ye=jt.EMPTY_BYTE_STRING,this.we=!1,this.Se=!0}get current(){return this.we}get resumeToken(){return this.ye}get be(){return this.ge!==0}get De(){return this.Se}Ce(t){t.approximateByteSize()>0&&(this.Se=!0,this.ye=t)}ve(){let t=$(),e=$(),r=$();return this.pe.forEach((i,s)=>{switch(s){case 0:t=t.add(i);break;case 2:e=e.add(i);break;case 1:r=r.add(i);break;default:C()}}),new Br(this.ye,this.we,t,e,r)}Fe(){this.Se=!1,this.pe=Gu()}Me(t,e){this.Se=!0,this.pe=this.pe.insert(t,e)}xe(t){this.Se=!0,this.pe=this.pe.remove(t)}Oe(){this.ge+=1}Ne(){this.ge-=1}Be(){this.Se=!0,this.we=!0}}class a_{constructor(t){this.Le=t,this.ke=new Map,this.qe=Ce(),this.Qe=zu(),this.Ke=new _t(X)}$e(t){for(const e of t.Ve)t.me&&t.me.isFoundDocument()?this.Ue(e,t.me):this.We(e,t.key,t.me);for(const e of t.removedTargetIds)this.We(e,t.key,t.me)}Ge(t){this.forEachTarget(t,e=>{const r=this.ze(e);switch(t.state){case 0:this.je(e)&&r.Ce(t.resumeToken);break;case 1:r.Ne(),r.be||r.Fe(),r.Ce(t.resumeToken);break;case 2:r.Ne(),r.be||this.removeTarget(e);break;case 3:this.je(e)&&(r.Be(),r.Ce(t.resumeToken));break;case 4:this.je(e)&&(this.He(e),r.Ce(t.resumeToken));break;default:C()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.ke.forEach((r,i)=>{this.je(i)&&e(i)})}Je(t){const e=t.targetId,r=t.fe.count,i=this.Ye(e);if(i){const s=i.target;if(ao(s))if(r===0){const o=new S(s.path);this.We(e,o,kt.newNoDocument(o,N.min()))}else tt(r===1);else{const o=this.Ze(e);if(o!==r){const a=this.Xe(t),u=a?this.et(a,t,o):1;if(u!==0){this.He(e);const l=u===2?"TargetPurposeExistenceFilterMismatchBloom":"TargetPurposeExistenceFilterMismatch";this.Ke=this.Ke.insert(e,l)}}}}}Xe(t){const e=t.fe.unchangedNames;if(!e||!e.bits)return null;const{bits:{bitmap:r="",padding:i=0},hashCount:s=0}=e;let o,a;try{o=un(r).toUint8Array()}catch(u){if(u instanceof Zc)return Nn("Decoding the base64 bloom filter in existence filter failed ("+u.message+"); ignoring the bloom filter and falling back to full re-query."),null;throw u}try{a=new oa(o,i,s)}catch(u){return Nn(u instanceof tr?"BloomFilter error: ":"Applying bloom filter failed: ",u),null}return a.Te===0?null:a}et(t,e,r){return e.fe.count===r-this.rt(t,e.targetId)?0:2}rt(t,e){const r=this.Le.getRemoteKeysForTarget(e);let i=0;return r.forEach(s=>{const o=this.Le.nt(),a=`projects/${o.projectId}/databases/${o.database}/documents/${s.path.canonicalString()}`;t.mightContain(a)||(this.We(e,s,null),i++)}),i}it(t){const e=new Map;this.ke.forEach((s,o)=>{const a=this.Ye(o);if(a){if(s.current&&ao(a.target)){const u=new S(a.target.path);this.qe.get(u)!==null||this.st(o,u)||this.We(o,u,kt.newNoDocument(u,t))}s.De&&(e.set(o,s.ve()),s.Fe())}});let r=$();this.Qe.forEach((s,o)=>{let a=!0;o.forEachWhile(u=>{const l=this.Ye(u);return!l||l.purpose==="TargetPurposeLimboResolution"||(a=!1,!1)}),a&&(r=r.add(s))}),this.qe.forEach((s,o)=>o.setReadTime(t));const i=new ps(t,e,this.Ke,this.qe,r);return this.qe=Ce(),this.Qe=zu(),this.Ke=new _t(X),i}Ue(t,e){if(!this.je(t))return;const r=this.st(t,e.key)?2:0;this.ze(t).Me(e.key,r),this.qe=this.qe.insert(e.key,e),this.Qe=this.Qe.insert(e.key,this.ot(e.key).add(t))}We(t,e,r){if(!this.je(t))return;const i=this.ze(t);this.st(t,e)?i.Me(e,1):i.xe(e),this.Qe=this.Qe.insert(e,this.ot(e).delete(t)),r&&(this.qe=this.qe.insert(e,r))}removeTarget(t){this.ke.delete(t)}Ze(t){const e=this.ze(t).ve();return this.Le.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Oe(t){this.ze(t).Oe()}ze(t){let e=this.ke.get(t);return e||(e=new Bu,this.ke.set(t,e)),e}ot(t){let e=this.Qe.get(t);return e||(e=new xt(X),this.Qe=this.Qe.insert(t,e)),e}je(t){const e=this.Ye(t)!==null;return e||R("WatchChangeAggregator","Detected inactive target",t),e}Ye(t){const e=this.ke.get(t);return e&&e.be?null:this.Le._t(t)}He(t){this.ke.set(t,new Bu),this.Le.getRemoteKeysForTarget(t).forEach(e=>{this.We(t,e,null)})}st(t,e){return this.Le.getRemoteKeysForTarget(t).has(e)}}function zu(){return new _t(S.comparator)}function Gu(){return new _t(S.comparator)}const u_=(()=>({asc:"ASCENDING",desc:"DESCENDING"}))(),l_=(()=>({"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"}))(),c_=(()=>({and:"AND",or:"OR"}))();class h_{constructor(t,e){this.databaseId=t,this.useProto3Json=e}}function co(n,t){return n.useProto3Json||$r(t)?t:{value:t}}function Li(n,t){return n.useProto3Json?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Ph(n,t){return n.useProto3Json?t.toBase64():t.toUint8Array()}function d_(n,t){return Li(n,t.toTimestamp())}function ne(n){return tt(!!n),N.fromTimestamp(function(e){const r=qe(e);return new St(r.seconds,r.nanos)}(n))}function aa(n,t){return function(r){return new ft(["projects",r.projectId,"databases",r.database])}(n).child("documents").child(t).canonicalString()}function Sh(n){const t=ft.fromString(n);return tt(Dh(t)),t}function xi(n,t){return aa(n.databaseId,t.path)}function ar(n,t){const e=Sh(t);if(e.get(1)!==n.databaseId.projectId)throw new I(g.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+e.get(1)+" vs "+n.databaseId.projectId);if(e.get(3)!==n.databaseId.database)throw new I(g.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+e.get(3)+" vs "+n.databaseId.database);return new S(Ch(e))}function ho(n,t){return aa(n.databaseId,t)}function f_(n){const t=Sh(n);return t.length===4?ft.emptyPath():Ch(t)}function Ar(n){return new ft(["projects",n.databaseId.projectId,"databases",n.databaseId.database]).canonicalString()}function Ch(n){return tt(n.length>4&&n.get(4)==="documents"),n.popFirst(5)}function Wu(n,t,e){return{name:xi(n,t),fields:e.value.mapValue.fields}}function g_(n,t){return"found"in t?function(r,i){tt(!!i.found),i.found.name,i.found.updateTime;const s=ar(r,i.found.name),o=ne(i.found.updateTime),a=i.found.createTime?ne(i.found.createTime):N.min(),u=new Kt({mapValue:{fields:i.found.fields}});return kt.newFoundDocument(s,o,a,u)}(n,t):"missing"in t?function(r,i){tt(!!i.missing),tt(!!i.readTime);const s=ar(r,i.missing),o=ne(i.readTime);return kt.newNoDocument(s,o)}(n,t):C()}function p_(n,t){let e;if("targetChange"in t){t.targetChange;const r=function(l){return l==="NO_CHANGE"?0:l==="ADD"?1:l==="REMOVE"?2:l==="CURRENT"?3:l==="RESET"?4:C()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(l,c){return l.useProto3Json?(tt(c===void 0||typeof c=="string"),jt.fromBase64String(c||"")):(tt(c===void 0||c instanceof Uint8Array),jt.fromUint8Array(c||new Uint8Array))}(n,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(l){const c=l.code===void 0?g.UNKNOWN:wh(l.code);return new I(c,l.message||"")}(o);e=new Rh(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ar(n,r.document.name),s=ne(r.document.updateTime),o=r.document.createTime?ne(r.document.createTime):N.min(),a=new Kt({mapValue:{fields:r.document.fields}}),u=kt.newFoundDocument(i,s,o,a),l=r.targetIds||[],c=r.removedTargetIds||[];e=new di(l,c,u.key,u)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ar(n,r.document),s=r.readTime?ne(r.readTime):N.min(),o=kt.newNoDocument(i,s),a=r.removedTargetIds||[];e=new di([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ar(n,r.document),s=r.removedTargetIds||[];e=new di([],s,i,null)}else{if(!("filter"in t))return C();{t.filter;const r=t.filter;r.targetId;const{count:i=0,unchangedNames:s}=r,o=new i_(i,s),a=r.targetId;e=new Ah(a,o)}}return e}function kh(n,t){let e;if(t instanceof jr)e={update:Wu(n,t.key,t.value)};else if(t instanceof ia)e={delete:xi(n,t.key)};else if(t instanceof Ke)e={update:Wu(n,t.key,t.data),updateMask:A_(t.fieldMask)};else{if(!(t instanceof Eh))return C();e={verify:xi(n,t.key)}}return t.fieldTransforms.length>0&&(e.updateTransforms=t.fieldTransforms.map(r=>function(s,o){const a=o.transform;if(a instanceof Oi)return{fieldPath:o.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(a instanceof Ir)return{fieldPath:o.field.canonicalString(),appendMissingElements:{values:a.elements}};if(a instanceof wr)return{fieldPath:o.field.canonicalString(),removeAllFromArray:{values:a.elements}};if(a instanceof Mi)return{fieldPath:o.field.canonicalString(),increment:a.Ie};throw C()}(0,r))),t.precondition.isNone||(e.currentDocument=function(i,s){return s.updateTime!==void 0?{updateTime:d_(i,s.updateTime)}:s.exists!==void 0?{exists:s.exists}:C()}(n,t.precondition)),e}function m_(n,t){return n&&n.length>0?(tt(t!==void 0),n.map(e=>function(i,s){let o=i.updateTime?ne(i.updateTime):ne(s);return o.isEqual(N.min())&&(o=ne(s)),new Zm(o,i.transformResults||[])}(e,t))):[]}function __(n,t){return{documents:[ho(n,t.path)]}}function y_(n,t){const e={structuredQuery:{}},r=t.path;t.collectionGroup!==null?(e.parent=ho(n,r),e.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(e.parent=ho(n,r.popLast()),e.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(u){if(u.length!==0)return Nh(le.create(u,"and"))}(t.filters);i&&(e.structuredQuery.where=i);const s=function(u){if(u.length!==0)return u.map(l=>function(h){return{field:yn(h.field),direction:E_(h.dir)}}(l))}(t.orderBy);s&&(e.structuredQuery.orderBy=s);const o=co(n,t.limit);return o!==null&&(e.structuredQuery.limit=o),t.startAt&&(e.structuredQuery.startAt=function(u){return{before:u.inclusive,values:u.position}}(t.startAt)),t.endAt&&(e.structuredQuery.endAt=function(u){return{before:!u.inclusive,values:u.position}}(t.endAt)),e}function v_(n){let t=f_(n.parent);const e=n.structuredQuery,r=e.from?e.from.length:0;let i=null;if(r>0){tt(r===1);const c=e.from[0];c.allDescendants?i=c.collectionId:t=t.child(c.collectionId)}let s=[];e.where&&(s=function(h){const d=Vh(h);return d instanceof le&&rh(d)?d.getFilters():[d]}(e.where));let o=[];e.orderBy&&(o=function(h){return h.map(d=>function(E){return new bi(vn(E.field),function(y){switch(y){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(E.direction))}(d))}(e.orderBy));let a=null;e.limit&&(a=function(h){let d;return d=typeof h=="object"?h.value:h,$r(d)?null:d}(e.limit));let u=null;e.startAt&&(u=function(h){const d=!!h.before,f=h.values||[];return new Di(f,d)}(e.startAt));let l=null;return e.endAt&&(l=function(h){const d=!h.before,f=h.values||[];return new Di(f,d)}(e.endAt)),$m(t,i,o,s,a,"F",u,l)}function T_(n,t){const e=function(i){switch(i){case"TargetPurposeListen":return null;case"TargetPurposeExistenceFilterMismatch":return"existence-filter-mismatch";case"TargetPurposeExistenceFilterMismatchBloom":return"existence-filter-mismatch-bloom";case"TargetPurposeLimboResolution":return"limbo-document";default:return C()}}(t.purpose);return e==null?null:{"goog-listen-tags":e}}function Vh(n){return n.unaryFilter!==void 0?function(e){switch(e.unaryFilter.op){case"IS_NAN":const r=vn(e.unaryFilter.field);return wt.create(r,"==",{doubleValue:NaN});case"IS_NULL":const i=vn(e.unaryFilter.field);return wt.create(i,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const s=vn(e.unaryFilter.field);return wt.create(s,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const o=vn(e.unaryFilter.field);return wt.create(o,"!=",{nullValue:"NULL_VALUE"});default:return C()}}(n):n.fieldFilter!==void 0?function(e){return wt.create(vn(e.fieldFilter.field),function(i){switch(i){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return C()}}(e.fieldFilter.op),e.fieldFilter.value)}(n):n.compositeFilter!==void 0?function(e){return le.create(e.compositeFilter.filters.map(r=>Vh(r)),function(i){switch(i){case"AND":return"and";case"OR":return"or";default:return C()}}(e.compositeFilter.op))}(n):C()}function E_(n){return u_[n]}function I_(n){return l_[n]}function w_(n){return c_[n]}function yn(n){return{fieldPath:n.canonicalString()}}function vn(n){return Mt.fromServerFormat(n.fieldPath)}function Nh(n){return n instanceof wt?function(e){if(e.op==="=="){if(Du(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NAN"}};if(Nu(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NULL"}}}else if(e.op==="!="){if(Du(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NOT_NAN"}};if(Nu(e.value))return{unaryFilter:{field:yn(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:yn(e.field),op:I_(e.op),value:e.value}}}(n):n instanceof le?function(e){const r=e.getFilters().map(i=>Nh(i));return r.length===1?r[0]:{compositeFilter:{op:w_(e.op),filters:r}}}(n):C()}function A_(n){const t=[];return n.fields.forEach(e=>t.push(e.canonicalString())),{fieldPaths:t}}function Dh(n){return n.length>=4&&n.get(0)==="projects"&&n.get(2)==="databases"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Me{constructor(t,e,r,i,s=N.min(),o=N.min(),a=jt.EMPTY_BYTE_STRING,u=null){this.target=t,this.targetId=e,this.purpose=r,this.sequenceNumber=i,this.snapshotVersion=s,this.lastLimboFreeSnapshotVersion=o,this.resumeToken=a,this.expectedCount=u}withSequenceNumber(t){return new Me(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,this.expectedCount)}withResumeToken(t,e){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t,null)}withExpectedCount(t){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken,t)}withLastLimboFreeSnapshotVersion(t){return new Me(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken,this.expectedCount)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class R_{constructor(t){this.ut=t}}function P_(n){const t=v_({parent:n.parent,structuredQuery:n.structuredQuery});return n.limitType==="LAST"?lo(t,t.limit,"L"):t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class S_{constructor(){this.on=new C_}addToCollectionParentIndex(t,e){return this.on.add(e),p.resolve()}getCollectionParents(t,e){return p.resolve(this.on.getEntries(e))}addFieldIndex(t,e){return p.resolve()}deleteFieldIndex(t,e){return p.resolve()}deleteAllFieldIndexes(t){return p.resolve()}createTargetIndexes(t,e){return p.resolve()}getDocumentsMatchingTarget(t,e){return p.resolve(null)}getIndexType(t,e){return p.resolve(0)}getFieldIndexes(t,e){return p.resolve([])}getNextCollectionGroupToUpdate(t){return p.resolve(null)}getMinOffset(t,e){return p.resolve($e.min())}getMinOffsetFromCollectionGroup(t,e){return p.resolve($e.min())}updateCollectionGroup(t,e,r){return p.resolve()}updateIndexEntries(t,e){return p.resolve()}}class C_{constructor(){this.index={}}add(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e]||new xt(ft.comparator),s=!i.has(r);return this.index[e]=i.add(r),s}has(t){const e=t.lastSegment(),r=t.popLast(),i=this.index[e];return i&&i.has(r)}getEntries(t){return(this.index[t]||new xt(ft.comparator)).toArray()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class k_{constructor(){this.changes=new jn(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}addEntry(t){this.assertNotApplied(),this.changes.set(t.key,t)}removeEntry(t,e){this.assertNotApplied(),this.changes.set(t,kt.newInvalidDocument(t).setReadTime(e))}getEntry(t,e){this.assertNotApplied();const r=this.changes.get(e);return r!==void 0?p.resolve(r):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class V_{constructor(t,e){this.overlayedDocument=t,this.mutatedFields=e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class N_{constructor(t,e,r,i){this.remoteDocumentCache=t,this.mutationQueue=e,this.documentOverlayCache=r,this.indexManager=i}getDocument(t,e){let r=null;return this.documentOverlayCache.getOverlay(t,e).next(i=>(r=i,this.remoteDocumentCache.getEntry(t,e))).next(i=>(r!==null&&or(r.mutation,i,ee.empty(),St.now()),i))}getDocuments(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.getLocalViewOfDocuments(t,r,$()).next(()=>r))}getLocalViewOfDocuments(t,e,r=$()){const i=en();return this.populateOverlays(t,i,e).next(()=>this.computeViews(t,e,i,r).next(s=>{let o=Zn();return s.forEach((a,u)=>{o=o.insert(a,u.overlayedDocument)}),o}))}getOverlayedDocuments(t,e){const r=en();return this.populateOverlays(t,r,e).next(()=>this.computeViews(t,e,r,$()))}populateOverlays(t,e,r){const i=[];return r.forEach(s=>{e.has(s)||i.push(s)}),this.documentOverlayCache.getOverlays(t,i).next(s=>{s.forEach((o,a)=>{e.set(o,a)})})}computeViews(t,e,r,i){let s=Ce();const o=sr(),a=function(){return sr()}();return e.forEach((u,l)=>{const c=r.get(l.key);i.has(l.key)&&(c===void 0||c.mutation instanceof Ke)?s=s.insert(l.key,l):c!==void 0?(o.set(l.key,c.mutation.getFieldMask()),or(c.mutation,l,c.mutation.getFieldMask(),St.now())):o.set(l.key,ee.empty())}),this.recalculateAndSaveOverlays(t,s).next(u=>(u.forEach((l,c)=>o.set(l,c)),e.forEach((l,c)=>{var h;return a.set(l,new V_(c,(h=o.get(l))!==null&&h!==void 0?h:null))}),a))}recalculateAndSaveOverlays(t,e){const r=sr();let i=new _t((o,a)=>o-a),s=$();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(t,e).next(o=>{for(const a of o)a.keys().forEach(u=>{const l=e.get(u);if(l===null)return;let c=r.get(u)||ee.empty();c=a.applyToLocalView(l,c),r.set(u,c);const h=(i.get(a.batchId)||$()).add(u);i=i.insert(a.batchId,h)})}).next(()=>{const o=[],a=i.getReverseIterator();for(;a.hasNext();){const u=a.getNext(),l=u.key,c=u.value,h=dh();c.forEach(d=>{if(!s.has(d)){const f=vh(e.get(d),r.get(d));f!==null&&h.set(d,f),s=s.add(d)}}),o.push(this.documentOverlayCache.saveOverlays(t,l,h))}return p.waitFor(o)}).next(()=>r)}recalculateAndSaveOverlaysForDocumentKeys(t,e){return this.remoteDocumentCache.getEntries(t,e).next(r=>this.recalculateAndSaveOverlays(t,r))}getDocumentsMatchingQuery(t,e,r,i){return function(o){return S.isDocumentKey(o.path)&&o.collectionGroup===null&&o.filters.length===0}(e)?this.getDocumentsMatchingDocumentQuery(t,e.path):ah(e)?this.getDocumentsMatchingCollectionGroupQuery(t,e,r,i):this.getDocumentsMatchingCollectionQuery(t,e,r,i)}getNextDocuments(t,e,r,i){return this.remoteDocumentCache.getAllFromCollectionGroup(t,e,r,i).next(s=>{const o=i-s.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(t,e,r.largestBatchId,i-s.size):p.resolve(en());let a=-1,u=s;return o.next(l=>p.forEach(l,(c,h)=>(a<h.largestBatchId&&(a=h.largestBatchId),s.get(c)?p.resolve():this.remoteDocumentCache.getEntry(t,c).next(d=>{u=u.insert(c,d)}))).next(()=>this.populateOverlays(t,l,s)).next(()=>this.computeViews(t,u,l,$())).next(c=>({batchId:a,changes:hh(c)})))})}getDocumentsMatchingDocumentQuery(t,e){return this.getDocument(t,new S(e)).next(r=>{let i=Zn();return r.isFoundDocument()&&(i=i.insert(r.key,r)),i})}getDocumentsMatchingCollectionGroupQuery(t,e,r,i){const s=e.collectionGroup;let o=Zn();return this.indexManager.getCollectionParents(t,s).next(a=>p.forEach(a,u=>{const l=function(h,d){return new qr(d,null,h.explicitOrderBy.slice(),h.filters.slice(),h.limit,h.limitType,h.startAt,h.endAt)}(e,u.child(s));return this.getDocumentsMatchingCollectionQuery(t,l,r,i).next(c=>{c.forEach((h,d)=>{o=o.insert(h,d)})})}).next(()=>o))}getDocumentsMatchingCollectionQuery(t,e,r,i){let s;return this.documentOverlayCache.getOverlaysForCollection(t,e.path,r.largestBatchId).next(o=>(s=o,this.remoteDocumentCache.getDocumentsMatchingQuery(t,e,r,s,i))).next(o=>{s.forEach((u,l)=>{const c=l.getKey();o.get(c)===null&&(o=o.insert(c,kt.newInvalidDocument(c)))});let a=Zn();return o.forEach((u,l)=>{const c=s.get(u);c!==void 0&&or(c.mutation,l,ee.empty(),St.now()),ds(e,l)&&(a=a.insert(u,l))}),a})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class D_{constructor(t){this.serializer=t,this.ur=new Map,this.cr=new Map}getBundleMetadata(t,e){return p.resolve(this.ur.get(e))}saveBundleMetadata(t,e){return this.ur.set(e.id,function(i){return{id:i.id,version:i.version,createTime:ne(i.createTime)}}(e)),p.resolve()}getNamedQuery(t,e){return p.resolve(this.cr.get(e))}saveNamedQuery(t,e){return this.cr.set(e.name,function(i){return{name:i.name,query:P_(i.bundledQuery),readTime:ne(i.readTime)}}(e)),p.resolve()}}/**
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
 */class b_{constructor(){this.overlays=new _t(S.comparator),this.lr=new Map}getOverlay(t,e){return p.resolve(this.overlays.get(e))}getOverlays(t,e){const r=en();return p.forEach(e,i=>this.getOverlay(t,i).next(s=>{s!==null&&r.set(i,s)})).next(()=>r)}saveOverlays(t,e,r){return r.forEach((i,s)=>{this.lt(t,e,s)}),p.resolve()}removeOverlaysForBatchId(t,e,r){const i=this.lr.get(r);return i!==void 0&&(i.forEach(s=>this.overlays=this.overlays.remove(s)),this.lr.delete(r)),p.resolve()}getOverlaysForCollection(t,e,r){const i=en(),s=e.length+1,o=new S(e.child("")),a=this.overlays.getIteratorFrom(o);for(;a.hasNext();){const u=a.getNext().value,l=u.getKey();if(!e.isPrefixOf(l.path))break;l.path.length===s&&u.largestBatchId>r&&i.set(u.getKey(),u)}return p.resolve(i)}getOverlaysForCollectionGroup(t,e,r,i){let s=new _t((l,c)=>l-c);const o=this.overlays.getIterator();for(;o.hasNext();){const l=o.getNext().value;if(l.getKey().getCollectionGroup()===e&&l.largestBatchId>r){let c=s.get(l.largestBatchId);c===null&&(c=en(),s=s.insert(l.largestBatchId,c)),c.set(l.getKey(),l)}}const a=en(),u=s.getIterator();for(;u.hasNext()&&(u.getNext().value.forEach((l,c)=>a.set(l,c)),!(a.size()>=i)););return p.resolve(a)}lt(t,e,r){const i=this.overlays.get(r.key);if(i!==null){const o=this.lr.get(i.largestBatchId).delete(r.key);this.lr.set(i.largestBatchId,o)}this.overlays=this.overlays.insert(r.key,new r_(e,r));let s=this.lr.get(e);s===void 0&&(s=$(),this.lr.set(e,s)),this.lr.set(e,s.add(r.key))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(){this.hr=new xt(Ct.Pr),this.Ir=new xt(Ct.Tr)}isEmpty(){return this.hr.isEmpty()}addReference(t,e){const r=new Ct(t,e);this.hr=this.hr.add(r),this.Ir=this.Ir.add(r)}Er(t,e){t.forEach(r=>this.addReference(r,e))}removeReference(t,e){this.dr(new Ct(t,e))}Ar(t,e){t.forEach(r=>this.removeReference(r,e))}Rr(t){const e=new S(new ft([])),r=new Ct(e,t),i=new Ct(e,t+1),s=[];return this.Ir.forEachInRange([r,i],o=>{this.dr(o),s.push(o.key)}),s}Vr(){this.hr.forEach(t=>this.dr(t))}dr(t){this.hr=this.hr.delete(t),this.Ir=this.Ir.delete(t)}mr(t){const e=new S(new ft([])),r=new Ct(e,t),i=new Ct(e,t+1);let s=$();return this.Ir.forEachInRange([r,i],o=>{s=s.add(o.key)}),s}containsKey(t){const e=new Ct(t,0),r=this.hr.firstAfterOrEqual(e);return r!==null&&t.isEqual(r.key)}}class Ct{constructor(t,e){this.key=t,this.gr=e}static Pr(t,e){return S.comparator(t.key,e.key)||X(t.gr,e.gr)}static Tr(t,e){return X(t.gr,e.gr)||S.comparator(t.key,e.key)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O_{constructor(t,e){this.indexManager=t,this.referenceDelegate=e,this.mutationQueue=[],this.pr=1,this.yr=new xt(Ct.Pr)}checkEmpty(t){return p.resolve(this.mutationQueue.length===0)}addMutationBatch(t,e,r,i){const s=this.pr;this.pr++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const o=new n_(s,e,r,i);this.mutationQueue.push(o);for(const a of i)this.yr=this.yr.add(new Ct(a.key,s)),this.indexManager.addToCollectionParentIndex(t,a.key.path.popLast());return p.resolve(o)}lookupMutationBatch(t,e){return p.resolve(this.wr(e))}getNextMutationBatchAfterBatchId(t,e){const r=e+1,i=this.Sr(r),s=i<0?0:i;return p.resolve(this.mutationQueue.length>s?this.mutationQueue[s]:null)}getHighestUnacknowledgedBatchId(){return p.resolve(this.mutationQueue.length===0?-1:this.pr-1)}getAllMutationBatches(t){return p.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const r=new Ct(e,0),i=new Ct(e,Number.POSITIVE_INFINITY),s=[];return this.yr.forEachInRange([r,i],o=>{const a=this.wr(o.gr);s.push(a)}),p.resolve(s)}getAllMutationBatchesAffectingDocumentKeys(t,e){let r=new xt(X);return e.forEach(i=>{const s=new Ct(i,0),o=new Ct(i,Number.POSITIVE_INFINITY);this.yr.forEachInRange([s,o],a=>{r=r.add(a.gr)})}),p.resolve(this.br(r))}getAllMutationBatchesAffectingQuery(t,e){const r=e.path,i=r.length+1;let s=r;S.isDocumentKey(s)||(s=s.child(""));const o=new Ct(new S(s),0);let a=new xt(X);return this.yr.forEachWhile(u=>{const l=u.key.path;return!!r.isPrefixOf(l)&&(l.length===i&&(a=a.add(u.gr)),!0)},o),p.resolve(this.br(a))}br(t){const e=[];return t.forEach(r=>{const i=this.wr(r);i!==null&&e.push(i)}),e}removeMutationBatch(t,e){tt(this.Dr(e.batchId,"removed")===0),this.mutationQueue.shift();let r=this.yr;return p.forEach(e.mutations,i=>{const s=new Ct(i.key,e.batchId);return r=r.delete(s),this.referenceDelegate.markPotentiallyOrphaned(t,i.key)}).next(()=>{this.yr=r})}Fn(t){}containsKey(t,e){const r=new Ct(e,0),i=this.yr.firstAfterOrEqual(r);return p.resolve(e.isEqual(i&&i.key))}performConsistencyCheck(t){return this.mutationQueue.length,p.resolve()}Dr(t,e){return this.Sr(t)}Sr(t){return this.mutationQueue.length===0?0:t-this.mutationQueue[0].batchId}wr(t){const e=this.Sr(t);return e<0||e>=this.mutationQueue.length?null:this.mutationQueue[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_{constructor(t){this.Cr=t,this.docs=function(){return new _t(S.comparator)}(),this.size=0}setIndexManager(t){this.indexManager=t}addEntry(t,e){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.Cr(e);return this.docs=this.docs.insert(r,{document:e.mutableCopy(),size:o}),this.size+=o-s,this.indexManager.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const r=this.docs.get(e);return p.resolve(r?r.document.mutableCopy():kt.newInvalidDocument(e))}getEntries(t,e){let r=Ce();return e.forEach(i=>{const s=this.docs.get(i);r=r.insert(i,s?s.document.mutableCopy():kt.newInvalidDocument(i))}),p.resolve(r)}getDocumentsMatchingQuery(t,e,r,i){let s=Ce();const o=e.path,a=new S(o.child("")),u=this.docs.getIteratorFrom(a);for(;u.hasNext();){const{key:l,value:{document:c}}=u.getNext();if(!o.isPrefixOf(l.path))break;l.path.length>o.length+1||wm(Im(c),r)<=0||(i.has(c.key)||ds(e,c))&&(s=s.insert(c.key,c.mutableCopy()))}return p.resolve(s)}getAllFromCollectionGroup(t,e,r,i){C()}vr(t,e){return p.forEach(this.docs,r=>e(r))}newChangeBuffer(t){return new L_(this)}getSize(t){return p.resolve(this.size)}}class L_ extends k_{constructor(t){super(),this._r=t}applyChanges(t){const e=[];return this.changes.forEach((r,i)=>{i.isValidDocument()?e.push(this._r.addEntry(t,i)):this._r.removeEntry(r)}),p.waitFor(e)}getFromCache(t,e){return this._r.getEntry(t,e)}getAllFromCache(t,e){return this._r.getEntries(t,e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x_{constructor(t){this.persistence=t,this.Fr=new jn(e=>ea(e),na),this.lastRemoteSnapshotVersion=N.min(),this.highestTargetId=0,this.Mr=0,this.Or=new ua,this.targetCount=0,this.Nr=Mn.On()}forEachTarget(t,e){return this.Fr.forEach((r,i)=>e(i)),p.resolve()}getLastRemoteSnapshotVersion(t){return p.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return p.resolve(this.Mr)}allocateTargetId(t){return this.highestTargetId=this.Nr.next(),p.resolve(this.highestTargetId)}setTargetsMetadata(t,e,r){return r&&(this.lastRemoteSnapshotVersion=r),e>this.Mr&&(this.Mr=e),p.resolve()}kn(t){this.Fr.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Nr=new Mn(e),this.highestTargetId=e),t.sequenceNumber>this.Mr&&(this.Mr=t.sequenceNumber)}addTargetData(t,e){return this.kn(e),this.targetCount+=1,p.resolve()}updateTargetData(t,e){return this.kn(e),p.resolve()}removeTargetData(t,e){return this.Fr.delete(e.target),this.Or.Rr(e.targetId),this.targetCount-=1,p.resolve()}removeTargets(t,e,r){let i=0;const s=[];return this.Fr.forEach((o,a)=>{a.sequenceNumber<=e&&r.get(a.targetId)===null&&(this.Fr.delete(o),s.push(this.removeMatchingKeysForTargetId(t,a.targetId)),i++)}),p.waitFor(s).next(()=>i)}getTargetCount(t){return p.resolve(this.targetCount)}getTargetData(t,e){const r=this.Fr.get(e)||null;return p.resolve(r)}addMatchingKeys(t,e,r){return this.Or.Er(e,r),p.resolve()}removeMatchingKeys(t,e,r){this.Or.Ar(e,r);const i=this.persistence.referenceDelegate,s=[];return i&&e.forEach(o=>{s.push(i.markPotentiallyOrphaned(t,o))}),p.waitFor(s)}removeMatchingKeysForTargetId(t,e){return this.Or.Rr(e),p.resolve()}getMatchingKeysForTargetId(t,e){const r=this.Or.mr(e);return p.resolve(r)}containsKey(t,e){return p.resolve(this.Or.containsKey(e))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class F_{constructor(t,e){this.Br={},this.overlays={},this.Lr=new Xo(0),this.kr=!1,this.kr=!0,this.referenceDelegate=t(this),this.qr=new x_(this),this.indexManager=new S_,this.remoteDocumentCache=function(i){return new M_(i)}(r=>this.referenceDelegate.Qr(r)),this.serializer=new R_(e),this.Kr=new D_(this.serializer)}start(){return Promise.resolve()}shutdown(){return this.kr=!1,Promise.resolve()}get started(){return this.kr}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(t){return this.indexManager}getDocumentOverlayCache(t){let e=this.overlays[t.toKey()];return e||(e=new b_,this.overlays[t.toKey()]=e),e}getMutationQueue(t,e){let r=this.Br[t.toKey()];return r||(r=new O_(e,this.referenceDelegate),this.Br[t.toKey()]=r),r}getTargetCache(){return this.qr}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Kr}runTransaction(t,e,r){R("MemoryPersistence","Starting transaction:",t);const i=new U_(this.Lr.next());return this.referenceDelegate.$r(),r(i).next(s=>this.referenceDelegate.Ur(i).next(()=>s)).toPromise().then(s=>(i.raiseOnCommittedEvent(),s))}Wr(t,e){return p.or(Object.values(this.Br).map(r=>()=>r.containsKey(t,e)))}}class U_ extends Rm{constructor(t){super(),this.currentSequenceNumber=t}}class la{constructor(t){this.persistence=t,this.Gr=new ua,this.zr=null}static jr(t){return new la(t)}get Hr(){if(this.zr)return this.zr;throw C()}addReference(t,e,r){return this.Gr.addReference(r,e),this.Hr.delete(r.toString()),p.resolve()}removeReference(t,e,r){return this.Gr.removeReference(r,e),this.Hr.add(r.toString()),p.resolve()}markPotentiallyOrphaned(t,e){return this.Hr.add(e.toString()),p.resolve()}removeTarget(t,e){this.Gr.Rr(e.targetId).forEach(i=>this.Hr.add(i.toString()));const r=this.persistence.getTargetCache();return r.getMatchingKeysForTargetId(t,e.targetId).next(i=>{i.forEach(s=>this.Hr.add(s.toString()))}).next(()=>r.removeTargetData(t,e))}$r(){this.zr=new Set}Ur(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return p.forEach(this.Hr,r=>{const i=S.fromPath(r);return this.Jr(t,i).next(s=>{s||e.removeEntry(i,N.min())})}).next(()=>(this.zr=null,e.apply(t)))}updateLimboDocument(t,e){return this.Jr(t,e).next(r=>{r?this.Hr.delete(e.toString()):this.Hr.add(e.toString())})}Qr(t){return 0}Jr(t,e){return p.or([()=>p.resolve(this.Gr.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Wr(t,e)])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ca{constructor(t,e,r,i){this.targetId=t,this.fromCache=e,this.ki=r,this.qi=i}static Qi(t,e){let r=$(),i=$();for(const s of e.docChanges)switch(s.type){case 0:r=r.add(s.doc.key);break;case 1:i=i.add(s.doc.key)}return new ca(t,e.fromCache,r,i)}}/**
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
 */class $_{constructor(){this._documentReadCount=0}get documentReadCount(){return this._documentReadCount}incrementDocumentReadCount(t){this._documentReadCount+=t}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q_{constructor(){this.Ki=!1,this.$i=!1,this.Ui=100,this.Wi=8}initialize(t,e){this.Gi=t,this.indexManager=e,this.Ki=!0}getDocumentsMatchingQuery(t,e,r,i){const s={result:null};return this.zi(t,e).next(o=>{s.result=o}).next(()=>{if(!s.result)return this.ji(t,e,i,r).next(o=>{s.result=o})}).next(()=>{if(s.result)return;const o=new $_;return this.Hi(t,e,o).next(a=>{if(s.result=a,this.$i)return this.Ji(t,e,o,a.size)})}).next(()=>s.result)}Ji(t,e,r,i){return r.documentReadCount<this.Ui?(Qn()<=ce.DEBUG&&R("QueryEngine","SDK will not create cache indexes for query:",_n(e),"since it only creates cache indexes for collection contains","more than or equal to",this.Ui,"documents"),p.resolve()):(Qn()<=ce.DEBUG&&R("QueryEngine","Query:",_n(e),"scans",r.documentReadCount,"local documents and returns",i,"documents as results."),r.documentReadCount>this.Wi*i?(Qn()<=ce.DEBUG&&R("QueryEngine","The SDK decides to create cache indexes for query:",_n(e),"as using cache indexes may help improve performance."),this.indexManager.createTargetIndexes(t,_e(e))):p.resolve())}zi(t,e){if(Lu(e))return p.resolve(null);let r=_e(e);return this.indexManager.getIndexType(t,r).next(i=>i===0?null:(e.limit!==null&&i===1&&(e=lo(e,null,"F"),r=_e(e)),this.indexManager.getDocumentsMatchingTarget(t,r).next(s=>{const o=$(...s);return this.Gi.getDocuments(t,o).next(a=>this.indexManager.getMinOffset(t,r).next(u=>{const l=this.Yi(e,a);return this.Zi(e,l,o,u.readTime)?this.zi(t,lo(e,null,"F")):this.Xi(t,l,e,u)}))})))}ji(t,e,r,i){return Lu(e)||i.isEqual(N.min())?p.resolve(null):this.Gi.getDocuments(t,r).next(s=>{const o=this.Yi(e,s);return this.Zi(e,o,r,i)?p.resolve(null):(Qn()<=ce.DEBUG&&R("QueryEngine","Re-using previous result from %s to execute query: %s",i.toString(),_n(e)),this.Xi(t,o,e,Em(i,-1)).next(a=>a))})}Yi(t,e){let r=new xt(lh(t));return e.forEach((i,s)=>{ds(t,s)&&(r=r.add(s))}),r}Zi(t,e,r,i){if(t.limit===null)return!1;if(r.size!==e.size)return!0;const s=t.limitType==="F"?e.last():e.first();return!!s&&(s.hasPendingWrites||s.version.compareTo(i)>0)}Hi(t,e,r){return Qn()<=ce.DEBUG&&R("QueryEngine","Using full collection scan to execute query:",_n(e)),this.Gi.getDocumentsMatchingQuery(t,e,$e.min(),r)}Xi(t,e,r,i){return this.Gi.getDocumentsMatchingQuery(t,r,i).next(s=>(e.forEach(o=>{s=s.insert(o.key,o)}),s))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(t,e,r,i){this.persistence=t,this.es=e,this.serializer=i,this.ts=new _t(X),this.ns=new jn(s=>ea(s),na),this.rs=new Map,this.ss=t.getRemoteDocumentCache(),this.qr=t.getTargetCache(),this.Kr=t.getBundleCache(),this.os(r)}os(t){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(t),this.indexManager=this.persistence.getIndexManager(t),this.mutationQueue=this.persistence.getMutationQueue(t,this.indexManager),this.localDocuments=new N_(this.ss,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.ss.setIndexManager(this.indexManager),this.es.initialize(this.localDocuments,this.indexManager)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.ts))}}function B_(n,t,e,r){return new j_(n,t,e,r)}async function bh(n,t){const e=M(n);return await e.persistence.runTransaction("Handle user change","readonly",r=>{let i;return e.mutationQueue.getAllMutationBatches(r).next(s=>(i=s,e.os(t),e.mutationQueue.getAllMutationBatches(r))).next(s=>{const o=[],a=[];let u=$();for(const l of i){o.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}for(const l of s){a.push(l.batchId);for(const c of l.mutations)u=u.add(c.key)}return e.localDocuments.getDocuments(r,u).next(l=>({_s:l,removedBatchIds:o,addedBatchIds:a}))})})}function z_(n,t){const e=M(n);return e.persistence.runTransaction("Acknowledge batch","readwrite-primary",r=>{const i=t.batch.keys(),s=e.ss.newChangeBuffer({trackRemovals:!0});return function(a,u,l,c){const h=l.batch,d=h.keys();let f=p.resolve();return d.forEach(E=>{f=f.next(()=>c.getEntry(u,E)).next(A=>{const y=l.docVersions.get(E);tt(y!==null),A.version.compareTo(y)<0&&(h.applyToRemoteDocument(A,l),A.isValidDocument()&&(A.setReadTime(l.commitVersion),c.addEntry(A)))})}),f.next(()=>a.mutationQueue.removeMutationBatch(u,h))}(e,r,t,s).next(()=>s.apply(r)).next(()=>e.mutationQueue.performConsistencyCheck(r)).next(()=>e.documentOverlayCache.removeOverlaysForBatchId(r,i,t.batch.batchId)).next(()=>e.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(r,function(a){let u=$();for(let l=0;l<a.mutationResults.length;++l)a.mutationResults[l].transformResults.length>0&&(u=u.add(a.batch.mutations[l].key));return u}(t))).next(()=>e.localDocuments.getDocuments(r,i))})}function Oh(n){const t=M(n);return t.persistence.runTransaction("Get last remote snapshot version","readonly",e=>t.qr.getLastRemoteSnapshotVersion(e))}function G_(n,t){const e=M(n),r=t.snapshotVersion;let i=e.ts;return e.persistence.runTransaction("Apply remote event","readwrite-primary",s=>{const o=e.ss.newChangeBuffer({trackRemovals:!0});i=e.ts;const a=[];t.targetChanges.forEach((c,h)=>{const d=i.get(h);if(!d)return;a.push(e.qr.removeMatchingKeys(s,c.removedDocuments,h).next(()=>e.qr.addMatchingKeys(s,c.addedDocuments,h)));let f=d.withSequenceNumber(s.currentSequenceNumber);t.targetMismatches.get(h)!==null?f=f.withResumeToken(jt.EMPTY_BYTE_STRING,N.min()).withLastLimboFreeSnapshotVersion(N.min()):c.resumeToken.approximateByteSize()>0&&(f=f.withResumeToken(c.resumeToken,r)),i=i.insert(h,f),function(A,y,T){return A.resumeToken.approximateByteSize()===0||y.snapshotVersion.toMicroseconds()-A.snapshotVersion.toMicroseconds()>=3e8?!0:T.addedDocuments.size+T.modifiedDocuments.size+T.removedDocuments.size>0}(d,f,c)&&a.push(e.qr.updateTargetData(s,f))});let u=Ce(),l=$();if(t.documentUpdates.forEach(c=>{t.resolvedLimboDocuments.has(c)&&a.push(e.persistence.referenceDelegate.updateLimboDocument(s,c))}),a.push(W_(s,o,t.documentUpdates).next(c=>{u=c.us,l=c.cs})),!r.isEqual(N.min())){const c=e.qr.getLastRemoteSnapshotVersion(s).next(h=>e.qr.setTargetsMetadata(s,s.currentSequenceNumber,r));a.push(c)}return p.waitFor(a).next(()=>o.apply(s)).next(()=>e.localDocuments.getLocalViewOfDocuments(s,u,l)).next(()=>u)}).then(s=>(e.ts=i,s))}function W_(n,t,e){let r=$(),i=$();return e.forEach(s=>r=r.add(s)),t.getEntries(n,r).next(s=>{let o=Ce();return e.forEach((a,u)=>{const l=s.get(a);u.isFoundDocument()!==l.isFoundDocument()&&(i=i.add(a)),u.isNoDocument()&&u.version.isEqual(N.min())?(t.removeEntry(a,u.readTime),o=o.insert(a,u)):!l.isValidDocument()||u.version.compareTo(l.version)>0||u.version.compareTo(l.version)===0&&l.hasPendingWrites?(t.addEntry(u),o=o.insert(a,u)):R("LocalStore","Ignoring outdated watch update for ",a,". Current version:",l.version," Watch version:",u.version)}),{us:o,cs:i}})}function K_(n,t){const e=M(n);return e.persistence.runTransaction("Get next mutation batch","readonly",r=>(t===void 0&&(t=-1),e.mutationQueue.getNextMutationBatchAfterBatchId(r,t)))}function H_(n,t){const e=M(n);return e.persistence.runTransaction("Allocate target","readwrite",r=>{let i;return e.qr.getTargetData(r,t).next(s=>s?(i=s,p.resolve(i)):e.qr.allocateTargetId(r).next(o=>(i=new Me(t,o,"TargetPurposeListen",r.currentSequenceNumber),e.qr.addTargetData(r,i).next(()=>i))))}).then(r=>{const i=e.ts.get(r.targetId);return(i===null||r.snapshotVersion.compareTo(i.snapshotVersion)>0)&&(e.ts=e.ts.insert(r.targetId,r),e.ns.set(t,r.targetId)),r})}async function fo(n,t,e){const r=M(n),i=r.ts.get(t),s=e?"readwrite":"readwrite-primary";try{e||await r.persistence.runTransaction("Release target",s,o=>r.persistence.referenceDelegate.removeTarget(o,i))}catch(o){if(!Ur(o))throw o;R("LocalStore",`Failed to update sequence numbers for target ${t}: ${o}`)}r.ts=r.ts.remove(t),r.ns.delete(i.target)}function Ku(n,t,e){const r=M(n);let i=N.min(),s=$();return r.persistence.runTransaction("Execute query","readwrite",o=>function(u,l,c){const h=M(u),d=h.ns.get(c);return d!==void 0?p.resolve(h.ts.get(d)):h.qr.getTargetData(l,c)}(r,o,_e(t)).next(a=>{if(a)return i=a.lastLimboFreeSnapshotVersion,r.qr.getMatchingKeysForTargetId(o,a.targetId).next(u=>{s=u})}).next(()=>r.es.getDocumentsMatchingQuery(o,t,e?i:N.min(),e?s:$())).next(a=>(Q_(r,jm(t),a),{documents:a,ls:s})))}function Q_(n,t,e){let r=n.rs.get(t)||N.min();e.forEach((i,s)=>{s.readTime.compareTo(r)>0&&(r=s.readTime)}),n.rs.set(t,r)}class Hu{constructor(){this.activeTargetIds=Hm()}ds(t){this.activeTargetIds=this.activeTargetIds.add(t)}As(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Es(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class Y_{constructor(){this.eo=new Hu,this.no={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,r){}addLocalQueryTarget(t){return this.eo.ds(t),this.no[t]||"not-current"}updateQueryState(t,e,r){this.no[t]=e}removeLocalQueryTarget(t){this.eo.As(t)}isLocalQueryTarget(t){return this.eo.activeTargetIds.has(t)}clearQueryState(t){delete this.no[t]}getAllActiveQueryTargets(){return this.eo.activeTargetIds}isActiveQueryTarget(t){return this.eo.activeTargetIds.has(t)}start(){return this.eo=new Hu,Promise.resolve()}handleUserChange(t,e,r){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(t){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X_{ro(t){}shutdown(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qu{constructor(){this.io=()=>this.so(),this.oo=()=>this._o(),this.ao=[],this.uo()}ro(t){this.ao.push(t)}shutdown(){window.removeEventListener("online",this.io),window.removeEventListener("offline",this.oo)}uo(){window.addEventListener("online",this.io),window.addEventListener("offline",this.oo)}so(){R("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.ao)t(0)}_o(){R("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.ao)t(1)}static D(){return typeof window<"u"&&window.addEventListener!==void 0&&window.removeEventListener!==void 0}}/**
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
 */let ri=null;function Us(){return ri===null?ri=function(){return 268435456+Math.round(2147483648*Math.random())}():ri++,"0x"+ri.toString(16)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const J_={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery",RunAggregationQuery:"runAggregationQuery"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Z_{constructor(t){this.co=t.co,this.lo=t.lo}ho(t){this.Po=t}Io(t){this.To=t}onMessage(t){this.Eo=t}close(){this.lo()}send(t){this.co(t)}Ao(){this.Po()}Ro(t){this.To(t)}Vo(t){this.Eo(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ft="WebChannelConnection";class ty extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const r=e.ssl?"https":"http",i=encodeURIComponent(this.databaseId.projectId),s=encodeURIComponent(this.databaseId.database);this.mo=r+"://"+e.host,this.fo=`projects/${i}/databases/${s}`,this.po=this.databaseId.database==="(default)"?`project_id=${i}`:`project_id=${i}&database_id=${s}`}get yo(){return!1}wo(e,r,i,s,o){const a=Us(),u=this.So(e,r);R("RestConnection",`Sending RPC '${e}' ${a}:`,u,i);const l={"google-cloud-resource-prefix":this.fo,"x-goog-request-params":this.po};return this.bo(l,s,o),this.Do(e,u,l,i).then(c=>(R("RestConnection",`Received RPC '${e}' ${a}: `,c),c),c=>{throw Nn("RestConnection",`RPC '${e}' ${a} failed with error: `,c,"url: ",u,"request:",i),c})}Co(e,r,i,s,o,a){return this.wo(e,r,i,s,o)}bo(e,r,i){e["X-Goog-Api-Client"]=function(){return"gl-js/ fire/"+qn}(),e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),r&&r.headers.forEach((s,o)=>e[o]=s),i&&i.headers.forEach((s,o)=>e[o]=s)}So(e,r){const i=J_[e];return`${this.mo}/v1/${r}:${i}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams,this.longPollingOptions=t.longPollingOptions}Do(t,e,r,i){const s=Us();return new Promise((o,a)=>{const u=new cm;u.setWithCredentials(!0),u.listenOnce(am.COMPLETE,()=>{try{switch(u.getLastErrorCode()){case Fs.NO_ERROR:const c=u.getResponseJson();R(Ft,`XHR for RPC '${t}' ${s} received:`,JSON.stringify(c)),o(c);break;case Fs.TIMEOUT:R(Ft,`RPC '${t}' ${s} timed out`),a(new I(g.DEADLINE_EXCEEDED,"Request time out"));break;case Fs.HTTP_ERROR:const h=u.getStatus();if(R(Ft,`RPC '${t}' ${s} failed with status:`,h,"response text:",u.getResponseText()),h>0){let d=u.getResponseJson();Array.isArray(d)&&(d=d[0]);const f=d==null?void 0:d.error;if(f&&f.status&&f.message){const E=function(y){const T=y.toLowerCase().replace(/_/g,"-");return Object.values(g).indexOf(T)>=0?T:g.UNKNOWN}(f.status);a(new I(E,f.message))}else a(new I(g.UNKNOWN,"Server responded with status "+u.getStatus()))}else a(new I(g.UNAVAILABLE,"Connection failed."));break;default:C()}}finally{R(Ft,`RPC '${t}' ${s} completed.`)}});const l=JSON.stringify(i);R(Ft,`RPC '${t}' ${s} sending request:`,i),u.send(e,"POST",l,r,15)})}vo(t,e,r){const i=Us(),s=[this.mo,"/","google.firestore.v1.Firestore","/",t,"/channel"],o=sm(),a=om(),u={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling},l=this.longPollingOptions.timeoutSeconds;l!==void 0&&(u.longPollingTimeout=Math.round(1e3*l)),this.useFetchStreams&&(u.xmlHttpFactory=new lm({})),this.bo(u.initMessageHeaders,e,r),u.encodeInitMessageHeaders=!0;const c=s.join("");R(Ft,`Creating RPC '${t}' stream ${i}: ${c}`,u);const h=o.createWebChannel(c,u);let d=!1,f=!1;const E=new Z_({co:y=>{f?R(Ft,`Not sending because RPC '${t}' stream ${i} is closed:`,y):(d||(R(Ft,`Opening RPC '${t}' stream ${i} transport.`),h.open(),d=!0),R(Ft,`RPC '${t}' stream ${i} sending:`,y),h.send(y))},lo:()=>h.close()}),A=(y,T,W)=>{y.listen(T,x=>{try{W(x)}catch(K){setTimeout(()=>{throw K},0)}})};return A(h,ti.EventType.OPEN,()=>{f||R(Ft,`RPC '${t}' stream ${i} transport opened.`)}),A(h,ti.EventType.CLOSE,()=>{f||(f=!0,R(Ft,`RPC '${t}' stream ${i} transport closed`),E.Ro())}),A(h,ti.EventType.ERROR,y=>{f||(f=!0,Nn(Ft,`RPC '${t}' stream ${i} transport errored:`,y),E.Ro(new I(g.UNAVAILABLE,"The operation could not be completed")))}),A(h,ti.EventType.MESSAGE,y=>{var T;if(!f){const W=y.data[0];tt(!!W);const x=W,K=x.error||((T=x[0])===null||T===void 0?void 0:T.error);if(K){R(Ft,`RPC '${t}' stream ${i} received error:`,K);const B=K.status;let rt=function(At){const H=Et[At];if(H!==void 0)return wh(H)}(B),gt=K.message;rt===void 0&&(rt=g.INTERNAL,gt="Unknown error status: "+B+" with message "+K.message),f=!0,E.Ro(new I(rt,gt)),h.close()}else R(Ft,`RPC '${t}' stream ${i} received:`,W),E.Vo(W)}}),A(a,um.STAT_EVENT,y=>{y.stat===Ru.PROXY?R(Ft,`RPC '${t}' stream ${i} detected buffering proxy`):y.stat===Ru.NOPROXY&&R(Ft,`RPC '${t}' stream ${i} detected no buffering proxy`)}),setTimeout(()=>{E.Ao()},0),E}}function $s(){return typeof document<"u"?document:null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ms(n){return new h_(n,!0)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ha{constructor(t,e,r=1e3,i=1.5,s=6e4){this.si=t,this.timerId=e,this.Fo=r,this.Mo=i,this.xo=s,this.Oo=0,this.No=null,this.Bo=Date.now(),this.reset()}reset(){this.Oo=0}Lo(){this.Oo=this.xo}ko(t){this.cancel();const e=Math.floor(this.Oo+this.qo()),r=Math.max(0,Date.now()-this.Bo),i=Math.max(0,e-r);i>0&&R("ExponentialBackoff",`Backing off for ${i} ms (base delay: ${this.Oo} ms, delay with jitter: ${e} ms, last attempt: ${r} ms ago)`),this.No=this.si.enqueueAfterDelay(this.timerId,i,()=>(this.Bo=Date.now(),t())),this.Oo*=this.Mo,this.Oo<this.Fo&&(this.Oo=this.Fo),this.Oo>this.xo&&(this.Oo=this.xo)}Qo(){this.No!==null&&(this.No.skipDelay(),this.No=null)}cancel(){this.No!==null&&(this.No.cancel(),this.No=null)}qo(){return(Math.random()-.5)*this.Oo}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mh{constructor(t,e,r,i,s,o,a,u){this.si=t,this.Ko=r,this.$o=i,this.connection=s,this.authCredentialsProvider=o,this.appCheckCredentialsProvider=a,this.listener=u,this.state=0,this.Uo=0,this.Wo=null,this.Go=null,this.stream=null,this.zo=new ha(t,e)}jo(){return this.state===1||this.state===5||this.Ho()}Ho(){return this.state===2||this.state===3}start(){this.state!==4?this.auth():this.Jo()}async stop(){this.jo()&&await this.close(0)}Yo(){this.state=0,this.zo.reset()}Zo(){this.Ho()&&this.Wo===null&&(this.Wo=this.si.enqueueAfterDelay(this.Ko,6e4,()=>this.Xo()))}e_(t){this.t_(),this.stream.send(t)}async Xo(){if(this.Ho())return this.close(0)}t_(){this.Wo&&(this.Wo.cancel(),this.Wo=null)}n_(){this.Go&&(this.Go.cancel(),this.Go=null)}async close(t,e){this.t_(),this.n_(),this.zo.cancel(),this.Uo++,t!==4?this.zo.reset():e&&e.code===g.RESOURCE_EXHAUSTED?(Se(e.toString()),Se("Using maximum backoff delay to prevent overloading the backend."),this.zo.Lo()):e&&e.code===g.UNAUTHENTICATED&&this.state!==3&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),this.stream!==null&&(this.r_(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Io(e)}r_(){}auth(){this.state=1;const t=this.i_(this.Uo),e=this.Uo;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then(([r,i])=>{this.Uo===e&&this.s_(r,i)},r=>{t(()=>{const i=new I(g.UNKNOWN,"Fetching auth token failed: "+r.message);return this.o_(i)})})}s_(t,e){const r=this.i_(this.Uo);this.stream=this.__(t,e),this.stream.ho(()=>{r(()=>(this.state=2,this.Go=this.si.enqueueAfterDelay(this.$o,1e4,()=>(this.Ho()&&(this.state=3),Promise.resolve())),this.listener.ho()))}),this.stream.Io(i=>{r(()=>this.o_(i))}),this.stream.onMessage(i=>{r(()=>this.onMessage(i))})}Jo(){this.state=5,this.zo.ko(async()=>{this.state=0,this.start()})}o_(t){return R("PersistentStream",`close with error: ${t}`),this.stream=null,this.close(4,t)}i_(t){return e=>{this.si.enqueueAndForget(()=>this.Uo===t?e():(R("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class ey extends Mh{constructor(t,e,r,i,s,o){super(t,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s}__(t,e){return this.connection.vo("Listen",t,e)}onMessage(t){this.zo.reset();const e=p_(this.serializer,t),r=function(s){if(!("targetChange"in s))return N.min();const o=s.targetChange;return o.targetIds&&o.targetIds.length?N.min():o.readTime?ne(o.readTime):N.min()}(t);return this.listener.a_(e,r)}u_(t){const e={};e.database=Ar(this.serializer),e.addTarget=function(s,o){let a;const u=o.target;if(a=ao(u)?{documents:__(s,u)}:{query:y_(s,u)},a.targetId=o.targetId,o.resumeToken.approximateByteSize()>0){a.resumeToken=Ph(s,o.resumeToken);const l=co(s,o.expectedCount);l!==null&&(a.expectedCount=l)}else if(o.snapshotVersion.compareTo(N.min())>0){a.readTime=Li(s,o.snapshotVersion.toTimestamp());const l=co(s,o.expectedCount);l!==null&&(a.expectedCount=l)}return a}(this.serializer,t);const r=T_(this.serializer,t);r&&(e.labels=r),this.e_(e)}c_(t){const e={};e.database=Ar(this.serializer),e.removeTarget=t,this.e_(e)}}class ny extends Mh{constructor(t,e,r,i,s,o){super(t,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",e,r,i,o),this.serializer=s,this.l_=!1}get h_(){return this.l_}start(){this.l_=!1,this.lastStreamToken=void 0,super.start()}r_(){this.l_&&this.P_([])}__(t,e){return this.connection.vo("Write",t,e)}onMessage(t){if(tt(!!t.streamToken),this.lastStreamToken=t.streamToken,this.l_){this.zo.reset();const e=m_(t.writeResults,t.commitTime),r=ne(t.commitTime);return this.listener.I_(r,e)}return tt(!t.writeResults||t.writeResults.length===0),this.l_=!0,this.listener.T_()}E_(){const t={};t.database=Ar(this.serializer),this.e_(t)}P_(t){const e={streamToken:this.lastStreamToken,writes:t.map(r=>kh(this.serializer,r))};this.e_(e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ry extends class{}{constructor(t,e,r,i){super(),this.authCredentials=t,this.appCheckCredentials=e,this.connection=r,this.serializer=i,this.d_=!1}A_(){if(this.d_)throw new I(g.FAILED_PRECONDITION,"The client has already been terminated.")}wo(t,e,r){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([i,s])=>this.connection.wo(t,e,r,i,s)).catch(i=>{throw i.name==="FirebaseError"?(i.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),i):new I(g.UNKNOWN,i.toString())})}Co(t,e,r,i){return this.A_(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then(([s,o])=>this.connection.Co(t,e,r,s,o,i)).catch(s=>{throw s.name==="FirebaseError"?(s.code===g.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),s):new I(g.UNKNOWN,s.toString())})}terminate(){this.d_=!0}}class iy{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.V_=0,this.m_=null,this.f_=!0}g_(){this.V_===0&&(this.p_("Unknown"),this.m_=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.m_=null,this.y_("Backend didn't respond within 10 seconds."),this.p_("Offline"),Promise.resolve())))}w_(t){this.state==="Online"?this.p_("Unknown"):(this.V_++,this.V_>=1&&(this.S_(),this.y_(`Connection failed 1 times. Most recent error: ${t.toString()}`),this.p_("Offline")))}set(t){this.S_(),this.V_=0,t==="Online"&&(this.f_=!1),this.p_(t)}p_(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}y_(t){const e=`Could not reach Cloud Firestore backend. ${t}
This typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.f_?(Se(e),this.f_=!1):R("OnlineStateTracker",e)}S_(){this.m_!==null&&(this.m_.cancel(),this.m_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sy{constructor(t,e,r,i,s){this.localStore=t,this.datastore=e,this.asyncQueue=r,this.remoteSyncer={},this.b_=[],this.D_=new Map,this.C_=new Set,this.v_=[],this.F_=s,this.F_.ro(o=>{r.enqueueAndForget(async()=>{fn(this)&&(R("RemoteStore","Restarting streams for network reachability change."),await async function(u){const l=M(u);l.C_.add(4),await zr(l),l.M_.set("Unknown"),l.C_.delete(4),await _s(l)}(this))})}),this.M_=new iy(r,i)}}async function _s(n){if(fn(n))for(const t of n.v_)await t(!0)}async function zr(n){for(const t of n.v_)await t(!1)}function Lh(n,t){const e=M(n);e.D_.has(t.targetId)||(e.D_.set(t.targetId,t),ga(e)?fa(e):Bn(e).Ho()&&da(e,t))}function xh(n,t){const e=M(n),r=Bn(e);e.D_.delete(t),r.Ho()&&Fh(e,t),e.D_.size===0&&(r.Ho()?r.Zo():fn(e)&&e.M_.set("Unknown"))}function da(n,t){if(n.x_.Oe(t.targetId),t.resumeToken.approximateByteSize()>0||t.snapshotVersion.compareTo(N.min())>0){const e=n.remoteSyncer.getRemoteKeysForTarget(t.targetId).size;t=t.withExpectedCount(e)}Bn(n).u_(t)}function Fh(n,t){n.x_.Oe(t),Bn(n).c_(t)}function fa(n){n.x_=new a_({getRemoteKeysForTarget:t=>n.remoteSyncer.getRemoteKeysForTarget(t),_t:t=>n.D_.get(t)||null,nt:()=>n.datastore.serializer.databaseId}),Bn(n).start(),n.M_.g_()}function ga(n){return fn(n)&&!Bn(n).jo()&&n.D_.size>0}function fn(n){return M(n).C_.size===0}function Uh(n){n.x_=void 0}async function oy(n){n.D_.forEach((t,e)=>{da(n,t)})}async function ay(n,t){Uh(n),ga(n)?(n.M_.w_(t),fa(n)):n.M_.set("Unknown")}async function uy(n,t,e){if(n.M_.set("Online"),t instanceof Rh&&t.state===2&&t.cause)try{await async function(i,s){const o=s.cause;for(const a of s.targetIds)i.D_.has(a)&&(await i.remoteSyncer.rejectListen(a,o),i.D_.delete(a),i.x_.removeTarget(a))}(n,t)}catch(r){R("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),r),await Fi(n,r)}else if(t instanceof di?n.x_.$e(t):t instanceof Ah?n.x_.Je(t):n.x_.Ge(t),!e.isEqual(N.min()))try{const r=await Oh(n.localStore);e.compareTo(r)>=0&&await function(s,o){const a=s.x_.it(o);return a.targetChanges.forEach((u,l)=>{if(u.resumeToken.approximateByteSize()>0){const c=s.D_.get(l);c&&s.D_.set(l,c.withResumeToken(u.resumeToken,o))}}),a.targetMismatches.forEach((u,l)=>{const c=s.D_.get(u);if(!c)return;s.D_.set(u,c.withResumeToken(jt.EMPTY_BYTE_STRING,c.snapshotVersion)),Fh(s,u);const h=new Me(c.target,u,l,c.sequenceNumber);da(s,h)}),s.remoteSyncer.applyRemoteEvent(a)}(n,e)}catch(r){R("RemoteStore","Failed to raise snapshot:",r),await Fi(n,r)}}async function Fi(n,t,e){if(!Ur(t))throw t;n.C_.add(1),await zr(n),n.M_.set("Offline"),e||(e=()=>Oh(n.localStore)),n.asyncQueue.enqueueRetryable(async()=>{R("RemoteStore","Retrying IndexedDB access"),await e(),n.C_.delete(1),await _s(n)})}function $h(n,t){return t().catch(e=>Fi(n,e,t))}async function ys(n){const t=M(n),e=je(t);let r=t.b_.length>0?t.b_[t.b_.length-1].batchId:-1;for(;ly(t);)try{const i=await K_(t.localStore,r);if(i===null){t.b_.length===0&&e.Zo();break}r=i.batchId,cy(t,i)}catch(i){await Fi(t,i)}qh(t)&&jh(t)}function ly(n){return fn(n)&&n.b_.length<10}function cy(n,t){n.b_.push(t);const e=je(n);e.Ho()&&e.h_&&e.P_(t.mutations)}function qh(n){return fn(n)&&!je(n).jo()&&n.b_.length>0}function jh(n){je(n).start()}async function hy(n){je(n).E_()}async function dy(n){const t=je(n);for(const e of n.b_)t.P_(e.mutations)}async function fy(n,t,e){const r=n.b_.shift(),i=sa.from(r,t,e);await $h(n,()=>n.remoteSyncer.applySuccessfulWrite(i)),await ys(n)}async function gy(n,t){t&&je(n).h_&&await async function(r,i){if(function(o){return Ih(o)&&o!==g.ABORTED}(i.code)){const s=r.b_.shift();je(r).Yo(),await $h(r,()=>r.remoteSyncer.rejectFailedWrite(s.batchId,i)),await ys(r)}}(n,t),qh(n)&&jh(n)}async function Yu(n,t){const e=M(n);e.asyncQueue.verifyOperationInProgress(),R("RemoteStore","RemoteStore received new credentials");const r=fn(e);e.C_.add(3),await zr(e),r&&e.M_.set("Unknown"),await e.remoteSyncer.handleCredentialChange(t),e.C_.delete(3),await _s(e)}async function py(n,t){const e=M(n);t?(e.C_.delete(2),await _s(e)):t||(e.C_.add(2),await zr(e),e.M_.set("Unknown"))}function Bn(n){return n.O_||(n.O_=function(e,r,i){const s=M(e);return s.A_(),new ey(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:oy.bind(null,n),Io:ay.bind(null,n),a_:uy.bind(null,n)}),n.v_.push(async t=>{t?(n.O_.Yo(),ga(n)?fa(n):n.M_.set("Unknown")):(await n.O_.stop(),Uh(n))})),n.O_}function je(n){return n.N_||(n.N_=function(e,r,i){const s=M(e);return s.A_(),new ny(r,s.connection,s.authCredentials,s.appCheckCredentials,s.serializer,i)}(n.datastore,n.asyncQueue,{ho:hy.bind(null,n),Io:gy.bind(null,n),T_:dy.bind(null,n),I_:fy.bind(null,n)}),n.v_.push(async t=>{t?(n.N_.Yo(),await ys(n)):(await n.N_.stop(),n.b_.length>0&&(R("RemoteStore",`Stopping write stream with ${n.b_.length} pending writes`),n.b_=[]))})),n.N_}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(t,e,r,i,s){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=r,this.op=i,this.removalCallback=s,this.deferred=new me,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(o=>{})}get promise(){return this.deferred.promise}static createAndSchedule(t,e,r,i,s){const o=Date.now()+r,a=new pa(t,e,o,i,s);return a.start(r),a}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){this.timerHandle!==null&&(this.clearTimeout(),this.deferred.reject(new I(g.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>this.timerHandle!==null?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){this.timerHandle!==null&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function ma(n,t){if(Se("AsyncQueue",`${t}: ${n}`),Ur(n))return new I(g.UNAVAILABLE,`${t}: ${n}`);throw n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(t){this.comparator=t?(e,r)=>t(e,r)||S.comparator(e.key,r.key):(e,r)=>S.comparator(e.key,r.key),this.keyedMap=Zn(),this.sortedSet=new _t(this.comparator)}static emptySet(t){return new Pn(t.comparator)}has(t){return this.keyedMap.get(t)!=null}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,r)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof Pn)||this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),r=t.sortedSet.getIterator();for(;e.hasNext();){const i=e.getNext().key,s=r.getNext().key;if(!i.isEqual(s))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),t.length===0?"DocumentSet ()":`DocumentSet (
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
 */class Xu{constructor(){this.B_=new _t(S.comparator)}track(t){const e=t.doc.key,r=this.B_.get(e);r?t.type!==0&&r.type===3?this.B_=this.B_.insert(e,t):t.type===3&&r.type!==1?this.B_=this.B_.insert(e,{type:r.type,doc:t.doc}):t.type===2&&r.type===2?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):t.type===2&&r.type===0?this.B_=this.B_.insert(e,{type:0,doc:t.doc}):t.type===1&&r.type===0?this.B_=this.B_.remove(e):t.type===1&&r.type===2?this.B_=this.B_.insert(e,{type:1,doc:r.doc}):t.type===0&&r.type===1?this.B_=this.B_.insert(e,{type:2,doc:t.doc}):C():this.B_=this.B_.insert(e,t)}L_(){const t=[];return this.B_.inorderTraversal((e,r)=>{t.push(r)}),t}}class Ln{constructor(t,e,r,i,s,o,a,u,l){this.query=t,this.docs=e,this.oldDocs=r,this.docChanges=i,this.mutatedKeys=s,this.fromCache=o,this.syncStateChanged=a,this.excludesMetadataChanges=u,this.hasCachedResults=l}static fromInitialDocuments(t,e,r,i,s){const o=[];return e.forEach(a=>{o.push({type:0,doc:a})}),new Ln(t,e,Pn.emptySet(e),o,r,i,!0,!1,s)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.hasCachedResults===t.hasCachedResults&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&hs(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,r=t.docChanges;if(e.length!==r.length)return!1;for(let i=0;i<e.length;i++)if(e[i].type!==r[i].type||!e[i].doc.isEqual(r[i].doc))return!1;return!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class my{constructor(){this.k_=void 0,this.listeners=[]}}class _y{constructor(){this.queries=new jn(t=>uh(t),hs),this.onlineState="Unknown",this.q_=new Set}}async function Bh(n,t){const e=M(n),r=t.query;let i=!1,s=e.queries.get(r);if(s||(i=!0,s=new my),i)try{s.k_=await e.onListen(r)}catch(o){const a=ma(o,`Initialization of query '${_n(t.query)}' failed`);return void t.onError(a)}e.queries.set(r,s),s.listeners.push(t),t.Q_(e.onlineState),s.k_&&t.K_(s.k_)&&_a(e)}async function zh(n,t){const e=M(n),r=t.query;let i=!1;const s=e.queries.get(r);if(s){const o=s.listeners.indexOf(t);o>=0&&(s.listeners.splice(o,1),i=s.listeners.length===0)}if(i)return e.queries.delete(r),e.onUnlisten(r)}function yy(n,t){const e=M(n);let r=!1;for(const i of t){const s=i.query,o=e.queries.get(s);if(o){for(const a of o.listeners)a.K_(i)&&(r=!0);o.k_=i}}r&&_a(e)}function vy(n,t,e){const r=M(n),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(e);r.queries.delete(t)}function _a(n){n.q_.forEach(t=>{t.next()})}class Gh{constructor(t,e,r){this.query=t,this.U_=e,this.W_=!1,this.G_=null,this.onlineState="Unknown",this.options=r||{}}K_(t){if(!this.options.includeMetadataChanges){const r=[];for(const i of t.docChanges)i.type!==3&&r.push(i);t=new Ln(t.query,t.docs,t.oldDocs,r,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0,t.hasCachedResults)}let e=!1;return this.W_?this.z_(t)&&(this.U_.next(t),e=!0):this.j_(t,this.onlineState)&&(this.H_(t),e=!0),this.G_=t,e}onError(t){this.U_.error(t)}Q_(t){this.onlineState=t;let e=!1;return this.G_&&!this.W_&&this.j_(this.G_,t)&&(this.H_(this.G_),e=!0),e}j_(t,e){if(!t.fromCache)return!0;const r=e!=="Offline";return(!this.options.J_||!r)&&(!t.docs.isEmpty()||t.hasCachedResults||e==="Offline")}z_(t){if(t.docChanges.length>0)return!0;const e=this.G_&&this.G_.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&this.options.includeMetadataChanges===!0}H_(t){t=Ln.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache,t.hasCachedResults),this.W_=!0,this.U_.next(t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wh{constructor(t){this.key=t}}class Kh{constructor(t){this.key=t}}class Ty{constructor(t,e){this.query=t,this.ia=e,this.sa=null,this.hasCachedResults=!1,this.current=!1,this.oa=$(),this.mutatedKeys=$(),this._a=lh(t),this.aa=new Pn(this._a)}get ua(){return this.ia}ca(t,e){const r=e?e.la:new Xu,i=e?e.aa:this.aa;let s=e?e.mutatedKeys:this.mutatedKeys,o=i,a=!1;const u=this.query.limitType==="F"&&i.size===this.query.limit?i.last():null,l=this.query.limitType==="L"&&i.size===this.query.limit?i.first():null;if(t.inorderTraversal((c,h)=>{const d=i.get(c),f=ds(this.query,h)?h:null,E=!!d&&this.mutatedKeys.has(d.key),A=!!f&&(f.hasLocalMutations||this.mutatedKeys.has(f.key)&&f.hasCommittedMutations);let y=!1;d&&f?d.data.isEqual(f.data)?E!==A&&(r.track({type:3,doc:f}),y=!0):this.ha(d,f)||(r.track({type:2,doc:f}),y=!0,(u&&this._a(f,u)>0||l&&this._a(f,l)<0)&&(a=!0)):!d&&f?(r.track({type:0,doc:f}),y=!0):d&&!f&&(r.track({type:1,doc:d}),y=!0,(u||l)&&(a=!0)),y&&(f?(o=o.add(f),s=A?s.add(c):s.delete(c)):(o=o.delete(c),s=s.delete(c)))}),this.query.limit!==null)for(;o.size>this.query.limit;){const c=this.query.limitType==="F"?o.last():o.first();o=o.delete(c.key),s=s.delete(c.key),r.track({type:1,doc:c})}return{aa:o,la:r,Zi:a,mutatedKeys:s}}ha(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,r){const i=this.aa;this.aa=t.aa,this.mutatedKeys=t.mutatedKeys;const s=t.la.L_();s.sort((l,c)=>function(d,f){const E=A=>{switch(A){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return C()}};return E(d)-E(f)}(l.type,c.type)||this._a(l.doc,c.doc)),this.Pa(r);const o=e?this.Ia():[],a=this.oa.size===0&&this.current?1:0,u=a!==this.sa;return this.sa=a,s.length!==0||u?{snapshot:new Ln(this.query,t.aa,i,s,t.mutatedKeys,a===0,u,!1,!!r&&r.resumeToken.approximateByteSize()>0),Ta:o}:{Ta:o}}Q_(t){return this.current&&t==="Offline"?(this.current=!1,this.applyChanges({aa:this.aa,la:new Xu,mutatedKeys:this.mutatedKeys,Zi:!1},!1)):{Ta:[]}}Ea(t){return!this.ia.has(t)&&!!this.aa.has(t)&&!this.aa.get(t).hasLocalMutations}Pa(t){t&&(t.addedDocuments.forEach(e=>this.ia=this.ia.add(e)),t.modifiedDocuments.forEach(e=>{}),t.removedDocuments.forEach(e=>this.ia=this.ia.delete(e)),this.current=t.current)}Ia(){if(!this.current)return[];const t=this.oa;this.oa=$(),this.aa.forEach(r=>{this.Ea(r.key)&&(this.oa=this.oa.add(r.key))});const e=[];return t.forEach(r=>{this.oa.has(r)||e.push(new Kh(r))}),this.oa.forEach(r=>{t.has(r)||e.push(new Wh(r))}),e}da(t){this.ia=t.ls,this.oa=$();const e=this.ca(t.documents);return this.applyChanges(e,!0)}Aa(){return Ln.fromInitialDocuments(this.query,this.aa,this.mutatedKeys,this.sa===0,this.hasCachedResults)}}class Ey{constructor(t,e,r){this.query=t,this.targetId=e,this.view=r}}class Iy{constructor(t){this.key=t,this.Ra=!1}}class wy{constructor(t,e,r,i,s,o){this.localStore=t,this.remoteStore=e,this.eventManager=r,this.sharedClientState=i,this.currentUser=s,this.maxConcurrentLimboResolutions=o,this.Va={},this.ma=new jn(a=>uh(a),hs),this.fa=new Map,this.ga=new Set,this.pa=new _t(S.comparator),this.ya=new Map,this.wa=new ua,this.Sa={},this.ba=new Map,this.Da=Mn.Nn(),this.onlineState="Unknown",this.Ca=void 0}get isPrimaryClient(){return this.Ca===!0}}async function Ay(n,t){const e=Oy(n);let r,i;const s=e.ma.get(t);if(s)r=s.targetId,e.sharedClientState.addLocalQueryTarget(r),i=s.view.Aa();else{const o=await H_(e.localStore,_e(t)),a=e.sharedClientState.addLocalQueryTarget(o.targetId);r=o.targetId,i=await Ry(e,t,r,a==="current",o.resumeToken),e.isPrimaryClient&&Lh(e.remoteStore,o)}return i}async function Ry(n,t,e,r,i){n.va=(h,d,f)=>async function(A,y,T,W){let x=y.view.ca(T);x.Zi&&(x=await Ku(A.localStore,y.query,!1).then(({documents:rt})=>y.view.ca(rt,x)));const K=W&&W.targetChanges.get(y.targetId),B=y.view.applyChanges(x,A.isPrimaryClient,K);return Zu(A,y.targetId,B.Ta),B.snapshot}(n,h,d,f);const s=await Ku(n.localStore,t,!0),o=new Ty(t,s.ls),a=o.ca(s.documents),u=Br.createSynthesizedTargetChangeForCurrentChange(e,r&&n.onlineState!=="Offline",i),l=o.applyChanges(a,n.isPrimaryClient,u);Zu(n,e,l.Ta);const c=new Ey(t,e,o);return n.ma.set(t,c),n.fa.has(e)?n.fa.get(e).push(t):n.fa.set(e,[t]),l.snapshot}async function Py(n,t){const e=M(n),r=e.ma.get(t),i=e.fa.get(r.targetId);if(i.length>1)return e.fa.set(r.targetId,i.filter(s=>!hs(s,t))),void e.ma.delete(t);e.isPrimaryClient?(e.sharedClientState.removeLocalQueryTarget(r.targetId),e.sharedClientState.isActiveQueryTarget(r.targetId)||await fo(e.localStore,r.targetId,!1).then(()=>{e.sharedClientState.clearQueryState(r.targetId),xh(e.remoteStore,r.targetId),go(e,r.targetId)}).catch(Fr)):(go(e,r.targetId),await fo(e.localStore,r.targetId,!0))}async function Sy(n,t,e){const r=My(n);try{const i=await function(o,a){const u=M(o),l=St.now(),c=a.reduce((f,E)=>f.add(E.key),$());let h,d;return u.persistence.runTransaction("Locally write mutations","readwrite",f=>{let E=Ce(),A=$();return u.ss.getEntries(f,c).next(y=>{E=y,E.forEach((T,W)=>{W.isValidDocument()||(A=A.add(T))})}).next(()=>u.localDocuments.getOverlayedDocuments(f,E)).next(y=>{h=y;const T=[];for(const W of a){const x=e_(W,h.get(W.key).overlayedDocument);x!=null&&T.push(new Ke(W.key,x,th(x.value.mapValue),Zt.exists(!0)))}return u.mutationQueue.addMutationBatch(f,l,T,a)}).next(y=>{d=y;const T=y.applyToLocalDocumentSet(h,A);return u.documentOverlayCache.saveOverlays(f,y.batchId,T)})}).then(()=>({batchId:d.batchId,changes:hh(h)}))}(r.localStore,t);r.sharedClientState.addPendingMutation(i.batchId),function(o,a,u){let l=o.Sa[o.currentUser.toKey()];l||(l=new _t(X)),l=l.insert(a,u),o.Sa[o.currentUser.toKey()]=l}(r,i.batchId,e),await Gr(r,i.changes),await ys(r.remoteStore)}catch(i){const s=ma(i,"Failed to persist write");e.reject(s)}}async function Hh(n,t){const e=M(n);try{const r=await G_(e.localStore,t);t.targetChanges.forEach((i,s)=>{const o=e.ya.get(s);o&&(tt(i.addedDocuments.size+i.modifiedDocuments.size+i.removedDocuments.size<=1),i.addedDocuments.size>0?o.Ra=!0:i.modifiedDocuments.size>0?tt(o.Ra):i.removedDocuments.size>0&&(tt(o.Ra),o.Ra=!1))}),await Gr(e,r,t)}catch(r){await Fr(r)}}function Ju(n,t,e){const r=M(n);if(r.isPrimaryClient&&e===0||!r.isPrimaryClient&&e===1){const i=[];r.ma.forEach((s,o)=>{const a=o.view.Q_(t);a.snapshot&&i.push(a.snapshot)}),function(o,a){const u=M(o);u.onlineState=a;let l=!1;u.queries.forEach((c,h)=>{for(const d of h.listeners)d.Q_(a)&&(l=!0)}),l&&_a(u)}(r.eventManager,t),i.length&&r.Va.a_(i),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Cy(n,t,e){const r=M(n);r.sharedClientState.updateQueryState(t,"rejected",e);const i=r.ya.get(t),s=i&&i.key;if(s){let o=new _t(S.comparator);o=o.insert(s,kt.newNoDocument(s,N.min()));const a=$().add(s),u=new ps(N.min(),new Map,new _t(X),o,a);await Hh(r,u),r.pa=r.pa.remove(s),r.ya.delete(t),ya(r)}else await fo(r.localStore,t,!1).then(()=>go(r,t,e)).catch(Fr)}async function ky(n,t){const e=M(n),r=t.batch.batchId;try{const i=await z_(e.localStore,t);Yh(e,r,null),Qh(e,r),e.sharedClientState.updateMutationState(r,"acknowledged"),await Gr(e,i)}catch(i){await Fr(i)}}async function Vy(n,t,e){const r=M(n);try{const i=await function(o,a){const u=M(o);return u.persistence.runTransaction("Reject batch","readwrite-primary",l=>{let c;return u.mutationQueue.lookupMutationBatch(l,a).next(h=>(tt(h!==null),c=h.keys(),u.mutationQueue.removeMutationBatch(l,h))).next(()=>u.mutationQueue.performConsistencyCheck(l)).next(()=>u.documentOverlayCache.removeOverlaysForBatchId(l,c,a)).next(()=>u.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(l,c)).next(()=>u.localDocuments.getDocuments(l,c))})}(r.localStore,t);Yh(r,t,e),Qh(r,t),r.sharedClientState.updateMutationState(t,"rejected",e),await Gr(r,i)}catch(i){await Fr(i)}}function Qh(n,t){(n.ba.get(t)||[]).forEach(e=>{e.resolve()}),n.ba.delete(t)}function Yh(n,t,e){const r=M(n);let i=r.Sa[r.currentUser.toKey()];if(i){const s=i.get(t);s&&(e?s.reject(e):s.resolve(),i=i.remove(t)),r.Sa[r.currentUser.toKey()]=i}}function go(n,t,e=null){n.sharedClientState.removeLocalQueryTarget(t);for(const r of n.fa.get(t))n.ma.delete(r),e&&n.Va.Fa(r,e);n.fa.delete(t),n.isPrimaryClient&&n.wa.Rr(t).forEach(r=>{n.wa.containsKey(r)||Xh(n,r)})}function Xh(n,t){n.ga.delete(t.path.canonicalString());const e=n.pa.get(t);e!==null&&(xh(n.remoteStore,e),n.pa=n.pa.remove(t),n.ya.delete(e),ya(n))}function Zu(n,t,e){for(const r of e)r instanceof Wh?(n.wa.addReference(r.key,t),Ny(n,r)):r instanceof Kh?(R("SyncEngine","Document no longer in limbo: "+r.key),n.wa.removeReference(r.key,t),n.wa.containsKey(r.key)||Xh(n,r.key)):C()}function Ny(n,t){const e=t.key,r=e.path.canonicalString();n.pa.get(e)||n.ga.has(r)||(R("SyncEngine","New document in limbo: "+e),n.ga.add(r),ya(n))}function ya(n){for(;n.ga.size>0&&n.pa.size<n.maxConcurrentLimboResolutions;){const t=n.ga.values().next().value;n.ga.delete(t);const e=new S(ft.fromString(t)),r=n.Da.next();n.ya.set(r,new Iy(e)),n.pa=n.pa.insert(e,r),Lh(n.remoteStore,new Me(_e(ra(e.path)),r,"TargetPurposeLimboResolution",Xo._e))}}async function Gr(n,t,e){const r=M(n),i=[],s=[],o=[];r.ma.isEmpty()||(r.ma.forEach((a,u)=>{o.push(r.va(u,t,e).then(l=>{if((l||e)&&r.isPrimaryClient&&r.sharedClientState.updateQueryState(u.targetId,l!=null&&l.fromCache?"not-current":"current"),l){i.push(l);const c=ca.Qi(u.targetId,l);s.push(c)}}))}),await Promise.all(o),r.Va.a_(i),await async function(u,l){const c=M(u);try{await c.persistence.runTransaction("notifyLocalViewChanges","readwrite",h=>p.forEach(l,d=>p.forEach(d.ki,f=>c.persistence.referenceDelegate.addReference(h,d.targetId,f)).next(()=>p.forEach(d.qi,f=>c.persistence.referenceDelegate.removeReference(h,d.targetId,f)))))}catch(h){if(!Ur(h))throw h;R("LocalStore","Failed to update sequence numbers: "+h)}for(const h of l){const d=h.targetId;if(!h.fromCache){const f=c.ts.get(d),E=f.snapshotVersion,A=f.withLastLimboFreeSnapshotVersion(E);c.ts=c.ts.insert(d,A)}}}(r.localStore,s))}async function Dy(n,t){const e=M(n);if(!e.currentUser.isEqual(t)){R("SyncEngine","User change. New user:",t.toKey());const r=await bh(e.localStore,t);e.currentUser=t,function(s,o){s.ba.forEach(a=>{a.forEach(u=>{u.reject(new I(g.CANCELLED,o))})}),s.ba.clear()}(e,"'waitForPendingWrites' promise is rejected due to a user change."),e.sharedClientState.handleUserChange(t,r.removedBatchIds,r.addedBatchIds),await Gr(e,r._s)}}function by(n,t){const e=M(n),r=e.ya.get(t);if(r&&r.Ra)return $().add(r.key);{let i=$();const s=e.fa.get(t);if(!s)return i;for(const o of s){const a=e.ma.get(o);i=i.unionWith(a.view.ua)}return i}}function Oy(n){const t=M(n);return t.remoteStore.remoteSyncer.applyRemoteEvent=Hh.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=by.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Cy.bind(null,t),t.Va.a_=yy.bind(null,t.eventManager),t.Va.Fa=vy.bind(null,t.eventManager),t}function My(n){const t=M(n);return t.remoteStore.remoteSyncer.applySuccessfulWrite=ky.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=Vy.bind(null,t),t}class tl{constructor(){this.synchronizeTabs=!1}async initialize(t){this.serializer=ms(t.databaseInfo.databaseId),this.sharedClientState=this.createSharedClientState(t),this.persistence=this.createPersistence(t),await this.persistence.start(),this.localStore=this.createLocalStore(t),this.gcScheduler=this.createGarbageCollectionScheduler(t,this.localStore),this.indexBackfillerScheduler=this.createIndexBackfillerScheduler(t,this.localStore)}createGarbageCollectionScheduler(t,e){return null}createIndexBackfillerScheduler(t,e){return null}createLocalStore(t){return B_(this.persistence,new q_,t.initialUser,this.serializer)}createPersistence(t){return new F_(la.jr,this.serializer)}createSharedClientState(t){return new Y_}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class Ly{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=r=>Ju(this.syncEngine,r,1),this.remoteStore.remoteSyncer.handleCredentialChange=Dy.bind(null,this.syncEngine),await py(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return function(){return new _y}()}createDatastore(t){const e=ms(t.databaseInfo.databaseId),r=function(s){return new ty(s)}(t.databaseInfo);return function(s,o,a,u){return new ry(s,o,a,u)}(t.authCredentials,t.appCheckCredentials,r,e)}createRemoteStore(t){return function(r,i,s,o,a){return new sy(r,i,s,o,a)}(this.localStore,this.datastore,t.asyncQueue,e=>Ju(this.syncEngine,e,0),function(){return Qu.D()?new Qu:new X_}())}createSyncEngine(t,e){return function(i,s,o,a,u,l,c){const h=new wy(i,s,o,a,u,l);return c&&(h.Ca=!0),h}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(e){const r=M(e);R("RemoteStore","RemoteStore shutting down."),r.C_.add(5),await zr(r),r.F_.shutdown(),r.M_.set("Unknown")}(this.remoteStore)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class Jh{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Oa(this.observer.next,t)}error(t){this.observer.error?this.Oa(this.observer.error,t):Se("Uncaught Error in snapshot listener:",t.toString())}Na(){this.muted=!0}Oa(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xy{constructor(t){this.datastore=t,this.readVersions=new Map,this.mutations=[],this.committed=!1,this.lastWriteError=null,this.writtenDocs=new Set}async lookup(t){if(this.ensureCommitNotCalled(),this.mutations.length>0)throw new I(g.INVALID_ARGUMENT,"Firestore transactions require all reads to be executed before all writes.");const e=await async function(i,s){const o=M(i),a=Ar(o.serializer)+"/documents",u={documents:s.map(d=>xi(o.serializer,d))},l=await o.Co("BatchGetDocuments",a,u,s.length),c=new Map;l.forEach(d=>{const f=g_(o.serializer,d);c.set(f.key.toString(),f)});const h=[];return s.forEach(d=>{const f=c.get(d.toString());tt(!!f),h.push(f)}),h}(this.datastore,t);return e.forEach(r=>this.recordVersion(r)),e}set(t,e){this.write(e.toMutation(t,this.precondition(t))),this.writtenDocs.add(t.toString())}update(t,e){try{this.write(e.toMutation(t,this.preconditionForUpdate(t)))}catch(r){this.lastWriteError=r}this.writtenDocs.add(t.toString())}delete(t){this.write(new ia(t,this.precondition(t))),this.writtenDocs.add(t.toString())}async commit(){if(this.ensureCommitNotCalled(),this.lastWriteError)throw this.lastWriteError;const t=this.readVersions;this.mutations.forEach(e=>{t.delete(e.key.toString())}),t.forEach((e,r)=>{const i=S.fromPath(r);this.mutations.push(new Eh(i,this.precondition(i)))}),await async function(r,i){const s=M(r),o=Ar(s.serializer)+"/documents",a={writes:i.map(u=>kh(s.serializer,u))};await s.wo("Commit",o,a)}(this.datastore,this.mutations),this.committed=!0}recordVersion(t){let e;if(t.isFoundDocument())e=t.version;else{if(!t.isNoDocument())throw C();e=N.min()}const r=this.readVersions.get(t.key.toString());if(r){if(!e.isEqual(r))throw new I(g.ABORTED,"Document version changed between two reads.")}else this.readVersions.set(t.key.toString(),e)}precondition(t){const e=this.readVersions.get(t.toString());return!this.writtenDocs.has(t.toString())&&e?e.isEqual(N.min())?Zt.exists(!1):Zt.updateTime(e):Zt.none()}preconditionForUpdate(t){const e=this.readVersions.get(t.toString());if(!this.writtenDocs.has(t.toString())&&e){if(e.isEqual(N.min()))throw new I(g.INVALID_ARGUMENT,"Can't update a document that doesn't exist.");return Zt.updateTime(e)}return Zt.exists(!0)}write(t){this.ensureCommitNotCalled(),this.mutations.push(t)}ensureCommitNotCalled(){}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fy{constructor(t,e,r,i,s){this.asyncQueue=t,this.datastore=e,this.options=r,this.updateFunction=i,this.deferred=s,this.Wa=r.maxAttempts,this.zo=new ha(this.asyncQueue,"transaction_retry")}run(){this.Wa-=1,this.Ga()}Ga(){this.zo.ko(async()=>{const t=new xy(this.datastore),e=this.za(t);e&&e.then(r=>{this.asyncQueue.enqueueAndForget(()=>t.commit().then(()=>{this.deferred.resolve(r)}).catch(i=>{this.ja(i)}))}).catch(r=>{this.ja(r)})})}za(t){try{const e=this.updateFunction(t);return!$r(e)&&e.catch&&e.then?e:(this.deferred.reject(Error("Transaction callback must return a Promise")),null)}catch(e){return this.deferred.reject(e),null}}ja(t){this.Wa>0&&this.Ha(t)?(this.Wa-=1,this.asyncQueue.enqueueAndForget(()=>(this.Ga(),Promise.resolve()))):this.deferred.reject(t)}Ha(t){if(t.name==="FirebaseError"){const e=t.code;return e==="aborted"||e==="failed-precondition"||e==="already-exists"||!Ih(e)}return!1}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Uy{constructor(t,e,r,i){this.authCredentials=t,this.appCheckCredentials=e,this.asyncQueue=r,this.databaseInfo=i,this.user=Ut.UNAUTHENTICATED,this.clientId=Xc.newId(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(r,async s=>{R("FirestoreClient","Received user=",s.uid),await this.authCredentialListener(s),this.user=s}),this.appCheckCredentials.start(r,s=>(R("FirestoreClient","Received new app check token=",s),this.appCheckCredentialListener(s,this.user)))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.authCredentialListener=t}setAppCheckTokenChangeListener(t){this.appCheckCredentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new I(g.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new me;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this._onlineComponents&&await this._onlineComponents.terminate(),this._offlineComponents&&await this._offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),t.resolve()}catch(e){const r=ma(e,"Failed to shutdown persistence");t.reject(r)}}),t.promise}}async function qs(n,t){n.asyncQueue.verifyOperationInProgress(),R("FirestoreClient","Initializing OfflineComponentProvider");const e=await n.getConfiguration();await t.initialize(e);let r=e.initialUser;n.setCredentialChangeListener(async i=>{r.isEqual(i)||(await bh(t.localStore,i),r=i)}),t.persistence.setDatabaseDeletedListener(()=>n.terminate()),n._offlineComponents=t}async function el(n,t){n.asyncQueue.verifyOperationInProgress();const e=await qy(n);R("FirestoreClient","Initializing OnlineComponentProvider");const r=await n.getConfiguration();await t.initialize(e,r),n.setCredentialChangeListener(i=>Yu(t.remoteStore,i)),n.setAppCheckTokenChangeListener((i,s)=>Yu(t.remoteStore,s)),n._onlineComponents=t}function $y(n){return n.name==="FirebaseError"?n.code===g.FAILED_PRECONDITION||n.code===g.UNIMPLEMENTED:!(typeof DOMException<"u"&&n instanceof DOMException)||n.code===22||n.code===20||n.code===11}async function qy(n){if(!n._offlineComponents)if(n._uninitializedComponentsProvider){R("FirestoreClient","Using user provided OfflineComponentProvider");try{await qs(n,n._uninitializedComponentsProvider._offline)}catch(t){const e=t;if(!$y(e))throw e;Nn("Error using user provided cache. Falling back to memory cache: "+e),await qs(n,new tl)}}else R("FirestoreClient","Using default OfflineComponentProvider"),await qs(n,new tl);return n._offlineComponents}async function va(n){return n._onlineComponents||(n._uninitializedComponentsProvider?(R("FirestoreClient","Using user provided OnlineComponentProvider"),await el(n,n._uninitializedComponentsProvider._online)):(R("FirestoreClient","Using default OnlineComponentProvider"),await el(n,new Ly))),n._onlineComponents}function jy(n){return va(n).then(t=>t.syncEngine)}function By(n){return va(n).then(t=>t.datastore)}async function Zh(n){const t=await va(n),e=t.eventManager;return e.onListen=Ay.bind(null,t.syncEngine),e.onUnlisten=Py.bind(null,t.syncEngine),e}function zy(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new Jh({next:d=>{o.enqueueAndForget(()=>zh(s,h));const f=d.docs.has(a);!f&&d.fromCache?l.reject(new I(g.UNAVAILABLE,"Failed to get document because the client is offline.")):f&&d.fromCache&&u&&u.source==="server"?l.reject(new I(g.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Gh(ra(a.path),c,{includeMetadataChanges:!0,J_:!0});return Bh(s,h)}(await Zh(n),n.asyncQueue,t,e,r)),r.promise}function Gy(n,t,e={}){const r=new me;return n.asyncQueue.enqueueAndForget(async()=>function(s,o,a,u,l){const c=new Jh({next:d=>{o.enqueueAndForget(()=>zh(s,h)),d.fromCache&&u.source==="server"?l.reject(new I(g.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):l.resolve(d)},error:d=>l.reject(d)}),h=new Gh(a,c,{includeMetadataChanges:!0,J_:!0});return Bh(s,h)}(await Zh(n),n.asyncQueue,t,e,r)),r.promise}/**
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
 */const nl=new Map;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ed(n,t,e){if(!e)throw new I(g.INVALID_ARGUMENT,`Function ${n}() cannot be called with an empty ${t}.`)}function Wy(n,t,e,r){if(t===!0&&r===!0)throw new I(g.INVALID_ARGUMENT,`${n} and ${e} cannot be used together.`)}function rl(n){if(!S.isDocumentKey(n))throw new I(g.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${n} has ${n.length}.`)}function il(n){if(S.isDocumentKey(n))throw new I(g.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${n} has ${n.length}.`)}function vs(n){if(n===void 0)return"undefined";if(n===null)return"null";if(typeof n=="string")return n.length>20&&(n=`${n.substring(0,20)}...`),JSON.stringify(n);if(typeof n=="number"||typeof n=="boolean")return""+n;if(typeof n=="object"){if(n instanceof Array)return"an array";{const t=function(r){return r.constructor?r.constructor.name:null}(n);return t?`a custom ${t} object`:"an object"}}return typeof n=="function"?"a function":C()}function Be(n,t){if("_delegate"in n&&(n=n._delegate),!(n instanceof t)){if(t.name===n.constructor.name)throw new I(g.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const e=vs(n);throw new I(g.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${e}`)}}return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(t){var e,r;if(t.host===void 0){if(t.ssl!==void 0)throw new I(g.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=(e=t.ssl)===null||e===void 0||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,this.localCache=t.localCache,t.cacheSizeBytes===void 0)this.cacheSizeBytes=41943040;else{if(t.cacheSizeBytes!==-1&&t.cacheSizeBytes<1048576)throw new I(g.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}Wy("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling),this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalForceLongPolling?this.experimentalAutoDetectLongPolling=!1:t.experimentalAutoDetectLongPolling===void 0?this.experimentalAutoDetectLongPolling=!0:this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.experimentalLongPollingOptions=td((r=t.experimentalLongPollingOptions)!==null&&r!==void 0?r:{}),function(s){if(s.timeoutSeconds!==void 0){if(isNaN(s.timeoutSeconds))throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (must not be NaN)`);if(s.timeoutSeconds<5)throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (minimum allowed value is 5)`);if(s.timeoutSeconds>30)throw new I(g.INVALID_ARGUMENT,`invalid long polling timeout: ${s.timeoutSeconds} (maximum allowed value is 30)`)}}(this.experimentalLongPollingOptions),this.useFetchStreams=!!t.useFetchStreams}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&function(r,i){return r.timeoutSeconds===i.timeoutSeconds}(this.experimentalLongPollingOptions,t.experimentalLongPollingOptions)&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}class Ts{constructor(t,e,r,i){this._authCredentials=t,this._appCheckCredentials=e,this._databaseId=r,this._app=i,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new sl({}),this._settingsFrozen=!1}get app(){if(!this._app)throw new I(g.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return this._terminateTask!==void 0}_setSettings(t){if(this._settingsFrozen)throw new I(g.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new sl(t),t.credentials!==void 0&&(this._authCredentials=function(r){if(!r)return new dm;switch(r.type){case"firstParty":return new mm(r.sessionIndex||"0",r.iamToken||null,r.authTokenFactory||null);case"provider":return r.client;default:throw new I(g.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const r=nl.get(e);r&&(R("ComponentProvider","Removing Datastore"),nl.delete(e),r.terminate())}(this),Promise.resolve()}}function Ky(n,t,e,r={}){var i;const s=(n=Be(n,Ts))._getSettings(),o=`${t}:${e}`;if(s.host!=="firestore.googleapis.com"&&s.host!==o&&Nn("Host has been set in both settings() and connectFirestoreEmulator(), emulator host will be used."),n._setSettings(Object.assign(Object.assign({},s),{host:o,ssl:!1})),r.mockUserToken){let a,u;if(typeof r.mockUserToken=="string")a=r.mockUserToken,u=Ut.MOCK_USER;else{a=xd(r.mockUserToken,(i=n._app)===null||i===void 0?void 0:i.options.projectId);const l=r.mockUserToken.sub||r.mockUserToken.user_id;if(!l)throw new I(g.INVALID_ARGUMENT,"mockUserToken must contain 'sub' or 'user_id' field!");u=new Ut(l)}n._authCredentials=new fm(new Yc(a,u))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zn{constructor(t,e,r){this.converter=e,this._query=r,this.type="query",this.firestore=t}withConverter(t){return new zn(this.firestore,t,this._query)}}class Xt{constructor(t,e,r){this.converter=e,this._key=r,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Ue(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Xt(this.firestore,t,this._key)}}class Ue extends zn{constructor(t,e,r){super(t,e,ra(r)),this._path=r,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Xt(this.firestore,null,new S(t))}withConverter(t){return new Ue(this.firestore,t,this._path)}}function nd(n,t,...e){if(n=Vt(n),ed("collection","path",t),n instanceof Ts){const r=ft.fromString(t,...e);return il(r),new Ue(n,null,r)}{if(!(n instanceof Xt||n instanceof Ue))throw new I(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return il(r),new Ue(n.firestore,null,r)}}function Ui(n,t,...e){if(n=Vt(n),arguments.length===1&&(t=Xc.newId()),ed("doc","path",t),n instanceof Ts){const r=ft.fromString(t,...e);return rl(r),new Xt(n,null,new S(r))}{if(!(n instanceof Xt||n instanceof Ue))throw new I(g.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=n._path.child(ft.fromString(t,...e));return rl(r),new Xt(n.firestore,n instanceof Ue?n.converter:null,new S(r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hy{constructor(){this.Ja=Promise.resolve(),this.Ya=[],this.Za=!1,this.Xa=[],this.eu=null,this.tu=!1,this.nu=!1,this.ru=[],this.zo=new ha(this,"async_queue_retry"),this.iu=()=>{const e=$s();e&&R("AsyncQueue","Visibility state changed to "+e.visibilityState),this.zo.Qo()};const t=$s();t&&typeof t.addEventListener=="function"&&t.addEventListener("visibilitychange",this.iu)}get isShuttingDown(){return this.Za}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.su(),this.ou(t)}enterRestrictedMode(t){if(!this.Za){this.Za=!0,this.nu=t||!1;const e=$s();e&&typeof e.removeEventListener=="function"&&e.removeEventListener("visibilitychange",this.iu)}}enqueue(t){if(this.su(),this.Za)return new Promise(()=>{});const e=new me;return this.ou(()=>this.Za&&this.nu?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.Ya.push(t),this._u()))}async _u(){if(this.Ya.length!==0){try{await this.Ya[0](),this.Ya.shift(),this.zo.reset()}catch(t){if(!Ur(t))throw t;R("AsyncQueue","Operation failed with retryable error: "+t)}this.Ya.length>0&&this.zo.ko(()=>this._u())}}ou(t){const e=this.Ja.then(()=>(this.tu=!0,t().catch(r=>{this.eu=r,this.tu=!1;const i=function(o){let a=o.message||"";return o.stack&&(a=o.stack.includes(o.message)?o.stack:o.message+`
`+o.stack),a}(r);throw Se("INTERNAL UNHANDLED ERROR: ",i),r}).then(r=>(this.tu=!1,r))));return this.Ja=e,e}enqueueAfterDelay(t,e,r){this.su(),this.ru.indexOf(t)>-1&&(e=0);const i=pa.createAndSchedule(this,t,e,r,s=>this.au(s));return this.Xa.push(i),i}su(){this.eu&&C()}verifyOperationInProgress(){}async uu(){let t;do t=this.Ja,await t;while(t!==this.Ja)}cu(t){for(const e of this.Xa)if(e.timerId===t)return!0;return!1}lu(t){return this.uu().then(()=>{this.Xa.sort((e,r)=>e.targetTimeMs-r.targetTimeMs);for(const e of this.Xa)if(e.skipDelay(),t!=="all"&&e.timerId===t)break;return this.uu()})}hu(t){this.ru.push(t)}au(t){const e=this.Xa.indexOf(t);this.Xa.splice(e,1)}}class Wr extends Ts{constructor(t,e,r,i){super(t,e,r,i),this.type="firestore",this._queue=function(){return new Hy}(),this._persistenceKey=(i==null?void 0:i.name)||"[DEFAULT]"}_terminate(){return this._firestoreClient||rd(this),this._firestoreClient.terminate()}}function nn(n,t){const e=typeof n=="object"?n:gl(),r=typeof n=="string"?n:t||"(default)",i=_o(e,"firestore").getImmediate({identifier:r});if(!i._initialized){const s=Ld("firestore");s&&Ky(i,...s)}return i}function Es(n){return n._firestoreClient||rd(n),n._firestoreClient.verifyNotTerminated(),n._firestoreClient}function rd(n){var t,e,r;const i=n._freezeSettings(),s=function(a,u,l,c){return new Cm(a,u,l,c.host,c.ssl,c.experimentalForceLongPolling,c.experimentalAutoDetectLongPolling,td(c.experimentalLongPollingOptions),c.useFetchStreams)}(n._databaseId,((t=n._app)===null||t===void 0?void 0:t.options.appId)||"",n._persistenceKey,i);n._firestoreClient=new Uy(n._authCredentials,n._appCheckCredentials,n._queue,s),!((e=i.localCache)===null||e===void 0)&&e._offlineComponentProvider&&(!((r=i.localCache)===null||r===void 0)&&r._onlineComponentProvider)&&(n._firestoreClient._uninitializedComponentsProvider={_offlineKind:i.localCache.kind,_offline:i.localCache._offlineComponentProvider,_online:i.localCache._onlineComponentProvider})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(t){this._byteString=t}static fromBase64String(t){try{return new cn(jt.fromBase64String(t))}catch(e){throw new I(g.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(t){return new cn(jt.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Is{constructor(...t){for(let e=0;e<t.length;++e)if(t[e].length===0)throw new I(g.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new Mt(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ta{constructor(t){this._methodName=t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ea{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new I(g.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new I(g.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return X(this._lat,t._lat)||X(this._long,t._long)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qy=/^__.*__$/;class Yy{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return this.fieldMask!==null?new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms):new jr(t,this.data,e,this.fieldTransforms)}}class id{constructor(t,e,r){this.data=t,this.fieldMask=e,this.fieldTransforms=r}toMutation(t,e){return new Ke(t,this.data,this.fieldMask,e,this.fieldTransforms)}}function sd(n){switch(n){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw C()}}class Ia{constructor(t,e,r,i,s,o){this.settings=t,this.databaseId=e,this.serializer=r,this.ignoreUndefinedProperties=i,s===void 0&&this.Pu(),this.fieldTransforms=s||[],this.fieldMask=o||[]}get path(){return this.settings.path}get Iu(){return this.settings.Iu}Tu(t){return new Ia(Object.assign(Object.assign({},this.settings),t),this.databaseId,this.serializer,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Eu(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Au(t),i}Ru(t){var e;const r=(e=this.path)===null||e===void 0?void 0:e.child(t),i=this.Tu({path:r,du:!1});return i.Pu(),i}Vu(t){return this.Tu({path:void 0,du:!0})}mu(t){return $i(t,this.settings.methodName,this.settings.fu||!1,this.path,this.settings.gu)}contains(t){return this.fieldMask.find(e=>t.isPrefixOf(e))!==void 0||this.fieldTransforms.find(e=>t.isPrefixOf(e.field))!==void 0}Pu(){if(this.path)for(let t=0;t<this.path.length;t++)this.Au(this.path.get(t))}Au(t){if(t.length===0)throw this.mu("Document fields must not be empty");if(sd(this.Iu)&&Qy.test(t))throw this.mu('Document fields cannot begin and end with "__"')}}class Xy{constructor(t,e,r){this.databaseId=t,this.ignoreUndefinedProperties=e,this.serializer=r||ms(t)}pu(t,e,r,i=!1){return new Ia({Iu:t,methodName:e,gu:r,path:Mt.emptyPath(),du:!1,fu:i},this.databaseId,this.serializer,this.ignoreUndefinedProperties)}}function wa(n){const t=n._freezeSettings(),e=ms(n._databaseId);return new Xy(n._databaseId,!!t.ignoreUndefinedProperties,e)}function od(n,t,e,r,i,s={}){const o=n.pu(s.merge||s.mergeFields?2:0,t,e,i);Aa("Data must be an object, but it was:",o,r);const a=ad(r,o);let u,l;if(s.merge)u=new ee(o.fieldMask),l=o.fieldTransforms;else if(s.mergeFields){const c=[];for(const h of s.mergeFields){const d=po(t,h,e);if(!o.contains(d))throw new I(g.INVALID_ARGUMENT,`Field '${d}' is specified in your field mask but missing from your input data.`);ld(c,d)||c.push(d)}u=new ee(c),l=o.fieldTransforms.filter(h=>u.covers(h.field))}else u=null,l=o.fieldTransforms;return new Yy(new Kt(a),u,l)}class ws extends Ta{_toFieldTransform(t){if(t.Iu!==2)throw t.Iu===1?t.mu(`${this._methodName}() can only appear at the top level of your update data`):t.mu(`${this._methodName}() cannot be used with set() unless you pass {merge:true}`);return t.fieldMask.push(t.path),null}isEqual(t){return t instanceof ws}}function Jy(n,t,e,r){const i=n.pu(1,t,e);Aa("Data must be an object, but it was:",i,r);const s=[],o=Kt.empty();dn(r,(u,l)=>{const c=Ra(t,u,e);l=Vt(l);const h=i.Ru(c);if(l instanceof ws)s.push(c);else{const d=Kr(l,h);d!=null&&(s.push(c),o.set(c,d))}});const a=new ee(s);return new id(o,a,i.fieldTransforms)}function Zy(n,t,e,r,i,s){const o=n.pu(1,t,e),a=[po(t,r,e)],u=[i];if(s.length%2!=0)throw new I(g.INVALID_ARGUMENT,`Function ${t}() needs to be called with an even number of arguments that alternate between field names and values.`);for(let d=0;d<s.length;d+=2)a.push(po(t,s[d])),u.push(s[d+1]);const l=[],c=Kt.empty();for(let d=a.length-1;d>=0;--d)if(!ld(l,a[d])){const f=a[d];let E=u[d];E=Vt(E);const A=o.Ru(f);if(E instanceof ws)l.push(f);else{const y=Kr(E,A);y!=null&&(l.push(f),c.set(f,y))}}const h=new ee(l);return new id(c,h,o.fieldTransforms)}function tv(n,t,e,r=!1){return Kr(e,n.pu(r?4:3,t))}function Kr(n,t){if(ud(n=Vt(n)))return Aa("Unsupported field value:",t,n),ad(n,t);if(n instanceof Ta)return function(r,i){if(!sd(i.Iu))throw i.mu(`${r._methodName}() can only be used with update() and set()`);if(!i.path)throw i.mu(`${r._methodName}() is not currently supported inside arrays`);const s=r._toFieldTransform(i);s&&i.fieldTransforms.push(s)}(n,t),null;if(n===void 0&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),n instanceof Array){if(t.settings.du&&t.Iu!==4)throw t.mu("Nested arrays are not supported");return function(r,i){const s=[];let o=0;for(const a of r){let u=Kr(a,i.Vu(o));u==null&&(u={nullValue:"NULL_VALUE"}),s.push(u),o++}return{arrayValue:{values:s}}}(n,t)}return function(r,i){if((r=Vt(r))===null)return{nullValue:"NULL_VALUE"};if(typeof r=="number")return Qm(i.serializer,r);if(typeof r=="boolean")return{booleanValue:r};if(typeof r=="string")return{stringValue:r};if(r instanceof Date){const s=St.fromDate(r);return{timestampValue:Li(i.serializer,s)}}if(r instanceof St){const s=new St(r.seconds,1e3*Math.floor(r.nanoseconds/1e3));return{timestampValue:Li(i.serializer,s)}}if(r instanceof Ea)return{geoPointValue:{latitude:r.latitude,longitude:r.longitude}};if(r instanceof cn)return{bytesValue:Ph(i.serializer,r._byteString)};if(r instanceof Xt){const s=i.databaseId,o=r.firestore._databaseId;if(!o.isEqual(s))throw i.mu(`Document reference is for database ${o.projectId}/${o.database} but should be for database ${s.projectId}/${s.database}`);return{referenceValue:aa(r.firestore._databaseId||i.databaseId,r._key.path)}}throw i.mu(`Unsupported field value: ${vs(r)}`)}(n,t)}function ad(n,t){const e={};return Jc(n)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):dn(n,(r,i)=>{const s=Kr(i,t.Eu(r));s!=null&&(e[r]=s)}),{mapValue:{fields:e}}}function ud(n){return!(typeof n!="object"||n===null||n instanceof Array||n instanceof Date||n instanceof St||n instanceof Ea||n instanceof cn||n instanceof Xt||n instanceof Ta)}function Aa(n,t,e){if(!ud(e)||!function(i){return typeof i=="object"&&i!==null&&(Object.getPrototypeOf(i)===Object.prototype||Object.getPrototypeOf(i)===null)}(e)){const r=vs(e);throw r==="an object"?t.mu(n+" a custom object"):t.mu(n+" "+r)}}function po(n,t,e){if((t=Vt(t))instanceof Is)return t._internalPath;if(typeof t=="string")return Ra(n,t);throw $i("Field path arguments must be of type string or ",n,!1,void 0,e)}const ev=new RegExp("[~\\*/\\[\\]]");function Ra(n,t,e){if(t.search(ev)>=0)throw $i(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,n,!1,void 0,e);try{return new Is(...t.split("."))._internalPath}catch{throw $i(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,n,!1,void 0,e)}}function $i(n,t,e,r,i){const s=r&&!r.isEmpty(),o=i!==void 0;let a=`Function ${t}() called with invalid data`;e&&(a+=" (via `toFirestore()`)"),a+=". ";let u="";return(s||o)&&(u+=" (found",s&&(u+=` in field ${r}`),o&&(u+=` in document ${i}`),u+=")"),new I(g.INVALID_ARGUMENT,a+n+u)}function ld(n,t){return n.some(e=>e.isEqual(t))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qi{constructor(t,e,r,i,s){this._firestore=t,this._userDataWriter=e,this._key=r,this._document=i,this._converter=s}get id(){return this._key.path.lastSegment()}get ref(){return new Xt(this._firestore,this._converter,this._key)}exists(){return this._document!==null}data(){if(this._document){if(this._converter){const t=new nv(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(cd("DocumentSnapshot.get",t));if(e!==null)return this._userDataWriter.convertValue(e)}}}class nv extends qi{data(){return super.data()}}function cd(n,t){return typeof t=="string"?Ra(n,t):t instanceof Is?t._internalPath:t._delegate._internalPath}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rv(n){if(n.limitType==="L"&&n.explicitOrderBy.length===0)throw new I(g.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Pa{}class iv extends Pa{}function hd(n,t,...e){let r=[];t instanceof Pa&&r.push(t),r=r.concat(e),function(s){const o=s.filter(u=>u instanceof Ca).length,a=s.filter(u=>u instanceof Sa).length;if(o>1||o>0&&a>0)throw new I(g.INVALID_ARGUMENT,"InvalidQuery. When using composite filters, you cannot use more than one filter at the top level. Consider nesting the multiple filters within an `and(...)` statement. For example: change `query(query, where(...), or(...))` to `query(query, and(where(...), or(...)))`.")}(r);for(const i of r)n=i._apply(n);return n}class Sa extends iv{constructor(t,e,r){super(),this._field=t,this._op=e,this._value=r,this.type="where"}static _create(t,e,r){return new Sa(t,e,r)}_apply(t){const e=this._parse(t);return dd(t._query,e),new zn(t.firestore,t.converter,uo(t._query,e))}_parse(t){const e=wa(t.firestore);return function(s,o,a,u,l,c,h){let d;if(l.isKeyField()){if(c==="array-contains"||c==="array-contains-any")throw new I(g.INVALID_ARGUMENT,`Invalid Query. You can't perform '${c}' queries on documentId().`);if(c==="in"||c==="not-in"){al(h,c);const f=[];for(const E of h)f.push(ol(u,s,E));d={arrayValue:{values:f}}}else d=ol(u,s,h)}else c!=="in"&&c!=="not-in"&&c!=="array-contains-any"||al(h,c),d=tv(a,o,h,c==="in"||c==="not-in");return wt.create(l,c,d)}(t._query,"where",e,t.firestore._databaseId,this._field,this._op,this._value)}}class Ca extends Pa{constructor(t,e){super(),this.type=t,this._queryConstraints=e}static _create(t,e){return new Ca(t,e)}_parse(t){const e=this._queryConstraints.map(r=>r._parse(t)).filter(r=>r.getFilters().length>0);return e.length===1?e[0]:le.create(e,this._getOperator())}_apply(t){const e=this._parse(t);return e.getFilters().length===0?t:(function(i,s){let o=i;const a=s.getFlattenedFilters();for(const u of a)dd(o,u),o=uo(o,u)}(t._query,e),new zn(t.firestore,t.converter,uo(t._query,e)))}_getQueryConstraints(){return this._queryConstraints}_getOperator(){return this.type==="and"?"and":"or"}}function ol(n,t,e){if(typeof(e=Vt(e))=="string"){if(e==="")throw new I(g.INVALID_ARGUMENT,"Invalid query. When querying with documentId(), you must provide a valid document ID, but it was an empty string.");if(!ah(t)&&e.indexOf("/")!==-1)throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying a collection by documentId(), you must provide a plain document ID, but '${e}' contains a '/' character.`);const r=t.path.child(ft.fromString(e));if(!S.isDocumentKey(r))throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying a collection group by documentId(), the value provided must result in a valid document path, but '${r}' is not because it has an odd number of segments (${r.length}).`);return Vu(n,new S(r))}if(e instanceof Xt)return Vu(n,e._key);throw new I(g.INVALID_ARGUMENT,`Invalid query. When querying with documentId(), you must provide a valid string or a DocumentReference, but it was: ${vs(e)}.`)}function al(n,t){if(!Array.isArray(n)||n.length===0)throw new I(g.INVALID_ARGUMENT,`Invalid Query. A non-empty array is required for '${t.toString()}' filters.`)}function dd(n,t){const e=function(i,s){for(const o of i)for(const a of o.getFlattenedFilters())if(s.indexOf(a.op)>=0)return a.op;return null}(n.filters,function(i){switch(i){case"!=":return["!=","not-in"];case"array-contains-any":case"in":return["not-in"];case"not-in":return["array-contains-any","in","not-in","!="];default:return[]}}(t.op));if(e!==null)throw e===t.op?new I(g.INVALID_ARGUMENT,`Invalid query. You cannot use more than one '${t.op.toString()}' filter.`):new I(g.INVALID_ARGUMENT,`Invalid query. You cannot use '${t.op.toString()}' filters with '${e.toString()}' filters.`)}class fd{convertValue(t,e="none"){switch(ln(t)){case 0:return null;case 1:return t.booleanValue;case 2:return It(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(un(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw C()}}convertObject(t,e){return this.convertObjectMap(t.fields,e)}convertObjectMap(t,e="none"){const r={};return dn(t,(i,s)=>{r[i]=this.convertValue(s,e)}),r}convertGeoPoint(t){return new Ea(It(t.latitude),It(t.longitude))}convertArray(t,e){return(t.values||[]).map(r=>this.convertValue(r,e))}convertServerTimestamp(t,e){switch(e){case"previous":const r=Zo(t);return r==null?null:this.convertValue(r,e);case"estimate":return this.convertTimestamp(vr(t));default:return null}}convertTimestamp(t){const e=qe(t);return new St(e.seconds,e.nanos)}convertDocumentKey(t,e){const r=ft.fromString(t);tt(Dh(r));const i=new Tr(r.get(1),r.get(3)),s=new S(r.popFirst(5));return i.isEqual(e)||Se(`Document ${s} contains a document reference within a different database (${i.projectId}/${i.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gd(n,t,e){let r;return r=n?e&&(e.merge||e.mergeFields)?n.toFirestore(t,e):n.toFirestore(t):t,r}class sv extends fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new cn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xt(this.firestore,null,e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class En{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class ka extends qi{constructor(t,e,r,i,s,o){super(t,e,r,i,o),this._firestore=t,this._firestoreImpl=t,this.metadata=s}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new fi(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const r=this._document.data.field(cd("DocumentSnapshot.get",t));if(r!==null)return this._userDataWriter.convertValue(r,e.serverTimestamps)}}}class fi extends ka{data(t={}){return super.data(t)}}class ov{constructor(t,e,r,i){this._firestore=t,this._userDataWriter=e,this._snapshot=i,this.metadata=new En(i.hasPendingWrites,i.fromCache),this.query=r}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return this.size===0}forEach(t,e){this._snapshot.docs.forEach(r=>{t.call(e,new fi(this._firestore,this._userDataWriter,r.key,r,new En(this._snapshot.mutatedKeys.has(r.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new I(g.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(i,s){if(i._snapshot.oldDocs.isEmpty()){let o=0;return i._snapshot.docChanges.map(a=>{const u=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new En(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);return a.doc,{type:"added",doc:u,oldIndex:-1,newIndex:o++}})}{let o=i._snapshot.oldDocs;return i._snapshot.docChanges.filter(a=>s||a.type!==3).map(a=>{const u=new fi(i._firestore,i._userDataWriter,a.doc.key,a.doc,new En(i._snapshot.mutatedKeys.has(a.doc.key),i._snapshot.fromCache),i.query.converter);let l=-1,c=-1;return a.type!==0&&(l=o.indexOf(a.doc.key),o=o.delete(a.doc.key)),a.type!==1&&(o=o.add(a.doc),c=o.indexOf(a.doc.key)),{type:av(a.type),doc:u,oldIndex:l,newIndex:c}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function av(n){switch(n){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return C()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function uv(n){n=Be(n,Xt);const t=Be(n.firestore,Wr);return zy(Es(t),n._key).then(e=>hv(t,n,e))}class Va extends fd{constructor(t){super(),this.firestore=t}convertBytes(t){return new cn(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Xt(this.firestore,null,e)}}function pd(n){n=Be(n,zn);const t=Be(n.firestore,Wr),e=Es(t),r=new Va(t);return rv(n._query),Gy(e,n._query).then(i=>new ov(t,r,n,i))}function lv(n,t,e){n=Be(n,Xt);const r=Be(n.firestore,Wr),i=gd(n.converter,t,e);return cv(r,[od(wa(r),"setDoc",n._key,i,n.converter!==null,e).toMutation(n._key,Zt.none())])}function cv(n,t){return function(r,i){const s=new me;return r.asyncQueue.enqueueAndForget(async()=>Sy(await jy(r),i,s)),s.promise}(Es(n),t)}function hv(n,t,e){const r=e.docs.get(t._key),i=new Va(n);return new ka(n,i,t._key,r,new En(e.hasPendingWrites,e.fromCache),t.converter)}/**
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
 */const dv={maxAttempts:5};function Yn(n,t){if((n=Vt(n)).firestore!==t)throw new I(g.INVALID_ARGUMENT,"Provided document reference is from a different Firestore instance.");return n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
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
 */class fv extends class{constructor(e,r){this._firestore=e,this._transaction=r,this._dataReader=wa(e)}get(e){const r=Yn(e,this._firestore),i=new sv(this._firestore);return this._transaction.lookup([r._key]).then(s=>{if(!s||s.length!==1)return C();const o=s[0];if(o.isFoundDocument())return new qi(this._firestore,i,o.key,o,r.converter);if(o.isNoDocument())return new qi(this._firestore,i,r._key,null,r.converter);throw C()})}set(e,r,i){const s=Yn(e,this._firestore),o=gd(s.converter,r,i),a=od(this._dataReader,"Transaction.set",s._key,o,s.converter!==null,i);return this._transaction.set(s._key,a),this}update(e,r,i,...s){const o=Yn(e,this._firestore);let a;return a=typeof(r=Vt(r))=="string"||r instanceof Is?Zy(this._dataReader,"Transaction.update",o._key,r,i,s):Jy(this._dataReader,"Transaction.update",o._key,r),this._transaction.update(o._key,a),this}delete(e){const r=Yn(e,this._firestore);return this._transaction.delete(r._key),this}}{constructor(t,e){super(t,e),this._firestore=t}get(t){const e=Yn(t,this._firestore),r=new Va(this._firestore);return super.get(t).then(i=>new ka(this._firestore,r,e._key,i._document,new En(!1,!1),e.converter))}}function gv(n,t,e){n=Be(n,Wr);const r=Object.assign(Object.assign({},dv),e);return function(s){if(s.maxAttempts<1)throw new I(g.INVALID_ARGUMENT,"Max attempts must be at least 1")}(r),function(s,o,a){const u=new me;return s.asyncQueue.enqueueAndForget(async()=>{const l=await By(s);new Fy(s.asyncQueue,l,a,o,u).run()}),u.promise}(Es(n),i=>t(new fv(n,i)),r)}(function(t,e=!0){(function(i){qn=i})(xn),js(new Bs("firestore",(r,{instanceIdentifier:i,options:s})=>{const o=r.getProvider("app").getImmediate(),a=new Wr(new gm(r.getProvider("auth-internal")),new ym(r.getProvider("app-check-internal")),function(l,c){if(!Object.prototype.hasOwnProperty.apply(l.options,["projectId"]))throw new I(g.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Tr(l.options.projectId,c)}(o,i),o);return s=Object.assign({useFetchStreams:e},s),a._setSettings(s),a},"PUBLIC").setMultipleInstances(!0)),yi(Pu,"4.3.2",t),yi(Pu,"4.3.2","esm2017")})();const pv=async()=>{$d();const n=await mv(),t=await yv();return{settings:n,supertags:t}},mv=async()=>{var n;try{const{currentUser:t}=ze();if(t)return(n=(await uv(Ui(nn(),"users",t.uid))).data())==null?void 0:n.preferences}catch(t){console.warn("Failed to get user document:",t);return}},_v=async n=>{try{const{currentUser:t}=ze();t&&await lv(Ui(nn(),"users",t.uid),n,{merge:!0})}catch(t){console.warn("Failed to save user document:",t)}},yv=async()=>{try{const{currentUser:n}=ze();if(n){const t=await pd(hd(nd(nn(),`users/${n.uid}/supertags`))),e=[];return t.forEach(r=>{const i=r.data();e.push(Fd(r.id,i.description,Object.entries(i.tags).map(s=>Ud(s[1],s[0]))))}),e}}catch(n){console.warn("Failed to get user document:",n);return}},vv=async n=>{try{const{currentUser:t}=ze();t&&await gv(nn(),async e=>{(await pd(hd(nd(nn(),`users/${t.uid}/supertags`)))).forEach(async i=>e.delete(Ui(nn(),`users/${t.uid}/supertags/${i.id}`))),n.map(i=>e.set(Ui(nn(),`users/${t.uid}/supertags`,i.name),{description:i.description,tags:Object.fromEntries(i.tags.map(s=>[s.name,s.modifier]))}))})}catch(t){console.warn("Failed to save user document:",t)}},Tv=async(n,t)=>{qd(),await _v(n),await vv(t)},Ev=()=>{const n=jd(!1);return ze().onAuthStateChanged(t=>{n.set(t!==null)}),n},Iv=Ev(),wv=async n=>{try{const t="kurosearch-config.json";if("showSaveFilePicker"in window){const r=await(await showSaveFilePicker({suggestedName:t})).createWritable();await r.write(n),await r.close()}else{const e=document.createElement("a"),r=new Blob([n],{type:"text/plain"});e.href=URL.createObjectURL(r),e.download=t,e.click(),URL.revokeObjectURL(e.href)}}catch(t){console.error(t)}},Av=async()=>new Promise(async(n,t)=>{try{if("showOpenFilePicker"in window){const[e]=await showOpenFilePicker(),r=await e.getFile();n(await r.text())}else{let e;const r=i=>{var s=i.target.files[0];if(s){var o=new FileReader;o.onload=a=>{n(a.target.result),document.body.removeChild(e)},o.readAsText(s)}};e=document.createElement("input"),e.type="file",e.style.display="none",e.onchange=r,document.body.appendChild(e),e.click()}}catch(e){t(e)}});function ul(n,t,e){const r=n.slice();return r[26]=t[e],r}function Rv(n){let t;return{c(){t=Ht("Account")},l(e){t=Qt(e,"Account")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Pv(n){let t;return{c(){t=Ht("Supertags")},l(e){t=Qt(e,"Supertags")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function ll(n){let t,e=`You don't have any supertags yet. You can create them when you have more than one tag
				active.`,r,i,s="NOTE: If you had supertags before, please try signing in with Google below and loading them.";return{c(){t=it("p"),t.textContent=e,r=q(),i=it("p"),i.textContent=s,this.h()},l(o){t=st(o,"P",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-u30t20"&&(t.textContent=e),r=j(o),i=st(o,"P",{class:!0,"data-svelte-h":!0}),se(i)!=="svelte-1p8u7b5"&&(i.textContent=s),this.h()},h(){ct(t,"class","svelte-1jfbuy4"),ct(i,"class","svelte-1jfbuy4")},m(o,a){Z(o,t,a),Z(o,r,a),Z(o,i,a)},d(o){o&&(D(t),D(r),D(i))}}}function cl(n){let t,e;return t=new Zd({props:{supertag:n[26]}}),t.$on("remove",n[13]),t.$on("edit",n[14]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,i){const s={};i&8&&(s.supertag=r[26]),t.$set(s)},i(r){e||(U(t.$$.fragment,r),e=!0)},o(r){G(t.$$.fragment,r),e=!1},d(r){lt(t,r)}}}function Sv(n){let t;return{c(){t=Ht("Import/Export Data")},l(e){t=Qt(e,"Import/Export Data")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Cv(n){let t,e="Download Config File";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=st(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-wwbsqq"&&(t.textContent=e),this.h()},h(){ct(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,i){Z(r,t,i)},p:Sn,d(r){r&&D(t)}}}function kv(n){let t,e="Load Config File";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=st(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-1ld4bre"&&(t.textContent=e),this.h()},h(){ct(t,"class","codicon codicon-file svelte-1jfbuy4")},m(r,i){Z(r,t,i)},p:Sn,d(r){r&&D(t)}}}function Vv(n){let t;return{c(){t=Ht("Google Account Syncing")},l(e){t=Qt(e,"Google Account Syncing")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Nv(n){let t,e;return t=new Ae({props:{title:"Sign in with google to backup data",$$slots:{default:[bv]},$$scope:{ctx:n}}}),t.$on("click",n[18]),{c(){ot(t.$$.fragment)},l(r){at(t.$$.fragment,r)},m(r,i){ut(t,r,i),e=!0},p(r,i){const s={};i&536870912&&(s.$$scope={dirty:i,ctx:r}),t.$set(s)},i(r){e||(U(t.$$.fragment,r),e=!0)},o(r){G(t.$$.fragment,r),e=!1},d(r){lt(t,r)}}}function Dv(n){let t,e,r,i,s,o;return t=new Ae({props:{type:"secondary",title:"Apply your settings from the cloud.",$$slots:{default:[Ov]},$$scope:{ctx:n}}}),t.$on("click",n[15]),r=new Ae({props:{type:"secondary",title:"Store current settings in the cloud.",$$slots:{default:[Mv]},$$scope:{ctx:n}}}),r.$on("click",n[16]),s=new Ae({props:{title:"Sign out",$$slots:{default:[Lv]},$$scope:{ctx:n}}}),s.$on("click",n[17]),{c(){ot(t.$$.fragment),e=q(),ot(r.$$.fragment),i=q(),ot(s.$$.fragment)},l(a){at(t.$$.fragment,a),e=j(a),at(r.$$.fragment,a),i=j(a),at(s.$$.fragment,a)},m(a,u){ut(t,a,u),Z(a,e,u),ut(r,a,u),Z(a,i,u),ut(s,a,u),o=!0},p(a,u){const l={};u&536870912&&(l.$$scope={dirty:u,ctx:a}),t.$set(l);const c={};u&536870912&&(c.$$scope={dirty:u,ctx:a}),r.$set(c);const h={};u&536870912&&(h.$$scope={dirty:u,ctx:a}),s.$set(h)},i(a){o||(U(t.$$.fragment,a),U(r.$$.fragment,a),U(s.$$.fragment,a),o=!0)},o(a){G(t.$$.fragment,a),G(r.$$.fragment,a),G(s.$$.fragment,a),o=!1},d(a){a&&(D(e),D(i)),lt(t,a),lt(r,a),lt(s,a)}}}function bv(n){let t;return{c(){t=Ht("Connect Google User")},l(e){t=Qt(e,"Connect Google User")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Ov(n){let t,e="Load Config";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=st(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-g2l2uz"&&(t.textContent=e),this.h()},h(){ct(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,i){Z(r,t,i)},p:Sn,d(r){r&&D(t)}}}function Mv(n){let t,e="Save config";return{c(){t=it("span"),t.textContent=e,this.h()},l(r){t=st(r,"SPAN",{class:!0,"data-svelte-h":!0}),se(t)!=="svelte-kmcvvq"&&(t.textContent=e),this.h()},h(){ct(t,"class","codicon codicon-cloud svelte-1jfbuy4")},m(r,i){Z(r,t,i)},p:Sn,d(r){r&&D(t)}}}function Lv(n){let t;return{c(){t=Ht("Sign Out")},l(e){t=Qt(e,"Sign Out")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function xv(n){let t;return{c(){t=Ht("Delete Data")},l(e){t=Qt(e,"Delete Data")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Fv(n){let t;return{c(){t=Ht("Delete Data")},l(e){t=Qt(e,"Delete Data")},m(e,r){Z(e,t,r)},d(e){e&&D(t)}}}function Uv(n){let t,e,r,i,s,o,a,u,l,c,h,d,f,E="Load and save preferences and supertags to and from a file.",A,y,T,W,x,K,B,rt,gt,nt="Load and save preferences and supertags to and from Google.",At,H,mt,Rt,w,F,ke,Pt,Q,Jt,k,m,P,vt,Bt,Y,ht,oe;r=new Pd({props:{$$slots:{default:[Rv]},$$scope:{ctx:n}}}),s=new Hr({props:{$$slots:{default:[Pv]},$$scope:{ctx:n}}});let zt=n[3].items.length===0&&ll(),He=Cn(n[3].items),pt=[];for(let _=0;_<He.length;_+=1)pt[_]=cl(ul(n,He,_));const md=_=>G(pt[_],1,1,()=>{pt[_]=null});h=new Hr({props:{$$slots:{default:[Sv]},$$scope:{ctx:n}}}),T=new Ae({props:{type:"secondary",title:"Save your data to a file.",$$slots:{default:[Cv]},$$scope:{ctx:n}}}),T.$on("click",n[11]),x=new Ae({props:{type:"secondary",title:"Restore your settings from a config file.",$$slots:{default:[kv]},$$scope:{ctx:n}}}),x.$on("click",n[12]),B=new Hr({props:{$$slots:{default:[Vv]},$$scope:{ctx:n}}});const Na=[Dv,Nv],Ve=[];function Da(_,L){return _[8]?0:1}mt=Da(n),Rt=Ve[mt]=Na[mt](n),F=new Hr({props:{$$slots:{default:[xv]},$$scope:{ctx:n}}}),Pt=new Ae({props:{title:"Delete all your data.",$$slots:{default:[Fv]},$$scope:{ctx:n}}}),Pt.$on("click",n[19]);function _d(_){n[20](_)}let ba={title:"Load Data",warning:"This will replace all your current settings with settings save online. Are you sure you want to do that?",labelConfirm:"Yes, load settings.",labelCancel:"Cancel"};n[0]!==void 0&&(ba.dialog=n[0]),Jt=new si({props:ba}),Le.push(()=>Fe(Jt,"dialog",_d)),Jt.$on("confirm",n[21]);function yd(_){n[22](_)}let Oa={title:"Save data online",warning:"This will save the current settings and supertags online. BUT it will also overwrite anything currently stored in the cloud. Are you sure you want to do this?",labelConfirm:"Yes, backup online",labelCancel:"Cancel"};n[1]!==void 0&&(Oa.dialog=n[1]),P=new si({props:Oa}),Le.push(()=>Fe(P,"dialog",yd)),P.$on("confirm",n[23]);function vd(_){n[24](_)}let Ma={title:"Delete Data",warning:"This will delete all your data. This includes supertags. You will not be able to recover it. Are you sure you want to delete it?",labelConfirm:"Yes, delete it.",labelCancel:"Cancel"};return n[2]!==void 0&&(Ma.dialog=n[2]),Y=new si({props:Ma}),Le.push(()=>Fe(Y,"dialog",vd)),Y.$on("confirm",n[9]),{c(){t=q(),e=it("section"),ot(r.$$.fragment),i=q(),ot(s.$$.fragment),o=q(),a=it("div"),zt&&zt.c(),u=q(),l=it("ul");for(let _=0;_<pt.length;_+=1)pt[_].c();c=q(),ot(h.$$.fragment),d=q(),f=it("p"),f.textContent=E,A=q(),y=it("div"),ot(T.$$.fragment),W=q(),ot(x.$$.fragment),K=q(),ot(B.$$.fragment),rt=q(),gt=it("p"),gt.textContent=nt,At=q(),H=it("div"),Rt.c(),w=q(),ot(F.$$.fragment),ke=q(),ot(Pt.$$.fragment),Q=q(),ot(Jt.$$.fragment),m=q(),ot(P.$$.fragment),Bt=q(),ot(Y.$$.fragment),this.h()},l(_){Ed("svelte-814hib",document.head).forEach(D),t=j(_),e=st(_,"SECTION",{class:!0});var J=Wt(e);at(r.$$.fragment,J),i=j(J),at(s.$$.fragment,J),o=j(J),a=st(J,"DIV",{class:!0});var Qe=Wt(a);zt&&zt.l(Qe),u=j(Qe),l=st(Qe,"UL",{});var Gn=Wt(l);for(let gn=0;gn<pt.length;gn+=1)pt[gn].l(Gn);Gn.forEach(D),Qe.forEach(D),c=j(J),at(h.$$.fragment,J),d=j(J),f=st(J,"P",{class:!0,"data-svelte-h":!0}),se(f)!=="svelte-rgkk1o"&&(f.textContent=E),A=j(J),y=st(J,"DIV",{class:!0});var Ye=Wt(y);at(T.$$.fragment,Ye),W=j(Ye),at(x.$$.fragment,Ye),Ye.forEach(D),K=j(J),at(B.$$.fragment,J),rt=j(J),gt=st(J,"P",{class:!0,"data-svelte-h":!0}),se(gt)!=="svelte-pw0g5c"&&(gt.textContent=nt),At=j(J),H=st(J,"DIV",{class:!0});var Wn=Wt(H);Rt.l(Wn),Wn.forEach(D),w=j(J),at(F.$$.fragment,J),ke=j(J),at(Pt.$$.fragment,J),J.forEach(D),Q=j(_),at(Jt.$$.fragment,_),m=j(_),at(P.$$.fragment,_),Bt=j(_),at(Y.$$.fragment,_),this.h()},h(){document.title="kurosearch - Account",ct(a,"class","supertags"),ct(f,"class","svelte-1jfbuy4"),ct(y,"class","button-row svelte-1jfbuy4"),ct(gt,"class","svelte-1jfbuy4"),ct(H,"class","button-row svelte-1jfbuy4"),ct(e,"class","svelte-1jfbuy4")},m(_,L){Z(_,t,L),Z(_,e,L),ut(r,e,null),V(e,i),ut(s,e,null),V(e,o),V(e,a),zt&&zt.m(a,null),V(a,u),V(a,l);for(let J=0;J<pt.length;J+=1)pt[J]&&pt[J].m(l,null);V(e,c),ut(h,e,null),V(e,d),V(e,f),V(e,A),V(e,y),ut(T,y,null),V(y,W),ut(x,y,null),V(e,K),ut(B,e,null),V(e,rt),V(e,gt),V(e,At),V(e,H),Ve[mt].m(H,null),V(e,w),ut(F,e,null),V(e,ke),ut(Pt,e,null),Z(_,Q,L),ut(Jt,_,L),Z(_,m,L),ut(P,_,L),Z(_,Bt,L),ut(Y,_,L),oe=!0},p(_,[L]){const J={};L&536870912&&(J.$$scope={dirty:L,ctx:_}),r.$set(J);const Qe={};if(L&536870912&&(Qe.$$scope={dirty:L,ctx:_}),s.$set(Qe),_[3].items.length===0?zt||(zt=ll(),zt.c(),zt.m(a,u)):zt&&(zt.d(1),zt=null),L&8){He=Cn(_[3].items);let Gt;for(Gt=0;Gt<He.length;Gt+=1){const qa=ul(_,He,Gt);pt[Gt]?(pt[Gt].p(qa,L),U(pt[Gt],1)):(pt[Gt]=cl(qa),pt[Gt].c(),U(pt[Gt],1),pt[Gt].m(l,null))}for(mi(),Gt=He.length;Gt<pt.length;Gt+=1)md(Gt);_i()}const Gn={};L&536870912&&(Gn.$$scope={dirty:L,ctx:_}),h.$set(Gn);const Ye={};L&536870912&&(Ye.$$scope={dirty:L,ctx:_}),T.$set(Ye);const Wn={};L&536870912&&(Wn.$$scope={dirty:L,ctx:_}),x.$set(Wn);const gn={};L&536870912&&(gn.$$scope={dirty:L,ctx:_}),B.$set(gn);let As=mt;mt=Da(_),mt===As?Ve[mt].p(_,L):(mi(),G(Ve[As],1,1,()=>{Ve[As]=null}),_i(),Rt=Ve[mt],Rt?Rt.p(_,L):(Rt=Ve[mt]=Na[mt](_),Rt.c()),U(Rt,1),Rt.m(H,null));const La={};L&536870912&&(La.$$scope={dirty:L,ctx:_}),F.$set(La);const xa={};L&536870912&&(xa.$$scope={dirty:L,ctx:_}),Pt.$set(xa);const Fa={};!k&&L&1&&(k=!0,Fa.dialog=_[0],xe(()=>k=!1)),Jt.$set(Fa);const Ua={};!vt&&L&2&&(vt=!0,Ua.dialog=_[1],xe(()=>vt=!1)),P.$set(Ua);const $a={};!ht&&L&4&&(ht=!0,$a.dialog=_[2],xe(()=>ht=!1)),Y.$set($a)},i(_){if(!oe){U(r.$$.fragment,_),U(s.$$.fragment,_);for(let L=0;L<He.length;L+=1)U(pt[L]);U(h.$$.fragment,_),U(T.$$.fragment,_),U(x.$$.fragment,_),U(B.$$.fragment,_),U(Rt),U(F.$$.fragment,_),U(Pt.$$.fragment,_),U(Jt.$$.fragment,_),U(P.$$.fragment,_),U(Y.$$.fragment,_),oe=!0}},o(_){G(r.$$.fragment,_),G(s.$$.fragment,_),pt=pt.filter(Boolean);for(let L=0;L<pt.length;L+=1)G(pt[L]);G(h.$$.fragment,_),G(T.$$.fragment,_),G(x.$$.fragment,_),G(B.$$.fragment,_),G(Rt),G(F.$$.fragment,_),G(Pt.$$.fragment,_),G(Jt.$$.fragment,_),G(P.$$.fragment,_),G(Y.$$.fragment,_),oe=!1},d(_){_&&(D(t),D(e),D(Q),D(m),D(Bt)),lt(r),lt(s),zt&&zt.d(),mo(pt,_),lt(h),lt(T),lt(x),lt(B),Ve[mt].d(),lt(F),lt(Pt),lt(Jt,_),lt(P,_),lt(Y,_)}}}function $v(n,t,e){let r,i,s,o,a,u;pn(n,Xe,w=>e(3,r=w)),pn(n,Ps,w=>e(4,i=w)),pn(n,Ss,w=>e(5,s=w)),pn(n,Cs,w=>e(6,o=w)),pn(n,Rs,w=>e(7,a=w)),pn(n,Iv,w=>e(8,u=w));const l=()=>{Xe.reset()},c=()=>({[Tt.LocalstorageEnabled]:a,[Tt.Theme]:o,[Tt.BlockedContent]:s,[Tt.ResultColumns]:i,[Tt.Supertags]:r}),h=w=>{ae(Rs,a=w[Tt.LocalstorageEnabled],a),ae(Cs,o=w[Tt.Theme],o),ae(Ss,s=w[Tt.BlockedContent],s),ae(Ps,i=w[Tt.ResultColumns],i),ae(Xe,r=w[Tt.Supertags],r)},d=async()=>{try{const w=c(),F=JSON.stringify(w,void 0,2);await wv(F)}catch(w){console.error(w)}},f=async()=>{try{const w=await Av(),F=JSON.parse(w);h(F)}catch(w){console.error(w)}};let E,A,y;const T=w=>Xe.remove(w.detail),W=w=>{Xe.update(w.detail.oldName,w.detail.newSupertag)},x=()=>E.showModal(),K=()=>A.showModal(),B=()=>ip(),rt=()=>rp(),gt=()=>y.showModal();function nt(w){E=w,e(0,E)}const At=async()=>{const w=await pv();w.settings&&(w.settings[Tt.LocalstorageEnabled]&&ae(Rs,a=w.settings[Tt.LocalstorageEnabled],a),w.settings[Tt.Theme]&&ae(Cs,o=w.settings[Tt.Theme],o),w.settings[Tt.BlockedContent]&&ae(Ss,s=w.settings[Tt.BlockedContent],s),w.settings[Tt.ResultColumns]&&ae(Ps,i=w.settings[Tt.ResultColumns],i),w.settings[Tt.Supertags]&&ae(Xe,r=w.settings[Tt.Supertags],r)),w.supertags&&ae(Xe,r.items=w.supertags,r)};function H(w){A=w,e(1,A)}const mt=async()=>{await Tv(c(),r.items)};function Rt(w){y=w,e(2,y)}return[E,A,y,r,i,s,o,a,u,l,c,d,f,T,W,x,K,B,rt,gt,nt,At,H,mt,Rt]}class dT extends Bi{constructor(t){super(),zi(this,t,$v,Uv,ji,{})}}export{dT as component};
