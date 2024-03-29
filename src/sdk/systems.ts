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

export class Systems extends ClientSDK {
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
     * List Systems
     *
     * @remarks
     * Return a paginated list of all systems.
     */
    async getSystems(
        page?: number | undefined,
        limit?: number | undefined,
        options?: RequestOptions
    ): Promise<operations.GetSystemsResponse> {
        const input$: operations.GetSystemsRequest = {
            page: page,
            limit: limit,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetSystemsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const path$ = this.templateURLComponent("/systems")();

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const context = { operationID: "get-systems", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetSystemsResponse$.inboundSchema.parse({
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
     * Get System
     *
     * @remarks
     * Get the details of a system.
     */
    async getSystem(
        systemSymbol: string | undefined,
        options?: RequestOptions
    ): Promise<operations.GetSystemResponse> {
        const input$: operations.GetSystemRequest = {
            systemSymbol: systemSymbol,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetSystemRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/systems/{systemSymbol}")(pathParams$);

        const query$ = "";

        const context = { operationID: "get-system", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetSystemResponse$.inboundSchema.parse({
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
     * List Waypoints in System
     *
     * @remarks
     * Return a paginated list of all of the waypoints for a given system.
     *
     * If a waypoint is uncharted, it will return the `Uncharted` trait instead of its actual traits.
     */
    async getSystemWaypoints(
        input: operations.GetSystemWaypointsRequest,
        options?: RequestOptions
    ): Promise<operations.GetSystemWaypointsResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.GetSystemWaypointsRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent("/systems/{systemSymbol}/waypoints")(pathParams$);

        const query$ = [
            enc$.encodeForm("limit", payload$.limit, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("page", payload$.page, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("traits", payload$.traits, { explode: true, charEncoding: "percent" }),
            enc$.encodeForm("type", payload$.type, { explode: true, charEncoding: "percent" }),
        ]
            .filter(Boolean)
            .join("&");

        const context = {
            operationID: "get-system-waypoints",
            oAuth2Scopes: [],
            securitySource: null,
        };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetSystemWaypointsResponse$.inboundSchema.parse({
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
     * Get Waypoint
     *
     * @remarks
     * View the details of a waypoint.
     *
     * If the waypoint is uncharted, it will return the 'Uncharted' trait instead of its actual traits.
     */
    async getWaypoint(
        systemSymbol: string,
        waypointSymbol: string,
        options?: RequestOptions
    ): Promise<operations.GetWaypointResponse> {
        const input$: operations.GetWaypointRequest = {
            systemSymbol: systemSymbol,
            waypointSymbol: waypointSymbol,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetWaypointRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
            waypointSymbol: enc$.encodeSimple("waypointSymbol", payload$.waypointSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/systems/{systemSymbol}/waypoints/{waypointSymbol}"
        )(pathParams$);

        const query$ = "";

        const context = { operationID: "get-waypoint", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetWaypointResponse$.inboundSchema.parse({
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
     * Get Market
     *
     * @remarks
     * Retrieve imports, exports and exchange data from a marketplace. Requires a waypoint that has the `Marketplace` trait to use.
     *
     * Send a ship to the waypoint to access trade good prices and recent transactions. Refer to the [Market Overview page](https://docs.spacetraders.io/game-concepts/markets) to gain better a understanding of the market in the game.
     */
    async getMarket(
        systemSymbol: string,
        waypointSymbol: string,
        options?: RequestOptions
    ): Promise<operations.GetMarketResponse> {
        const input$: operations.GetMarketRequest = {
            systemSymbol: systemSymbol,
            waypointSymbol: waypointSymbol,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetMarketRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
            waypointSymbol: enc$.encodeSimple("waypointSymbol", payload$.waypointSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/systems/{systemSymbol}/waypoints/{waypointSymbol}/market"
        )(pathParams$);

        const query$ = "";

        const context = { operationID: "get-market", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetMarketResponse$.inboundSchema.parse({
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
     * Get Shipyard
     *
     * @remarks
     * Get the shipyard for a waypoint. Requires a waypoint that has the `Shipyard` trait to use. Send a ship to the waypoint to access data on ships that are currently available for purchase and recent transactions.
     */
    async getShipyard(
        systemSymbol: string,
        waypointSymbol: string,
        options?: RequestOptions
    ): Promise<operations.GetShipyardResponse> {
        const input$: operations.GetShipyardRequest = {
            systemSymbol: systemSymbol,
            waypointSymbol: waypointSymbol,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetShipyardRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
            waypointSymbol: enc$.encodeSimple("waypointSymbol", payload$.waypointSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/systems/{systemSymbol}/waypoints/{waypointSymbol}/shipyard"
        )(pathParams$);

        const query$ = "";

        const context = { operationID: "get-shipyard", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetShipyardResponse$.inboundSchema.parse({
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
     * Get Jump Gate
     *
     * @remarks
     * Get jump gate details for a waypoint. Requires a waypoint of type `JUMP_GATE` to use.
     *
     * Waypoints connected to this jump gate can be
     */
    async getJumpGate(
        systemSymbol: string,
        waypointSymbol: string,
        options?: RequestOptions
    ): Promise<operations.GetJumpGateResponse> {
        const input$: operations.GetJumpGateRequest = {
            systemSymbol: systemSymbol,
            waypointSymbol: waypointSymbol,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetJumpGateRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
            waypointSymbol: enc$.encodeSimple("waypointSymbol", payload$.waypointSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/systems/{systemSymbol}/waypoints/{waypointSymbol}/jump-gate"
        )(pathParams$);

        const query$ = "";

        const context = { operationID: "get-jump-gate", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetJumpGateResponse$.inboundSchema.parse({
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
     * Get Construction Site
     *
     * @remarks
     * Get construction details for a waypoint. Requires a waypoint with a property of `isUnderConstruction` to be true.
     */
    async getConstruction(
        systemSymbol: string,
        waypointSymbol: string,
        options?: RequestOptions
    ): Promise<operations.GetConstructionResponse> {
        const input$: operations.GetConstructionRequest = {
            systemSymbol: systemSymbol,
            waypointSymbol: waypointSymbol,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.GetConstructionRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = null;

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
            waypointSymbol: enc$.encodeSimple("waypointSymbol", payload$.waypointSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction"
        )(pathParams$);

        const query$ = "";

        const context = { operationID: "get-construction", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.GetConstructionResponse$.inboundSchema.parse({
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
     * Supply Construction Site
     *
     * @remarks
     * Supply a construction site with the specified good. Requires a waypoint with a property of `isUnderConstruction` to be true.
     *
     * The good must be in your ship's cargo. The good will be removed from your ship's cargo and added to the construction site's materials.
     */
    async supplyConstruction(
        security: operations.SupplyConstructionSecurity,
        systemSymbol: string,
        waypointSymbol: string,
        requestBody?: operations.SupplyConstructionRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.SupplyConstructionResponse> {
        const input$: operations.SupplyConstructionRequest = {
            systemSymbol: systemSymbol,
            waypointSymbol: waypointSymbol,
            requestBody: requestBody,
        };
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input$,
            (value$) => operations.SupplyConstructionRequest$.outboundSchema.parse(value$),
            "Input validation failed"
        );
        const body$ = enc$.encodeJSON("body", payload$.RequestBody, { explode: true });

        const pathParams$ = {
            systemSymbol: enc$.encodeSimple("systemSymbol", payload$.systemSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
            waypointSymbol: enc$.encodeSimple("waypointSymbol", payload$.waypointSymbol, {
                explode: false,
                charEncoding: "percent",
            }),
        };
        const path$ = this.templateURLComponent(
            "/systems/{systemSymbol}/waypoints/{waypointSymbol}/construction/supply"
        )(pathParams$);

        const query$ = "";

        const security$: SecurityInput[][] = [
            [{ value: security?.agentToken, fieldName: "Authorization", type: "http:bearer" }],
        ];
        const securitySettings$ = this.resolveSecurity(...security$);
        const context = {
            operationID: "supply-construction",
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

        if (this.matchResponse(response, 201, "application/json")) {
            const responseBody = await response.json();
            const result = schemas$.parse(
                responseBody,
                (val$) => {
                    return operations.SupplyConstructionResponse$.inboundSchema.parse({
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
