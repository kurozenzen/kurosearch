import{S as J,i as K,s as Q,f as oe,e as p,t as Y,a as o,n as ue,M as ce,b as D,c as r,d as z,g as H,h as M,j as R,m as W,k as E,l as G,o as q,p as b,q as P,r as fe,u as le,v as ne,w as ke,x as ye,y as se,B as we,z as ee,A as te,C as x,D as Ce,E as pe,F as ge,G as me}from"./index.57c38e40.js";function Ee(n){let e,t=oe(n[0].name)+"",l,s;return{c(){e=p("li"),l=Y(t),o(e,"class",s=ue(ce[n[0].modifier])+" svelte-ettvl0")},m(i,a){D(i,e,a),r(e,l)},p(i,[a]){a&1&&t!==(t=oe(i[0].name)+"")&&z(l,t),a&1&&s!==(s=ue(ce[i[0].modifier])+" svelte-ettvl0")&&o(e,"class",s)},i:H,o:H,d(i){i&&M(e)}}}function je(n,e,t){let{tag:l}=e;return n.$$set=s=>{"tag"in s&&t(0,l=s.tag)},[l]}class Ie extends J{constructor(e){super(),K(this,e,je,Ee,Q,{tag:0})}}function _e(n,e,t){const l=n.slice();return l[4]=e[t],l}function de(n){let e,t;return e=new Ie({props:{tag:n[4]}}),{c(){R(e.$$.fragment)},m(l,s){W(e,l,s),t=!0},p(l,s){const i={};s&1&&(i.tag=l[4]),e.$set(i)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function Ge(n){let e,t,l=n[0].name+"",s,i,a,u=Object.keys(n[0].tags).length+"",g,c,f,v,U,w,L,O,j=n[0].description+"",A,S,F,C,T,X,B=n[0].tags,h=[];for(let _=0;_<B.length;_+=1)h[_]=de(_e(n,B,_));const Z=_=>G(h[_],1,1,()=>{h[_]=null});return{c(){e=p("li"),t=p("h3"),s=Y(l),i=b(),a=p("small"),g=Y(u),c=Y(" tags"),f=b(),v=p("i"),U=b(),w=p("i"),L=b(),O=p("span"),A=Y(j),S=b(),F=p("ol");for(let _=0;_<h.length;_+=1)h[_].c();o(t,"class","svelte-j5poh"),o(a,"class","svelte-j5poh"),o(v,"tabindex","0"),o(v,"class","codicon codicon-edit svelte-j5poh"),o(w,"tabindex","0"),o(w,"class","codicon codicon-close svelte-j5poh"),o(O,"class","svelte-j5poh"),o(F,"class","svelte-j5poh"),o(e,"class","svelte-j5poh")},m(_,$){D(_,e,$),r(e,t),r(t,s),r(e,i),r(e,a),r(a,g),r(a,c),r(e,f),r(e,v),r(e,U),r(e,w),r(e,L),r(e,O),r(O,A),r(e,S),r(e,F);for(let m=0;m<h.length;m+=1)h[m].m(F,null);C=!0,T||(X=[P(v,"click",n[2]),P(v,"keyup",fe(n[2])),P(w,"click",n[1]),P(w,"keyup",fe(n[1]))],T=!0)},p(_,[$]){if((!C||$&1)&&l!==(l=_[0].name+"")&&z(s,l),(!C||$&1)&&u!==(u=Object.keys(_[0].tags).length+"")&&z(g,u),(!C||$&1)&&j!==(j=_[0].description+"")&&z(A,j),$&1){B=_[0].tags;let m;for(m=0;m<B.length;m+=1){const N=_e(_,B,m);h[m]?(h[m].p(N,$),E(h[m],1)):(h[m]=de(N),h[m].c(),E(h[m],1),h[m].m(F,null))}for(le(),m=B.length;m<h.length;m+=1)Z(m);ne()}},i(_){if(!C){for(let $=0;$<B.length;$+=1)E(h[$]);C=!0}},o(_){h=h.filter(Boolean);for(let $=0;$<h.length;$+=1)G(h[$]);C=!1},d(_){_&&M(e),ke(h,_),T=!1,ye(X)}}}function Le(n,e,t){let{supertag:l}=e;const s=se(),i=()=>s("remove",l),a=()=>s("edit",l);return n.$$set=u=>{"supertag"in u&&t(0,l=u.supertag)},[l,i,a]}class Ae extends J{constructor(e){super(),K(this,e,Le,Ge,Q,{supertag:0})}}function Ue(n){let e,t,l,s,i,a,u,g,c;return a=new we({props:{text:n[0],title:"Click to sign in",disabled:n[3]}}),a.$on("click",n[4]),{c(){e=p("div"),t=p("input"),l=b(),s=p("input"),i=b(),R(a.$$.fragment),o(t,"type","text"),o(t,"placeholder","Email"),o(t,"autocomplete","email"),o(t,"class","svelte-17i24u0"),o(s,"type","password"),o(s,"placeholder","Password"),o(s,"autocomplete","current-password"),o(s,"class","svelte-17i24u0"),o(e,"class","svelte-17i24u0")},m(f,v){D(f,e,v),r(e,t),ee(t,n[1]),r(e,l),r(e,s),ee(s,n[2]),r(e,i),W(a,e,null),u=!0,g||(c=[P(t,"input",n[5]),P(s,"input",n[6])],g=!0)},p(f,[v]){v&2&&t.value!==f[1]&&ee(t,f[1]),v&4&&s.value!==f[2]&&ee(s,f[2]);const U={};v&1&&(U.text=f[0]),v&8&&(U.disabled=f[3]),a.$set(U)},i(f){u||(E(a.$$.fragment,f),u=!0)},o(f){G(a.$$.fragment,f),u=!1},d(f){f&&M(e),q(a),g=!1,ye(c)}}}function Be(n,e,t){let l;const s=se();let{submitLabel:i}=e,a="",u="";const g=()=>{l||s("submit",{email:a,password:u})};function c(){a=this.value,t(1,a)}function f(){u=this.value,t(2,u)}return n.$$set=v=>{"submitLabel"in v&&t(0,i=v.submitLabel)},n.$$.update=()=>{n.$$.dirty&6&&t(3,l=!a||!u)},[i,a,u,l,g,c,f]}class ve extends J{constructor(e){super(),K(this,e,Be,Ue,Q,{submitLabel:0})}}function Oe(n){let e,t;return{c(){e=p("img"),te(e.src,t="https://developers-dot-devsite-v2-prod.appspot.com/identity/sign-in/g-normal.png")||o(e,"src",t),o(e,"alt","Google"),o(e,"class","svelte-1daylrb")},m(l,s){D(l,e,s)},p:H,i:H,o:H,d(l){l&&M(e)}}}class Fe extends J{constructor(e){super(),K(this,e,null,Oe,Q,{})}}function Ne(n){let e,t,l,s,i,a,u,g;return t=new Fe({}),{c(){e=p("button"),R(t.$$.fragment),l=b(),s=p("span"),i=Y(n[0]),o(s,"class","svelte-w5bo0p"),o(e,"class","svelte-w5bo0p")},m(c,f){D(c,e,f),W(t,e,null),r(e,l),r(e,s),r(s,i),a=!0,u||(g=P(e,"click",n[2]),u=!0)},p(c,[f]){(!a||f&1)&&z(i,c[0])},i(c){a||(E(t.$$.fragment,c),a=!0)},o(c){G(t.$$.fragment,c),a=!1},d(c){c&&M(e),q(t),u=!1,g()}}}function Re(n,e,t){let{content:l}=e;const s=se(),i=()=>s("click");return n.$$set=a=>{"content"in a&&t(0,l=a.content)},[l,s,i]}class We extends J{constructor(e){super(),K(this,e,Re,Ne,Q,{content:0})}}function qe(n){let e,t,l,s,i,a,u,g,c,f,v,U,w,L,O,j,A;return i=new ve({props:{submitLabel:"Sign In"}}),i.$on("submit",n[0]),c=new We({props:{content:"Sign in With Google"}}),c.$on("click",n[1]),j=new ve({props:{submitLabel:"Create Account"}}),j.$on("submit",n[2]),{c(){e=p("div"),t=p("div"),l=p("h3"),l.textContent="Sign In",s=b(),R(i.$$.fragment),a=b(),u=p("p"),u.textContent="or",g=b(),R(c.$$.fragment),f=b(),v=p("div"),U=b(),w=p("div"),L=p("h3"),L.textContent="Sign Up",O=b(),R(j.$$.fragment),o(u,"class","svelte-vfla8u"),o(t,"class","providerlist svelte-vfla8u"),o(v,"class","divider svelte-vfla8u"),o(w,"class","providerlist svelte-vfla8u"),o(e,"class","container svelte-vfla8u")},m(S,F){D(S,e,F),r(e,t),r(t,l),r(t,s),W(i,t,null),r(t,a),r(t,u),r(t,g),W(c,t,null),r(e,f),r(e,v),r(e,U),r(e,w),r(w,L),r(w,O),W(j,w,null),A=!0},p:H,i(S){A||(E(i.$$.fragment,S),E(c.$$.fragment,S),E(j.$$.fragment,S),A=!0)},o(S){G(i.$$.fragment,S),G(c.$$.fragment,S),G(j.$$.fragment,S),A=!1},d(S){S&&M(e),q(i),q(c),q(j)}}}function De(n){return[s=>x.signInWithEmail(s.detail.email,s.detail.password),()=>x.signInWithGoogle(),s=>x.signUpWithEmail(s.detail.email,s.detail.password)]}class Me extends J{constructor(e){super(),K(this,e,De,qe,Q,{})}}function he(n,e,t){const l=n.slice();return l[4]=e[t],l}function Te(n){let e,t;return e=new Me({}),{c(){R(e.$$.fragment)},m(l,s){W(e,l,s),t=!0},p:H,i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function Ye(n){var ae;let e,t,l,s,i,a,u,g,c,f=((ae=n[0].user.displayName)!=null?ae:"Anonymous")+"",v,U,w,L,O,j,A=n[0].user.email+"",S,F,C,T,X,B,h,Z,_,$;L=new we({props:{text:"Sign out",title:"Click to sign out"}}),L.$on("click",n[2]);let m=n[1].supertags.length===0&&$e(),N=n[1].supertags,k=[];for(let d=0;d<N.length;d+=1)k[d]=be(he(n,N,d));const Se=d=>G(k[d],1,1,()=>{k[d]=null});return{c(){var d;e=p("div"),t=p("div"),l=p("h2"),l.textContent="Signed in as",s=b(),i=p("div"),a=p("img"),g=b(),c=p("span"),v=Y(f),U=b(),w=p("div"),R(L.$$.fragment),O=b(),j=p("span"),S=Y(A),F=b(),C=p("div"),T=p("h2"),T.textContent="Your supertags",X=b(),B=p("div"),h=b(),m&&m.c(),Z=b(),_=p("ul");for(let y=0;y<k.length;y+=1)k[y].c();o(l,"class","svelte-1rn24pg"),o(a,"class","profile-picture svelte-1rn24pg"),te(a.src,u=(d=n[0].user.photoURL)!=null?d:me)||o(a,"src",u),o(a,"alt","Profile"),o(c,"class","name svelte-1rn24pg"),o(w,"class","actions svelte-1rn24pg"),o(i,"class","overview svelte-1rn24pg"),o(T,"class","svelte-1rn24pg"),o(B,"class","supertags"),o(_,"class","svelte-1rn24pg"),o(e,"class","account-view svelte-1rn24pg")},m(d,y){D(d,e,y),r(e,t),r(t,l),r(t,s),r(t,i),r(i,a),r(i,g),r(i,c),r(c,v),r(i,U),r(i,w),W(L,w,null),r(i,O),r(i,j),r(j,S),r(e,F),r(e,C),r(C,T),r(C,X),r(C,B),r(C,h),m&&m.m(C,null),r(C,Z),r(C,_);for(let V=0;V<k.length;V+=1)k[V].m(_,null);$=!0},p(d,y){var V,re;if((!$||y&1&&!te(a.src,u=(V=d[0].user.photoURL)!=null?V:me))&&o(a,"src",u),(!$||y&1)&&f!==(f=((re=d[0].user.displayName)!=null?re:"Anonymous")+"")&&z(v,f),(!$||y&1)&&A!==(A=d[0].user.email+"")&&z(S,A),d[1].supertags.length===0?m||(m=$e(),m.c(),m.m(C,Z)):m&&(m.d(1),m=null),y&2){N=d[1].supertags;let I;for(I=0;I<N.length;I+=1){const ie=he(d,N,I);k[I]?(k[I].p(ie,y),E(k[I],1)):(k[I]=be(ie),k[I].c(),E(k[I],1),k[I].m(_,null))}for(le(),I=N.length;I<k.length;I+=1)Se(I);ne()}},i(d){if(!$){E(L.$$.fragment,d);for(let y=0;y<N.length;y+=1)E(k[y]);$=!0}},o(d){G(L.$$.fragment,d),k=k.filter(Boolean);for(let y=0;y<k.length;y+=1)G(k[y]);$=!1},d(d){d&&M(e),q(L),m&&m.d(),ke(k,d)}}}function $e(n){let e;return{c(){e=p("span"),e.textContent="You don't have any supertags yet. You can create them when you have more than one tag active."},m(t,l){D(t,e,l)},d(t){t&&M(e)}}}function be(n){let e,t;return e=new Ae({props:{supertag:n[4]}}),e.$on("remove",n[3]),{c(){R(e.$$.fragment)},m(l,s){W(e,l,s),t=!0},p(l,s){const i={};s&2&&(i.supertag=l[4]),e.$set(i)},i(l){t||(E(e.$$.fragment,l),t=!0)},o(l){G(e.$$.fragment,l),t=!1},d(l){q(e,l)}}}function Pe(n){let e,t,l,s;const i=[Ye,Te],a=[];function u(g,c){return g[0].loggedIn?0:1}return e=u(n),t=a[e]=i[e](n),{c(){t.c(),l=Ce()},m(g,c){a[e].m(g,c),D(g,l,c),s=!0},p(g,[c]){let f=e;e=u(g),e===f?a[e].p(g,c):(le(),G(a[f],1,1,()=>{a[f]=null}),ne(),t=a[e],t?t.p(g,c):(t=a[e]=i[e](g),t.c()),E(t,1),t.m(l.parentNode,l))},i(g){s||(E(t),s=!0)},o(g){G(t),s=!1},d(g){a[e].d(g),g&&M(l)}}}function ze(n,e,t){let l,s;return pe(n,x,u=>t(0,l=u)),pe(n,ge,u=>t(1,s=u)),[l,s,()=>x.signOut(),u=>ge.deleteSupertag(u.detail)]}class Je extends J{constructor(e){super(),K(this,e,ze,Pe,Q,{})}}export{Je as default};
