import { DeviceState } from "./constants";

export function validState(state: DeviceState) {
  if (!state) return false;
  const required = ["battery", "totalDabs", "state", "deviceModel"];
  for (const key of required)
    if (typeof state[key] == "undefined") return false;
  return true;
}

export function lettersToNumber(str: string) {
  return str.split("").reduce((result: number, char: string) => {
    return result * 26 + char.charCodeAt(0) - 64;
  }, 0);
}

export function meetsMinimumFirmware(current: string, minimum: string) {
  return lettersToNumber(current) >= lettersToNumber(minimum);
}
