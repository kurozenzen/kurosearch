if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let o={};const t=e=>i(e,c),d={module:{uri:c},exports:o,require:t};s[c]=Promise.all(n.map((e=>d[e]||t(e)))).then((e=>(r(...e),o)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.0627b0d4.css",revision:null},{url:"assets/index.dba4d052.js",revision:null},{url:"index.html",revision:"0f2720c56f14858bfeb903511ae86501"},{url:"favicon.svg",revision:"498a1b7a20d0cdaa04cac7559b826aae"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"ks-192.png",revision:"d452288f387acf112128f851044effe5"},{url:"ks-512.png",revision:"70db4e9987da17c5a645dbb61801e144"},{url:"ks-512-maskable.png",revision:"c143f14bf71cdc210072982a0cc0edfd"},{url:"manifest.webmanifest",revision:"6f3c61b5ad27a3dbd6f80b802b3c14ca"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
