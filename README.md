# se-spacetraders-typescript-sdk

<div align="left">
    <a href="https://speakeasyapi.dev/"><img src="https://custom-icon-badges.demolab.com/badge/-Built%20By%20Speakeasy-212015?style=for-the-badge&logoColor=FBE331&logo=speakeasy&labelColor=545454" /></a>
    <a href="https://opensource.org/licenses/MIT">
        <img src="https://img.shields.io/badge/License-MIT-blue.svg" style="width: 100px; height: 28px;" />
    </a>
</div>


## 🏗 **Welcome to your new SDK!** 🏗

It has been generated successfully based on your OpenAPI spec. However, it is not yet ready for production use. Here are some next steps:
- [ ] 🛠 Make your SDK feel handcrafted by [customizing it](https://www.speakeasyapi.dev/docs/customize-sdks)
- [ ] ♻️ Refine your SDK quickly by iterating locally with the [Speakeasy CLI](https://github.com/speakeasy-api/speakeasy)
- [ ] 🎁 Publish your SDK to package managers by [configuring automatic publishing](https://www.speakeasyapi.dev/docs/productionize-sdks/publish-sdks)
- [ ] ✨ When ready to productionize, delete this section from the README

<!-- Start SDK Installation [installation] -->
## SDK Installation

### NPM

```bash
npm add <UNSET>
```

### Yarn

```bash
yarn add <UNSET>
```
<!-- End SDK Installation [installation] -->

<!-- Start Requirements [requirements] -->
## Requirements

For supported JavaScript runtimes, please consult [RUNTIMES.md](RUNTIMES.md).
<!-- End Requirements [requirements] -->

<!-- Start SDK Example Usage [usage] -->
## SDK Example Usage

### Example

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
    const sdk = new SeTypescriptSDK();

    const result = await sdk.getStatus();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End SDK Example Usage [usage] -->

<!-- Start Available Resources and Operations [operations] -->
## Available Resources and Operations

### [SeTypescriptSDK](docs/sdks/setypescriptsdk/README.md)

* [getStatus](docs/sdks/setypescriptsdk/README.md#getstatus) - Get Status
* [register](docs/sdks/setypescriptsdk/README.md#register) - Register New Agent

### [systems](docs/sdks/systems/README.md)

* [getSystems](docs/sdks/systems/README.md#getsystems) - List Systems
* [getSystem](docs/sdks/systems/README.md#getsystem) - Get System
* [getSystemWaypoints](docs/sdks/systems/README.md#getsystemwaypoints) - List Waypoints in System
* [getWaypoint](docs/sdks/systems/README.md#getwaypoint) - Get Waypoint
* [getMarket](docs/sdks/systems/README.md#getmarket) - Get Market
* [getShipyard](docs/sdks/systems/README.md#getshipyard) - Get Shipyard
* [getJumpGate](docs/sdks/systems/README.md#getjumpgate) - Get Jump Gate
* [getConstruction](docs/sdks/systems/README.md#getconstruction) - Get Construction Site
* [supplyConstruction](docs/sdks/systems/README.md#supplyconstruction) - Supply Construction Site

### [factions](docs/sdks/factions/README.md)

* [getFactions](docs/sdks/factions/README.md#getfactions) - List Factions
* [getFaction](docs/sdks/factions/README.md#getfaction) - Get Faction

### [agents](docs/sdks/agents/README.md)

* [getMyAgent](docs/sdks/agents/README.md#getmyagent) - Get Agent
* [getAgents](docs/sdks/agents/README.md#getagents) - List Agents
* [getAgent](docs/sdks/agents/README.md#getagent) - Get Public Agent

### [contracts](docs/sdks/contracts/README.md)

* [getContracts](docs/sdks/contracts/README.md#getcontracts) - List Contracts
* [getContract](docs/sdks/contracts/README.md#getcontract) - Get Contract
* [acceptContract](docs/sdks/contracts/README.md#acceptcontract) - Accept Contract
* [deliverContract](docs/sdks/contracts/README.md#delivercontract) - Deliver Cargo to Contract
* [fulfillContract](docs/sdks/contracts/README.md#fulfillcontract) - Fulfill Contract

### [fleet](docs/sdks/fleet/README.md)

* [getMyShips](docs/sdks/fleet/README.md#getmyships) - List Ships
* [purchaseShip](docs/sdks/fleet/README.md#purchaseship) - Purchase Ship
* [getMyShip](docs/sdks/fleet/README.md#getmyship) - Get Ship
* [getMyShipCargo](docs/sdks/fleet/README.md#getmyshipcargo) - Get Ship Cargo
* [orbitShip](docs/sdks/fleet/README.md#orbitship) - Orbit Ship
* [shipRefine](docs/sdks/fleet/README.md#shiprefine) - Ship Refine
* [createChart](docs/sdks/fleet/README.md#createchart) - Create Chart
* [getShipCooldown](docs/sdks/fleet/README.md#getshipcooldown) - Get Ship Cooldown
* [dockShip](docs/sdks/fleet/README.md#dockship) - Dock Ship
* [createSurvey](docs/sdks/fleet/README.md#createsurvey) - Create Survey
* [extractResources](docs/sdks/fleet/README.md#extractresources) - Extract Resources
* [siphonResources](docs/sdks/fleet/README.md#siphonresources) - Siphon Resources
* [extractResourcesWithSurvey](docs/sdks/fleet/README.md#extractresourceswithsurvey) - Extract Resources with Survey
* [jettison](docs/sdks/fleet/README.md#jettison) - Jettison Cargo
* [jumpShip](docs/sdks/fleet/README.md#jumpship) - Jump Ship
* [navigateShip](docs/sdks/fleet/README.md#navigateship) - Navigate Ship
* [patchShipNav](docs/sdks/fleet/README.md#patchshipnav) - Patch Ship Nav
* [getShipNav](docs/sdks/fleet/README.md#getshipnav) - Get Ship Nav
* [warpShip](docs/sdks/fleet/README.md#warpship) - Warp Ship
* [sellCargo](docs/sdks/fleet/README.md#sellcargo) - Sell Cargo
* [createShipSystemScan](docs/sdks/fleet/README.md#createshipsystemscan) - Scan Systems
* [createShipWaypointScan](docs/sdks/fleet/README.md#createshipwaypointscan) - Scan Waypoints
* [createShipShipScan](docs/sdks/fleet/README.md#createshipshipscan) - Scan Ships
* [refuelShip](docs/sdks/fleet/README.md#refuelship) - Refuel Ship
* [purchaseCargo](docs/sdks/fleet/README.md#purchasecargo) - Purchase Cargo
* [transferCargo](docs/sdks/fleet/README.md#transfercargo) - Transfer Cargo
* [negotiateContract](docs/sdks/fleet/README.md#negotiatecontract) - Negotiate Contract
* [getMounts](docs/sdks/fleet/README.md#getmounts) - Get Mounts
* [installMount](docs/sdks/fleet/README.md#installmount) - Install Mount
* [removeMount](docs/sdks/fleet/README.md#removemount) - Remove Mount
* [getScrapShip](docs/sdks/fleet/README.md#getscrapship) - Get Scrap Ship
* [scrapShip](docs/sdks/fleet/README.md#scrapship) - Scrap Ship
* [getRepairShip](docs/sdks/fleet/README.md#getrepairship) - Get Repair Ship
* [repairShip](docs/sdks/fleet/README.md#repairship) - Repair Ship
<!-- End Available Resources and Operations [operations] -->

<!-- Start Error Handling [errors] -->
## Error Handling

All SDK methods return a response object or throw an error. If Error objects are specified in your OpenAPI Spec, the SDK will throw the appropriate Error type.

| Error Object    | Status Code     | Content Type    |
| --------------- | --------------- | --------------- |
| errors.SDKError | 4xx-5xx         | */*             |

Validation errors can also occur when either method arguments or data returned from the server do not match the expected format. The `SDKValidationError` that is thrown as a result will capture the raw value that failed validation in an attribute called `rawValue`. Additionally, a `pretty()` method is available on this error that can be used to log a nicely formatted string since validation errors can list many issues and the plain error string may be difficult read when debugging. 


```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";
import * as errors from "se-spacetraders-typescript-sdk/models/errors";

async function run() {
    const sdk = new SeTypescriptSDK();

    let result;
    try {
        result = await sdk.getStatus();
    } catch (err) {
        switch (true) {
            case err instanceof errors.SDKValidationError: {
                // Validation errors can be pretty-printed
                console.error(err.pretty());
                // Raw value may also be inspected
                console.error(err.rawValue);
                return;
            }
            default: {
                throw err;
            }
        }
    }

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Error Handling [errors] -->

<!-- Start Server Selection [server] -->
## Server Selection

### Select Server by Index

You can override the default server globally by passing a server index to the `serverIdx` optional parameter when initializing the SDK client instance. The selected server will then be used as the default on the operations that use it. This table lists the indexes associated with the available servers:

| # | Server | Variables |
| - | ------ | --------- |
| 0 | `https://api.spacetraders.io/v2` | None |

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
    const sdk = new SeTypescriptSDK({
        serverIdx: 0,
    });

    const result = await sdk.getStatus();

    // Handle the result
    console.log(result);
}

run();

```


### Override Server URL Per-Client

The default server can also be overridden globally by passing a URL to the `serverURL` optional parameter when initializing the SDK client instance. For example:

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
    const sdk = new SeTypescriptSDK({
        serverURL: "https://api.spacetraders.io/v2",
    });

    const result = await sdk.getStatus();

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Server Selection [server] -->

<!-- Start Custom HTTP Client [http-client] -->
## Custom HTTP Client

The TypeScript SDK makes API calls using an `HTTPClient` that wraps the native
[Fetch API](https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API). This
client is a thin wrapper around `fetch` and provides the ability to attach hooks
around the request lifecycle that can be used to modify the request or handle
errors and response.

The `HTTPClient` constructor takes an optional `fetcher` argument that can be
used to integrate a third-party HTTP client or when writing tests to mock out
the HTTP client and feed in fixtures.

The following example shows how to use the `"beforeRequest"` hook to to add a
custom header and a timeout to requests and how to use the `"requestError"` hook
to log errors:

```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";
import { HTTPClient } from "se-spacetraders-typescript-sdk/lib/http";

const httpClient = new HTTPClient({
  // fetcher takes a function that has the same signature as native `fetch`.
  fetcher: (request) => {
    return fetch(request);
  }
});

httpClient.addHook("beforeRequest", (request) => {
  const nextRequest = new Request(request, {
    signal: request.signal || AbortSignal.timeout(5000);
  });

  nextRequest.headers.set("x-custom-header", "custom value");

  return nextRequest;
});

httpClient.addHook("requestError", (error, request) => {
  console.group("Request Error");
  console.log("Reason:", `${error}`);
  console.log("Endpoint:", `${request.method} ${request.url}`);
  console.groupEnd();
});

const sdk = new SeTypescriptSDK({ httpClient });
```
<!-- End Custom HTTP Client [http-client] -->

<!-- Start Authentication [security] -->
## Authentication

### Per-Client Security Schemes

This SDK supports the following security scheme globally:

| Name         | Type         | Scheme       |
| ------------ | ------------ | ------------ |
| `agentToken` | http         | HTTP Bearer  |

To authenticate with the API the `agentToken` parameter must be set when initializing the SDK client instance. For example:
```typescript
import { SeTypescriptSDK } from "se-spacetraders-typescript-sdk";

async function run() {
    const sdk = new SeTypescriptSDK({
        agentToken: "<YOUR_BEARER_TOKEN_HERE>",
    });

    const result = await sdk.getStatus();

    // Handle the result
    console.log(result);
}

run();

```

### Per-Operation Security Schemes

Some operations in this SDK require the security scheme to be specified at the request level. For example:
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

    const result = await sdk.systems.supplyConstruction(
        operationSecurity,
        systemSymbol,
        waypointSymbol,
        requestBody
    );

    // Handle the result
    console.log(result);
}

run();

```
<!-- End Authentication [security] -->

<!-- Placeholder for Future Speakeasy SDK Sections -->

# Development

## Maturity

This SDK is in beta, and there may be breaking changes between versions without a major version update. Therefore, we recommend pinning usage
to a specific package version. This way, you can install the same version each time without breaking changes unless you are intentionally
looking for the latest version.

## Contributions

While we value open-source contributions to this SDK, this library is generated programmatically.
Feel free to open a PR or a Github issue as a proof of concept and we'll do our best to include it in a future release!

### SDK Created by [Speakeasy](https://docs.speakeasyapi.dev/docs/using-speakeasy/client-sdks)
