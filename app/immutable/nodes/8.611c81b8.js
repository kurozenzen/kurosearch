import{s as fe,w as he,f as y,a as P,l as A,g as J,h as Q,c as T,m as D,d as b,j as ie,i as S,u as L,n as M,z as de,A as be,B as ke,e as G,x as ve,C as H,p as U,L as j,G as we,v as ue}from"../chunks/scheduler.32f194ce.js";import{S as $e,i as pe,b as k,d as v,m as w,a as m,t as h,e as C,c as _e,f as q,g as me}from"../chunks/index.aa0a4971.js";import{e as oe}from"../chunks/each.e59479a4.js";import{C as X}from"../chunks/Checkbox.497fa8ba.js";import{a as Ce,H as Se}from"../chunks/Heading3.b8e77da3.js";import{S as ge}from"../chunks/Select.86ea1f7f.js";import{T as Oe}from"../chunks/TextButton.bf64be78.js";import{A as le,b as V}from"../chunks/blocked-content-store.7da87934.js";import{C as Pe,l as F}from"../chunks/localstorage-enabled-store.05ddb642.js";import{a as K}from"../chunks/always-loop-store.bf7dfe24.js";import{t as W}from"../chunks/theme-store.ff27f5d9.js";import{r as Y}from"../chunks/result-columns-store.6bdf0258.js";import{c as Te}from"../chunks/cookies-accepted-store.e594aa74.js";function Ee(o){let e;return{c(){e=A(o[0])},l(t){e=D(t,o[0])},m(t,n){S(t,e,n)},p(t,n){n&1&&M(e,t[0])},d(t){t&&b(e)}}}function Le(o){let e,t,n,r,c,s,l;t=new Ce({props:{$$slots:{default:[Ee]},$$scope:{ctx:o}}});const a=o[2].default,i=he(a,o,o[3],null);return{c(){e=y("div"),k(t.$$.fragment),n=P(),r=y("p"),c=A(o[1]),s=P(),i&&i.c(),this.h()},l($){e=J($,"DIV",{});var p=Q(e);v(t.$$.fragment,p),n=T(p),r=J(p,"P",{class:!0});var O=Q(r);c=D(O,o[1]),O.forEach(b),s=T(p),i&&i.l(p),p.forEach(b),this.h()},h(){ie(r,"class","svelte-iwxew1")},m($,p){S($,e,p),w(t,e,null),L(e,n),L(e,r),L(r,c),L(e,s),i&&i.m(e,null),l=!0},p($,[p]){const O={};p&9&&(O.$$scope={dirty:p,ctx:$}),t.$set(O),(!l||p&2)&&M(c,$[1]),i&&i.p&&(!l||p&8)&&de(i,a,$,$[3],l?ke(a,$[3],p,null):be($[3]),null)},i($){l||(m(t.$$.fragment,$),m(i,$),l=!0)},o($){h(t.$$.fragment,$),h(i,$),l=!1},d($){$&&b(e),C(t),i&&i.d($)}}}function Be(o,e,t){let{$$slots:n={},$$scope:r}=e,{title:c}=e,{description:s}=e;return o.$$set=l=>{"title"in l&&t(0,c=l.title),"description"in l&&t(1,s=l.description),"$$scope"in l&&t(3,r=l.$$scope)},[c,s,n,r]}class N extends $e{constructor(e){super(),pe(this,e,Be,Le,fe,{title:0,description:1})}}function re(o,e,t){const n=o.slice();return n[14]=e[t],n[15]=e,n[16]=t,n}function Re(o){let e;return{c(){e=A("Preferences")},l(t){e=D(t,"Preferences")},m(t,n){S(t,e,n)},d(t){t&&b(e)}}}function Ae(o){let e,t,n;function r(s){o[7](s)}let c={options:Ve};return o[1]!==void 0&&(c.value=o[1]),e=new ge({props:c}),U.push(()=>q(e,"value",r)),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,l){w(e,s,l),n=!0},p(s,l){const a={};!t&&l&2&&(t=!0,a.value=s[1],j(()=>t=!1)),e.$set(a)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){h(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function De(o){let e=o[2]?"Save":"Don't save",t;return{c(){t=A(e)},l(n){t=D(n,e)},m(n,r){S(n,t,r)},p(n,r){r&4&&e!==(e=n[2]?"Save":"Don't save")&&M(t,e)},d(n){n&&b(t)}}}function Ne(o){let e,t,n;function r(s){o[8](s)}let c={id:"checkbox-localstorage-enabled",$$slots:{default:[De]},$$scope:{ctx:o}};return o[2]!==void 0&&(c.checked=o[2]),e=new X({props:c}),U.push(()=>q(e,"checked",r)),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,l){w(e,s,l),n=!0},p(s,l){const a={};l&131076&&(a.$$scope={dirty:l,ctx:s}),!t&&l&4&&(t=!0,a.checked=s[2],j(()=>t=!1)),e.$set(a)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){h(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function Ie(o){let e,t;return{c(){e=A(o[14]),t=P()},l(n){e=D(n,o[14]),t=T(n)},m(n,r){S(n,e,r),S(n,t,r)},p:ue,d(n){n&&(b(e),b(t))}}}function ae(o){let e,t,n;function r(s){o[9](s,o[14])}let c={id:`checkbox-${o[14]}`,$$slots:{default:[Ie]},$$scope:{ctx:o}};return o[3][o[14]]!==void 0&&(c.checked=o[3][o[14]]),e=new X({props:c}),U.push(()=>q(e,"checked",r)),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,l){w(e,s,l),n=!0},p(s,l){o=s;const a={};l&131072&&(a.$$scope={dirty:l,ctx:o}),!t&&l&8&&(t=!0,a.checked=o[3][o[14]],j(()=>t=!1)),e.$set(a)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){h(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function ze(o){let e,t,n=oe(le),r=[];for(let s=0;s<n.length;s+=1)r[s]=ae(re(o,n,s));const c=s=>h(r[s],1,1,()=>{r[s]=null});return{c(){for(let s=0;s<r.length;s+=1)r[s].c();e=G()},l(s){for(let l=0;l<r.length;l+=1)r[l].l(s);e=G()},m(s,l){for(let a=0;a<r.length;a+=1)r[a]&&r[a].m(s,l);S(s,e,l),t=!0},p(s,l){if(l&8){n=oe(le);let a;for(a=0;a<n.length;a+=1){const i=re(s,n,a);r[a]?(r[a].p(i,l),m(r[a],1)):(r[a]=ae(i),r[a].c(),m(r[a],1),r[a].m(e.parentNode,e))}for(me(),a=n.length;a<r.length;a+=1)c(a);_e()}},i(s){if(!t){for(let l=0;l<n.length;l+=1)m(r[l]);t=!0}},o(s){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)h(r[l]);t=!1},d(s){s&&b(e),we(r,s)}}}function He(o){let e=o[4]?"Always":"Only with 'loop' tag",t;return{c(){t=A(e)},l(n){t=D(n,e)},m(n,r){S(n,t,r)},p(n,r){r&16&&e!==(e=n[4]?"Always":"Only with 'loop' tag")&&M(t,e)},d(n){n&&b(t)}}}function Ue(o){let e,t,n;function r(s){o[10](s)}let c={id:"checkbox-always-loop",$$slots:{default:[He]},$$scope:{ctx:o}};return o[4]!==void 0&&(c.checked=o[4]),e=new X({props:c}),U.push(()=>q(e,"checked",r)),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,l){w(e,s,l),n=!0},p(s,l){const a={};l&131088&&(a.$$scope={dirty:l,ctx:s}),!t&&l&16&&(t=!0,a.checked=s[4],j(()=>t=!1)),e.$set(a)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){h(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function je(o){let e,t,n;function r(s){o[11](s)}let c={options:Fe};return o[5]!==void 0&&(c.value=o[5]),e=new ge({props:c}),U.push(()=>q(e,"value",r)),{c(){k(e.$$.fragment)},l(s){v(e.$$.fragment,s)},m(s,l){w(e,s,l),n=!0},p(s,l){const a={};!t&&l&32&&(t=!0,a.value=s[5],j(()=>t=!1)),e.$set(a)},i(s){n||(m(e.$$.fragment,s),n=!0)},o(s){h(e.$$.fragment,s),n=!1},d(s){C(e,s)}}}function qe(o){let e;return{c(){e=A("Reset")},l(t){e=D(t,"Reset")},m(t,n){S(t,e,n)},d(t){t&&b(e)}}}function Ge(o){let e,t;return e=new Oe({props:{title:"Reset preferences",$$slots:{default:[qe]},$$scope:{ctx:o}}}),e.$on("click",o[12]),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){w(e,n,r),t=!0},p(n,r){const c={};r&131072&&(c.$$scope={dirty:r,ctx:n}),e.$set(c)},i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){h(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function ce(o){let e,t;return e=new Pe({props:{title:"Reset Preferences",warning:"This will reset all your settings to default values. Are you sure you want to do that?",labelConfirm:"Yes, reset",labelCancel:"Cancel"}}),e.$on("confirm",o[6]),e.$on("close",o[13]),{c(){k(e.$$.fragment)},l(n){v(e.$$.fragment,n)},m(n,r){w(e,n,r),t=!0},p:ue,i(n){t||(m(e.$$.fragment,n),t=!0)},o(n){h(e.$$.fragment,n),t=!1},d(n){C(e,n)}}}function Me(o){let e,t,n,r,c,s,l,a,i,$,p,O,E,I,B,z,u,R;n=new Se({props:{$$slots:{default:[Re]},$$scope:{ctx:o}}}),c=new N({props:{title:"Theme",description:"Change the look of the app.",$$slots:{default:[Ae]},$$scope:{ctx:o}}}),l=new N({props:{title:"Save Tags & Posts",description:"Save active tags and posts between sessions.",$$slots:{default:[Ne]},$$scope:{ctx:o}}}),i=new N({props:{title:"Blocked Content",description:"Completely prevent certain types of posts without cluttering your search.",$$slots:{default:[ze]},$$scope:{ctx:o}}}),p=new N({props:{title:"Loop Videos",description:"By default only videos with the 'loop' tag are looped. When this setting is enabled, all videos are looped.",$$slots:{default:[Ue]},$$scope:{ctx:o}}}),E=new N({props:{title:"Result layout",description:"Save active tags and posts between sessions.",$$slots:{default:[je]},$$scope:{ctx:o}}}),B=new N({props:{title:"Reset preferences",description:"Undo all customizations and return to default settings.",$$slots:{default:[Ge]},$$scope:{ctx:o}}});let g=o[0]&&ce(o);return{c(){e=P(),t=y("section"),k(n.$$.fragment),r=P(),k(c.$$.fragment),s=P(),k(l.$$.fragment),a=P(),k(i.$$.fragment),$=P(),k(p.$$.fragment),O=P(),k(E.$$.fragment),I=P(),k(B.$$.fragment),z=P(),g&&g.c(),u=G(),this.h()},l(f){ve("svelte-1mqmwe6",document.head).forEach(b),e=T(f),t=J(f,"SECTION",{class:!0});var d=Q(t);v(n.$$.fragment,d),r=T(d),v(c.$$.fragment,d),s=T(d),v(l.$$.fragment,d),a=T(d),v(i.$$.fragment,d),$=T(d),v(p.$$.fragment,d),O=T(d),v(E.$$.fragment,d),I=T(d),v(B.$$.fragment,d),d.forEach(b),z=T(f),g&&g.l(f),u=G(),this.h()},h(){document.title="kurosearch - Preferences",ie(t,"class","svelte-110c94f")},m(f,_){S(f,e,_),S(f,t,_),w(n,t,null),L(t,r),w(c,t,null),L(t,s),w(l,t,null),L(t,a),w(i,t,null),L(t,$),w(p,t,null),L(t,O),w(E,t,null),L(t,I),w(B,t,null),S(f,z,_),g&&g.m(f,_),S(f,u,_),R=!0},p(f,[_]){const d={};_&131072&&(d.$$scope={dirty:_,ctx:f}),n.$set(d);const Z={};_&131074&&(Z.$$scope={dirty:_,ctx:f}),c.$set(Z);const x={};_&131076&&(x.$$scope={dirty:_,ctx:f}),l.$set(x);const ee={};_&131080&&(ee.$$scope={dirty:_,ctx:f}),i.$set(ee);const te={};_&131088&&(te.$$scope={dirty:_,ctx:f}),p.$set(te);const ne={};_&131104&&(ne.$$scope={dirty:_,ctx:f}),E.$set(ne);const se={};_&131073&&(se.$$scope={dirty:_,ctx:f}),B.$set(se),f[0]?g?(g.p(f,_),_&1&&m(g,1)):(g=ce(f),g.c(),m(g,1),g.m(u.parentNode,u)):g&&(me(),h(g,1,1,()=>{g=null}),_e())},i(f){R||(m(n.$$.fragment,f),m(c.$$.fragment,f),m(l.$$.fragment,f),m(i.$$.fragment,f),m(p.$$.fragment,f),m(E.$$.fragment,f),m(B.$$.fragment,f),m(g),R=!0)},o(f){h(n.$$.fragment,f),h(c.$$.fragment,f),h(l.$$.fragment,f),h(i.$$.fragment,f),h(p.$$.fragment,f),h(E.$$.fragment,f),h(B.$$.fragment,f),h(g),R=!1},d(f){f&&(b(e),b(t),b(z),b(u)),C(n),C(c),C(l),C(i),C(p),C(E),C(B),g&&g.d(f)}}}const Ve=Object.freeze({"crimson dark":"Dark","crimson light":"Light","hotpink light":"Bubblegum","hotpink dark":"Dark Bubblegum","crimson coffee":"Coffee"}),Fe=Object.freeze({1:"Single Column",2:"Two Columns",3:"Three Columns",4:"Four Columns"});function Ke(o,e,t){let n,r,c,s,l;H(o,W,u=>t(1,n=u)),H(o,F,u=>t(2,r=u)),H(o,V,u=>t(3,c=u)),H(o,K,u=>t(4,s=u)),H(o,Y,u=>t(5,l=u));let a=!1;const i=()=>{W.reset(),F.reset(),V.reset(),K.reset(),Y.reset(),Te.reset()};function $(u){n=u,W.set(n)}function p(u){r=u,F.set(r)}function O(u,R){o.$$.not_equal(c[R],u)&&(c[R]=u,V.set(c))}function E(u){s=u,K.set(s)}function I(u){l=u,Y.set(l)}return[a,n,r,c,s,l,i,$,p,O,E,I,()=>t(0,a=!0),()=>t(0,a=!1)]}class lt extends $e{constructor(e){super(),pe(this,e,Ke,Me,fe,{})}}export{lt as component};
