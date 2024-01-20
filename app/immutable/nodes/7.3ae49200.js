import{s as C,e as L,a as b,f as h,x as I,d as f,c as y,g as k,h as M,j as p,u as T,i as m,C as V,v as _}from"../chunks/scheduler.32f194ce.js";import{h as D,u as S}from"../chunks/await_block.af8be678.js";import{S as j,i as q,a as $,t as g,b as v,d as w,m as P,e as E}from"../chunks/index.aa0a4971.js";import{D as G,G as N,V as R,f as A,I as U,d as z}from"../chunks/Details.4fdac935.js";import{L as B}from"../chunks/LoadingAnimation.1752780f.js";import{g as F}from"../chunks/posts.7a37cd61.js";import{a as H}from"../chunks/always-loop-store.79351e6e.js";function J(o){const t=o.slice(),n=z(t[5].file_url,t[5].sample_url,t[5].preview_url);t[6]=n;const e=t[6].animated;t[7]=e;const r=t[6].static;return t[8]=r,t}function K(o){let t,n,e,r,a,u,c,s;return{c(){t=h("meta"),n=b(),e=h("meta"),r=b(),a=h("meta"),c=b(),s=h("meta"),this.h()},l(i){t=k(i,"META",{property:!0,content:!0}),n=y(i),e=k(i,"META",{property:!0,content:!0}),r=y(i),a=k(i,"META",{property:!0,content:!0}),c=y(i),s=k(i,"META",{property:!0,content:!0}),this.h()},h(){p(t,"property","og:image"),p(t,"content",o[3]),p(e,"property","og:image:secure_url"),p(e,"content",o[3]),p(a,"property","og:image:type"),p(a,"content",u="image/"+o[0]),p(s,"property","og:image:alt"),p(s,"content","Post "+o[2])},m(i,l){m(i,t,l),m(i,n,l),m(i,e,l),m(i,r,l),m(i,a,l),m(i,c,l),m(i,s,l)},p(i,l){l&1&&u!==(u="image/"+i[0])&&p(a,"content",u)},d(i){i&&(f(t),f(n),f(e),f(r),f(a),f(c),f(s))}}}function O(o){let t,n,e={ctx:o,current:null,token:null,hasCatch:!1,pending:x,then:W,catch:Q,value:5,blocks:[,,,]};return D(F(o[2]),e),{c(){t=L(),e.block.c()},l(r){t=L(),e.block.l(r)},m(r,a){m(r,t,a),e.block.m(r,e.anchor=a),e.mount=()=>t.parentNode,e.anchor=t,n=!0},p(r,a){o=r,S(e,o,a)},i(r){n||($(e.block),n=!0)},o(r){for(let a=0;a<3;a+=1){const u=e.blocks[a];g(u)}n=!1},d(r){r&&f(t),e.block.d(r),e.token=null,e=null}}}function Q(o){return{c:_,l:_,m:_,p:_,i:_,o:_,d:_}}function W(o){let t,n,e,r,a;const u=[Z,Y,X],c=[];function s(l,d){return l[5].type==="image"?0:l[5].type==="video"?1:2}function i(l,d){return d===1?J(l):l}return t=s(o),n=c[t]=u[t](i(o,t)),r=new G({props:{post:o[5]}}),{c(){n.c(),e=b(),v(r.$$.fragment)},l(l){n.l(l),e=y(l),w(r.$$.fragment,l)},m(l,d){c[t].m(l,d),m(l,e,d),P(r,l,d),a=!0},p(l,d){n.p(i(l,t),d)},i(l){a||($(n),$(r.$$.fragment,l),a=!0)},o(l){g(n),g(r.$$.fragment,l),a=!1},d(l){l&&f(e),c[t].d(l),E(r,l)}}}function X(o){let t,n;return t=new N({props:{post:o[5]}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){P(t,e,r),n=!0},p:_,i(e){n||($(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Y(o){let t,n;return t=new R({props:{src:o[7],poster:o[8],width:o[5].width,height:o[5].height,loop:o[1]||A(o[5].tags)}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){P(t,e,r),n=!0},p(e,r){const a={};r&2&&(a.loop=e[1]||A(e[5].tags)),t.$set(a)},i(e){n||($(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function Z(o){let t,n;return t=new U({props:{post:o[5],open:!0}}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){P(t,e,r),n=!0},p:_,i(e){n||($(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function x(o){let t,n;return t=new B({}),{c(){v(t.$$.fragment)},l(e){w(t.$$.fragment,e)},m(e,r){P(t,e,r),n=!0},p:_,i(e){n||($(t.$$.fragment,e),n=!0)},o(e){g(t.$$.fragment,e),n=!1},d(e){E(t,e)}}}function ee(o){let t,n,e,r,a;document.title=t="kurosearch - Post "+o[2];let u=o[3]&&K(o),c=o[2]&&O(o);return{c(){u&&u.c(),n=L(),e=b(),r=h("div"),c&&c.c(),this.h()},l(s){const i=I("svelte-10qjad1",document.head);u&&u.l(i),n=L(),i.forEach(f),e=y(s),r=k(s,"DIV",{class:!0});var l=M(r);c&&c.l(l),l.forEach(f),this.h()},h(){p(r,"class","svelte-1exuhkk")},m(s,i){u&&u.m(document.head,null),T(document.head,n),m(s,e,i),m(s,r,i),c&&c.m(r,null),a=!0},p(s,[i]){(!a||i&4)&&t!==(t="kurosearch - Post "+s[2])&&(document.title=t),s[3]&&u.p(s,i),s[2]&&c.p(s,i)},i(s){a||($(c),a=!0)},o(s){g(c),a=!1},d(s){s&&(f(e),f(r)),u&&u.d(s),f(n),c&&c.d()}}}function te(o,t,n){var s;let e,r;V(o,H,i=>n(1,r=i));const a=new URL(location.href),u=a&&a.searchParams.has("id")?Number(a.searchParams.get("id")):void 0,c=a&&a.searchParams.get("src");return n(0,e=decodeURIComponent(((s=c==null?void 0:c.split("."))==null?void 0:s.at(-1))??"")),[e,r,u,c]}class ce extends j{constructor(t){super(),q(this,t,te,ee,C,{})}}export{ce as component};