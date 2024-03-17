# ConstructionJson

The construction details of a waypoint.


## Fields

| Field                                                                                        | Type                                                                                         | Required                                                                                     | Description                                                                                  |
| -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------- |
| `symbol`                                                                                     | *string*                                                                                     | :heavy_check_mark:                                                                           | The symbol of the waypoint.                                                                  |
| `materials`                                                                                  | [components.ConstructionMaterialJson](../../models/components/constructionmaterialjson.md)[] | :heavy_check_mark:                                                                           | The materials required to construct the waypoint.                                            |
| `isComplete`                                                                                 | *boolean*                                                                                    | :heavy_check_mark:                                                                           | Whether the waypoint has been constructed.                                                   |