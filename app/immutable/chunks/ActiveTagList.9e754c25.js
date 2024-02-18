import{s as B,f as b,W as P,g as v,h as N,X as W,d as p,j as $,r as X,i as d,v as k,A as z,I as Q,C as R,D as V,E as Y,P as Z,y as M,L as x,G as ee,a as q,e as D,c as H,J as te}from"./scheduler.1035f4ff.js";import{S as A,i as L,a as m,t as g,b as y,d as w,m as S,e as T,g as C,c as E}from"./index.3951bfda.js";import{e as I}from"./each.e59479a4.js";import{D as J}from"./DetailedTag.7b8b5301.js";import{f as ne,s as re,g as le}from"./search-builder.f8de6a08.js";import{a as se}from"./active-tags-store.2960ef0a.js";import{b as ae}from"./paths.2654628f.js";import{f as oe}from"./feature-support.8f9b3d5f.js";function ie(l){let e,n;return{c(){e=b("h1"),n=new P(!1),this.h()},l(t){e=v(t,"H1",{class:!0});var s=N(e);n=W(s,!1),s.forEach(p),this.h()},h(){n.a=null,$(e,"class",X(l[1])+" svelte-1qonanu")},m(t,s){d(t,e,s),n.m(l[0],e)},p:k,i:k,o:k,d(t){t&&p(e)}}}function ce(l){const e=new Date,n=o=>{const r=`${o.getDate()}-${o.getMonth()}`;return r==="24-12"||r==="25-12"?"kur🎅search":"kurosearch"},t=o=>o.getMonth()===5?"pride":"default",s=n(e),a=t(e);return[s,a]}class Ne extends A{constructor(e){super(),L(this,e,ce,ie,B,{})}}function ue(l){let e,n,t,s;const a=l[2].default,o=z(a,l,l[1],null);return{c(){e=b("button"),o&&o.c(),this.h()},l(r){e=v(r,"BUTTON",{type:!0,title:!0,class:!0});var c=N(e);o&&o.l(c),c.forEach(p),this.h()},h(){$(e,"type","button"),$(e,"title",l[0]),$(e,"class","svelte-8e5hsd")},m(r,c){d(r,e,c),o&&o.m(e,null),n=!0,t||(s=Q(e,"click",l[3]),t=!0)},p(r,[c]){o&&o.p&&(!n||c&2)&&R(o,a,r,r[1],n?Y(a,r[1],c,null):V(r[1]),null),(!n||c&1)&&$(e,"title",r[0])},i(r){n||(m(o,r),n=!0)},o(r){g(o,r),n=!1},d(r){r&&p(e),o&&o.d(r),t=!1,s()}}}function fe(l,e,n){let{$$slots:t={},$$scope:s}=e,{title:a}=e;function o(r){Z.call(this,l,r)}return l.$$set=r=>{"title"in r&&n(0,a=r.title),"$$scope"in r&&n(1,s=r.$$scope)},[a,s,t,o]}class O extends A{constructor(e){super(),L(this,e,fe,ue,B,{title:0})}}function _e(l){let e,n;return{c(){e=b("img"),this.h()},l(t){e=v(t,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){x(e.src,n=ae+"/assets/share.svg")||$(e,"src",n),$(e,"alt","No more results to load"),$(e,"width","16"),$(e,"height","16")},m(t,s){d(t,e,s)},p:k,d(t){t&&p(e)}}}function he(l){let e,n;return e=new O({props:{title:"Share current search.",$$slots:{default:[_e]},$$scope:{ctx:l}}}),e.$on("click",l[0]),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},p(t,[s]){const a={};s&16&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function me(l,e,n){let t,s,a;return M(l,ne,r=>n(1,t=r)),M(l,re,r=>n(2,s=r)),M(l,se,r=>n(3,a=r)),[async()=>{const r={title:"kurosearch",text:"Saved Search Configuration",url:le(a,s,t).toString()};try{await navigator.share(r)}catch{}}]}class ge extends A{constructor(e){super(),L(this,e,me,he,B,{})}}function K(l,e,n){const t=l.slice();return t[7]=e[n],t}function j(l){let e,n,t=oe(),s,a,o=I(l[0]),r=[];for(let i=0;i<o.length;i+=1)r[i]=G(K(l,o,i));const c=i=>g(r[i],1,1,()=>{r[i]=null});let u=l[0].length>1&&F(l),f=t&&ke();return{c(){for(let i=0;i<r.length;i+=1)r[i].c();e=q(),u&&u.c(),n=q(),f&&f.c(),s=D()},l(i){for(let _=0;_<r.length;_+=1)r[_].l(i);e=H(i),u&&u.l(i),n=H(i),f&&f.l(i),s=D()},m(i,_){for(let h=0;h<r.length;h+=1)r[h]&&r[h].m(i,_);d(i,e,_),u&&u.m(i,_),d(i,n,_),f&&f.m(i,_),d(i,s,_),a=!0},p(i,_){if(_&3){o=I(i[0]);let h;for(h=0;h<o.length;h+=1){const U=K(i,o,h);r[h]?(r[h].p(U,_),m(r[h],1)):(r[h]=G(U),r[h].c(),m(r[h],1),r[h].m(e.parentNode,e))}for(C(),h=o.length;h<r.length;h+=1)c(h);E()}i[0].length>1?u?(u.p(i,_),_&1&&m(u,1)):(u=F(i),u.c(),m(u,1),u.m(n.parentNode,n)):u&&(C(),g(u,1,1,()=>{u=null}),E())},i(i){if(!a){for(let _=0;_<o.length;_+=1)m(r[_]);m(u),m(f),a=!0}},o(i){r=r.filter(Boolean);for(let _=0;_<r.length;_+=1)g(r[_]);g(u),g(f),a=!1},d(i){i&&(p(e),p(n),p(s)),te(r,i),u&&u.d(i),f&&f.d(i)}}}function pe(l){let e,n;function t(){return l[4](l[7])}function s(){return l[5](l[7])}return e=new J({props:{tag:l[7],active:!0}}),e.$on("click",t),e.$on("contextmenu",s),{c(){y(e.$$.fragment)},l(a){w(e.$$.fragment,a)},m(a,o){S(e,a,o),n=!0},p(a,o){l=a;const r={};o&1&&(r.tag=l[7]),e.$set(r)},i(a){n||(m(e.$$.fragment,a),n=!0)},o(a){g(e.$$.fragment,a),n=!1},d(a){T(e,a)}}}function $e(l){let e,n;function t(){return l[2](l[7])}function s(){return l[3](l[7])}return e=new J({props:{tag:{name:l[7].name,type:"supertag",modifier:"+",count:l[7].tags.length},active:!0}}),e.$on("click",t),e.$on("contextmenu",s),{c(){y(e.$$.fragment)},l(a){w(e.$$.fragment,a)},m(a,o){S(e,a,o),n=!0},p(a,o){l=a;const r={};o&1&&(r.tag={name:l[7].name,type:"supertag",modifier:"+",count:l[7].tags.length}),e.$set(r)},i(a){n||(m(e.$$.fragment,a),n=!0)},o(a){g(e.$$.fragment,a),n=!1},d(a){T(e,a)}}}function G(l){let e,n,t,s;const a=[$e,pe],o=[];function r(c,u){return"description"in c[7]?0:1}return e=r(l),n=o[e]=a[e](l),{c(){n.c(),t=D()},l(c){n.l(c),t=D()},m(c,u){o[e].m(c,u),d(c,t,u),s=!0},p(c,u){let f=e;e=r(c),e===f?o[e].p(c,u):(C(),g(o[f],1,1,()=>{o[f]=null}),E(),n=o[e],n?n.p(c,u):(n=o[e]=a[e](c),n.c()),m(n,1),n.m(t.parentNode,t))},i(c){s||(m(n),s=!0)},o(c){g(n),s=!1},d(c){c&&p(t),o[e].d(c)}}}function F(l){let e,n;return e=new O({props:{title:"Create a supertag from the current selection.",$$slots:{default:[de]},$$scope:{ctx:l}}}),e.$on("click",l[6]),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},p(t,s){const a={};s&1024&&(a.$$scope={dirty:s,ctx:t}),e.$set(a)},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function de(l){let e;return{c(){e=b("i"),this.h()},l(n){e=v(n,"I",{class:!0}),N(e).forEach(p),this.h()},h(){$(e,"class","codicon codicon-star-full")},m(n,t){d(n,e,t)},p:k,d(n){n&&p(e)}}}function ke(l){let e,n;return e=new ge({}),{c(){y(e.$$.fragment)},l(t){w(e.$$.fragment,t)},m(t,s){S(e,t,s),n=!0},i(t){n||(m(e.$$.fragment,t),n=!0)},o(t){g(e.$$.fragment,t),n=!1},d(t){T(e,t)}}}function be(l){let e,n,t=l[0].length>0&&j(l);return{c(){e=b("ul"),t&&t.c(),this.h()},l(s){e=v(s,"UL",{class:!0});var a=N(e);t&&t.l(a),a.forEach(p),this.h()},h(){$(e,"class","svelte-11k0uwj")},m(s,a){d(s,e,a),t&&t.m(e,null),n=!0},p(s,[a]){s[0].length>0?t?(t.p(s,a),a&1&&m(t,1)):(t=j(s),t.c(),m(t,1),t.m(e,null)):t&&(C(),g(t,1,1,()=>{t=null}),E())},i(s){n||(m(t),n=!0)},o(s){g(t),n=!1},d(s){s&&p(e),t&&t.d()}}}function ve(l,e,n){const t=ee();let{tags:s}=e;const a=f=>t("click",f),o=f=>t("contextmenu",f),r=f=>t("click",f),c=f=>t("contextmenu",f),u=()=>t("createSupertag",s);return l.$$set=f=>{"tags"in f&&n(0,s=f.tags)},[s,t,a,o,r,c,u]}class Ae extends A{constructor(e){super(),L(this,e,ve,be,B,{tags:0})}}export{Ae as A,Ne as K};
