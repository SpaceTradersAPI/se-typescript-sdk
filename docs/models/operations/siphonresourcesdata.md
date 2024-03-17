# SiphonResourcesData


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cooldown`                                                                     | [components.CooldownJson](../../models/components/cooldownjson.md)             | :heavy_check_mark:                                                             | A cooldown is a period of time in which a ship cannot perform certain actions. |
| `siphon`                                                                       | [components.SiphonJson](../../models/components/siphonjson.md)                 | :heavy_check_mark:                                                             | Siphon details.                                                                |
| `cargo`                                                                        | [components.ShipCargoJson](../../models/components/shipcargojson.md)           | :heavy_check_mark:                                                             | Ship cargo details.                                                            |
| `events`                                                                       | *operations.SiphonResourcesEvents*[]                                           | :heavy_check_mark:                                                             | N/A                                                                            |