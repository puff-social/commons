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

export const MinimumFirmwareMap = {
  TEMP_PROFILE: "N",
  MOOD_LIGHTING: "X",
  CHAMBER_TYPE: "V",
  PREVIEW_COLOR: "V",
  FIRMWARE_AUTHENTICATION: "X",
  BATTERY_PRESERVATION: "Y",
  VAPOR_SETTING: "AC",
  LED3: "AF",
  XL_CHAMBER: "AG",
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
  Normal,
  XL,
  "3D",
}

export enum ChargeSource {
  USB,
  Wireless,
  None = 3,
}

export const MIN_INTENSITY = 0;
export const MAX_INTENSITY = 1;
export const XL_INTENSITY = 1.5;

export enum ProfileIntensity {
  Standard,
  High = 0.5,
  Max = 1,
  XL = 1.5,
}

export const ProfileIntensityMap = {
  [ProfileIntensity.Standard]: "Standard",
  [ProfileIntensity.High]: "High",
  [ProfileIntensity.Max]: "Max",
  [ProfileIntensity.XL]: "XL",
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
  utcTime: number;
  batteryPreservation: number;
}

export enum MoodType {
  NO_ANIMATION,
  DISCO,
  FADE,
  SPIN,
  SPLIT_GRADIENT,
  VERTICAL_SLIDESHOW,
  TORNADO,
  BREATHING,
  CIRCLING_SLOW,
  LAVA_LAMP,
  CONFETTI,
}

export enum LanternScratchPadId {
  LANTERN_EXCLUSIVE_NEWEST = 0,
  LANTERN_CUSTOM_NEWEST = 16,
  LANTERN_EXCLUSIVE_0 = 0,
  LANTERN_CUSTOM_0 = 1,
  LANTERN_CUSTOM_1 = 16,
}

export enum ProfileScratchPadId {
  PROFILE_NEWEST = 2,
  PROFILE_EXCLUSIVE_NEWEST = 3,
  PROFILE_CUSTOM_NEWEST = 19,
  PROFILE_0 = 2,
  PROFILE_EXCLUSIVE_0 = 3,
  PROFILE_CUSTOM_0 = 4,
  PROFILE_CUSTOM_1 = 19,
}

export enum ShareType {
  HEAT_PROFILE = "HEAT_PROFILE",
  MOOD_LIGHT = "MOOD_LIGHT",
}

export enum MoodLightCategory {
  CUSTOM = "custom",
  EXCLUSIVE = "exclusive",
}

export enum ProfileVersion {
  T = "T",
  PRE_T = "Pre-T",
}

export enum LightingPattern {
  STEADY = -1,
  BREATHING = 0,
  CIRCLING = 1,
  RISING = 2,
  PARTY_MODE = 3,
}

export enum MoodAnimation {
  NO_ANIMATION = 0,
  SLIDESHOW = 1,
  SPIN = 2,
  DISCO = 3,
  SINGLE_TRANSITION = 4,
}

export enum LumaAnimation {
  PRESERVE = 0,
  STEADY = 1,
  BREATHING = 5,
  RISING = 6,
  CIRCLING = 7,
  CIRCLING_SLOW = 21,
  USER_0 = 240,
  USER_1 = 241,
  USER_2 = 242,
  USER_3 = 243,
  USER_0_1 = 244,
  USER_2_3 = 245,
  USER_ALL = 246,
}

export enum BatteryChargeState {
  BULK = 0,
  TOPUP = 1,
  FULL = 2,
  OVERTEMP = 3,
  DISCONNECTED = 4,
}

export enum LED3Data {}
