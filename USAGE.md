<!-- Start SDK Example Usage [usage] -->
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