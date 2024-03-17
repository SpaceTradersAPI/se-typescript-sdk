/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type SupplyConstructionSecurity = {
    agentToken: string;
};

export type SupplyConstructionRequestBody = {
    /**
     * Symbol of the ship to use.
     */
    shipSymbol: string;
    /**
     * The symbol of the good to supply.
     */
    tradeSymbol: string;
    /**
     * Amount of units to supply.
     */
    units: number;
};

export type SupplyConstructionRequest = {
    /**
     * The system symbol
     */
    systemSymbol: string;
    /**
     * The waypoint symbol
     */
    waypointSymbol: string;
    requestBody?: SupplyConstructionRequestBody | undefined;
};

export type SupplyConstructionData = {
    /**
     * The construction details of a waypoint.
     */
    construction: components.ConstructionJson;
    /**
     * Ship cargo details.
     */
    cargo: components.ShipCargoJson;
};

/**
 * Successfully supplied construction site.
 */
export type SupplyConstructionResponseBody = {
    data: SupplyConstructionData;
};

export type SupplyConstructionResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully supplied construction site.
     */
    object?: SupplyConstructionResponseBody | undefined;
};

/** @internal */
export namespace SupplyConstructionSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<SupplyConstructionSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupplyConstructionSecurity> = z
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
export namespace SupplyConstructionRequestBody$ {
    export type Inbound = {
        shipSymbol: string;
        tradeSymbol: string;
        units: number;
    };

    export const inboundSchema: z.ZodType<SupplyConstructionRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            shipSymbol: z.string(),
            tradeSymbol: z.string(),
            units: z.number().int(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                tradeSymbol: v.tradeSymbol,
                units: v.units,
            };
        });

    export type Outbound = {
        shipSymbol: string;
        tradeSymbol: string;
        units: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupplyConstructionRequestBody> =
        z
            .object({
                shipSymbol: z.string(),
                tradeSymbol: z.string(),
                units: z.number().int(),
            })
            .transform((v) => {
                return {
                    shipSymbol: v.shipSymbol,
                    tradeSymbol: v.tradeSymbol,
                    units: v.units,
                };
            });
}

/** @internal */
export namespace SupplyConstructionRequest$ {
    export type Inbound = {
        systemSymbol: string;
        waypointSymbol: string;
        RequestBody?: SupplyConstructionRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<SupplyConstructionRequest, z.ZodTypeDef, Inbound> = z
        .object({
            systemSymbol: z.string(),
            waypointSymbol: z.string(),
            RequestBody: z.lazy(() => SupplyConstructionRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
                waypointSymbol: v.waypointSymbol,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        systemSymbol: string;
        waypointSymbol: string;
        RequestBody?: SupplyConstructionRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupplyConstructionRequest> = z
        .object({
            systemSymbol: z.string(),
            waypointSymbol: z.string(),
            requestBody: z.lazy(() => SupplyConstructionRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                systemSymbol: v.systemSymbol,
                waypointSymbol: v.waypointSymbol,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace SupplyConstructionData$ {
    export type Inbound = {
        construction: components.ConstructionJson$.Inbound;
        cargo: components.ShipCargoJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<SupplyConstructionData, z.ZodTypeDef, Inbound> = z
        .object({
            construction: components.ConstructionJson$.inboundSchema,
            cargo: components.ShipCargoJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                construction: v.construction,
                cargo: v.cargo,
            };
        });

    export type Outbound = {
        construction: components.ConstructionJson$.Outbound;
        cargo: components.ShipCargoJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupplyConstructionData> = z
        .object({
            construction: components.ConstructionJson$.outboundSchema,
            cargo: components.ShipCargoJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                construction: v.construction,
                cargo: v.cargo,
            };
        });
}

/** @internal */
export namespace SupplyConstructionResponseBody$ {
    export type Inbound = {
        data: SupplyConstructionData$.Inbound;
    };

    export const inboundSchema: z.ZodType<SupplyConstructionResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => SupplyConstructionData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: SupplyConstructionData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupplyConstructionResponseBody> =
        z
            .object({
                data: z.lazy(() => SupplyConstructionData$.outboundSchema),
            })
            .transform((v) => {
                return {
                    data: v.data,
                };
            });
}

/** @internal */
export namespace SupplyConstructionResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: SupplyConstructionResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<SupplyConstructionResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => SupplyConstructionResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: SupplyConstructionResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, SupplyConstructionResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => SupplyConstructionResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
