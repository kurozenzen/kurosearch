import{s as G,a as k,f as h,l as E,x as M,d as u,c as x,g as v,h as q,y as R,m as j,D as V,j as _,i as w,u as n,n as z}from"../chunks/scheduler.88299003.js";import{S as J,i as K,b as P,d as D,m as L,a as O,t as W,e as B}from"../chunks/index.15b414ac.js";import{v as F}from"../chunks/environment.a598c933.js";import{b as Q}from"../chunks/paths.56d66e5e.js";import{H as X}from"../chunks/Heading1.cc3919c5.js";import{T as Y}from"../chunks/TextButton.2f318c50.js";function Z(d){let s;return{c(){s=E("About")},l(e){s=j(e,"About")},m(e,t){w(e,s,t)},d(e){e&&u(s)}}}function ee(d){let s=d[0]?"Loading...":"Update",e;return{c(){e=E(s)},l(t){e=j(t,s)},m(t,f){w(t,e,f)},p(t,f){f&1&&s!==(s=t[0]?"Loading...":"Update")&&z(e,s)},d(t){t&&u(e)}}}function te(d){let s,e,t,f,o,r,U,y,p,H="kurosearch",C,$,S,A,I,g,l,b;return t=new X({props:{$$slots:{default:[Z]},$$scope:{ctx:d}}}),l=new Y({props:{title:"Force an update of the app",$$slots:{default:[ee]},$$scope:{ctx:d}}}),l.$on("click",d[1]),{c(){s=k(),e=h("div"),P(t.$$.fragment),f=k(),o=h("section"),r=h("img"),y=k(),p=h("h2"),p.textContent=H,C=k(),$=h("span"),S=E("version: "),A=E(F),I=k(),g=h("section"),P(l.$$.fragment),this.h()},l(a){M("svelte-lkhoy5",document.head).forEach(u),s=x(a),e=v(a,"DIV",{class:!0});var c=q(e);D(t.$$.fragment,c),f=x(c),o=v(c,"SECTION",{class:!0});var i=q(o);r=v(i,"IMG",{src:!0,alt:!0,class:!0}),y=x(i),p=v(i,"H2",{class:!0,"data-svelte-h":!0}),R(p)!=="svelte-1okuyk9"&&(p.textContent=H),C=x(i),$=v(i,"SPAN",{});var T=q($);S=j(T,"version: "),A=j(T,F),T.forEach(u),i.forEach(u),I=x(c),g=v(c,"SECTION",{class:!0});var N=q(g);D(l.$$.fragment,N),N.forEach(u),c.forEach(u),this.h()},h(){document.title="kurosearch - About",V(r.src,U=Q+"/favicon.svg")||_(r,"src",U),_(r,"alt","kuroseach logo"),_(r,"class","svelte-judq1s"),_(p,"class","svelte-judq1s"),_(o,"class","info svelte-judq1s"),_(g,"class","update svelte-judq1s"),_(e,"class","svelte-judq1s")},m(a,m){w(a,s,m),w(a,e,m),L(t,e,null),n(e,f),n(e,o),n(o,r),n(o,y),n(o,p),n(o,C),n(o,$),n($,S),n($,A),n(e,I),n(e,g),L(l,g,null),b=!0},p(a,[m]){const c={};m&4&&(c.$$scope={dirty:m,ctx:a}),t.$set(c);const i={};m&5&&(i.$$scope={dirty:m,ctx:a}),l.$set(i)},i(a){b||(O(t.$$.fragment,a),O(l.$$.fragment,a),b=!0)},o(a){W(t.$$.fragment,a),W(l.$$.fragment,a),b=!1},d(a){a&&(u(s),u(e)),B(t),B(l)}}}function se(d,s,e){let t=!1;return[t,async()=>{if(e(0,t=!0),"serviceWorker"in navigator){const o=await navigator.serviceWorker.getRegistrations();await Promise.all(o.map(r=>r.update()))}window.location.reload(!0),e(0,t=!1)}]}class ie extends J{constructor(s){super(),K(this,s,se,te,G,{})}}export{ie as component};
