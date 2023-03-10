/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.ve.v1";

export interface MsgCreate {
  sender: string;
  to: string;
  amount: Coin | undefined;
  lockDuration: number;
}

export interface MsgCreateResponse {
  veId: string;
  unlockTime: number;
}

export interface MsgDeposit {
  sender: string;
  veId: string;
  /** Amount to deposit, must be greater than 0 */
  amount: Coin | undefined;
}

export interface MsgDepositResponse {}

export interface MsgExtendTime {
  sender: string;
  veId: string;
  /** Locking duration, must be greater than current locking duration */
  lockDuration: number;
}

export interface MsgExtendTimeResponse {}

export interface MsgMerge {
  sender: string;
  fromVeId: string;
  toVeId: string;
}

export interface MsgMergeResponse {}

export interface MsgWithdraw {
  sender: string;
  veId: string;
}

export interface MsgWithdrawResponse {}

const baseMsgCreate: object = { sender: "", to: "", lockDuration: 0 };

export const MsgCreate = {
  encode(message: MsgCreate, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(26).fork()).ldelim();
    }
    if (message.lockDuration !== 0) {
      writer.uint32(32).uint64(message.lockDuration);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreate } as MsgCreate;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.to = reader.string();
          break;
        case 3:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lockDuration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = String(object.to);
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromJSON(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.lockDuration !== undefined && object.lockDuration !== null) {
      message.lockDuration = Number(object.lockDuration);
    } else {
      message.lockDuration = 0;
    }
    return message;
  },

  toJSON(message: MsgCreate): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    message.lockDuration !== undefined &&
      (obj.lockDuration = message.lockDuration);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreate>): MsgCreate {
    const message = { ...baseMsgCreate } as MsgCreate;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (object.to !== undefined && object.to !== null) {
      message.to = object.to;
    } else {
      message.to = "";
    }
    if (object.amount !== undefined && object.amount !== null) {
      message.amount = Coin.fromPartial(object.amount);
    } else {
      message.amount = undefined;
    }
    if (object.lockDuration !== undefined && object.lockDuration !== null) {
      message.lockDuration = object.lockDuration;
    } else {
      message.lockDuration = 0;
    }
    return message;
  },
};

const baseMsgCreateResponse: object = { veId: "", unlockTime: 0 };

export const MsgCreateResponse = {
  encode(message: MsgCreateResponse, writer: Writer = Writer.create()): Writer {
    if (message.veId !== "") {
      writer.uint32(10).string(message.veId);
    }
    if (message.unlockTime !== 0) {
      writer.uint32(16).uint64(message.unlockTime);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgCreateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = reader.string();
          break;
        case 2:
          message.unlockTime = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
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

  toJSON(message: MsgCreateResponse): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = message.veId);
    message.unlockTime !== undefined && (obj.unlockTime = message.unlockTime);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgCreateResponse>): MsgCreateResponse {
    const message = { ...baseMsgCreateResponse } as MsgCreateResponse;
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

const baseMsgDeposit: object = { sender: "", veId: "" };

export const MsgDeposit = {
  encode(message: MsgDeposit, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgDeposit {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDeposit } as MsgDeposit;
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

  fromJSON(object: any): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
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

  toJSON(message: MsgDeposit): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDeposit>): MsgDeposit {
    const message = { ...baseMsgDeposit } as MsgDeposit;
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

const baseMsgDepositResponse: object = {};

export const MsgDepositResponse = {
  encode(_: MsgDepositResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDepositResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },

  toJSON(_: MsgDepositResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgDepositResponse>): MsgDepositResponse {
    const message = { ...baseMsgDepositResponse } as MsgDepositResponse;
    return message;
  },
};

const baseMsgExtendTime: object = { sender: "", veId: "", lockDuration: 0 };

export const MsgExtendTime = {
  encode(message: MsgExtendTime, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    if (message.lockDuration !== 0) {
      writer.uint32(24).uint64(message.lockDuration);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExtendTime {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExtendTime } as MsgExtendTime;
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
          message.lockDuration = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgExtendTime {
    const message = { ...baseMsgExtendTime } as MsgExtendTime;
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
    if (object.lockDuration !== undefined && object.lockDuration !== null) {
      message.lockDuration = Number(object.lockDuration);
    } else {
      message.lockDuration = 0;
    }
    return message;
  },

  toJSON(message: MsgExtendTime): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    message.lockDuration !== undefined &&
      (obj.lockDuration = message.lockDuration);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgExtendTime>): MsgExtendTime {
    const message = { ...baseMsgExtendTime } as MsgExtendTime;
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
    if (object.lockDuration !== undefined && object.lockDuration !== null) {
      message.lockDuration = object.lockDuration;
    } else {
      message.lockDuration = 0;
    }
    return message;
  },
};

const baseMsgExtendTimeResponse: object = {};

export const MsgExtendTimeResponse = {
  encode(_: MsgExtendTimeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgExtendTimeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgExtendTimeResponse } as MsgExtendTimeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgExtendTimeResponse {
    const message = { ...baseMsgExtendTimeResponse } as MsgExtendTimeResponse;
    return message;
  },

  toJSON(_: MsgExtendTimeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgExtendTimeResponse>): MsgExtendTimeResponse {
    const message = { ...baseMsgExtendTimeResponse } as MsgExtendTimeResponse;
    return message;
  },
};

const baseMsgMerge: object = { sender: "", fromVeId: "", toVeId: "" };

export const MsgMerge = {
  encode(message: MsgMerge, writer: Writer = Writer.create()): Writer {
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

  decode(input: Reader | Uint8Array, length?: number): MsgMerge {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMerge } as MsgMerge;
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

  fromJSON(object: any): MsgMerge {
    const message = { ...baseMsgMerge } as MsgMerge;
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

  toJSON(message: MsgMerge): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.fromVeId !== undefined && (obj.fromVeId = message.fromVeId);
    message.toVeId !== undefined && (obj.toVeId = message.toVeId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMerge>): MsgMerge {
    const message = { ...baseMsgMerge } as MsgMerge;
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

const baseMsgMergeResponse: object = {};

export const MsgMergeResponse = {
  encode(_: MsgMergeResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMergeResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMergeResponse } as MsgMergeResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgMergeResponse {
    const message = { ...baseMsgMergeResponse } as MsgMergeResponse;
    return message;
  },

  toJSON(_: MsgMergeResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgMergeResponse>): MsgMergeResponse {
    const message = { ...baseMsgMergeResponse } as MsgMergeResponse;
    return message;
  },
};

const baseMsgWithdraw: object = { sender: "", veId: "" };

export const MsgWithdraw = {
  encode(message: MsgWithdraw, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.veId !== "") {
      writer.uint32(18).string(message.veId);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdraw {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
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

  fromJSON(object: any): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
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

  toJSON(message: MsgWithdraw): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.veId !== undefined && (obj.veId = message.veId);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgWithdraw>): MsgWithdraw {
    const message = { ...baseMsgWithdraw } as MsgWithdraw;
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

const baseMsgWithdrawResponse: object = {};

export const MsgWithdrawResponse = {
  encode(_: MsgWithdrawResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgWithdrawResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(_: any): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    return message;
  },

  toJSON(_: MsgWithdrawResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgWithdrawResponse>): MsgWithdrawResponse {
    const message = { ...baseMsgWithdrawResponse } as MsgWithdrawResponse;
    return message;
  },
};

/** Msg defines the ve Msg service. */
export interface Msg {
  /** Create creates a veNFT. */
  Create(request: MsgCreate): Promise<MsgCreateResponse>;
  /** Deposit deposits some coin amount for a veNFT. */
  Deposit(request: MsgDeposit): Promise<MsgDepositResponse>;
  /** ExtendTime extends locking duration for a veNFT. */
  ExtendTime(request: MsgExtendTime): Promise<MsgExtendTimeResponse>;
  /** Merge merges a veNFT (burn it) to another veNFT. */
  Merge(request: MsgMerge): Promise<MsgMergeResponse>;
  /** Withdraw withdraws all coin amount of a veNFT. */
  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  Create(request: MsgCreate): Promise<MsgCreateResponse> {
    const data = MsgCreate.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Create", data);
    return promise.then((data) => MsgCreateResponse.decode(new Reader(data)));
  }

  Deposit(request: MsgDeposit): Promise<MsgDepositResponse> {
    const data = MsgDeposit.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Deposit", data);
    return promise.then((data) => MsgDepositResponse.decode(new Reader(data)));
  }

  ExtendTime(request: MsgExtendTime): Promise<MsgExtendTimeResponse> {
    const data = MsgExtendTime.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "ExtendTime", data);
    return promise.then((data) =>
      MsgExtendTimeResponse.decode(new Reader(data))
    );
  }

  Merge(request: MsgMerge): Promise<MsgMergeResponse> {
    const data = MsgMerge.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Merge", data);
    return promise.then((data) => MsgMergeResponse.decode(new Reader(data)));
  }

  Withdraw(request: MsgWithdraw): Promise<MsgWithdrawResponse> {
    const data = MsgWithdraw.encode(request).finish();
    const promise = this.rpc.request("merlion.ve.v1.Msg", "Withdraw", data);
    return promise.then((data) => MsgWithdrawResponse.decode(new Reader(data)));
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
