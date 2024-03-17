/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetShipyardRequest = {
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
 * Successfully fetched the shipyard.
 */
export type GetShipyardResponseBody = {
    data: components.ShipyardJson;
};

export type GetShipyardResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched the shipyard.
     */
    object?: GetShipyardResponseBody | undefined;
};

/** @internal */
export namespace GetShipyardRequest$ {
    export type Inbound = {
        systemSymbol: string;
        waypointSymbol: string;
    };

    export const inboundSchema: z.ZodType<GetShipyardRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShipyardRequest> = z
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
export namespace GetShipyardResponseBody$ {
    export type Inbound = {
        data: components.ShipyardJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetShipyardResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.ShipyardJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.ShipyardJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShipyardResponseBody> = z
        .object({
            data: components.ShipyardJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetShipyardResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetShipyardResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetShipyardResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetShipyardResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetShipyardResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShipyardResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetShipyardResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}