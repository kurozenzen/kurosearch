import{s as C,a as B,e as p,c as U,i as E,d as h,b as j,o as W,f as z,g as F,h as G,j as I,k as d,l as H,m as J,n as K,t as M,p as O,q as v}from"../chunks/scheduler.88299003.js";import{S as Q,i as X,t as g,c as L,a as w,g as D,b as k,d as T,m as R,e as P}from"../chunks/index.15b414ac.js";const Y="modulepreload",Z=function(a){return"/"+a},V={},m=function(e,n,s){if(!n||n.length===0)return e();const i=document.getElementsByTagName("link");return Promise.all(n.map(f=>{if(f=Z(f),f in V)return;V[f]=!0;const t=f.endsWith(".css"),r=t?'[rel="stylesheet"]':"";if(!!s)for(let l=i.length-1;l>=0;l--){const u=i[l];if(u.href===f&&(!t||u.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${f}"]${r}`))return;const o=document.createElement("link");if(o.rel=t?"stylesheet":Y,t||(o.as="script",o.crossOrigin=""),o.href=f,document.head.appendChild(o),t)return new Promise((l,u)=>{o.addEventListener("load",l),o.addEventListener("error",()=>u(new Error(`Unable to preload CSS for ${f}`)))})})).then(()=>e()).catch(f=>{const t=new Event("vite:preloadError",{cancelable:!0});if(t.payload=f,window.dispatchEvent(t),!t.defaultPrevented)throw f})},re={};function $(a){let e,n,s;var i=a[1][0];function f(t){return{props:{data:t[3],form:t[2]}}}return i&&(e=v(i,f(a)),a[12](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),E(t,n,r),s=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&4&&(_.form=t[2]),r&2&&i!==(i=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),L()}i?(e=v(i,f(t)),t[12](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&h(n),a[12](null),e&&P(e,t)}}}function x(a){let e,n,s;var i=a[1][0];function f(t){return{props:{data:t[3],$$slots:{default:[ee]},$$scope:{ctx:t}}}}return i&&(e=v(i,f(a)),a[11](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),E(t,n,r),s=!0},p(t,r){const _={};if(r&8&&(_.data=t[3]),r&8215&&(_.$$scope={dirty:r,ctx:t}),r&2&&i!==(i=t[1][0])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),L()}i?(e=v(i,f(t)),t[11](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&h(n),a[11](null),e&&P(e,t)}}}function ee(a){let e,n,s;var i=a[1][1];function f(t){return{props:{data:t[4],form:t[2]}}}return i&&(e=v(i,f(a)),a[10](e)),{c(){e&&k(e.$$.fragment),n=p()},l(t){e&&T(e.$$.fragment,t),n=p()},m(t,r){e&&R(e,t,r),E(t,n,r),s=!0},p(t,r){const _={};if(r&16&&(_.data=t[4]),r&4&&(_.form=t[2]),r&2&&i!==(i=t[1][1])){if(e){D();const o=e;g(o.$$.fragment,1,0,()=>{P(o,1)}),L()}i?(e=v(i,f(t)),t[10](e),k(e.$$.fragment),w(e.$$.fragment,1),R(e,n.parentNode,n)):e=null}else i&&e.$set(_)},i(t){s||(e&&w(e.$$.fragment,t),s=!0)},o(t){e&&g(e.$$.fragment,t),s=!1},d(t){t&&h(n),a[10](null),e&&P(e,t)}}}function A(a){let e,n=a[6]&&y(a);return{c(){e=z("div"),n&&n.c(),this.h()},l(s){e=F(s,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var i=G(e);n&&n.l(i),i.forEach(h),this.h()},h(){I(e,"id","svelte-announcer"),I(e,"aria-live","assertive"),I(e,"aria-atomic","true"),d(e,"position","absolute"),d(e,"left","0"),d(e,"top","0"),d(e,"clip","rect(0 0 0 0)"),d(e,"clip-path","inset(50%)"),d(e,"overflow","hidden"),d(e,"white-space","nowrap"),d(e,"width","1px"),d(e,"height","1px")},m(s,i){E(s,e,i),n&&n.m(e,null)},p(s,i){s[6]?n?n.p(s,i):(n=y(s),n.c(),n.m(e,null)):n&&(n.d(1),n=null)},d(s){s&&h(e),n&&n.d()}}}function y(a){let e;return{c(){e=H(a[7])},l(n){e=J(n,a[7])},m(n,s){E(n,e,s)},p(n,s){s&128&&K(e,n[7])},d(n){n&&h(e)}}}function te(a){let e,n,s,i,f;const t=[x,$],r=[];function _(l,u){return l[1][1]?0:1}e=_(a),n=r[e]=t[e](a);let o=a[5]&&A(a);return{c(){n.c(),s=B(),o&&o.c(),i=p()},l(l){n.l(l),s=U(l),o&&o.l(l),i=p()},m(l,u){r[e].m(l,u),E(l,s,u),o&&o.m(l,u),E(l,i,u),f=!0},p(l,[u]){let b=e;e=_(l),e===b?r[e].p(l,u):(D(),g(r[b],1,1,()=>{r[b]=null}),L(),n=r[e],n?n.p(l,u):(n=r[e]=t[e](l),n.c()),w(n,1),n.m(s.parentNode,s)),l[5]?o?o.p(l,u):(o=A(l),o.c(),o.m(i.parentNode,i)):o&&(o.d(1),o=null)},i(l){f||(w(n),f=!0)},o(l){g(n),f=!1},d(l){l&&(h(s),h(i)),r[e].d(l),o&&o.d(l)}}}function ne(a,e,n){let{stores:s}=e,{page:i}=e,{constructors:f}=e,{components:t=[]}=e,{form:r}=e,{data_0:_=null}=e,{data_1:o=null}=e;j(s.page.notify);let l=!1,u=!1,b=null;W(()=>{const c=s.page.subscribe(()=>{l&&(n(6,u=!0),M().then(()=>{n(7,b=document.title||"untitled page")}))});return n(5,l=!0),c});function N(c){O[c?"unshift":"push"](()=>{t[1]=c,n(0,t)})}function S(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}function q(c){O[c?"unshift":"push"](()=>{t[0]=c,n(0,t)})}return a.$$set=c=>{"stores"in c&&n(8,s=c.stores),"page"in c&&n(9,i=c.page),"constructors"in c&&n(1,f=c.constructors),"components"in c&&n(0,t=c.components),"form"in c&&n(2,r=c.form),"data_0"in c&&n(3,_=c.data_0),"data_1"in c&&n(4,o=c.data_1)},a.$$.update=()=>{a.$$.dirty&768&&s.page.set(i)},[t,f,r,_,o,l,u,b,s,i,N,S,q]}class oe extends Q{constructor(e){super(),X(this,e,ne,te,C,{stores:8,page:9,constructors:1,components:0,form:2,data_0:3,data_1:4})}}const ae=[()=>m(()=>import("../nodes/0.a7d11557.js"),["app/immutable/nodes/0.a7d11557.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/firebase.5dd7cec4.js","app/immutable/chunks/index.esm2017.45e8812c.js","app/immutable/chunks/paths.49729195.js","app/immutable/chunks/SettingsLink.694e98c1.js","app/immutable/chunks/IconLink.5986ef68.js","app/immutable/assets/IconLink.9d4e619a.css","app/immutable/assets/SettingsLink.41ba7049.css","app/immutable/chunks/CodiconLink.c2b8a8c6.js","app/immutable/assets/CodiconLink.bdf8e2b9.css","app/immutable/chunks/theme-store.85dd352e.js","app/immutable/chunks/store-keys.5b62d166.js","app/immutable/chunks/index.07c02568.js","app/immutable/assets/0.c216ccda.css"]),()=>m(()=>import("../nodes/1.650adc07.js"),["app/immutable/nodes/1.650adc07.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/singletons.7086e1fe.js","app/immutable/chunks/index.07c02568.js","app/immutable/chunks/paths.49729195.js","app/immutable/chunks/environment.4a30ab0f.js"]),()=>m(()=>import("../nodes/2.5960f2ec.js"),["app/immutable/nodes/2.5960f2ec.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/posts.779cfae3.js","app/immutable/chunks/tags.49324235.js","app/immutable/chunks/store-keys.5b62d166.js","app/immutable/chunks/index.07c02568.js","app/immutable/chunks/tag-type-data.934b5280.js","app/immutable/chunks/search-builder.db79c358.js","app/immutable/chunks/each.e59479a4.js","app/immutable/chunks/DetailedTag.8c9e45d9.js","app/immutable/chunks/format-tag.7e313273.js","app/immutable/chunks/tag-modifier-data.021c0243.js","app/immutable/assets/DetailedTag.2f7f7778.css","app/immutable/chunks/blocked-content-store.8cb9d99a.js","app/immutable/assets/search-builder.10703c48.css","app/immutable/chunks/supertags-store.2b9b4ba9.js","app/immutable/chunks/await_block.7017edd9.js","app/immutable/chunks/paths.49729195.js","app/immutable/chunks/ModifierSelect.623aacd6.js","app/immutable/assets/ModifierSelect.31c7e0b5.css","app/immutable/chunks/LoadingAnimation.bc4b1a41.js","app/immutable/assets/LoadingAnimation.79e4bc51.css","app/immutable/chunks/CodiconLink.c2b8a8c6.js","app/immutable/chunks/IconLink.5986ef68.js","app/immutable/assets/IconLink.9d4e619a.css","app/immutable/assets/CodiconLink.bdf8e2b9.css","app/immutable/assets/supertags-store.7c0b16d4.css","app/immutable/chunks/TextButton.2f318c50.js","app/immutable/assets/TextButton.03e2b204.css","app/immutable/chunks/Dialog.1398ea51.js","app/immutable/assets/Dialog.412f7a60.css","app/immutable/chunks/Details.1727caa9.js","app/immutable/chunks/SimpleTag.22da9add.js","app/immutable/assets/SimpleTag.4a54bff4.css","app/immutable/assets/Details.ce944d6c.css","app/immutable/chunks/Select.22805bc7.js","app/immutable/assets/Select.a851e2ac.css","app/immutable/chunks/RotatingTextSelect.7e32facf.js","app/immutable/chunks/ScrollUpButton.cfa21b3f.js","app/immutable/assets/ScrollUpButton.f47fbc2e.css","app/immutable/chunks/analytics.eca95ce1.js","app/immutable/chunks/index.esm2017.45e8812c.js","app/immutable/assets/2.d1809e1e.css"]),()=>m(()=>import("../nodes/3.9016beb4.js"),["app/immutable/nodes/3.9016beb4.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/await_block.7017edd9.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/environment.4a30ab0f.js","app/immutable/chunks/paths.49729195.js","app/immutable/chunks/Heading3.0318d9ca.js","app/immutable/assets/Heading3.c32fe621.css","app/immutable/chunks/IconLink.5986ef68.js","app/immutable/assets/IconLink.9d4e619a.css","app/immutable/chunks/TextButton.2f318c50.js","app/immutable/assets/TextButton.03e2b204.css","app/immutable/assets/3.2109d544.css"]),()=>m(()=>import("../nodes/4.dd0b432d.js"),["app/immutable/nodes/4.dd0b432d.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/firebase.5dd7cec4.js","app/immutable/chunks/index.esm2017.45e8812c.js","app/immutable/chunks/each.e59479a4.js","app/immutable/chunks/localstorage-enabled-store.5218f5d4.js","app/immutable/chunks/Dialog.1398ea51.js","app/immutable/chunks/store-keys.5b62d166.js","app/immutable/chunks/index.07c02568.js","app/immutable/assets/Dialog.412f7a60.css","app/immutable/chunks/Heading3.0318d9ca.js","app/immutable/assets/Heading3.c32fe621.css","app/immutable/chunks/TextButton.2f318c50.js","app/immutable/assets/TextButton.03e2b204.css","app/immutable/assets/localstorage-enabled-store.2fafd00f.css","app/immutable/chunks/TextInput.151dd205.js","app/immutable/assets/TextInput.ff3608fc.css","app/immutable/chunks/supertags-store.2b9b4ba9.js","app/immutable/chunks/await_block.7017edd9.js","app/immutable/chunks/paths.49729195.js","app/immutable/chunks/ModifierSelect.623aacd6.js","app/immutable/chunks/tag-modifier-data.021c0243.js","app/immutable/assets/ModifierSelect.31c7e0b5.css","app/immutable/chunks/LoadingAnimation.bc4b1a41.js","app/immutable/assets/LoadingAnimation.79e4bc51.css","app/immutable/chunks/CodiconLink.c2b8a8c6.js","app/immutable/chunks/IconLink.5986ef68.js","app/immutable/assets/IconLink.9d4e619a.css","app/immutable/assets/CodiconLink.bdf8e2b9.css","app/immutable/chunks/format-tag.7e313273.js","app/immutable/chunks/tags.49324235.js","app/immutable/assets/supertags-store.7c0b16d4.css","app/immutable/chunks/blocked-content-store.8cb9d99a.js","app/immutable/chunks/theme-store.85dd352e.js","app/immutable/chunks/tag-utils.ceb6413c.js","app/immutable/chunks/analytics.eca95ce1.js","app/immutable/assets/4.b18303a5.css"]),()=>m(()=>import("../nodes/5.28988b9a.js"),["app/immutable/nodes/5.28988b9a.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/Heading3.0318d9ca.js","app/immutable/assets/Heading3.c32fe621.css","app/immutable/assets/5.bf88a0a5.css"]),()=>m(()=>import("../nodes/6.1e9e923a.js"),["app/immutable/nodes/6.1e9e923a.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/DetailedTag.8c9e45d9.js","app/immutable/chunks/format-tag.7e313273.js","app/immutable/chunks/tag-modifier-data.021c0243.js","app/immutable/chunks/tag-type-data.934b5280.js","app/immutable/assets/DetailedTag.2f7f7778.css","app/immutable/chunks/SimpleTag.22da9add.js","app/immutable/assets/SimpleTag.4a54bff4.css","app/immutable/chunks/ScrollUpButton.cfa21b3f.js","app/immutable/assets/ScrollUpButton.f47fbc2e.css","app/immutable/chunks/Heading3.0318d9ca.js","app/immutable/assets/Heading3.c32fe621.css","app/immutable/chunks/tag-utils.ceb6413c.js","app/immutable/assets/6.97abea31.css"]),()=>m(()=>import("../nodes/7.517fc6d5.js"),["app/immutable/nodes/7.517fc6d5.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/await_block.7017edd9.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/Details.1727caa9.js","app/immutable/chunks/paths.49729195.js","app/immutable/chunks/each.e59479a4.js","app/immutable/chunks/LoadingAnimation.bc4b1a41.js","app/immutable/assets/LoadingAnimation.79e4bc51.css","app/immutable/chunks/format-tag.7e313273.js","app/immutable/chunks/tags.49324235.js","app/immutable/chunks/posts.779cfae3.js","app/immutable/chunks/store-keys.5b62d166.js","app/immutable/chunks/index.07c02568.js","app/immutable/chunks/tag-type-data.934b5280.js","app/immutable/chunks/SimpleTag.22da9add.js","app/immutable/assets/SimpleTag.4a54bff4.css","app/immutable/assets/Details.ce944d6c.css","app/immutable/assets/7.c908c19d.css"]),()=>m(()=>import("../nodes/8.3e60176c.js"),["app/immutable/nodes/8.3e60176c.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/each.e59479a4.js","app/immutable/chunks/Checkbox.8de00bf0.js","app/immutable/assets/Checkbox.de4b02c1.css","app/immutable/chunks/Heading3.0318d9ca.js","app/immutable/assets/Heading3.c32fe621.css","app/immutable/chunks/Select.22805bc7.js","app/immutable/assets/Select.a851e2ac.css","app/immutable/chunks/TextButton.2f318c50.js","app/immutable/assets/TextButton.03e2b204.css","app/immutable/chunks/blocked-content-store.8cb9d99a.js","app/immutable/chunks/store-keys.5b62d166.js","app/immutable/chunks/index.07c02568.js","app/immutable/chunks/localstorage-enabled-store.5218f5d4.js","app/immutable/chunks/Dialog.1398ea51.js","app/immutable/assets/Dialog.412f7a60.css","app/immutable/assets/localstorage-enabled-store.2fafd00f.css","app/immutable/chunks/theme-store.85dd352e.js","app/immutable/assets/8.eab0bbcc.css"]),()=>m(()=>import("../nodes/9.bea1eac0.js"),["app/immutable/nodes/9.bea1eac0.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/each.e59479a4.js","app/immutable/chunks/search-builder.db79c358.js","app/immutable/chunks/DetailedTag.8c9e45d9.js","app/immutable/chunks/format-tag.7e313273.js","app/immutable/chunks/tag-modifier-data.021c0243.js","app/immutable/chunks/tag-type-data.934b5280.js","app/immutable/assets/DetailedTag.2f7f7778.css","app/immutable/chunks/posts.779cfae3.js","app/immutable/chunks/tags.49324235.js","app/immutable/chunks/store-keys.5b62d166.js","app/immutable/chunks/index.07c02568.js","app/immutable/chunks/blocked-content-store.8cb9d99a.js","app/immutable/assets/search-builder.10703c48.css","app/immutable/chunks/supertags-store.2b9b4ba9.js","app/immutable/chunks/await_block.7017edd9.js","app/immutable/chunks/paths.49729195.js","app/immutable/chunks/ModifierSelect.623aacd6.js","app/immutable/assets/ModifierSelect.31c7e0b5.css","app/immutable/chunks/LoadingAnimation.bc4b1a41.js","app/immutable/assets/LoadingAnimation.79e4bc51.css","app/immutable/chunks/CodiconLink.c2b8a8c6.js","app/immutable/chunks/IconLink.5986ef68.js","app/immutable/assets/IconLink.9d4e619a.css","app/immutable/assets/CodiconLink.bdf8e2b9.css","app/immutable/assets/supertags-store.7c0b16d4.css","app/immutable/assets/9.57c90ca4.css"]),()=>m(()=>import("../nodes/10.7d03d10d.js"),["app/immutable/nodes/10.7d03d10d.js","app/immutable/chunks/scheduler.88299003.js","app/immutable/chunks/index.15b414ac.js","app/immutable/chunks/Checkbox.8de00bf0.js","app/immutable/assets/Checkbox.de4b02c1.css","app/immutable/chunks/Heading3.0318d9ca.js","app/immutable/assets/Heading3.c32fe621.css","app/immutable/chunks/LoadingAnimation.bc4b1a41.js","app/immutable/assets/LoadingAnimation.79e4bc51.css","app/immutable/chunks/ModifierSelect.623aacd6.js","app/immutable/chunks/tag-modifier-data.021c0243.js","app/immutable/assets/ModifierSelect.31c7e0b5.css","app/immutable/chunks/RotatingTextSelect.7e32facf.js","app/immutable/chunks/Select.22805bc7.js","app/immutable/chunks/each.e59479a4.js","app/immutable/assets/Select.a851e2ac.css","app/immutable/chunks/TextButton.2f318c50.js","app/immutable/assets/TextButton.03e2b204.css","app/immutable/chunks/TextInput.151dd205.js","app/immutable/assets/TextInput.ff3608fc.css","app/immutable/chunks/DetailedTag.8c9e45d9.js","app/immutable/chunks/format-tag.7e313273.js","app/immutable/chunks/tag-type-data.934b5280.js","app/immutable/assets/DetailedTag.2f7f7778.css","app/immutable/chunks/CodiconLink.c2b8a8c6.js","app/immutable/chunks/IconLink.5986ef68.js","app/immutable/assets/IconLink.9d4e619a.css","app/immutable/assets/CodiconLink.bdf8e2b9.css","app/immutable/chunks/SettingsLink.694e98c1.js","app/immutable/chunks/paths.49729195.js","app/immutable/assets/SettingsLink.41ba7049.css","app/immutable/assets/10.2860deb1.css"])],le=[],fe={"/":[2],"/about":[3],"/account":[4],"/debug":[5],"/help":[6],"/post":[7],"/preferences":[8],"/query":[9],"/test":[10]},ce={handleError:({error:a})=>{console.error(a)}};export{fe as dictionary,ce as hooks,re as matchers,ae as nodes,oe as root,le as server_loads};
