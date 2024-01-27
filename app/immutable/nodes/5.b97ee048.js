import{s as Q,f as k,a as $,l as x,g as A,h as R,d as g,c as h,m as G,j as H,r as V,i as O,u as l,n as z,v as J,x as Y}from"../chunks/scheduler.19d3c358.js";import{S as W,i as X,b as S,d as v,m as b,a as w,t as y,e as D}from"../chunks/index.2b8f9697.js";import{H as Z,a as K}from"../chunks/Heading3.7b972ebe.js";import{s as ee,a as te,b as se,c as ne,d as re,e as ae}from"../chunks/feature-support.8f9b3d5f.js";function oe(a){let e,s,t,i,m,u,f,c,F;return{c(){e=k("div"),s=k("i"),i=$(),m=k("b"),u=x(a[0]),f=$(),c=k("p"),F=x(a[1]),this.h()},l(o){e=A(o,"DIV",{class:!0});var p=R(e);s=A(p,"I",{class:!0}),R(s).forEach(g),i=h(p),m=A(p,"B",{});var _=R(m);u=G(_,a[0]),_.forEach(g),f=h(p),c=A(p,"P",{});var j=R(c);F=G(j,a[1]),j.forEach(g),p.forEach(g),this.h()},h(){H(s,"class",t=V(a[2])+" svelte-1vxyl57"),H(e,"class","svelte-1vxyl57")},m(o,p){O(o,e,p),l(e,s),l(e,i),l(e,m),l(m,u),l(e,f),l(e,c),l(c,F)},p(o,[p]){p&4&&t!==(t=V(o[2])+" svelte-1vxyl57")&&H(s,"class",t),p&1&&z(u,o[0]),p&2&&z(F,o[1])},i:J,o:J,d(o){o&&g(e)}}}function ie(a,e,s){let t,{supported:i}=e,{title:m}=e,{description:u}=e;return a.$$set=f=>{"supported"in f&&s(3,i=f.supported),"title"in f&&s(0,m=f.title),"description"in f&&s(1,u=f.description)},a.$$.update=()=>{a.$$.dirty&8&&s(2,t=i?"codicon codicon-pass":"codicon codicon-error")},[m,u,t,i]}class U extends W{constructor(e){super(),X(this,e,ie,oe,Q,{supported:3,title:0,description:1})}}function ue(a){let e;return{c(){e=x("Debug Info")},l(s){e=G(s,"Debug Info")},m(s,t){O(s,e,t)},d(s){s&&g(e)}}}function pe(a){let e;return{c(){e=x("Supported Features")},l(s){e=G(s,"Supported Features")},m(s,t){O(s,e,t)},d(s){s&&g(e)}}}function le(a){let e;return{c(){e=x("Supported Design Features")},l(s){e=G(s,"Supported Design Features")},m(s,t){O(s,e,t)},d(s){s&&g(e)}}}function fe(a){let e,s,t,i,m,u,f,c,F,o,p,_,j,E,P,I,q,T,B,C,L;return i=new Z({props:{$$slots:{default:[ue]},$$scope:{ctx:a}}}),u=new K({props:{$$slots:{default:[pe]},$$scope:{ctx:a}}}),c=new U({props:{supported:"pushState"in window.history,title:"URL Sharing",description:"Share the current search by copying the url from the address bar."}}),o=new U({props:{supported:ee&&te,title:"Data Saving",description:"Supports saving data between session. This will not work in incognito mode."}}),_=new U({props:{supported:se,title:"Fullscreen",description:"Supports borderless fullscreen display for images and videos."}}),E=new K({props:{$$slots:{default:[le]},$$scope:{ctx:a}}}),I=new U({props:{supported:ne,title:"CSS - Gap",description:"Technical Detail. Useful for debugging layout issues."}}),T=new U({props:{supported:re,title:"CSS - Aspect Ration",description:"Technical Detail. Useful for debugging layout issues."}}),C=new U({props:{supported:ae,title:"CSS - Object Fit",description:"Technical Detail. Useful for debugging layout issues."}}),{c(){e=k("meta"),s=$(),t=k("section"),S(i.$$.fragment),m=$(),S(u.$$.fragment),f=$(),S(c.$$.fragment),F=$(),S(o.$$.fragment),p=$(),S(_.$$.fragment),j=$(),S(E.$$.fragment),P=$(),S(I.$$.fragment),q=$(),S(T.$$.fragment),B=$(),S(C.$$.fragment),this.h()},l(n){const d=Y("svelte-1wmwsn",document.head);e=A(d,"META",{name:!0,content:!0}),d.forEach(g),s=h(n),t=A(n,"SECTION",{class:!0});var r=R(t);v(i.$$.fragment,r),m=h(r),v(u.$$.fragment,r),f=h(r),v(c.$$.fragment,r),F=h(r),v(o.$$.fragment,r),p=h(r),v(_.$$.fragment,r),j=h(r),v(E.$$.fragment,r),P=h(r),v(I.$$.fragment,r),q=h(r),v(T.$$.fragment,r),B=h(r),v(C.$$.fragment,r),r.forEach(g),this.h()},h(){document.title="kurosearch - Debugger",H(e,"name","description"),H(e,"content","Debugging tools for kurosearch."),H(t,"class","svelte-1mj6ue1")},m(n,d){l(document.head,e),O(n,s,d),O(n,t,d),b(i,t,null),l(t,m),b(u,t,null),l(t,f),b(c,t,null),l(t,F),b(o,t,null),l(t,p),b(_,t,null),l(t,j),b(E,t,null),l(t,P),b(I,t,null),l(t,q),b(T,t,null),l(t,B),b(C,t,null),L=!0},p(n,[d]){const r={};d&1&&(r.$$scope={dirty:d,ctx:n}),i.$set(r);const M={};d&1&&(M.$$scope={dirty:d,ctx:n}),u.$set(M);const N={};d&1&&(N.$$scope={dirty:d,ctx:n}),E.$set(N)},i(n){L||(w(i.$$.fragment,n),w(u.$$.fragment,n),w(c.$$.fragment,n),w(o.$$.fragment,n),w(_.$$.fragment,n),w(E.$$.fragment,n),w(I.$$.fragment,n),w(T.$$.fragment,n),w(C.$$.fragment,n),L=!0)},o(n){y(i.$$.fragment,n),y(u.$$.fragment,n),y(c.$$.fragment,n),y(o.$$.fragment,n),y(_.$$.fragment,n),y(E.$$.fragment,n),y(I.$$.fragment,n),y(T.$$.fragment,n),y(C.$$.fragment,n),L=!1},d(n){n&&(g(s),g(t)),g(e),D(i),D(u),D(c),D(o),D(_),D(E),D(I),D(T),D(C)}}}class $e extends W{constructor(e){super(),X(this,e,null,fe,Q,{})}}export{$e as component};
