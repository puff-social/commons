export const EASTER_EGG_CYCLE_COUNTS = [420, 710, 1620, 1910];

export const TEMPERATURE_MAX = 644;
export const TEMPERATURE_MIN = 0;
export const PROFILE_TEMPERATURE_MIN = 400;

export enum ProductSeries {
  Pikachoid,
  Proxy,
}

export const ProductSeriesMap = {
  [ProductSeries.Pikachoid]: "Pikachoid",
  [ProductSeries.Proxy]: "Proxy",
};

export const DeviceModelColors = {
  Peak: "#6A6D78",
  Indiglow: "#8C59AC",
  Opal: "#C1BDA3",
  Guardian: "#CACBD2",
  PeachWhite: "#FFFFFF",
  PeachBlack: "#6A6D79",
  Desert: "#C5B4AA",
  Flourish: "#4B634E",
  Storm: "#585D76",
  Daybreak: "#581B1C",
};

export const ProxyDeviceModelColors = {
  Onyx: "TODO",
  Haze: "TODO",
};

export const crcPatterns = [
  0, 1996959894, 3993919788, 2567524794, 124634137, 1886057615, 3915621685,
  2657392035, 249268274, 2044508324, 3772115230, 2547177864, 162941995,
  2125561021, 3887607047, 2428444049, 498536548, 1789927666, 4089016648,
  2227061214, 450548861, 1843258603, 4107580753, 2211677639, 325883990,
  1684777152, 4251122042, 2321926636, 335633487, 1661365465, 4195302755,
  2366115317, 997073096, 1281953886, 3579855332, 2724688242, 1006888145,
  1258607687, 3524101629, 2768942443, 901097722, 1119000684, 3686517206,
  2898065728, 853044451, 1172266101, 3705015759, 2882616665, 651767980,
  1373503546, 3369554304, 3218104598, 565507253, 1454621731, 3485111705,
  3099436303, 671266974, 1594198024, 3322730930, 2970347812, 795835527,
  1483230225, 3244367275, 3060149565, 1994146192, 31158534, 2563907772,
  4023717930, 1907459465, 112637215, 2680153253, 3904427059, 2013776290,
  251722036, 2517215374, 3775830040, 2137656763, 141376813, 2439277719,
  3865271297, 1802195444, 476864866, 2238001368, 4066508878, 1812370925,
  453092731, 2181625025, 4111451223, 1706088902, 314042704, 2344532202,
  4240017532, 1658658271, 366619977, 2362670323, 4224994405, 1303535960,
  984961486, 2747007092, 3569037538, 1256170817, 1037604311, 2765210733,
  3554079995, 1131014506, 879679996, 2909243462, 3663771856, 1141124467,
  855842277, 2852801631, 3708648649, 1342533948, 654459306, 3188396048,
  3373015174, 1466479909, 544179635, 3110523913, 3462522015, 1591671054,
  702138776, 2966460450, 3352799412, 1504918807, 783551873, 3082640443,
  3233442989, 3988292384, 2596254646, 62317068, 1957810842, 3939845945,
  2647816111, 81470997, 1943803523, 3814918930, 2489596804, 225274430,
  2053790376, 3826175755, 2466906013, 167816743, 2097651377, 4027552580,
  2265490386, 503444072, 1762050814, 4150417245, 2154129355, 426522225,
  1852507879, 4275313526, 2312317920, 282753626, 1742555852, 4189708143,
  2394877945, 397917763, 1622183637, 3604390888, 2714866558, 953729732,
  1340076626, 3518719985, 2797360999, 1068828381, 1219638859, 3624741850,
  2936675148, 906185462, 1090812512, 3747672003, 2825379669, 829329135,
  1181335161, 3412177804, 3160834842, 628085408, 1382605366, 3423369109,
  3138078467, 570562233, 1426400815, 3317316542, 2998733608, 733239954,
  1555261956, 3268935591, 3050360625, 752459403, 1541320221, 2607071920,
  3965973030, 1969922972, 40735498, 2617837225, 3943577151, 1913087877,
  83908371, 2512341634, 3803740692, 2075208622, 213261112, 2463272603,
  3855990285, 2094854071, 198958881, 2262029012, 4057260610, 1759359992,
  534414190, 2176718541, 4139329115, 1873836001, 414664567, 2282248934,
  4279200368, 1711684554, 285281116, 2405801727, 4167216745, 1634467795,
  376229701, 2685067896, 3608007406, 1308918612, 956543938, 2808555105,
  3495958263, 1231636301, 1047427035, 2932959818, 3654703836, 1088359270,
  936918000, 2847714899, 3736837829, 1202900863, 817233897, 3183342108,
  3401237130, 1404277552, 615818150, 3134207493, 3453421203, 1423857449,
  601450431, 3009837614, 3294710456, 1567103746, 711928724, 3020668471,
  3272380065, 1510334235, 755167117,
];

export const ProductModels = [
  "0", // Model Code for Peak Pro (OG)
  "21", // Product Code for Pikachu Peak Pro (OG)
  "4294967295", // Model Code for Peak Pro (OG)
  "1", // Model Code for Peak Pro (Opal)
  "22", // Product Code for Pikachu Peak Pro (Opal)
  "2", // Model Code for Peak Pro (Indiglow)
  "4", // Model Code for Peak Pro (Guardian)
  "26", // Product Code for Pikachu Peak Pro (Guardian)
  "12", // Model Code for Peak Pro v2 (Pearl)
  "13", // Model Code for Peak Pro v2 (Onyx)
  "51", // Product Code for Peach Peak Pro (OG)
  "71", // Product Code for Peach Peak Pro v2 (Onyx)
  "72", // Product Code for Peach Peak Pro v2 (Pearl)
  "15", // Model Code for Peak Pro v2 (Desert)
  "74", // Product Code for Peach Peak Pro v2 (Desert)
  "17", // Model Code for Peak Pro v2 (Flourish)
  "75", // Product Code for Peach Peak Pro v2 (Flourish)
  "19", // Model Code for Peak Pro v2 (Storm)
  "78", // Product Code for Peach Peak Pro v2 (Storm)
  "79", // Product Code for Peach Peak Pro v2 (Onyx)
  "80", // Product Code for Peach Peak Pro v2 (Pearl)
  "23", // Model Code for Peach Peak Pro v2 (Storm)
  "81", // Product Code for Peach Peak Pro v2 (Storm)
  "10", // Model Code for Proxy (Onyx)
  "11", // Model Code for Proxy (Haze)
] as const;

export const SerialPrefixMap = {
  Peak: "21",
  Opal: "22",
  PeakAlt: "51",
  Onyx: "71",
  Pearl: "72",
  Desert: "74",
  Flourish: "75",
  Storm: "78",
  Daybreak: "81",
  ProxyOnyx: "10",
  ProxyHaze: "11",
} as const;

export const DeviceModels = {
  Peak: "0",
  PeakAlt: "4294967295",
  Opal: "1",
  Indiglow: "2",
  Guardian: "4",
  Onyx: "13",
  Pearl: "12",
  Desert: "15",
  Flourish: "17",
  Storm: "19",
  Daybreak: "23",
} as const;

export const ProxyDeviceModels = {
  Onyx: "0",
  Haze: "1",
} as const;

export const ProductModelMap = {
  "0": "Peak",
  "21": "Peak",
  "4294967295": "Peak",
  "1": "Opal",
  "22": "Opal",
  "2": "Indiglow",
  "4": "Guardian",
  "26": "Guardian",
  "12": "Pearl",
  "13": "Onyx",
  "51": "Peak",
  "71": "Onyx",
  "72": "Pearl",
  "15": "Desert",
  "74": "Desert",
  "17": "Flourish",
  "75": "Flourish",
  "19": "Storm",
  "78": "Storm",
  "79": "Onyx",
  "80": "Pearl",
  "23": "Daybreak",
  "81": "Daybreak",
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
  API_VERSIONS: "AT",
};

export enum PuffcoOperatingState {
  INIT_MEMORY,
  INIT_VERSION_DISPLAY,
  INIT_BATTERY_DISPLAY,
  MASTER_OFF = 3,
  SLEEP,
  IDLE,
  TEMP_SELECT,
  HEAT_CYCLE_PREHEAT,
  HEAT_CYCLE_ACTIVE,
  HEAT_CYCLE_FADE,
  VERSION_DISP,
  BATTERY_DISP,
  FACTORY_TEST,
  BLE_BONDING_,
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

// WIP
export const LED3Data = {
  [MoodType.NO_ANIMATION]: "NO_ANIMATION",
  [MoodType.DISCO]: "DISCO",
  [MoodType.FADE]: "FADE",
  [MoodType.SPIN]: "SPIN",
  [MoodType.SPLIT_GRADIENT]: "SPLIT_GRADIENT",
  [MoodType.VERTICAL_SLIDESHOW]: "VERTICAL_SLIDESHOW",
  [MoodType.TORNADO]: "NO_ANIMATION",
  [MoodType.BREATHING]: "BREATHING",
  [MoodType.CIRCLING_SLOW]: "CIRCLING_SLOW",
  [MoodType.LAVA_LAMP]: "LAVA_LAMP",
  [MoodType.CONFETTI]: "CONFETTI",
};

export const AtmosicOuis = ["F0AD4E"];

export const SilabsOuis = [
  "000B57",
  "003C84",
  "040D84",
  "048727",
  "04CD15",
  "04E3E5",
  "086BD7",
  "08B95F",
  "08DDEB",
  "0C2A6F",
  "0C4314",
  "0CAE5F",
  "0CEFF6",
  "142D41",
  "14B457",
  "187A3E",
  "1C34F1",
  "1CC089",
  "286847",
  "287681",
  "28DBA7",
  "2C1165",
  "30FB10",
  "3410F4",
  "3425B4",
  "38398F",
  "385B44",
  "385CFB",
  "3C2EF5",
  "403059",
  "44E2F8",
  "4C5BB3",
  "4C97A1",
  "50325F",
  "540F57",
  "583BC2",
  "588E81",
  "5C0272",
  "5CC7C1",
  "60A423",
  "60B647",
  "60EFAB",
  "680AE2",
  "6C5CB1",
  "6CFD22",
  "705464",
  "70AC08",
  "70C59C",
  "7CC6B6",
  "804B50",
  "842712",
  "842E14",
  "847127",
  "84B4DB",
  "84BA20",
  "84FD27",
  "881A14",
  "8C65A3",
  "8C6FB9",
  "8CF681",
  "9035EA",
  "90395E",
  "90AB96",
  "90FD9F",
  "943469",
  "94B216",
  "94DEB8",
  "94EC32",
  "980C33",
  "A46DD4",
  "A49E69",
  "B0C7DE",
  "B43522",
  "B43A31",
  "B4E3F9",
  "BC026E",
  "BC33AC",
  "C4D8C8",
  "CC86EC",
  "CCCCCC",
  "D0CF5E",
  "D44867",
  "D87A3B",
  "DC8E95",
  "E0798D",
  "E406BF",
  "E8E07E",
  "EC1BBD",
  "ECF64C",
  "F082C0",
  "F4B3B1",
  "F84477",
  "FC4D6A",
];
