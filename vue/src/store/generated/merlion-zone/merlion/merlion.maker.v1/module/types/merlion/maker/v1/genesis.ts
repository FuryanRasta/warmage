/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "merlion.maker.v1";

/** GenesisState defines the maker module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  backingRatio: string;
}

/** Params defines the parameters for the maker module. */
export interface Params {
  /** step of adjusting backing ratio */
  backingRatioStep: string;
  /** price band for adjusting backing ratio */
  backingRatioPriceBand: string;
  /** cooldown period for adjusting backing ratio */
  backingRatioCooldownPeriod: number;
  /** mint Mer price bias ratio */
  mintPriceBias: string;
  /** burn Mer price bias ratio */
  burnPriceBias: string;
  /** reback bonus ratio */
  rebackBonus: string;
  /** liquidation commission fee ratio */
  liquidationCommissionFee: string;
}

const baseGenesisState: object = { backingRatio: "" };

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingRatio !== "") {
      writer.uint32(18).string(message.backingRatio);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): GenesisState {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseGenesisState } as GenesisState;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingRatio = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    if (object.backingRatio !== undefined && object.backingRatio !== null) {
      message.backingRatio = String(object.backingRatio);
    } else {
      message.backingRatio = "";
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.backingRatio !== undefined &&
      (obj.backingRatio = message.backingRatio);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (object.backingRatio !== undefined && object.backingRatio !== null) {
      message.backingRatio = object.backingRatio;
    } else {
      message.backingRatio = "";
    }
    return message;
  },
};

const baseParams: object = {
  backingRatioStep: "",
  backingRatioPriceBand: "",
  backingRatioCooldownPeriod: 0,
  mintPriceBias: "",
  burnPriceBias: "",
  rebackBonus: "",
  liquidationCommissionFee: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.backingRatioStep !== "") {
      writer.uint32(10).string(message.backingRatioStep);
    }
    if (message.backingRatioPriceBand !== "") {
      writer.uint32(18).string(message.backingRatioPriceBand);
    }
    if (message.backingRatioCooldownPeriod !== 0) {
      writer.uint32(24).int64(message.backingRatioCooldownPeriod);
    }
    if (message.mintPriceBias !== "") {
      writer.uint32(34).string(message.mintPriceBias);
    }
    if (message.burnPriceBias !== "") {
      writer.uint32(42).string(message.burnPriceBias);
    }
    if (message.rebackBonus !== "") {
      writer.uint32(50).string(message.rebackBonus);
    }
    if (message.liquidationCommissionFee !== "") {
      writer.uint32(58).string(message.liquidationCommissionFee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): Params {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseParams } as Params;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingRatioStep = reader.string();
          break;
        case 2:
          message.backingRatioPriceBand = reader.string();
          break;
        case 3:
          message.backingRatioCooldownPeriod = longToNumber(
            reader.int64() as Long
          );
          break;
        case 4:
          message.mintPriceBias = reader.string();
          break;
        case 5:
          message.burnPriceBias = reader.string();
          break;
        case 6:
          message.rebackBonus = reader.string();
          break;
        case 7:
          message.liquidationCommissionFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): Params {
    const message = { ...baseParams } as Params;
    if (
      object.backingRatioStep !== undefined &&
      object.backingRatioStep !== null
    ) {
      message.backingRatioStep = String(object.backingRatioStep);
    } else {
      message.backingRatioStep = "";
    }
    if (
      object.backingRatioPriceBand !== undefined &&
      object.backingRatioPriceBand !== null
    ) {
      message.backingRatioPriceBand = String(object.backingRatioPriceBand);
    } else {
      message.backingRatioPriceBand = "";
    }
    if (
      object.backingRatioCooldownPeriod !== undefined &&
      object.backingRatioCooldownPeriod !== null
    ) {
      message.backingRatioCooldownPeriod = Number(
        object.backingRatioCooldownPeriod
      );
    } else {
      message.backingRatioCooldownPeriod = 0;
    }
    if (object.mintPriceBias !== undefined && object.mintPriceBias !== null) {
      message.mintPriceBias = String(object.mintPriceBias);
    } else {
      message.mintPriceBias = "";
    }
    if (object.burnPriceBias !== undefined && object.burnPriceBias !== null) {
      message.burnPriceBias = String(object.burnPriceBias);
    } else {
      message.burnPriceBias = "";
    }
    if (object.rebackBonus !== undefined && object.rebackBonus !== null) {
      message.rebackBonus = String(object.rebackBonus);
    } else {
      message.rebackBonus = "";
    }
    if (
      object.liquidationCommissionFee !== undefined &&
      object.liquidationCommissionFee !== null
    ) {
      message.liquidationCommissionFee = String(
        object.liquidationCommissionFee
      );
    } else {
      message.liquidationCommissionFee = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.backingRatioStep !== undefined &&
      (obj.backingRatioStep = message.backingRatioStep);
    message.backingRatioPriceBand !== undefined &&
      (obj.backingRatioPriceBand = message.backingRatioPriceBand);
    message.backingRatioCooldownPeriod !== undefined &&
      (obj.backingRatioCooldownPeriod = message.backingRatioCooldownPeriod);
    message.mintPriceBias !== undefined &&
      (obj.mintPriceBias = message.mintPriceBias);
    message.burnPriceBias !== undefined &&
      (obj.burnPriceBias = message.burnPriceBias);
    message.rebackBonus !== undefined &&
      (obj.rebackBonus = message.rebackBonus);
    message.liquidationCommissionFee !== undefined &&
      (obj.liquidationCommissionFee = message.liquidationCommissionFee);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (
      object.backingRatioStep !== undefined &&
      object.backingRatioStep !== null
    ) {
      message.backingRatioStep = object.backingRatioStep;
    } else {
      message.backingRatioStep = "";
    }
    if (
      object.backingRatioPriceBand !== undefined &&
      object.backingRatioPriceBand !== null
    ) {
      message.backingRatioPriceBand = object.backingRatioPriceBand;
    } else {
      message.backingRatioPriceBand = "";
    }
    if (
      object.backingRatioCooldownPeriod !== undefined &&
      object.backingRatioCooldownPeriod !== null
    ) {
      message.backingRatioCooldownPeriod = object.backingRatioCooldownPeriod;
    } else {
      message.backingRatioCooldownPeriod = 0;
    }
    if (object.mintPriceBias !== undefined && object.mintPriceBias !== null) {
      message.mintPriceBias = object.mintPriceBias;
    } else {
      message.mintPriceBias = "";
    }
    if (object.burnPriceBias !== undefined && object.burnPriceBias !== null) {
      message.burnPriceBias = object.burnPriceBias;
    } else {
      message.burnPriceBias = "";
    }
    if (object.rebackBonus !== undefined && object.rebackBonus !== null) {
      message.rebackBonus = object.rebackBonus;
    } else {
      message.rebackBonus = "";
    }
    if (
      object.liquidationCommissionFee !== undefined &&
      object.liquidationCommissionFee !== null
    ) {
      message.liquidationCommissionFee = object.liquidationCommissionFee;
    } else {
      message.liquidationCommissionFee = "";
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
