# CreateShipWaypointScanData


## Fields

| Field                                                                              | Type                                                                               | Required                                                                           | Description                                                                        |
| ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------- |
| `cooldown`                                                                         | [components.CooldownJson](../../models/components/cooldownjson.md)                 | :heavy_check_mark:                                                                 | A cooldown is a period of time in which a ship cannot perform certain actions.     |
| `waypoints`                                                                        | [components.ScannedWaypointJson](../../models/components/scannedwaypointjson.md)[] | :heavy_check_mark:                                                                 | List of scanned waypoints.                                                         |