# ContractTermsJson

The terms to fulfill the contract.


## Fields

| Field                                                                                         | Type                                                                                          | Required                                                                                      | Description                                                                                   |
| --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------- |
| `deadline`                                                                                    | [Date](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date) | :heavy_check_mark:                                                                            | The deadline for the contract.                                                                |
| `payment`                                                                                     | [components.ContractPaymentJson](../../models/components/contractpaymentjson.md)              | :heavy_check_mark:                                                                            | Payments for the contract.                                                                    |
| `deliver`                                                                                     | [components.ContractDeliverGoodJson](../../models/components/contractdelivergoodjson.md)[]    | :heavy_minus_sign:                                                                            | The cargo that needs to be delivered to fulfill the contract.                                 |