export const ProductModelMap = [
  "0",
  "21", // Why another one
  "4294967295", // wtf is this puffco
  "1",
  "22", // Again why another, what happened here?
  "2",
  "4",
] as const;

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

export interface Colors {
  r: number;
  g: number;
  b: number;
}

export interface GatewayDeviceProfile {
  name: string;
  temp: number;
  time: string;
}

export interface DeviceState {
  temperature: number;
  battery: number;
  brightness: number;
  totalDabs: number;
  charging: "USB" | "None" | "Wireless";
  profileColor: Colors;
  activeColor: Colors;
  state: PuffcoOperatingState;
  chargeSource: ChargeSource;
  deviceName: string;
  profile: GatewayDeviceProfile;
  chamberType: ChamberType;
  deviceModel: string;
}
