if(!self.define){let e,s={};const i=(i,n)=>(i=new URL(i+".js",n).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(n,r)=>{const a=e||("document"in self?document.currentScript.src:"")||location.href;if(s[a])return;let c={};const d=e=>i(e,a),o={module:{uri:a},exports:c,require:d};s[a]=Promise.all(n.map((e=>o[e]||d(e)))).then((e=>(r(...e),c)))}}define(["./workbox-c1760cce"],(function(e){"use strict";self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"assets/index.6d68dadc.js",revision:null},{url:"assets/index.cdd94071.css",revision:null},{url:"index.html",revision:"8fa98f49564beb0e078ed0ee7c5fd055"},{url:"favicon.svg",revision:"498a1b7a20d0cdaa04cac7559b826aae"},{url:"robots.txt",revision:"f77c87f977e0fcce05a6df46c885a129"},{url:"ks-192.png",revision:"d452288f387acf112128f851044effe5"},{url:"ks-512.png",revision:"70db4e9987da17c5a645dbb61801e144"},{url:"ks-192-maskable.png",revision:"aafb9bcea68e2a734da3ec09178cd7b0"},{url:"ks-512-maskable.png",revision:"2339aa75a79fdaad8d801a8538ed2724"},{url:"manifest.webmanifest",revision:"27fbfe0a0d66cf01fa54e06b2a756c73"}],{}),e.cleanupOutdatedCaches(),e.registerRoute(new e.NavigationRoute(e.createHandlerBoundToURL("index.html")))}));
