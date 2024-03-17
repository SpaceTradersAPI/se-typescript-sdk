/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { SDKHooks } from "../hooks";
import { SDK_METADATA, SDKOptions, serverURLFromOptions } from "../lib/config";
import * as enc$ from "../lib/encodings";
import { HTTPClient } from "../lib/http";
import * as schemas$ from "../lib/schemas";
import { ClientSDK, RequestOptions } from "../lib/sdks";
import * as errors from "../models/errors";
import * as operations from "../models/operations";
import { Agents } from "./agents";
import { Contracts } from "./contracts";
import { Factions } from "./factions";
import { Fleet } from "./fleet";
import { Systems } from "./systems";

export class SeTypescriptSDK extends ClientSDK {
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

    private _systems?: Systems;
    get systems() {
        return (this._systems ??= new Systems(this.options$));
    }

    private _factions?: Factions;
    get factions() {
        return (this._factions ??= new Factions(this.options$));
    }

    private _agents?: Agents;
    get agents() {
        return (this._agents ??= new Agents(this.options$));
    }

    private _contracts?: Contracts;
    get contracts() {
        return (this._contracts ??= new Contracts(this.options$));
    }

    private _fleet?: Fleet;
    get fleet() {
        return (this._fleet ??= new Fleet(this.options$));
    }

    /**
     * Get Status
     *
     * @remarks
     * Return the status of the game server.
     * This also includes a few global elements, such as announcements, server reset dates and leaderboards.
     */
    async getStatus(options?: RequestOptions): Promise<operations.GetStatusResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Accept", "application/json");

        const path$ = this.templateURLComponent("/")();

        const query$ = "";

        const context = { operationID: "get-status", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "GET", path: path$, headers: headers$, query: query$ },
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
                    return operations.GetStatusResponse$.inboundSchema.parse({
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
     * Register New Agent
     *
     * @remarks
     * Creates a new agent and ties it to an account.
     * The agent symbol must consist of a 3-14 character string, and will be used to represent your agent. This symbol will prefix the symbol of every ship you own. Agent symbols will be cast to all uppercase characters.
     *
     * This new agent will be tied to a starting faction of your choice, which determines your starting location, and will be granted an authorization token, a contract with their starting faction, a command ship that can fly across space with advanced capabilities, a small probe ship that can be used for reconnaissance, and 150,000 credits.
     *
     * > #### Keep your token safe and secure
     * >
     * > Save your token during the alpha phase. There is no way to regenerate this token without starting a new agent. In the future you will be able to generate and manage your tokens from the SpaceTraders website.
     *
     * If you are new to SpaceTraders, It is recommended to register with the COSMIC faction, a faction that is well connected to the rest of the universe. After registering, you should try our interactive [quickstart guide](https://docs.spacetraders.io/quickstart/new-game) which will walk you through basic API requests in just a few minutes.
     */
    async register(
        input: operations.RegisterRequestBody | undefined,
        options?: RequestOptions
    ): Promise<operations.RegisterResponse> {
        const headers$ = new Headers();
        headers$.set("user-agent", SDK_METADATA.userAgent);
        headers$.set("Content-Type", "application/json");
        headers$.set("Accept", "application/json");

        const payload$ = schemas$.parse(
            input,
            (value$) => operations.RegisterRequestBody$.outboundSchema.optional().parse(value$),
            "Input validation failed"
        );
        const body$ =
            payload$ === undefined ? null : enc$.encodeJSON("body", payload$, { explode: true });

        const path$ = this.templateURLComponent("/register")();

        const query$ = "";

        const context = { operationID: "register", oAuth2Scopes: [], securitySource: null };

        const doOptions = { context, errorCodes: ["4XX", "5XX"] };
        const request = this.createRequest$(
            { method: "POST", path: path$, headers: headers$, query: query$, body: body$ },
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
                    return operations.RegisterResponse$.inboundSchema.parse({
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