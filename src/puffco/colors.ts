import { CBOR } from "cbor-redux";

type Rgb = { r: number; g: number; b: number };

export function parseHeatColorBuffer(buf: ArrayBuffer | Uint8Array) {
  const u8 = buf instanceof Uint8Array ? buf : new Uint8Array(buf);
  const hex = Array.from(u8)
    .map((b) => b.toString(16).padStart(2, "0"))
    .join("");
  const bytes = Array.from(u8);

  const ret: any = { rawHex: hex, bytes };

  if (u8.byteLength === 4) {
    const a = u8;
    if (a[3] === 0) {
      ret.type = "rgb";
      ret.r = a[0];
      ret.g = a[1];
      ret.b = a[2];
      ret.asCss = `rgb(${ret.r}, ${ret.g}, ${ret.b})`;
    } else {
      ret.type = "table";
      ret.luma = a[0];
      ret.speed = a[1];
      ret.colorIndexEncoded = a[2];
      ret.offsetIndexEncoded = a[3];
    }
    return ret;
  }

  if (u8.byteLength === 8) {
    const a = u8;
    if (a[3] === 0) {
      ret.type = "rgb";
      ret.r = a[0];
      ret.g = a[1];
      ret.b = a[2];
      ret.lumaAnim = a[4];
      ret.asCss = `rgb(${ret.r}, ${ret.g}, ${ret.b})`;
    } else if (a[3] === 1) {
      ret.type = "table";
      ret.luma = a[0];
      ret.speed = a[1];
      ret.lumaAnim = a[2];
      ret.pllNum = a[4];
      ret.pllDenom = a[5];
      ret.offsetIndex = a[6] >> 4;
      ret.colorIndex = a[6] & 0xf;
      ret.colorLength = a[7] & 0x1f || 32;
    } else if (a[3] === 0xff) {
      ret.type = "null";
    } else {
      ret.type = "unknown";
    }
    return ret;
  }

  try {
    const bufferToDecode =
      u8.byteOffset === 0 && u8.byteLength === u8.buffer.byteLength
        ? u8.buffer
        : u8.slice(0).buffer;
    const decoded = CBOR.decode(bufferToDecode);
    ret.type = "cbor";
    ret.decoded = decoded;

    const unpackRgbBytes = (ab: ArrayBuffer | Uint8Array) => {
      const arr = ab instanceof Uint8Array ? ab : new Uint8Array(ab);
      if (arr.byteLength % 3 !== 0) return null;
      const n = arr.byteLength / 3;
      const out: Rgb[] = [];
      for (let i = 0; i < n; ++i) {
        out.push({ r: arr[i * 3 + 0], g: arr[i * 3 + 1], b: arr[i * 3 + 2] });
      }
      return out;
    };

    const rgbToHex = (c: Rgb) =>
      `#${c.r.toString(16).padStart(2, "0")}${c.g
        .toString(16)
        .padStart(2, "0")}${c.b.toString(16).padStart(2, "0")}`;

    const tryExtract = (obj: any) => {
      if (!obj) return null;
      if (obj instanceof ArrayBuffer || obj instanceof Uint8Array)
        return unpackRgbBytes(obj);

      if (ArrayBuffer.isView(obj) && obj.buffer)
        return unpackRgbBytes(obj.buffer);
      if (
        Array.isArray(obj) &&
        obj.length &&
        typeof obj[0] === "object" &&
        "r" in obj[0]
      )
        return obj.map((c) => ({ r: c.r, g: c.g, b: c.b }));

      return null;
    };

    let colors: Rgb[] | null = null;
    if (decoded && typeof decoded === "object") {
      if (decoded.lamp && decoded.lamp.param && decoded.lamp.param.color)
        colors = tryExtract(decoded.lamp.param.color);
      if (!colors && decoded.meta && decoded.meta.userColors)
        colors = tryExtract(decoded.meta.userColors);
      if (!colors && decoded.color) colors = tryExtract(decoded.color);
      if (!colors && decoded.colors) colors = tryExtract(decoded.colors);
    }

    if (colors) {
      ret.colors = colors;
      ret.firstColor = colors[0];
      ret.firstColorHex = rgbToHex(ret.firstColor);
      ret.asCss = `rgb(${ret.firstColor.r}, ${ret.firstColor.g}, ${ret.firstColor.b})`;
    }

    return ret;
  } catch (err) {
    ret.type = "unknown";
    ret.decodeError = String(err);
    return ret;
  }
}
