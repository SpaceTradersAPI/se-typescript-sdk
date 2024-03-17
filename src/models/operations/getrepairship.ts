/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetRepairShipSecurity = {
    agentToken: string;
};

export type GetRepairShipRequest = {
    /**
     * The ship symbol.
     */
    shipSymbol: string;
};

export type GetRepairShipData = {
    /**
     * Result of a repair transaction.
     */
    transaction: components.RepairTransactionJson;
};

/**
 * Successfully retrieved the cost of repairing a ship.
 */
export type GetRepairShipResponseBody = {
    data: GetRepairShipData;
};

export type GetRepairShipResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully retrieved the cost of repairing a ship.
     */
    object?: GetRepairShipResponseBody | undefined;
};

/** @internal */
export namespace GetRepairShipSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<GetRepairShipSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRepairShipSecurity> = z
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
export namespace GetRepairShipRequest$ {
    export type Inbound = {
        shipSymbol: string;
    };

    export const inboundSchema: z.ZodType<GetRepairShipRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRepairShipRequest> = z
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
export namespace GetRepairShipData$ {
    export type Inbound = {
        transaction: components.RepairTransactionJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetRepairShipData, z.ZodTypeDef, Inbound> = z
        .object({
            transaction: components.RepairTransactionJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                transaction: v.transaction,
            };
        });

    export type Outbound = {
        transaction: components.RepairTransactionJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRepairShipData> = z
        .object({
            transaction: components.RepairTransactionJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                transaction: v.transaction,
            };
        });
}

/** @internal */
export namespace GetRepairShipResponseBody$ {
    export type Inbound = {
        data: GetRepairShipData$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetRepairShipResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => GetRepairShipData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: GetRepairShipData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRepairShipResponseBody> = z
        .object({
            data: z.lazy(() => GetRepairShipData$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace GetRepairShipResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetRepairShipResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetRepairShipResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetRepairShipResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetRepairShipResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetRepairShipResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetRepairShipResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}