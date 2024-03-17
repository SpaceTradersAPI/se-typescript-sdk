# ShipRefineData


## Fields

| Field                                                                          | Type                                                                           | Required                                                                       | Description                                                                    |
| ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ | ------------------------------------------------------------------------------ |
| `cargo`                                                                        | [components.ShipCargoJson](../../models/components/shipcargojson.md)           | :heavy_check_mark:                                                             | Ship cargo details.                                                            |
| `cooldown`                                                                     | [components.CooldownJson](../../models/components/cooldownjson.md)             | :heavy_check_mark:                                                             | A cooldown is a period of time in which a ship cannot perform certain actions. |
| `produced`                                                                     | [operations.Produced](../../models/operations/produced.md)[]                   | :heavy_check_mark:                                                             | Goods that were produced by this refining process.                             |
| `consumed`                                                                     | [operations.Consumed](../../models/operations/consumed.md)[]                   | :heavy_check_mark:                                                             | Goods that were consumed during this refining process.                         |