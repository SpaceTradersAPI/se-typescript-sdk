/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type ExtractResourcesWithSurveySecurity = {
    agentToken: string;
};

export type ExtractResourcesWithSurveyRequest = {
    /**
     * The ship symbol.
     */
    shipSymbol: string;
    surveyJson?: components.SurveyJson | undefined;
};

export type ExtractResourcesWithSurveyEvents = components.ShipConditionEventJson;

export type ExtractResourcesWithSurveyData = {
    /**
     * A cooldown is a period of time in which a ship cannot perform certain actions.
     */
    cooldown: components.CooldownJson;
    /**
     * Extraction details.
     */
    extraction: components.ExtractionJson;
    /**
     * Ship cargo details.
     */
    cargo: components.ShipCargoJson;
    events: Array<components.ShipConditionEventJson>;
};

/**
 * Extracted successfully.
 */
export type ExtractResourcesWithSurveyResponseBody = {
    data: ExtractResourcesWithSurveyData;
};

export type ExtractResourcesWithSurveyResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Extracted successfully.
     */
    object?: ExtractResourcesWithSurveyResponseBody | undefined;
};

/** @internal */
export namespace ExtractResourcesWithSurveySecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<
        ExtractResourcesWithSurveySecurity,
        z.ZodTypeDef,
        Inbound
    > = z
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

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ExtractResourcesWithSurveySecurity
    > = z
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
export namespace ExtractResourcesWithSurveyRequest$ {
    export type Inbound = {
        shipSymbol: string;
        "Survey.json"?: components.SurveyJson$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ExtractResourcesWithSurveyRequest,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            shipSymbol: z.string(),
            "Survey.json": components.SurveyJson$.inboundSchema.optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                ...(v["Survey.json"] === undefined ? null : { surveyJson: v["Survey.json"] }),
            };
        });

    export type Outbound = {
        shipSymbol: string;
        "Survey.json"?: components.SurveyJson$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ExtractResourcesWithSurveyRequest
    > = z
        .object({
            shipSymbol: z.string(),
            surveyJson: components.SurveyJson$.outboundSchema.optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                ...(v.surveyJson === undefined ? null : { "Survey.json": v.surveyJson }),
            };
        });
}

/** @internal */
export namespace ExtractResourcesWithSurveyEvents$ {
    export type Inbound = components.ShipConditionEventJson$.Inbound;

    export type Outbound = components.ShipConditionEventJson$.Outbound;
    export const inboundSchema: z.ZodType<ExtractResourcesWithSurveyEvents, z.ZodTypeDef, Inbound> =
        components.ShipConditionEventJson$.inboundSchema;
    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ExtractResourcesWithSurveyEvents
    > = components.ShipConditionEventJson$.outboundSchema;
}

/** @internal */
export namespace ExtractResourcesWithSurveyData$ {
    export type Inbound = {
        cooldown: components.CooldownJson$.Inbound;
        extraction: components.ExtractionJson$.Inbound;
        cargo: components.ShipCargoJson$.Inbound;
        events: Array<components.ShipConditionEventJson$.Inbound>;
    };

    export const inboundSchema: z.ZodType<ExtractResourcesWithSurveyData, z.ZodTypeDef, Inbound> = z
        .object({
            cooldown: components.CooldownJson$.inboundSchema,
            extraction: components.ExtractionJson$.inboundSchema,
            cargo: components.ShipCargoJson$.inboundSchema,
            events: z.array(components.ShipConditionEventJson$.inboundSchema),
        })
        .transform((v) => {
            return {
                cooldown: v.cooldown,
                extraction: v.extraction,
                cargo: v.cargo,
                events: v.events,
            };
        });

    export type Outbound = {
        cooldown: components.CooldownJson$.Outbound;
        extraction: components.ExtractionJson$.Outbound;
        cargo: components.ShipCargoJson$.Outbound;
        events: Array<components.ShipConditionEventJson$.Outbound>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExtractResourcesWithSurveyData> =
        z
            .object({
                cooldown: components.CooldownJson$.outboundSchema,
                extraction: components.ExtractionJson$.outboundSchema,
                cargo: components.ShipCargoJson$.outboundSchema,
                events: z.array(components.ShipConditionEventJson$.outboundSchema),
            })
            .transform((v) => {
                return {
                    cooldown: v.cooldown,
                    extraction: v.extraction,
                    cargo: v.cargo,
                    events: v.events,
                };
            });
}

/** @internal */
export namespace ExtractResourcesWithSurveyResponseBody$ {
    export type Inbound = {
        data: ExtractResourcesWithSurveyData$.Inbound;
    };

    export const inboundSchema: z.ZodType<
        ExtractResourcesWithSurveyResponseBody,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            data: z.lazy(() => ExtractResourcesWithSurveyData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: ExtractResourcesWithSurveyData$.Outbound;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ExtractResourcesWithSurveyResponseBody
    > = z
        .object({
            data: z.lazy(() => ExtractResourcesWithSurveyData$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace ExtractResourcesWithSurveyResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: ExtractResourcesWithSurveyResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<
        ExtractResourcesWithSurveyResponse,
        z.ZodTypeDef,
        Inbound
    > = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => ExtractResourcesWithSurveyResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: ExtractResourcesWithSurveyResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<
        Outbound,
        z.ZodTypeDef,
        ExtractResourcesWithSurveyResponse
    > = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => ExtractResourcesWithSurveyResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
