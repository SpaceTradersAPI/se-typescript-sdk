/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as components from "../../models/components";
import * as z from "zod";

export type AcceptContractSecurity = {
    agentToken: string;
};

export type AcceptContractRequest = {
    /**
     * The contract ID to accept.
     */
    contractId: string;
};

export type AcceptContractData = {
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
 * Succesfully accepted contract.
 */
export type AcceptContractResponseBody = {
    data: AcceptContractData;
};

export type AcceptContractResponse = {
    httpMeta: components.HTTPMetadata;
    /**
     * Succesfully accepted contract.
     */
    object?: AcceptContractResponseBody | undefined;
};

/** @internal */
export namespace AcceptContractSecurity$ {
    export type Inbound = {
        AgentToken: string;
    };

    export const inboundSchema: z.ZodType<AcceptContractSecurity, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AcceptContractSecurity> = z
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
export namespace AcceptContractRequest$ {
    export type Inbound = {
        contractId: string;
    };

    export const inboundSchema: z.ZodType<AcceptContractRequest, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AcceptContractRequest> = z
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
export namespace AcceptContractData$ {
    export type Inbound = {
        agent: components.AgentJson$.Inbound;
        contract: components.ContractJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<AcceptContractData, z.ZodTypeDef, Inbound> = z
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

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AcceptContractData> = z
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
export namespace AcceptContractResponseBody$ {
    export type Inbound = {
        data: AcceptContractData$.Inbound;
    };

    export const inboundSchema: z.ZodType<AcceptContractResponseBody, z.ZodTypeDef, Inbound> = z
        .object({
            data: z.lazy(() => AcceptContractData$.inboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });

    export type Outbound = {
        data: AcceptContractData$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AcceptContractResponseBody> = z
        .object({
            data: z.lazy(() => AcceptContractData$.outboundSchema),
        })
        .transform((v) => {
            return {
                data: v.data,
            };
        });
}

/** @internal */
export namespace AcceptContractResponse$ {
    export type Inbound = {
        HttpMeta: components.HTTPMetadata$.Inbound;
        object?: AcceptContractResponseBody$.Inbound | undefined;
    };

    export const inboundSchema: z.ZodType<AcceptContractResponse, z.ZodTypeDef, Inbound> = z
        .object({
            HttpMeta: components.HTTPMetadata$.inboundSchema,
            object: z.lazy(() => AcceptContractResponseBody$.inboundSchema).optional(),
        })
        .transform((v) => {
            return {
                httpMeta: v.HttpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });

    export type Outbound = {
        HttpMeta: components.HTTPMetadata$.Outbound;
        object?: AcceptContractResponseBody$.Outbound | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, AcceptContractResponse> = z
        .object({
            httpMeta: components.HTTPMetadata$.outboundSchema,
            object: z.lazy(() => AcceptContractResponseBody$.outboundSchema).optional(),
        })
        .transform((v) => {
            return {
                HttpMeta: v.httpMeta,
                ...(v.object === undefined ? null : { object: v.object }),
            };
        });
}
