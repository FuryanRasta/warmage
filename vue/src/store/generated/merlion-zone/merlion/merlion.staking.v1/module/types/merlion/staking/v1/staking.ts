/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "merlion.staking.v1";

export interface VeValidator {
  operatorAddress: string;
  veDelegatorShares: string;
}

export interface VeDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  veShares: VeShares[];
}

export interface VeShares {
  veId: number;
  tokensMayUnsettled: string;
  shares: string;
}

export interface VeUnbondingDelegation {
  delegatorAddress: string;
  validatorAddress: string;
  entries: VeUnbondingDelegationEntry[];
}

export interface VeUnbondingDelegationEntry {
  veBalances: VeUnbondingDelegationEntryBalances[];
}

export interface VeUnbondingDelegationEntryBalances {
  veId: number;
  initialBalance: string;
  balance: string;
}

export interface VeRedelegation {
  delegatorAddress: string;
  validatorSrcAddress: string;
  validatorDstAddress: string;
  entries: VeRedelegationEntry[];
}

export interface VeRedelegationEntry {
  veShares: VeRedelegationEntryShares[];
}

export interface VeRedelegationEntryShares {
  veId: number;
  initialBalance: string;
  sharesDst: string;
}

export interface VeTokens {
  veId: number;
  tokens: string;
}

const baseVeValidator: object = { operatorAddress: "", veDelegatorShares: "" };

export const VeValidator = {
  encode(message: VeValidator, writer: Writer = Writer.create()): Writer {
    if (message.operatorAddress !== "") {
      writer.uint32(10).string(message.operatorAddress);
    }
    if (message.veDelegatorShares !== "") {
      writer.uint32(18).string(message.veDelegatorShares);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeValidator {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeValidator } as VeValidator;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operatorAddress = reader.string();
          break;
        case 2:
          message.veDelegatorShares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeValidator {
    const message = { ...baseVeValidator } as VeValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = String(object.operatorAddress);
    } else {
      message.operatorAddress = "";
    }
    if (
      object.veDelegatorShares !== undefined &&
      object.veDelegatorShares !== null
    ) {
      message.veDelegatorShares = String(object.veDelegatorShares);
    } else {
      message.veDelegatorShares = "";
    }
    return message;
  },

  toJSON(message: VeValidator): unknown {
    const obj: any = {};
    message.operatorAddress !== undefined &&
      (obj.operatorAddress = message.operatorAddress);
    message.veDelegatorShares !== undefined &&
      (obj.veDelegatorShares = message.veDelegatorShares);
    return obj;
  },

  fromPartial(object: DeepPartial<VeValidator>): VeValidator {
    const message = { ...baseVeValidator } as VeValidator;
    if (
      object.operatorAddress !== undefined &&
      object.operatorAddress !== null
    ) {
      message.operatorAddress = object.operatorAddress;
    } else {
      message.operatorAddress = "";
    }
    if (
      object.veDelegatorShares !== undefined &&
      object.veDelegatorShares !== null
    ) {
      message.veDelegatorShares = object.veDelegatorShares;
    } else {
      message.veDelegatorShares = "";
    }
    return message;
  },
};

const baseVeDelegation: object = { delegatorAddress: "", validatorAddress: "" };

export const VeDelegation = {
  encode(message: VeDelegation, writer: Writer = Writer.create()): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.veShares) {
      VeShares.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeDelegation } as VeDelegation;
    message.veShares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.veShares.push(VeShares.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeDelegation {
    const message = { ...baseVeDelegation } as VeDelegation;
    message.veShares = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.veShares !== undefined && object.veShares !== null) {
      for (const e of object.veShares) {
        message.veShares.push(VeShares.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    if (message.veShares) {
      obj.veShares = message.veShares.map((e) =>
        e ? VeShares.toJSON(e) : undefined
      );
    } else {
      obj.veShares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VeDelegation>): VeDelegation {
    const message = { ...baseVeDelegation } as VeDelegation;
    message.veShares = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.veShares !== undefined && object.veShares !== null) {
      for (const e of object.veShares) {
        message.veShares.push(VeShares.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeShares: object = { veId: 0, tokensMayUnsettled: "", shares: "" };

export const VeShares = {
  encode(message: VeShares, writer: Writer = Writer.create()): Writer {
    if (message.veId !== 0) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.tokensMayUnsettled !== "") {
      writer.uint32(18).string(message.tokensMayUnsettled);
    }
    if (message.shares !== "") {
      writer.uint32(26).string(message.shares);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeShares {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeShares } as VeShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokensMayUnsettled = reader.string();
          break;
        case 3:
          message.shares = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeShares {
    const message = { ...baseVeShares } as VeShares;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = Number(object.veId);
    } else {
      message.veId = 0;
    }
    if (
      object.tokensMayUnsettled !== undefined &&
      object.tokensMayUnsettled !== null
    ) {
      message.tokensMayUnsettled = String(object.tokensMayUnsettled);
    } else {
      message.tokensMayUnsettled = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = String(object.shares);
    } else {
      message.shares = "";
    }
    return message;
  },

  toJSON(message: VeShares): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = message.veId);
    message.tokensMayUnsettled !== undefined &&
      (obj.tokensMayUnsettled = message.tokensMayUnsettled);
    message.shares !== undefined && (obj.shares = message.shares);
    return obj;
  },

  fromPartial(object: DeepPartial<VeShares>): VeShares {
    const message = { ...baseVeShares } as VeShares;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = 0;
    }
    if (
      object.tokensMayUnsettled !== undefined &&
      object.tokensMayUnsettled !== null
    ) {
      message.tokensMayUnsettled = object.tokensMayUnsettled;
    } else {
      message.tokensMayUnsettled = "";
    }
    if (object.shares !== undefined && object.shares !== null) {
      message.shares = object.shares;
    } else {
      message.shares = "";
    }
    return message;
  },
};

const baseVeUnbondingDelegation: object = {
  delegatorAddress: "",
  validatorAddress: "",
};

export const VeUnbondingDelegation = {
  encode(
    message: VeUnbondingDelegation,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    for (const v of message.entries) {
      VeUnbondingDelegationEntry.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeUnbondingDelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeUnbondingDelegation } as VeUnbondingDelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorAddress = reader.string();
          break;
        case 3:
          message.entries.push(
            VeUnbondingDelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegation {
    const message = { ...baseVeUnbondingDelegation } as VeUnbondingDelegation;
    message.entries = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = String(object.validatorAddress);
    } else {
      message.validatorAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeUnbondingDelegationEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeUnbondingDelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? VeUnbondingDelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeUnbondingDelegation>
  ): VeUnbondingDelegation {
    const message = { ...baseVeUnbondingDelegation } as VeUnbondingDelegation;
    message.entries = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorAddress !== undefined &&
      object.validatorAddress !== null
    ) {
      message.validatorAddress = object.validatorAddress;
    } else {
      message.validatorAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeUnbondingDelegationEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeUnbondingDelegationEntry: object = {};

export const VeUnbondingDelegationEntry = {
  encode(
    message: VeUnbondingDelegationEntry,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.veBalances) {
      VeUnbondingDelegationEntryBalances.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VeUnbondingDelegationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVeUnbondingDelegationEntry,
    } as VeUnbondingDelegationEntry;
    message.veBalances = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veBalances.push(
            VeUnbondingDelegationEntryBalances.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegationEntry {
    const message = {
      ...baseVeUnbondingDelegationEntry,
    } as VeUnbondingDelegationEntry;
    message.veBalances = [];
    if (object.veBalances !== undefined && object.veBalances !== null) {
      for (const e of object.veBalances) {
        message.veBalances.push(VeUnbondingDelegationEntryBalances.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeUnbondingDelegationEntry): unknown {
    const obj: any = {};
    if (message.veBalances) {
      obj.veBalances = message.veBalances.map((e) =>
        e ? VeUnbondingDelegationEntryBalances.toJSON(e) : undefined
      );
    } else {
      obj.veBalances = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeUnbondingDelegationEntry>
  ): VeUnbondingDelegationEntry {
    const message = {
      ...baseVeUnbondingDelegationEntry,
    } as VeUnbondingDelegationEntry;
    message.veBalances = [];
    if (object.veBalances !== undefined && object.veBalances !== null) {
      for (const e of object.veBalances) {
        message.veBalances.push(
          VeUnbondingDelegationEntryBalances.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseVeUnbondingDelegationEntryBalances: object = {
  veId: 0,
  initialBalance: "",
  balance: "",
};

export const VeUnbondingDelegationEntryBalances = {
  encode(
    message: VeUnbondingDelegationEntryBalances,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.veId !== 0) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.initialBalance !== "") {
      writer.uint32(18).string(message.initialBalance);
    }
    if (message.balance !== "") {
      writer.uint32(26).string(message.balance);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VeUnbondingDelegationEntryBalances {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVeUnbondingDelegationEntryBalances,
    } as VeUnbondingDelegationEntryBalances;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.initialBalance = reader.string();
          break;
        case 3:
          message.balance = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeUnbondingDelegationEntryBalances {
    const message = {
      ...baseVeUnbondingDelegationEntryBalances,
    } as VeUnbondingDelegationEntryBalances;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = Number(object.veId);
    } else {
      message.veId = 0;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = String(object.initialBalance);
    } else {
      message.initialBalance = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = String(object.balance);
    } else {
      message.balance = "";
    }
    return message;
  },

  toJSON(message: VeUnbondingDelegationEntryBalances): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = message.veId);
    message.initialBalance !== undefined &&
      (obj.initialBalance = message.initialBalance);
    message.balance !== undefined && (obj.balance = message.balance);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeUnbondingDelegationEntryBalances>
  ): VeUnbondingDelegationEntryBalances {
    const message = {
      ...baseVeUnbondingDelegationEntryBalances,
    } as VeUnbondingDelegationEntryBalances;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = 0;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = object.initialBalance;
    } else {
      message.initialBalance = "";
    }
    if (object.balance !== undefined && object.balance !== null) {
      message.balance = object.balance;
    } else {
      message.balance = "";
    }
    return message;
  },
};

const baseVeRedelegation: object = {
  delegatorAddress: "",
  validatorSrcAddress: "",
  validatorDstAddress: "",
};

export const VeRedelegation = {
  encode(message: VeRedelegation, writer: Writer = Writer.create()): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorSrcAddress !== "") {
      writer.uint32(18).string(message.validatorSrcAddress);
    }
    if (message.validatorDstAddress !== "") {
      writer.uint32(26).string(message.validatorDstAddress);
    }
    for (const v of message.entries) {
      VeRedelegationEntry.encode(v!, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeRedelegation {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeRedelegation } as VeRedelegation;
    message.entries = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.delegatorAddress = reader.string();
          break;
        case 2:
          message.validatorSrcAddress = reader.string();
          break;
        case 3:
          message.validatorDstAddress = reader.string();
          break;
        case 4:
          message.entries.push(
            VeRedelegationEntry.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegation {
    const message = { ...baseVeRedelegation } as VeRedelegation;
    message.entries = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = String(object.delegatorAddress);
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorSrcAddress !== undefined &&
      object.validatorSrcAddress !== null
    ) {
      message.validatorSrcAddress = String(object.validatorSrcAddress);
    } else {
      message.validatorSrcAddress = "";
    }
    if (
      object.validatorDstAddress !== undefined &&
      object.validatorDstAddress !== null
    ) {
      message.validatorDstAddress = String(object.validatorDstAddress);
    } else {
      message.validatorDstAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeRedelegationEntry.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeRedelegation): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorSrcAddress !== undefined &&
      (obj.validatorSrcAddress = message.validatorSrcAddress);
    message.validatorDstAddress !== undefined &&
      (obj.validatorDstAddress = message.validatorDstAddress);
    if (message.entries) {
      obj.entries = message.entries.map((e) =>
        e ? VeRedelegationEntry.toJSON(e) : undefined
      );
    } else {
      obj.entries = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VeRedelegation>): VeRedelegation {
    const message = { ...baseVeRedelegation } as VeRedelegation;
    message.entries = [];
    if (
      object.delegatorAddress !== undefined &&
      object.delegatorAddress !== null
    ) {
      message.delegatorAddress = object.delegatorAddress;
    } else {
      message.delegatorAddress = "";
    }
    if (
      object.validatorSrcAddress !== undefined &&
      object.validatorSrcAddress !== null
    ) {
      message.validatorSrcAddress = object.validatorSrcAddress;
    } else {
      message.validatorSrcAddress = "";
    }
    if (
      object.validatorDstAddress !== undefined &&
      object.validatorDstAddress !== null
    ) {
      message.validatorDstAddress = object.validatorDstAddress;
    } else {
      message.validatorDstAddress = "";
    }
    if (object.entries !== undefined && object.entries !== null) {
      for (const e of object.entries) {
        message.entries.push(VeRedelegationEntry.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeRedelegationEntry: object = {};

export const VeRedelegationEntry = {
  encode(
    message: VeRedelegationEntry,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.veShares) {
      VeRedelegationEntryShares.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeRedelegationEntry {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeRedelegationEntry } as VeRedelegationEntry;
    message.veShares = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veShares.push(
            VeRedelegationEntryShares.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegationEntry {
    const message = { ...baseVeRedelegationEntry } as VeRedelegationEntry;
    message.veShares = [];
    if (object.veShares !== undefined && object.veShares !== null) {
      for (const e of object.veShares) {
        message.veShares.push(VeRedelegationEntryShares.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: VeRedelegationEntry): unknown {
    const obj: any = {};
    if (message.veShares) {
      obj.veShares = message.veShares.map((e) =>
        e ? VeRedelegationEntryShares.toJSON(e) : undefined
      );
    } else {
      obj.veShares = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<VeRedelegationEntry>): VeRedelegationEntry {
    const message = { ...baseVeRedelegationEntry } as VeRedelegationEntry;
    message.veShares = [];
    if (object.veShares !== undefined && object.veShares !== null) {
      for (const e of object.veShares) {
        message.veShares.push(VeRedelegationEntryShares.fromPartial(e));
      }
    }
    return message;
  },
};

const baseVeRedelegationEntryShares: object = {
  veId: 0,
  initialBalance: "",
  sharesDst: "",
};

export const VeRedelegationEntryShares = {
  encode(
    message: VeRedelegationEntryShares,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.veId !== 0) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.initialBalance !== "") {
      writer.uint32(18).string(message.initialBalance);
    }
    if (message.sharesDst !== "") {
      writer.uint32(26).string(message.sharesDst);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): VeRedelegationEntryShares {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseVeRedelegationEntryShares,
    } as VeRedelegationEntryShares;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.initialBalance = reader.string();
          break;
        case 3:
          message.sharesDst = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeRedelegationEntryShares {
    const message = {
      ...baseVeRedelegationEntryShares,
    } as VeRedelegationEntryShares;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = Number(object.veId);
    } else {
      message.veId = 0;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = String(object.initialBalance);
    } else {
      message.initialBalance = "";
    }
    if (object.sharesDst !== undefined && object.sharesDst !== null) {
      message.sharesDst = String(object.sharesDst);
    } else {
      message.sharesDst = "";
    }
    return message;
  },

  toJSON(message: VeRedelegationEntryShares): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = message.veId);
    message.initialBalance !== undefined &&
      (obj.initialBalance = message.initialBalance);
    message.sharesDst !== undefined && (obj.sharesDst = message.sharesDst);
    return obj;
  },

  fromPartial(
    object: DeepPartial<VeRedelegationEntryShares>
  ): VeRedelegationEntryShares {
    const message = {
      ...baseVeRedelegationEntryShares,
    } as VeRedelegationEntryShares;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = 0;
    }
    if (object.initialBalance !== undefined && object.initialBalance !== null) {
      message.initialBalance = object.initialBalance;
    } else {
      message.initialBalance = "";
    }
    if (object.sharesDst !== undefined && object.sharesDst !== null) {
      message.sharesDst = object.sharesDst;
    } else {
      message.sharesDst = "";
    }
    return message;
  },
};

const baseVeTokens: object = { veId: 0, tokens: "" };

export const VeTokens = {
  encode(message: VeTokens, writer: Writer = Writer.create()): Writer {
    if (message.veId !== 0) {
      writer.uint32(8).uint64(message.veId);
    }
    if (message.tokens !== "") {
      writer.uint32(18).string(message.tokens);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): VeTokens {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseVeTokens } as VeTokens;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.veId = longToNumber(reader.uint64() as Long);
          break;
        case 2:
          message.tokens = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): VeTokens {
    const message = { ...baseVeTokens } as VeTokens;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = Number(object.veId);
    } else {
      message.veId = 0;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = String(object.tokens);
    } else {
      message.tokens = "";
    }
    return message;
  },

  toJSON(message: VeTokens): unknown {
    const obj: any = {};
    message.veId !== undefined && (obj.veId = message.veId);
    message.tokens !== undefined && (obj.tokens = message.tokens);
    return obj;
  },

  fromPartial(object: DeepPartial<VeTokens>): VeTokens {
    const message = { ...baseVeTokens } as VeTokens;
    if (object.veId !== undefined && object.veId !== null) {
      message.veId = object.veId;
    } else {
      message.veId = 0;
    }
    if (object.tokens !== undefined && object.tokens !== null) {
      message.tokens = object.tokens;
    } else {
      message.tokens = "";
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
