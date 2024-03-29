/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * A cooldown is a period of time in which a ship cannot perform certain actions.
 */
export type CooldownJson = {
    /**
     * The symbol of the ship that is on cooldown
     */
    shipSymbol: string;
    /**
     * The total duration of the cooldown in seconds
     */
    totalSeconds: number;
    /**
     * The remaining duration of the cooldown in seconds
     */
    remainingSeconds: number;
    /**
     * The date and time when the cooldown expires in ISO 8601 format
     */
    expiration?: Date | undefined;
};

/** @internal */
export namespace CooldownJson$ {
    export type Inbound = {
        shipSymbol: string;
        totalSeconds: number;
        remainingSeconds: number;
        expiration?: string | undefined;
    };

    export const inboundSchema: z.ZodType<CooldownJson, z.ZodTypeDef, Inbound> = z
        .object({
            shipSymbol: z.string(),
            totalSeconds: z.number().int(),
            remainingSeconds: z.number().int(),
            expiration: z
                .string()
                .datetime({ offset: true })
                .transform((v) => new Date(v))
                .optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                totalSeconds: v.totalSeconds,
                remainingSeconds: v.remainingSeconds,
                ...(v.expiration === undefined ? null : { expiration: v.expiration }),
            };
        });

    export type Outbound = {
        shipSymbol: string;
        totalSeconds: number;
        remainingSeconds: number;
        expiration?: string | undefined;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, CooldownJson> = z
        .object({
            shipSymbol: z.string(),
            totalSeconds: z.number().int(),
            remainingSeconds: z.number().int(),
            expiration: z
                .date()
                .transform((v) => v.toISOString())
                .optional(),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                totalSeconds: v.totalSeconds,
                remainingSeconds: v.remainingSeconds,
                ...(v.expiration === undefined ? null : { expiration: v.expiration }),
            };
        });
}
