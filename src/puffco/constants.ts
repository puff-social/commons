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
};

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

export interface DeviceState {
  temperature: number;
  battery: number;
  brightness: number;
  totalDabs: number;
  activeColor: Colors;
  state: PuffcoOperatingState;
  chargeSource: ChargeSource;
  deviceName: string;
  profile: GatewayDeviceProfile;
  chamberType: ChamberType;
  deviceModel: string;
  deviceMac: string;
}
