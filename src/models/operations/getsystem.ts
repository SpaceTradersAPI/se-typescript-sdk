/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetSystemRequest = {
    /**
     * The system symbol
     */
    systemSymbol?: string | undefined;
};

/**
 * Successfully fetched the system.
 */
export type GetSystemResponseBody = {
    data: components.SystemJson;
};

export type GetSystemResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched the system.
     */
    object?: GetSystemResponseBody | undefined;
};

/** @internal */
export namespace GetSystemRequest$ {
    export type Inbound = {
        systemSymbol?: string | undefined;
    };

    export const inboundSchema: z.ZodType<GetSystemRequest, z.ZodTypeDef, Inbound> = z
        .object({
            systemSymbol: z.string().default("X1-OE"),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
            };
        });

    export type Outbound = {
        systemSymbol: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSystemRequest> = z
        .object({
            systemSymbol: z.string().default("X1-OE"),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
            };
        });
}

/** @internal */
export namespace GetSystemResponseBody$ {
    export type Inbound = {
        data: components.SystemJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetSystemResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.SystemJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.SystemJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSystemResponseBody> = z
        .object({
            data: components.SystemJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetSystemResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetSystemResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSystemResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetSystemResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetSystemResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSystemResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetSystemResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}