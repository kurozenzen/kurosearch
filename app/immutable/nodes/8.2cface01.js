import{s as Ce,w as Re,f as y,a as O,l as I,g as W,h as K,c as L,m as B,d as m,j as G,i as D,u as T,n as q,A as Pe,B as Oe,C as Le,p as H,x as Ae,E as V,D as z,e as he,I as Ie,v as Be}from"../chunks/scheduler.a5f94e90.js";import{S as De,i as Se,b as k,d as v,m as w,a as h,t as g,e as E,f as j,g as Ne,c as Fe}from"../chunks/index.364b58a4.js";import{e as ge}from"../chunks/each.e59479a4.js";import{C as Q}from"../chunks/Checkbox.7ddcaeb1.js";import{a as He,H as Ve}from"../chunks/Heading3.9ef0606e.js";import{S as Te}from"../chunks/Select.0cfdbdd5.js";import{T as re}from"../chunks/TextButton.1d2b8d22.js";import{A as be,b as ee}from"../chunks/blocked-content-store.d59a4f6d.js";import{C as je,l as te}from"../chunks/localstorage-enabled-store.a1a1d49c.js";import{a as ne,h as se}from"../chunks/always-loop-store.7fb651a6.js";import{t as oe}from"../chunks/theme-store.3483afea.js";import{r as le,a as ze}from"../chunks/result-columns-store.fad1c3a4.js";import{N as Me,c as Ue,a as ke,b as ve}from"../chunks/cookies-accepted-store.cf59314c.js";import{r as ye,a as We}from"../chunks/active-supertags-store.3658e20d.js";import{a as qe}from"../chunks/active-tags-store.b83fefc6.js";import{w as ae}from"../chunks/wide-layout-enabled-store.b2f4c132.js";function Ge(s){let e;return{c(){e=I(s[0])},l(n){e=B(n,s[0])},m(n,t){D(n,e,t)},p(n,t){t&1&&q(e,n[0])},d(n){n&&m(e)}}}function Ke(s){let e,n,t,l,i,o,r;n=new He({props:{$$slots:{default:[Ge]},$$scope:{ctx:s}}});const c=s[2].default,p=Re(c,s,s[3],null);return{c(){e=y("div"),k(n.$$.fragment),t=O(),l=y("p"),i=I(s[1]),o=O(),p&&p.c(),this.h()},l($){e=W($,"DIV",{});var f=K(e);v(n.$$.fragment,f),t=L(f),l=W(f,"P",{class:!0});var u=K(l);i=B(u,s[1]),u.forEach(m),o=L(f),p&&p.l(f),f.forEach(m),this.h()},h(){G(l,"class","svelte-iwxew1")},m($,f){D($,e,f),w(n,e,null),T(e,t),T(e,l),T(l,i),T(e,o),p&&p.m(e,null),r=!0},p($,[f]){const u={};f&9&&(u.$$scope={dirty:f,ctx:$}),n.$set(u),(!r||f&2)&&q(i,$[1]),p&&p.p&&(!r||f&8)&&Pe(p,c,$,$[3],r?Le(c,$[3],f,null):Oe($[3]),null)},i($){r||(h(n.$$.fragment,$),h(p,$),r=!0)},o($){g(n.$$.fragment,$),g(p,$),r=!1},d($){$&&m(e),E(n),p&&p.d($)}}}function Ye(s,e,n){let{$$slots:t={},$$scope:l}=e,{title:i}=e,{description:o}=e;return s.$$set=r=>{"title"in r&&n(0,i=r.title),"description"in r&&n(1,o=r.description),"$$scope"in r&&n(3,l=r.$$scope)},[i,o,t,l]}class U extends De{constructor(e){super(),Se(this,e,Ye,Ke,Ce,{title:0,description:1})}}function we(s,e,n){const t=s.slice();return t[24]=e[n],t[25]=e,t[26]=n,t}function Je(s){let e;return{c(){e=I("Preferences")},l(n){e=B(n,"Preferences")},m(n,t){D(n,e,t)},d(n){n&&m(e)}}}function Qe(s){let e,n,t;function l(o){s[11](o)}let i={options:_t};return s[1]!==void 0&&(i.value=s[1]),e=new Te({props:i}),H.push(()=>j(e,"value",l)),{c(){k(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,r){w(e,o,r),t=!0},p(o,r){const c={};!n&&r&2&&(n=!0,c.value=o[1],V(()=>n=!1)),e.$set(c)},i(o){t||(h(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){E(e,o)}}}function Xe(s){let e=s[2]?"Save":"Don't save",n;return{c(){n=I(e)},l(t){n=B(t,e)},m(t,l){D(t,n,l)},p(t,l){l&4&&e!==(e=t[2]?"Save":"Don't save")&&q(n,e)},d(t){t&&m(n)}}}function Ze(s){let e;return{c(){e=I("Reset Posts")},l(n){e=B(n,"Reset Posts")},m(n,t){D(n,e,t)},d(n){n&&m(e)}}}function xe(s){let e;return{c(){e=I("Reset Tags")},l(n){e=B(n,"Reset Tags")},m(n,t){D(n,e,t)},d(n){n&&m(e)}}}function et(s){let e,n,t,l,i,o,r,c;function p(f){s[12](f)}let $={id:"checkbox-localstorage-enabled",$$slots:{default:[Xe]},$$scope:{ctx:s}};return s[2]!==void 0&&($.checked=s[2]),e=new Q({props:$}),H.push(()=>j(e,"checked",p)),i=new re({props:{title:"Reset Posts",type:"secondary",$$slots:{default:[Ze]},$$scope:{ctx:s}}}),i.$on("click",s[13]),r=new re({props:{title:"Reset Tags",type:"secondary",$$slots:{default:[xe]},$$scope:{ctx:s}}}),r.$on("click",s[14]),{c(){k(e.$$.fragment),t=O(),l=y("div"),k(i.$$.fragment),o=O(),k(r.$$.fragment),this.h()},l(f){v(e.$$.fragment,f),t=L(f),l=W(f,"DIV",{class:!0});var u=K(l);v(i.$$.fragment,u),o=L(u),v(r.$$.fragment,u),u.forEach(m),this.h()},h(){G(l,"class","button-row svelte-vmlo4l")},m(f,u){w(e,f,u),D(f,t,u),D(f,l,u),w(i,l,null),T(l,o),w(r,l,null),c=!0},p(f,u){const b={};u&134217732&&(b.$$scope={dirty:u,ctx:f}),!n&&u&4&&(n=!0,b.checked=f[2],V(()=>n=!1)),e.$set(b);const R={};u&134217728&&(R.$$scope={dirty:u,ctx:f}),i.$set(R);const A={};u&134217728&&(A.$$scope={dirty:u,ctx:f}),r.$set(A)},i(f){c||(h(e.$$.fragment,f),h(i.$$.fragment,f),h(r.$$.fragment,f),c=!0)},o(f){g(e.$$.fragment,f),g(i.$$.fragment,f),g(r.$$.fragment,f),c=!1},d(f){f&&(m(t),m(l)),E(e,f),E(i),E(r)}}}function tt(s){let e,n;return{c(){e=I(s[24]),n=O()},l(t){e=B(t,s[24]),n=L(t)},m(t,l){D(t,e,l),D(t,n,l)},p:Be,d(t){t&&(m(e),m(n))}}}function Ee(s){let e,n,t;function l(o){s[15](o,s[24])}let i={id:`checkbox-${s[24]}`,$$slots:{default:[tt]},$$scope:{ctx:s}};return s[3][s[24]]!==void 0&&(i.checked=s[3][s[24]]),e=new Q({props:i}),H.push(()=>j(e,"checked",l)),{c(){k(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,r){w(e,o,r),t=!0},p(o,r){s=o;const c={};r&134217728&&(c.$$scope={dirty:r,ctx:s}),!n&&r&8&&(n=!0,c.checked=s[3][s[24]],V(()=>n=!1)),e.$set(c)},i(o){t||(h(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){E(e,o)}}}function nt(s){let e,n,t=ge(be),l=[];for(let o=0;o<t.length;o+=1)l[o]=Ee(we(s,t,o));const i=o=>g(l[o],1,1,()=>{l[o]=null});return{c(){for(let o=0;o<l.length;o+=1)l[o].c();e=he()},l(o){for(let r=0;r<l.length;r+=1)l[r].l(o);e=he()},m(o,r){for(let c=0;c<l.length;c+=1)l[c]&&l[c].m(o,r);D(o,e,r),n=!0},p(o,r){if(r&8){t=ge(be);let c;for(c=0;c<t.length;c+=1){const p=we(o,t,c);l[c]?(l[c].p(p,r),h(l[c],1)):(l[c]=Ee(p),l[c].c(),h(l[c],1),l[c].m(e.parentNode,e))}for(Ne(),c=t.length;c<l.length;c+=1)i(c);Fe()}},i(o){if(!n){for(let r=0;r<t.length;r+=1)h(l[r]);n=!0}},o(o){l=l.filter(Boolean);for(let r=0;r<l.length;r+=1)g(l[r]);n=!1},d(o){o&&m(e),Ie(l,o)}}}function st(s){let e=s[4]?"Always":"Only with 'loop' tag",n;return{c(){n=I(e)},l(t){n=B(t,e)},m(t,l){D(t,n,l)},p(t,l){l&16&&e!==(e=t[4]?"Always":"Only with 'loop' tag")&&q(n,e)},d(t){t&&m(n)}}}function ot(s){let e,n,t;function l(o){s[16](o)}let i={id:"checkbox-always-loop",$$slots:{default:[st]},$$scope:{ctx:s}};return s[4]!==void 0&&(i.checked=s[4]),e=new Q({props:i}),H.push(()=>j(e,"checked",l)),{c(){k(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,r){w(e,o,r),t=!0},p(o,r){const c={};r&134217744&&(c.$$scope={dirty:r,ctx:o}),!n&&r&16&&(n=!0,c.checked=o[4],V(()=>n=!1)),e.$set(c)},i(o){t||(h(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){E(e,o)}}}function lt(s){let e=s[5]?"Enabled":"Disabled",n;return{c(){n=I(e)},l(t){n=B(t,e)},m(t,l){D(t,n,l)},p(t,l){l&32&&e!==(e=t[5]?"Enabled":"Disabled")&&q(n,e)},d(t){t&&m(n)}}}function at(s){let e,n,t,l,i,o,r,c,p,$,f;function u(_){s[17](_)}let b={id:"checkbox-fullscreen-autplay",$$slots:{default:[lt]},$$scope:{ctx:s}};s[5]!==void 0&&(b.checked=s[5]),n=new Q({props:b}),H.push(()=>j(n,"checked",u));function R(_){s[18](_)}let A={min:1,max:60,step:1};return s[6]!==void 0&&(A.value=s[6]),i=new Me({props:A}),H.push(()=>j(i,"value",R)),{c(){e=y("div"),k(n.$$.fragment),l=O(),k(i.$$.fragment),r=O(),c=y("span"),p=I(s[6]),$=I(" seconds"),this.h()},l(_){e=W(_,"DIV",{class:!0});var S=K(e);v(n.$$.fragment,S),l=L(S),v(i.$$.fragment,S),r=L(S),c=W(S,"SPAN",{});var P=K(c);p=B(P,s[6]),$=B(P," seconds"),P.forEach(m),S.forEach(m),this.h()},h(){G(e,"class","flex svelte-vmlo4l")},m(_,S){D(_,e,S),w(n,e,null),T(e,l),w(i,e,null),T(e,r),T(e,c),T(c,p),T(c,$),f=!0},p(_,S){const P={};S&134217760&&(P.$$scope={dirty:S,ctx:_}),!t&&S&32&&(t=!0,P.checked=_[5],V(()=>t=!1)),n.$set(P);const M={};!o&&S&64&&(o=!0,M.value=_[6],V(()=>o=!1)),i.$set(M),(!f||S&64)&&q(p,_[6])},i(_){f||(h(n.$$.fragment,_),h(i.$$.fragment,_),f=!0)},o(_){g(n.$$.fragment,_),g(i.$$.fragment,_),f=!1},d(_){_&&m(e),E(n),E(i)}}}function rt(s){let e=s[8]?"Extra wide":"Default width",n;return{c(){n=I(e)},l(t){n=B(t,e)},m(t,l){D(t,n,l)},p(t,l){l&256&&e!==(e=t[8]?"Extra wide":"Default width")&&q(n,e)},d(t){t&&m(n)}}}function ct(s){let e,n,t,l,i,o,r;function c(u){s[19](u)}let p={options:dt};s[7]!==void 0&&(p.value=s[7]),n=new Te({props:p}),H.push(()=>j(n,"value",c));function $(u){s[20](u)}let f={id:"checkbox-wide-layout",$$slots:{default:[rt]},$$scope:{ctx:s}};return s[8]!==void 0&&(f.checked=s[8]),i=new Q({props:f}),H.push(()=>j(i,"checked",$)),{c(){e=y("div"),k(n.$$.fragment),l=O(),k(i.$$.fragment),this.h()},l(u){e=W(u,"DIV",{class:!0});var b=K(e);v(n.$$.fragment,b),l=L(b),v(i.$$.fragment,b),b.forEach(m),this.h()},h(){G(e,"class","flex svelte-vmlo4l")},m(u,b){D(u,e,b),w(n,e,null),T(e,l),w(i,e,null),r=!0},p(u,b){const R={};!t&&b&128&&(t=!0,R.value=u[7],V(()=>t=!1)),n.$set(R);const A={};b&134217984&&(A.$$scope={dirty:b,ctx:u}),!o&&b&256&&(o=!0,A.checked=u[8],V(()=>o=!1)),i.$set(A)},i(u){r||(h(n.$$.fragment,u),h(i.$$.fragment,u),r=!0)},o(u){g(n.$$.fragment,u),g(i.$$.fragment,u),r=!1},d(u){u&&m(e),E(n),E(i)}}}function it(s){let e=s[9]?"Enabled":"Disabled",n;return{c(){n=I(e)},l(t){n=B(t,e)},m(t,l){D(t,n,l)},p(t,l){l&512&&e!==(e=t[9]?"Enabled":"Disabled")&&q(n,e)},d(t){t&&m(n)}}}function ft(s){let e,n,t;function l(o){s[21](o)}let i={id:"checkbox-high-resolution-enabled",$$slots:{default:[it]},$$scope:{ctx:s}};return s[9]!==void 0&&(i.checked=s[9]),e=new Q({props:i}),H.push(()=>j(e,"checked",l)),{c(){k(e.$$.fragment)},l(o){v(e.$$.fragment,o)},m(o,r){w(e,o,r),t=!0},p(o,r){const c={};r&134218240&&(c.$$scope={dirty:r,ctx:o}),!n&&r&512&&(n=!0,c.checked=o[9],V(()=>n=!1)),e.$set(c)},i(o){t||(h(e.$$.fragment,o),t=!0)},o(o){g(e.$$.fragment,o),t=!1},d(o){E(e,o)}}}function ut(s){let e;return{c(){e=I("Reset")},l(n){e=B(n,"Reset")},m(n,t){D(n,e,t)},d(n){n&&m(e)}}}function $t(s){let e,n;return e=new re({props:{title:"Reset preferences",$$slots:{default:[ut]},$$scope:{ctx:s}}}),e.$on("click",s[22]),{c(){k(e.$$.fragment)},l(t){v(e.$$.fragment,t)},m(t,l){w(e,t,l),n=!0},p(t,l){const i={};l&134217728&&(i.$$scope={dirty:l,ctx:t}),e.$set(i)},i(t){n||(h(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){E(e,t)}}}function pt(s){let e,n,t,l,i,o,r,c,p,$,f,u,b,R,A,_,S,P,M,F,Y,N,X,J;l=new Ve({props:{$$slots:{default:[Je]},$$scope:{ctx:s}}}),o=new U({props:{title:"Theme",description:"Change the look of the app.",$$slots:{default:[Qe]},$$scope:{ctx:s}}}),c=new U({props:{title:"Save Tags & Posts",description:"Save active tags and posts between sessions.",$$slots:{default:[et]},$$scope:{ctx:s}}}),$=new U({props:{title:"Blocked Content",description:"Completely prevent certain types of posts without cluttering your search.",$$slots:{default:[nt]},$$scope:{ctx:s}}}),u=new U({props:{title:"Loop Videos",description:"By default only videos with the 'loop' tag are looped. When this setting is enabled, all videos are looped.",$$slots:{default:[ot]},$$scope:{ctx:s}}}),R=new U({props:{title:"Autoscroll in Fullscreen",description:"When enabled, fullscreen view will scroll automatically.",$$slots:{default:[at]},$$scope:{ctx:s}}}),_=new U({props:{title:"Result layout",description:"Save active tags and posts between sessions.",$$slots:{default:[ct]},$$scope:{ctx:s}}}),P=new U({props:{title:"Higher Resolution",description:"When enabled, the app will always load the highest resolution available. This causes increased network consumption and can impact performance.",$$slots:{default:[ft]},$$scope:{ctx:s}}}),F=new U({props:{title:"Reset preferences",description:"Undo all customizations and return to default settings.",$$slots:{default:[$t]},$$scope:{ctx:s}}});function x(a){s[23](a)}let Z={title:"Reset Preferences",warning:"This will reset all your settings to default values. Are you sure you want to do that?",labelConfirm:"Yes, reset",labelCancel:"Cancel"};return s[0]!==void 0&&(Z.dialog=s[0]),N=new je({props:Z}),H.push(()=>j(N,"dialog",x)),N.$on("confirm",s[10]),{c(){e=y("meta"),n=O(),t=y("section"),k(l.$$.fragment),i=O(),k(o.$$.fragment),r=O(),k(c.$$.fragment),p=O(),k($.$$.fragment),f=O(),k(u.$$.fragment),b=O(),k(R.$$.fragment),A=O(),k(_.$$.fragment),S=O(),k(P.$$.fragment),M=O(),k(F.$$.fragment),Y=O(),k(N.$$.fragment),this.h()},l(a){const d=Ae("svelte-j3vg5w",document.head);e=W(d,"META",{name:!0,content:!0}),d.forEach(m),n=L(a),t=W(a,"SECTION",{class:!0});var C=K(t);v(l.$$.fragment,C),i=L(C),v(o.$$.fragment,C),r=L(C),v(c.$$.fragment,C),p=L(C),v($.$$.fragment,C),f=L(C),v(u.$$.fragment,C),b=L(C),v(R.$$.fragment,C),A=L(C),v(_.$$.fragment,C),S=L(C),v(P.$$.fragment,C),M=L(C),v(F.$$.fragment,C),C.forEach(m),Y=L(a),v(N.$$.fragment,a),this.h()},h(){document.title="kurosearch - Preferences",G(e,"name","description"),G(e,"content","Customize your kurosearch browsing experience however you like."),G(t,"class","svelte-vmlo4l")},m(a,d){T(document.head,e),D(a,n,d),D(a,t,d),w(l,t,null),T(t,i),w(o,t,null),T(t,r),w(c,t,null),T(t,p),w($,t,null),T(t,f),w(u,t,null),T(t,b),w(R,t,null),T(t,A),w(_,t,null),T(t,S),w(P,t,null),T(t,M),w(F,t,null),D(a,Y,d),w(N,a,d),J=!0},p(a,[d]){const C={};d&134217728&&(C.$$scope={dirty:d,ctx:a}),l.$set(C);const ce={};d&134217730&&(ce.$$scope={dirty:d,ctx:a}),o.$set(ce);const ie={};d&134217732&&(ie.$$scope={dirty:d,ctx:a}),c.$set(ie);const fe={};d&134217736&&(fe.$$scope={dirty:d,ctx:a}),$.$set(fe);const ue={};d&134217744&&(ue.$$scope={dirty:d,ctx:a}),u.$set(ue);const $e={};d&134217824&&($e.$$scope={dirty:d,ctx:a}),R.$set($e);const pe={};d&134218112&&(pe.$$scope={dirty:d,ctx:a}),_.$set(pe);const _e={};d&134218240&&(_e.$$scope={dirty:d,ctx:a}),P.$set(_e);const de={};d&134217729&&(de.$$scope={dirty:d,ctx:a}),F.$set(de);const me={};!X&&d&1&&(X=!0,me.dialog=a[0],V(()=>X=!1)),N.$set(me)},i(a){J||(h(l.$$.fragment,a),h(o.$$.fragment,a),h(c.$$.fragment,a),h($.$$.fragment,a),h(u.$$.fragment,a),h(R.$$.fragment,a),h(_.$$.fragment,a),h(P.$$.fragment,a),h(F.$$.fragment,a),h(N.$$.fragment,a),J=!0)},o(a){g(l.$$.fragment,a),g(o.$$.fragment,a),g(c.$$.fragment,a),g($.$$.fragment,a),g(u.$$.fragment,a),g(R.$$.fragment,a),g(_.$$.fragment,a),g(P.$$.fragment,a),g(F.$$.fragment,a),g(N.$$.fragment,a),J=!1},d(a){a&&(m(n),m(t),m(Y)),m(e),E(l),E(o),E(c),E($),E(u),E(R),E(_),E(P),E(F),E(N,a)}}}const _t=Object.freeze({"crimson dark":"Dark","crimson light":"Light","hotpink light":"Bubblegum","hotpink dark":"Dark Bubblegum","crimson coffee":"Coffee"}),dt=Object.freeze({1:"Single Column",2:"Two Columns",3:"Three Columns",4:"Four Columns"});function mt(s,e,n){let t,l,i,o,r,c,p,$,f;z(s,oe,a=>n(1,t=a)),z(s,te,a=>n(2,l=a)),z(s,ee,a=>n(3,i=a)),z(s,ne,a=>n(4,o=a)),z(s,ke,a=>n(5,r=a)),z(s,ve,a=>n(6,c=a)),z(s,le,a=>n(7,p=a)),z(s,ae,a=>n(8,$=a)),z(s,se,a=>n(9,f=a));let u;const b=()=>{oe.reset(),te.reset(),ee.reset(),ne.reset(),le.reset(),Ue.reset(),se.reset(),ae.reset()};function R(a){t=a,oe.set(t)}function A(a){l=a,te.set(l)}const _=()=>ye.reset(),S=()=>{qe.reset(),We.reset()};function P(a,d){s.$$.not_equal(i[d],a)&&(i[d]=a,ee.set(i))}function M(a){o=a,ne.set(o)}function F(a){r=a,ke.set(r)}function Y(a){c=a,ve.set(c)}function N(a){p=a,le.set(p)}function X(a){$=a,ae.set($)}function J(a){f=a,se.set(f)}const x=()=>{u.showModal(),ze("dialog")};function Z(a){u=a,n(0,u)}return[u,t,l,i,o,r,c,p,$,f,b,R,A,_,S,P,M,F,Y,N,X,J,x,Z]}class It extends De{constructor(e){super(),Se(this,e,mt,pt,Ce,{})}}export{It as component};
