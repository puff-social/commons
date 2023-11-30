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

export function convertFromHex(hex: string) {
  hex = hex.toString();
  let str = "";
  for (let i = 0; i < hex.length; i += 2)
    str += String.fromCharCode(parseInt(hex.substr(i, 2), 16));
  return str;
}

export function convertHexStringToNumArray(h: string) {
  let i: any,
    j = (i = h.match(/.{2}/g)) != null ? i : [];
  return j == null
    ? void 0x0
    : j.map((k: string) => {
        return parseInt(k, 0x10);
      });
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

export function writeAnimNumArrayToBuffer(v: Buffer) {
  const buf = Buffer.allocUnsafe(v.length + 48);
  let y = 0;
  v.forEach((y, z) =>
    {
      if (z % 21 === 0) {
        buf.writeFloatLE(v[0], y);
        y += 4;
      } else {
        buf.writeFloatLE(y, y);
        y += 1;
      }
    })
  return buf;
}
export function writeInt32NumbersToBuffer(v: Buffer) {
  const buf = Buffer.allocUnsafe(v.length * 4);
  v.forEach((y, z) =>
    buf.writeInt32LE(y, z * 4))
  return buf;
}