import{s as oe,f as R,a as z,W as ne,l as L,w as le,g as D,d as y,c as O,h as j,X as ie,m as A,j as P,u as i,i as ee,n as K,G as ce,y as B}from"../chunks/scheduler.41e0bfa2.js";import{S as me,i as ue,b as W,d as X,m as F,a as J,t as Y,e as Z}from"../chunks/index.e3f19884.js";import{e as ae}from"../chunks/each.e59479a4.js";import{K as pe,A as ge}from"../chunks/ActiveTagList.0a93fcd3.js";import{S as fe}from"../chunks/Searchbar.8332646c.js";import{g as he,a as de}from"../chunks/tags.49324235.js";import{a as x,r as _e}from"../chunks/blocking-group-data.88a47c96.js";import{a as G}from"../chunks/active-tags-store.8f583d8c.js";import{S as we,f as ye,s as Se}from"../chunks/url-parsing.855b19e9.js";import{b as ve}from"../chunks/blocked-content-store.512411cf.js";import{n as be,s as ke}from"../chunks/supertags-store.d73614c9.js";function se(s,n,o){const a=s.slice();return a[16]=n[o],a}function re(s){let n,o=s[16][0]+"",a,f,d=s[16][1]+"",m;return{c(){n=R("p"),a=L(o),f=L("="),m=L(d),this.h()},l(u){n=D(u,"P",{class:!0});var r=j(n);a=A(r,o),f=A(r,"="),m=A(r,d),r.forEach(y),this.h()},h(){P(n,"class","fixed svelte-15wziqd")},m(u,r){ee(u,n,r),i(n,a),i(n,f),i(n,m)},p(u,r){r&16&&o!==(o=u[16][0]+"")&&K(a,o),r&16&&d!==(d=u[16][1]+"")&&K(m,d)},d(u){u&&y(n)}}}function Ce(s){let n,o,a,f,d,m,u,r,T,S,b,$,p,E,N,H,Q,v,e=s[3][0]+"",k,w,_=s[3][1]+"",M,q;f=new pe({}),m=new fe({props:{placeholder:"Search for tags",fetchSuggestions:s[7]}}),m.$on("pick",s[12]),r=new ge({props:{tags:[...s[2],...s[1]]}}),r.$on("click",s[13]),r.$on("contextmenu",s[14]);let U=ae(s[4]),c=[];for(let t=0;t<U.length;t+=1)c[t]=re(se(s,U,t));return{c(){n=R("meta"),o=z(),a=R("section"),W(f.$$.fragment),d=z(),W(m.$$.fragment),u=z(),W(r.$$.fragment),T=z(),S=R("code"),b=new ne(!1),$=z(),p=R("code"),E=R("p"),N=L(s[5]),H=z();for(let t=0;t<c.length;t+=1)c[t].c();Q=z(),v=R("p"),k=L(e),w=L("="),M=L(_),this.h()},l(t){const h=le("svelte-2w1wl5",document.head);n=D(h,"META",{name:!0,content:!0}),h.forEach(y),o=O(t),a=D(t,"SECTION",{class:!0});var l=j(a);X(f.$$.fragment,l),d=O(l),X(m.$$.fragment,l),u=O(l),X(r.$$.fragment,l),T=O(l),S=D(l,"CODE",{class:!0});var g=j(S);b=ie(g,!1),g.forEach(y),$=O(l),p=D(l,"CODE",{class:!0});var C=j(p);E=D(C,"P",{class:!0});var te=j(E);N=A(te,s[5]),te.forEach(y),H=O(C);for(let I=0;I<c.length;I+=1)c[I].l(C);Q=O(C),v=D(C,"P",{class:!0});var V=j(v);k=A(V,e),w=A(V,"="),M=A(V,_),V.forEach(y),C.forEach(y),l.forEach(y),this.h()},h(){document.title="kurosearch - Query Builder",P(n,"name","description"),P(n,"content","Test your kurosearch queries. Useful if you already know how to use rule34.xxx"),b.a=null,P(S,"class","svelte-15wziqd"),P(E,"class","base svelte-15wziqd"),P(v,"class","tags svelte-15wziqd"),P(p,"class","svelte-15wziqd"),P(a,"class","svelte-15wziqd")},m(t,h){i(document.head,n),ee(t,o,h),ee(t,a,h),F(f,a,null),i(a,d),F(m,a,null),i(a,u),F(r,a,null),i(a,T),i(a,S),b.m(s[0],S),i(a,$),i(a,p),i(p,E),i(E,N),i(p,H);for(let l=0;l<c.length;l+=1)c[l]&&c[l].m(p,null);i(p,Q),i(p,v),i(v,k),i(v,w),i(v,M),q=!0},p(t,[h]){const l={};if(h&6&&(l.tags=[...t[2],...t[1]]),r.$set(l),(!q||h&1)&&b.p(t[0]),(!q||h&32)&&K(N,t[5]),h&16){U=ae(t[4]);let g;for(g=0;g<U.length;g+=1){const C=se(t,U,g);c[g]?c[g].p(C,h):(c[g]=re(C),c[g].c(),c[g].m(p,Q))}for(;g<c.length;g+=1)c[g].d(1);c.length=U.length}(!q||h&8)&&e!==(e=t[3][0]+"")&&K(k,e),(!q||h&8)&&_!==(_=t[3][1]+"")&&K(M,_)},i(t){q||(J(f.$$.fragment,t),J(m.$$.fragment,t),J(r.$$.fragment,t),q=!0)},o(t){Y(f.$$.fragment,t),Y(m.$$.fragment,t),Y(r.$$.fragment,t),q=!1},d(t){t&&(y(o),y(a)),y(n),Z(f),Z(m),Z(r),ce(c,t)}}}function Te(s,n,o){let a,f,d,m,u,r,T,S,b,$,p;B(s,x,e=>o(1,u=e)),B(s,ye,e=>o(8,r=e)),B(s,Se,e=>o(9,T=e)),B(s,ve,e=>o(10,S=e)),B(s,G,e=>o(2,b=e)),B(s,_e,e=>o(11,$=e)),B(s,ke,e=>o(6,p=e));const E=async e=>{const k=await he(e);return[...p.items.filter(({name:_})=>_.toLowerCase().includes(e.toLowerCase())).map(_=>({label:_.name,count:_.tags.length,type:"supertag"})),...k]},N=e=>{try{return new URL(e)}catch{return null}},H=async e=>{const k=e.detail;if(k.type==="supertag"){const w=p.items.find(_=>_.name===k.label);if(!w){console.warn("Supertag not present.");return}x.addOrReplace(w)}else{const w=await de(e.detail.label);G.addOrReplace({name:e.detail.label,modifier:e.detail.modifier,count:e.detail.count,type:(w==null?void 0:w.type)??"tag"})}},Q=e=>"description"in e.detail?x.removeByName(e.detail.name):G.removeByName(e.detail.name),v=e=>{"description"in e.detail||(e.detail.modifier=be(e.detail.modifier),G.addOrReplace(e.detail))};return s.$$.update=()=>{s.$$.dirty&3846&&o(0,a=N(new we().withPid($.pageCount).withTags(b).withBlockedContent(S).withSortProperty(T.property).withSortDirection(T.direction).withScoreValue(r.scoreValue).withScoreComparator(r.scoreComparator).withRating(r.rating).withSupertags(u).getQuery())),s.$$.dirty&1&&o(5,f=a&&`${a.protocol}//${a.hostname}`),s.$$.dirty&1&&o(4,d=a?[...a.searchParams.entries()].filter(([e])=>["page","s","q","fields","json","limit"].includes(e)):[]),s.$$.dirty&1&&o(3,m=a?[...a.searchParams.entries()].find(([e])=>e==="tags")??["tags",""]:["tags",""])},[a,u,b,m,d,f,p,E,r,T,S,$,H,Q,v]}class Ne extends me{constructor(n){super(),ue(this,n,Te,Ce,oe,{})}}export{Ne as component};
