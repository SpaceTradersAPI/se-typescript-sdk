# GetStatusResponseBody

Fetched status successfully.


## Fields

| Field                                                                  | Type                                                                   | Required                                                               | Description                                                            |
| ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- | ---------------------------------------------------------------------- |
| `status`                                                               | *string*                                                               | :heavy_check_mark:                                                     | The current status of the game server.                                 |
| `version`                                                              | *string*                                                               | :heavy_check_mark:                                                     | The current version of the API.                                        |
| `resetDate`                                                            | *string*                                                               | :heavy_check_mark:                                                     | The date when the game server was last reset.                          |
| `description`                                                          | *string*                                                               | :heavy_check_mark:                                                     | N/A                                                                    |
| `stats`                                                                | [operations.Stats](../../models/operations/stats.md)                   | :heavy_check_mark:                                                     | N/A                                                                    |
| `leaderboards`                                                         | [operations.Leaderboards](../../models/operations/leaderboards.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `serverResets`                                                         | [operations.ServerResets](../../models/operations/serverresets.md)     | :heavy_check_mark:                                                     | N/A                                                                    |
| `announcements`                                                        | [operations.Announcements](../../models/operations/announcements.md)[] | :heavy_check_mark:                                                     | N/A                                                                    |
| `links`                                                                | [operations.Links](../../models/operations/links.md)[]                 | :heavy_check_mark:                                                     | N/A                                                                    |