if(!self.define){let s,e={};const n=(n,i)=>(n=new URL(n+".js",i).href,e[n]||new Promise((e=>{if("document"in self){const s=document.createElement("script");s.src=n,s.onload=e,document.head.appendChild(s)}else s=n,importScripts(n),e()})).then((()=>{let s=e[n];if(!s)throw new Error(`Module ${n} didn’t register its module`);return s})));self.define=(i,l)=>{const d=s||("document"in self?document.currentScript.src:"")||location.href;if(e[d])return;let a={};const t=s=>n(s,d),o={module:{uri:d},exports:a,require:t};e[d]=Promise.all(i.map((s=>o[s]||t(s)))).then((s=>(l(...s),a)))}}define(["./workbox-5d567057"],(function(s){"use strict";self.skipWaiting(),s.clientsClaim(),s.precacheAndRoute([{url:"assets/app.0824ce8d.js",revision:null},{url:"assets/chunks/pwa.23d08e5d.js",revision:null},{url:"assets/chunks/ui-custom.e8e77c4e.js",revision:null},{url:"assets/chunks/VPAlgoliaSearchBox.dcd3e294.js",revision:null},{url:"assets/docs_developing-for-activeband_index.md.45dd5a5e.js",revision:null},{url:"assets/docs_developing-for-activeband_index.md.45dd5a5e.lean.js",revision:null},{url:"assets/docs_thinkactive-cloud_index.md.69dc009d.js",revision:null},{url:"assets/docs_thinkactive-cloud_index.md.69dc009d.lean.js",revision:null},{url:"assets/docs_thinkactive-device-manager_index.md.103fa96a.js",revision:null},{url:"assets/docs_thinkactive-device-manager_index.md.103fa96a.lean.js",revision:null},{url:"assets/docs_thinkactive-sync-app_index.md.c5b307f7.js",revision:null},{url:"assets/docs_thinkactive-sync-app_index.md.c5b307f7.lean.js",revision:null},{url:"assets/docs_thinkactive-sync-app_release-notes.md.7433129d.js",revision:null},{url:"assets/docs_thinkactive-sync-app_release-notes.md.7433129d.lean.js",revision:null},{url:"assets/docs_using-activeband_device-states.md.487d919b.js",revision:null},{url:"assets/docs_using-activeband_device-states.md.487d919b.lean.js",revision:null},{url:"assets/docs_using-activeband_sync-issues.md.b8e2b84f.js",revision:null},{url:"assets/docs_using-activeband_sync-issues.md.b8e2b84f.lean.js",revision:null},{url:"assets/guide_features.md.75096504.js",revision:null},{url:"assets/guide_features.md.75096504.lean.js",revision:null},{url:"assets/guide_index.md.99d72af5.js",revision:null},{url:"assets/guide_index.md.99d72af5.lean.js",revision:null},{url:"assets/guide_why.md.edbbe233.js",revision:null},{url:"assets/guide_why.md.edbbe233.lean.js",revision:null},{url:"assets/index.md.b9f90323.js",revision:null},{url:"assets/index.md.b9f90323.lean.js",revision:null},{url:"assets/style.c7a10199.css",revision:null},{url:"apple-touch-icon.png",revision:"4bd56191939cd93d2cafb2f89f662cb3"},{url:"favicon.svg",revision:"416c1a515835aa88d8cc32dda523577b"},{url:"logo.svg",revision:"7b260bfabfb6a4f326f37640c5d269bf"},{url:"logo_text.svg",revision:"4d9f462d50ec6db2f061018aa3745fc3"},{url:"og.png",revision:"482e90b30882893b056ac212d3904c06"},{url:"pwa-192x192.png",revision:"075572a877d0b098f445d79c4dac1a52"},{url:"pwa-512x512.png",revision:"bbcbb598031f2340889a5602efcd49d9"},{url:"robots.txt",revision:"5e0bd1c281a62a380d7a948085bfe2d1"},{url:"manifest.webmanifest",revision:"11350577d72a2296d87b77d2c493c125"}],{}),s.cleanupOutdatedCaches(),s.registerRoute(new s.NavigationRoute(s.createHandlerBoundToURL("index.html"),{denylist:[/^\/new$/]})),s.registerRoute(/^https:\/\/fonts.googleapis.com\/.*/i,new s.CacheFirst({cacheName:"google-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET"),s.registerRoute(/^https:\/\/fonts.gstatic.com\/.*/i,new s.CacheFirst({cacheName:"gstatic-fonts-cache",plugins:[new s.ExpirationPlugin({maxEntries:10,maxAgeSeconds:31536e3}),new s.CacheableResponsePlugin({statuses:[0,200]})]}),"GET")}));
