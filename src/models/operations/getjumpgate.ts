/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetJumpGateRequest = {
    /**
     * The system symbol
     */
    systemSymbol: string;
    /**
     * The waypoint symbol
     */
    waypointSymbol: string;
};

/**
 * Successfully fetched jump gate.
 */
export type GetJumpGateResponseBody = {
    data: components.JumpGateJson;
};

export type GetJumpGateResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched jump gate.
     */
    object?: GetJumpGateResponseBody | undefined;
};

/** @internal */
export namespace GetJumpGateRequest$ {
    export type Inbound = {
        systemSymbol: string;
        waypointSymbol: string;
    };

    export const inboundSchema: z.ZodType<GetJumpGateRequest, z.ZodTypeDef, Inbound> = z
        .object({
            systemSymbol: z.string(),
            waypointSymbol: z.string(),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
                waypointSymbol: v.waypointSymbol,
            };
        });

    export type Outbound = {
        systemSymbol: string;
        waypointSymbol: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJumpGateRequest> = z
        .object({
            systemSymbol: z.string(),
            waypointSymbol: z.string(),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
                waypointSymbol: v.waypointSymbol,
            };
        });
}

/** @internal */
export namespace GetJumpGateResponseBody$ {
    export type Inbound = {
        data: components.JumpGateJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetJumpGateResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.JumpGateJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.JumpGateJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJumpGateResponseBody> = z
        .object({
            data: components.JumpGateJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetJumpGateResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetJumpGateResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetJumpGateResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetJumpGateResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetJumpGateResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetJumpGateResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetJumpGateResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
