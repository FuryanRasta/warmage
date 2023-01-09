/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.ve.v1";

export interface EventCreate {
  sender: string;
  receiver: string;
  veId: string;
  amount: Coin | undefined;
  unlockTime: number;
}

export interface EventDeposit {
  sender: string;
  veId: string;
  amount: Coin | undefined;
}

export interface EventExtendTime {
  sender: string;
  veId: string;
  unlockTime: number;
}

export interface EventMerge {
  sender: string;
  fromVeId: string;
  toVeId: string;
}

export interface EventWithdraw {
  sender: string;
  veId: string;
}

const baseEventCreate: object = {
  sender: "",
  receiver: "",
  veId: "",
  unlockTime: 0,
};

export const EventCreate = {
  encode(message: EventCreate, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.receiver !== "") {
      writer.uint32(18).string(message.receiver);
    }
    if (message.veId !== "") {
      writer.uint32(26).string(message.veId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    if (message.unlockTime !== 0) {
      writer.uint32(40).uint64(message.unlockTime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventCreate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventCreate } as EventCreate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.receiver = reader.string();
          break;
        case 3:
          message.veId = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.unlockTime = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventCreate {
    const message = { ...baseEventCreate } as EventCreate;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = String(object.receiver);
    } else {
      message.receiver = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = String(object.veId);
    } else {
      message.veId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.unlockTime !== undefined && object.unlockTime !== null) {
      message.unlockTime = Number(object.unlockTime);
    } else {
      message.unlockTime = 0;
    }
    return message;
  },

  toJSON(message: EventCreate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.receiver !== undefined && (obj.receiver = message.receiver);
    message.veId !== undefined && (obj.veId = message.veId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.unlockTime !== undefined && (obj.unlockTime = message.unlockTime);
    return obj;
  },

  fromPartial(object: DeepPartial<EventCreate>): EventCreate {
    const message = { ...baseEventCreate } as EventCreate;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.receiver !== undefined && object.receiver !== null) {
      message.receiver = object.receiver;
    } else {
      message.receiver = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.unlockTime !== undefined && object.unlockTime !== null) {
      message.unlockTime = object.unlockTime;
    } else {
      message.unlockTime = 0;
    }
    return message;
  },
};

const baseEventDeposit: object = { sender: "", veId: "" };

export const EventDeposit = {
  encode(message: EventDeposit, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventDeposit } as EventDeposit;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.veId = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventDeposit {
    const message = { ...baseEventDeposit } as EventDeposit;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = String(object.veId);
    } else {
      message.veId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },

  toJSON(message: EventDeposit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<EventDeposit>): EventDeposit {
    const message = { ...baseEventDeposit } as EventDeposit;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    return message;
  },
};

const baseEventExtendTime: object = { sender: "", veId: "", unlockTime: 0 };

export const EventExtendTime = {
  encode(message: EventExtendTime, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    if (message.unlockTime !== 0) {
      writer.uint32(24).uint64(message.unlockTime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventExtendTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventExtendTime } as EventExtendTime;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.veId = reader.string();
          break;
        case 3:
          message.unlockTime = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventExtendTime {
    const message = { ...baseEventExtendTime } as EventExtendTime;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = String(object.veId);
    } else {
      message.veId = "";
    }
    if (object.unlockTime !== undefined && object.unlockTime !== null) {
      message.unlockTime = Number(object.unlockTime);
    } else {
      message.unlockTime = 0;
    }
    return message;
  },

  toJSON(message: EventExtendTime): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.unlockTime !== undefined && (obj.unlockTime = message.unlockTime);
    return obj;
  },

  fromPartial(object: DeepPartial<EventExtendTime>): EventExtendTime {
    const message = { ...baseEventExtendTime } as EventExtendTime;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = "";
    }
    if (object.unlockTime !== undefined && object.unlockTime !== null) {
      message.unlockTime = object.unlockTime;
    } else {
      message.unlockTime = 0;
    }
    return message;
  },
};

const baseEventMerge: object = { sender: "", fromVeId: "", toVeId: "" };

export const EventMerge = {
  encode(message: EventMerge, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.fromVeId !== "") {
      writer.uint32(18).string(message.fromVeId);
    }
    if (message.toVeId !== "") {
      writer.uint32(26).string(message.toVeId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventMerge {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventMerge } as EventMerge;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.fromVeId = reader.string();
          break;
        case 3:
          message.toVeId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventMerge {
    const message = { ...baseEventMerge } as EventMerge;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.fromVeId !== undefined && object.fromVeId !== null) {
      message.fromVeId = String(object.fromVeId);
    } else {
      message.fromVeId = "";
    }
    if (object.toVeId !== undefined && object.toVeId !== null) {
      message.toVeId = String(object.toVeId);
    } else {
      message.toVeId = "";
    }
    return message;
  },

  toJSON(message: EventMerge): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.fromVeId !== undefined && (obj.fromVeId = message.fromVeId);
    message.toVeId !== undefined && (obj.toVeId = message.toVeId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventMerge>): EventMerge {
    const message = { ...baseEventMerge } as EventMerge;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.fromVeId !== undefined && object.fromVeId !== null) {
      message.fromVeId = object.fromVeId;
    } else {
      message.fromVeId = "";
    }
    if (object.toVeId !== undefined && object.toVeId !== null) {
      message.toVeId = object.toVeId;
    } else {
      message.toVeId = "";
    }
    return message;
  },
};

const baseEventWithdraw: object = { sender: "", veId: "" };

export const EventWithdraw = {
  encode(message: EventWithdraw, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): EventWithdraw {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseEventWithdraw } as EventWithdraw;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.veId = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EventWithdraw {
    const message = { ...baseEventWithdraw } as EventWithdraw;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = String(object.veId);
    } else {
      message.veId = "";
    }
    return message;
  },

  toJSON(message: EventWithdraw): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    return obj;
  },

  fromPartial(object: DeepPartial<EventWithdraw>): EventWithdraw {
    const message = { ...baseEventWithdraw } as EventWithdraw;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = "";
    }
    return message;
  },
};

declare var self: any | undefined;
declare var window: any | undefined;
var globalThis: any = (() => {
  if (typeof globalThis !== "undefined") return globalThis;
  if (typeof self !== "undefined") return self;
  if (typeof window !== "undefined") return window;
  if (typeof global !== "undefined") return global;
  throw "Unable to locate global object";
})();

type Builtin = Date | Function | Uint8Array | string | number | undefined;
export type DeepPartial<T> = T extends Builtin
  ? T
  : T extends Array<infer U>
  ? Array<DeepPartial<U>>
  : T extends ReadonlyArray<infer U>
  ? ReadonlyArray<DeepPartial<U>>
  : T extends {}
  ? { [K in keyof T]?: DeepPartial<T[K]> }
  : Partial<T>;

function longToNumber(long: Long): number {
  if (long.gt(Number.MAX_SAFE_INTEGER)) {
    throw new globalThis.Error("Value is larger than Number.MAX_SAFE_INTEGER");
  }
  return long.toNumber();
}

if (util.Long !== Long) {
  util.Long = Long as any;
  configure();
}
