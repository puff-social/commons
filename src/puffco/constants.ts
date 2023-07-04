export const ProductModels = [
  "0",
  "21",
  "4294967295",
  "1",
  "22",
  "2",
  "4",
  "12",
  "13",
  "51",
  "71",
  "72",
] as const;

export const ProductModelMap = {
  "0": "Peak",
  "21": "Peak",
  "4294967295": "Peak",
  "1": "Opal",
  "22": "Opal",
  "2": "Indiglow",
  "4": "Guardian",
  "12": "Pearl",
  "13": "Onyx",
  "51": "Peak",
  "71": "Onyx",
  "72": "Pearl",
};

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

export enum PuffcoOperatingState {
  INIT_MEMORY,
  MASTER_OFF = 3,
  SLEEP,
  IDLE,
  TEMP_SELECT,
  HEAT_CYCLE_PREHEAT,
  HEAT_CYCLE_ACTIVE,
  HEAT_CYCLE_FADE,
  INIT_VERSION_DISPLAY,
  INIT_BATTERY_DISPLAY,
}

export enum ChamberType {
  None,
  Normal = 1,
  "3D" = 3,
}

export enum ChargeSource {
  USB,
  Wireless,
  None = 3,
}

export enum ProfileIntensity {
  Standard,
  High = 0.5,
  Max = 1,
}

export const ProfileIntensityMap = {
  [ProfileIntensity.Standard]: "Standard",
  [ProfileIntensity.High]: "High",
  [ProfileIntensity.Max]: "Max",
};

export interface Colors {
  r: number;
  g: number;
  b: number;
}

export interface GatewayDeviceProfile {
  name: string;
  temp: number;
  time: string;
  color: string;
  intensity?: number;
}

export interface GatewayDeviceLastDab {
  timestamp: number;
  totalTime: number;
  timeElapsed: number;
  nominalTemp: number;
  actualTemp: number;
}

export interface DeviceState {
  temperature: number;
  battery: number;
  brightness: number;
  totalDabs: number;
  dabsPerDay: number;
  activeColor: Colors;
  stateTime: number;
  state: PuffcoOperatingState;
  chargeSource: ChargeSource;
  deviceName: string;
  profile: GatewayDeviceProfile;
  chamberType: ChamberType;
  deviceModel: string;
  deviceMac: string;
  lastDab: GatewayDeviceLastDab;
}
