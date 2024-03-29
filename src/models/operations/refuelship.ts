/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type RefuelShipSecurity = {
    agentToken: string;
};

export type RefuelShipRequestBody = {
    /**
     * The amount of fuel to fill in the ship's tanks. When not specified, the ship will be refueled to its maximum fuel capacity. If the amount specified is greater than the ship's remaining capacity, the ship will only be refueled to its maximum fuel capacity. The amount specified is not in market units but in ship fuel units.
     */
    units?: number | undefined;
    /**
     * Wether to use the FUEL thats in your cargo or not. Default: false
     */
    fromCargo?: boolean | undefined;
};

export type RefuelShipRequest = {
    /**
     * The ship symbol.
     */
    shipSymbol: string;
    requestBody?: RefuelShipRequestBody | undefined;
};

export type RefuelShipData = {
    /**
     * Agent details.
     */
    agent: components.AgentJson;
    /**
     * Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action.
     */
    fuel: components.ShipFuelJson;
    /**
     * Result of a transaction with a market.
     */
    transaction: components.MarketTransactionJson;
};

/**
 * Refueled successfully.
 */
export type RefuelShipResponseBody = {
    data: RefuelShipData;
};

export type RefuelShipResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Refueled successfully.
     */
    object?: RefuelShipResponseBody | undefined;
};

/** @internal */
export namespace RefuelShipSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<RefuelShipSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefuelShipSecurity> = z
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
export namespace RefuelShipRequestBody$ {
    export type Inbound = {
        units?: number | undefined;
        fromCargo?: boolean | undefined;
    };

    export const inboundSchema: z.ZodType<RefuelShipRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            units: z.number().int().optional(),
            fromCargo: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.units === undefined ? null : { units: v.units }),
                ...(v.fromCargo === undefined ? null : { fromCargo: v.fromCargo }),
            };
        });

    export type Outbound = {
        units?: number | undefined;
        fromCargo?: boolean | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefuelShipRequestBody> = z
        .object({
            units: z.number().int().optional(),
            fromCargo: z.boolean().optional(),
        })
        .transform((v) => {
            return {
                ...(v.units === undefined ? null : { units: v.units }),
                ...(v.fromCargo === undefined ? null : { fromCargo: v.fromCargo }),
            };
        });
}

/** @internal */
export namespace RefuelShipRequest$ {
    export type Inbound = {
        shipSymbol: string;
        RequestBody?: RefuelShipRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<RefuelShipRequest, z.ZodTypeDef, Inbound> = z
        .object({
            shipSymbol: z.string(),
            RequestBody: z.lazy(() => RefuelShipRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        shipSymbol: string;
        RequestBody?: RefuelShipRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefuelShipRequest> = z
        .object({
            shipSymbol: z.string(),
            requestBody: z.lazy(() => RefuelShipRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace RefuelShipData$ {
    export type Inbound = {
        agent: components.AgentJson$.Inbound;
        fuel: components.ShipFuelJson$.Inbound;
        transaction: components.MarketTransactionJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<RefuelShipData, z.ZodTypeDef, Inbound> = z
        .object({
            agent: components.AgentJson$.inboundSchema,
            fuel: components.ShipFuelJson$.inboundSchema,
            transaction: components.MarketTransactionJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                agent: v.agent,
                fuel: v.fuel,
                transaction: v.transaction,
            };
        });

    export type Outbound = {
        agent: components.AgentJson$.Outbound;
        fuel: components.ShipFuelJson$.Outbound;
        transaction: components.MarketTransactionJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefuelShipData> = z
        .object({
            agent: components.AgentJson$.outboundSchema,
            fuel: components.ShipFuelJson$.outboundSchema,
            transaction: components.MarketTransactionJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                agent: v.agent,
                fuel: v.fuel,
                transaction: v.transaction,
            };
        });
}

/** @internal */
export namespace RefuelShipResponseBody$ {
    export type Inbound = {
        data: RefuelShipData$.Inbound;
    };

    export const inboundSchema: z.ZodType<RefuelShipResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => RefuelShipData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: RefuelShipData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefuelShipResponseBody> = z
        .object({
            data: z.lazy(() => RefuelShipData$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace RefuelShipResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: RefuelShipResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<RefuelShipResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => RefuelShipResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: RefuelShipResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RefuelShipResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => RefuelShipResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
