# ScannedSystemJson

Details of a system was that scanned.


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `symbol`                                                               | *string*                                                               | :heavy_check_mark:                                                     | Symbol of the system.                                                  |
| `sectorSymbol`                                                         | *string*                                                               | :heavy_check_mark:                                                     | Symbol of the system's sector.                                         |
| `type`                                                                 | [components.SystemTypeJson](../../models/components/systemtypejson.md) | :heavy_check_mark:                                                     | The type of system.                                                    |
| `x`                                                                    | *number*                                                               | :heavy_check_mark:                                                     | Position in the universe in the x axis.                                |
| `y`                                                                    | *number*                                                               | :heavy_check_mark:                                                     | Position in the universe in the y axis.                                |
| `distance`                                                             | *number*                                                               | :heavy_check_mark:                                                     | The system's distance from the scanning ship.                          |