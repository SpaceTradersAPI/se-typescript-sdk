/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type NavigateShipSecurity = {
    agentToken: string;
};

export type NavigateShipRequestBody = {
    /**
     * The target destination.
     */
    waypointSymbol: string;
};

export type NavigateShipRequest = {
    /**
     * The ship symbol.
     */
    shipSymbol: string;
    requestBody?: NavigateShipRequestBody | undefined;
};

export type NavigateShipEvents = components.ShipConditionEventJson;

export type NavigateShipData = {
    /**
     * Details of the ship's fuel tanks including how much fuel was consumed during the last transit or action.
     */
    fuel: components.ShipFuelJson;
    /**
     * The navigation information of the ship.
     */
    nav: components.ShipNavJson;
    events: Array<components.ShipConditionEventJson>;
};

/**
 * The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival.
 */
export type NavigateShipResponseBody = {
    data: NavigateShipData;
};

export type NavigateShipResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * The successful transit information including the route details and changes to ship fuel. The route includes the expected time of arrival.
     */
    object?: NavigateShipResponseBody | undefined;
};

/** @internal */
export namespace NavigateShipSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<NavigateShipSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NavigateShipSecurity> = z
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
export namespace NavigateShipRequestBody$ {
    export type Inbound = {
        waypointSymbol: string;
    };

    export const inboundSchema: z.ZodType<NavigateShipRequestBody, z.ZodTypeDef, Inbound> = z
        .object({
            waypointSymbol: z.string(),
        })
        .transform((v) => {
            return {
                waypointSymbol: v.waypointSymbol,
            };
        });

    export type Outbound = {
        waypointSymbol: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NavigateShipRequestBody> = z
        .object({
            waypointSymbol: z.string(),
        })
        .transform((v) => {
            return {
                waypointSymbol: v.waypointSymbol,
            };
        });
}

/** @internal */
export namespace NavigateShipRequest$ {
    export type Inbound = {
        shipSymbol: string;
        RequestBody?: NavigateShipRequestBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<NavigateShipRequest, z.ZodTypeDef, Inbound> = z
        .object({
            shipSymbol: z.string(),
            RequestBody: z.lazy(() => NavigateShipRequestBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                ...(v.RequestBody === undefined ? null : { requestBody: v.RequestBody }),
            };
        });

    export type Outbound = {
        shipSymbol: string;
        RequestBody?: NavigateShipRequestBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NavigateShipRequest> = z
        .object({
            shipSymbol: z.string(),
            requestBody: z.lazy(() => NavigateShipRequestBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                ...(v.requestBody === undefined ? null : { RequestBody: v.requestBody }),
            };
        });
}

/** @internal */
export namespace NavigateShipEvents$ {
    export type Inbound = components.ShipConditionEventJson$.Inbound;

    export type Outbound = components.ShipConditionEventJson$.Outbound;
    export const inboundSchema: z.ZodType<NavigateShipEvents, z.ZodTypeDef, Inbound> =
        components.ShipConditionEventJson$.inboundSchema;
    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NavigateShipEvents> =
        components.ShipConditionEventJson$.outboundSchema;
}

/** @internal */
export namespace NavigateShipData$ {
    export type Inbound = {
        fuel: components.ShipFuelJson$.Inbound;
        nav: components.ShipNavJson$.Inbound;
        events: Array<components.ShipConditionEventJson$.Inbound>;
    };

    export const inboundSchema: z.ZodType<NavigateShipData, z.ZodTypeDef, Inbound> = z
        .object({
            fuel: components.ShipFuelJson$.inboundSchema,
            nav: components.ShipNavJson$.inboundSchema,
            events: z.array(components.ShipConditionEventJson$.inboundSchema),
        })
        .transform((v) => {
            return {
                fuel: v.fuel,
                nav: v.nav,
                events: v.events,
            };
        });

    export type Outbound = {
        fuel: components.ShipFuelJson$.Outbound;
        nav: components.ShipNavJson$.Outbound;
        events: Array<components.ShipConditionEventJson$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NavigateShipData> = z
        .object({
            fuel: components.ShipFuelJson$.outboundSchema,
            nav: components.ShipNavJson$.outboundSchema,
            events: z.array(components.ShipConditionEventJson$.outboundSchema),
        })
        .transform((v) => {
            return {
                fuel: v.fuel,
                nav: v.nav,
                events: v.events,
            };
        });
}

/** @internal */
export namespace NavigateShipResponseBody$ {
    export type Inbound = {
        data: NavigateShipData$.Inbound;
    };

    export const inboundSchema: z.ZodType<NavigateShipResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => NavigateShipData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: NavigateShipData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NavigateShipResponseBody> = z
        .object({
            data: z.lazy(() => NavigateShipData$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace NavigateShipResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: NavigateShipResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<NavigateShipResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => NavigateShipResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: NavigateShipResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, NavigateShipResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => NavigateShipResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}