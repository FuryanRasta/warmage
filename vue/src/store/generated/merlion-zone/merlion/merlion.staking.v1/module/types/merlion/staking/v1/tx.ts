/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.staking.v1";

export interface MsgVeDelegate {
  delegatorAddress: string;
  validatorAddress: string;
  veId: string;
  amount: Coin | undefined;
}

export interface MsgVeDelegateResponse {}

const baseMsgVeDelegate: object = {
  delegatorAddress: "",
  validatorAddress: "",
  veId: "",
};

export const MsgVeDelegate = {
  encode(message: MsgVeDelegate, writer: Writer = Writer.create()): Writer {
    if (message.delegatorAddress !== "") {
      writer.uint32(10).string(message.delegatorAddress);
    }
    if (message.validatorAddress !== "") {
      writer.uint32(18).string(message.validatorAddress);
    }
    if (message.veId !== "") {
      writer.uint32(26).string(message.veId);
    }
    if (message.amount !== undefined) {
      Coin.encode(message.amount, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVeDelegate {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVeDelegate } as MsgVeDelegate;
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
          message.veId = reader.string();
          break;
        case 4:
          message.amount = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgVeDelegate {
    const message = { ...baseMsgVeDelegate } as MsgVeDelegate;
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

  toJSON(message: MsgVeDelegate): unknown {
    const obj: any = {};
    message.delegatorAddress !== undefined &&
      (obj.delegatorAddress = message.delegatorAddress);
    message.validatorAddress !== undefined &&
      (obj.validatorAddress = message.validatorAddress);
    message.veId !== undefined && (obj.veId = message.veId);
    message.amount !== undefined &&
      (obj.amount = message.amount ? Coin.toJSON(message.amount) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgVeDelegate>): MsgVeDelegate {
    const message = { ...baseMsgVeDelegate } as MsgVeDelegate;
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

const baseMsgVeDelegateResponse: object = {};

export const MsgVeDelegateResponse = {
  encode(_: MsgVeDelegateResponse, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgVeDelegateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgVeDelegateResponse } as MsgVeDelegateResponse;
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

  fromJSON(_: any): MsgVeDelegateResponse {
    const message = { ...baseMsgVeDelegateResponse } as MsgVeDelegateResponse;
    return message;
  },

  toJSON(_: MsgVeDelegateResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<MsgVeDelegateResponse>): MsgVeDelegateResponse {
    const message = { ...baseMsgVeDelegateResponse } as MsgVeDelegateResponse;
    return message;
  },
};

/** Msg defines the staking Msg service. */
export interface Msg {
  /**
   * VeDelegate defines a method for performing a delegation of ve-locked coins
   * from a delegator to a validator.
   */
  VeDelegate(request: MsgVeDelegate): Promise<MsgVeDelegateResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  VeDelegate(request: MsgVeDelegate): Promise<MsgVeDelegateResponse> {
    const data = MsgVeDelegate.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.staking.v1.Msg",
      "VeDelegate",
      data
    );
    return promise.then((data) =>
      MsgVeDelegateResponse.decode(new Reader(data))
    );
  }
}

interface Rpc {
  request(
    service: string,
    method: string,
    data: Uint8Array
  ): Promise<Uint8Array>;
}

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
