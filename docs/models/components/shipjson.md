# ShipJson

Ship details.


## Fields

| Field                                                                                                                                                                                                                                      | Type                                                                                                                                                                                                                                       | Required                                                                                                                                                                                                                                   | Description                                                                                                                                                                                                                                |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `symbol`                                                                                                                                                                                                                                   | *string*                                                                                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                         | The globally unique identifier of the ship in the following format: `[AGENT_SYMBOL]-[HEX_ID]`                                                                                                                                              |
| `registration`                                                                                                                                                                                                                             | [components.ShipRegistrationJson](../../models/components/shipregistrationjson.md)                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                         | The public registration information of the ship                                                                                                                                                                                            |
| `nav`                                                                                                                                                                                                                                      | [components.ShipNavJsonShipNavJson](../../models/components/shipnavjsonshipnavjson.md)                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                         | The navigation information of the ship.                                                                                                                                                                                                    |
| `crew`                                                                                                                                                                                                                                     | [components.ShipCrewJson](../../models/components/shipcrewjson.md)                                                                                                                                                                         | :heavy_check_mark:                                                                                                                                                                                                                         | The ship's crew service and maintain the ship's systems and equipment.                                                                                                                                                                     |
| `frame`                                                                                                                                                                                                                                    | [components.ShipFrameJson](../../models/components/shipframejson.md)                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                                                                                         | The frame of the ship. The frame determines the number of modules and mounting points of the ship, as well as base fuel capacity. As the condition of the frame takes more wear, the ship will become more sluggish and less maneuverable. |
| `reactor`                                                                                                                                                                                                                                  | [components.ShipReactorJson](../../models/components/shipreactorjson.md)                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                         | The reactor of the ship. The reactor is responsible for powering the ship's systems and weapons.                                                                                                                                           |
| `engine`                                                                                                                                                                                                                                   | [components.ShipEngineJson](../../models/components/shipenginejson.md)                                                                                                                                                                     | :heavy_check_mark:                                                                                                                                                                                                                         | The engine determines how quickly a ship travels between waypoints.                                                                                                                                                                        |
| `cooldown`                                                                                                                                                                                                                                 | [components.CooldownJsonCooldownJson](../../models/components/cooldownjsoncooldownjson.md)                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                         | A cooldown is a period of time in which a ship cannot perform certain actions.                                                                                                                                                             |
| `modules`                                                                                                                                                                                                                                  | [components.ShipModuleJson](../../models/components/shipmodulejson.md)[]                                                                                                                                                                   | :heavy_check_mark:                                                                                                                                                                                                                         | Modules installed in this ship.                                                                                                                                                                                                            |
| `mounts`                                                                                                                                                                                                                                   | [components.ShipMountJsonShipMountJson](../../models/components/shipmountjsonshipmountjson.md)[]                                                                                                                                           | :heavy_check_mark:                                                                                                                                                                                                                         | Mounts installed in this ship.                                                                                                                                                                                                             |
| `cargo`                                                                                                                                                                                                                                    | [components.ShipCargoJsonShipCargoJson](../../models/components/shipcargojsonshipcargojson.md)                                                                                                                                             | :heavy_check_mark:                                                                                                                                                                                                                         | Ship cargo details.                                                                                                                                                                                                                        |
| `fuel`                                                                                                                                                                                                                                     | [components.ShipFuelJsonShipFuelJson](../../models/components/shipfueljsonshipfueljson.md)                                                                                                                                                 | :heavy_check_mark:                                                                                                                                                                                                                         | Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action.                                                                                                                                   |