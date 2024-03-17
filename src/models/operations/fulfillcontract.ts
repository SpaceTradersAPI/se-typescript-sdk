/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type FulfillContractSecurity = {
    agentToken: string;
};

export type FulfillContractRequest = {
    /**
     * The ID of the contract to fulfill.
     */
    contractId: string;
};

export type FulfillContractData = {
    /**
     * Agent details.
     */
    agent: components.AgentJson;
    /**
     * Contract details.
     */
    contract: components.ContractJson;
};

/**
 * Successfully fulfilled a contract.
 */
export type FulfillContractResponseBody = {
    data: FulfillContractData;
};

export type FulfillContractResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Successfully fulfilled a contract.
     */
    object?: FulfillContractResponseBody | undefined;
};

/** @internal */
export namespace FulfillContractSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<FulfillContractSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FulfillContractSecurity> = z
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
export namespace FulfillContractRequest$ {
    export type Inbound = {
        contractId: string;
    };

    export const inboundSchema: z.ZodType<FulfillContractRequest, z.ZodTypeDef, Inbound> = z
        .object({
            contractId: z.string(),
        })
        .transform((v) => {
            return {
                contractId: v.contractId,
            };
        });

    export type Outbound = {
        contractId: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FulfillContractRequest> = z
        .object({
            contractId: z.string(),
        })
        .transform((v) => {
            return {
                contractId: v.contractId,
            };
        });
}

/** @internal */
export namespace FulfillContractData$ {
    export type Inbound = {
        agent: components.AgentJson$.Inbound;
        contract: components.ContractJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<FulfillContractData, z.ZodTypeDef, Inbound> = z
        .object({
            agent: components.AgentJson$.inboundSchema,
            contract: components.ContractJson$.inboundSchema,
        })
        .transform((v) => {
            return {
                agent: v.agent,
                contract: v.contract,
            };
        });

    export type Outbound = {
        agent: components.AgentJson$.Outbound;
        contract: components.ContractJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FulfillContractData> = z
        .object({
            agent: components.AgentJson$.outboundSchema,
            contract: components.ContractJson$.outboundSchema,
        })
        .transform((v) => {
            return {
                agent: v.agent,
                contract: v.contract,
            };
        });
}

/** @internal */
export namespace FulfillContractResponseBody$ {
    export type Inbound = {
        data: FulfillContractData$.Inbound;
    };

    export const inboundSchema: z.ZodType<FulfillContractResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => FulfillContractData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: FulfillContractData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FulfillContractResponseBody> = z
        .object({
            data: z.lazy(() => FulfillContractData$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace FulfillContractResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: FulfillContractResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<FulfillContractResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => FulfillContractResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: FulfillContractResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, FulfillContractResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => FulfillContractResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}