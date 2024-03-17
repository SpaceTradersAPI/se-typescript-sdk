/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetMyShipsSecurity = {
    agentToken: string;
};

export type GetMyShipsRequest = {
    /**
     * What entry offset to request
     */
    page?: number | undefined;
    /**
     * How many entries to return per page
     */
    limit?: number | undefined;
};

/**
 * Succesfully listed ships.
 */
export type GetMyShipsResponseBody = {
    data: Array<components.ShipJson>;
    /**
     * Meta details for pagination.
     */
    meta: components.MetaJson;
};

export type GetMyShipsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Succesfully listed ships.
     */
    object?: GetMyShipsResponseBody | undefined;
};

/** @internal */
export namespace GetMyShipsSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<GetMyShipsSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipsSecurity> = z
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
export namespace GetMyShipsRequest$ {
    export type Inbound = {
        page?: number | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetMyShipsRequest, z.ZodTypeDef, Inbound> = z
        .object({
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
        })
        .transform((v) => {
            return {
                page: v.page,
                limit: v.limit,
            };
        });

    export type Outbound = {
        page: number;
        limit: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipsRequest> = z
        .object({
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
        })
        .transform((v) => {
            return {
                page: v.page,
                limit: v.limit,
            };
        });
}

/** @internal */
export namespace GetMyShipsResponseBody$ {
    export type Inbound = {
        data: Array<components.ShipJson$.Inbound>;
        meta: components.MetaJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetMyShipsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(components.ShipJson$.inboundSchema),
            meta: components.MetaJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: Array<components.ShipJson$.Outbound>;
        meta: components.MetaJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipsResponseBody> = z
        .object({
            data: z.array(components.ShipJson$.outboundSchema),
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
export namespace GetMyShipsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetMyShipsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetMyShipsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetMyShipsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetMyShipsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetMyShipsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
