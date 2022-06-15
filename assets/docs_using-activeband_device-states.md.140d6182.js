import{_ as e,c as i,o as t,d as o}from"./app.88faaaaf.js";var n="/assets/infinitime_production_mode_home.4f25a039.jpeg",a="/assets/infinitime_rebooting_green_pinecone.8b9a5ba0.jpeg",r="/assets/infinitime_rebooting_blue_pinecone.f06a2812.jpeg",s="/assets/infinitime_rebooting_red_pinecone.ba5600ec.jpeg",d="/assets/infinitime_recovery_mode.7717b8a0.jpeg";const y=JSON.parse('{"title":"ActiveBand Device States","description":"Information regarding the different states ActiveBand can be in","frontmatter":{"title":"ActiveBand Device States","description":"Information regarding the different states ActiveBand can be in"},"headers":[{"level":2,"title":"InfiniTime","slug":"infinitime"},{"level":3,"title":"Production Mode","slug":"production-mode"},{"level":3,"title":"Recovery Mode","slug":"recovery-mode"}],"relativePath":"docs/using-activeband/device-states.md","lastUpdated":1655306282000}'),c={name:"docs/using-activeband/device-states.md"},h=o('<h1 id="device-states" tabindex="-1">Device States <a class="header-anchor" href="#device-states" aria-hidden="true">#</a></h1><p>Each supported ActiveBand device has a number of different device states. ActiveBand devices in their typical operation mode are what we call <strong>Production Mode</strong>. It may be neccesary to use the steps on this page to put ActiveBand devices into certain modes in order to resolve issues.</p><div class="warning custom-block"><p class="custom-block-title">WARNING</p><p>Execise caution when using device modes other than Production Mode. Some of the ActiveBand Device States shown here are for debug purposes or for recovery from broken device states. You may brick (make unrecoverable) ActiveBand devices by using these device modes incorrectly.</p></div><h2 id="infinitime" tabindex="-1">InfiniTime <a class="header-anchor" href="#infinitime" aria-hidden="true">#</a></h2><p>InfiniTime devices have two device states <a href="#production-mode">Production Mode</a> and <a href="#recovery-mode">Recovery Mode</a>. InfiniTime devices ordered from third-party suppliers such as <a href="https://pine64.net" target="_blank" rel="noopener noreferrer">Pine64</a></p><h3 id="production-mode" tabindex="-1">Production Mode <a class="header-anchor" href="#production-mode" aria-hidden="true">#</a></h3><p>Production mode is the typical mode that the device will be in. This is the normal operational mode.</p><p>The home screen of the device in this mode will look like this:</p><p><img src="'+n+'" alt="InfiniTime Production Mode Home Screen"></p><p>The time and date will show as dashes until the device has been synced for the first time. If the device runs out of battery it may also return to not knowing the current time. A sync will restore the time back to the correct values.</p><h4 id="icons" tabindex="-1">Icons <a class="header-anchor" href="#icons" aria-hidden="true">#</a></h4><ul><li>:icon{name=&quot;material-symbols:bluetooth&quot; class=&quot;text-blue-400&quot;} The presence of this icon denotes the ActiveBand is actively connected to a device. <ul><li>Whilst this is showing you will be unable to sync this device any other devices.</li></ul></li><li>:icon{name=&quot;mdi:power-plug&quot; class=&quot;text-red-400&quot;} The presence of this icon denotes the ActiveBand is currently being charged.</li><li>:icon{name=&quot;material-symbols:battery-2-bar-sharp&quot;} This icon shows the current battery level of the device.</li></ul><h4 id="navigation" tabindex="-1">Navigation <a class="header-anchor" href="#navigation" aria-hidden="true">#</a></h4><ul><li>Pressing the side button will always eventually return to this screen. Depending upon how many screens deep you are in the user interface on the device.</li><li>Swiping from the left side will open the settings drawer.</li><li>Swiping from the top side will open notification drawer.</li></ul><h4 id="rebooting-the-device" tabindex="-1">Rebooting the device <a class="header-anchor" href="#rebooting-the-device" aria-hidden="true">#</a></h4><p>When the device is in its charging cradle it can be rebooted.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Earlier versions of ActiveBand on InfiniTime allowed rebooting of the device whilst off the charging cradle. This was removed in v1.9.0.</p></div><h5 id="rebootable-states" tabindex="-1">Rebootable states <a class="header-anchor" href="#rebootable-states" aria-hidden="true">#</a></h5><p>When rebooting an InfiniTime device there are 3 options for reboot.</p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>Take care using anything other than Standard Device Reboot. Holding the power button for too long will enter other reboot modes. In typical use of InfiniTime devices you should not use Previous Firmware Device Reboot or Recovery Mode Device Reboot. These reboot procedures should only be used if a device cannot be recovered through other means.</p></div><p><strong>Standard Device Reboot (Green Pinecone)</strong></p><p>Pressing and holding the side button until a green pinecone is shown will simply reboot the device in back into the same firmware it was running when restart was initiated.</p><p><img src="'+a+'" alt="InfiniTime Rebooting Green Pinecone"></p><p><strong>Previous Firmware Device Reboot (Blue Pinecone)</strong></p><p>Pressing and holding the side button until a blue pinecone is shown will reboot the device in back into the previous firmware it has on device. If this device has never been flashed before it will return to the same firmware it was on when the restart was initiated.</p><p><img src="'+r+'" alt="InfiniTime Rebooting Blue Pinecone"></p><p><strong>Recovery Mode Device Reboot</strong></p><p>Pressing and holding the side button until a red pinecone is shown will reboot the device into recovery mode.</p><p><img src="'+s+'" alt="InfiniTime Rebooting Red Pinecone"></p><h3 id="recovery-mode" tabindex="-1">Recovery Mode <a class="header-anchor" href="#recovery-mode" aria-hidden="true">#</a></h3><p><img src="'+d+'" alt="InfiniTime Recovery Mode"></p><p>InfiniTime devices have a built in recovery mode for recovering devices from a firmware error. The device will enter this mode itself under a the following circumstances:</p><ul><li>The device has been unable to successfully start its firmware after several attempts</li><li>The device firmware images are corrupt and cannot be loaded</li><li>The device has no firmware images available</li><li>The device has been forced into recovery mode during a reboot</li></ul><p>When a device is in recovery mode all ActiveBand services are stopped. This means no data can be logged or synced.</p><p>InfiniTime&#39;s recovery mode has a few known issues which are important to consider:</p><ul><li>Device is not discoverable after around 5 minutes. Rebooting a device in recovery mode will restore services again</li></ul><h4 id="exiting-recovery-mode" tabindex="-1">Exiting Recovery Mode <a class="header-anchor" href="#exiting-recovery-mode" aria-hidden="true">#</a></h4><p>In order to get an InfiniTime device to exit recovery mode you must either:</p><ul><li>Reboot the device using a <a href="#rebootable-states">standard reboot</a>. This will only work if the standard device firmware is working/available</li><li>Reflash the device with firmware using the ThinkActive Sync App or ThinkActive Device Manager</li></ul><p><strong>Using the ThinkActive Sync App</strong></p><ol><li>If the device is already logged in logout to reflash a device</li><li>We recommend quitting the application entirely at this point <ul><li>On iOS this is a double press of the home button or a swipe up and hold from the home bar. Then swipe away the ThinkActive Sync app</li><li>On Android typically it is the left most button on the navigation bar which will open a list of all apps. Swipe away ThinkActive Sync app</li><li>If the user cannot complete this reboot of the phone or coming back to the app later should cause the app to have restarted</li></ul></li><li>Begin the device setup \u2013 the app should discover the device and prompt the user with a message saying this device needs updating before it can be used <ul><li>Once this is initiated inform the user that they must keep the phone and the watch near to each other until the update completes</li><li>Update times are very dependent upon the device. For example my iPhone updates the device in around 3 minutes but my older Android device can take up to 10 minutes</li></ul></li><li>Once the update is complete the app will rescan for the devices. <ul><li>You may find that the app is saying it cannot find the device or it consistently finds the device with a serial number of &quot;0&quot;. We suggest following the steps in step 2 and reboot the app or the phone. Then begin the setup process. Ensure that the Bluetooth icon has disappeared from the device before starting.</li></ul></li><li>Setup should complete successfully.</li></ol><p><strong>Using the ThinkActive Device Manager</strong></p><p>Coming soon...</p>',43),l=[h];function p(u,v,m,f,b,g){return t(),i("div",null,l)}var _=e(c,[["render",p]]);export{y as __pageData,_ as default};
