import{r as T,_ as v,C as A,c as k,E as ae,F as re,b as se,m as _e,f as Me,u as K,v as Oe,w as Fe,x as Le,e as je,j as xe}from"./index.esm2017.b35d87a0.js";const Ne=(e,t)=>t.some(n=>e instanceof n);let W,H;function Be(){return W||(W=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function $e(){return H||(H=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const oe=new WeakMap,j=new WeakMap,ce=new WeakMap,P=new WeakMap,B=new WeakMap;function qe(e){const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("success",r),e.removeEventListener("error",s)},r=()=>{n(h(e.result)),a()},s=()=>{i(e.error),a()};e.addEventListener("success",r),e.addEventListener("error",s)});return t.then(n=>{n instanceof IDBCursor&&oe.set(n,e)}).catch(()=>{}),B.set(t,e),t}function Ve(e){if(j.has(e))return;const t=new Promise((n,i)=>{const a=()=>{e.removeEventListener("complete",r),e.removeEventListener("error",s),e.removeEventListener("abort",s)},r=()=>{n(),a()},s=()=>{i(e.error||new DOMException("AbortError","AbortError")),a()};e.addEventListener("complete",r),e.addEventListener("error",s),e.addEventListener("abort",s)});j.set(e,t)}let x={get(e,t,n){if(e instanceof IDBTransaction){if(t==="done")return j.get(e);if(t==="objectStoreNames")return e.objectStoreNames||ce.get(e);if(t==="store")return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return h(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&(t==="done"||t==="store")?!0:t in e}};function Ue(e){x=e(x)}function ze(e){return e===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(t,...n){const i=e.call(_(this),t,...n);return ce.set(i,t.sort?t.sort():[t]),h(i)}:$e().includes(e)?function(...t){return e.apply(_(this),t),h(oe.get(this))}:function(...t){return h(e.apply(_(this),t))}}function Ge(e){return typeof e=="function"?ze(e):(e instanceof IDBTransaction&&Ve(e),Ne(e,Be())?new Proxy(e,x):e)}function h(e){if(e instanceof IDBRequest)return qe(e);if(P.has(e))return P.get(e);const t=Ge(e);return t!==e&&(P.set(e,t),B.set(t,e)),t}const _=e=>B.get(e);function Ke(e,t,{blocked:n,upgrade:i,blocking:a,terminated:r}={}){const s=indexedDB.open(e,t),o=h(s);return i&&s.addEventListener("upgradeneeded",c=>{i(h(s.result),c.oldVersion,c.newVersion,h(s.transaction))}),n&&s.addEventListener("blocked",()=>n()),o.then(c=>{r&&c.addEventListener("close",()=>r()),a&&c.addEventListener("versionchange",()=>a())}).catch(()=>{}),o}const We=["get","getKey","getAll","getAllKeys","count"],He=["put","add","delete","clear"],M=new Map;function Y(e,t){if(!(e instanceof IDBDatabase&&!(t in e)&&typeof t=="string"))return;if(M.get(t))return M.get(t);const n=t.replace(/FromIndex$/,""),i=t!==n,a=He.includes(n);if(!(n in(i?IDBIndex:IDBObjectStore).prototype)||!(a||We.includes(n)))return;const r=async function(s,...o){const c=this.transaction(s,a?"readwrite":"readonly");let u=c.store;return i&&(u=u.index(o.shift())),(await Promise.all([u[n](...o),a&&c.done]))[0]};return M.set(t,r),r}Ue(e=>({...e,get:(t,n,i)=>Y(t,n)||e.get(t,n,i),has:(t,n)=>!!Y(t,n)||e.has(t,n)}));const ue="@firebase/installations",$="0.6.4";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const le=1e4,de=`w:${$}`,fe="FIS_v2",Ye="https://firebaseinstallations.googleapis.com/v1",Je=60*60*1e3,Xe="installations",Qe="Installations";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze={"missing-app-config-values":'Missing App configuration value: "{$valueName}"',"not-registered":"Firebase Installation is not registered.","installation-not-found":"Firebase Installation not found.","request-failed":'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',"app-offline":"Could not process request. Application offline.","delete-pending-registration":"Can't delete installation while there is a pending registration request."},w=new ae(Xe,Qe,Ze);function pe(e){return e instanceof re&&e.code.includes("request-failed")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function he({projectId:e}){return`${Ye}/projects/${e}/installations`}function ge(e){return{token:e.token,requestStatus:2,expiresIn:tt(e.expiresIn),creationTime:Date.now()}}async function me(e,t){const i=(await t.json()).error;return w.create("request-failed",{requestName:e,serverCode:i.code,serverMessage:i.message,serverStatus:i.status})}function we({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function et(e,{refreshToken:t}){const n=we(e);return n.append("Authorization",nt(t)),n}async function Ie(e){const t=await e();return t.status>=500&&t.status<600?e():t}function tt(e){return Number(e.replace("s","000"))}function nt(e){return`${fe} ${e}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function it({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const i=he(e),a=we(e),r=t.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const s={fid:n,authVersion:fe,appId:e.appId,sdkVersion:de},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await Ie(()=>fetch(i,o));if(c.ok){const u=await c.json();return{fid:u.fid||n,registrationStatus:2,refreshToken:u.refreshToken,authToken:ge(u.authToken)}}else throw await me("Create Installation",c)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ye(e){return new Promise(t=>{setTimeout(t,e)})}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function at(e){return btoa(String.fromCharCode(...e)).replace(/\+/g,"-").replace(/\//g,"_")}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const rt=/^[cdef][\w-]{21}$/,N="";function st(){try{const e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;const n=ot(e);return rt.test(n)?n:N}catch{return N}}function ot(e){return at(e).substr(0,22)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(e){return`${e.appName}!${e.appId}`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const be=new Map;function Te(e,t){const n=C(e);ve(n,t),ct(n,t)}function ve(e,t){const n=be.get(e);if(n)for(const i of n)i(t)}function ct(e,t){const n=ut();n&&n.postMessage({key:e,fid:t}),lt()}let m=null;function ut(){return!m&&"BroadcastChannel"in self&&(m=new BroadcastChannel("[Firebase] FID Change"),m.onmessage=e=>{ve(e.data.key,e.data.fid)}),m}function lt(){be.size===0&&m&&(m.close(),m=null)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dt="firebase-installations-database",ft=1,I="firebase-installations-store";let O=null;function q(){return O||(O=Ke(dt,ft,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(I)}}})),O}async function S(e,t){const n=C(e),a=(await q()).transaction(I,"readwrite"),r=a.objectStore(I),s=await r.get(n);return await r.put(t,n),await a.done,(!s||s.fid!==t.fid)&&Te(e,t.fid),t}async function Ae(e){const t=C(e),i=(await q()).transaction(I,"readwrite");await i.objectStore(I).delete(t),await i.done}async function D(e,t){const n=C(e),a=(await q()).transaction(I,"readwrite"),r=a.objectStore(I),s=await r.get(n),o=t(s);return o===void 0?await r.delete(n):await r.put(o,n),await a.done,o&&(!s||s.fid!==o.fid)&&Te(e,o.fid),o}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function V(e){let t;const n=await D(e.appConfig,i=>{const a=pt(i),r=ht(e,a);return t=r.registrationPromise,r.installationEntry});return n.fid===N?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function pt(e){const t=e||{fid:st(),registrationStatus:0};return Se(t)}function ht(e,t){if(t.registrationStatus===0){if(!navigator.onLine){const a=Promise.reject(w.create("app-offline"));return{installationEntry:t,registrationPromise:a}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=gt(e,n);return{installationEntry:n,registrationPromise:i}}else return t.registrationStatus===1?{installationEntry:t,registrationPromise:mt(e)}:{installationEntry:t}}async function gt(e,t){try{const n=await it(e,t);return S(e.appConfig,n)}catch(n){throw pe(n)&&n.customData.serverCode===409?await Ae(e.appConfig):await S(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function mt(e){let t=await J(e.appConfig);for(;t.registrationStatus===1;)await ye(100),t=await J(e.appConfig);if(t.registrationStatus===0){const{installationEntry:n,registrationPromise:i}=await V(e);return i||n}return t}function J(e){return D(e,t=>{if(!t)throw w.create("installation-not-found");return Se(t)})}function Se(e){return wt(e)?{fid:e.fid,registrationStatus:0}:e}function wt(e){return e.registrationStatus===1&&e.registrationTime+le<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function It({appConfig:e,heartbeatServiceProvider:t},n){const i=yt(e,n),a=et(e,n),r=t.getImmediate({optional:!0});if(r){const u=await r.getHeartbeatsHeader();u&&a.append("x-firebase-client",u)}const s={installation:{sdkVersion:de,appId:e.appId}},o={method:"POST",headers:a,body:JSON.stringify(s)},c=await Ie(()=>fetch(i,o));if(c.ok){const u=await c.json();return ge(u)}else throw await me("Generate Auth Token",c)}function yt(e,{fid:t}){return`${he(e)}/${t}/authTokens:generate`}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function U(e,t=!1){let n;const i=await D(e.appConfig,r=>{if(!Ee(r))throw w.create("not-registered");const s=r.authToken;if(!t&&vt(s))return r;if(s.requestStatus===1)return n=bt(e,t),r;{if(!navigator.onLine)throw w.create("app-offline");const o=St(r);return n=Tt(e,o),o}});return n?await n:i.authToken}async function bt(e,t){let n=await X(e.appConfig);for(;n.authToken.requestStatus===1;)await ye(100),n=await X(e.appConfig);const i=n.authToken;return i.requestStatus===0?U(e,t):i}function X(e){return D(e,t=>{if(!Ee(t))throw w.create("not-registered");const n=t.authToken;return Et(n)?Object.assign(Object.assign({},t),{authToken:{requestStatus:0}}):t})}async function Tt(e,t){try{const n=await It(e,t),i=Object.assign(Object.assign({},t),{authToken:n});return await S(e.appConfig,i),n}catch(n){if(pe(n)&&(n.customData.serverCode===401||n.customData.serverCode===404))await Ae(e.appConfig);else{const i=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await S(e.appConfig,i)}throw n}}function Ee(e){return e!==void 0&&e.registrationStatus===2}function vt(e){return e.requestStatus===2&&!At(e)}function At(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+Je}function St(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function Et(e){return e.requestStatus===1&&e.requestTime+le<Date.now()}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function kt(e){const t=e,{installationEntry:n,registrationPromise:i}=await V(t);return i?i.catch(console.error):U(t).catch(console.error),n.fid}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ct(e,t=!1){const n=e;return await Dt(n),(await U(n,t)).token}async function Dt(e){const{registrationPromise:t}=await V(e);t&&await t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Rt(e){if(!e||!e.options)throw F("App Configuration");if(!e.name)throw F("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw F(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function F(e){return w.create("missing-app-config-values",{valueName:e})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ke="installations",Pt="installations-internal",_t=e=>{const t=e.getProvider("app").getImmediate(),n=Rt(t),i=k(t,"heartbeat");return{app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()}},Mt=e=>{const t=e.getProvider("app").getImmediate(),n=k(t,ke).getImmediate();return{getId:()=>kt(n),getToken:a=>Ct(n,a)}};function Ot(){v(new A(ke,_t,"PUBLIC")),v(new A(Pt,Mt,"PRIVATE"))}Ot();T(ue,$);T(ue,$,"esm2017");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const E="analytics",Ft="firebase_id",Lt="origin",jt=60*1e3,xt="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",z="https://www.googletagmanager.com/gtag/js";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new _e("@firebase/analytics");/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Nt={"already-exists":"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.","already-initialized":"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.","already-initialized-settings":"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.","interop-component-reg-failed":"Firebase Analytics Interop Component failed to instantiate: {$reason}","invalid-analytics-context":"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","indexeddb-unavailable":"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}","fetch-throttle":"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.","config-fetch-failed":"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}","no-api-key":'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',"no-app-id":'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',"no-client-id":'The "client_id" field is empty.',"invalid-gtag-resource":"Trusted Types detected an invalid gtag resource: {$gtagURL}."},d=new ae("analytics","Analytics",Nt);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Bt(e){if(!e.startsWith(z)){const t=d.create("invalid-gtag-resource",{gtagURL:e});return l.warn(t.message),""}return e}function Ce(e){return Promise.all(e.map(t=>t.catch(n=>n)))}function $t(e,t){let n;return window.trustedTypes&&(n=window.trustedTypes.createPolicy(e,t)),n}function qt(e,t){const n=$t("firebase-js-sdk-policy",{createScriptURL:Bt}),i=document.createElement("script"),a=`${z}?l=${e}&id=${t}`;i.src=n?n==null?void 0:n.createScriptURL(a):a,i.async=!0,document.head.appendChild(i)}function Vt(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Ut(e,t,n,i,a,r){const s=i[a];try{if(s)await t[s];else{const c=(await Ce(n)).find(u=>u.measurementId===a);c&&await t[c.appId]}}catch(o){l.error(o)}e("config",a,r)}async function zt(e,t,n,i,a){try{let r=[];if(a&&a.send_to){let s=a.send_to;Array.isArray(s)||(s=[s]);const o=await Ce(n);for(const c of s){const u=o.find(g=>g.measurementId===c),f=u&&t[u.appId];if(f)r.push(f);else{r=[];break}}}r.length===0&&(r=Object.values(t)),await Promise.all(r),e("event",i,a||{})}catch(r){l.error(r)}}function Gt(e,t,n,i){async function a(r,...s){try{if(r==="event"){const[o,c]=s;await zt(e,t,n,o,c)}else if(r==="config"){const[o,c]=s;await Ut(e,t,n,i,o,c)}else if(r==="consent"){const[o]=s;e("consent","update",o)}else if(r==="get"){const[o,c,u]=s;e("get",o,c,u)}else if(r==="set"){const[o]=s;e("set",o)}else e(r,...s)}catch(o){l.error(o)}}return a}function Kt(e,t,n,i,a){let r=function(...s){window[i].push(arguments)};return window[a]&&typeof window[a]=="function"&&(r=window[a]),window[a]=Gt(r,e,t,n),{gtagCore:r,wrappedGtag:window[a]}}function Wt(e){const t=window.document.getElementsByTagName("script");for(const n of Object.values(t))if(n.src&&n.src.includes(z)&&n.src.includes(e))return n;return null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ht=30,Yt=1e3;class Jt{constructor(t={},n=Yt){this.throttleMetadata=t,this.intervalMillis=n}getThrottleMetadata(t){return this.throttleMetadata[t]}setThrottleMetadata(t,n){this.throttleMetadata[t]=n}deleteThrottleMetadata(t){delete this.throttleMetadata[t]}}const De=new Jt;function Xt(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Qt(e){var t;const{appId:n,apiKey:i}=e,a={method:"GET",headers:Xt(i)},r=xt.replace("{app-id}",n),s=await fetch(r,a);if(s.status!==200&&s.status!==304){let o="";try{const c=await s.json();!((t=c.error)===null||t===void 0)&&t.message&&(o=c.error.message)}catch{}throw d.create("config-fetch-failed",{httpStatus:s.status,responseMessage:o})}return s.json()}async function Zt(e,t=De,n){const{appId:i,apiKey:a,measurementId:r}=e.options;if(!i)throw d.create("no-app-id");if(!a){if(r)return{measurementId:r,appId:i};throw d.create("no-api-key")}const s=t.getThrottleMetadata(i)||{backoffCount:0,throttleEndTimeMillis:Date.now()},o=new nn;return setTimeout(async()=>{o.abort()},n!==void 0?n:jt),Re({appId:i,apiKey:a,measurementId:r},s,o,t)}async function Re(e,{throttleEndTimeMillis:t,backoffCount:n},i,a=De){var r;const{appId:s,measurementId:o}=e;try{await en(i,t)}catch(c){if(o)return l.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${c==null?void 0:c.message}]`),{appId:s,measurementId:o};throw c}try{const c=await Qt(e);return a.deleteThrottleMetadata(s),c}catch(c){const u=c;if(!tn(u)){if(a.deleteThrottleMetadata(s),o)return l.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${o} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:s,measurementId:o};throw c}const f=Number((r=u==null?void 0:u.customData)===null||r===void 0?void 0:r.httpStatus)===503?K(n,a.intervalMillis,Ht):K(n,a.intervalMillis),g={throttleEndTimeMillis:Date.now()+f,backoffCount:n+1};return a.setThrottleMetadata(s,g),l.debug(`Calling attemptFetch again in ${f} millis`),Re(e,g,i,a)}}function en(e,t){return new Promise((n,i)=>{const a=Math.max(t-Date.now(),0),r=setTimeout(n,a);e.addEventListener(()=>{clearTimeout(r),i(d.create("fetch-throttle",{throttleEndTimeMillis:t}))})})}function tn(e){if(!(e instanceof re)||!e.customData)return!1;const t=Number(e.customData.httpStatus);return t===429||t===500||t===503||t===504}class nn{constructor(){this.listeners=[]}addEventListener(t){this.listeners.push(t)}abort(){this.listeners.forEach(t=>t())}}async function an(e,t,n,i,a){if(a&&a.global){e("event",n,i);return}else{const r=await t,s=Object.assign(Object.assign({},i),{send_to:r});e("event",n,s)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rn(){if(Oe())try{await Fe()}catch(e){return l.warn(d.create("indexeddb-unavailable",{errorInfo:e==null?void 0:e.toString()}).message),!1}else return l.warn(d.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function sn(e,t,n,i,a,r,s){var o;const c=Zt(e);c.then(p=>{n[p.measurementId]=p.appId,e.options.measurementId&&p.measurementId!==e.options.measurementId&&l.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>l.error(p)),t.push(c);const u=rn().then(p=>{if(p)return i.getId()}),[f,g]=await Promise.all([c,u]);Wt(r)||qt(r,f.measurementId),a("js",new Date);const b=(o=s==null?void 0:s.config)!==null&&o!==void 0?o:{};return b[Lt]="firebase",b.update=!0,g!=null&&(b[Ft]=g),a("config",f.measurementId,b),f.measurementId}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class on{constructor(t){this.app=t}_delete(){return delete y[this.app.options.appId],Promise.resolve()}}let y={},Q=[];const Z={};let L="dataLayer",cn="gtag",ee,Pe,te=!1;function un(){const e=[];if(Me()&&e.push("This is a browser extension environment."),Le()||e.push("Cookies are not available."),e.length>0){const t=e.map((i,a)=>`(${a+1}) ${i}`).join(" "),n=d.create("invalid-analytics-context",{errorInfo:t});l.warn(n.message)}}function ln(e,t,n){un();const i=e.options.appId;if(!i)throw d.create("no-app-id");if(!e.options.apiKey)if(e.options.measurementId)l.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw d.create("no-api-key");if(y[i]!=null)throw d.create("already-exists",{id:i});if(!te){Vt(L);const{wrappedGtag:r,gtagCore:s}=Kt(y,Q,Z,L,cn);Pe=r,ee=s,te=!0}return y[i]=sn(e,Q,Z,t,ee,L,n),new on(e)}function G(e=je()){e=se(e);const t=k(e,E);return t.isInitialized()?t.getImmediate():dn(e)}function dn(e,t={}){const n=k(e,E);if(n.isInitialized()){const a=n.getImmediate();if(xe(t,n.getOptions()))return a;throw d.create("already-initialized")}return n.initialize({options:t})}function R(e,t,n,i){e=se(e),an(Pe,y[e.app.options.appId],t,n,i).catch(a=>l.error(a))}const ne="@firebase/analytics",ie="0.10.0";function fn(){v(new A(E,(t,{options:n})=>{const i=t.getProvider("app").getImmediate(),a=t.getProvider("installations-internal").getImmediate();return ln(i,a,n)},"PUBLIC")),v(new A("analytics-internal",e,"PRIVATE")),T(ne,ie),T(ne,ie,"esm2017");function e(t){try{const n=t.getProvider(E).getImmediate();return{logEvent:(i,a,r)=>R(n,i,a,r)}}catch(n){throw d.create("interop-component-reg-failed",{reason:n})}}}fn();const hn=async e=>R(G(),"r34_search",{page_number:e}),gn=async()=>R(G(),"firestore_read",{site:document.title||"kurosearch_v3"}),mn=async()=>R(G(),"firestore_write",{site:document.title||"kurosearch_v3"});export{gn as a,mn as b,hn as l};
