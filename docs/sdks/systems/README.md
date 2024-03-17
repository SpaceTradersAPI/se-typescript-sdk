# Systems
(*systems*)

## Overview

Systems

### Available Operations

* [getSystems](#getsystems) - List Systems
* [getSystem](#getsystem) - Get System
* [getSystemWaypoints](#getsystemwaypoints) - List Waypoints in System
* [getWaypoint](#getwaypoint) - Get Waypoint
* [getMarket](#getmarket) - Get Market
* [getShipyard](#getshipyard) - Get Shipyard
* [getJumpGate](#getjumpgate) - Get Jump Gate
* [getConstruction](#getconstruction) - Get Construction Site
* [supplyConstruction](#supplyconstruction) - Supply Construction Site

## getSystems

Return a paginated list of all systems.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const page = 1;
  const limit = 10;
  
  const result = await sdk.systems.getSystems(page, limit);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `page`                                                                                                                                                                         | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | What entry offset to request                                                                                                                                                   |
| `limit`                                                                                                                                                                        | *number*                                                                                                                                                                       | :heavy_minus_sign:                                                                                                                                                             | How many entries to return per page                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSystemsResponse](../../models/operations/getsystemsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getSystem

Get the details of a system.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const systemSymbol = "X1-OE";
  
  const result = await sdk.systems.getSystem(systemSymbol);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `systemSymbol`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The system symbol                                                                                                                                                              |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSystemResponse](../../models/operations/getsystemresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getSystemWaypoints

Return a paginated list of all of the waypoints for a given system.

If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";
import { WaypointTraitSymbolJson } from "se-spacetraders-typescript-sdk/models/components";

async function run() {
  const sdk = new SeTypescriptSDK();

  const result = await sdk.systems.getSystemWaypoints({
    systemSymbol: "<value>",
  traits: WaypointTraitSymbolJson.MineralDeposits,
  });

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `request`                                                                                                                                                                      | [operations.GetSystemWaypointsRequest](../../models/operations/getsystemwaypointsrequest.md)                                                                                   | :heavy_check_mark:                                                                                                                                                             | The request object to use for the request.                                                                                                                                     |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetSystemWaypointsResponse](../../models/operations/getsystemwaypointsresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getWaypoint

View the details of a waypoint.

If the waypoint is uncharted, it will return the 'Uncharted' trait instead of its actual traits.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const systemSymbol = "<value>";
  const waypointSymbol = "<value>";
  
  const result = await sdk.systems.getWaypoint(systemSymbol, waypointSymbol);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `systemSymbol`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The system symbol                                                                                                                                                              |
| `waypointSymbol`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The waypoint symbol                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetWaypointResponse](../../models/operations/getwaypointresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getMarket

Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.

Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const systemSymbol = "<value>";
  const waypointSymbol = "<value>";
  
  const result = await sdk.systems.getMarket(systemSymbol, waypointSymbol);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `systemSymbol`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The system symbol                                                                                                                                                              |
| `waypointSymbol`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The waypoint symbol                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetMarketResponse](../../models/operations/getmarketresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getShipyard

Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const systemSymbol = "<value>";
  const waypointSymbol = "<value>";
  
  const result = await sdk.systems.getShipyard(systemSymbol, waypointSymbol);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `systemSymbol`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The system symbol                                                                                                                                                              |
| `waypointSymbol`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The waypoint symbol                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetShipyardResponse](../../models/operations/getshipyardresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getJumpGate

Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.

Waypoints connected to this jump gate can be 

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const systemSymbol = "<value>";
  const waypointSymbol = "<value>";
  
  const result = await sdk.systems.getJumpGate(systemSymbol, waypointSymbol);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `systemSymbol`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The system symbol                                                                                                                                                              |
| `waypointSymbol`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The waypoint symbol                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetJumpGateResponse](../../models/operations/getjumpgateresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## getConstruction

Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const systemSymbol = "<value>";
  const waypointSymbol = "<value>";
  
  const result = await sdk.systems.getConstruction(systemSymbol, waypointSymbol);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `systemSymbol`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The system symbol                                                                                                                                                              |
| `waypointSymbol`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The waypoint symbol                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.GetConstructionResponse](../../models/operations/getconstructionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

## supplyConstruction

Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.

The good must be in your ship's cargo. The good will be removed from your ship's cargo and added to the construction site's materials.

### Example Usage

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
  const sdk = new SeTypescriptSDK();

  const systemSymbol = "<value>";
  const waypointSymbol = "<value>";
  const requestBody = {
    shipSymbol: "<value>",
    tradeSymbol: "<value>",
    units: 110828,
  };
  const operationSecurity = "<YOUR_BEARER_TOKEN_HERE>";
  
  const result = await sdk.systems.supplyConstruction(operationSecurity, systemSymbol, waypointSymbol, requestBody);

  // Handle the result
  console.log(result)
}

run();
```

### Parameters

| Parameter                                                                                                                                                                      | Type                                                                                                                                                                           | Required                                                                                                                                                                       | Description                                                                                                                                                                    |
| ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `security`                                                                                                                                                                     | [operations.SupplyConstructionSecurity](../../models/operations/supplyconstructionsecurity.md)                                                                                 | :heavy_check_mark:                                                                                                                                                             | The security requirements to use for the request.                                                                                                                              |
| `systemSymbol`                                                                                                                                                                 | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The system symbol                                                                                                                                                              |
| `waypointSymbol`                                                                                                                                                               | *string*                                                                                                                                                                       | :heavy_check_mark:                                                                                                                                                             | The waypoint symbol                                                                                                                                                            |
| `requestBody`                                                                                                                                                                  | [operations.SupplyConstructionRequestBody](../../models/operations/supplyconstructionrequestbody.md)                                                                           | :heavy_minus_sign:                                                                                                                                                             | N/A                                                                                                                                                                            |
| `options`                                                                                                                                                                      | RequestOptions                                                                                                                                                                 | :heavy_minus_sign:                                                                                                                                                             | Used to set various options for making HTTP requests.                                                                                                                          |
| `options.fetchOptions`                                                                                                                                                         | [RequestInit](https://developer.mozilla.org/en-US/docs/Web/API/Request/Request#options)                                                                                        | :heavy_minus_sign:                                                                                                                                                             | Options that are passed to the underlying HTTP request. This can be used to inject extra headers for examples. All `Request` options, except `method` and `body`, are allowed. |


### Response

**Promise<[operations.SupplyConstructionResponse](../../models/operations/supplyconstructionresponse.md)>**
### Errors

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |
