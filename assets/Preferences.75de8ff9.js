import{F as K,H as V,S as P,i as j,s as C,I as F,e as b,j as m,p as k,t as w,a as E,b as d,m as $,c as v,d as S,J,K as Q,L as R,k as _,l as p,h as g,o as h,N as U,O as B,q as W,g as O,w as z,P as G,E as X,Q as Y,R as M,T as N,U as A,V as Z,W as y}from"./index.57c38e40.js";import{P as x,a as ee}from"./ParagraphHeading.0a8f84b7.js";const{subscribe:te,set:ne}=V("dark");var T={subscribe:te,set(a){ne(a),se(a),K.setTheme(a)}};const se=a=>{document.documentElement.classList.replace(ae(a),a)},ae=a=>a==="dark"?"light":"dark";function le(a){let e;return{c(){e=w(a[0])},m(s,l){d(s,e,l)},p(s,l){l&1&&S(e,s[0])},d(s){s&&g(e)}}}function re(a){let e,s,l,i,r,t,n;s=new x({props:{$$slots:{default:[le]},$$scope:{ctx:a}}});const o=a[2].default,u=F(o,a,a[3],null);return{c(){e=b("div"),m(s.$$.fragment),l=k(),i=b("p"),r=w(a[1]),t=k(),u&&u.c(),E(i,"class","svelte-6x698v")},m(c,f){d(c,e,f),$(s,e,null),v(e,l),v(e,i),v(i,r),v(e,t),u&&u.m(e,null),n=!0},p(c,[f]){const q={};f&9&&(q.$$scope={dirty:f,ctx:c}),s.$set(q),(!n||f&2)&&S(r,c[1]),u&&u.p&&(!n||f&8)&&J(u,o,c,c[3],n?R(o,c[3],f,null):Q(c[3]),null)},i(c){n||(_(s.$$.fragment,c),_(u,c),n=!0)},o(c){p(s.$$.fragment,c),p(u,c),n=!1},d(c){c&&g(e),h(s),u&&u.d(c)}}}function oe(a,e,s){let{$$slots:l={},$$scope:i}=e,{title:r}=e,{description:t}=e;return a.$$set=n=>{"title"in n&&s(0,r=n.title),"description"in n&&s(1,t=n.description),"$$scope"in n&&s(3,i=n.$$scope)},[r,t,l,i]}class D extends P{constructor(e){super(),j(this,e,oe,re,C,{title:0,description:1})}}function H(a,e,s){const l=a.slice();return l[0]=e[s][0],l[3]=e[s][1],l}function L(a){let e,s=a[3]+"",l,i;return{c(){e=b("option"),l=w(s),e.__value=i=a[0],e.value=e.__value,E(e,"class","svelte-q7wjrm")},m(r,t){d(r,e,t),v(e,l)},p(r,t){t&2&&s!==(s=r[3]+"")&&S(l,s),t&2&&i!==(i=r[0])&&(e.__value=i,e.value=e.__value)},d(r){r&&g(e)}}}function ie(a){let e,s,l,i=Object.entries(a[1]),r=[];for(let t=0;t<i.length;t+=1)r[t]=L(H(a,i,t));return{c(){e=b("select");for(let t=0;t<r.length;t+=1)r[t].c();E(e,"class","svelte-q7wjrm"),a[0]===void 0&&U(()=>a[2].call(e))},m(t,n){d(t,e,n);for(let o=0;o<r.length;o+=1)r[o].m(e,null);B(e,a[0]),s||(l=W(e,"change",a[2]),s=!0)},p(t,[n]){if(n&2){i=Object.entries(t[1]);let o;for(o=0;o<i.length;o+=1){const u=H(t,i,o);r[o]?r[o].p(u,n):(r[o]=L(u),r[o].c(),r[o].m(e,null))}for(;o<r.length;o+=1)r[o].d(1);r.length=i.length}n&3&&B(e,t[0])},i:O,o:O,d(t){t&&g(e),z(r,t),s=!1,l()}}}function ce(a,e,s){let{options:l}=e,{value:i}=e;function r(){i=G(this),s(0,i),s(1,l)}return a.$$set=t=>{"options"in t&&s(1,l=t.options),"value"in t&&s(0,i=t.value)},[i,l,r]}class I extends P{constructor(e){super(),j(this,e,ce,ie,C,{options:1,value:0})}}function ue(a){let e;return{c(){e=w("Preferences")},m(s,l){d(s,e,l)},d(s){s&&g(e)}}}function fe(a){let e,s,l;function i(t){a[2](t)}let r={options:{dark:"Dark Mode",light:"Light Mode"}};return a[1]!==void 0&&(r.value=a[1]),e=new I({props:r}),M.push(()=>N(e,"value",i)),{c(){m(e.$$.fragment)},m(t,n){$(e,t,n),l=!0},p(t,n){const o={};!s&&n&2&&(s=!0,o.value=t[1],A(()=>s=!1)),e.$set(o)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){h(e,t)}}}function _e(a){let e,s,l;function i(t){a[3](t)}let r={options:y};return a[0]!==void 0&&(r.value=a[0]),e=new I({props:r}),M.push(()=>N(e,"value",i)),{c(){m(e.$$.fragment)},m(t,n){$(e,t,n),l=!0},p(t,n){const o={};!s&&n&1&&(s=!0,o.value=t[0],A(()=>s=!1)),e.$set(o)},i(t){l||(_(e.$$.fragment,t),l=!0)},o(t){p(e.$$.fragment,t),l=!1},d(t){h(e,t)}}}function pe(a){let e,s,l,i,r,t;return e=new ee({props:{$$slots:{default:[ue]},$$scope:{ctx:a}}}),l=new D({props:{title:"Theme",description:"Change the look of the app.",$$slots:{default:[fe]},$$scope:{ctx:a}}}),r=new D({props:{title:"Backend",description:"Determines where images are loaded from. If you cannot load any images from one backend, try another one.",$$slots:{default:[_e]},$$scope:{ctx:a}}}),{c(){m(e.$$.fragment),s=k(),m(l.$$.fragment),i=k(),m(r.$$.fragment)},m(n,o){$(e,n,o),d(n,s,o),$(l,n,o),d(n,i,o),$(r,n,o),t=!0},p(n,[o]){const u={};o&16&&(u.$$scope={dirty:o,ctx:n}),e.$set(u);const c={};o&18&&(c.$$scope={dirty:o,ctx:n}),l.$set(c);const f={};o&17&&(f.$$scope={dirty:o,ctx:n}),r.$set(f)},i(n){t||(_(e.$$.fragment,n),_(l.$$.fragment,n),_(r.$$.fragment,n),t=!0)},o(n){p(e.$$.fragment,n),p(l.$$.fragment,n),p(r.$$.fragment,n),t=!1},d(n){h(e,n),n&&g(s),h(l,n),n&&g(i),h(r,n)}}}function de(a,e,s){let l;X(a,T,n=>s(1,l=n));let i=Z();function r(n){l=n,T.set(l)}function t(n){i=n,s(0,i)}return a.$$.update=()=>{a.$$.dirty&1&&Y(i)},[i,l,r,t]}class $e extends P{constructor(e){super(),j(this,e,de,pe,C,{})}}export{$e as default};
