/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetShipNavSecurity = {
    agentToken: string;
};

export type GetShipNavRequest = {
    /**
     * The ship symbol.
     */
    shipSymbol: string;
};

/**
 * The current nav status of the ship.
 */
export type GetShipNavResponseBody = {
    /**
     * The navigation information of the ship.
     */
    data: components.ShipNavJson;
};

export type GetShipNavResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The current nav status of the ship.
     */
    object?: GetShipNavResponseBody | undefined;
};

/** @internal */
export namespace GetShipNavSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<GetShipNavSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShipNavSecurity> = z
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
export namespace GetShipNavRequest$ {
    export type Inbound = {
        shipSymbol: string;
    };

    export const inboundSchema: z.ZodType<GetShipNavRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShipNavRequest> = z
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
export namespace GetShipNavResponseBody$ {
    export type Inbound = {
        data: components.ShipNavJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetShipNavResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: components.ShipNavJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: components.ShipNavJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShipNavResponseBody> = z
        .object({
            data: components.ShipNavJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetShipNavResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetShipNavResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetShipNavResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetShipNavResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetShipNavResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetShipNavResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetShipNavResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
