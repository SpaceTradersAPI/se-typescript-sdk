/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Result of a repair transaction.
 */
export type RepairTransactionJson = {
    /**
     * The symbol of the waypoint.
     */
    waypointSymbol: string;
    /**
     * The symbol of the ship.
     */
    shipSymbol: string;
    /**
     * The total price of the transaction.
     */
    totalPrice: number;
    /**
     * The timestamp of the transaction.
     */
    timestamp: Date;
};

/** @internal */
export namespace RepairTransactionJson$ {
    export type Inbound = {
        waypointSymbol: string;
        shipSymbol: string;
        totalPrice: number;
        timestamp: string;
    };

    export const inboundSchema: z.ZodType<RepairTransactionJson, z.ZodTypeDef, Inbound> = z
        .object({
            waypointSymbol: z.string(),
            shipSymbol: z.string(),
            totalPrice: z.number().int(),
            timestamp: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v)),
        })
        .transform((v) => {
            return {
                waypointSymbol: v.waypointSymbol,
                shipSymbol: v.shipSymbol,
                totalPrice: v.totalPrice,
                timestamp: v.timestamp,
            };
        });

    export type Outbound = {
        waypointSymbol: string;
        shipSymbol: string;
        totalPrice: number;
        timestamp: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, RepairTransactionJson> = z
        .object({
            waypointSymbol: z.string(),
            shipSymbol: z.string(),
            totalPrice: z.number().int(),
            timestamp: z.date().transform((v) => v.toISOString()),
        })
        .transform((v) => {
            return {
                waypointSymbol: v.waypointSymbol,
                shipSymbol: v.shipSymbol,
                totalPrice: v.totalPrice,
                timestamp: v.timestamp,
            };
        });
}
