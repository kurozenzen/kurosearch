import{w as u}from"./index.d94cff24.js";const n=JSON.parse,h=JSON.stringify,g=e=>e.toLowerCase()==="true",p=e=>e.toString(),b=e=>e,f=e=>e,m=(e,s,a=h,r=n)=>{const o=localStorage.getItem(e),c=i(o,s,r),t=u(c);return t.subscribe(l=>localStorage.setItem(e,a(l))),t},i=(e,s,a)=>{if(e===null)return s;try{const r=a(e);return r===void 0?s:typeof r=="object"&&typeof s=="object"?{...s,...r}:r}catch{return s}};var d=(e=>(e.ActiveTags="kurosearch:active-tags",e.ActiveSupertags="kurosearch:active-supertags",e.BlockedContent="kurosearch:blocked-content",e.LocalstorageEnabled="kurosearch:localstorage-enabled",e.ResultColumns="kurosearch:result-columns",e.Supertags="kurosearch:supertags",e.Filter="kurosearch:filter",e.Sort="kurosearch:sort",e.Results="kurosearch:results",e.Theme="kurosearch:theme",e.AlwaysLoop="kurosearch:always-loop",e.CookiesAccepted="kurosearch:cookies-accepted",e.HighResolutionEnabled="kurosearch:high-resolution-enabled",e.WideLayoutEnabled="kurosearch:wide-layout-enabled",e.FullscreenHintDone="kurosearch:fullscreen-hint-done",e.AutoplayFullscreenEnabled="kurosearch:autoplay-fullscreen-enabled-done",e.AutoplayFullscreenDelay="kurosearch:autoplay-fullscreen-delay",e.TagsShortcut="kurosearch:tags-shortcut",e))(d||{});export{d as S,p as a,g as b,f as c,h as d,n as e,m as p,b as s};