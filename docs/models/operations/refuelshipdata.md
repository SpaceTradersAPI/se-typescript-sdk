# RefuelShipData


## Fields

| Field                                                                                                    | Type                                                                                                     | Required                                                                                                 | Description                                                                                              |
| -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- | -------------------------------------------------------------------------------------------------------- |
| `agent`                                                                                                  | [components.AgentJson](../../models/components/agentjson.md)                                             | :heavy_check_mark:                                                                                       | Agent details.                                                                                           |
| `fuel`                                                                                                   | [components.ShipFuelJson](../../models/components/shipfueljson.md)                                       | :heavy_check_mark:                                                                                       | Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action. |
| `transaction`                                                                                            | [components.MarketTransactionJson](../../models/components/markettransactionjson.md)                     | :heavy_check_mark:                                                                                       | Result of a transaction with a market.                                                                   |