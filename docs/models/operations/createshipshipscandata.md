# CreateShipShipScanData


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cooldown`                                                                     | [components.CooldownJson](../../models/components/cooldownjson.md)             | :heavy_check_mark:                                                             | A cooldown is a period of time in which a ship cannot perform certain actions. |
| `ships`                                                                        | [components.ScannedShipJson](../../models/components/scannedshipjson.md)[]     | :heavy_check_mark:                                                             | List of scanned ships.                                                         |