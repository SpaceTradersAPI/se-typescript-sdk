# FactionJson

Faction details.


## Fields

| Field                                                                                                          | Type                                                                                                           | Required                                                                                                       | Description                                                                                                    |
| -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------------- |
| `symbol`                                                                                                       | [components.FactionSymbolJsonFactionSymbolJson](../../models/components/factionsymboljsonfactionsymboljson.md) | :heavy_check_mark:                                                                                             | The symbol of the faction.                                                                                     |
| `name`                                                                                                         | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Name of the faction.                                                                                           |
| `description`                                                                                                  | *string*                                                                                                       | :heavy_check_mark:                                                                                             | Description of the faction.                                                                                    |
| `headquarters`                                                                                                 | *string*                                                                                                       | :heavy_check_mark:                                                                                             | The waypoint in which the faction's HQ is located in.                                                          |
| `traits`                                                                                                       | [components.FactionTraitJson](../../models/components/factiontraitjson.md)[]                                   | :heavy_check_mark:                                                                                             | List of traits that define this faction.                                                                       |
| `isRecruiting`                                                                                                 | *boolean*                                                                                                      | :heavy_check_mark:                                                                                             | Whether or not the faction is currently recruiting new agents.                                                 |