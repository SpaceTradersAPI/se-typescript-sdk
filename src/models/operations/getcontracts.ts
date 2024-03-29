/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type GetContractsSecurity = {
    agentToken: string;
};

export type GetContractsRequest = {
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
 * Succesfully listed contracts.
 */
export type GetContractsResponseBody = {
    data: Array<components.ContractJson>;
    /**
     * Meta details for pagination.
     */
    meta: components.MetaJson;
};

export type GetContractsResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Succesfully listed contracts.
     */
    object?: GetContractsResponseBody | undefined;
};

/** @internal */
export namespace GetContractsSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<GetContractsSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContractsSecurity> = z
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
export namespace GetContractsRequest$ {
    export type Inbound = {
        page?: number | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<GetContractsRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContractsRequest> = z
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
export namespace GetContractsResponseBody$ {
    export type Inbound = {
        data: Array<components.ContractJson$.Inbound>;
        meta: components.MetaJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<GetContractsResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.array(components.ContractJson$.inboundSchema),
            meta: components.MetaJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                data: v.data,
                meta: v.meta,
            };
        });

    export type Outbound = {
        data: Array<components.ContractJson$.Outbound>;
        meta: components.MetaJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContractsResponseBody> = z
        .object({
            data: z.array(components.ContractJson$.outboundSchema),
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
export namespace GetContractsResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: GetContractsResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<GetContractsResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => GetContractsResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: GetContractsResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, GetContractsResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => GetContractsResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
