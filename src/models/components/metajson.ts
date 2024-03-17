/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Meta details for pagination.
 */
export type MetaJson = {
    /**
     * Shows the total amount of items of this kind that exist.
     */
    total: number;
    /**
     * A page denotes an amount of items, offset from the first item. Each page holds an amount of items equal to the `limit`.
     */
    page?: number | undefined;
    /**
     * The amount of items in each page. Limits how many items can be fetched at once.
     */
    limit?: number | undefined;
};

/** @internal */
export namespace MetaJson$ {
    export type Inbound = {
        total: number;
        page?: number | undefined;
        limit?: number | undefined;
    };

    export const inboundSchema: z.ZodType<MetaJson, z.ZodTypeDef, Inbound> = z
        .object({
            total: z.number().int(),
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
        })
        .transform((v) => {
            return {
                total: v.total,
                page: v.page,
                limit: v.limit,
            };
        });

    export type Outbound = {
        total: number;
        page: number;
        limit: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, MetaJson> = z
        .object({
            total: z.number().int(),
            page: z.number().int().default(1),
            limit: z.number().int().default(10),
        })
        .transform((v) => {
            return {
                total: v.total,
                page: v.page,
                limit: v.limit,
            };
        });
}