# ShipNavJson

The navigation information of the ship.


## Fields

| Field                                                                                                                          | Type                                                                                                                           | Required                                                                                                                       | Description                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------ |
| `systemSymbol`                                                                                                                 | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The symbol of the system.                                                                                                      |
| `waypointSymbol`                                                                                                               | *string*                                                                                                                       | :heavy_check_mark:                                                                                                             | The symbol of the waypoint.                                                                                                    |
| `route`                                                                                                                        | [components.ShipNavRouteJson](../../models/components/shipnavroutejson.md)                                                     | :heavy_check_mark:                                                                                                             | The routing information for the ship's most recent transit or current location.                                                |
| `status`                                                                                                                       | [components.ShipNavStatusJson](../../models/components/shipnavstatusjson.md)                                                   | :heavy_check_mark:                                                                                                             | The current status of the ship                                                                                                 |
| `flightMode`                                                                                                                   | [components.ShipNavFlightModeJsonShipNavFlightModeJson](../../models/components/shipnavflightmodejsonshipnavflightmodejson.md) | :heavy_minus_sign:                                                                                                             | The ship's set speed when traveling between waypoints or systems.                                                              |