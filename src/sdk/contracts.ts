/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import { SecurityInput } from "../lib/security";
import * as errors from "../models/errors";
import * as operations from "../models/operations";

export class Contracts extends ClientSDK {
    private readonly options$: SDKOptions & { hooks?: SDKHooks };

    constructor(options: SDKOptions = {}) {
        const opt = options as unknown;
        let hooks: SDKHooks;
        if (
            typeof opt === "object" &&
            opt != null &&
            "hooks" in opt &&
            opt.hooks instanceof SDKHooks
        ) {
            hooks = opt.hooks;
        } else {
            hooks = new SDKHooks();
        }

        super({
            client: options.httpClient || new HTTPClient(),
            baseURL: serverURLFromOptions(options),
            hooks,
        });

        this.options$ = { ...options, hooks };
        void this.options$;
    }

    /**
     * List Contracts
     *
     * @remarks
     * Return a paginated list of all your contracts.
     */
    async getContracts(
        security: operations.GetContractsSecurity,
        page?: number | undefined,
        limit?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GetContractsResponse> {
        const input$: operations.GetContractsRequest = {
            page: page,
            limit: limit,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetContractsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/my/contracts")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const security$: SecurityInput[][] = [
            [{ value: security?.agentToken, fieldName: "Authorization", type: "http:bearer" }],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "get-contracts",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetContractsResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Get Contract
     *
     * @remarks
     * Get the details of a contract by ID.
     */
    async getContract(
        security: operations.GetContractSecurity,
        contractId: string,
        options?: RequestOptions
    ): Promise<operations.GetContractResponse> {
        const input$: operations.GetContractRequest = {
            contractId: contractId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetContractRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            contractId: enc$.encodeSimple("contractId", payload$.contractId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/my/contracts/{contractId}")(pathParams$);

        const query$ = "";

        const security$: SecurityInput[][] = [
            [{ value: security?.agentToken, fieldName: "Authorization", type: "http:bearer" }],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "get-contract",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "GET",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.GetContractResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Accept Contract
     *
     * @remarks
     * Accept a contract by ID.
     *
     * You can only accept contracts that were offered to you, were not accepted yet, and whose deadlines has not passed yet.
     */
    async acceptContract(
        security: operations.AcceptContractSecurity,
        contractId: string,
        options?: RequestOptions
    ): Promise<operations.AcceptContractResponse> {
        const input$: operations.AcceptContractRequest = {
            contractId: contractId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.AcceptContractRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            contractId: enc$.encodeSimple("contractId", payload$.contractId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/my/contracts/{contractId}/accept")(pathParams$);

        const query$ = "";

        const security$: SecurityInput[][] = [
            [{ value: security?.agentToken, fieldName: "Authorization", type: "http:bearer" }],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "accept-contract",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.AcceptContractResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Deliver Cargo to Contract
     *
     * @remarks
     * Deliver cargo to a contract.
     *
     * In order to use this API, a ship must be at the delivery location (denoted in the delivery terms as `destinationSymbol` of a contract) and must have a number of units of a good required by this contract in its cargo.
     *
     * Cargo that was delivered will be removed from the ship's cargo.
     */
    async deliverContract(
        security: operations.DeliverContractSecurity,
        contractId: string,
        requestBody?: operations.DeliverContractRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.DeliverContractResponse> {
        const input$: operations.DeliverContractRequest = {
            contractId: contractId,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.DeliverContractRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            contractId: enc$.encodeSimple("contractId", payload$.contractId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/my/contracts/{contractId}/deliver")(pathParams$);

        const query$ = "";

        const security$: SecurityInput[][] = [
            [{ value: security?.agentToken, fieldName: "Authorization", type: "http:bearer" }],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "deliver-contract",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.DeliverContractResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }

    /**
     * Fulfill Contract
     *
     * @remarks
     * Fulfill a contract. Can only be used on contracts that have all of their delivery terms fulfilled.
     */
    async fulfillContract(
        security: operations.FulfillContractSecurity,
        contractId: string,
        options?: RequestOptions
    ): Promise<operations.FulfillContractResponse> {
        const input$: operations.FulfillContractRequest = {
            contractId: contractId,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.FulfillContractRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            contractId: enc$.encodeSimple("contractId", payload$.contractId, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/my/contracts/{contractId}/fulfill")(pathParams$);

        const query$ = "";

        const security$: SecurityInput[][] = [
            [{ value: security?.agentToken, fieldName: "Authorization", type: "http:bearer" }],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "fulfill-contract",
            oAuth2Scopes: [],
            securitySource: security$,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            {
                security: securitySettings$,
                method: "POST",
                path: path$,
                headers: headers$,
                query: query$,
                body: body$,
            },
            options
        );

        const response = await this.do$(request, doOptions);

        const responseFields$ = {
            HttpMeta: {
                Response: response,
                Request: request,
            },
        };

        if (this.matchResponse(response, 200, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.FulfillContractResponse$.inboundSchema.parse({
                        ...responseFields$,
                        object: val$,
                    });
                },
                "Response validation failed"
            );
            return result;
        } else {
            throw new errors.SDKError("Unexpected API response", { response, request });
        }
    }
}
