# ExtractResourcesData


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cooldown`                                                                     | [components.CooldownJson](../../models/components/cooldownjson.md)             | :heavy_check_mark:                                                             | A cooldown is a period of time in which a ship cannot perform certain actions. |
| `extraction`                                                                   | [components.ExtractionJson](../../models/components/extractionjson.md)         | :heavy_check_mark:                                                             | Extraction details.                                                            |
| `cargo`                                                                        | [components.ShipCargoJson](../../models/components/shipcargojson.md)           | :heavy_check_mark:                                                             | Ship cargo details.                                                            |
| `events`                                                                       | *operations.Events*[]                                                          | :heavy_check_mark:                                                             | N/A                                                                            |