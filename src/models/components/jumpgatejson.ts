/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export type JumpGateJson = {
    /**
     * The symbol of the waypoint.
     */
    symbol: string;
    /**
     * All the gates that are connected to this waypoint.
     */
    connections: Array<string>;
};

/** @internal */
export namespace JumpGateJson$ {
    export type Inbound = {
        symbol: string;
        connections: Array<string>;
    };

    export const inboundSchema: z.ZodType<JumpGateJson, z.ZodTypeDef, Inbound> = z
        .object({
            symbol: z.string(),
            connections: z.array(z.string()),
        })
        .transform((v) => {
            return {
                symbol: v.symbol,
                connections: v.connections,
            };
        });

    export type Outbound = {
        symbol: string;
        connections: Array<string>;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, JumpGateJson> = z
        .object({
            symbol: z.string(),
            connections: z.array(z.string()),
        })
        .transform((v) => {
            return {
                symbol: v.symbol,
                connections: v.connections,
            };
        });
}
