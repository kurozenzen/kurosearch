import{s as W,f as v,l as K,a as U,g as y,h as T,m as O,d as f,c as F,j as c,i as P,u as d,n as le,v as D,e as ke,G as ut,C as pt,N as q,F as M,H as Te,o as Ke,K as Oe,M as qe,p as fe,r as Xe,J as Be,S as Pe,T as Ve,I as Ce,k as ze,U as bt,E as Ze,R as vt,L as Me,P as yt,y as ye}from"./scheduler.32f194ce.js";import{S as H,i as J,a as C,g as we,c as Se,t as V,b as x,d as ee,m as te,e as se,f as Le,r as kt}from"./index.aa0a4971.js";import{b as De}from"./paths.98cc2d03.js";import{h as Qe,u as wt}from"./await_block.af8be678.js";import{e as Ge}from"./each.e59479a4.js";import{L as St}from"./LoadingAnimation.1752780f.js";import{f as Ye}from"./format-tag.7e313273.js";import{i as Et}from"./tags.49324235.js";import{a as je}from"./active-tags-store.0c57ba23.js";import{S as At}from"./SimpleTag.4f811b70.js";const It="https://api.rule34.xxx/index.php?page=dapi&s=comment&q=index&json=1",$e=async(s=void 0)=>{if(typeof s!="number"&&s!==void 0)throw new TypeError("Invalid postId");const e=new URL(It);s!==void 0&&e.searchParams.append("post_id",String(s));const t=await fetch(e);if(!t.ok)throw new Error("Failed to get tag suggestions");const n=await t.text(),r=new DOMParser().parseFromString(n,"text/xml"),a=[];for(const o of r.getElementsByTagName("comment"))a.push(Nt(o.attributes));return a},Nt=s=>{const e=s.getNamedItem("creator"),t=s.getNamedItem("created_at"),n=s.getNamedItem("body");if(e==null||t==null||n==null)throw new Error(`Failed to parse comment, attribute was null. ${e}, ${t}, ${n}`);return{author:e.value,createdAt:t.value,content:n.value}},xe=6e4,Re=s=>{if(!Ct(s))throw new TypeError("Invalid createdAt passed to formatCreatedAt");const e=new Date(s).getTime()/xe,n=new Date().getTime()/xe-e;if(n<1)return"just now";if(n<60)return ve(n,"minute");const l=n/60;if(l<24)return ve(l,"hour");const r=l/24;if(r<7)return ve(r,"day");if(r<30.5)return ve(r/7,"week");if(r<365.25)return ve(r/30.5,"month");const a=r/365.25;return ve(a,"year")},Ct=s=>(typeof s=="number"||typeof s=="string")&&new Date(s).toString()!=="Invalid Date",ve=(s,e)=>{const t=s.toFixed();return`${t} ${e}${t==="1"?"":"s"} ago`};function Tt(s){let e,t,n=s[0].author+"",l,r,a,o=Re(s[0].createdAt)+"",i,_,u,h=s[0].content+"",k;return{c(){e=v("div"),t=v("span"),l=K(n),r=U(),a=v("span"),i=K(o),_=U(),u=v("span"),k=K(h),this.h()},l(A){e=y(A,"DIV",{class:!0});var S=T(e);t=y(S,"SPAN",{class:!0});var N=T(t);l=O(N,n),N.forEach(f),r=F(S),a=y(S,"SPAN",{class:!0});var p=T(a);i=O(p,o),p.forEach(f),_=F(S),u=y(S,"SPAN",{class:!0});var w=T(u);k=O(w,h),w.forEach(f),S.forEach(f),this.h()},h(){c(t,"class","author svelte-bys59y"),c(a,"class","created-at svelte-bys59y"),c(u,"class","content svelte-bys59y"),c(e,"class","svelte-bys59y")},m(A,S){P(A,e,S),d(e,t),d(t,l),d(e,r),d(e,a),d(a,i),d(e,_),d(e,u),d(u,k)},p(A,[S]){S&1&&n!==(n=A[0].author+"")&&le(l,n),S&1&&o!==(o=Re(A[0].createdAt)+"")&&le(i,o),S&1&&h!==(h=A[0].content+"")&&le(k,h)},i:D,o:D,d(A){A&&f(e)}}}function Dt(s,e,t){let{comment:n}=e;return s.$$set=l=>{"comment"in l&&t(0,n=l.comment)},[n]}class Pt extends H{constructor(e){super(),J(this,e,Dt,Tt,W,{comment:0})}}function Vt(s){let e,t=s[0].charAt(0).toUpperCase()+"",n,l;return{c(){e=v("span"),n=K(t),this.h()},l(r){e=y(r,"SPAN",{title:!0,class:!0});var a=T(e);n=O(a,t),a.forEach(f),this.h()},h(){c(e,"title",l="Rated "+s[0]+"."),c(e,"class","svelte-1nbj6kf")},m(r,a){P(r,e,a),d(e,n)},p(r,[a]){a&1&&t!==(t=r[0].charAt(0).toUpperCase()+"")&&le(n,t),a&1&&l!==(l="Rated "+r[0]+".")&&c(e,"title",l)},i:D,o:D,d(r){r&&f(e)}}}function Mt(s,e,t){let{value:n}=e;return s.$$set=l=>{"value"in l&&t(0,n=l.value)},[n]}class Lt extends H{constructor(e){super(),J(this,e,Mt,Vt,W,{value:0})}}function Gt(s){let e,t=Re(s[0])+"",n;return{c(){e=v("span"),n=K(t),this.h()},l(l){e=y(l,"SPAN",{class:!0});var r=T(e);n=O(r,t),r.forEach(f),this.h()},h(){c(e,"class","svelte-1vqihm9")},m(l,r){P(l,e,r),d(e,n)},p(l,[r]){r&1&&t!==(t=Re(l[0])+"")&&le(n,t)},i:D,o:D,d(l){l&&f(e)}}}function Rt(s,e,t){let{value:n}=e;return s.$$set=l=>{"value"in l&&t(0,n=l.value)},[n]}class Ut extends H{constructor(e){super(),J(this,e,Rt,Gt,W,{value:0})}}function Ft(s){let e,t=Ye(s[0])+"",n;return{c(){e=v("span"),n=K(t),this.h()},l(l){e=y(l,"SPAN",{"data-testid":!0,class:!0});var r=T(e);n=O(r,t),r.forEach(f),this.h()},h(){c(e,"data-testid","score"),c(e,"class","codicon codicon-heart svelte-7y59vr")},m(l,r){P(l,e,r),d(e,n)},p(l,[r]){r&1&&t!==(t=Ye(l[0])+"")&&le(n,t)},i:D,o:D,d(l){l&&f(e)}}}function jt(s,e,t){let{value:n}=e;return s.$$set=l=>{"value"in l&&t(0,n=l.value)},[n]}class Bt extends H{constructor(e){super(),J(this,e,jt,Ft,W,{value:0})}}function et(s){let e,t,n,l,r;return{c(){e=v("a"),t=v("i"),n=U(),l=K(s[1]),this.h()},l(a){e=y(a,"A",{href:!0,target:!0,class:!0});var o=T(e);t=y(o,"I",{class:!0}),T(t).forEach(f),n=F(o),l=O(o,s[1]),o.forEach(f),this.h()},h(){c(t,"class","codicon codicon-link"),c(e,"href",r=s[0].toString()),c(e,"target","_newtab"),c(e,"class","svelte-1orztco")},m(a,o){P(a,e,o),d(e,t),d(e,n),d(e,l)},p(a,o){o&2&&le(l,a[1]),o&1&&r!==(r=a[0].toString())&&c(e,"href",r)},d(a){a&&f(e)}}}function zt(s){let e,t=s[0]&&et(s);return{c(){t&&t.c(),e=ke()},l(n){t&&t.l(n),e=ke()},m(n,l){t&&t.m(n,l),P(n,e,l)},p(n,[l]){n[0]?t?t.p(n,l):(t=et(n),t.c(),t.m(e.parentNode,e)):t&&(t.d(1),t=null)},i:D,o:D,d(n){n&&f(e),t&&t.d(n)}}}function Kt(s,e,t){let n,l,{source:r}=e;return s.$$set=a=>{"source"in a&&t(2,r=a.source)},s.$$.update=()=>{var a;s.$$.dirty&4&&t(0,n=Et(r)?new URL(r):null),s.$$.dirty&1&&t(1,l=(a=n==null?void 0:n.hostname)==null?void 0:a.replace(/^www./,""))},[n,l,r]}class Ot extends H{constructor(e){super(),J(this,e,Kt,zt,W,{source:2})}}function qt(s){let e,t,n;return{c(){e=v("a"),t=v("i"),n=K(" Open"),this.h()},l(l){e=y(l,"A",{href:!0,target:!0,class:!0});var r=T(e);t=y(r,"I",{class:!0}),T(t).forEach(f),n=O(r," Open"),r.forEach(f),this.h()},h(){c(t,"class","codicon codicon-link-external"),c(e,"href",s[0]),c(e,"target","_newtab"),c(e,"class","svelte-1orztco")},m(l,r){P(l,e,r),d(e,t),d(e,n)},p(l,[r]){r&1&&c(e,"href",l[0])},i:D,o:D,d(l){l&&f(e)}}}function Wt(s,e,t){let{url:n}=e;return s.$$set=l=>{"url"in l&&t(0,n=l.url)},[n]}class Ht extends H{constructor(e){super(),J(this,e,Wt,qt,W,{url:0})}}function Jt(s){let e,t,n;return{c(){e=v("a"),t=v("i"),n=K(" File"),this.h()},l(l){e=y(l,"A",{href:!0,target:!0,class:!0});var r=T(e);t=y(r,"I",{class:!0}),T(t).forEach(f),n=O(r," File"),r.forEach(f),this.h()},h(){c(t,"class","codicon codicon-link-external"),c(e,"href",s[0]),c(e,"target","_newtab"),c(e,"class","svelte-1orztco")},m(l,r){P(l,e,r),d(e,t),d(e,n)},p(l,[r]){r&1&&c(e,"href",l[0])},i:D,o:D,d(l){l&&f(e)}}}function Xt(s,e,t){let{url:n}=e;return s.$$set=l=>{"url"in l&&t(0,n=l.url)},[n]}class Zt extends H{constructor(e){super(),J(this,e,Xt,Jt,W,{url:0})}}function tt(s,e,t){const n=s.slice();n[4]=e[t];const l=n[1].find(function(...a){return s[3](n[4],...a)})!==void 0;return n[5]=l,n}function st(s){let e,t;function n(){return s[2](s[5],s[4])}return e=new At({props:{tag:s[4],active:s[5]}}),e.$on("click",n),{c(){x(e.$$.fragment)},l(l){ee(e.$$.fragment,l)},m(l,r){te(e,l,r),t=!0},p(l,r){s=l;const a={};r&1&&(a.tag=s[4]),r&3&&(a.active=s[5]),e.$set(a)},i(l){t||(C(e.$$.fragment,l),t=!0)},o(l){V(e.$$.fragment,l),t=!1},d(l){se(e,l)}}}function Qt(s){let e,t,n=Ge(s[0]),l=[];for(let a=0;a<n.length;a+=1)l[a]=st(tt(s,n,a));const r=a=>V(l[a],1,1,()=>{l[a]=null});return{c(){e=v("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=y(a,"UL",{class:!0});var o=T(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(f),this.h()},h(){c(e,"class","tags svelte-1gd63k6")},m(a,o){P(a,e,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);t=!0},p(a,[o]){if(o&3){n=Ge(a[0]);let i;for(i=0;i<n.length;i+=1){const _=tt(a,n,i);l[i]?(l[i].p(_,o),C(l[i],1)):(l[i]=st(_),l[i].c(),C(l[i],1),l[i].m(e,null))}for(we(),i=n.length;i<l.length;i+=1)r(i);Se()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)C(l[o]);t=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)V(l[o]);t=!1},d(a){a&&f(e),ut(l,a)}}}function Yt(s,e,t){let n;pt(s,je,o=>t(1,n=o));let{tags:l}=e;const r=(o,i)=>o?je.removeByName(i.name):je.addOrReplace({...i,modifier:"+"}),a=(o,i)=>i.name===o.name;return s.$$set=o=>{"tags"in o&&t(0,l=o.tags)},[l,n,r,a]}class $t extends H{constructor(e){super(),J(this,e,Yt,Qt,W,{tags:0})}}const ft=s=>s.endsWith(".gif"),xt=(s,e,t)=>ft(e)?{static:t,animated:e}:{static:e,animated:s},ht=s=>s.endsWith(".mp4")||s.endsWith(".webm"),Vs=(s,e,t)=>ht(e)?{static:t,animated:e}:{static:e,animated:s},Ms=s=>s.some(e=>e.name==="loop"),Ls=s=>ft(s)||ht(s),_t=s=>(s==null?void 0:s.key)===" ",gt=s=>(s==null?void 0:s.key)==="Enter",dt=s=>{var e,t;gt(s)&&((t=(e=s.target)==null?void 0:e.click)==null||t.call(e))},es="1250px",$=new IntersectionObserver(s=>{for(const e of s){const t=e.isIntersecting?e.target.getAttribute("data-src")??"":"";e.target.setAttribute("src",t)}},{rootMargin:es});function ts(s){let e,t,n,l,r,a,o,i,_;return{c(){e=v("div"),t=v("img"),this.h()},l(u){e=y(u,"DIV",{class:!0});var h=T(e);t=y(h,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,style:!0,width:!0,height:!0,tabindex:!0}),h.forEach(f),this.h()},h(){c(t,"class","post-media svelte-dgcl67"),c(t,"loading","lazy"),c(t,"data-src",n=s[0].sample_url),c(t,"alt",l=s[0].id.toString()),c(t,"style",r=`aspect-ratio: ${s[0].width} / ${s[0].height}`),c(t,"width",a=s[0].width),c(t,"height",o=s[0].height),c(t,"tabindex","0"),c(e,"class","svelte-dgcl67"),q(e,"expandable",s[3]),q(e,"open",s[1])},m(u,h){P(u,e,h),d(e,t),s[6](t),i||(_=[M(t,"click",s[5]),M(t,"keydown",dt),M(t,"error",s[7])],i=!0)},p(u,[h]){h&1&&n!==(n=u[0].sample_url)&&c(t,"data-src",n),h&1&&l!==(l=u[0].id.toString())&&c(t,"alt",l),h&1&&r!==(r=`aspect-ratio: ${u[0].width} / ${u[0].height}`)&&c(t,"style",r),h&1&&a!==(a=u[0].width)&&c(t,"width",a),h&1&&o!==(o=u[0].height)&&c(t,"height",o),h&8&&q(e,"expandable",u[3]),h&2&&q(e,"open",u[1])},i:D,o:D,d(u){u&&f(e),s[6](null),i=!1,Te(_)}}}function ss(s,e,t){let n,l,{post:r}=e,{open:a}=e,o;Ke(()=>{$==null||$.observe(o)}),Oe(()=>{$==null||$.unobserve(o)});function i(h){qe.call(this,s,h)}function _(h){fe[h?"unshift":"push"](()=>{o=h,t(2,o)})}const u=h=>h.target.src=`${De}/assets/failed-to-load.svg`;return s.$$set=h=>{"post"in h&&t(0,r=h.post),"open"in h&&t(1,a=h.open)},s.$$.update=()=>{s.$$.dirty&1&&t(4,n=r.width/r.height),s.$$.dirty&16&&t(3,l=n<.33)},[r,a,o,l,n,i,_,u]}class Gs extends H{constructor(e){super(),J(this,e,ss,ts,W,{post:0,open:1})}}const nt=s=>{if(typeof s!="number")throw new TypeError(`Attempted to call formatVideoTime with invalid value: ${s}`);const e=Math.floor(s),t=e%60,n=Math.floor(e/60);return`${lt(n)}:${lt(t)}`},lt=s=>{const e=String(s),t=Math.max(0,2-e.length);return`${"0".repeat(t)}${e}`};function ns(s){let e,t;return{c(){e=v("img"),this.h()},l(n){e=y(n,"IMG",{src:!0,alt:!0,width:!0,height:!0,style:!0}),this.h()},h(){Ce(e.src,t=De+"/assets/play.svg")||c(e,"src",t),c(e,"alt","Start GIF"),c(e,"width","16"),c(e,"height","32"),ze(e,"margin-left","4px")},m(n,l){P(n,e,l)},d(n){n&&f(e)}}}function ls(s){let e,t;return{c(){e=v("img"),this.h()},l(n){e=y(n,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){Ce(e.src,t=De+"/assets/pause.svg")||c(e,"src",t),c(e,"alt","Stop GIF"),c(e,"width","16"),c(e,"height","32")},m(n,l){P(n,e,l)},d(n){n&&f(e)}}}function as(s){let e,t;return{c(){e=v("img"),this.h()},l(n){e=y(n,"IMG",{src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){Ce(e.src,t=De+"/assets/load.svg")||c(e,"src",t),c(e,"alt","Loading GIF"),c(e,"width","16"),c(e,"height","32")},m(n,l){P(n,e,l)},d(n){n&&f(e)}}}function rs(s){let e,t,n,l,r;function a(_,u){return _[1]?as:_[0]?ls:ns}let o=a(s),i=o(s);return{c(){e=v("button"),t=v("div"),i.c(),this.h()},l(_){e=y(_,"BUTTON",{class:!0});var u=T(e);t=y(u,"DIV",{class:!0});var h=T(t);i.l(h),h.forEach(f),u.forEach(f),this.h()},h(){c(t,"class","circle svelte-16x84bp"),c(e,"class",n=Xe(s[3].class)+" svelte-16x84bp"),q(e,"play",s[0]&&!s[1])},m(_,u){P(_,e,u),d(e,t),i.m(t,null),l||(r=M(e,"click",Be(s[2])),l=!0)},p(_,[u]){o!==(o=a(_))&&(i.d(1),i=o(_),i&&(i.c(),i.m(t,null))),u&8&&n!==(n=Xe(_[3].class)+" svelte-16x84bp")&&c(e,"class",n),u&11&&q(e,"play",_[0]&&!_[1])},i:D,o:D,d(_){_&&f(e),i.d(),l=!1,r()}}}function is(s,e,t){let{playing:n}=e,{loading:l}=e;const r=()=>{t(1,l=!0),t(0,n=!n)};return s.$$set=a=>{t(3,e=Pe(Pe({},e),Ve(a))),"playing"in a&&t(0,n=a.playing),"loading"in a&&t(1,l=a.loading)},e=Ve(e),[n,l,r,e]}class mt extends H{constructor(e){super(),J(this,e,is,rs,W,{playing:0,loading:1})}}function at(s){let e,t,n,l=!0,r=!1,a,o,i,_=nt(s[15])+"",u,h,k,A,S,N,p,w,m,j,z;function he(){cancelAnimationFrame(a),e.paused||(a=kt(he),r=!0),s[25].call(e)}function X(g){s[30](g)}function Z(g){s[31](g)}let ae={class:"center"};return s[5]!==void 0&&(ae.playing=s[5]),s[6]!==void 0&&(ae.loading=s[6]),N=new mt({props:ae}),fe.push(()=>Le(N,"playing",X)),fe.push(()=>Le(N,"loading",Z)),{c(){e=v("video"),o=U(),i=v("span"),u=K(_),h=U(),k=v("input"),S=U(),x(N.$$.fragment),this.h()},l(g){e=y(g,"VIDEO",{poster:!0,src:!0,preload:!0,style:!0,class:!0}),T(e).forEach(f),o=F(g),i=y(g,"SPAN",{class:!0});var I=T(i);u=O(I,_),I.forEach(f),h=F(g),k=y(g,"INPUT",{type:!0,min:!0,max:!0,step:!0,style:!0,class:!0}),S=F(g),ee(N.$$.fragment,g),this.h()},h(){c(e,"poster",s[1]),e.loop=s[4],Ce(e.src,t=s[0])||c(e,"src",t),c(e,"preload","metadata"),c(e,"style",n=`aspect-ratio: ${s[2]} / ${s[3]}`),c(e,"class","svelte-g134if"),s[8]===void 0&&bt(()=>s[26].call(e)),c(i,"class","svelte-g134if"),q(i,"hide",s[12]),c(k,"type","range"),c(k,"min",0),c(k,"max",s[8]),c(k,"step",.0166666),c(k,"style",A=`background-image: linear-gradient(90deg, var(--accent) ${s[13]}%, var(--background-2) ${s[13]}%);}`),c(k,"class","svelte-g134if"),q(k,"hide",s[12])},m(g,I){P(g,e,I),s[23](e),P(g,o,I),P(g,i,I),d(i,u),P(g,h,I),P(g,k,I),Ze(k,s[7]),P(g,S,I),te(N,g,I),m=!0,j||(z=[M(e,"play",s[24]),M(e,"pause",s[24]),M(e,"timeupdate",he),M(e,"durationchange",s[26]),M(e,"waiting",s[19]),M(e,"playing",s[20]),M(e,"pause",s[20]),M(e,"ended",s[27]),M(e,"dblclick",Be(vt(s[28]))),M(k,"change",s[29]),M(k,"input",s[29]),M(k,"click",Be(cs))],j=!0)},p(g,I){(!m||I[0]&2)&&c(e,"poster",g[1]),(!m||I[0]&16)&&(e.loop=g[4]),(!m||I[0]&1&&!Ce(e.src,t=g[0]))&&c(e,"src",t),(!m||I[0]&12&&n!==(n=`aspect-ratio: ${g[2]} / ${g[3]}`))&&c(e,"style",n),I[0]&16384&&l!==(l=g[14])&&e[l?"pause":"play"](),!r&&I[0]&128&&!isNaN(g[7])&&(e.currentTime=g[7]),r=!1,(!m||I[0]&32768)&&_!==(_=nt(g[15])+"")&&le(u,_),(!m||I[0]&4096)&&q(i,"hide",g[12]),(!m||I[0]&256)&&c(k,"max",g[8]),(!m||I[0]&8192&&A!==(A=`background-image: linear-gradient(90deg, var(--accent) ${g[13]}%, var(--background-2) ${g[13]}%);}`))&&c(k,"style",A),I[0]&128&&Ze(k,g[7]),(!m||I[0]&4096)&&q(k,"hide",g[12]);const B={};!p&&I[0]&32&&(p=!0,B.playing=g[5],Me(()=>p=!1)),!w&&I[0]&64&&(w=!0,B.loading=g[6],Me(()=>w=!1)),N.$set(B)},i(g){m||(C(N.$$.fragment,g),m=!0)},o(g){V(N.$$.fragment,g),m=!1},d(g){g&&(f(e),f(o),f(i),f(h),f(k),f(S)),s[23](null),se(N,g),j=!1,Te(z)}}}function os(s){let e,t,n,l,r,a=s[9]&&at(s);return{c(){e=v("div"),a&&a.c(),this.h()},l(o){e=y(o,"DIV",{tabindex:!0,class:!0,style:!0});var i=T(e);a&&a.l(i),i.forEach(f),this.h()},h(){c(e,"tabindex","0"),c(e,"class",t="post-media player "+s[21].class+" svelte-g134if"),ze(e,"aspect-ratio",s[2]+"/"+s[3])},m(o,i){P(o,e,i),a&&a.m(e,null),s[32](e),n=!0,l||(r=[M(e,"click",s[22]),M(e,"keydown",s[18])],l=!0)},p(o,i){o[9]?a?(a.p(o,i),i[0]&512&&C(a,1)):(a=at(o),a.c(),C(a,1),a.m(e,null)):a&&(we(),V(a,1,1,()=>{a=null}),Se()),(!n||i[0]&2097152&&t!==(t="post-media player "+o[21].class+" svelte-g134if"))&&c(e,"class",t),(!n||i[0]&12)&&ze(e,"aspect-ratio",o[2]+"/"+o[3])},i(o){n||(C(a),n=!0)},o(o){V(a),n=!1},d(o){o&&f(e),a&&a.d(),s[32](null),l=!1,Te(r)}}}const rt=5,cs=()=>{};function us(s,e,t){let n,l,r,a,{src:o}=e,{poster:i}=e,{width:_}=e,{height:u}=e,{loop:h}=e,k,A,S=!1,N=!1,p=0,w=0,m=!1;const j=()=>{t(7,p=Math.max(0,p-rt))},z=()=>{t(7,p=Math.min(w,p+rt))},he=b=>{var oe;gt(b)?(oe=b.target)==null||oe.click():_t(b)||b.key==="k"?(b.preventDefault(),t(5,S=!S)):b.key==="ArrowLeft"||b.key==="j"?j():(b.key==="ArrowRight"||b.key==="l")&&z()},X=new IntersectionObserver(b=>{for(const oe of b)oe.isIntersecting?t(9,m=!0):A&&(t(5,S=!1),t(6,N=!1),A.addEventListener("error",()=>{t(9,m=!1)},{once:!0}),t(11,A.src="",A))},{rootMargin:"0px"}),Z=()=>t(6,N=!0),ae=()=>t(6,N=!1);Ke(()=>X==null?void 0:X.observe(k)),Oe(()=>X==null?void 0:X.unobserve(k));function g(b){qe.call(this,s,b)}function I(b){fe[b?"unshift":"push"](()=>{A=b,t(11,A)})}function B(){l=this.paused,t(14,l),t(5,S),t(9,m)}function re(){p=this.currentTime,t(7,p)}function _e(){w=this.duration,t(8,w)}const pe=()=>{h||(t(6,N=!1),t(5,S=!1))},Ee=b=>{b.offsetX<b.target.clientWidth/2?j():z()};function Ae(){p=yt(this.value),t(7,p)}function ne(b){S=b,t(5,S),t(9,m)}function ie(b){N=b,t(6,N)}function ge(b){fe[b?"unshift":"push"](()=>{k=b,t(10,k)})}return s.$$set=b=>{t(21,e=Pe(Pe({},e),Ve(b))),"src"in b&&t(0,o=b.src),"poster"in b&&t(1,i=b.poster),"width"in b&&t(2,_=b.width),"height"in b&&t(3,u=b.height),"loop"in b&&t(4,h=b.loop)},s.$$.update=()=>{s.$$.dirty[0]&384&&t(15,n=w-p),s.$$.dirty[0]&544&&t(5,S=m&&S),s.$$.dirty[0]&32&&t(14,l=!S),s.$$.dirty[0]&384&&t(13,r=p/w*98+1),s.$$.dirty[0]&96&&t(12,a=S&&!N)},e=Ve(e),[o,i,_,u,h,S,N,p,w,m,k,A,a,r,l,n,j,z,he,Z,ae,e,g,I,B,re,_e,pe,Ee,Ae,ne,ie,ge]}class Rs extends H{constructor(e){super(),J(this,e,us,os,W,{src:0,poster:1,width:2,height:3,loop:4},null,[-1,-1])}}function fs(s){let e,t,n,l,r,a,o,i,_,u,h,k,A;function S(w){s[11](w)}function N(w){s[12](w)}let p={class:"center"};return s[2]!==void 0&&(p.playing=s[2]),s[3]!==void 0&&(p.loading=s[3]),o=new mt({props:p}),fe.push(()=>Le(o,"playing",S)),fe.push(()=>Le(o,"loading",N)),{c(){e=v("div"),t=v("img"),a=U(),x(o.$$.fragment),this.h()},l(w){e=y(w,"DIV",{class:!0,style:!0});var m=T(e);t=y(m,"IMG",{class:!0,loading:!0,"data-src":!0,alt:!0,width:!0,height:!0,tabindex:!0}),a=F(m),ee(o.$$.fragment,m),m.forEach(f),this.h()},h(){c(t,"class","post-media media-img svelte-1cndgba"),c(t,"loading","lazy"),c(t,"data-src",s[4]),c(t,"alt",n=s[0].id.toString()),c(t,"width",l=s[0].width),c(t,"height",r=s[0].height),c(t,"tabindex","0"),c(e,"class","container svelte-1cndgba"),c(e,"style",u=`aspect-ratio: ${s[0].width} / ${s[0].height}`)},m(w,m){P(w,e,m),d(e,t),s[7](t),d(e,a),te(o,e,null),h=!0,k||(A=[M(t,"click",s[6]),M(t,"keydown",s[8]),M(t,"load",s[9]),M(t,"error",s[10])],k=!0)},p(w,[m]){(!h||m&16)&&c(t,"data-src",w[4]),(!h||m&1&&n!==(n=w[0].id.toString()))&&c(t,"alt",n),(!h||m&1&&l!==(l=w[0].width))&&c(t,"width",l),(!h||m&1&&r!==(r=w[0].height))&&c(t,"height",r);const j={};!i&&m&4&&(i=!0,j.playing=w[2],Me(()=>i=!1)),!_&&m&8&&(_=!0,j.loading=w[3],Me(()=>_=!1)),o.$set(j),(!h||m&1&&u!==(u=`aspect-ratio: ${w[0].width} / ${w[0].height}`))&&c(e,"style",u)},i(w){h||(C(o.$$.fragment,w),h=!0)},o(w){V(o.$$.fragment,w),h=!1},d(w){w&&f(e),s[7](null),se(o),k=!1,Te(A)}}}function hs(s,e,t){let n,l,{post:r}=e,a,o=!1,i=!1;Ke(()=>$==null?void 0:$.observe(a)),Oe(()=>$==null?void 0:$.unobserve(a));function _(p){qe.call(this,s,p)}function u(p){fe[p?"unshift":"push"](()=>{a=p,t(1,a),t(2,o),t(5,n),t(0,r)})}const h=p=>{dt(p),_t(p)&&(p.preventDefault(),t(3,i=!0),t(2,o=!o))},k=()=>t(3,i=!1),A=p=>{t(3,i=!1),p.target.src=`${De}/assets/failed-to-load.svg`};function S(p){o=p,t(2,o)}function N(p){i=p,t(3,i)}return s.$$set=p=>{"post"in p&&t(0,r=p.post)},s.$$.update=()=>{s.$$.dirty&1&&t(5,n=xt(r.file_url,r.sample_url,r.preview_url)),s.$$.dirty&36&&t(4,l=o?n.animated:n.static),s.$$.dirty&38&&a&&t(1,a.src=o?n.animated:n.static,a)},[r,a,o,i,l,n,_,u,h,k,A,S,N]}class Us extends H{constructor(e){super(),J(this,e,hs,fs,W,{post:0})}}function it(s,e,t){const n=s.slice();return n[5]=e[t],n}function ot(s){let e,t="•",n,l,r;return l=new Ot({props:{source:s[0].source}}),{c(){e=v("span"),e.textContent=t,n=U(),x(l.$$.fragment),this.h()},l(a){e=y(a,"SPAN",{class:!0,"data-svelte-h":!0}),ye(e)!=="svelte-7hh8jk"&&(e.textContent=t),n=F(a),ee(l.$$.fragment,a),this.h()},h(){c(e,"class","svelte-188brre")},m(a,o){P(a,e,o),P(a,n,o),te(l,a,o),r=!0},p(a,o){const i={};o&1&&(i.source=a[0].source),l.$set(i)},i(a){r||(C(l.$$.fragment,a),r=!0)},o(a){V(l.$$.fragment,a),r=!1},d(a){a&&(f(e),f(n)),se(l,a)}}}function _s(s){let e,t,n,l={ctx:s,current:null,token:null,hasCatch:!1,pending:vs,then:ms,catch:ds,value:4,blocks:[,,,]};return Qe(t=$e(s[0].id),l),{c(){e=ke(),l.block.c()},l(r){e=ke(),l.block.l(r)},m(r,a){P(r,e,a),l.block.m(r,l.anchor=a),l.mount=()=>e.parentNode,l.anchor=e,n=!0},p(r,a){s=r,l.ctx=s,a&1&&t!==(t=$e(s[0].id))&&Qe(t,l)||wt(l,s,a)},i(r){n||(C(l.block),n=!0)},o(r){for(let a=0;a<3;a+=1){const o=l.blocks[a];V(o)}n=!1},d(r){r&&f(e),l.block.d(r),l.token=null,l=null}}}function gs(s){let e,t;return e=new $t({props:{tags:s[0].tags}}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,l){te(e,n,l),t=!0},p(n,l){const r={};l&1&&(r.tags=n[0].tags),e.$set(r)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){V(e.$$.fragment,n),t=!1},d(n){se(e,n)}}}function ds(s){return{c:D,l:D,m:D,p:D,i:D,o:D,d:D}}function ms(s){let e,t,n,l;const r=[bs,ps],a=[];function o(i,_){return i[4].length>0?0:1}return e=o(s),t=a[e]=r[e](s),{c(){t.c(),n=ke()},l(i){t.l(i),n=ke()},m(i,_){a[e].m(i,_),P(i,n,_),l=!0},p(i,_){let u=e;e=o(i),e===u?a[e].p(i,_):(we(),V(a[u],1,1,()=>{a[u]=null}),Se(),t=a[e],t?t.p(i,_):(t=a[e]=r[e](i),t.c()),C(t,1),t.m(n.parentNode,n))},i(i){l||(C(t),l=!0)},o(i){V(t),l=!1},d(i){i&&f(n),a[e].d(i)}}}function ps(s){let e,t="Comments for this post are not available";return{c(){e=v("span"),e.textContent=t,this.h()},l(n){e=y(n,"SPAN",{class:!0,"data-svelte-h":!0}),ye(e)!=="svelte-4t2lxe"&&(e.textContent=t),this.h()},h(){c(e,"class","no-comments svelte-188brre")},m(n,l){P(n,e,l)},p:D,i:D,o:D,d(n){n&&f(e)}}}function bs(s){let e,t,n=Ge(s[4]),l=[];for(let a=0;a<n.length;a+=1)l[a]=ct(it(s,n,a));const r=a=>V(l[a],1,1,()=>{l[a]=null});return{c(){e=v("ul");for(let a=0;a<l.length;a+=1)l[a].c();this.h()},l(a){e=y(a,"UL",{class:!0});var o=T(e);for(let i=0;i<l.length;i+=1)l[i].l(o);o.forEach(f),this.h()},h(){c(e,"class","comments svelte-188brre")},m(a,o){P(a,e,o);for(let i=0;i<l.length;i+=1)l[i]&&l[i].m(e,null);t=!0},p(a,o){if(o&1){n=Ge(a[4]);let i;for(i=0;i<n.length;i+=1){const _=it(a,n,i);l[i]?(l[i].p(_,o),C(l[i],1)):(l[i]=ct(_),l[i].c(),C(l[i],1),l[i].m(e,null))}for(we(),i=n.length;i<l.length;i+=1)r(i);Se()}},i(a){if(!t){for(let o=0;o<n.length;o+=1)C(l[o]);t=!0}},o(a){l=l.filter(Boolean);for(let o=0;o<l.length;o+=1)V(l[o]);t=!1},d(a){a&&f(e),ut(l,a)}}}function ct(s){let e,t;return e=new Pt({props:{comment:s[5]}}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,l){te(e,n,l),t=!0},p(n,l){const r={};l&1&&(r.comment=n[5]),e.$set(r)},i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){V(e.$$.fragment,n),t=!1},d(n){se(e,n)}}}function vs(s){let e,t;return e=new St({}),{c(){x(e.$$.fragment)},l(n){ee(e.$$.fragment,n)},m(n,l){te(e,n,l),t=!0},p:D,i(n){t||(C(e.$$.fragment,n),t=!0)},o(n){V(e.$$.fragment,n),t=!1},d(n){se(e,n)}}}function ys(s){let e,t,n,l,r,a="•",o,i,_,u,h="•",k,A,S,N,p="•",w,m,j,z,he="•",X,Z,ae,g,I,B,re,_e=s[0].tags.length+"",pe,Ee,Ae,ne,ie,ge=(s[0].comment_count||"No")+"",b,oe,Ue,Q,Y,ce,Fe,We;n=new Lt({props:{value:s[0].rating}}),i=new Bt({props:{value:s[0].score}}),A=new Ut({props:{value:s[0].change}}),m=new Ht({props:{url:"/post?id="+s[0].id+"&src="+s[0].file_url}}),Z=new Zt({props:{url:s[0].file_url}});let R=s[0].source&&ot(s);const He=[gs,_s],ue=[];function Je(E,L){return E[1]==="tags"?0:1}return Q=Je(s),Y=ue[Q]=He[Q](s),{c(){e=v("div"),t=v("div"),x(n.$$.fragment),l=U(),r=v("span"),r.textContent=a,o=U(),x(i.$$.fragment),_=U(),u=v("span"),u.textContent=h,k=U(),x(A.$$.fragment),S=U(),N=v("span"),N.textContent=p,w=U(),x(m.$$.fragment),j=U(),z=v("span"),z.textContent=he,X=U(),x(Z.$$.fragment),ae=U(),R&&R.c(),g=U(),I=v("div"),B=v("button"),re=v("span"),pe=K(_e),Ee=K(" tags"),Ae=U(),ne=v("button"),ie=v("span"),b=K(ge),oe=K(" comments"),Ue=U(),Y.c(),this.h()},l(E){e=y(E,"DIV",{class:!0});var L=T(e);t=y(L,"DIV",{class:!0});var G=T(t);ee(n.$$.fragment,G),l=F(G),r=y(G,"SPAN",{class:!0,"data-svelte-h":!0}),ye(r)!=="svelte-7hh8jk"&&(r.textContent=a),o=F(G),ee(i.$$.fragment,G),_=F(G),u=y(G,"SPAN",{class:!0,"data-svelte-h":!0}),ye(u)!=="svelte-7hh8jk"&&(u.textContent=h),k=F(G),ee(A.$$.fragment,G),S=F(G),N=y(G,"SPAN",{class:!0,"data-svelte-h":!0}),ye(N)!=="svelte-7hh8jk"&&(N.textContent=p),w=F(G),ee(m.$$.fragment,G),j=F(G),z=y(G,"SPAN",{class:!0,"data-svelte-h":!0}),ye(z)!=="svelte-7hh8jk"&&(z.textContent=he),X=F(G),ee(Z.$$.fragment,G),ae=F(G),R&&R.l(G),G.forEach(f),g=F(L),I=y(L,"DIV",{class:!0});var de=T(I);B=y(de,"BUTTON",{class:!0});var Ie=T(B);re=y(Ie,"SPAN",{class:!0});var be=T(re);pe=O(be,_e),Ee=O(be," tags"),be.forEach(f),Ie.forEach(f),Ae=F(de),ne=y(de,"BUTTON",{class:!0});var Ne=T(ne);ie=y(Ne,"SPAN",{class:!0});var me=T(ie);b=O(me,ge),oe=O(me," comments"),me.forEach(f),Ne.forEach(f),de.forEach(f),Ue=F(L),Y.l(L),L.forEach(f),this.h()},h(){c(r,"class","svelte-188brre"),c(u,"class","svelte-188brre"),c(N,"class","svelte-188brre"),c(z,"class","svelte-188brre"),c(t,"class","summary svelte-188brre"),c(re,"class","svelte-188brre"),c(B,"class","codicon codicon-tag svelte-188brre"),q(B,"active",s[1]==="tags"),c(ie,"class","svelte-188brre"),c(ne,"class","codicon codicon-comment-discussion svelte-188brre"),q(ne,"active",s[1]==="comments"),c(I,"class","tabs svelte-188brre"),c(e,"class","details svelte-188brre")},m(E,L){P(E,e,L),d(e,t),te(n,t,null),d(t,l),d(t,r),d(t,o),te(i,t,null),d(t,_),d(t,u),d(t,k),te(A,t,null),d(t,S),d(t,N),d(t,w),te(m,t,null),d(t,j),d(t,z),d(t,X),te(Z,t,null),d(t,ae),R&&R.m(t,null),d(e,g),d(e,I),d(I,B),d(B,re),d(re,pe),d(re,Ee),d(I,Ae),d(I,ne),d(ne,ie),d(ie,b),d(ie,oe),d(e,Ue),ue[Q].m(e,null),ce=!0,Fe||(We=[M(B,"click",s[2]),M(ne,"click",s[3])],Fe=!0)},p(E,[L]){const G={};L&1&&(G.value=E[0].rating),n.$set(G);const de={};L&1&&(de.value=E[0].score),i.$set(de);const Ie={};L&1&&(Ie.value=E[0].change),A.$set(Ie);const be={};L&1&&(be.url="/post?id="+E[0].id+"&src="+E[0].file_url),m.$set(be);const Ne={};L&1&&(Ne.url=E[0].file_url),Z.$set(Ne),E[0].source?R?(R.p(E,L),L&1&&C(R,1)):(R=ot(E),R.c(),C(R,1),R.m(t,null)):R&&(we(),V(R,1,1,()=>{R=null}),Se()),(!ce||L&1)&&_e!==(_e=E[0].tags.length+"")&&le(pe,_e),(!ce||L&2)&&q(B,"active",E[1]==="tags"),(!ce||L&1)&&ge!==(ge=(E[0].comment_count||"No")+"")&&le(b,ge),(!ce||L&2)&&q(ne,"active",E[1]==="comments");let me=Q;Q=Je(E),Q===me?ue[Q].p(E,L):(we(),V(ue[me],1,1,()=>{ue[me]=null}),Se(),Y=ue[Q],Y?Y.p(E,L):(Y=ue[Q]=He[Q](E),Y.c()),C(Y,1),Y.m(e,null))},i(E){ce||(C(n.$$.fragment,E),C(i.$$.fragment,E),C(A.$$.fragment,E),C(m.$$.fragment,E),C(Z.$$.fragment,E),C(R),C(Y),ce=!0)},o(E){V(n.$$.fragment,E),V(i.$$.fragment,E),V(A.$$.fragment,E),V(m.$$.fragment,E),V(Z.$$.fragment,E),V(R),V(Y),ce=!1},d(E){E&&f(e),se(n),se(i),se(A),se(m),se(Z),R&&R.d(),ue[Q].d(),Fe=!1,Te(We)}}}function ks(s,e,t){let{post:n}=e,l="tags";const r=()=>{t(1,l="tags")},a=()=>{t(1,l="comments")};return s.$$set=o=>{"post"in o&&t(0,n=o.post)},[n,l,r,a]}class Fs extends H{constructor(e){super(),J(this,e,ks,ys,W,{post:0})}}export{Pt as C,Fs as D,Ot as E,Us as G,Gs as I,Ht as K,$t as P,Lt as R,Bt as S,Rs as V,Ut as a,Zt as b,xt as c,Vs as d,gt as e,Ms as f,$e as g,Ls as i};
