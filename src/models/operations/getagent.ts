/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetAgentRequest = {
    /**
     * The agent symbol
     */
    agentSymbol?: string | undefined;
};

/**
 * Successfully fetched agent details.
 */
export type GetAgentResponseBody = {
    /**
     * Agent details.
     */
    data: components.AgentJson;
};

export type GetAgentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched agent details.
     */
    object?: GetAgentResponseBody | undefined;
};

/** @internal */
export namespace GetAgentRequest$ {
    export type Inbound = {
        agentSymbol?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetAgentRequest, z.ZodTypeDef, Inbound> = z
        .object({
            agentSymbol: z.string().default("FEBA66"),
        })
        .transform((v) => {
            return {
                agentSymbol: v.agentSymbol,
            };
        });

    export type Outbound = {
        agentSymbol: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAgentRequest> = z
        .object({
            agentSymbol: z.string().default("FEBA66"),
        })
        .transform((v) => {
            return {
                agentSymbol: v.agentSymbol,
            };
        });
}

/** @internal */
export namespace GetAgentResponseBody$ {
    export type Inbound = {
        data: components.AgentJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetAgentResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.AgentJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.AgentJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAgentResponseBody> = z
        .object({
            data: components.AgentJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetAgentResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetAgentResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetAgentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetAgentResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetAgentResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetAgentResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetAgentResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
