/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetWaypointRequest = {
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
 * Successfully fetched waypoint.
 */
export type GetWaypointResponseBody = {
    /**
     * A waypoint is a location that ships can travel to such as a Planet, Moon or Space Station.
     */
    data: components.WaypointJson;
};

export type GetWaypointResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched waypoint.
     */
    object?: GetWaypointResponseBody | undefined;
};

/** @internal */
export namespace GetWaypointRequest$ {
    export type Inbound = {
        systemSymbol: string;
        waypointSymbol: string;
    };

    export const inboundSchema: z.ZodType<GetWaypointRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWaypointRequest> = z
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
export namespace GetWaypointResponseBody$ {
    export type Inbound = {
        data: components.WaypointJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetWaypointResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.WaypointJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.WaypointJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWaypointResponseBody> = z
        .object({
            data: components.WaypointJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetWaypointResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetWaypointResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetWaypointResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetWaypointResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetWaypointResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetWaypointResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetWaypointResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
