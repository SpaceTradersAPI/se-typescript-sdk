# CreateShipSystemScanData


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cooldown`                                                                     | [components.CooldownJson](../../models/components/cooldownjson.md)             | :heavy_check_mark:                                                             | A cooldown is a period of time in which a ship cannot perform certain actions. |
| `systems`                                                                      | [components.ScannedSystemJson](../../models/components/scannedsystemjson.md)[] | :heavy_check_mark:                                                             | List of scanned systems.                                                       |