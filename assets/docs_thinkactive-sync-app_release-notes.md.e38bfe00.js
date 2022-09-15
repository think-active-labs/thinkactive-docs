import{_ as e,c as i,o as t,d as l}from"./app.17e81842.js";const v=JSON.parse('{"title":"ThinkActive Sync App Release Notes","description":"","frontmatter":{},"headers":[{"level":2,"title":"v1.1.0 Blue Firefly","slug":"v1-1-0-blue-firefly","link":"#v1-1-0-blue-firefly","children":[{"level":3,"title":"New Features","slug":"new-features","link":"#new-features","children":[]},{"level":3,"title":"Bug Fixes","slug":"bug-fixes","link":"#bug-fixes","children":[]}]},{"level":2,"title":"v1.0.0 Wild Otter","slug":"v1-0-0-wild-otter","link":"#v1-0-0-wild-otter","children":[]}],"relativePath":"docs/thinkactive-sync-app/release-notes.md","lastUpdated":1663275921000}'),a={name:"docs/thinkactive-sync-app/release-notes.md"},s=l('<h1 id="thinkactive-sync-app-release-notes" tabindex="-1">ThinkActive Sync App Release Notes <a class="header-anchor" href="#thinkactive-sync-app-release-notes" aria-hidden="true">#</a></h1><nav class="table-of-contents"><ul><li><a href="#v1-1-0-blue-firefly">v1.1.0 Blue Firefly</a></li><li><a href="#v1-0-0-wild-otter">v1.0.0 Wild Otter</a></li></ul></nav><h2 id="v1-1-0-blue-firefly" tabindex="-1">v1.1.0 Blue Firefly <a class="header-anchor" href="#v1-1-0-blue-firefly" aria-hidden="true">#</a></h2><h3 id="new-features" tabindex="-1">New Features <a class="header-anchor" href="#new-features" aria-hidden="true">#</a></h3><ul><li>Initial support for ThinkActive Cloud v1.2.8</li><li>Support for no user account workflows</li><li>Support for multiple firmware versions</li><li>Upgrade ActiveBand Comms to v2.5.1</li><li>New log for accelerometer bad samples</li><li>New batched sync routine - data is synced in batches and errors during sync no longer discard data synced up to failure</li></ul><h3 id="bug-fixes" tabindex="-1">Bug Fixes <a class="header-anchor" href="#bug-fixes" aria-hidden="true">#</a></h3><ul><li>Resolved issue where some Android devices would be unable to sync on cold start of application</li><li>Resolved issue where firmware update button would still show after successful update</li><li>Resolved race condition where device state load operations may be triggered many times blocking sync</li><li>Resolved crash during sync where commands timeout</li><li>Resolved issue where some user data not stored and displayed in profile screen</li><li>Changed text &quot;ActiveBand.Sync.App&quot; shown during Bluetooth permissions prompt to tenant specific text</li><li>Resolved issue where disconnection may fail leaving connection and characteristics listeners open</li><li>Resolve issue block read fail could crash application</li></ul><h2 id="v1-0-0-wild-otter" tabindex="-1">v1.0.0 Wild Otter <a class="header-anchor" href="#v1-0-0-wild-otter" aria-hidden="true">#</a></h2><p>Our first release! \u{1F973}</p><ul><li>Login with tenant authentication services.</li><li>Setup ActiveBand devices with device setup workflow</li><li>Sync data from ActiveBand devices to third-party services</li><li>Show basic device information and last-sync time to user</li><li>Display user account information</li><li>Firmware update devices</li></ul>',10),r=[s];function n(o,d,c,u,h,p){return t(),i("div",null,r)}const w=e(a,[["render",n]]);export{v as __pageData,w as default};
