import{s as C,C as a}from"../chunks/scheduler.a20787a1.js";import{S as b,i as T}from"../chunks/index.16c92c5c.js";import{a as i}from"../chunks/active-tags-store.b3e4fe76.js";import{s as c,f as p,p as k,r as w,S as B,a as U}from"../chunks/active-supertags-store.ab7cc25a.js";import{b as _}from"../chunks/blocked-content-store.9c031c36.js";function x(e,l,r){let u,s,n,m,h;a(e,U,t=>r(0,u=t)),a(e,p,t=>r(1,s=t)),a(e,c,t=>r(2,n=t)),a(e,_,t=>r(3,m=t)),a(e,i,t=>r(4,h=t));const d=async()=>{i.reset(),c.reset(),p.reset();let t=!1;const{tags:o,sort:g,filter:S}=k(new URL(location.href).searchParams);return o&&o.length>0&&(await Promise.all(o.map(async f=>await i.addByName(f.name,f.modifier))),t=!0),g&&(c.update(g),t=!0),S&&(p.update(S),t=!0),t},P=async()=>{try{w.reset();const[t,o]=await new B().withPid(0).withTags(h).withBlockedContent(m).withSortProperty(n.property).withSortDirection(n.direction).withScoreValue(s.scoreValue).withScoreComparator(s.scoreComparator).withRating(s.rating).withSupertags(u).getPageAndCount();w.addPage(t,o)}catch(t){console.warn(t)}},y=()=>{location.href="/"};return d().then(()=>P()).then(()=>y()),[]}class D extends b{constructor(l){super(),T(this,l,x,null,C,{})}}export{D as component};