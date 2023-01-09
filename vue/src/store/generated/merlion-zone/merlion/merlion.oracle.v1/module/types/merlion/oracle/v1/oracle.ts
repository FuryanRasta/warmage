/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "merlion.oracle.v1";

/** TargetSource enumerates the quotation source of a target asset. */
export enum TargetSource {
  /** TARGET_SOURCE_UNSPECIFIED - TARGET_SOURCE_UNSPECIFIED defines an invalid/undefined target source. */
  TARGET_SOURCE_UNSPECIFIED = 0,
  /** TARGET_SOURCE_VALIDATORS - TARGET_SOURCE_VALIDATORS target quotation source is from validators. */
  TARGET_SOURCE_VALIDATORS = 1,
  /** TARGET_SOURCE_DEX - TARGET_SOURCE_DEX target quotation source is from on-chain DEX. */
  TARGET_SOURCE_DEX = 2,
  /**
   * TARGET_SOURCE_INTERCHAIN_DEX - TARGET_SOURCE_INTERCHAIN_DEX target quotation source is from inter-chain
   * DEX.
   */
  TARGET_SOURCE_INTERCHAIN_DEX = 3,
  /**
   * TARGET_SOURCE_INTERCHAIN_ORACLE - TARGET_SOURCE_INTERCHAIN_ORACLE target quotation source is from inter-chain
   * oracle.
   */
  TARGET_SOURCE_INTERCHAIN_ORACLE = 4,
  UNRECOGNIZED = -1,
}

export function targetSourceFromJSON(object: any): TargetSource {
  switch (object) {
    case 0:
    case "TARGET_SOURCE_UNSPECIFIED":
      return TargetSource.TARGET_SOURCE_UNSPECIFIED;
    case 1:
    case "TARGET_SOURCE_VALIDATORS":
      return TargetSource.TARGET_SOURCE_VALIDATORS;
    case 2:
    case "TARGET_SOURCE_DEX":
      return TargetSource.TARGET_SOURCE_DEX;
    case 3:
    case "TARGET_SOURCE_INTERCHAIN_DEX":
      return TargetSource.TARGET_SOURCE_INTERCHAIN_DEX;
    case 4:
    case "TARGET_SOURCE_INTERCHAIN_ORACLE":
      return TargetSource.TARGET_SOURCE_INTERCHAIN_ORACLE;
    case -1:
    case "UNRECOGNIZED":
    default:
      return TargetSource.UNRECOGNIZED;
  }
}

export function targetSourceToJSON(object: TargetSource): string {
  switch (object) {
    case TargetSource.TARGET_SOURCE_UNSPECIFIED:
      return "TARGET_SOURCE_UNSPECIFIED";
    case TargetSource.TARGET_SOURCE_VALIDATORS:
      return "TARGET_SOURCE_VALIDATORS";
    case TargetSource.TARGET_SOURCE_DEX:
      return "TARGET_SOURCE_DEX";
    case TargetSource.TARGET_SOURCE_INTERCHAIN_DEX:
      return "TARGET_SOURCE_INTERCHAIN_DEX";
    case TargetSource.TARGET_SOURCE_INTERCHAIN_ORACLE:
      return "TARGET_SOURCE_INTERCHAIN_ORACLE";
    default:
      return "UNKNOWN";
  }
}

/** Params defines the parameters for the oracle module. */
export interface Params {
  votePeriod: number;
  voteThreshold: string;
  rewardBand: string;
  rewardDistributionWindow: number;
  slashFraction: string;
  slashWindow: number;
  minValidPerWindow: string;
}

/**
 * AggregateExchangeRatePrevote represents the aggregate prevoting on the
 * ExchangeRateVote. The purpose of aggregate prevoting is to hide vote exchange
 * rates with hash which is formatted as hex string in SHA256("{salt}:{exchange
 * rate}{denom},...,{exchange rate}{denom}:{voter}")
 */
export interface AggregateExchangeRatePrevote {
  hash: string;
  voter: string;
  submitBlock: number;
}

/**
 * AggregateExchangeRateVote represents the voting on
 * the exchange rates of various assets denominated in uUSD.
 */
export interface AggregateExchangeRateVote {
  exchangeRateTuples: ExchangeRateTuple[];
  voter: string;
}

/** ExchangeRateTuple stores interpreted exchange rates data. */
export interface ExchangeRateTuple {
  denom: string;
  exchangeRate: string;
}

/**
 * RegisterTargetProposal is a gov Content type to register eligible
 * target asset which will be price quoted.
 */
export interface RegisterTargetProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** target params */
  targetParams: TargetParams | undefined;
}

export interface TargetParams {
  /** coin denom */
  denom: string;
  /** quotation source */
  source: TargetSource;
  /** quotation source DEX contract address */
  sourceDexContract: string;
}

const baseParams: object = {
  votePeriod: 0,
  voteThreshold: "",
  rewardBand: "",
  rewardDistributionWindow: 0,
  slashFraction: "",
  slashWindow: 0,
  minValidPerWindow: "",
};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.votePeriod !== 0) {
      writer.uint32(8).uint64(message.votePeriod);
    }
    if (message.voteThreshold !== "") {
      writer.uint32(18).string(message.voteThreshold);
    }
    if (message.rewardBand !== "") {
      writer.uint32(26).string(message.rewardBand);
    }
    if (message.rewardDistributionWindow !== 0) {
      writer.uint32(32).uint64(message.rewardDistributionWindow);
    }
    if (message.slashFraction !== "") {
      writer.uint32(42).string(message.slashFraction);
    }
    if (message.slashWindow !== 0) {
      writer.uint32(48).uint64(message.slashWindow);
    }
    if (message.minValidPerWindow !== "") {
      writer.uint32(58).string(message.minValidPerWindow);
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
          message.votePeriod = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.voteThreshold = reader.string();
          break;
        case 3:
          message.rewardBand = reader.string();
          break;
        case 4:
          message.rewardDistributionWindow = longToNumber(
            reader.uint64() as Long
          );
          break;
        case 5:
          message.slashFraction = reader.string();
          break;
        case 6:
          message.slashWindow = longToNumber(reader.uint64() as Long);
          break;
        case 7:
          message.minValidPerWindow = reader.string();
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
    if (object.votePeriod !== undefined && object.votePeriod !== null) {
      message.votePeriod = Number(object.votePeriod);
    } else {
      message.votePeriod = 0;
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = String(object.voteThreshold);
    } else {
      message.voteThreshold = "";
    }
    if (object.rewardBand !== undefined && object.rewardBand !== null) {
      message.rewardBand = String(object.rewardBand);
    } else {
      message.rewardBand = "";
    }
    if (
      object.rewardDistributionWindow !== undefined &&
      object.rewardDistributionWindow !== null
    ) {
      message.rewardDistributionWindow = Number(
        object.rewardDistributionWindow
      );
    } else {
      message.rewardDistributionWindow = 0;
    }
    if (object.slashFraction !== undefined && object.slashFraction !== null) {
      message.slashFraction = String(object.slashFraction);
    } else {
      message.slashFraction = "";
    }
    if (object.slashWindow !== undefined && object.slashWindow !== null) {
      message.slashWindow = Number(object.slashWindow);
    } else {
      message.slashWindow = 0;
    }
    if (
      object.minValidPerWindow !== undefined &&
      object.minValidPerWindow !== null
    ) {
      message.minValidPerWindow = String(object.minValidPerWindow);
    } else {
      message.minValidPerWindow = "";
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.votePeriod !== undefined && (obj.votePeriod = message.votePeriod);
    message.voteThreshold !== undefined &&
      (obj.voteThreshold = message.voteThreshold);
    message.rewardBand !== undefined && (obj.rewardBand = message.rewardBand);
    message.rewardDistributionWindow !== undefined &&
      (obj.rewardDistributionWindow = message.rewardDistributionWindow);
    message.slashFraction !== undefined &&
      (obj.slashFraction = message.slashFraction);
    message.slashWindow !== undefined &&
      (obj.slashWindow = message.slashWindow);
    message.minValidPerWindow !== undefined &&
      (obj.minValidPerWindow = message.minValidPerWindow);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.votePeriod !== undefined && object.votePeriod !== null) {
      message.votePeriod = object.votePeriod;
    } else {
      message.votePeriod = 0;
    }
    if (object.voteThreshold !== undefined && object.voteThreshold !== null) {
      message.voteThreshold = object.voteThreshold;
    } else {
      message.voteThreshold = "";
    }
    if (object.rewardBand !== undefined && object.rewardBand !== null) {
      message.rewardBand = object.rewardBand;
    } else {
      message.rewardBand = "";
    }
    if (
      object.rewardDistributionWindow !== undefined &&
      object.rewardDistributionWindow !== null
    ) {
      message.rewardDistributionWindow = object.rewardDistributionWindow;
    } else {
      message.rewardDistributionWindow = 0;
    }
    if (object.slashFraction !== undefined && object.slashFraction !== null) {
      message.slashFraction = object.slashFraction;
    } else {
      message.slashFraction = "";
    }
    if (object.slashWindow !== undefined && object.slashWindow !== null) {
      message.slashWindow = object.slashWindow;
    } else {
      message.slashWindow = 0;
    }
    if (
      object.minValidPerWindow !== undefined &&
      object.minValidPerWindow !== null
    ) {
      message.minValidPerWindow = object.minValidPerWindow;
    } else {
      message.minValidPerWindow = "";
    }
    return message;
  },
};

const baseAggregateExchangeRatePrevote: object = {
  hash: "",
  voter: "",
  submitBlock: 0,
};

export const AggregateExchangeRatePrevote = {
  encode(
    message: AggregateExchangeRatePrevote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    if (message.submitBlock !== 0) {
      writer.uint32(24).uint64(message.submitBlock);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AggregateExchangeRatePrevote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.voter = reader.string();
          break;
        case 3:
          message.submitBlock = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRatePrevote {
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    if (object.submitBlock !== undefined && object.submitBlock !== null) {
      message.submitBlock = Number(object.submitBlock);
    } else {
      message.submitBlock = 0;
    }
    return message;
  },

  toJSON(message: AggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.voter !== undefined && (obj.voter = message.voter);
    message.submitBlock !== undefined &&
      (obj.submitBlock = message.submitBlock);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AggregateExchangeRatePrevote>
  ): AggregateExchangeRatePrevote {
    const message = {
      ...baseAggregateExchangeRatePrevote,
    } as AggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    if (object.submitBlock !== undefined && object.submitBlock !== null) {
      message.submitBlock = object.submitBlock;
    } else {
      message.submitBlock = 0;
    }
    return message;
  },
};

const baseAggregateExchangeRateVote: object = { voter: "" };

export const AggregateExchangeRateVote = {
  encode(
    message: AggregateExchangeRateVote,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.exchangeRateTuples) {
      ExchangeRateTuple.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    if (message.voter !== "") {
      writer.uint32(18).string(message.voter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): AggregateExchangeRateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchangeRateTuples = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRateTuples.push(
            ExchangeRateTuple.decode(reader, reader.uint32())
          );
          break;
        case 2:
          message.voter = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AggregateExchangeRateVote {
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchangeRateTuples = [];
    if (
      object.exchangeRateTuples !== undefined &&
      object.exchangeRateTuples !== null
    ) {
      for (const e of object.exchangeRateTuples) {
        message.exchangeRateTuples.push(ExchangeRateTuple.fromJSON(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = String(object.voter);
    } else {
      message.voter = "";
    }
    return message;
  },

  toJSON(message: AggregateExchangeRateVote): unknown {
    const obj: any = {};
    if (message.exchangeRateTuples) {
      obj.exchangeRateTuples = message.exchangeRateTuples.map((e) =>
        e ? ExchangeRateTuple.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRateTuples = [];
    }
    message.voter !== undefined && (obj.voter = message.voter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<AggregateExchangeRateVote>
  ): AggregateExchangeRateVote {
    const message = {
      ...baseAggregateExchangeRateVote,
    } as AggregateExchangeRateVote;
    message.exchangeRateTuples = [];
    if (
      object.exchangeRateTuples !== undefined &&
      object.exchangeRateTuples !== null
    ) {
      for (const e of object.exchangeRateTuples) {
        message.exchangeRateTuples.push(ExchangeRateTuple.fromPartial(e));
      }
    }
    if (object.voter !== undefined && object.voter !== null) {
      message.voter = object.voter;
    } else {
      message.voter = "";
    }
    return message;
  },
};

const baseExchangeRateTuple: object = { denom: "", exchangeRate: "" };

export const ExchangeRateTuple = {
  encode(message: ExchangeRateTuple, writer: Writer = Writer.create()): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.exchangeRate !== "") {
      writer.uint32(18).string(message.exchangeRate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): ExchangeRateTuple {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = String(object.exchangeRate);
    } else {
      message.exchangeRate = "";
    }
    return message;
  },

  toJSON(message: ExchangeRateTuple): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.exchangeRate !== undefined &&
      (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial(object: DeepPartial<ExchangeRateTuple>): ExchangeRateTuple {
    const message = { ...baseExchangeRateTuple } as ExchangeRateTuple;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = object.exchangeRate;
    } else {
      message.exchangeRate = "";
    }
    return message;
  },
};

const baseRegisterTargetProposal: object = { title: "", description: "" };

export const RegisterTargetProposal = {
  encode(
    message: RegisterTargetProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.targetParams !== undefined) {
      TargetParams.encode(
        message.targetParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterTargetProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseRegisterTargetProposal } as RegisterTargetProposal;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.title = reader.string();
          break;
        case 2:
          message.description = reader.string();
          break;
        case 3:
          message.targetParams = TargetParams.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): RegisterTargetProposal {
    const message = { ...baseRegisterTargetProposal } as RegisterTargetProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = String(object.title);
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = String(object.description);
    } else {
      message.description = "";
    }
    if (object.targetParams !== undefined && object.targetParams !== null) {
      message.targetParams = TargetParams.fromJSON(object.targetParams);
    } else {
      message.targetParams = undefined;
    }
    return message;
  },

  toJSON(message: RegisterTargetProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.targetParams !== undefined &&
      (obj.targetParams = message.targetParams
        ? TargetParams.toJSON(message.targetParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterTargetProposal>
  ): RegisterTargetProposal {
    const message = { ...baseRegisterTargetProposal } as RegisterTargetProposal;
    if (object.title !== undefined && object.title !== null) {
      message.title = object.title;
    } else {
      message.title = "";
    }
    if (object.description !== undefined && object.description !== null) {
      message.description = object.description;
    } else {
      message.description = "";
    }
    if (object.targetParams !== undefined && object.targetParams !== null) {
      message.targetParams = TargetParams.fromPartial(object.targetParams);
    } else {
      message.targetParams = undefined;
    }
    return message;
  },
};

const baseTargetParams: object = {
  denom: "",
  source: 0,
  sourceDexContract: "",
};

export const TargetParams = {
  encode(message: TargetParams, writer: Writer = Writer.create()): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    if (message.source !== 0) {
      writer.uint32(16).int32(message.source);
    }
    if (message.sourceDexContract !== "") {
      writer.uint32(26).string(message.sourceDexContract);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TargetParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTargetParams } as TargetParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        case 2:
          message.source = reader.int32() as any;
          break;
        case 3:
          message.sourceDexContract = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TargetParams {
    const message = { ...baseTargetParams } as TargetParams;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = targetSourceFromJSON(object.source);
    } else {
      message.source = 0;
    }
    if (
      object.sourceDexContract !== undefined &&
      object.sourceDexContract !== null
    ) {
      message.sourceDexContract = String(object.sourceDexContract);
    } else {
      message.sourceDexContract = "";
    }
    return message;
  },

  toJSON(message: TargetParams): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    message.source !== undefined &&
      (obj.source = targetSourceToJSON(message.source));
    message.sourceDexContract !== undefined &&
      (obj.sourceDexContract = message.sourceDexContract);
    return obj;
  },

  fromPartial(object: DeepPartial<TargetParams>): TargetParams {
    const message = { ...baseTargetParams } as TargetParams;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    if (object.source !== undefined && object.source !== null) {
      message.source = object.source;
    } else {
      message.source = 0;
    }
    if (
      object.sourceDexContract !== undefined &&
      object.sourceDexContract !== null
    ) {
      message.sourceDexContract = object.sourceDexContract;
    } else {
      message.sourceDexContract = "";
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
