/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetMyAgentSecurity = {
    agentToken: string;
};

/**
 * Successfully fetched agent details.
 */
export type GetMyAgentResponseBody = {
    /**
     * Agent details.
     */
    data: components.AgentJson;
};

export type GetMyAgentResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched agent details.
     */
    object?: GetMyAgentResponseBody | undefined;
};

/** @internal */
export namespace GetMyAgentSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<GetMyAgentSecurity, z.ZodTypeDef, Inbound> = z
        .object({
            AgentToken: z.string(),
        })
        .transform((v) => {
            return {
                agentToken: v.AgentToken,
            };
        });

    export type Outbound = {
        AgentToken: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyAgentSecurity> = z
        .object({
            agentToken: z.string(),
        })
        .transform((v) => {
            return {
                AgentToken: v.agentToken,
            };
        });
}

/** @internal */
export namespace GetMyAgentResponseBody$ {
    export type Inbound = {
        data: components.AgentJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetMyAgentResponseBody, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyAgentResponseBody> = z
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
export namespace GetMyAgentResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetMyAgentResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetMyAgentResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetMyAgentResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetMyAgentResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyAgentResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetMyAgentResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
