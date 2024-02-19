import{v as b,s as L,f as E,l as q,a as z,g as I,h as P,m as U,d as _,c as B,j as c,i as T,u as D,n as F,e as Q,x as xe,J as De,y as $e,k as j,B as O,I as C,S as Pe,K as ie,P as oe,r as he,U as se,V as ne,L as Y,o as et,N as tt,R as st,H as _e,M as nt,O as lt,p as Z,Q as at,F as de}from"./scheduler.1035f4ff.js";import{h as ge,u as rt}from"./await_block.6f145430.js";import{e as le}from"./each.e59479a4.js";import{S as V,i as G,a as R,t as N,g as ce,c as ue,b as x,d as $,m as ee,e as te,f as me}from"./index.3951bfda.js";import{g as pe}from"./comments.7340f7b2.js";import{L as it}from"./LoadingAnimation.b232475b.js";import{f as be}from"./format-tag.7e313273.js";import{i as ot}from"./tags.49324235.js";import{a as fe}from"./active-tags-store.2960ef0a.js";import{S as ct}from"./SimpleTag.22d3baa3.js";import{b as X}from"./paths.a7fb1359.js";import{c as Re,h as ut,b as Me}from"./always-loop-store.e8e34688.js";const ft=typeof window<"u";let ht=ft?s=>requestAnimationFrame(s):b;const ve=6e4,ae=s=>{if(!_t(s))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(s).getTime()/ve,l=new Date().getTime()/ve-e;if(l<1)return"Just now";if(l<60)return W(l,"minute");const n=l/60;if(n<24)return W(n,"hour");const o=n/24;if(o<7)return W(o,"day");if(o<30.5)return W(o/7,"week");if(o<365.25)return W(o/30.5,"month");const a=o/365.25;return W(a,"year")},_t=s=>(typeof s=="number"||typeof s=="string")&&new Date(s).toString()!=="Invalid Date",W=(s,e)=>{const t=s.toFixed();return`${t} ${e}${t==="1"?"":"s"} ago`};function dt(s){let e,t,l=s[0].author+"",n,o,a,i=ae(s[0].createdAt)+"",r,u,d,k=s[0].content+"",m;return{c(){e=E("div"),t=E("span"),n=q(l),o=z(),a=E("span"),r=q(i),u=z(),d=E("span"),m=q(k),this.h()},l(S){e=I(S,"DIV",{class:!0});var g=P(e);t=I(g,"SPAN",{class:!0});var w=P(t);n=U(w,l),w.forEach(_),o=B(g),a=I(g,"SPAN",{class:!0});var f=P(a);r=U(f,i),f.forEach(_),u=B(g),d=I(g,"SPAN",{class:!0});var v=P(d);m=U(v,k),v.forEach(_),g.forEach(_),this.h()},h(){c(t,"class","author svelte-bys59y"),c(a,"class","created-at svelte-bys59y"),c(d,"class","content svelte-bys59y"),c(e,"class","svelte-bys59y")},m(S,g){T(S,e,g),D(e,t),D(t,n),D(e,o),D(e,a),D(a,r),D(e,u),D(e,d),D(d,m)},p(S,[g]){g&1&&l!==(l=S[0].author+"")&&F(n,l),g&1&&i!==(i=ae(S[0].createdAt)+"")&&F(r,i),g&1&&k!==(k=S[0].content+"")&&F(m,k)},i:b,o:b,d(S){S&&_(e)}}}function gt(s,e,t){let{comment:l}=e;return s.$$set=n=>{"comment"in n&&t(0,l=n.comment)},[l]}class mt extends V{constructor(e){super(),G(this,e,gt,dt,L,{comment:0})}}function ye(s,e,t){const l=s.slice();return l[2]=e[t],l}function pt(s){return{c:b,l:b,m:b,p:b,i:b,o:b,d:b}}function bt(s){let e,t,l,n;const o=[yt,vt],a=[];function i(r,u){return r[1].length>0?0:1}return e=i(s),t=a[e]=o[e](s),{c(){t.c(),l=Q()},l(r){t.l(r),l=Q()},m(r,u){a[e].m(r,u),T(r,l,u),n=!0},p(r,u){let d=e;e=i(r),e===d?a[e].p(r,u):(ce(),N(a[d],1,1,()=>{a[d]=null}),ue(),t=a[e],t?t.p(r,u):(t=a[e]=o[e](r),t.c()),R(t,1),t.m(l.parentNode,l))},i(r){n||(R(t),n=!0)},o(r){N(t),n=!1},d(r){r&&_(l),a[e].d(r)}}}function vt(s){let e,t="Comments for this post are not available. <br/>This can happen if comments have been deleted.";return{c(){e=E("p"),e.innerHTML=t,this.h()},l(l){e=I(l,"P",{class:!0,"data-svelte-h":!0}),xe(e)!=="svelte-1f9q9vq"&&(e.innerHTML=t),this.h()},h(){c(e,"class","no-comments svelte-x6zn2h")},m(l,n){T(l,e,n)},p:b,i:b,o:b,d(l){l&&_(e)}}}function yt(s){let e,t,l=le(s[1]),n=[];for(let a=0;a<l.length;a+=1)n[a]=ke(ye(s,l,a));const o=a=>N(n[a],1,1,()=>{n[a]=null});return{c(){e=E("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=I(a,"UL",{class:!0});var i=P(e);for(let r=0;r<n.length;r+=1)n[r].l(i);i.forEach(_),this.h()},h(){c(e,"class","comments svelte-x6zn2h")},m(a,i){T(a,e,i);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);t=!0},p(a,i){if(i&1){l=le(a[1]);let r;for(r=0;r<l.length;r+=1){const u=ye(a,l,r);n[r]?(n[r].p(u,i),R(n[r],1)):(n[r]=ke(u),n[r].c(),R(n[r],1),n[r].m(e,null))}for(ce(),r=l.length;r<n.length;r+=1)o(r);ue()}},i(a){if(!t){for(let i=0;i<l.length;i+=1)R(n[i]);t=!0}},o(a){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)N(n[i]);t=!1},d(a){a&&_(e),De(n,a)}}}function ke(s){let e,t;return e=new mt({props:{comment:s[2]}}),{c(){x(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,n){ee(e,l,n),t=!0},p(l,n){const o={};n&1&&(o.comment=l[2]),e.$set(o)},i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function kt(s){let e,t;return e=new it({}),{c(){x(e.$$.fragment)},l(l){$(e.$$.fragment,l)},m(l,n){ee(e,l,n),t=!0},p:b,i(l){t||(R(e.$$.fragment,l),t=!0)},o(l){N(e.$$.fragment,l),t=!1},d(l){te(e,l)}}}function wt(s){let e,t,l,n={ctx:s,current:null,token:null,hasCatch:!1,pending:kt,then:bt,catch:pt,value:1,blocks:[,,,]};return ge(t=pe(s[0].id),n),{c(){e=Q(),n.block.c()},l(o){e=Q(),n.block.l(o)},m(o,a){T(o,e,a),n.block.m(o,n.anchor=a),n.mount=()=>e.parentNode,n.anchor=e,l=!0},p(o,[a]){s=o,n.ctx=s,a&1&&t!==(t=pe(s[0].id))&&ge(t,n)||rt(n,s,a)},i(o){l||(R(n.block),l=!0)},o(o){for(let a=0;a<3;a+=1){const i=n.blocks[a];N(i)}l=!1},d(o){o&&_(e),n.block.d(o),n.token=null,n=null}}}function St(s,e,t){let{post:l}=e;return s.$$set=n=>{"post"in n&&t(0,l=n.post)},[l]}class os extends V{constructor(e){super(),G(this,e,St,wt,L,{post:0})}}function At(s){let e,t=s[0].charAt(0).toUpperCase()+"",l,n;return{c(){e=E("span"),l=q(t),this.h()},l(o){e=I(o,"SPAN",{title:!0,class:!0});var a=P(e);l=U(a,t),a.forEach(_),this.h()},h(){c(e,"title",n="Rated "+s[0]+"."),c(e,"class","svelte-1nbj6kf")},m(o,a){T(o,e,a),D(e,l)},p(o,[a]){a&1&&t!==(t=o[0].charAt(0).toUpperCase()+"")&&F(l,t),a&1&&n!==(n="Rated "+o[0]+".")&&c(e,"title",n)},i:b,o:b,d(o){o&&_(e)}}}function Et(s,e,t){let{value:l}=e;return s.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class cs extends V{constructor(e){super(),G(this,e,Et,At,L,{value:0})}}function It(s){let e,t=ae(s[0])+"",l;return{c(){e=E("span"),l=q(t),this.h()},l(n){e=I(n,"SPAN",{class:!0});var o=P(e);l=U(o,t),o.forEach(_),this.h()},h(){c(e,"class","svelte-1vqihm9")},m(n,o){T(n,e,o),D(e,l)},p(n,[o]){o&1&&t!==(t=ae(n[0])+"")&&F(l,t)},i:b,o:b,d(n){n&&_(e)}}}function Tt(s,e,t){let{value:l}=e;return s.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class us extends V{constructor(e){super(),G(this,e,Tt,It,L,{value:0})}}function Ct(s){let e,t=be(s[0])+"",l;return{c(){e=E("span"),l=q(t),this.h()},l(n){e=I(n,"SPAN",{"data-testid":!0,class:!0});var o=P(e);l=U(o,t),o.forEach(_),this.h()},h(){c(e,"data-testid","score"),c(e,"class","codicon codicon-heart svelte-te86f3")},m(n,o){T(n,e,o),D(e,l)},p(n,[o]){o&1&&t!==(t=be(n[0])+"")&&F(l,t)},i:b,o:b,d(n){n&&_(e)}}}function Dt(s,e,t){let{value:l}=e;return s.$$set=n=>{"value"in n&&t(0,l=n.value)},[l]}class fs extends V{constructor(e){super(),G(this,e,Dt,Ct,L,{value:0})}}function we(s){let e,t,l,n,o;return{c(){e=E("a"),t=E("i"),l=z(),n=q(s[1]),this.h()},l(a){e=I(a,"A",{href:!0,target:!0,class:!0});var i=P(e);t=I(i,"I",{class:!0}),P(t).forEach(_),l=B(i),n=U(i,s[1]),i.forEach(_),this.h()},h(){c(t,"class","codicon codicon-link"),c(e,"href",o=s[0].toString()),c(e,"target","_newtab"),c(e,"class","svelte-1orztco")},m(a,i){T(a,e,i),D(e,t),D(e,l),D(e,n)},p(a,i){i&2&&F(n,a[1]),i&1&&o!==(o=a[0].toString())&&c(e,"href",o)},d(a){a&&_(e)}}}function Pt(s){let e,t=s[0]&&we(s);return{c(){t&&t.c(),e=Q()},l(l){t&&t.l(l),e=Q()},m(l,n){t&&t.m(l,n),T(l,e,n)},p(l,[n]){l[0]?t?t.p(l,n):(t=we(l),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:b,o:b,d(l){l&&_(e),t&&t.d(l)}}}function Rt(s,e,t){let l,n,{source:o}=e;return s.$$set=a=>{"source"in a&&t(2,o=a.source)},s.$$.update=()=>{var a;s.$$.dirty&4&&t(0,l=ot(o)?new URL(o):null),s.$$.dirty&1&&t(1,n=(a=l==null?void 0:l.hostname)==null?void 0:a.replace(/^www./,""))},[l,n,o]}class hs extends V{constructor(e){super(),G(this,e,Rt,Pt,L,{source:2})}}function Mt(s){let e,t,l;return{c(){e=E("a"),t=E("i"),l=q(" File"),this.h()},l(n){e=I(n,"A",{href:!0,target:!0,class:!0});var o=P(e);t=I(o,"I",{class:!0}),P(t).forEach(_),l=U(o," File"),o.forEach(_),this.h()},h(){c(t,"class","codicon codicon-file"),c(e,"href",s[0]),c(e,"target","_newtab"),c(e,"class","svelte-1orztco")},m(n,o){T(n,e,o),D(e,t),D(e,l)},p(n,[o]){o&1&&c(e,"href",n[0])},i:b,o:b,d(n){n&&_(e)}}}function Nt(s,e,t){let{url:l}=e;return s.$$set=n=>{"url"in n&&t(0,l=n.url)},[l]}class _s extends V{constructor(e){super(),G(this,e,Nt,Mt,L,{url:0})}}function Se(s,e,t){const l=s.slice();l[4]=e[t];const n=l[1].find(function(...a){return s[3](l[4],...a)})!==void 0;return l[5]=n,l}function Ae(s){let e,t;function l(){return s[2](s[5],s[4])}return e=new ct({props:{tag:s[4],active:s[5]}}),e.$on("click",l),{c(){x(e.$$.fragment)},l(n){$(e.$$.fragment,n)},m(n,o){ee(e,n,o),t=!0},p(n,o){s=n;const a={};o&1&&(a.tag=s[4]),o&3&&(a.active=s[5]),e.$set(a)},i(n){t||(R(e.$$.fragment,n),t=!0)},o(n){N(e.$$.fragment,n),t=!1},d(n){te(e,n)}}}function Lt(s){let e,t,l=le(s[0]),n=[];for(let a=0;a<l.length;a+=1)n[a]=Ae(Se(s,l,a));const o=a=>N(n[a],1,1,()=>{n[a]=null});return{c(){e=E("ul");for(let a=0;a<n.length;a+=1)n[a].c();this.h()},l(a){e=I(a,"UL",{class:!0});var i=P(e);for(let r=0;r<n.length;r+=1)n[r].l(i);i.forEach(_),this.h()},h(){c(e,"class","tags svelte-b5q4us")},m(a,i){T(a,e,i);for(let r=0;r<n.length;r+=1)n[r]&&n[r].m(e,null);t=!0},p(a,[i]){if(i&3){l=le(a[0]);let r;for(r=0;r<l.length;r+=1){const u=Se(a,l,r);n[r]?(n[r].p(u,i),R(n[r],1)):(n[r]=Ae(u),n[r].c(),R(n[r],1),n[r].m(e,null))}for(ce(),r=l.length;r<n.length;r+=1)o(r);ue()}},i(a){if(!t){for(let i=0;i<l.length;i+=1)R(n[i]);t=!0}},o(a){n=n.filter(Boolean);for(let i=0;i<n.length;i+=1)N(n[i]);t=!1},d(a){a&&_(e),De(n,a)}}}function Vt(s,e,t){let l;$e(s,fe,i=>t(1,l=i));let{tags:n}=e;const o=(i,r)=>i?fe.removeByName(r.name):fe.addOrReplace({...r,modifier:"+"}),a=(i,r)=>r.name===i.name;return s.$$set=i=>{"tags"in i&&t(0,n=i.tags)},[n,l,o,a]}class ds extends V{constructor(e){super(),G(this,e,Vt,Lt,L,{tags:0})}}const Ne=s=>s.endsWith(".gif"),Gt=(s,e,t)=>Ne(e)?{static:t,animated:e}:{static:e,animated:s},Le=s=>s.endsWith(".mp4")||s.endsWith(".webm"),gs=(s,e,t)=>Le(e)?{static:t,animated:e}:{static:e,animated:s},ms=s=>s.some(e=>e.name==="loop"),ps=s=>Ne(s)||Le(s),Ee=s=>{if(typeof s!="number")throw new TypeError(`Attempted to call formatVideoTime with invalid value: ${s}`);const e=Math.floor(s),t=e%60,l=Math.floor(e/60);return`${Ie(l)}:${Ie(t)}`},Ie=s=>{const e=String(s),t=Math.max(0,2-e.length);return`${"0".repeat(t)}${e}`},qt=(s,e)=>s&&e?s/e:1,re=(s,e)=>s&&e?`${s} / ${e}`:"1 / 1",Ut="1250px",J=new IntersectionObserver(s=>{var e;for(const t of s){const l=t.isIntersecting?t.target.getAttribute("data-src")??"":"";(e=t==null?void 0:t.target)==null||e.setAttribute("src",l)}},{rootMargin:Ut}),Ve=s=>(J==null||J.observe(s),{destroy(){J==null||J.unobserve(s)}});function Ft(s){let e,t,l,n,o,a,i;return{c(){e=E("div"),t=E("img"),this.h()},l(r){e=I(r,"DIV",{class:!0});var u=P(e);t=I(u,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,style:!0,width:!0,height:!0,tabindex:!0}),u.forEach(_),this.h()},h(){c(t,"class","post-media svelte-1gcqb6"),c(t,"loading","lazy"),c(t,"data-src",s[2]),c(t,"alt",l=s[0].id.toString()),j(t,"aspect-ratio",re(s[0].width,s[0].height)),c(t,"width",n=s[0].width),c(t,"height",o=s[0].height),c(t,"tabindex","0"),c(e,"class","svelte-1gcqb6"),O(e,"expandable",s[3]),O(e,"open",s[1])},m(r,u){T(r,e,u),D(e,t),a||(i=[C(t,"click",s[5]),C(t,"keydown",Re),C(t,"error",s[6],{once:!0}),Pe(Ve.call(null,t)),C(e,"click",s[4])],a=!0)},p(r,[u]){u&4&&c(t,"data-src",r[2]),u&1&&l!==(l=r[0].id.toString())&&c(t,"alt",l),u&1&&j(t,"aspect-ratio",re(r[0].width,r[0].height)),u&1&&n!==(n=r[0].width)&&c(t,"width",n),u&1&&o!==(o=r[0].height)&&c(t,"height",o),u&2&&O(e,"open",r[1])},i:b,o:b,d(r){r&&_(e),a=!1,ie(i)}}}function Ot(s,e,t){let l,{post:n}=e,a=qt(n.width,n.height)<.33,i;function r(k){oe.call(this,s,k)}const u=()=>t(1,i=!i),d=k=>k.target.src=`${X}/assets/failed-to-load.svg`;return s.$$set=k=>{"post"in k&&t(0,n=k.post)},s.$$.update=()=>{s.$$.dirty&1&&t(2,l=ut?n.file_url:n.sample_url)},[n,i,l,a,r,u,d]}class bs extends V{constructor(e){super(),G(this,e,Ot,Ft,L,{post:0})}}function zt(s){let e,t;return{c(){e=E("img"),this.h()},l(l){e=I(l,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),this.h()},h(){Y(e.src,t=s[3])||c(e,"src",t),c(e,"alt","Start GIF"),c(e,"width","16"),c(e,"height","32"),j(e,"margin-left","4px")},m(l,n){T(l,e,n)},p:b,d(l){l&&_(e)}}}function Bt(s){let e,t;return{c(){e=E("img"),this.h()},l(l){e=I(l,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){Y(e.src,t=s[4])||c(e,"src",t),c(e,"alt","Stop GIF"),c(e,"width","16"),c(e,"height","32")},m(l,n){T(l,e,n)},p:b,d(l){l&&_(e)}}}function jt(s){let e,t;return{c(){e=E("img"),this.h()},l(l){e=I(l,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){Y(e.src,t=s[2])||c(e,"src",t),c(e,"alt","Loading GIF"),c(e,"width","16"),c(e,"height","32")},m(l,n){T(l,e,n)},p:b,d(l){l&&_(e)}}}function Ht(s){let e,t,l,n;function o(r,u){return r[1]?jt:r[0]?Bt:zt}let a=o(s),i=a(s);return{c(){e=E("button"),i.c(),this.h()},l(r){e=I(r,"BUTTON",{type:!0,class:!0});var u=P(e);i.l(u),u.forEach(_),this.h()},h(){c(e,"type","button"),c(e,"class",t=he(s[5].class)+" svelte-19k2j29")},m(r,u){T(r,e,u),i.m(e,null),l||(n=C(e,"click",s[6]),l=!0)},p(r,[u]){a===(a=o(r))&&i?i.p(r,u):(i.d(1),i=a(r),i&&(i.c(),i.m(e,null))),u&32&&t!==(t=he(r[5].class)+" svelte-19k2j29")&&c(e,"class",t)},i:b,o:b,d(r){r&&_(e),i.d(),l=!1,n()}}}function Kt(s,e,t){const l=`${X}/assets/load.svg`,n=`${X}/assets/play.svg`,o=`${X}/assets/pause.svg`;let{playing:a}=e,{loading:i}=e;function r(u){oe.call(this,s,u)}return s.$$set=u=>{t(5,e=se(se({},e),ne(u))),"playing"in u&&t(0,a=u.playing),"loading"in u&&t(1,i=u.loading)},e=ne(e),[a,i,l,n,o,e,r]}class Ge extends V{constructor(e){super(),G(this,e,Kt,Ht,L,{playing:0,loading:1})}}function Te(s){let e,t,l,n=!0,o=!1,a,i,r,u=Ee(s[16])+"",d,k,m,S,g,w,f,v,M;function A(){cancelAnimationFrame(a),e.paused||(a=ht(A),o=!0),s[25].call(e)}return w=new Ge({props:{playing:s[5],loading:s[6],class:`center hidable ${s[13]?"hide":""}`}}),w.$on("click",s[19]),{c(){e=E("video"),i=z(),r=E("span"),d=q(u),k=z(),m=E("input"),g=z(),x(w.$$.fragment),this.h()},l(h){e=I(h,"VIDEO",{tabindex:!0,poster:!0,src:!0,preload:!0,style:!0,class:!0}),P(e).forEach(_),i=B(h),r=I(h,"SPAN",{class:!0});var y=P(r);d=U(y,u),y.forEach(_),k=B(h),m=I(h,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0,style:!0}),g=B(h),$(w.$$.fragment,h),this.h()},h(){c(e,"tabindex","0"),c(e,"poster",s[1]),e.loop=s[4],Y(e.src,t=s[0])||c(e,"src",t),c(e,"preload","metadata"),c(e,"style",l=`aspect-ratio: ${s[2]} / ${s[3]}`),c(e,"class","svelte-5v7blo"),s[8]===void 0&&st(()=>s[26].call(e)),c(r,"class","hidable svelte-5v7blo"),O(r,"hide",s[10]),c(m,"type","range"),c(m,"min",0),c(m,"max",s[8]),c(m,"step",.0166666),c(m,"class","hidable svelte-5v7blo"),c(m,"style",S=`background-image: linear-gradient(90deg, var(--accent) ${s[14]}%, var(--background-2) ${s[14]}%);}`),O(m,"hide",s[13])},m(h,y){T(h,e,y),s[23](e),T(h,i,y),T(h,r,y),D(r,d),T(h,k,y),T(h,m,y),_e(m,s[7]),T(h,g,y),ee(w,h,y),f=!0,v||(M=[C(e,"play",s[24]),C(e,"pause",s[24]),C(e,"timeupdate",A),C(e,"durationchange",s[26]),C(e,"waiting",s[27]),C(e,"playing",s[28]),C(e,"pause",s[29]),C(e,"ended",s[30]),C(e,"click",s[20]),C(e,"dblclick",nt(lt(s[17]))),C(m,"change",s[31]),C(m,"input",s[31])],v=!0)},p(h,y){(!f||y[0]&2)&&c(e,"poster",h[1]),(!f||y[0]&16)&&(e.loop=h[4]),(!f||y[0]&1&&!Y(e.src,t=h[0]))&&c(e,"src",t),(!f||y[0]&12&&l!==(l=`aspect-ratio: ${h[2]} / ${h[3]}`))&&c(e,"style",l),y[0]&32768&&n!==(n=h[15])&&e[n?"pause":"play"](),!o&&y[0]&128&&!isNaN(h[7])&&(e.currentTime=h[7]),o=!1,(!f||y[0]&65536)&&u!==(u=Ee(h[16])+"")&&F(d,u),(!f||y[0]&1024)&&O(r,"hide",h[10]),(!f||y[0]&256)&&c(m,"max",h[8]),(!f||y[0]&16384&&S!==(S=`background-image: linear-gradient(90deg, var(--accent) ${h[14]}%, var(--background-2) ${h[14]}%);}`))&&c(m,"style",S),y[0]&128&&_e(m,h[7]),(!f||y[0]&8192)&&O(m,"hide",h[13]);const H={};y[0]&32&&(H.playing=h[5]),y[0]&64&&(H.loading=h[6]),y[0]&8192&&(H.class=`center hidable ${h[13]?"hide":""}`),w.$set(H)},i(h){f||(R(w.$$.fragment,h),f=!0)},o(h){N(w.$$.fragment,h),f=!1},d(h){h&&(_(e),_(i),_(r),_(k),_(m),_(g)),s[23](null),te(w,h),v=!1,ie(M)}}}function Wt(s){let e,t,l,n,o,a=s[9]&&Te(s);return{c(){e=E("div"),a&&a.c(),this.h()},l(i){e=I(i,"DIV",{class:!0,style:!0});var r=P(e);a&&a.l(r),r.forEach(_),this.h()},h(){c(e,"class",t="post-media player "+s[21].class+" svelte-5v7blo"),j(e,"aspect-ratio",s[2]+"/"+s[3])},m(i,r){T(i,e,r),a&&a.m(e,null),s[32](e),l=!0,n||(o=[C(e,"keydown",s[18]),C(e,"click",s[22])],n=!0)},p(i,r){i[9]?a?(a.p(i,r),r[0]&512&&R(a,1)):(a=Te(i),a.c(),R(a,1),a.m(e,null)):a&&(ce(),N(a,1,1,()=>{a=null}),ue()),(!l||r[0]&2097152&&t!==(t="post-media player "+i[21].class+" svelte-5v7blo"))&&c(e,"class",t),(!l||r[0]&12)&&j(e,"aspect-ratio",i[2]+"/"+i[3])},i(i){l||(R(a),l=!0)},o(i){N(a),l=!1},d(i){i&&_(e),a&&a.d(),s[32](null),n=!1,ie(o)}}}const Ce=5;function Jt(s,e,t){let l,n,o,a,{src:i}=e,{poster:r}=e,{width:u}=e,{height:d}=e,{loop:k}=e,m,S,g=!1,w=!1,f=0,v=0,M=!1,A=!1;const h=()=>{t(7,f=Math.max(0,f-Ce))},y=()=>{t(7,f=Math.min(v,f+Ce))},H=p=>{p.offsetX<p.target.clientWidth/2?h():y()},qe=p=>{Me(p)||p.key==="k"?(p.preventDefault(),t(5,g=!g)):p.key==="ArrowLeft"||p.key==="j"?h():(p.key==="ArrowRight"||p.key==="l")&&y()},K=new IntersectionObserver(p=>{for(const Ze of p)Ze.isIntersecting?t(9,M=!0):S&&(t(5,g=!1),t(6,w=!1),S.addEventListener("error",()=>{t(9,M=!1)},{once:!0}),t(12,S.src="",S))},{rootMargin:"0px"}),Ue=()=>{t(5,g=!g),t(6,w=!0),t(10,A=g)},Fe=()=>{t(10,A=!A)};et(()=>K==null?void 0:K.observe(m)),tt(()=>K==null?void 0:K.unobserve(m));function Oe(p){oe.call(this,s,p)}function ze(p){Z[p?"unshift":"push"](()=>{S=p,t(12,S)})}function Be(){n=this.paused,t(15,n),t(5,g),t(9,M)}function je(){f=this.currentTime,t(7,f)}function He(){v=this.duration,t(8,v)}const Ke=()=>t(6,w=!0),We=()=>t(6,w=!1),Je=()=>t(6,w=!1),Qe=()=>{k||(t(6,w=!1),t(5,g=!1))};function Xe(){f=at(this.value),t(7,f)}function Ye(p){Z[p?"unshift":"push"](()=>{m=p,t(11,m)})}return s.$$set=p=>{t(21,e=se(se({},e),ne(p))),"src"in p&&t(0,i=p.src),"poster"in p&&t(1,r=p.poster),"width"in p&&t(2,u=p.width),"height"in p&&t(3,d=p.height),"loop"in p&&t(4,k=p.loop)},s.$$.update=()=>{s.$$.dirty[0]&384&&t(16,l=v-f),s.$$.dirty[0]&544&&t(5,g=M&&g),s.$$.dirty[0]&32&&t(15,n=!g),s.$$.dirty[0]&384&&t(14,o=f/v*98+1),s.$$.dirty[0]&1120&&t(13,a=g&&!w&&A)},e=ne(e),[i,r,u,d,k,g,w,f,v,M,A,m,S,a,o,n,l,H,qe,Ue,Fe,e,Oe,ze,Be,je,He,Ke,We,Je,Qe,Xe,Ye]}class vs extends V{constructor(e){super(),G(this,e,Jt,Wt,L,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function Qt(s){let e,t,l,n,o,a,i,r,u,d,k,m;function S(f){s[13](f)}function g(f){s[14](f)}let w={class:"center"};return s[2]!==void 0&&(w.playing=s[2]),s[3]!==void 0&&(w.loading=s[3]),i=new Ge({props:w}),Z.push(()=>me(i,"playing",S)),Z.push(()=>me(i,"loading",g)),i.$on("click",s[15]),{c(){e=E("div"),t=E("img"),a=z(),x(i.$$.fragment),this.h()},l(f){e=I(f,"DIV",{class:!0,style:!0});var v=P(e);t=I(v,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,width:!0,height:!0,tabindex:!0}),a=B(v),$(i.$$.fragment,v),v.forEach(_),this.h()},h(){c(t,"class","post-media media-img svelte-ghjvqf"),c(t,"loading","lazy"),c(t,"data-src",s[4]),c(t,"alt",l=s[0].id.toString()),c(t,"width",n=s[0].width),c(t,"height",o=s[0].height),c(t,"tabindex","0"),c(e,"class","container svelte-ghjvqf"),j(e,"aspect-ratio",re(s[0].width,s[0].height))},m(f,v){T(f,e,v),D(e,t),s[9](t),D(e,a),ee(i,e,null),d=!0,k||(m=[C(t,"click",s[8]),C(t,"keydown",s[10]),C(t,"load",s[11]),C(t,"error",s[12],{once:!0}),Pe(Ve.call(null,t))],k=!0)},p(f,[v]){(!d||v&16)&&c(t,"data-src",f[4]),(!d||v&1&&l!==(l=f[0].id.toString()))&&c(t,"alt",l),(!d||v&1&&n!==(n=f[0].width))&&c(t,"width",n),(!d||v&1&&o!==(o=f[0].height))&&c(t,"height",o);const M={};!r&&v&4&&(r=!0,M.playing=f[2],de(()=>r=!1)),!u&&v&8&&(u=!0,M.loading=f[3],de(()=>u=!1)),i.$set(M),(!d||v&1)&&j(e,"aspect-ratio",re(f[0].width,f[0].height))},i(f){d||(R(i.$$.fragment,f),d=!0)},o(f){N(i.$$.fragment,f),d=!1},d(f){f&&_(e),s[9](null),te(i),k=!1,ie(m)}}}function Xt(s,e,t){let l,n,o,a,{post:i}=e,r,u=!1,d=!1;function k(A){oe.call(this,s,A)}function m(A){Z[A?"unshift":"push"](()=>{r=A,t(1,r),t(2,u),t(6,n),t(5,o),t(7,l),t(0,i)})}const S=A=>{Re(A),Me(A)&&(A.preventDefault(),t(3,d=!0),t(2,u=!u))},g=()=>t(3,d=!1),w=A=>{t(3,d=!1),A.target.src=`${X}/assets/failed-to-load.svg`};function f(A){u=A,t(2,u)}function v(A){d=A,t(3,d)}const M=()=>{t(3,d=!0),t(2,u=!u)};return s.$$set=A=>{"post"in A&&t(0,i=A.post)},s.$$.update=()=>{s.$$.dirty&1&&t(7,l=Gt(i.file_url,i.sample_url,i.preview_url)),s.$$.dirty&128&&t(6,n=l.animated),s.$$.dirty&128&&t(5,o=l.static),s.$$.dirty&100&&t(4,a=u?n:o),s.$$.dirty&102&&r&&t(1,r.src=u?n:o,r)},[i,r,u,d,a,o,n,l,k,m,S,g,w,f,v,M]}class ys extends V{constructor(e){super(),G(this,e,Xt,Qt,L,{post:0})}}export{os as C,hs as E,ys as G,bs as I,ds as P,cs as R,fs as S,vs as V,us as a,_s as b,Gt as c,qt as d,ms as e,Ee as f,gs as g,ps as i,ht as r};
