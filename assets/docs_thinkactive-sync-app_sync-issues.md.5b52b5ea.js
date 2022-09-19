import{_ as e,c as t,o as s,d as a}from"./app.a06b8421.js";const g=JSON.parse('{"title":"Sync Issues","description":"Help troubleshooting sync issues with ActiveBand","frontmatter":{"title":"Sync Issues","description":"Help troubleshooting sync issues with ActiveBand"},"headers":[{"level":2,"title":"No Data to Sync Message","slug":"no-data-to-sync-message","link":"#no-data-to-sync-message","children":[]},{"level":2,"title":"Device Not Found Message","slug":"device-not-found-message","link":"#device-not-found-message","children":[]},{"level":2,"title":"Something Went Wrong Message","slug":"something-went-wrong-message","link":"#something-went-wrong-message","children":[]}],"relativePath":"docs/thinkactive-sync-app/sync-issues.md","lastUpdated":1663606568000}'),n={name:"docs/thinkactive-sync-app/sync-issues.md"},i=a('<h1 id="troubleshooting-sync-issues" tabindex="-1">Troubleshooting Sync Issues <a class="header-anchor" href="#troubleshooting-sync-issues" aria-hidden="true">#</a></h1><p>Syncing ActiveBand devices may occasionally fail. Use some of the troubleshooting steps below to help you resolve some typical sync issues.</p><h2 id="no-data-to-sync-message" tabindex="-1">No Data to Sync Message <a class="header-anchor" href="#no-data-to-sync-message" aria-hidden="true">#</a></h2><p>When ActiveBand data is synced a number of factors determine if device data is avaialable for syncing:</p><ul><li>No data is available <ul><li>ActiveBand has recently been setup - a full <code>SamplePeriod</code> (typically 1 minute) must pass before any data is logged.</li><li>ActiveBand has recently successfully synced - a full <code>SamplePeriod</code> (typically 1 minute) must pass before futher data is logged.</li><li>ActiveBand has recently had its time updated - when time is updated ActiveBand starts a new block and sample so a full <code>SamplePeriod</code> (typically 1 minute) must pass before further data is logged.</li></ul></li><li>No valid samples have been collected <ul><li>ActiveBand has been unable to store any valid data - this is typically caused by a corrupt/damaged/failed accelerometer. You should restart the ActiveBand and confirm that the device accelerometer can be identified by looking in the <a href="#">about section of settings</a> on the device.</li></ul></li></ul><h2 id="device-not-found-message" tabindex="-1">Device Not Found Message <a class="header-anchor" href="#device-not-found-message" aria-hidden="true">#</a></h2><p>This message states that the device could not be found by the sync process. Ensure the device is charged, nearby and the screen on the device is lit.</p><p>Should you still be unable to sync the device check that the device is not currently being <a href="#">communicated with</a> - ActiveBand can only communicate with one device at a time and will be temporarily unavailable for sync on some platforms for up to 60 seconds after the last communication.</p><p>If the device not found message persists try <a href="/docs/using-activeband/infinitime-device-states.html#reboot">restarting the ActiveBand</a> as well as restarting the device with the sync application on it.</p><h2 id="something-went-wrong-message" tabindex="-1">Something Went Wrong Message <a class="header-anchor" href="#something-went-wrong-message" aria-hidden="true">#</a></h2><p>This message is shown when something unexpected happens during sync. There are a number of reasons a sync error can occur. All errors of this nature are logged to ThinkActive Cloud. Should you need further assistance please contact ThinkActive support <a href="mailto:support@thinkactive.io" target="_blank" rel="noreferrer">support@thinkactive.io</a>.</p>',11),o=[i];function c(d,l,r,h,u,p){return s(),t("div",null,o)}const y=e(n,[["render",c]]);export{g as __pageData,y as default};
