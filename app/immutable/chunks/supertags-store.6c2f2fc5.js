import{s as le,f as y,a as T,l as G,g as E,h as I,d,c as C,m as H,j as m,N as M,i as L,u as k,F as N,n as W,v as O,D as ne,p as me,E as J,L as pe,H as ge,r as de,e as Q,G as _e}from"./scheduler.32f194ce.js";import{h as X,u as be}from"./await_block.af8be678.js";import{e as Y}from"./each.e59479a4.js";import{S as oe,i as re,f as ke,b as q,d as F,m as R,a as w,t as D,e as U,g as ae,c as ie}from"./index.aa0a4971.js";import{b as ve}from"./paths.ffcd241c.js";import{M as Se}from"./ModifierSelect.b17e978c.js";import{L as ye}from"./LoadingAnimation.1752780f.js";import{C as Ee}from"./CodiconLink.9994dbe4.js";import{a as Z,f as $}from"./format-tag.7e313273.js";import{a as Ie}from"./tags.49324235.js";import{p as we,S as Ae}from"./store-keys.010b89a6.js";function De(o){let e,n,a,t,s,l=Z(o[0].label)+"",r,i,c,v=$(o[0].count)+"",_,S,b,P;return{c(){e=y("li"),n=y("i"),t=T(),s=y("span"),r=G(l),i=T(),c=y("span"),_=G(v),this.h()},l(g){e=E(g,"LI",{role:!0,tabindex:!0,title:!0,class:!0});var f=I(e);n=E(f,"I",{class:!0}),I(n).forEach(d),t=C(f),s=E(f,"SPAN",{class:!0});var p=I(s);r=H(p,l),p.forEach(d),i=C(f),c=E(f,"SPAN",{class:!0});var u=I(c);_=H(u,v),u.forEach(d),f.forEach(d),this.h()},h(){m(n,"class",a=o[0].type==="supertag"?"codicon codicon-star-full":"codicon codicon-tag"),m(s,"class","tag-name svelte-1d1xyf4"),m(c,"class","tag-count"),m(e,"role","button"),m(e,"tabindex","0"),m(e,"title",S=o[0].label),m(e,"class","svelte-1d1xyf4"),M(e,"selected",o[1])},m(g,f){L(g,e,f),k(e,n),k(e,t),k(e,s),k(s,r),k(e,i),k(e,c),k(c,_),b||(P=N(e,"click",o[3]),b=!0)},p(g,[f]){f&1&&a!==(a=g[0].type==="supertag"?"codicon codicon-star-full":"codicon codicon-tag")&&m(n,"class",a),f&1&&l!==(l=Z(g[0].label)+"")&&W(r,l),f&1&&v!==(v=$(g[0].count)+"")&&W(_,v),f&1&&S!==(S=g[0].label)&&m(e,"title",S),f&2&&M(e,"selected",g[1])},i:O,o:O,d(g){g&&d(e),b=!1,P()}}}function Ne(o,e,n){const a=ne();let{suggestion:t}=e,{selected:s=!1}=e;const l=()=>a("click",t);return o.$$set=r=>{"suggestion"in r&&n(0,t=r.suggestion),"selected"in r&&n(1,s=r.selected)},[t,s,a,l]}class Te extends oe{constructor(e){super(),re(this,e,Ne,De,le,{suggestion:0,selected:1})}}function x(o,e,n){const a=o.slice();return a[21]=e[n],a[23]=n,a}function Ce(o){let e,n,a,t,s=o[24].message+"",l;return{c(){e=y("div"),n=y("i"),a=T(),t=y("span"),l=G(s),this.h()},l(r){e=E(r,"DIV",{class:!0});var i=I(e);n=E(i,"I",{class:!0}),I(n).forEach(d),a=C(i),t=E(i,"SPAN",{});var c=I(t);l=H(c,s),c.forEach(d),i.forEach(d),this.h()},h(){m(n,"class",de("codicon codicon-error")+" svelte-1fnp487"),m(e,"class","suggestion-footer svelte-1fnp487")},m(r,i){L(r,e,i),k(e,n),k(e,a),k(e,t),k(t,l)},p(r,i){i&4&&s!==(s=r[24].message+"")&&W(l,s)},i:O,o:O,d(r){r&&d(e)}}}function Le(o){let e=Array.isArray(o[20]),n,a,t,s=e&&ee(o);return{c(){s&&s.c(),n=T(),a=y("div"),this.h()},l(l){s&&s.l(l),n=C(l),a=E(l,"DIV",{class:!0}),I(a).forEach(d),this.h()},h(){m(a,"class","suggestion-footer svelte-1fnp487")},m(l,r){s&&s.m(l,r),L(l,n,r),L(l,a,r),t=!0},p(l,r){r&4&&(e=Array.isArray(l[20])),e?s?(s.p(l,r),r&4&&w(s,1)):(s=ee(l),s.c(),w(s,1),s.m(n.parentNode,n)):s&&(ae(),D(s,1,1,()=>{s=null}),ie())},i(l){t||(w(s),t=!0)},o(l){D(s),t=!1},d(l){l&&(d(n),d(a)),s&&s.d(l)}}}function ee(o){let e,n,a=Y(o[20]),t=[];for(let l=0;l<a.length;l+=1)t[l]=te(x(o,a,l));const s=l=>D(t[l],1,1,()=>{t[l]=null});return{c(){for(let l=0;l<t.length;l+=1)t[l].c();e=Q()},l(l){for(let r=0;r<t.length;r+=1)t[r].l(l);e=Q()},m(l,r){for(let i=0;i<t.length;i+=1)t[i]&&t[i].m(l,r);L(l,e,r),n=!0},p(l,r){if(r&268){a=Y(l[20]);let i;for(i=0;i<a.length;i+=1){const c=x(l,a,i);t[i]?(t[i].p(c,r),w(t[i],1)):(t[i]=te(c),t[i].c(),w(t[i],1),t[i].m(e.parentNode,e))}for(ae(),i=a.length;i<t.length;i+=1)s(i);ie()}},i(l){if(!n){for(let r=0;r<a.length;r+=1)w(t[r]);n=!0}},o(l){t=t.filter(Boolean);for(let r=0;r<t.length;r+=1)D(t[r]);n=!1},d(l){l&&d(e),_e(t,l)}}}function te(o){let e,n;function a(){return o[16](o[21])}return e=new Te({props:{suggestion:o[21],selected:o[23]===o[3]}}),e.$on("click",a),{c(){q(e.$$.fragment)},l(t){F(e.$$.fragment,t)},m(t,s){R(e,t,s),n=!0},p(t,s){o=t;const l={};s&4&&(l.suggestion=o[21]),s&8&&(l.selected=o[23]===o[3]),e.$set(l)},i(t){n||(w(e.$$.fragment,t),n=!0)},o(t){D(e.$$.fragment,t),n=!1},d(t){U(e,t)}}}function Pe(o){let e,n,a;return n=new ye({}),{c(){e=y("div"),q(n.$$.fragment),this.h()},l(t){e=E(t,"DIV",{class:!0});var s=I(e);F(n.$$.fragment,s),s.forEach(d),this.h()},h(){m(e,"class","suggestion-footer svelte-1fnp487")},m(t,s){L(t,e,s),R(n,e,null),a=!0},p:O,i(t){a||(w(n.$$.fragment,t),a=!0)},o(t){D(n.$$.fragment,t),a=!1},d(t){t&&d(e),U(n)}}}function Ve(o){let e,n,a,t,s,l,r,i,c,v,_,S,b;function P(p){o[14](p)}let g={};o[4]!==void 0&&(g.modifier=o[4]),n=new Se({props:g}),me.push(()=>ke(n,"modifier",P)),r=new Ee({props:{title:"More information on tags.",href:ve+"/help#tags",icon:"codicon codicon-question"}});let f={ctx:o,current:null,token:null,hasCatch:!0,pending:Pe,then:Le,catch:Ce,value:20,error:24,blocks:[,,,]};return X(v=o[2],f),{c(){e=y("div"),q(n.$$.fragment),t=T(),s=y("input"),l=T(),q(r.$$.fragment),i=T(),c=y("ol"),f.block.c(),this.h()},l(p){e=E(p,"DIV",{class:!0});var u=I(e);F(n.$$.fragment,u),t=C(u),s=E(u,"INPUT",{type:!0,name:!0,id:!0,placeholder:!0,autocomplete:!0,"aria-label":!0,class:!0}),l=C(u),F(r.$$.fragment,u),i=C(u),c=E(u,"OL",{class:!0});var A=I(c);f.block.l(A),A.forEach(d),u.forEach(d),this.h()},h(){m(s,"type","text"),m(s,"name","searchbar"),m(s,"id","searchbar"),m(s,"placeholder",o[0]),m(s,"autocomplete","off"),m(s,"aria-label","Search for tags."),m(s,"class","svelte-1fnp487"),m(c,"class","svelte-1fnp487"),M(c,"open",o[5]&&o[6]),m(e,"class","searchbar svelte-1fnp487"),M(e,"open",o[5]&&o[6])},m(p,u){L(p,e,u),R(n,e,null),k(e,t),k(e,s),J(s,o[1]),k(e,l),R(r,e,null),k(e,i),k(e,c),f.block.m(c,f.anchor=null),f.mount=()=>c,f.anchor=null,_=!0,S||(b=[N(s,"input",o[15]),N(s,"focus",o[11]),N(s,"blur",o[10]),N(s,"keydown",o[12]),N(s,"keyup",o[7]),N(e,"blur",o[9])],S=!0)},p(p,[u]){o=p;const A={};!a&&u&16&&(a=!0,A.modifier=o[4],pe(()=>a=!1)),n.$set(A),(!_||u&1)&&m(s,"placeholder",o[0]),u&2&&s.value!==o[1]&&J(s,o[1]),f.ctx=o,u&4&&v!==(v=o[2])&&X(v,f)||be(f,o,u),(!_||u&96)&&M(c,"open",o[5]&&o[6]),(!_||u&96)&&M(e,"open",o[5]&&o[6])},i(p){_||(w(n.$$.fragment,p),w(r.$$.fragment,p),w(f.block),_=!0)},o(p){D(n.$$.fragment,p),D(r.$$.fragment,p);for(let u=0;u<3;u+=1){const A=f.blocks[u];D(A)}_=!1},d(p){p&&d(e),U(n),U(r),f.block.d(),f.token=null,f=null,S=!1,ge(b)}}}function Me(o,e,n){const a=ne();let{placeholder:t}=e,{fetchSuggestions:s}=e,l="",r="",i,c=0,v="+",_=!1,S=!1,b=[];const P=()=>{l!==""&&l!==r&&(n(3,c=0),r=l,n(6,S=!0),n(2,i=s(l)),i.then(h=>b=h).catch(()=>b=[]))},g=h=>{a("pick",{modifier:v,...h}),n(1,l=""),n(3,c=0),n(6,S=!1)},f=()=>{n(5,_=!1)},p=h=>{(!h.relatedTarget||!h.target.parentNode.contains(h.relatedTarget))&&n(5,_=!1)},u=h=>{n(5,_=!0),h.target.scrollIntoView({block:"center",behavior:"smooth"})},A=async h=>{if(!h.ctrlKey&&h.key==="Enter"&&l!=="")if(b.length>c)g(b[c]);else{const z=l.split(";").map(K=>K.trim().replaceAll(" ","_")),he=await Promise.all(z.map(Ie));z.map(K=>{const V=he.find(j=>(j==null?void 0:j.name)===K);return{type:(V==null?void 0:V.type)??"tag",label:K,count:(V==null?void 0:V.count)??0}}).forEach(g)}else h.code==="Escape"?h.target.blur():h.code==="ArrowUp"&&b.length>0?n(3,c=(c+b.length-1)%b.length):h.code==="ArrowDown"&&b.length>0&&n(3,c=(c+1)%b.length)};function ce(h){v=h,n(4,v)}function fe(){l=this.value,n(1,l)}const ue=h=>g(h);return o.$$set=h=>{"placeholder"in h&&n(0,t=h.placeholder),"fetchSuggestions"in h&&n(13,s=h.fetchSuggestions)},[t,l,i,c,v,_,S,P,g,f,p,u,A,s,ce,fe,ue]}class Je extends oe{constructor(e){super(),re(this,e,Me,Ve,le,{placeholder:0,fetchSuggestions:13})}}const B=["+","-","~"],Qe=o=>{const n=((B.indexOf(o)??2)+1)%B.length;return B[n]},se=()=>({last_sync:0,items:[]}),Oe=()=>{const{subscribe:o,set:e,update:n}=we(Ae.Supertags,se());return{subscribe:o,set:e,add(a){n(t=>(t.items.push(a),t))},remove(a){n(t=>(t.items=t.items.filter(s=>s.name!==a.name),t))},update(a,t){n(s=>{const l=s.items.findIndex(r=>r.name===a);return l!==-1&&(s.items[l]=t),s})},reset(){e(se())}}},Xe=Oe();export{Je as S,Qe as n,Xe as s};