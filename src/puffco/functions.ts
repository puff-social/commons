import { DeviceState, crcPatterns } from "./constants";

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

export function numbersToLetters(value: number) {
  let letters = "";
  while (value-- > 0) {
    letters = String.fromCharCode((value % 26) + 65) + letters;
    value = Math.floor(value / 26);
  }
  return letters || "A";
}

export function intArrayToMacAddress(uint8Array: Uint8Array): string {
  const hexString = Array.from(uint8Array)
    .reverse()
    .map((byte) => byte.toString(16).padStart(2, "0"))
    .join(":");

  return hexString.toUpperCase();
}

export function crc32(arr: Buffer) {
  let crc = 4294967295;
  arr.forEach((n) => (crc = (crc >>> 8) ^ crcPatterns[(crc ^ n) & 255]));
  return crc ^ 4294967295;
}

export function isOtaValid(firmware: Buffer) {
  const firmwareLength = firmware.length - 4;
  const firmwareData = firmware.subarray(0, firmwareLength);
  const crcData = firmware.subarray(firmwareLength);

  return crcData.readInt32LE(0) === crc32(firmwareData);
}
