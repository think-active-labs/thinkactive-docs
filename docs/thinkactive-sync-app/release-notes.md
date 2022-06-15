# ThinkActive Sync App Release Notes

[[toc]]

## v1.1 Blue Firefly

### New Features
- Initial support for ThinkActive Cloud v1.2.8
- Support for no user account workflows
- Support for multiple firmware versions
- Upgrade ActiveBand Comms to v2.4.14
- New log for accelerometer bad samples

### Bug Fixes
- Resolved issue where some Android devices would be unable to sync on cold start of application
- Resolved issue where firmware update button would still show after successful update
- Resolved race condition where device state load operations may be triggered many times blocking sync
- Resolved crash during sync where commands timeout
- Resolved issue where some user data not stored and displayed in profile screen
- Changed text "ActiveBand.Sync.App" shown during Bluetooth permissions prompt to tenant specific text

## v1.0 Wild Otter

Our first release! 🥳

- Login with tenant authentication services.
- Setup ActiveBand devices with device setup workflow
- Sync data from ActiveBand devices to third-party services
- Show basic device information and last-sync time to user
- Display user account information
- Firmware update devices
