if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,a)=>{const l=s||("document"in self?document.currentScript.src:"")||location.href;if(e[l])return;let d={};const t=s=>n(s,l),c={module:{uri:l},exports:d,require:t};e[l]=Promise.all(i.map((s=>c[s]||t(s)))).then((s=>(a(...s),d)))}}define(["./workbox-5d567057"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.2fe64cdb.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.fdcf2a6d.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.aeaa8f68.js",revision:null},{url:"assets/docs_developing-for-activeband_index.md.3898dc73.js",revision:null},{url:"assets/docs_developing-for-activeband_index.md.3898dc73.lean.js",revision:null},{url:"assets/docs_thinkactive-cloud_index.md.b67e5237.js",revision:null},{url:"assets/docs_thinkactive-cloud_index.md.b67e5237.lean.js",revision:null},{url:"assets/docs_thinkactive-device-manager_index.md.f049fde6.js",revision:null},{url:"assets/docs_thinkactive-device-manager_index.md.f049fde6.lean.js",revision:null},{url:"assets/docs_thinkactive-sync-app_index.md.f3659eff.js",revision:null},{url:"assets/docs_thinkactive-sync-app_index.md.f3659eff.lean.js",revision:null},{url:"assets/docs_thinkactive-sync-app_release-notes.md.c2a03e9b.js",revision:null},{url:"assets/docs_thinkactive-sync-app_release-notes.md.c2a03e9b.lean.js",revision:null},{url:"assets/docs_using-activeband_device-states.md.71fae427.js",revision:null},{url:"assets/docs_using-activeband_device-states.md.71fae427.lean.js",revision:null},{url:"assets/docs_using-activeband_sync-issues.md.be4ad991.js",revision:null},{url:"assets/docs_using-activeband_sync-issues.md.be4ad991.lean.js",revision:null},{url:"assets/guide_features.md.3f6eb65b.js",revision:null},{url:"assets/guide_features.md.3f6eb65b.lean.js",revision:null},{url:"assets/guide_index.md.a321ac86.js",revision:null},{url:"assets/guide_index.md.a321ac86.lean.js",revision:null},{url:"assets/guide_why.md.50dc8f8c.js",revision:null},{url:"assets/guide_why.md.50dc8f8c.lean.js",revision:null},{url:"assets/index.md.e0aee315.js",revision:null},{url:"assets/index.md.e0aee315.lean.js",revision:null},{url:"assets/style.c7a10199.css",revision:null},{url:"apple-touch-icon.png",revision:"e65d9b37ebcccfe5b12c6c6d1288708b"},{url:"favicon.svg",revision:"416c1a515835aa88d8cc32dda523577b"},{url:"logo.svg",revision:"7b260bfabfb6a4f326f37640c5d269bf"},{url:"logo_text.svg",revision:"4d9f462d50ec6db2f061018aa3745fc3"},{url:"og.png",revision:"482e90b30882893b056ac212d3904c06"},{url:"pwa-192x192.png",revision:"075572a877d0b098f445d79c4dac1a52"},{url:"pwa-512x512.png",revision:"bbcbb598031f2340889a5602efcd49d9"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"manifest.webmanifest",revision:"e31e08a49138bbb1a0009490251af929"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]})),s.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
