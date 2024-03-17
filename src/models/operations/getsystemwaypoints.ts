/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

/**
 * Filter waypoints by one or more traits.
 */
export type Traits = components.WaypointTraitSymbolJson | Array<components.WaypointTraitSymbolJson>;

export type GetSystemWaypointsRequest = {
    /**
     * The system symbol
     */
    systemSymbol: string;
    /**
     * What entry offset to request
     */
    page?: number | undefined;
    /**
     * How many entries to return per page
     */
    limit?: number | undefined;
    /**
     * Filter waypoints by type.
     */
    type?: components.WaypointTypeJson | undefined;
    /**
     * Filter waypoints by one or more traits.
     */
    traits?:
        | components.WaypointTraitSymbolJson
        | Array<components.WaypointTraitSymbolJson>
        | undefined;
};

/**
 * Successfully fetched all waypoints in the system.
 */
export type GetSystemWaypointsResponseBody = {
    data: Array<components.WaypointJson>;
    /**
     * Meta details for pagination.
     */
    meta: components.MetaJson;
};

export type GetSystemWaypointsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched all waypoints in the system.
     */
    object?: GetSystemWaypointsResponseBody | undefined;
};

/** @internal */
export namespace Traits$ {
    export type Inbound =
        | components.WaypointTraitSymbolJson
        | Array<components.WaypointTraitSymbolJson>;

    export type Outbound =
        | components.WaypointTraitSymbolJson
        | Array<components.WaypointTraitSymbolJson>;
    export const inboundSchema: z.ZodType<Traits, z.ZodTypeDef, Inbound> = z.union([
        components.WaypointTraitSymbolJson$,
        z.array(components.WaypointTraitSymbolJson$),
    ]);
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, Traits> = z.union([
        components.WaypointTraitSymbolJson$,
        z.array(components.WaypointTraitSymbolJson$),
    ]);
}

/** @internal */
export namespace GetSystemWaypointsRequest$ {
    export type Inbound = {
        systemSymbol: string;
        page?: number | undefined;
        limit?: number | undefined;
        type?: components.WaypointTypeJson | undefined;
        traits?:
            | components.WaypointTraitSymbolJson
            | Array<components.WaypointTraitSymbolJson>
            | undefined;
    };

    export const inboundSchema: z.ZodType<GetSystemWaypointsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            systemSymbol: z.string(),
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
            type: components.WaypointTypeJson$.optional(),
            traits: z
                .union([
                    components.WaypointTraitSymbolJson$,
                    z.array(components.WaypointTraitSymbolJson$),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
                page: v.page,
                limit: v.limit,
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.traits === undefined ? null : { traits: v.traits }),
            };
        });

    export type Outbound = {
        systemSymbol: string;
        page: number;
        limit: number;
        type?: components.WaypointTypeJson | undefined;
        traits?:
            | components.WaypointTraitSymbolJson
            | Array<components.WaypointTraitSymbolJson>
            | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSystemWaypointsRequest> = z
        .object({
            systemSymbol: z.string(),
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
            type: components.WaypointTypeJson$.optional(),
            traits: z
                .union([
                    components.WaypointTraitSymbolJson$,
                    z.array(components.WaypointTraitSymbolJson$),
                ])
                .optional(),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
                page: v.page,
                limit: v.limit,
                ...(v.type === undefined ? null : { type: v.type }),
                ...(v.traits === undefined ? null : { traits: v.traits }),
            };
        });
}

/** @internal */
export namespace GetSystemWaypointsResponseBody$ {
    export type Inbound = {
        data: Array<components.WaypointJson$.Inbound>;
        meta: components.MetaJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetSystemWaypointsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(components.WaypointJson$.inboundSchema),
            meta: components.MetaJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: Array<components.WaypointJson$.Outbound>;
        meta: components.MetaJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSystemWaypointsResponseBody> =
        z
            .object({
                data: z.array(components.WaypointJson$.outboundSchema),
                meta: components.MetaJson$.outboundSchema,
            })
            .transform((v) => {
                return {
                    data: v.data,
                    meta: v.meta,
                };
            });
}

/** @internal */
export namespace GetSystemWaypointsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetSystemWaypointsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetSystemWaypointsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetSystemWaypointsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetSystemWaypointsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetSystemWaypointsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetSystemWaypointsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
