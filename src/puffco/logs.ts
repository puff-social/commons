export enum AuditLogCode {
  CHARGE_START,
  CHARGER_DISCONNECTED,
  CHARGE_COMPLETE,
  HEAT_CYCLE_ENTER_PREHEAT,
  HEAT_CYCLE_ABORT_PREHEAT,
  HEAT_CYCLE_ABORT_ACTIVE,
  HEAT_CYCLE_COMPLETE,
  HEAT_CYCLE_BOOSTED,
  SYSTEM_BOOT,
  HEAT_CYCLE_ACTIVE,
  FACTORY_RESET,
  CLOCK_ADJUST,
  HEAT_CYCLE_FAULTED,
  MOOD_LIGHT_ENDED,
}

export interface AuditLog<D = any> {
  id: number;
  type: AuditLogCode;
  realTimestamp: number;
  timestamp: number;
  data: D;
}

export enum BaseAuditLogOffset {
  TIMESTAMP = 0,
  TYPE_CODE = 4,
}

export enum HeatCycleOffset {
  HEAT_CYCLE_NOMINAL_TEMP = 6,
  PRESENT_COMMANDED_TEMP = 8,
  PRESENT_ACTUAL_TEMP = 10,
  TOTAL_TIME = 12,
  TIME_ELAPSED = 14,
}

export enum ChargeStartOffset {
  BATTERY_TEMP = 5,
  BATTERY_VOLTAGE,
}

export enum ChargeOffset {
  BATTERY_VOLTAGE_AT_START_OF_CHARGE = 6,
  BATTERY_VOLTAGE_AT_END_OF_CHARGE = 8,
  BATTERY_TEMP_AT_START_OF_CHARGE = 10,
  BATTERY_TEMP_AT_END_OF_CHARGE = 11,
  TIME_ELAPSED_SINCE_START_OF_CHARGE = 12,
  CHARGE_DELIVERED_TO_BATTERY = 14,
}

export enum ClockAdjustOffset {
  PREVIOUS_TIMESTAMP = 8,
  SYSTEM_UPTIME = 12,
}

export enum MoodLightEndedOffset {
  USAGE = 5,
  MOOD_LIGHT_DURATION,
  ULID = 8,
}

export enum ChargeLowOffset {
  SOC_AT_START_OF_CHARGE = 6,
  SOC_AT_END_OF_CHARGE = 8,
  BATTERY_TEMP_AT_START_OF_CHARGE = 10,
  BATTERY_TEMP_AT_END_OF_CHARGE = 11,
  TIME_ELAPSED_SINCE_START_OF_CHARGE = 12,
  CHARGE_DELIVERED_TO_BATTERY = 14,
}

export enum HeatStartLowBattOffset {
  BATTERY_VOLTAGE = 6,
}

export enum SystemBootOffset {
  CAUSE = 8,
}

export interface HeatCycleLog {
  nominalTemp: number;
  commandedTemp: number;
  actualTemp: number;
  totalTime: number;
  timeElapsed: number;
}

export interface ChargeStartLog {
  temperature: number;
  voltage: number;
}

export interface ChargeLog {
  startVoltage: number;
  endVoltage: number;
  startTemp: number;
  endTemp: number;
  timeElapsed: number;
  chargeDelivered: number;
}

export interface ClockAdjustLog {
  previous: number;
  uptime: number;
}

export interface MoodLightEndedLog {
  usage: number;
  duration: number;
  ulid: string;
}

export interface ChargeLowLog {
  startSoc: number;
  endSoc: number;
  startTemp: number;
  endTemp: number;
  timeSinceStartOfCharge: number;
  chargeDelivered: number;
}

export interface HeatStartLowBattLog {
  voltage: number;
}

export interface SystemBootLog {
  cause: string;
}
