import{s as oe,f as S,a as C,g as T,c as A,y as ue,D as qe,j as b,i as R,d as g,E as Ce,l as ee,m as te,e as de,h as P,u as $,F as fe,n as Fe,C as ge,G as Bn,p as Se,H as Te,I as je,J as Jt,K as Ye,L as Ue,k as ot,v as Z,M as ct,w as jn,N as Vn,z as qn,A as Un,B as zn,o as ut,O as Zt,P as ft,r as Qt}from"../chunks/scheduler.6c5d9662.js";import{S as ae,i as ie,b as M,d as F,m as L,a as w,t as I,e as B,g as ne,c as se,f as Ve}from"../chunks/index.8c724fb2.js";import{s as pe,r as Ne,K as Gn,A as Kn,a as Xe,S as Wn}from"../chunks/search-builder.006009c0.js";import{S as Hn,n as Yn,s as yt}from"../chunks/supertags-store.f14c9892.js";import{T as Le}from"../chunks/TextButton.53e352d9.js";import{g as Jn,a as Zn}from"../chunks/tags.afa77e19.js";import{a as Oe}from"../chunks/active-tags-store.72f5ae3d.js";import{b as Xt}from"../chunks/paths.dc63dc77.js";import{e as Ee}from"../chunks/each.e59479a4.js";import{D as xt,r as Qn}from"../chunks/Dialog.249a2b75.js";import{i as en,D as tn,G as nn,V as sn,I as rn}from"../chunks/Details.3a7c7af2.js";import{f as Be}from"../chunks/format-tag.d6c065e3.js";import{R as Xn}from"../chunks/ModifierSelect.e69c9799.js";import{S as It}from"../chunks/Select.307673e1.js";import{R as xn,I as es}from"../chunks/RotatingTextSelect.5aa910cd.js";import{b as ts}from"../chunks/blocked-content-store.64bd99a1.js";import{D as ns}from"../chunks/DetailedTag.19f75f3d.js";import{S as ss}from"../chunks/ScrollUpButton.c06faa1c.js";import{r as ze,_ as Ge,C as Ke,a as Je,E as on,F as an,g as ln,L as rs,i as os,c as kt,b as as,v as is,d as ls,e as cs,f as us}from"../chunks/index.esm2017.edf8478c.js";function fs(t){let e;return{c(){e=ee("Reset Filter")},l(s){e=te(s,"Reset Filter")},m(s,n){R(s,e,n)},d(s){s&&g(e)}}}function ds(t){let e,s,n,r,o="We couldn't find any posts matching your tags. Sorry...",a,l,i;return l=new Le({props:{title:"In case your filter caused all posts to vanish. Reset it.",$$slots:{default:[fs]},$$scope:{ctx:t}}}),l.$on("click",t[1]),{c(){e=S("img"),n=C(),r=S("p"),r.textContent=o,a=C(),M(l.$$.fragment),this.h()},l(u){e=T(u,"IMG",{src:!0,alt:!0,class:!0}),n=A(u),r=T(u,"P",{["data-svelte-h"]:!0}),ue(r)!=="svelte-1utxj3w"&&(r.textContent=o),a=A(u),F(l.$$.fragment,u),this.h()},h(){qe(e.src,s=Xt+"/assets/shironeko-confused.png")||b(e,"src",s),b(e,"alt","Nothing here..."),b(e,"class","svelte-1bb5e7g")},m(u,c){R(u,e,c),R(u,n,c),R(u,r,c),R(u,a,c),L(l,u,c),i=!0},p(u,[c]){const f={};c&4&&(f.$$scope={dirty:c,ctx:u}),l.$set(f)},i(u){i||(w(l.$$.fragment,u),i=!0)},o(u){I(l.$$.fragment,u),i=!1},d(u){u&&(g(e),g(n),g(r),g(a)),B(l,u)}}}function ps(t){const e=Ce();return[e,()=>{pe.reset(),e("sortfilterupdate")}]}class gs extends ae{constructor(e){super(),ie(this,e,ps,ds,oe,{})}}function St(t){let e,s;return e=new xt({props:{$$slots:{default:[_s]},$$scope:{ctx:t}}}),e.$on("close",t[6]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&32771&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function ms(t){let e;return{c(){e=ee("Done")},l(s){e=te(s,"Done")},m(s,n){R(s,e,n)},d(s){s&&g(e)}}}function hs(t){let e;return{c(){e=ee("Reset")},l(s){e=te(s,"Reset")},m(s,n){R(s,e,n)},d(s){s&&g(e)}}}function _s(t){let e,s,n="Sorting and Filtering",r,o,a,l="Sorting",i,u,c,f,d,p,v,V,m,y,h="Filtering by Score",k,E,H,le,Y,G,ce,_,U,J="Filtering by Rating",W,Q,j,Ae,O,D,K,q,re,ke,De;function Pe(N){t[8](N)}let $t={options:bs};t[1].sortDirection!==void 0&&($t.value=t[1].sortDirection),c=new Xn({props:$t}),Se.push(()=>Ve(c,"value",Pe));function Mn(N){t[9](N)}let vt={options:vs};t[1].sortProperty!==void 0&&(vt.value=t[1].sortProperty),p=new It({props:vt}),Se.push(()=>Ve(p,"value",Mn));function Fn(N){t[10](N)}let bt={options:ws};t[1].scoreComparator!==void 0&&(bt.value=t[1].scoreComparator),H=new xn({props:bt}),Se.push(()=>Ve(H,"value",Fn));function Ln(N){t[13](N)}let wt={options:cn};return t[1].rating!==void 0&&(wt.value=t[1].rating),j=new It({props:wt}),Se.push(()=>Ve(j,"value",Ln)),D=new Le({props:{title:"Return to searching.",$$slots:{default:[ms]},$$scope:{ctx:t}}}),D.$on("click",t[6]),q=new Le({props:{title:"Reset sort and filter.",type:"secondary",$$slots:{default:[hs]},$$scope:{ctx:t}}}),q.$on("click",t[7]),{c(){e=S("div"),s=S("h3"),s.textContent=n,r=C(),o=S("label"),a=S("b"),a.textContent=l,i=C(),u=S("div"),M(c.$$.fragment),d=C(),M(p.$$.fragment),V=C(),m=S("label"),y=S("b"),y.textContent=h,k=C(),E=S("div"),M(H.$$.fragment),Y=C(),G=S("input"),ce=C(),_=S("label"),U=S("b"),U.textContent=J,W=C(),Q=S("div"),M(j.$$.fragment),O=C(),M(D.$$.fragment),K=C(),M(q.$$.fragment),this.h()},l(N){e=T(N,"DIV",{class:!0});var z=P(e);s=T(z,"H3",{["data-svelte-h"]:!0}),ue(s)!=="svelte-15zouq3"&&(s.textContent=n),r=A(z),o=T(z,"LABEL",{class:!0});var he=P(o);a=T(he,"B",{["data-svelte-h"]:!0}),ue(a)!=="svelte-ekzpgg"&&(a.textContent=l),i=A(he),u=T(he,"DIV",{class:!0});var _e=P(u);F(c.$$.fragment,_e),d=A(_e),F(p.$$.fragment,_e),_e.forEach(g),he.forEach(g),V=A(z),m=T(z,"LABEL",{class:!0});var $e=P(m);y=T($e,"B",{["data-svelte-h"]:!0}),ue(y)!=="svelte-1flca3"&&(y.textContent=h),k=A($e),E=T($e,"DIV",{class:!0});var ve=P(E);F(H.$$.fragment,ve),Y=A(ve),G=T(ve,"INPUT",{type:!0,min:!0,max:!0,step:!0,class:!0}),ve.forEach(g),$e.forEach(g),ce=A(z),_=T(z,"LABEL",{class:!0});var be=P(_);U=T(be,"B",{["data-svelte-h"]:!0}),ue(U)!=="svelte-1evbw58"&&(U.textContent=J),W=A(be),Q=T(be,"DIV",{class:!0});var Re=P(Q);F(j.$$.fragment,Re),Re.forEach(g),be.forEach(g),O=A(z),F(D.$$.fragment,z),K=A(z),F(q.$$.fragment,z),z.forEach(g),this.h()},h(){b(u,"class","row svelte-1omoy36"),b(o,"class","svelte-1omoy36"),b(G,"type","number"),b(G,"min",0),b(G,"max",1e5),b(G,"step",1),b(G,"class","svelte-1omoy36"),b(E,"class","row svelte-1omoy36"),b(m,"class","svelte-1omoy36"),b(Q,"class","row svelte-1omoy36"),b(_,"class","svelte-1omoy36"),b(e,"class","container svelte-1omoy36")},m(N,z){R(N,e,z),$(e,s),$(e,r),$(e,o),$(o,a),$(o,i),$(o,u),L(c,u,null),$(u,d),L(p,u,null),$(e,V),$(e,m),$(m,y),$(m,k),$(m,E),L(H,E,null),$(E,Y),$(E,G),Te(G,t[0]),$(e,ce),$(e,_),$(_,U),$(_,W),$(_,Q),L(j,Q,null),$(e,O),L(D,e,null),$(e,K),L(q,e,null),re=!0,ke||(De=[fe(G,"input",t[11]),fe(G,"keyup",t[12])],ke=!0)},p(N,z){const he={};!f&&z&2&&(f=!0,he.value=N[1].sortDirection,je(()=>f=!1)),c.$set(he);const _e={};!v&&z&2&&(v=!0,_e.value=N[1].sortProperty,je(()=>v=!1)),p.$set(_e);const $e={};!le&&z&2&&(le=!0,$e.value=N[1].scoreComparator,je(()=>le=!1)),H.$set($e),z&1&&Jt(G.value)!==N[0]&&Te(G,N[0]);const ve={};!Ae&&z&2&&(Ae=!0,ve.value=N[1].rating,je(()=>Ae=!1)),j.$set(ve);const be={};z&32768&&(be.$$scope={dirty:z,ctx:N}),D.$set(be);const Re={};z&32768&&(Re.$$scope={dirty:z,ctx:N}),q.$set(Re)},i(N){re||(w(c.$$.fragment,N),w(p.$$.fragment,N),w(H.$$.fragment,N),w(j.$$.fragment,N),w(D.$$.fragment,N),w(q.$$.fragment,N),re=!0)},o(N){I(c.$$.fragment,N),I(p.$$.fragment,N),I(H.$$.fragment,N),I(j.$$.fragment,N),I(D.$$.fragment,N),I(q.$$.fragment,N),re=!1},d(N){N&&g(e),B(c),B(p),B(H),B(j),B(D),B(q),ke=!1,Ye(De)}}}function $s(t){let e,s,n,r,o,a,l,i,u,c,f,d,p,v,V,m=t[2]&&St(t);return{c(){e=S("button"),s=S("i"),n=C(),r=S("span"),o=ee(t[4]),a=C(),l=S("i"),i=C(),u=S("span"),c=ee(t[3]),f=C(),m&&m.c(),d=de(),this.h()},l(y){e=T(y,"BUTTON",{class:!0});var h=P(e);s=T(h,"I",{class:!0}),P(s).forEach(g),n=A(h),r=T(h,"SPAN",{});var k=P(r);o=te(k,t[4]),k.forEach(g),a=A(h),l=T(h,"I",{class:!0}),P(l).forEach(g),i=A(h),u=T(h,"SPAN",{});var E=P(u);c=te(E,t[3]),E.forEach(g),h.forEach(g),f=A(y),m&&m.l(y),d=de(),this.h()},h(){b(s,"class","codicon codicon-filter svelte-1omoy36"),b(l,"class","codicon codicon-arrow-swap svelte-1omoy36"),b(e,"class","svelte-1omoy36")},m(y,h){R(y,e,h),$(e,s),$(e,n),$(e,r),$(r,o),$(e,a),$(e,l),$(e,i),$(e,u),$(u,c),R(y,f,h),m&&m.m(y,h),R(y,d,h),p=!0,v||(V=fe(e,"click",t[5]),v=!0)},p(y,[h]){(!p||h&16)&&Fe(o,y[4]),(!p||h&8)&&Fe(c,y[3]),y[2]?m?(m.p(y,h),h&4&&w(m,1)):(m=St(y),m.c(),w(m,1),m.m(d.parentNode,d)):m&&(ne(),I(m,1,1,()=>{m=null}),se())},i(y){p||(w(m),p=!0)},o(y){I(m),p=!1},d(y){y&&(g(e),g(f),g(d)),m&&m.d(y),v=!1,V()}}}const vs=Object.freeze({id:"Uploaded",score:"Score",updated:"Updated"}),bs=Object.freeze({desc:"codicon codicon-arrow-down",asc:"codicon codicon-arrow-up"}),ws=Object.freeze({">=":"≥","<=":"≤"}),cn=Object.freeze({all:"All",safe:"Safe",questionable:"Questionable",explicit:"Explicit"}),ys=Object.freeze({id:{asc:"Oldest",desc:"Newest"},score:{asc:"Worst",desc:"Best"},updated:{asc:"Inactive",desc:"Active"}}),Is=(t,e,s)=>{let n=t==="all"?void 0:cn[t],r=e===0&&s===">="?void 0:`Score${s}${Be(e)}`;return[n,r].filter(o=>o!==void 0).join(",")||"All"};function ks(t,e,s){let n,r,o;ge(t,pe,h=>s(1,o=h));const a=Ce();let l=!1;const i=()=>s(2,l=!0),u=()=>{s(2,l=!1),a("sortfilterupdate")},c=()=>{pe.reset(),s(0,f=o.scoreValue)};let f;function d(h){t.$$.not_equal(o.sortDirection,h)&&(o.sortDirection=h,pe.set(o))}function p(h){t.$$.not_equal(o.sortProperty,h)&&(o.sortProperty=h,pe.set(o))}function v(h){t.$$.not_equal(o.scoreComparator,h)&&(o.scoreComparator=h,pe.set(o))}function V(){f=Jt(this.value),s(0,f),s(1,o)}const m=h=>en(h)&&h.target.blur();function y(h){t.$$.not_equal(o.rating,h)&&(o.rating=h,pe.set(o))}return t.$$.update=()=>{if(t.$$.dirty&3){f===void 0&&s(0,f=o.scoreValue);let h=Number(f);isNaN(h)||Bn(pe,o.scoreValue=h,o)}t.$$.dirty&2&&s(4,n=Is(o.rating,o.scoreValue,o.scoreComparator)),t.$$.dirty&2&&s(3,r=ys[o.sortProperty][o.sortDirection])},[f,o,l,r,n,i,u,c,d,p,v,V,m,y]}class Ss extends ae{constructor(e){super(),ie(this,e,ks,$s,oe,{})}}function Ts(t){let e,s;return e=new nn({props:{post:t[1]}}),e.$on("click",t[2]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&2&&(o.post=n[1]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Es(t){let e,s;return e=new sn({props:{src:t[1].file_url,poster:t[1].sample_url,width:t[1].width,height:t[1].height,loop:t[1].tags.some(Et)}}),e.$on("click",t[2]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&2&&(o.src=n[1].file_url),r&2&&(o.poster=n[1].sample_url),r&2&&(o.width=n[1].width),r&2&&(o.height=n[1].height),r&2&&(o.loop=n[1].tags.some(Et)),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Cs(t){let e,s;return e=new rn({props:{post:t[1],open:t[0]}}),e.$on("click",t[2]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&2&&(o.post=n[1]),r&1&&(o.open=n[0]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Tt(t){let e,s;return e=new tn({props:{post:t[1]}}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&2&&(o.post=n[1]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function As(t){let e,s,n,r,o,a;const l=[Cs,Es,Ts],i=[];function u(f,d){return f[1].type==="image"?0:f[1].type==="video"?1:2}s=u(t),n=i[s]=l[s](t);let c=t[0]&&Tt(t);return{c(){e=S("div"),n.c(),r=C(),c&&c.c(),this.h()},l(f){e=T(f,"DIV",{id:!0,class:!0});var d=P(e);n.l(d),r=A(d),c&&c.l(d),d.forEach(g),this.h()},h(){b(e,"id",o="post_"+t[1].id),b(e,"class","post svelte-uali72"),Ue(e,"open",t[0])},m(f,d){R(f,e,d),i[s].m(e,null),$(e,r),c&&c.m(e,null),a=!0},p(f,[d]){let p=s;s=u(f),s===p?i[s].p(f,d):(ne(),I(i[p],1,1,()=>{i[p]=null}),se(),n=i[s],n?n.p(f,d):(n=i[s]=l[s](f),n.c()),w(n,1),n.m(e,r)),f[0]?c?(c.p(f,d),d&1&&w(c,1)):(c=Tt(f),c.c(),w(c,1),c.m(e,null)):c&&(ne(),I(c,1,1,()=>{c=null}),se()),(!a||d&2&&o!==(o="post_"+f[1].id))&&b(e,"id",o),(!a||d&1)&&Ue(e,"open",f[0])},i(f){a||(w(n),w(c),a=!0)},o(f){I(n),I(c),a=!1},d(f){f&&g(e),i[s].d(),c&&c.d()}}}const Et=t=>t.name=="loop";function Ds(t,e,s){let{post:n}=e,{open:r=!1}=e;const o=()=>{s(0,r=!r)};return t.$$set=a=>{"post"in a&&s(1,n=a.post),"open"in a&&s(0,r=a.open)},[r,n,o]}class Ps extends ae{constructor(e){super(),ie(this,e,Ds,As,oe,{post:1,open:0})}}function Ct(t){let e,s=t[0].type==="video"?"▶":"GIF",n;return{c(){e=S("span"),n=ee(s),this.h()},l(r){e=T(r,"SPAN",{class:!0});var o=P(e);n=te(o,s),o.forEach(g),this.h()},h(){b(e,"class","type svelte-14imjnt")},m(r,o){R(r,e,o),$(e,n)},p(r,o){o&1&&s!==(s=r[0].type==="video"?"▶":"GIF")&&Fe(n,s)},d(r){r&&g(e)}}}function Rs(t){let e,s,n,r,o,a=Be(t[0].score)+"",l,i,u,c,f,d=t[0].type!=="image"&&Ct(t);return{c(){e=S("div"),s=S("img"),r=C(),o=S("span"),l=ee(a),i=C(),d&&d.c(),this.h()},l(p){e=T(p,"DIV",{id:!0,class:!0,style:!0});var v=P(e);s=T(v,"IMG",{src:!0,alt:!0,class:!0,tabindex:!0}),r=A(v),o=T(v,"SPAN",{class:!0});var V=P(o);l=te(V,a),V.forEach(g),i=A(v),d&&d.l(v),v.forEach(g),this.h()},h(){qe(s.src,n=t[1])||b(s,"src",n),b(s,"alt","post"),b(s,"class","post-media svelte-14imjnt"),b(s,"tabindex","-1"),b(o,"class","score svelte-14imjnt"),b(e,"id",u="post_"+t[0].id),b(e,"class","post svelte-14imjnt"),ot(e,"grid-row","span "+t[2]),Ue(e,"open",open)},m(p,v){R(p,e,v),$(e,s),$(e,r),$(e,o),$(o,l),$(e,i),d&&d.m(e,null),c||(f=[fe(e,"click",t[3]),fe(e,"keydown",t[4])],c=!0)},p(p,[v]){v&2&&!qe(s.src,n=p[1])&&b(s,"src",n),v&1&&a!==(a=Be(p[0].score)+"")&&Fe(l,a),p[0].type!=="image"?d?d.p(p,v):(d=Ct(p),d.c(),d.m(e,null)):d&&(d.d(1),d=null),v&1&&u!==(u="post_"+p[0].id)&&b(e,"id",u),v&0&&Ue(e,"open",open)},i:Z,o:Z,d(p){p&&g(e),d&&d.d(),c=!1,Ye(f)}}}function Os(t,e,s){let n,{post:r}=e,o=Math.min(Math.round(r.height/r.width*5),15);const a=u=>u.endsWith(".jpg")||u.endsWith(".jpeg")||u.endsWith(".png")||u.endsWith(".webp");function l(u){ct.call(this,t,u)}const i=u=>{en(u)&&u.target.click()};return t.$$set=u=>{"post"in u&&s(0,r=u.post)},t.$$.update=()=>{t.$$.dirty&1&&s(1,n=a(r.sample_url)?r.sample_url:r.preview_url)},[r,n,o,l,i]}class Ns extends ae{constructor(e){super(),ie(this,e,Os,Rs,oe,{post:0})}}function Ms(t){let e,s,n,r;const o=t[3].default,a=jn(o,t,t[2],null);return{c(){e=S("div"),a&&a.c(),this.h()},l(l){e=T(l,"DIV",{role:!0,tabindex:!0,class:!0});var i=P(e);a&&a.l(i),i.forEach(g),this.h()},h(){b(e,"role","none"),b(e,"tabindex","-1"),b(e,"class","dialog svelte-1kq1os1")},m(l,i){R(l,e,i),a&&a.m(e,null),t[5](e),s=!0,n||(r=[fe(e,"keydown",t[4]),fe(e,"click",Vn(Fs))],n=!0)},p(l,[i]){a&&a.p&&(!s||i&4)&&qn(a,o,l,l[2],s?zn(o,l[2],i,null):Un(l[2]),null)},i(l){s||(w(a,l),s=!0)},o(l){I(a,l),s=!1},d(l){l&&g(e),a&&a.d(l),t[5](null),n=!1,Ye(r)}}}const Fs=()=>{};function Ls(t,e,s){let{$$slots:n={},$$scope:r}=e;const o=Ce(),a=()=>o("close");let l;ut(async()=>{l.focus()});const i=c=>{c.code==="Escape"&&a()};function u(c){Se[c?"unshift":"push"](()=>{l=c,s(0,l)})}return t.$$set=c=>{"$$scope"in c&&s(2,r=c.$$scope)},[l,a,r,n,i,u]}class Bs extends ae{constructor(e){super(),ie(this,e,Ls,Ms,oe,{})}}function js(t){let e;return{c(){e=S("i"),this.h()},l(s){e=T(s,"I",{class:!0}),P(e).forEach(g),this.h()},h(){b(e,"class","codicon codicon-close")},m(s,n){R(s,e,n)},p:Z,d(s){s&&g(e)}}}function Vs(t){let e,s;return e=new nn({props:{post:t[0]}}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&1&&(o.post=n[0]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function qs(t){let e,s;return e=new sn({props:{src:t[0].file_url,poster:t[0].sample_url,width:t[0].width,height:t[0].height,loop:t[0].tags.some(At)}}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&1&&(o.src=n[0].file_url),r&1&&(o.poster=n[0].sample_url),r&1&&(o.width=n[0].width),r&1&&(o.height=n[0].height),r&1&&(o.loop=n[0].tags.some(At)),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Us(t){let e,s;return e=new rn({props:{post:t[0],open:!0}}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&1&&(o.post=n[0]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function zs(t){let e,s,n,r,o,a,l,i,u;n=new es({props:{$$slots:{default:[js]},$$scope:{ctx:t}}}),n.$on("click",t[2]);const c=[Us,qs,Vs],f=[];function d(p,v){return p[0].type==="image"?0:p[0].type==="video"?1:2}return o=d(t),a=f[o]=c[o](t),i=new tn({props:{post:t[0]}}),{c(){e=S("div"),s=S("div"),M(n.$$.fragment),r=C(),a.c(),l=C(),M(i.$$.fragment),this.h()},l(p){e=T(p,"DIV",{class:!0});var v=P(e);s=T(v,"DIV",{class:!0});var V=P(s);F(n.$$.fragment,V),V.forEach(g),r=A(v),a.l(v),l=A(v),F(i.$$.fragment,v),v.forEach(g),this.h()},h(){b(s,"class","header svelte-17yx6d5"),b(e,"class","container svelte-17yx6d5")},m(p,v){R(p,e,v),$(e,s),L(n,s,null),$(e,r),f[o].m(e,null),$(e,l),L(i,e,null),u=!0},p(p,v){const V={};v&16&&(V.$$scope={dirty:v,ctx:p}),n.$set(V);let m=o;o=d(p),o===m?f[o].p(p,v):(ne(),I(f[m],1,1,()=>{f[m]=null}),se(),a=f[o],a?a.p(p,v):(a=f[o]=c[o](p),a.c()),w(a,1),a.m(e,l));const y={};v&1&&(y.post=p[0]),i.$set(y)},i(p){u||(w(n.$$.fragment,p),w(a),w(i.$$.fragment,p),u=!0)},o(p){I(n.$$.fragment,p),I(a),I(i.$$.fragment,p),u=!1},d(p){p&&g(e),B(n),f[o].d(),B(i)}}}function Gs(t){let e,s;return e=new Bs({props:{$$slots:{default:[zs]},$$scope:{ctx:t}}}),e.$on("close",t[3]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,[r]){const o={};r&17&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}const At=t=>t.name=="loop";function Ks(t,e,s){const n=Ce();let{post:r}=e;const o=()=>n("close");function a(l){ct.call(this,t,l)}return t.$$set=l=>{"post"in l&&s(0,r=l.post)},[r,n,o,a]}class Ws extends ae{constructor(e){super(),ie(this,e,Ks,Gs,oe,{post:0})}}function Dt(t,e,s){const n=t.slice();return n[8]=e[s],n}function Pt(t,e,s){const n=t.slice();return n[8]=e[s],n}function Hs(t){let e,s,n,r,o=Ee(t[2].posts),a=[];for(let u=0;u<o.length;u+=1)a[u]=Rt(Dt(t,o,u));const l=u=>I(a[u],1,1,()=>{a[u]=null});let i=t[1]&&t[0]!==void 0&&Ot(t);return{c(){e=S("section");for(let u=0;u<a.length;u+=1)a[u].c();s=C(),i&&i.c(),n=de(),this.h()},l(u){e=T(u,"SECTION",{class:!0,style:!0});var c=P(e);for(let f=0;f<a.length;f+=1)a[f].l(c);c.forEach(g),s=A(u),i&&i.l(u),n=de(),this.h()},h(){b(e,"class","multi svelte-q6spg0"),ot(e,"grid-template-columns","repeat("+t[3]+", 1fr)")},m(u,c){R(u,e,c);for(let f=0;f<a.length;f+=1)a[f]&&a[f].m(e,null);R(u,s,c),i&&i.m(u,c),R(u,n,c),r=!0},p(u,c){if(c&5){o=Ee(u[2].posts);let f;for(f=0;f<o.length;f+=1){const d=Dt(u,o,f);a[f]?(a[f].p(d,c),w(a[f],1)):(a[f]=Rt(d),a[f].c(),w(a[f],1),a[f].m(e,null))}for(ne(),f=o.length;f<a.length;f+=1)l(f);se()}(!r||c&8)&&ot(e,"grid-template-columns","repeat("+u[3]+", 1fr)"),u[1]&&u[0]!==void 0?i?(i.p(u,c),c&3&&w(i,1)):(i=Ot(u),i.c(),w(i,1),i.m(n.parentNode,n)):i&&(ne(),I(i,1,1,()=>{i=null}),se())},i(u){if(!r){for(let c=0;c<o.length;c+=1)w(a[c]);w(i),r=!0}},o(u){a=a.filter(Boolean);for(let c=0;c<a.length;c+=1)I(a[c]);I(i),r=!1},d(u){u&&(g(e),g(s),g(n)),ft(a,u),i&&i.d(u)}}}function Ys(t){let e,s,n=Ee(t[2].posts),r=[];for(let a=0;a<n.length;a+=1)r[a]=Nt(Pt(t,n,a));const o=a=>I(r[a],1,1,()=>{r[a]=null});return{c(){e=S("section");for(let a=0;a<r.length;a+=1)r[a].c();this.h()},l(a){e=T(a,"SECTION",{class:!0});var l=P(e);for(let i=0;i<r.length;i+=1)r[i].l(l);l.forEach(g),this.h()},h(){b(e,"class","single svelte-q6spg0")},m(a,l){R(a,e,l);for(let i=0;i<r.length;i+=1)r[i]&&r[i].m(e,null);s=!0},p(a,l){if(l&4){n=Ee(a[2].posts);let i;for(i=0;i<n.length;i+=1){const u=Pt(a,n,i);r[i]?(r[i].p(u,l),w(r[i],1)):(r[i]=Nt(u),r[i].c(),w(r[i],1),r[i].m(e,null))}for(ne(),i=n.length;i<r.length;i+=1)o(i);se()}},i(a){if(!s){for(let l=0;l<n.length;l+=1)w(r[l]);s=!0}},o(a){r=r.filter(Boolean);for(let l=0;l<r.length;l+=1)I(r[l]);s=!1},d(a){a&&g(e),ft(r,a)}}}function Rt(t){let e,s;function n(){return t[5](t[8])}return e=new Ns({props:{post:t[8]}}),e.$on("click",n),{c(){M(e.$$.fragment)},l(r){F(e.$$.fragment,r)},m(r,o){L(e,r,o),s=!0},p(r,o){t=r;const a={};o&4&&(a.post=t[8]),e.$set(a)},i(r){s||(w(e.$$.fragment,r),s=!0)},o(r){I(e.$$.fragment,r),s=!1},d(r){B(e,r)}}}function Ot(t){let e,s;return e=new Ws({props:{post:t[0]}}),e.$on("close",t[6]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&1&&(o.post=n[0]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Nt(t){let e,s;return e=new Ps({props:{post:t[8]}}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&4&&(o.post=n[8]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Js(t){let e,s,n=Be(t[2].postCount)+"",r,o,a,l,i,u,c,f,d;l=new Ss({}),l.$on("sortfilterupdate",t[4]);const p=[Ys,Hs],v=[];function V(m,y){return m[3]==="1"?0:1}return u=V(t),c=v[u]=p[u](t),{c(){e=S("div"),s=S("span"),r=ee(n),o=ee(" posts"),a=C(),M(l.$$.fragment),i=C(),c.c(),f=de(),this.h()},l(m){e=T(m,"DIV",{class:!0});var y=P(e);s=T(y,"SPAN",{});var h=P(s);r=te(h,n),o=te(h," posts"),h.forEach(g),a=A(y),F(l.$$.fragment,y),y.forEach(g),i=A(m),c.l(m),f=de(),this.h()},h(){b(e,"class","svelte-q6spg0")},m(m,y){R(m,e,y),$(e,s),$(s,r),$(s,o),$(e,a),L(l,e,null),R(m,i,y),v[u].m(m,y),R(m,f,y),d=!0},p(m,[y]){(!d||y&4)&&n!==(n=Be(m[2].postCount)+"")&&Fe(r,n);let h=u;u=V(m),u===h?v[u].p(m,y):(ne(),I(v[h],1,1,()=>{v[h]=null}),se(),c=v[u],c?c.p(m,y):(c=v[u]=p[u](m),c.c()),w(c,1),c.m(f.parentNode,f))},i(m){d||(w(l.$$.fragment,m),w(c),d=!0)},o(m){I(l.$$.fragment,m),I(c),d=!1},d(m){m&&(g(e),g(i),g(f)),B(l),v[u].d(m)}}}function Zs(t,e,s){let n,r;ge(t,Ne,f=>s(2,n=f)),ge(t,Qn,f=>s(3,r=f));let o,a=location.hash.length>2;const l=()=>{s(1,a=location.hash.length>2)};ut(()=>{window.addEventListener("hashchange",l)}),Zt(()=>{window.removeEventListener("hashchange",l)});function i(f){ct.call(this,t,f)}return[o,a,n,r,i,f=>{s(0,o=f),location.hash=`fullscreen_${f.id}`},()=>{s(0,o=void 0),history.back()}]}class Qs extends ae{constructor(e){super(),ie(this,e,Zs,Js,oe,{})}}function Xs(t){let e;return{c(){e=S("div")},l(s){e=T(s,"DIV",{}),P(e).forEach(g)},m(s,n){R(s,e,n),t[2](e)},p:Z,i:Z,o:Z,d(s){s&&g(e),t[2](null)}}}function xs(t,e,s){let{rootMargin:n}=e;const r=Ce(),o=new IntersectionObserver(i=>{i[0].isIntersecting&&r("intersection")},{rootMargin:n});let a;function l(i){Se[i?"unshift":"push"](()=>{a=i,s(0,a)})}return t.$$set=i=>{"rootMargin"in i&&s(1,n=i.rootMargin)},t.$$.update=()=>{t.$$.dirty&1&&(o.disconnect(),a&&o.observe(a))},[a,n,l]}class er extends ae{constructor(e){super(),ie(this,e,xs,Xs,oe,{rootMargin:1})}}function tr(t){let e,s,n,r,o="You have seen everything there is to see...";return{c(){e=S("img"),n=C(),r=S("p"),r.textContent=o,this.h()},l(a){e=T(a,"IMG",{src:!0,alt:!0,class:!0}),n=A(a),r=T(a,"P",{["data-svelte-h"]:!0}),ue(r)!=="svelte-1i75mtf"&&(r.textContent=o),this.h()},h(){qe(e.src,s=Xt+"/assets/shironeko-x.png")||b(e,"src",s),b(e,"alt","No more results to load"),b(e,"class","svelte-1pkma0d")},m(a,l){R(a,e,l),R(a,n,l),R(a,r,l)},p:Z,i:Z,o:Z,d(a){a&&(g(e),g(n),g(r))}}}class nr extends ae{constructor(e){super(),ie(this,e,null,tr,oe,{})}}function Mt(t,e,s){const n=t.slice();return n[9]=e[s],n}function Ft(t){let e,s;return e=new ns({props:{tag:t[9]}}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&4&&(o.tag=n[9]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function sr(t){let e;return{c(){e=ee("Create supertag")},l(s){e=te(s,"Create supertag")},m(s,n){R(s,e,n)},d(s){s&&g(e)}}}function rr(t){let e,s,n="Create Supertag",r,o,a,l,i,u="Name",c,f,d,p,v,V="Description",m,y,h,k,E,H="Tags",le,Y,G,ce,_,U,J,W,Q=Ee(t[2]),j=[];for(let O=0;O<Q.length;O+=1)j[O]=Ft(Mt(t,Q,O));const Ae=O=>I(j[O],1,1,()=>{j[O]=null});return _=new Le({props:{title:t[3]?"Click to create supertag":"Enter a valid name to continue",disabled:!t[3],$$slots:{default:[sr]},$$scope:{ctx:t}}}),_.$on("click",t[8]),{c(){e=S("section"),s=S("h3"),s.textContent=n,r=C(),o=S("button"),a=C(),l=S("div"),i=S("label"),i.textContent=u,c=C(),f=S("input"),d=C(),p=S("div"),v=S("label"),v.textContent=V,m=C(),y=S("input"),h=C(),k=S("div"),E=S("span"),E.textContent=H,le=C(),Y=S("ol");for(let O=0;O<j.length;O+=1)j[O].c();G=C(),ce=S("div"),M(_.$$.fragment),this.h()},l(O){e=T(O,"SECTION",{class:!0});var D=P(e);s=T(D,"H3",{["data-svelte-h"]:!0}),ue(s)!=="svelte-ho1cwx"&&(s.textContent=n),r=A(D),o=T(D,"BUTTON",{class:!0}),P(o).forEach(g),a=A(D),l=T(D,"DIV",{class:!0});var K=P(l);i=T(K,"LABEL",{for:!0,class:!0,["data-svelte-h"]:!0}),ue(i)!=="svelte-10k8a68"&&(i.textContent=u),c=A(K),f=T(K,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),K.forEach(g),d=A(D),p=T(D,"DIV",{class:!0});var q=P(p);v=T(q,"LABEL",{for:!0,class:!0,["data-svelte-h"]:!0}),ue(v)!=="svelte-14n9kp6"&&(v.textContent=V),m=A(q),y=T(q,"INPUT",{type:!0,placeholder:!0,id:!0,class:!0}),q.forEach(g),h=A(D),k=T(D,"DIV",{class:!0});var re=P(k);E=T(re,"SPAN",{class:!0,["data-svelte-h"]:!0}),ue(E)!=="svelte-7hjyox"&&(E.textContent=H),le=A(re),Y=T(re,"OL",{class:!0});var ke=P(Y);for(let Pe=0;Pe<j.length;Pe+=1)j[Pe].l(ke);ke.forEach(g),re.forEach(g),G=A(D),ce=T(D,"DIV",{class:!0});var De=P(ce);F(_.$$.fragment,De),De.forEach(g),D.forEach(g),this.h()},h(){b(o,"class",Qt("codicon codicon-close")+" svelte-xkjm86"),b(i,"for","supertag-name"),b(i,"class","svelte-xkjm86"),b(f,"type","text"),b(f,"placeholder","Descriptive name"),b(f,"id","supertag-name"),b(f,"class","svelte-xkjm86"),b(l,"class","svelte-xkjm86"),b(v,"for","supertag-description"),b(v,"class","svelte-xkjm86"),b(y,"type","text"),b(y,"placeholder","Short description"),b(y,"id","supertag-description"),b(y,"class","svelte-xkjm86"),b(p,"class","svelte-xkjm86"),b(E,"class","svelte-xkjm86"),b(Y,"class","svelte-xkjm86"),b(k,"class","svelte-xkjm86"),b(ce,"class","last svelte-xkjm86"),b(e,"class","svelte-xkjm86")},m(O,D){R(O,e,D),$(e,s),$(e,r),$(e,o),$(e,a),$(e,l),$(l,i),$(l,c),$(l,f),Te(f,t[0]),$(e,d),$(e,p),$(p,v),$(p,m),$(p,y),Te(y,t[1]),$(e,h),$(e,k),$(k,E),$(k,le),$(k,Y);for(let K=0;K<j.length;K+=1)j[K]&&j[K].m(Y,null);$(e,G),$(e,ce),L(_,ce,null),U=!0,J||(W=[fe(o,"click",t[5]),fe(f,"input",t[6]),fe(y,"input",t[7])],J=!0)},p(O,D){if(D&1&&f.value!==O[0]&&Te(f,O[0]),D&2&&y.value!==O[1]&&Te(y,O[1]),D&4){Q=Ee(O[2]);let q;for(q=0;q<Q.length;q+=1){const re=Mt(O,Q,q);j[q]?(j[q].p(re,D),w(j[q],1)):(j[q]=Ft(re),j[q].c(),w(j[q],1),j[q].m(Y,null))}for(ne(),q=Q.length;q<j.length;q+=1)Ae(q);se()}const K={};D&8&&(K.title=O[3]?"Click to create supertag":"Enter a valid name to continue"),D&8&&(K.disabled=!O[3]),D&4096&&(K.$$scope={dirty:D,ctx:O}),_.$set(K)},i(O){if(!U){for(let D=0;D<Q.length;D+=1)w(j[D]);w(_.$$.fragment,O),U=!0}},o(O){j=j.filter(Boolean);for(let D=0;D<j.length;D+=1)I(j[D]);I(_.$$.fragment,O),U=!1},d(O){O&&g(e),ft(j,O),B(_),J=!1,Ye(W)}}}function or(t){let e,s;return e=new xt({props:{$$slots:{default:[rr]},$$scope:{ctx:t}}}),e.$on("close",t[5]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,[r]){const o={};r&4111&&(o.$$scope={dirty:r,ctx:n}),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function ar(t,e,s){let n,{name:r=""}=e,{description:o=""}=e,{tags:a}=e;const l=Ce(),i=()=>l("close");function u(){r=this.value,s(0,r)}function c(){o=this.value,s(1,o)}const f=()=>{l("submit",{name:r,description:o,tags:a.map(({modifier:d,name:p})=>({modifier:d,name:p}))}),i()};return t.$$set=d=>{"name"in d&&s(0,r=d.name),"description"in d&&s(1,o=d.description),"tags"in d&&s(2,a=d.tags)},t.$$.update=()=>{t.$$.dirty&5&&s(3,n=typeof r=="string"&&r!==""&&a.length>1)},[r,o,a,n,l,i,u,c,f]}class ir extends ae{constructor(e){super(),ie(this,e,ar,or,oe,{name:0,description:1,tags:2})}}function lr(t){let e,s,n,r,o,a,l,i,u,c;return{c(){e=S("div"),s=S("div"),n=S("i"),r=C(),o=S("div"),a=S("h3"),l=ee(t[0]),i=C(),u=S("span"),c=ee(t[2]),this.h()},l(f){e=T(f,"DIV",{class:!0});var d=P(e);s=T(d,"DIV",{class:!0});var p=P(s);n=T(p,"I",{class:!0}),P(n).forEach(g),p.forEach(g),r=A(d),o=T(d,"DIV",{});var v=P(o);a=T(v,"H3",{class:!0});var V=P(a);l=te(V,t[0]),V.forEach(g),i=A(v),u=T(v,"SPAN",{});var m=P(u);c=te(m,t[2]),m.forEach(g),v.forEach(g),d.forEach(g),this.h()},h(){b(n,"class",Qt(t[1])+" svelte-1tvgln1"),b(s,"class","icon svelte-1tvgln1"),b(a,"class","svelte-1tvgln1"),b(e,"class","error svelte-1tvgln1")},m(f,d){R(f,e,d),$(e,s),$(s,n),$(e,r),$(e,o),$(o,a),$(a,l),$(o,i),$(o,u),$(u,c)},p:Z,i:Z,o:Z,d(f){f&&g(e)}}}function cr(t,e,s){let{error:n}=e,r=n.message==="Failed to fetch"?"Connection Error":"Application Error",o=n.message==="Failed to fetch"?"codicon codicon-debug-disconnect":"codicon codicon-error",a=n.message==="Failed to fetch"?"Failed to connect to the server. Make sure you have a stable internet connection.":n.message;return t.$$set=l=>{"error"in l&&s(3,n=l.error)},[r,o,a,n]}class ur extends ae{constructor(e){super(),ie(this,e,cr,lr,oe,{error:3})}}const fr=(t,e)=>e.some(s=>t instanceof s);let Lt,Bt;function dr(){return Lt||(Lt=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function pr(){return Bt||(Bt=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const un=new WeakMap,at=new WeakMap,fn=new WeakMap,xe=new WeakMap,dt=new WeakMap;function gr(t){const e=new Promise((s,n)=>{const r=()=>{t.removeEventListener("success",o),t.removeEventListener("error",a)},o=()=>{s(me(t.result)),r()},a=()=>{n(t.error),r()};t.addEventListener("success",o),t.addEventListener("error",a)});return e.then(s=>{s instanceof IDBCursor&&un.set(s,t)}).catch(()=>{}),dt.set(e,t),e}function mr(t){if(at.has(t))return;const e=new Promise((s,n)=>{const r=()=>{t.removeEventListener("complete",o),t.removeEventListener("error",a),t.removeEventListener("abort",a)},o=()=>{s(),r()},a=()=>{n(t.error||new DOMException("AbortError","AbortError")),r()};t.addEventListener("complete",o),t.addEventListener("error",a),t.addEventListener("abort",a)});at.set(t,e)}let it={get(t,e,s){if(t instanceof IDBTransaction){if(e==="done")return at.get(t);if(e==="objectStoreNames")return t.objectStoreNames||fn.get(t);if(e==="store")return s.objectStoreNames[1]?void 0:s.objectStore(s.objectStoreNames[0])}return me(t[e])},set(t,e,s){return t[e]=s,!0},has(t,e){return t instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in t}};function hr(t){it=t(it)}function _r(t){return t===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...s){const n=t.call(et(this),e,...s);return fn.set(n,e.sort?e.sort():[e]),me(n)}:pr().includes(t)?function(...e){return t.apply(et(this),e),me(un.get(this))}:function(...e){return me(t.apply(et(this),e))}}function $r(t){return typeof t=="function"?_r(t):(t instanceof IDBTransaction&&mr(t),fr(t,dr())?new Proxy(t,it):t)}function me(t){if(t instanceof IDBRequest)return gr(t);if(xe.has(t))return xe.get(t);const e=$r(t);return e!==t&&(xe.set(t,e),dt.set(e,t)),e}const et=t=>dt.get(t);function vr(t,e,{blocked:s,upgrade:n,blocking:r,terminated:o}={}){const a=indexedDB.open(t,e),l=me(a);return n&&a.addEventListener("upgradeneeded",i=>{n(me(a.result),i.oldVersion,i.newVersion,me(a.transaction))}),s&&a.addEventListener("blocked",()=>s()),l.then(i=>{o&&i.addEventListener("close",()=>o()),r&&i.addEventListener("versionchange",()=>r())}).catch(()=>{}),l}const br=["get","getKey","getAll","getAllKeys","count"],wr=["put","add","delete","clear"],tt=new Map;function jt(t,e){if(!(t instanceof IDBDatabase&&!(e in t)&&typeof e=="string"))return;if(tt.get(e))return tt.get(e);const s=e.replace(/FromIndex$/,""),n=e!==s,r=wr.includes(s);if(!(s in(n?IDBIndex:IDBObjectStore).prototype)||!(r||br.includes(s)))return;const o=async function(a,...l){const i=this.transaction(a,r?"readwrite":"readonly");let u=i.store;return n&&(u=u.index(l.shift())),(await Promise.all([u[s](...l),r&&i.done]))[0]};return tt.set(e,o),o}hr(t=>({...t,get:(e,s,n)=>jt(e,s)||t.get(e,s,n),has:(e,s)=>!!jt(e,s)||t.has(e,s)}));const dn="@firebase/installations",pt="0.6.4";/**
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
 */const pn=1e4,gn=`w:${pt}`,mn="FIS_v2",yr="https://firebaseinstallations.googleapis.com/v1",Ir=60*60*1e3,kr="installations",Sr="Installations";/**
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
 */const Tr={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},ye=new on(kr,Sr,Tr);function hn(t){return t instanceof an&&t.code.includes("request-failed")}/**
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
 */function _n({projectId:t}){return`${yr}/projects/${t}/installations`}function $n(t){return{token:t.token,requestStatus:2,expiresIn:Cr(t.expiresIn),creationTime:Date.now()}}async function vn(t,e){const n=(await e.json()).error;return ye.create("request-failed",{requestName:t,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})}function bn({apiKey:t}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function Er(t,{refreshToken:e}){const s=bn(t);return s.append("Authorization",Ar(e)),s}async function wn(t){const e=await t();return e.status>=500&&e.status<600?t():e}function Cr(t){return Number(t.replace("s","000"))}function Ar(t){return`${mn} ${t}`}/**
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
 */async function Dr({appConfig:t,heartbeatServiceProvider:e},{fid:s}){const n=_n(t),r=bn(t),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const a={fid:s,authVersion:mn,appId:t.appId,sdkVersion:gn},l={method:"POST",headers:r,body:JSON.stringify(a)},i=await wn(()=>fetch(n,l));if(i.ok){const u=await i.json();return{fid:u.fid||s,registrationStatus:2,refreshToken:u.refreshToken,authToken:$n(u.authToken)}}else throw await vn("Create Installation",i)}/**
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
 */function yn(t){return new Promise(e=>{setTimeout(e,t)})}/**
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
 */function Pr(t){return btoa(String.fromCharCode(...t)).replace(/\+/g,"-").replace(/\//g,"_")}/**
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
 */const Rr=/^[cdef][\w-]{21}$/,lt="";function Or(){try{const t=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(t),t[0]=112+t[0]%16;const s=Nr(t);return Rr.test(s)?s:lt}catch{return lt}}function Nr(t){return Pr(t).substr(0,22)}/**
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
 */function Ze(t){return`${t.appName}!${t.appId}`}/**
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
 */const In=new Map;function kn(t,e){const s=Ze(t);Sn(s,e),Mr(s,e)}function Sn(t,e){const s=In.get(t);if(s)for(const n of s)n(e)}function Mr(t,e){const s=Fr();s&&s.postMessage({key:t,fid:e}),Lr()}let we=null;function Fr(){return!we&&"BroadcastChannel"in self&&(we=new BroadcastChannel("[Firebase] FID Change"),we.onmessage=t=>{Sn(t.data.key,t.data.fid)}),we}function Lr(){In.size===0&&we&&(we.close(),we=null)}/**
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
 */const Br="firebase-installations-database",jr=1,Ie="firebase-installations-store";let nt=null;function gt(){return nt||(nt=vr(Br,jr,{upgrade:(t,e)=>{switch(e){case 0:t.createObjectStore(Ie)}}})),nt}async function We(t,e){const s=Ze(t),r=(await gt()).transaction(Ie,"readwrite"),o=r.objectStore(Ie),a=await o.get(s);return await o.put(e,s),await r.done,(!a||a.fid!==e.fid)&&kn(t,e.fid),e}async function Tn(t){const e=Ze(t),n=(await gt()).transaction(Ie,"readwrite");await n.objectStore(Ie).delete(e),await n.done}async function Qe(t,e){const s=Ze(t),r=(await gt()).transaction(Ie,"readwrite"),o=r.objectStore(Ie),a=await o.get(s),l=e(a);return l===void 0?await o.delete(s):await o.put(l,s),await r.done,l&&(!a||a.fid!==l.fid)&&kn(t,l.fid),l}/**
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
 */async function mt(t){let e;const s=await Qe(t.appConfig,n=>{const r=Vr(n),o=qr(t,r);return e=o.registrationPromise,o.installationEntry});return s.fid===lt?{installationEntry:await e}:{installationEntry:s,registrationPromise:e}}function Vr(t){const e=t||{fid:Or(),registrationStatus:0};return En(e)}function qr(t,e){if(e.registrationStatus===0){if(!navigator.onLine){const r=Promise.reject(ye.create("app-offline"));return{installationEntry:e,registrationPromise:r}}const s={fid:e.fid,registrationStatus:1,registrationTime:Date.now()},n=Ur(t,s);return{installationEntry:s,registrationPromise:n}}else return e.registrationStatus===1?{installationEntry:e,registrationPromise:zr(t)}:{installationEntry:e}}async function Ur(t,e){try{const s=await Dr(t,e);return We(t.appConfig,s)}catch(s){throw hn(s)&&s.customData.serverCode===409?await Tn(t.appConfig):await We(t.appConfig,{fid:e.fid,registrationStatus:0}),s}}async function zr(t){let e=await Vt(t.appConfig);for(;e.registrationStatus===1;)await yn(100),e=await Vt(t.appConfig);if(e.registrationStatus===0){const{installationEntry:s,registrationPromise:n}=await mt(t);return n||s}return e}function Vt(t){return Qe(t,e=>{if(!e)throw ye.create("installation-not-found");return En(e)})}function En(t){return Gr(t)?{fid:t.fid,registrationStatus:0}:t}function Gr(t){return t.registrationStatus===1&&t.registrationTime+pn<Date.now()}/**
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
 */async function Kr({appConfig:t,heartbeatServiceProvider:e},s){const n=Wr(t,s),r=Er(t,s),o=e.getImmediate({optional:!0});if(o){const u=await o.getHeartbeatsHeader();u&&r.append("x-firebase-client",u)}const a={installation:{sdkVersion:gn,appId:t.appId}},l={method:"POST",headers:r,body:JSON.stringify(a)},i=await wn(()=>fetch(n,l));if(i.ok){const u=await i.json();return $n(u)}else throw await vn("Generate Auth Token",i)}function Wr(t,{fid:e}){return`${_n(t)}/${e}/authTokens:generate`}/**
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
 */async function ht(t,e=!1){let s;const n=await Qe(t.appConfig,o=>{if(!Cn(o))throw ye.create("not-registered");const a=o.authToken;if(!e&&Jr(a))return o;if(a.requestStatus===1)return s=Hr(t,e),o;{if(!navigator.onLine)throw ye.create("app-offline");const l=Qr(o);return s=Yr(t,l),l}});return s?await s:n.authToken}async function Hr(t,e){let s=await qt(t.appConfig);for(;s.authToken.requestStatus===1;)await yn(100),s=await qt(t.appConfig);const n=s.authToken;return n.requestStatus===0?ht(t,e):n}function qt(t){return Qe(t,e=>{if(!Cn(e))throw ye.create("not-registered");const s=e.authToken;return Xr(s)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e})}async function Yr(t,e){try{const s=await Kr(t,e),n=Object.assign(Object.assign({},e),{authToken:s});return await We(t.appConfig,n),s}catch(s){if(hn(s)&&(s.customData.serverCode===401||s.customData.serverCode===404))await Tn(t.appConfig);else{const n=Object.assign(Object.assign({},e),{authToken:{requestStatus:0}});await We(t.appConfig,n)}throw s}}function Cn(t){return t!==void 0&&t.registrationStatus===2}function Jr(t){return t.requestStatus===2&&!Zr(t)}function Zr(t){const e=Date.now();return e<t.creationTime||t.creationTime+t.expiresIn<e+Ir}function Qr(t){const e={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},t),{authToken:e})}function Xr(t){return t.requestStatus===1&&t.requestTime+pn<Date.now()}/**
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
 */async function xr(t){const e=t,{installationEntry:s,registrationPromise:n}=await mt(e);return n?n.catch(console.error):ht(e).catch(console.error),s.fid}/**
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
 */async function eo(t,e=!1){const s=t;return await to(s),(await ht(s,e)).token}async function to(t){const{registrationPromise:e}=await mt(t);e&&await e}/**
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
 */function no(t){if(!t||!t.options)throw st("App Configuration");if(!t.name)throw st("App Name");const e=["projectId","apiKey","appId"];for(const s of e)if(!t.options[s])throw st(s);return{appName:t.name,projectId:t.options.projectId,apiKey:t.options.apiKey,appId:t.options.appId}}function st(t){return ye.create("missing-app-config-values",{valueName:t})}/**
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
 */const An="installations",so="installations-internal",ro=t=>{const e=t.getProvider("app").getImmediate(),s=no(e),n=Je(e,"heartbeat");return{app:e,appConfig:s,heartbeatServiceProvider:n,_delete:()=>Promise.resolve()}},oo=t=>{const e=t.getProvider("app").getImmediate(),s=Je(e,An).getImmediate();return{getId:()=>xr(s),getToken:r=>eo(s,r)}};function ao(){Ge(new Ke(An,ro,"PUBLIC")),Ge(new Ke(so,oo,"PRIVATE"))}ao();ze(dn,pt);ze(dn,pt,"esm2017");/**
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
 */const He="analytics",io="firebase_id",lo="origin",co=60*1e3,uo="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",_t="https://www.googletagmanager.com/gtag/js";/**
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
 */const X=new rs("@firebase/analytics");/**
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
 */const fo={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.',["no-client-id"]:'The "client_id" field is empty.',["invalid-gtag-resource"]:"Trusted Types detected an invalid gtag resource: {$gtagURL}."},x=new on("analytics","Analytics",fo);/**
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
 */function po(t){if(!t.startsWith(_t)){const e=x.create("invalid-gtag-resource",{gtagURL:t});return X.warn(e.message),""}return t}function Dn(t){return Promise.all(t.map(e=>e.catch(s=>s)))}function go(t,e){let s;return window.trustedTypes&&(s=window.trustedTypes.createPolicy(t,e)),s}function mo(t,e){const s=go("firebase-js-sdk-policy",{createScriptURL:po}),n=document.createElement("script"),r=`${_t}?l=${t}&id=${e}`;n.src=s?s==null?void 0:s.createScriptURL(r):r,n.async=!0,document.head.appendChild(n)}function ho(t){let e=[];return Array.isArray(window[t])?e=window[t]:window[t]=e,e}async function _o(t,e,s,n,r,o){const a=n[r];try{if(a)await e[a];else{const i=(await Dn(s)).find(u=>u.measurementId===r);i&&await e[i.appId]}}catch(l){X.error(l)}t("config",r,o)}async function $o(t,e,s,n,r){try{let o=[];if(r&&r.send_to){let a=r.send_to;Array.isArray(a)||(a=[a]);const l=await Dn(s);for(const i of a){const u=l.find(f=>f.measurementId===i),c=u&&e[u.appId];if(c)o.push(c);else{o=[];break}}}o.length===0&&(o=Object.values(e)),await Promise.all(o),t("event",n,r||{})}catch(o){X.error(o)}}function vo(t,e,s,n){async function r(o,...a){try{if(o==="event"){const[l,i]=a;await $o(t,e,s,l,i)}else if(o==="config"){const[l,i]=a;await _o(t,e,s,n,l,i)}else if(o==="consent"){const[l]=a;t("consent","update",l)}else if(o==="get"){const[l,i,u]=a;t("get",l,i,u)}else if(o==="set"){const[l]=a;t("set",l)}else t(o,...a)}catch(l){X.error(l)}}return r}function bo(t,e,s,n,r){let o=function(...a){window[n].push(arguments)};return window[r]&&typeof window[r]=="function"&&(o=window[r]),window[r]=vo(o,t,e,s),{gtagCore:o,wrappedGtag:window[r]}}function wo(t){const e=window.document.getElementsByTagName("script");for(const s of Object.values(e))if(s.src&&s.src.includes(_t)&&s.src.includes(t))return s;return null}/**
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
 */const yo=30,Io=1e3;class ko{constructor(e={},s=Io){this.throttleMetadata=e,this.intervalMillis=s}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,s){this.throttleMetadata[e]=s}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Pn=new ko;function So(t){return new Headers({Accept:"application/json","x-goog-api-key":t})}async function To(t){var e;const{appId:s,apiKey:n}=t,r={method:"GET",headers:So(n)},o=uo.replace("{app-id}",s),a=await fetch(o,r);if(a.status!==200&&a.status!==304){let l="";try{const i=await a.json();!((e=i.error)===null||e===void 0)&&e.message&&(l=i.error.message)}catch{}throw x.create("config-fetch-failed",{httpStatus:a.status,responseMessage:l})}return a.json()}async function Eo(t,e=Pn,s){const{appId:n,apiKey:r,measurementId:o}=t.options;if(!n)throw x.create("no-app-id");if(!r){if(o)return{measurementId:o,appId:n};throw x.create("no-api-key")}const a=e.getThrottleMetadata(n)||{backoffCount:0,throttleEndTimeMillis:Date.now()},l=new Do;return setTimeout(async()=>{l.abort()},s!==void 0?s:co),Rn({appId:n,apiKey:r,measurementId:o},a,l,e)}async function Rn(t,{throttleEndTimeMillis:e,backoffCount:s},n,r=Pn){var o;const{appId:a,measurementId:l}=t;try{await Co(n,e)}catch(i){if(l)return X.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${i==null?void 0:i.message}]`),{appId:a,measurementId:l};throw i}try{const i=await To(t);return r.deleteThrottleMetadata(a),i}catch(i){const u=i;if(!Ao(u)){if(r.deleteThrottleMetadata(a),l)return X.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${l} provided in the "measurementId" field in the local Firebase config. [${u==null?void 0:u.message}]`),{appId:a,measurementId:l};throw i}const c=Number((o=u==null?void 0:u.customData)===null||o===void 0?void 0:o.httpStatus)===503?kt(s,r.intervalMillis,yo):kt(s,r.intervalMillis),f={throttleEndTimeMillis:Date.now()+c,backoffCount:s+1};return r.setThrottleMetadata(a,f),X.debug(`Calling attemptFetch again in ${c} millis`),Rn(t,f,n,r)}}function Co(t,e){return new Promise((s,n)=>{const r=Math.max(e-Date.now(),0),o=setTimeout(s,r);t.addEventListener(()=>{clearTimeout(o),n(x.create("fetch-throttle",{throttleEndTimeMillis:e}))})})}function Ao(t){if(!(t instanceof an)||!t.customData)return!1;const e=Number(t.customData.httpStatus);return e===429||e===500||e===503||e===504}class Do{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach(e=>e())}}async function Po(t,e,s,n,r){if(r&&r.global){t("event",s,n);return}else{const o=await e,a=Object.assign(Object.assign({},n),{send_to:o});t("event",s,a)}}/**
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
 */async function Ro(){if(as())try{await is()}catch(t){return X.warn(x.create("indexeddb-unavailable",{errorInfo:t==null?void 0:t.toString()}).message),!1}else return X.warn(x.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;return!0}async function Oo(t,e,s,n,r,o,a){var l;const i=Eo(t);i.then(p=>{s[p.measurementId]=p.appId,t.options.measurementId&&p.measurementId!==t.options.measurementId&&X.warn(`The measurement ID in the local Firebase config (${t.options.measurementId}) does not match the measurement ID fetched from the server (${p.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)}).catch(p=>X.error(p)),e.push(i);const u=Ro().then(p=>{if(p)return n.getId()}),[c,f]=await Promise.all([i,u]);wo(o)||mo(o,c.measurementId),r("js",new Date);const d=(l=a==null?void 0:a.config)!==null&&l!==void 0?l:{};return d[lo]="firebase",d.update=!0,f!=null&&(d[io]=f),r("config",c.measurementId,d),c.measurementId}/**
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
 */class No{constructor(e){this.app=e}_delete(){return delete Me[this.app.options.appId],Promise.resolve()}}let Me={},Ut=[];const zt={};let rt="dataLayer",Mo="gtag",Gt,On,Kt=!1;function Fo(){const t=[];if(os()&&t.push("This is a browser extension environment."),ls()||t.push("Cookies are not available."),t.length>0){const e=t.map((n,r)=>`(${r+1}) ${n}`).join(" "),s=x.create("invalid-analytics-context",{errorInfo:e});X.warn(s.message)}}function Lo(t,e,s){Fo();const n=t.options.appId;if(!n)throw x.create("no-app-id");if(!t.options.apiKey)if(t.options.measurementId)X.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${t.options.measurementId} provided in the "measurementId" field in the local Firebase config.`);else throw x.create("no-api-key");if(Me[n]!=null)throw x.create("already-exists",{id:n});if(!Kt){ho(rt);const{wrappedGtag:o,gtagCore:a}=bo(Me,Ut,zt,rt,Mo);On=o,Gt=a,Kt=!0}return Me[n]=Oo(t,Ut,zt,e,Gt,rt,s),new No(t)}function Bo(t=cs()){t=ln(t);const e=Je(t,He);return e.isInitialized()?e.getImmediate():jo(t)}function jo(t,e={}){const s=Je(t,He);if(s.isInitialized()){const r=s.getImmediate();if(us(e,s.getOptions()))return r;throw x.create("already-initialized")}return s.initialize({options:e})}function Nn(t,e,s,n){t=ln(t),Po(On,Me[t.app.options.appId],e,s,n).catch(r=>X.error(r))}const Wt="@firebase/analytics",Ht="0.10.0";function Vo(){Ge(new Ke(He,(e,{options:s})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return Lo(n,r,s)},"PUBLIC")),Ge(new Ke("analytics-internal",t,"PRIVATE")),ze(Wt,Ht),ze(Wt,Ht,"esm2017");function t(e){try{const s=e.getProvider(He).getImmediate();return{logEvent:(n,r,o)=>Nn(s,n,r,o)}}catch(s){throw x.create("interop-component-reg-failed",{reason:s})}}}Vo();const qo=async t=>Nn(Bo(),"r34_search",{page_number:t});function Uo(t){let e;return{c(){e=ee("Search")},l(s){e=te(s,"Search")},m(s,n){R(s,e,n)},d(s){s&&g(e)}}}function zo(t){let e,s,n,r,o,a;const l=[Wo,Ko],i=[];function u(c,f){return c[2].postCount===0?0:1}return s=u(t),n=i[s]=l[s](t),o=new ss({}),{c(){e=S("section"),n.c(),r=C(),M(o.$$.fragment),this.h()},l(c){e=T(c,"SECTION",{class:!0});var f=P(e);n.l(f),f.forEach(g),r=A(c),F(o.$$.fragment,c),this.h()},h(){b(e,"class","svelte-rk0y4a")},m(c,f){R(c,e,f),i[s].m(e,null),R(c,r,f),L(o,c,f),a=!0},p(c,f){let d=s;s=u(c),s===d?i[s].p(c,f):(ne(),I(i[d],1,1,()=>{i[d]=null}),se(),n=i[s],n?n.p(c,f):(n=i[s]=l[s](c),n.c()),w(n,1),n.m(e,null))},i(c){a||(w(n),w(o.$$.fragment,c),a=!0)},o(c){I(n),I(o.$$.fragment,c),a=!1},d(c){c&&(g(e),g(r)),i[s].d(),B(o,c)}}}function Go(t){let e,s;return e=new ur({props:{error:t[0]}}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&1&&(o.error=n[0]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Ko(t){let e,s,n,r,o,a;e=new Qs({}),e.$on("sortfilterupdate",t[7]);const l=[Yo,Ho],i=[];function u(c,f){return c[2].posts.length===c[2].postCount?0:1}return n=u(t),r=i[n]=l[n](t),{c(){M(e.$$.fragment),s=C(),r.c(),o=de()},l(c){F(e.$$.fragment,c),s=A(c),r.l(c),o=de()},m(c,f){L(e,c,f),R(c,s,f),i[n].m(c,f),R(c,o,f),a=!0},p(c,f){let d=n;n=u(c),n===d?i[n].p(c,f):(ne(),I(i[d],1,1,()=>{i[d]=null}),se(),r=i[n],r?r.p(c,f):(r=i[n]=l[n](c),r.c()),w(r,1),r.m(o.parentNode,o))},i(c){a||(w(e.$$.fragment,c),w(r),a=!0)},o(c){I(e.$$.fragment,c),I(r),a=!1},d(c){c&&(g(s),g(o)),B(e,c),i[n].d(c)}}}function Wo(t){let e,s;return e=new gs({}),e.$on("sortfilterupdate",t[7]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p:Z,i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Ho(t){let e,s;return e=new er({props:{rootMargin:"1000px"}}),e.$on("intersection",t[8]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p:Z,i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Yo(t){let e,s;return e=new nr({}),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p:Z,i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Yt(t){let e,s;return e=new ir({props:{tags:t[4]}}),e.$on("close",t[13]),e.$on("submit",t[14]),{c(){M(e.$$.fragment)},l(n){F(e.$$.fragment,n)},m(n,r){L(e,n,r),s=!0},p(n,r){const o={};r&16&&(o.tags=n[4]),e.$set(o)},i(n){s||(w(e.$$.fragment,n),s=!0)},o(n){I(e.$$.fragment,n),s=!1},d(n){B(e,n)}}}function Jo(t){let e,s,n,r,o,a,l,i,u,c,f,d,p,v;s=new Gn({}),r=new Hn({props:{placeholder:"Search for tags",fetchSuggestions:t[6]}}),r.$on("pick",t[9]),a=new Le({props:{title:"Search with the tags above",$$slots:{default:[Uo]},$$scope:{ctx:t}}}),a.$on("click",t[7]),i=new Kn({props:{tags:[...t[4],...t[3]]}}),i.$on("click",t[10]),i.$on("contextmenu",t[11]),i.$on("createSupertag",t[12]);const V=[Go,zo],m=[];function y(k,E){return k[0]?0:k[2].requested?1:-1}~(c=y(t))&&(f=m[c]=V[c](t));let h=t[1]&&Yt(t);return{c(){e=S("section"),M(s.$$.fragment),n=C(),M(r.$$.fragment),o=C(),M(a.$$.fragment),l=C(),M(i.$$.fragment),u=C(),f&&f.c(),d=C(),h&&h.c(),p=de(),this.h()},l(k){e=T(k,"SECTION",{id:!0,class:!0});var E=P(e);F(s.$$.fragment,E),n=A(E),F(r.$$.fragment,E),o=A(E),F(a.$$.fragment,E),l=A(E),F(i.$$.fragment,E),E.forEach(g),u=A(k),f&&f.l(k),d=A(k),h&&h.l(k),p=de(),this.h()},h(){b(e,"id","search"),b(e,"class","svelte-rk0y4a")},m(k,E){R(k,e,E),L(s,e,null),$(e,n),L(r,e,null),$(e,o),L(a,e,null),$(e,l),L(i,e,null),R(k,u,E),~c&&m[c].m(k,E),R(k,d,E),h&&h.m(k,E),R(k,p,E),v=!0},p(k,[E]){const H={};E&8388608&&(H.$$scope={dirty:E,ctx:k}),a.$set(H);const le={};E&24&&(le.tags=[...k[4],...k[3]]),i.$set(le);let Y=c;c=y(k),c===Y?~c&&m[c].p(k,E):(f&&(ne(),I(m[Y],1,1,()=>{m[Y]=null}),se()),~c?(f=m[c],f?f.p(k,E):(f=m[c]=V[c](k),f.c()),w(f,1),f.m(d.parentNode,d)):f=null),k[1]?h?(h.p(k,E),E&2&&w(h,1)):(h=Yt(k),h.c(),w(h,1),h.m(p.parentNode,p)):h&&(ne(),I(h,1,1,()=>{h=null}),se())},i(k){v||(w(s.$$.fragment,k),w(r.$$.fragment,k),w(a.$$.fragment,k),w(i.$$.fragment,k),w(f),w(h),v=!0)},o(k){I(s.$$.fragment,k),I(r.$$.fragment,k),I(a.$$.fragment,k),I(i.$$.fragment,k),I(f),I(h),v=!1},d(k){k&&(g(e),g(u),g(d),g(p)),B(s),B(r),B(a),B(i),~c&&m[c].d(k),h&&h.d(k)}}}const Zo=()=>{const t=new URL(location.href);if(!t.searchParams.has("tags"))return;const s=(t.searchParams.get("tags")??"").split(";");if(!(!Array.isArray(s)||s.length===0))return s};function Qo(t,e,s){let n,r,o,a,l,i;ge(t,Ne,_=>s(2,n=_)),ge(t,Xe,_=>s(3,r=_)),ge(t,pe,_=>s(17,o=_)),ge(t,ts,_=>s(18,a=_)),ge(t,Oe,_=>s(4,l=_)),ge(t,yt,_=>s(5,i=_));let u=!1,c,f=!1,d=0;const p=async _=>{const U=await Jn(_);return[...i.items.filter(({name:W})=>W.toLowerCase().includes(_.toLowerCase())).map(W=>({label:W.name,count:W.tags.length,type:"supertag"})),...U]},v=Zo();v&&v.forEach(_=>{l.some(U=>U.name===_)||Oe.addByName(_)});const V=()=>new Wn().withPid(n.pageCount).withTags(l).withBlockedContent(a).withSortProperty(o.sortProperty).withSortDirection(o.sortDirection).withScoreValue(o.scoreValue).withScoreComparator(o.scoreComparator).withRating(o.rating).withSupertags(r),m=async _=>{if(!u){s(0,c=void 0),u=!0;try{const U=n.pageCount;await _(),qo(U).catch(()=>{})}catch(U){s(0,c=U),console.warn(U)}finally{u=!1}}},y=async()=>{Ne.reset(),d=0,m(async()=>{const[_,U]=await V().getPageAndCount();console.log(_,U),Ne.addPage(_,U)})},h=async()=>{m(async()=>{const _=await V().getPage();Ne.addPage(_)})},k=_=>{var U,J;if(console.log(_),(_.key==="/"||_.key==="s")&&document.activeElement!==document.getElementById("searchbar")&&((U=document.getElementById("searchbar"))==null||U.focus(),_.preventDefault(),_.stopPropagation()),_.ctrlKey&&_.key==="Enter"&&(_.preventDefault(),_.stopPropagation(),y()),_.ctrlKey&&_.key==="m"&&((J=document.getElementById("select-modifier"))==null||J.click()),_.ctrlKey&&_.key==="ArrowDown"){const W=document.getElementsByClassName("post-media");W[d].focus(),d=Math.min(d+1,Math.max(0,W.length-1))}_.ctrlKey&&_.key==="ArrowUp"&&(document.getElementsByClassName("post-media")[d].focus(),d=Math.max(d-1,0))};return ut(()=>{document.addEventListener("keydown",k)}),Zt(()=>{document.removeEventListener("keydown",k)}),[c,f,n,r,l,i,p,y,h,async _=>{const U=_.detail;if(U.type==="supertag"){const J=i.items.find(W=>W.name===U.label);if(!J){console.log("Supertag not present.");return}Xe.addOrReplace(J)}else{const J=await Zn(_.detail.label);Oe.addOrReplace({name:_.detail.label,modifier:_.detail.modifier,count:_.detail.count,type:J.type})}},_=>"description"in _.detail?Xe.removeByName(_.detail.name):Oe.removeByName(_.detail.name),_=>{"description"in _.detail||(_.detail.modifier=Yn(_.detail.modifier),Oe.addOrReplace(_.detail))},()=>s(1,f=!0),()=>s(1,f=!1),_=>yt.add(_.detail)]}class _a extends ae{constructor(e){super(),ie(this,e,Qo,Jo,oe,{})}}export{_a as component};
