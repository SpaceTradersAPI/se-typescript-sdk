/*
 * Code generated by Speakeasy (https://speakeasyapi.dev). DO NOT EDIT.
 */

import * as z from "zod";

export enum ShipConditionEventJsonSymbol {
    ReactorOverload = "REACTOR_OVERLOAD",
    EnergySpikeFromMineral = "ENERGY_SPIKE_FROM_MINERAL",
    SolarFlareInterference = "SOLAR_FLARE_INTERFERENCE",
    CoolantLeak = "COOLANT_LEAK",
    PowerDistributionFluctuation = "POWER_DISTRIBUTION_FLUCTUATION",
    MagneticFieldDisruption = "MAGNETIC_FIELD_DISRUPTION",
    HullMicrometeoriteStrikes = "HULL_MICROMETEORITE_STRIKES",
    StructuralStressFractures = "STRUCTURAL_STRESS_FRACTURES",
    CorrosiveMineralContamination = "CORROSIVE_MINERAL_CONTAMINATION",
    ThermalExpansionMismatch = "THERMAL_EXPANSION_MISMATCH",
    VibrationDamageFromDrilling = "VIBRATION_DAMAGE_FROM_DRILLING",
    ElectromagneticFieldInterference = "ELECTROMAGNETIC_FIELD_INTERFERENCE",
    ImpactWithExtractedDebris = "IMPACT_WITH_EXTRACTED_DEBRIS",
    FuelEfficiencyDegradation = "FUEL_EFFICIENCY_DEGRADATION",
    CoolantSystemAgeing = "COOLANT_SYSTEM_AGEING",
    DustMicroabrasions = "DUST_MICROABRASIONS",
    ThrusterNozzleWear = "THRUSTER_NOZZLE_WEAR",
    ExhaustPortClogging = "EXHAUST_PORT_CLOGGING",
    BearingLubricationFade = "BEARING_LUBRICATION_FADE",
    SensorCalibrationDrift = "SENSOR_CALIBRATION_DRIFT",
    HullMicrometeoriteDamage = "HULL_MICROMETEORITE_DAMAGE",
    SpaceDebrisCollision = "SPACE_DEBRIS_COLLISION",
    ThermalStress = "THERMAL_STRESS",
    VibrationOverload = "VIBRATION_OVERLOAD",
    PressureDifferentialStress = "PRESSURE_DIFFERENTIAL_STRESS",
    ElectromagneticSurgeEffects = "ELECTROMAGNETIC_SURGE_EFFECTS",
    AtmosphericEntryHeat = "ATMOSPHERIC_ENTRY_HEAT",
}

export enum Component {
    Frame = "FRAME",
    Reactor = "REACTOR",
    Engine = "ENGINE",
}

/**
 * An event that represents damage or wear to a ship's reactor, frame, or engine, reducing the condition of the ship.
 */
export type ShipConditionEventJson = {
    symbol: ShipConditionEventJsonSymbol;
    component: Component;
    /**
     * The name of the event.
     */
    name: string;
    /**
     * A description of the event.
     */
    description: string;
};

/** @internal */
export const ShipConditionEventJsonSymbol$ = z.nativeEnum(ShipConditionEventJsonSymbol);

/** @internal */
export const Component$ = z.nativeEnum(Component);

/** @internal */
export namespace ShipConditionEventJson$ {
    export type Inbound = {
        symbol: ShipConditionEventJsonSymbol;
        component: Component;
        name: string;
        description: string;
    };

    export const inboundSchema: z.ZodType<ShipConditionEventJson, z.ZodTypeDef, Inbound> = z
        .object({
            symbol: ShipConditionEventJsonSymbol$,
            component: Component$,
            name: z.string(),
            description: z.string(),
        })
        .transform((v) => {
            return {
                symbol: v.symbol,
                component: v.component,
                name: v.name,
                description: v.description,
            };
        });

    export type Outbound = {
        symbol: ShipConditionEventJsonSymbol;
        component: Component;
        name: string;
        description: string;
    };

    export const outboundSchema: z.ZodType<Outbound, z.ZodTypeDef, ShipConditionEventJson> = z
        .object({
            symbol: ShipConditionEventJsonSymbol$,
            component: Component$,
            name: z.string(),
            description: z.string(),
        })
        .transform((v) => {
            return {
                symbol: v.symbol,
                component: v.component,
                name: v.name,
                description: v.description,
            };
        });
}
