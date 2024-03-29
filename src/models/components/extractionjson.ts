/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import { TradeSymbolJsonTradeSymbolJson, TradeSymbolJsonTradeSymbolJson$ } from "./factionjson";
import * as z from "zod";

/**
 * A yield from the extraction operation.
 */
export type ExtractionYieldJson = {
    /**
     * The good's symbol.
     */
    symbol: TradeSymbolJsonTradeSymbolJson;
    /**
     * The number of units extracted that were placed into the ship's cargo hold.
     */
    units: number;
};

/**
 * Extraction details.
 */
export type ExtractionJson = {
    /**
     * Symbol of the ship that executed the extraction.
     */
    shipSymbol: string;
    /**
     * A yield from the extraction operation.
     */
    yield: ExtractionYieldJson;
};

/** @internal */
export namespace ExtractionYieldJson$ {
    export type Inbound = {
        symbol: TradeSymbolJsonTradeSymbolJson;
        units: number;
    };

    export const inboundSchema: z.ZodType<ExtractionYieldJson, z.ZodTypeDef, Inbound> = z
        .object({
            symbol: TradeSymbolJsonTradeSymbolJson$,
            units: z.number().int(),
        })
        .transform((v) => {
            return {
                symbol: v.symbol,
                units: v.units,
            };
        });

    export type Outbound = {
        symbol: TradeSymbolJsonTradeSymbolJson;
        units: number;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExtractionYieldJson> = z
        .object({
            symbol: TradeSymbolJsonTradeSymbolJson$,
            units: z.number().int(),
        })
        .transform((v) => {
            return {
                symbol: v.symbol,
                units: v.units,
            };
        });
}

/** @internal */
export namespace ExtractionJson$ {
    export type Inbound = {
        shipSymbol: string;
        yield: ExtractionYieldJson$.Inbound;
    };

    export const inboundSchema: z.ZodType<ExtractionJson, z.ZodTypeDef, Inbound> = z
        .object({
            shipSymbol: z.string(),
            yield: z.lazy(() => ExtractionYieldJson$.inboundSchema),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                yield: v.yield,
            };
        });

    export type Outbound = {
        shipSymbol: string;
        yield: ExtractionYieldJson$.Outbound;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ExtractionJson> = z
        .object({
            shipSymbol: z.string(),
            yield: z.lazy(() => ExtractionYieldJson$.outboundSchema),
        })
        .transform((v) => {
            return {
                shipSymbol: v.shipSymbol,
                yield: v.yield,
            };
        });
}
