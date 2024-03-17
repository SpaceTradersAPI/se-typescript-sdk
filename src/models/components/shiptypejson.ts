/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

/**
 * Type of ship
 */
export enum ShipTypeJson {
    ShipProbe = "SHIP_PROBE",
    ShipMiningDrone = "SHIP_MINING_DRONE",
    ShipSiphonDrone = "SHIP_SIPHON_DRONE",
    ShipInterceptor = "SHIP_INTERCEPTOR",
    ShipLightHauler = "SHIP_LIGHT_HAULER",
    ShipCommandFrigate = "SHIP_COMMAND_FRIGATE",
    ShipExplorer = "SHIP_EXPLORER",
    ShipHeavyFreighter = "SHIP_HEAVY_FREIGHTER",
    ShipLightShuttle = "SHIP_LIGHT_SHUTTLE",
    ShipOreHound = "SHIP_ORE_HOUND",
    ShipRefiningFreighter = "SHIP_REFINING_FREIGHTER",
    ShipSurveyor = "SHIP_SURVEYOR",
}

/** @internal */
export const ShipTypeJson$ = z.nativeEnum(ShipTypeJson);
