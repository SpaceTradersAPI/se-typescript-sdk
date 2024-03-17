/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetMyShipSecurity = {
    agentToken: string;
};

export type GetMyShipRequest = {
    /**
     * The symbol of the ship.
     */
    shipSymbol: string;
};

/**
 * Successfully fetched ship.
 */
export type GetMyShipResponseBody = {
    /**
     * Ship details.
     */
    data: components.ShipJson;
};

export type GetMyShipResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fetched ship.
     */
    object?: GetMyShipResponseBody | undefined;
};

/** @internal */
export namespace GetMyShipSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<GetMyShipSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipSecurity> = z
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
export namespace GetMyShipRequest$ {
    export type Inbound = {
        shipSymbol: string;
    };

    export const inboundSchema: z.ZodType<GetMyShipRequest, z.ZodTypeDef, Inbound> = z
        .object({
            shipSymbol: z.string(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
            };
        });

    export type Outbound = {
        shipSymbol: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipRequest> = z
        .object({
            shipSymbol: z.string(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
            };
        });
}

/** @internal */
export namespace GetMyShipResponseBody$ {
    export type Inbound = {
        data: components.ShipJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetMyShipResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.ShipJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.ShipJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipResponseBody> = z
        .object({
            data: components.ShipJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetMyShipResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetMyShipResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetMyShipResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetMyShipResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetMyShipResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetMyShipResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetMyShipResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
