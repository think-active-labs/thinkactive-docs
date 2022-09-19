---
title: Sync Issues
description: Help troubleshooting sync issues with ActiveBand
---

# Troubleshooting Sync Issues

Syncing ActiveBand devices may occasionally fail. Use some of the troubleshooting steps below to help you resolve some typical sync issues.

## No Data to Sync Message

When ActiveBand data is synced a number of factors determine if device data is avaialable for syncing:

- No data is available
    - ActiveBand has recently been setup - a full `SamplePeriod` (typically 1 minute) must pass before any data is logged.
    - ActiveBand has recently successfully synced - a full `SamplePeriod` (typically 1 minute) must pass before futher data is logged.
    - ActiveBand has recently had its time updated - when time is updated ActiveBand starts a new block and sample so a full `SamplePeriod` (typically 1 minute) must pass before further data is logged.
- No valid samples have been collected
    - ActiveBand has been unable to store any valid data - this is typically caused by a corrupt/damaged/failed accelerometer. You should restart the ActiveBand and confirm that the device accelerometer can be identified by looking in the [about section of settings](#) on the device.

## Device Not Found Message

This message states that the device could not be found by the sync process. Ensure the device is charged, nearby and the screen on the device is lit.

Should you still be unable to sync the device check that the device is not currently being [communicated with](#) - ActiveBand can only communicate with one device at a time and will be temporarily unavailable for sync on some platforms for up to 60 seconds after the last communication.

If the device not found message persists try [restarting the ActiveBand](/docs/using-activeband/device-states#reboot) as well as restarting the device with the sync application on it.

## Something Went Wrong Message

This message is shown when something unexpected happens during sync. There are a number of reasons a sync error can occur. All errors of this nature are logged to ThinkActive Cloud. Should you need further assistance please contact ThinkActive support [support@thinkactive.io](mailto:support@thinkactive.io).