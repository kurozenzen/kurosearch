import{s as p,f as d,l as g,g as v,h as T,m as b,d as m,j as r,r as u,B as _,i as y,u as S,J as k,n as C,v as f,L as B}from"./scheduler.41e0bfa2.js";import{S as E,i as I}from"./index.e3f19884.js";import{a as h}from"./format-tag.7e313273.js";import{T as N}from"./tag-type-data.934b5280.js";function O(a){let t,s=h(a[0].name)+"",n,i,o,c;return{c(){t=d("button"),n=g(s),this.h()},l(e){t=v(e,"BUTTON",{type:!0,title:!0,class:!0});var l=T(t);n=b(l,s),l.forEach(m),this.h()},h(){r(t,"type","button"),r(t,"title","Click to add tag"),r(t,"class",i=u(a[2])+" svelte-19x06fp"),_(t,"active",a[1])},m(e,l){y(e,t,l),S(t,n),o||(c=k(t,"click",a[3]),o=!0)},p(e,[l]){l&1&&s!==(s=h(e[0].name)+"")&&C(n,s),l&4&&i!==(i=u(e[2])+" svelte-19x06fp")&&r(t,"class",i),l&6&&_(t,"active",e[1])},i:f,o:f,d(e){e&&m(t),o=!1,c()}}}function j(a,t,s){let n,{tag:i}=t,{active:o=!1}=t;function c(e){B.call(this,a,e)}return a.$$set=e=>{"tag"in e&&s(0,i=e.tag),"active"in e&&s(1,o=e.active)},a.$$.update=()=>{a.$$.dirty&1&&s(2,n=N[i.type]??"no-icon")},[i,o,n,c]}class H extends E{constructor(t){super(),I(this,t,j,O,p,{tag:0,active:1})}}export{H as S};