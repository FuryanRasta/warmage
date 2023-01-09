/* eslint-disable */
import { Writer, Reader } from "protobufjs/minimal";

export const protobufPackage = "merlion.vesting.v1";

/** GenesisState defines the vesting module's genesis state. */
export interface GenesisState {
  params: Params | undefined;
  allocationAddresses: AllocationAddresses | undefined;
}

/** Params defines the parameters for the module. */
export interface Params {
  allocation: AllocationAmounts | undefined;
}

export interface AllocationAmounts {
  totalAmount: string;
  airdropAmount: string;
  veVestingAmount: string;
  stakingRewardAmount: string;
  communityPoolAmount: string;
  strategicReserveAmount: string;
  teamVestingAmount: string;
}

export interface AllocationAddresses {
  teamVestingAddr: string;
  strategicReserveCustodianAddr: string;
}

const baseGenesisState: object = {};

export const GenesisState = {
  encode(message: GenesisState, writer: Writer = Writer.create()): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    if (message.allocationAddresses !== undefined) {
      AllocationAddresses.encode(
        message.allocationAddresses,
        writer.uint32(18).fork()
      ).ldelim();
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
          message.allocationAddresses = AllocationAddresses.decode(
            reader,
            reader.uint32()
          );
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
    if (
      object.allocationAddresses !== undefined &&
      object.allocationAddresses !== null
    ) {
      message.allocationAddresses = AllocationAddresses.fromJSON(
        object.allocationAddresses
      );
    } else {
      message.allocationAddresses = undefined;
    }
    return message;
  },

  toJSON(message: GenesisState): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    message.allocationAddresses !== undefined &&
      (obj.allocationAddresses = message.allocationAddresses
        ? AllocationAddresses.toJSON(message.allocationAddresses)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<GenesisState>): GenesisState {
    const message = { ...baseGenesisState } as GenesisState;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    if (
      object.allocationAddresses !== undefined &&
      object.allocationAddresses !== null
    ) {
      message.allocationAddresses = AllocationAddresses.fromPartial(
        object.allocationAddresses
      );
    } else {
      message.allocationAddresses = undefined;
    }
    return message;
  },
};

const baseParams: object = {};

export const Params = {
  encode(message: Params, writer: Writer = Writer.create()): Writer {
    if (message.allocation !== undefined) {
      AllocationAmounts.encode(
        message.allocation,
        writer.uint32(10).fork()
      ).ldelim();
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
          message.allocation = AllocationAmounts.decode(
            reader,
            reader.uint32()
          );
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
    if (object.allocation !== undefined && object.allocation !== null) {
      message.allocation = AllocationAmounts.fromJSON(object.allocation);
    } else {
      message.allocation = undefined;
    }
    return message;
  },

  toJSON(message: Params): unknown {
    const obj: any = {};
    message.allocation !== undefined &&
      (obj.allocation = message.allocation
        ? AllocationAmounts.toJSON(message.allocation)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<Params>): Params {
    const message = { ...baseParams } as Params;
    if (object.allocation !== undefined && object.allocation !== null) {
      message.allocation = AllocationAmounts.fromPartial(object.allocation);
    } else {
      message.allocation = undefined;
    }
    return message;
  },
};

const baseAllocationAmounts: object = {
  totalAmount: "",
  airdropAmount: "",
  veVestingAmount: "",
  stakingRewardAmount: "",
  communityPoolAmount: "",
  strategicReserveAmount: "",
  teamVestingAmount: "",
};

export const AllocationAmounts = {
  encode(message: AllocationAmounts, writer: Writer = Writer.create()): Writer {
    if (message.totalAmount !== "") {
      writer.uint32(10).string(message.totalAmount);
    }
    if (message.airdropAmount !== "") {
      writer.uint32(18).string(message.airdropAmount);
    }
    if (message.veVestingAmount !== "") {
      writer.uint32(26).string(message.veVestingAmount);
    }
    if (message.stakingRewardAmount !== "") {
      writer.uint32(34).string(message.stakingRewardAmount);
    }
    if (message.communityPoolAmount !== "") {
      writer.uint32(42).string(message.communityPoolAmount);
    }
    if (message.strategicReserveAmount !== "") {
      writer.uint32(50).string(message.strategicReserveAmount);
    }
    if (message.teamVestingAmount !== "") {
      writer.uint32(58).string(message.teamVestingAmount);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AllocationAmounts {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocationAmounts } as AllocationAmounts;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalAmount = reader.string();
          break;
        case 2:
          message.airdropAmount = reader.string();
          break;
        case 3:
          message.veVestingAmount = reader.string();
          break;
        case 4:
          message.stakingRewardAmount = reader.string();
          break;
        case 5:
          message.communityPoolAmount = reader.string();
          break;
        case 6:
          message.strategicReserveAmount = reader.string();
          break;
        case 7:
          message.teamVestingAmount = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationAmounts {
    const message = { ...baseAllocationAmounts } as AllocationAmounts;
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = String(object.totalAmount);
    } else {
      message.totalAmount = "";
    }
    if (object.airdropAmount !== undefined && object.airdropAmount !== null) {
      message.airdropAmount = String(object.airdropAmount);
    } else {
      message.airdropAmount = "";
    }
    if (
      object.veVestingAmount !== undefined &&
      object.veVestingAmount !== null
    ) {
      message.veVestingAmount = String(object.veVestingAmount);
    } else {
      message.veVestingAmount = "";
    }
    if (
      object.stakingRewardAmount !== undefined &&
      object.stakingRewardAmount !== null
    ) {
      message.stakingRewardAmount = String(object.stakingRewardAmount);
    } else {
      message.stakingRewardAmount = "";
    }
    if (
      object.communityPoolAmount !== undefined &&
      object.communityPoolAmount !== null
    ) {
      message.communityPoolAmount = String(object.communityPoolAmount);
    } else {
      message.communityPoolAmount = "";
    }
    if (
      object.strategicReserveAmount !== undefined &&
      object.strategicReserveAmount !== null
    ) {
      message.strategicReserveAmount = String(object.strategicReserveAmount);
    } else {
      message.strategicReserveAmount = "";
    }
    if (
      object.teamVestingAmount !== undefined &&
      object.teamVestingAmount !== null
    ) {
      message.teamVestingAmount = String(object.teamVestingAmount);
    } else {
      message.teamVestingAmount = "";
    }
    return message;
  },

  toJSON(message: AllocationAmounts): unknown {
    const obj: any = {};
    message.totalAmount !== undefined &&
      (obj.totalAmount = message.totalAmount);
    message.airdropAmount !== undefined &&
      (obj.airdropAmount = message.airdropAmount);
    message.veVestingAmount !== undefined &&
      (obj.veVestingAmount = message.veVestingAmount);
    message.stakingRewardAmount !== undefined &&
      (obj.stakingRewardAmount = message.stakingRewardAmount);
    message.communityPoolAmount !== undefined &&
      (obj.communityPoolAmount = message.communityPoolAmount);
    message.strategicReserveAmount !== undefined &&
      (obj.strategicReserveAmount = message.strategicReserveAmount);
    message.teamVestingAmount !== undefined &&
      (obj.teamVestingAmount = message.teamVestingAmount);
    return obj;
  },

  fromPartial(object: DeepPartial<AllocationAmounts>): AllocationAmounts {
    const message = { ...baseAllocationAmounts } as AllocationAmounts;
    if (object.totalAmount !== undefined && object.totalAmount !== null) {
      message.totalAmount = object.totalAmount;
    } else {
      message.totalAmount = "";
    }
    if (object.airdropAmount !== undefined && object.airdropAmount !== null) {
      message.airdropAmount = object.airdropAmount;
    } else {
      message.airdropAmount = "";
    }
    if (
      object.veVestingAmount !== undefined &&
      object.veVestingAmount !== null
    ) {
      message.veVestingAmount = object.veVestingAmount;
    } else {
      message.veVestingAmount = "";
    }
    if (
      object.stakingRewardAmount !== undefined &&
      object.stakingRewardAmount !== null
    ) {
      message.stakingRewardAmount = object.stakingRewardAmount;
    } else {
      message.stakingRewardAmount = "";
    }
    if (
      object.communityPoolAmount !== undefined &&
      object.communityPoolAmount !== null
    ) {
      message.communityPoolAmount = object.communityPoolAmount;
    } else {
      message.communityPoolAmount = "";
    }
    if (
      object.strategicReserveAmount !== undefined &&
      object.strategicReserveAmount !== null
    ) {
      message.strategicReserveAmount = object.strategicReserveAmount;
    } else {
      message.strategicReserveAmount = "";
    }
    if (
      object.teamVestingAmount !== undefined &&
      object.teamVestingAmount !== null
    ) {
      message.teamVestingAmount = object.teamVestingAmount;
    } else {
      message.teamVestingAmount = "";
    }
    return message;
  },
};

const baseAllocationAddresses: object = {
  teamVestingAddr: "",
  strategicReserveCustodianAddr: "",
};

export const AllocationAddresses = {
  encode(
    message: AllocationAddresses,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.teamVestingAddr !== "") {
      writer.uint32(10).string(message.teamVestingAddr);
    }
    if (message.strategicReserveCustodianAddr !== "") {
      writer.uint32(18).string(message.strategicReserveCustodianAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AllocationAddresses {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAllocationAddresses } as AllocationAddresses;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.teamVestingAddr = reader.string();
          break;
        case 2:
          message.strategicReserveCustodianAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AllocationAddresses {
    const message = { ...baseAllocationAddresses } as AllocationAddresses;
    if (
      object.teamVestingAddr !== undefined &&
      object.teamVestingAddr !== null
    ) {
      message.teamVestingAddr = String(object.teamVestingAddr);
    } else {
      message.teamVestingAddr = "";
    }
    if (
      object.strategicReserveCustodianAddr !== undefined &&
      object.strategicReserveCustodianAddr !== null
    ) {
      message.strategicReserveCustodianAddr = String(
        object.strategicReserveCustodianAddr
      );
    } else {
      message.strategicReserveCustodianAddr = "";
    }
    return message;
  },

  toJSON(message: AllocationAddresses): unknown {
    const obj: any = {};
    message.teamVestingAddr !== undefined &&
      (obj.teamVestingAddr = message.teamVestingAddr);
    message.strategicReserveCustodianAddr !== undefined &&
      (obj.strategicReserveCustodianAddr =
        message.strategicReserveCustodianAddr);
    return obj;
  },

  fromPartial(object: DeepPartial<AllocationAddresses>): AllocationAddresses {
    const message = { ...baseAllocationAddresses } as AllocationAddresses;
    if (
      object.teamVestingAddr !== undefined &&
      object.teamVestingAddr !== null
    ) {
      message.teamVestingAddr = object.teamVestingAddr;
    } else {
      message.teamVestingAddr = "";
    }
    if (
      object.strategicReserveCustodianAddr !== undefined &&
      object.strategicReserveCustodianAddr !== null
    ) {
      message.strategicReserveCustodianAddr =
        object.strategicReserveCustodianAddr;
    } else {
      message.strategicReserveCustodianAddr = "";
    }
    return message;
  },
};

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
