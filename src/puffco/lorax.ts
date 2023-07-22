import { LoraxLimits } from "../types/puffco";

export function constructLoraxCommand(
  op: number,
  seq: number,
  data?: Uint8Array
) {
  const alloc = Buffer.alloc(3);
  alloc.writeUInt16LE(seq, 0);
  alloc.writeUInt8(op, 2);

  if (data)
    return Buffer.concat([
      alloc,
      "byteLength" in data ? data : Buffer.from(data),
    ]);
  return alloc;
}

export function processLoraxEvent(message: ArrayBuffer) {
  const buffer = Buffer.from(message);
  const seq = buffer.readUInt16LE(0);
  const error = buffer.readUInt8(2);

  const byte = Buffer.from(buffer.subarray(3));
  const watchId = byte.readUInt16LE(0);
  const data = buffer.subarray(6);

  return { seq, error, data, watchId };
}

export function processLoraxReply(message: ArrayBuffer) {
  const buffer = Buffer.from(message);
  const seq = buffer.readUInt16LE(0);
  const error = buffer.readUInt8(2);
  const data = buffer.subarray(3);

  return { seq, error, data };
}

export function readCmd(loraxLimits: LoraxLimits, t: number, path: string) {
  const w = Buffer.alloc(6);
  w.writeUInt16LE(t, 0);
  w.writeUInt16LE(loraxLimits.maxPayload, 2);
  w.writeUInt16LE(0, 4);
  return w;
}

export function readShortCmd(loraxLimits: LoraxLimits, path: string) {
  const w = Buffer.alloc(4);
  w.writeUInt16LE(0, 0);
  w.writeUInt16LE(loraxLimits.maxPayload, 2);
  const t = Buffer.concat([w, Buffer.from(path)]);
  return t;
}

export function watchCmd(openCmdId: number, int = 1000, length = 1) {
  const w = Buffer.alloc(10);
  w.writeUInt16LE(openCmdId, 0);
  w.writeUInt16LE(0, 2);
  w.writeUInt16LE(int, 4);
  w.writeUInt16LE(0, 6);
  w.writeUInt16LE(length, 8);
  return w;
}

export function unwatchCmd(openCmdId: number) {
  const w = Buffer.alloc(2);
  w.writeUInt16LE(openCmdId, 0);
  return w;
}

export function writeShortCmd(path: string, data: Buffer, padding: boolean) {
  const w = Buffer.alloc(3);
  w.writeUInt16LE(0, 0);
  w.writeUInt8(0, 2);
  const t = Buffer.concat([
    w,
    Buffer.from(path),
    padding ? Buffer.concat([Buffer.from([0]), data]) : data,
  ]);
  return t;
}

export function writeCmd(
  loraxLimits: LoraxLimits,
  q: number,
  r: any,
  path: string,
  data: Buffer
) {
  const w = Buffer.alloc(4);
  w.writeUInt16LE(q, 0);
  w.writeUInt8(loraxLimits.maxPayload, 2);
  const t = Buffer.concat([w, Buffer.from(path), Buffer.from([0]), data]);
  return t;
}

export function openCmd(r: LoraxLimits, path: string) {
  const w = Buffer.alloc(1);
  w.writeUInt8(0, 0);

  const u = Buffer.concat([w, Buffer.from(path)]);
  return u;
}

export function closeCmd(id: number) {
  const w = Buffer.alloc(2);
  w.writeUInt16LE(id, 0);
  return w;
}
