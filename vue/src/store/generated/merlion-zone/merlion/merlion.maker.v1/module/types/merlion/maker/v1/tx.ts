/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.maker.v1";

/** MsgMintBySwap represents a message to mint Mer stablecoins by swapping. */
export interface MsgMintBySwap {
  sender: string;
  to: string;
  backingInMax: Coin | undefined;
  lionInMax: Coin | undefined;
  mintOutMin: Coin | undefined;
  fullBacking: boolean;
}

/** MsgMintBySwapResponse defines the Msg/MintBySwap response type. */
export interface MsgMintBySwapResponse {
  backingIn: Coin | undefined;
  lionIn: Coin | undefined;
  mintOut: Coin | undefined;
  mintFee: Coin | undefined;
}

/** MsgBurnBySwap represents a message to burn Mer stablecoins by swapping. */
export interface MsgBurnBySwap {
  sender: string;
  to: string;
  burnIn: Coin | undefined;
  backingOutMin: Coin | undefined;
  lionOutMin: Coin | undefined;
}

/** MsgBurnBySwapResponse defines the Msg/BurnBySwap response type. */
export interface MsgBurnBySwapResponse {
  backingOut: Coin | undefined;
  lionOut: Coin | undefined;
  burnFee: Coin | undefined;
}

/** MsgBuyBacking represents a message to buy strong-backing assets. */
export interface MsgBuyBacking {
  sender: string;
  to: string;
  lionIn: Coin | undefined;
  backingOutMin: Coin | undefined;
}

/** MsgBuyBackingResponse defines the Msg/BuyBacking response type. */
export interface MsgBuyBackingResponse {
  backingOut: Coin | undefined;
  buybackFee: Coin | undefined;
}

/**
 * MsgSellBacking represents a message to sell strong-backing
 * assets.
 */
export interface MsgSellBacking {
  sender: string;
  to: string;
  backingIn: Coin | undefined;
  lionOutMin: Coin | undefined;
}

/** MsgSellBackingResponse defines the Msg/SellBacking response type. */
export interface MsgSellBackingResponse {
  lionOut: Coin | undefined;
  rebackFee: Coin | undefined;
}

/**
 * MsgMintByCollateral represents a message to mint Mer stablecoins by locking
 * collateral.
 */
export interface MsgMintByCollateral {
  sender: string;
  to: string;
  collateralDenom: string;
  mintOut: Coin | undefined;
}

/** MsgMintByCollateralResponse defines the Msg/MintByCollateral response type. */
export interface MsgMintByCollateralResponse {
  mintFee: Coin | undefined;
}

/**
 * MsgBurnByCollateral represents a message to burn Mer stablecoins by unlocking
 * collateral.
 */
export interface MsgBurnByCollateral {
  sender: string;
  collateralDenom: string;
  repayInMax: Coin | undefined;
}

/** MsgBurnByCollateralResponse defines the Msg/BurnByCollateral response type. */
export interface MsgBurnByCollateralResponse {
  repayIn: Coin | undefined;
}

/** MsgDepositCollateral represents a message to deposit collateral assets. */
export interface MsgDepositCollateral {
  sender: string;
  to: string;
  collateralIn: Coin | undefined;
  lionIn: Coin | undefined;
}

/** MsgDepositCollateralResponse defines the Msg/DepositCollateral response type. */
export interface MsgDepositCollateralResponse {}

/**
 * MsgRedeemCollateral represents a message to redeem collateral assets and
 * collateralized Lion coins.
 */
export interface MsgRedeemCollateral {
  sender: string;
  to: string;
  collateralOut: Coin | undefined;
  lionOut: Coin | undefined;
}

/** MsgRedeemCollateralResponse defines the Msg/RedeemCollateral response type. */
export interface MsgRedeemCollateralResponse {}

/** MsgLiquidateCollateral represents a message to liquidates collateral assets. */
export interface MsgLiquidateCollateral {
  sender: string;
  to: string;
  debtor: string;
  collateral: Coin | undefined;
  repayInMax: Coin | undefined;
}

/**
 * MsgLiquidateCollateralResponse defines the Msg/LiquidateCollateral response
 * type.
 */
export interface MsgLiquidateCollateralResponse {
  repayIn: Coin | undefined;
  collateralOut: Coin | undefined;
}

const baseMsgMintBySwap: object = { sender: "", to: "", fullBacking: false };

export const MsgMintBySwap = {
  encode(message: MsgMintBySwap, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.backingInMax !== undefined) {
      Coin.encode(message.backingInMax, writer.uint32(26).fork()).ldelim();
    }
    if (message.lionInMax !== undefined) {
      Coin.encode(message.lionInMax, writer.uint32(34).fork()).ldelim();
    }
    if (message.mintOutMin !== undefined) {
      Coin.encode(message.mintOutMin, writer.uint32(42).fork()).ldelim();
    }
    if (message.fullBacking === true) {
      writer.uint32(48).bool(message.fullBacking);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintBySwap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintBySwap } as MsgMintBySwap;
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
          message.backingInMax = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lionInMax = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.mintOutMin = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.fullBacking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBySwap {
    const message = { ...baseMsgMintBySwap } as MsgMintBySwap;
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
    if (object.backingInMax !== undefined && object.backingInMax !== null) {
      message.backingInMax = Coin.fromJSON(object.backingInMax);
    } else {
      message.backingInMax = undefined;
    }
    if (object.lionInMax !== undefined && object.lionInMax !== null) {
      message.lionInMax = Coin.fromJSON(object.lionInMax);
    } else {
      message.lionInMax = undefined;
    }
    if (object.mintOutMin !== undefined && object.mintOutMin !== null) {
      message.mintOutMin = Coin.fromJSON(object.mintOutMin);
    } else {
      message.mintOutMin = undefined;
    }
    if (object.fullBacking !== undefined && object.fullBacking !== null) {
      message.fullBacking = Boolean(object.fullBacking);
    } else {
      message.fullBacking = false;
    }
    return message;
  },

  toJSON(message: MsgMintBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.backingInMax !== undefined &&
      (obj.backingInMax = message.backingInMax
        ? Coin.toJSON(message.backingInMax)
        : undefined);
    message.lionInMax !== undefined &&
      (obj.lionInMax = message.lionInMax
        ? Coin.toJSON(message.lionInMax)
        : undefined);
    message.mintOutMin !== undefined &&
      (obj.mintOutMin = message.mintOutMin
        ? Coin.toJSON(message.mintOutMin)
        : undefined);
    message.fullBacking !== undefined &&
      (obj.fullBacking = message.fullBacking);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintBySwap>): MsgMintBySwap {
    const message = { ...baseMsgMintBySwap } as MsgMintBySwap;
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
    if (object.backingInMax !== undefined && object.backingInMax !== null) {
      message.backingInMax = Coin.fromPartial(object.backingInMax);
    } else {
      message.backingInMax = undefined;
    }
    if (object.lionInMax !== undefined && object.lionInMax !== null) {
      message.lionInMax = Coin.fromPartial(object.lionInMax);
    } else {
      message.lionInMax = undefined;
    }
    if (object.mintOutMin !== undefined && object.mintOutMin !== null) {
      message.mintOutMin = Coin.fromPartial(object.mintOutMin);
    } else {
      message.mintOutMin = undefined;
    }
    if (object.fullBacking !== undefined && object.fullBacking !== null) {
      message.fullBacking = object.fullBacking;
    } else {
      message.fullBacking = false;
    }
    return message;
  },
};

const baseMsgMintBySwapResponse: object = {};

export const MsgMintBySwapResponse = {
  encode(
    message: MsgMintBySwapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintBySwapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintBySwapResponse } as MsgMintBySwapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintBySwapResponse {
    const message = { ...baseMsgMintBySwapResponse } as MsgMintBySwapResponse;
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromJSON(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromJSON(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.mintOut !== undefined && object.mintOut !== null) {
      message.mintOut = Coin.fromJSON(object.mintOut);
    } else {
      message.mintOut = undefined;
    }
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = Coin.fromJSON(object.mintFee);
    } else {
      message.mintFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintBySwapResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn
        ? Coin.toJSON(message.backingIn)
        : undefined);
    message.lionIn !== undefined &&
      (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut
        ? Coin.toJSON(message.mintOut)
        : undefined);
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee
        ? Coin.toJSON(message.mintFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMintBySwapResponse>
  ): MsgMintBySwapResponse {
    const message = { ...baseMsgMintBySwapResponse } as MsgMintBySwapResponse;
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromPartial(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromPartial(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.mintOut !== undefined && object.mintOut !== null) {
      message.mintOut = Coin.fromPartial(object.mintOut);
    } else {
      message.mintOut = undefined;
    }
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = Coin.fromPartial(object.mintFee);
    } else {
      message.mintFee = undefined;
    }
    return message;
  },
};

const baseMsgBurnBySwap: object = { sender: "", to: "" };

export const MsgBurnBySwap = {
  encode(message: MsgBurnBySwap, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.burnIn !== undefined) {
      Coin.encode(message.burnIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.backingOutMin !== undefined) {
      Coin.encode(message.backingOutMin, writer.uint32(34).fork()).ldelim();
    }
    if (message.lionOutMin !== undefined) {
      Coin.encode(message.lionOutMin, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnBySwap {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnBySwap } as MsgBurnBySwap;
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
          message.burnIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backingOutMin = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lionOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnBySwap {
    const message = { ...baseMsgBurnBySwap } as MsgBurnBySwap;
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
    if (object.burnIn !== undefined && object.burnIn !== null) {
      message.burnIn = Coin.fromJSON(object.burnIn);
    } else {
      message.burnIn = undefined;
    }
    if (object.backingOutMin !== undefined && object.backingOutMin !== null) {
      message.backingOutMin = Coin.fromJSON(object.backingOutMin);
    } else {
      message.backingOutMin = undefined;
    }
    if (object.lionOutMin !== undefined && object.lionOutMin !== null) {
      message.lionOutMin = Coin.fromJSON(object.lionOutMin);
    } else {
      message.lionOutMin = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnBySwap): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.burnIn !== undefined &&
      (obj.burnIn = message.burnIn ? Coin.toJSON(message.burnIn) : undefined);
    message.backingOutMin !== undefined &&
      (obj.backingOutMin = message.backingOutMin
        ? Coin.toJSON(message.backingOutMin)
        : undefined);
    message.lionOutMin !== undefined &&
      (obj.lionOutMin = message.lionOutMin
        ? Coin.toJSON(message.lionOutMin)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnBySwap>): MsgBurnBySwap {
    const message = { ...baseMsgBurnBySwap } as MsgBurnBySwap;
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
    if (object.burnIn !== undefined && object.burnIn !== null) {
      message.burnIn = Coin.fromPartial(object.burnIn);
    } else {
      message.burnIn = undefined;
    }
    if (object.backingOutMin !== undefined && object.backingOutMin !== null) {
      message.backingOutMin = Coin.fromPartial(object.backingOutMin);
    } else {
      message.backingOutMin = undefined;
    }
    if (object.lionOutMin !== undefined && object.lionOutMin !== null) {
      message.lionOutMin = Coin.fromPartial(object.lionOutMin);
    } else {
      message.lionOutMin = undefined;
    }
    return message;
  },
};

const baseMsgBurnBySwapResponse: object = {};

export const MsgBurnBySwapResponse = {
  encode(
    message: MsgBurnBySwapResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnBySwapResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnBySwapResponse } as MsgBurnBySwapResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.burnFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnBySwapResponse {
    const message = { ...baseMsgBurnBySwapResponse } as MsgBurnBySwapResponse;
    if (object.backingOut !== undefined && object.backingOut !== null) {
      message.backingOut = Coin.fromJSON(object.backingOut);
    } else {
      message.backingOut = undefined;
    }
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromJSON(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.burnFee !== undefined && object.burnFee !== null) {
      message.burnFee = Coin.fromJSON(object.burnFee);
    } else {
      message.burnFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnBySwapResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut
        ? Coin.toJSON(message.backingOut)
        : undefined);
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut
        ? Coin.toJSON(message.lionOut)
        : undefined);
    message.burnFee !== undefined &&
      (obj.burnFee = message.burnFee
        ? Coin.toJSON(message.burnFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBurnBySwapResponse>
  ): MsgBurnBySwapResponse {
    const message = { ...baseMsgBurnBySwapResponse } as MsgBurnBySwapResponse;
    if (object.backingOut !== undefined && object.backingOut !== null) {
      message.backingOut = Coin.fromPartial(object.backingOut);
    } else {
      message.backingOut = undefined;
    }
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromPartial(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.burnFee !== undefined && object.burnFee !== null) {
      message.burnFee = Coin.fromPartial(object.burnFee);
    } else {
      message.burnFee = undefined;
    }
    return message;
  },
};

const baseMsgBuyBacking: object = { sender: "", to: "" };

export const MsgBuyBacking = {
  encode(message: MsgBuyBacking, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.backingOutMin !== undefined) {
      Coin.encode(message.backingOutMin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyBacking } as MsgBuyBacking;
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
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.backingOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBacking {
    const message = { ...baseMsgBuyBacking } as MsgBuyBacking;
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
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromJSON(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.backingOutMin !== undefined && object.backingOutMin !== null) {
      message.backingOutMin = Coin.fromJSON(object.backingOutMin);
    } else {
      message.backingOutMin = undefined;
    }
    return message;
  },

  toJSON(message: MsgBuyBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.lionIn !== undefined &&
      (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.backingOutMin !== undefined &&
      (obj.backingOutMin = message.backingOutMin
        ? Coin.toJSON(message.backingOutMin)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBuyBacking>): MsgBuyBacking {
    const message = { ...baseMsgBuyBacking } as MsgBuyBacking;
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
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromPartial(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.backingOutMin !== undefined && object.backingOutMin !== null) {
      message.backingOutMin = Coin.fromPartial(object.backingOutMin);
    } else {
      message.backingOutMin = undefined;
    }
    return message;
  },
};

const baseMsgBuyBackingResponse: object = {};

export const MsgBuyBackingResponse = {
  encode(
    message: MsgBuyBackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.buybackFee !== undefined) {
      Coin.encode(message.buybackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBuyBackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBuyBackingResponse } as MsgBuyBackingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.buybackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBuyBackingResponse {
    const message = { ...baseMsgBuyBackingResponse } as MsgBuyBackingResponse;
    if (object.backingOut !== undefined && object.backingOut !== null) {
      message.backingOut = Coin.fromJSON(object.backingOut);
    } else {
      message.backingOut = undefined;
    }
    if (object.buybackFee !== undefined && object.buybackFee !== null) {
      message.buybackFee = Coin.fromJSON(object.buybackFee);
    } else {
      message.buybackFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgBuyBackingResponse): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut
        ? Coin.toJSON(message.backingOut)
        : undefined);
    message.buybackFee !== undefined &&
      (obj.buybackFee = message.buybackFee
        ? Coin.toJSON(message.buybackFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBuyBackingResponse>
  ): MsgBuyBackingResponse {
    const message = { ...baseMsgBuyBackingResponse } as MsgBuyBackingResponse;
    if (object.backingOut !== undefined && object.backingOut !== null) {
      message.backingOut = Coin.fromPartial(object.backingOut);
    } else {
      message.backingOut = undefined;
    }
    if (object.buybackFee !== undefined && object.buybackFee !== null) {
      message.buybackFee = Coin.fromPartial(object.buybackFee);
    } else {
      message.buybackFee = undefined;
    }
    return message;
  },
};

const baseMsgSellBacking: object = { sender: "", to: "" };

export const MsgSellBacking = {
  encode(message: MsgSellBacking, writer: Writer = Writer.create()): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.lionOutMin !== undefined) {
      Coin.encode(message.lionOutMin, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellBacking } as MsgSellBacking;
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
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lionOutMin = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBacking {
    const message = { ...baseMsgSellBacking } as MsgSellBacking;
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
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromJSON(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    if (object.lionOutMin !== undefined && object.lionOutMin !== null) {
      message.lionOutMin = Coin.fromJSON(object.lionOutMin);
    } else {
      message.lionOutMin = undefined;
    }
    return message;
  },

  toJSON(message: MsgSellBacking): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn
        ? Coin.toJSON(message.backingIn)
        : undefined);
    message.lionOutMin !== undefined &&
      (obj.lionOutMin = message.lionOutMin
        ? Coin.toJSON(message.lionOutMin)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgSellBacking>): MsgSellBacking {
    const message = { ...baseMsgSellBacking } as MsgSellBacking;
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
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromPartial(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    if (object.lionOutMin !== undefined && object.lionOutMin !== null) {
      message.lionOutMin = Coin.fromPartial(object.lionOutMin);
    } else {
      message.lionOutMin = undefined;
    }
    return message;
  },
};

const baseMsgSellBackingResponse: object = {};

export const MsgSellBackingResponse = {
  encode(
    message: MsgSellBackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.rebackFee !== undefined) {
      Coin.encode(message.rebackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgSellBackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgSellBackingResponse } as MsgSellBackingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.rebackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgSellBackingResponse {
    const message = { ...baseMsgSellBackingResponse } as MsgSellBackingResponse;
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromJSON(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.rebackFee !== undefined && object.rebackFee !== null) {
      message.rebackFee = Coin.fromJSON(object.rebackFee);
    } else {
      message.rebackFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgSellBackingResponse): unknown {
    const obj: any = {};
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut
        ? Coin.toJSON(message.lionOut)
        : undefined);
    message.rebackFee !== undefined &&
      (obj.rebackFee = message.rebackFee
        ? Coin.toJSON(message.rebackFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgSellBackingResponse>
  ): MsgSellBackingResponse {
    const message = { ...baseMsgSellBackingResponse } as MsgSellBackingResponse;
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromPartial(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.rebackFee !== undefined && object.rebackFee !== null) {
      message.rebackFee = Coin.fromPartial(object.rebackFee);
    } else {
      message.rebackFee = undefined;
    }
    return message;
  },
};

const baseMsgMintByCollateral: object = {
  sender: "",
  to: "",
  collateralDenom: "",
};

export const MsgMintByCollateral = {
  encode(
    message: MsgMintByCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(26).string(message.collateralDenom);
    }
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgMintByCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgMintByCollateral } as MsgMintByCollateral;
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
          message.collateralDenom = reader.string();
          break;
        case 4:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintByCollateral {
    const message = { ...baseMsgMintByCollateral } as MsgMintByCollateral;
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
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    if (object.mintOut !== undefined && object.mintOut !== null) {
      message.mintOut = Coin.fromJSON(object.mintOut);
    } else {
      message.mintOut = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut
        ? Coin.toJSON(message.mintOut)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgMintByCollateral>): MsgMintByCollateral {
    const message = { ...baseMsgMintByCollateral } as MsgMintByCollateral;
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
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = object.collateralDenom;
    } else {
      message.collateralDenom = "";
    }
    if (object.mintOut !== undefined && object.mintOut !== null) {
      message.mintOut = Coin.fromPartial(object.mintOut);
    } else {
      message.mintOut = undefined;
    }
    return message;
  },
};

const baseMsgMintByCollateralResponse: object = {};

export const MsgMintByCollateralResponse = {
  encode(
    message: MsgMintByCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgMintByCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgMintByCollateralResponse,
    } as MsgMintByCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgMintByCollateralResponse {
    const message = {
      ...baseMsgMintByCollateralResponse,
    } as MsgMintByCollateralResponse;
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = Coin.fromJSON(object.mintFee);
    } else {
      message.mintFee = undefined;
    }
    return message;
  },

  toJSON(message: MsgMintByCollateralResponse): unknown {
    const obj: any = {};
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee
        ? Coin.toJSON(message.mintFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgMintByCollateralResponse>
  ): MsgMintByCollateralResponse {
    const message = {
      ...baseMsgMintByCollateralResponse,
    } as MsgMintByCollateralResponse;
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = Coin.fromPartial(object.mintFee);
    } else {
      message.mintFee = undefined;
    }
    return message;
  },
};

const baseMsgBurnByCollateral: object = { sender: "", collateralDenom: "" };

export const MsgBurnByCollateral = {
  encode(
    message: MsgBurnByCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    if (message.repayInMax !== undefined) {
      Coin.encode(message.repayInMax, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgBurnByCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgBurnByCollateral } as MsgBurnByCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.sender = reader.string();
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        case 3:
          message.repayInMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateral {
    const message = { ...baseMsgBurnByCollateral } as MsgBurnByCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = String(object.sender);
    } else {
      message.sender = "";
    }
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    if (object.repayInMax !== undefined && object.repayInMax !== null) {
      message.repayInMax = Coin.fromJSON(object.repayInMax);
    } else {
      message.repayInMax = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnByCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.repayInMax !== undefined &&
      (obj.repayInMax = message.repayInMax
        ? Coin.toJSON(message.repayInMax)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgBurnByCollateral>): MsgBurnByCollateral {
    const message = { ...baseMsgBurnByCollateral } as MsgBurnByCollateral;
    if (object.sender !== undefined && object.sender !== null) {
      message.sender = object.sender;
    } else {
      message.sender = "";
    }
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = object.collateralDenom;
    } else {
      message.collateralDenom = "";
    }
    if (object.repayInMax !== undefined && object.repayInMax !== null) {
      message.repayInMax = Coin.fromPartial(object.repayInMax);
    } else {
      message.repayInMax = undefined;
    }
    return message;
  },
};

const baseMsgBurnByCollateralResponse: object = {};

export const MsgBurnByCollateralResponse = {
  encode(
    message: MsgBurnByCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.repayIn !== undefined) {
      Coin.encode(message.repayIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgBurnByCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgBurnByCollateralResponse,
    } as MsgBurnByCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgBurnByCollateralResponse {
    const message = {
      ...baseMsgBurnByCollateralResponse,
    } as MsgBurnByCollateralResponse;
    if (object.repayIn !== undefined && object.repayIn !== null) {
      message.repayIn = Coin.fromJSON(object.repayIn);
    } else {
      message.repayIn = undefined;
    }
    return message;
  },

  toJSON(message: MsgBurnByCollateralResponse): unknown {
    const obj: any = {};
    message.repayIn !== undefined &&
      (obj.repayIn = message.repayIn
        ? Coin.toJSON(message.repayIn)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgBurnByCollateralResponse>
  ): MsgBurnByCollateralResponse {
    const message = {
      ...baseMsgBurnByCollateralResponse,
    } as MsgBurnByCollateralResponse;
    if (object.repayIn !== undefined && object.repayIn !== null) {
      message.repayIn = Coin.fromPartial(object.repayIn);
    } else {
      message.repayIn = undefined;
    }
    return message;
  },
};

const baseMsgDepositCollateral: object = { sender: "", to: "" };

export const MsgDepositCollateral = {
  encode(
    message: MsgDepositCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateralIn !== undefined) {
      Coin.encode(message.collateralIn, writer.uint32(26).fork()).ldelim();
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDepositCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDepositCollateral } as MsgDepositCollateral;
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
          message.collateralIn = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDepositCollateral {
    const message = { ...baseMsgDepositCollateral } as MsgDepositCollateral;
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
    if (object.collateralIn !== undefined && object.collateralIn !== null) {
      message.collateralIn = Coin.fromJSON(object.collateralIn);
    } else {
      message.collateralIn = undefined;
    }
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromJSON(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    return message;
  },

  toJSON(message: MsgDepositCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateralIn !== undefined &&
      (obj.collateralIn = message.collateralIn
        ? Coin.toJSON(message.collateralIn)
        : undefined);
    message.lionIn !== undefined &&
      (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgDepositCollateral>): MsgDepositCollateral {
    const message = { ...baseMsgDepositCollateral } as MsgDepositCollateral;
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
    if (object.collateralIn !== undefined && object.collateralIn !== null) {
      message.collateralIn = Coin.fromPartial(object.collateralIn);
    } else {
      message.collateralIn = undefined;
    }
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromPartial(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    return message;
  },
};

const baseMsgDepositCollateralResponse: object = {};

export const MsgDepositCollateralResponse = {
  encode(
    _: MsgDepositCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDepositCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
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

  fromJSON(_: any): MsgDepositCollateralResponse {
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
    return message;
  },

  toJSON(_: MsgDepositCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDepositCollateralResponse>
  ): MsgDepositCollateralResponse {
    const message = {
      ...baseMsgDepositCollateralResponse,
    } as MsgDepositCollateralResponse;
    return message;
  },
};

const baseMsgRedeemCollateral: object = { sender: "", to: "" };

export const MsgRedeemCollateral = {
  encode(
    message: MsgRedeemCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.collateralOut !== undefined) {
      Coin.encode(message.collateralOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgRedeemCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgRedeemCollateral } as MsgRedeemCollateral;
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
          message.collateralOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgRedeemCollateral {
    const message = { ...baseMsgRedeemCollateral } as MsgRedeemCollateral;
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
    if (object.collateralOut !== undefined && object.collateralOut !== null) {
      message.collateralOut = Coin.fromJSON(object.collateralOut);
    } else {
      message.collateralOut = undefined;
    }
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromJSON(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    return message;
  },

  toJSON(message: MsgRedeemCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.collateralOut !== undefined &&
      (obj.collateralOut = message.collateralOut
        ? Coin.toJSON(message.collateralOut)
        : undefined);
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut
        ? Coin.toJSON(message.lionOut)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<MsgRedeemCollateral>): MsgRedeemCollateral {
    const message = { ...baseMsgRedeemCollateral } as MsgRedeemCollateral;
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
    if (object.collateralOut !== undefined && object.collateralOut !== null) {
      message.collateralOut = Coin.fromPartial(object.collateralOut);
    } else {
      message.collateralOut = undefined;
    }
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromPartial(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    return message;
  },
};

const baseMsgRedeemCollateralResponse: object = {};

export const MsgRedeemCollateralResponse = {
  encode(
    _: MsgRedeemCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgRedeemCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgRedeemCollateralResponse,
    } as MsgRedeemCollateralResponse;
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

  fromJSON(_: any): MsgRedeemCollateralResponse {
    const message = {
      ...baseMsgRedeemCollateralResponse,
    } as MsgRedeemCollateralResponse;
    return message;
  },

  toJSON(_: MsgRedeemCollateralResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgRedeemCollateralResponse>
  ): MsgRedeemCollateralResponse {
    const message = {
      ...baseMsgRedeemCollateralResponse,
    } as MsgRedeemCollateralResponse;
    return message;
  },
};

const baseMsgLiquidateCollateral: object = { sender: "", to: "", debtor: "" };

export const MsgLiquidateCollateral = {
  encode(
    message: MsgLiquidateCollateral,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.sender !== "") {
      writer.uint32(10).string(message.sender);
    }
    if (message.to !== "") {
      writer.uint32(18).string(message.to);
    }
    if (message.debtor !== "") {
      writer.uint32(26).string(message.debtor);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(34).fork()).ldelim();
    }
    if (message.repayInMax !== undefined) {
      Coin.encode(message.repayInMax, writer.uint32(42).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgLiquidateCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
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
          message.debtor = reader.string();
          break;
        case 4:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.repayInMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateral {
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
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
    if (object.debtor !== undefined && object.debtor !== null) {
      message.debtor = String(object.debtor);
    } else {
      message.debtor = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.repayInMax !== undefined && object.repayInMax !== null) {
      message.repayInMax = Coin.fromJSON(object.repayInMax);
    } else {
      message.repayInMax = undefined;
    }
    return message;
  },

  toJSON(message: MsgLiquidateCollateral): unknown {
    const obj: any = {};
    message.sender !== undefined && (obj.sender = message.sender);
    message.to !== undefined && (obj.to = message.to);
    message.debtor !== undefined && (obj.debtor = message.debtor);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.repayInMax !== undefined &&
      (obj.repayInMax = message.repayInMax
        ? Coin.toJSON(message.repayInMax)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateral>
  ): MsgLiquidateCollateral {
    const message = { ...baseMsgLiquidateCollateral } as MsgLiquidateCollateral;
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
    if (object.debtor !== undefined && object.debtor !== null) {
      message.debtor = object.debtor;
    } else {
      message.debtor = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.repayInMax !== undefined && object.repayInMax !== null) {
      message.repayInMax = Coin.fromPartial(object.repayInMax);
    } else {
      message.repayInMax = undefined;
    }
    return message;
  },
};

const baseMsgLiquidateCollateralResponse: object = {};

export const MsgLiquidateCollateralResponse = {
  encode(
    message: MsgLiquidateCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.repayIn !== undefined) {
      Coin.encode(message.repayIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.collateralOut !== undefined) {
      Coin.encode(message.collateralOut, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgLiquidateCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.repayIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.collateralOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgLiquidateCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    if (object.repayIn !== undefined && object.repayIn !== null) {
      message.repayIn = Coin.fromJSON(object.repayIn);
    } else {
      message.repayIn = undefined;
    }
    if (object.collateralOut !== undefined && object.collateralOut !== null) {
      message.collateralOut = Coin.fromJSON(object.collateralOut);
    } else {
      message.collateralOut = undefined;
    }
    return message;
  },

  toJSON(message: MsgLiquidateCollateralResponse): unknown {
    const obj: any = {};
    message.repayIn !== undefined &&
      (obj.repayIn = message.repayIn
        ? Coin.toJSON(message.repayIn)
        : undefined);
    message.collateralOut !== undefined &&
      (obj.collateralOut = message.collateralOut
        ? Coin.toJSON(message.collateralOut)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgLiquidateCollateralResponse>
  ): MsgLiquidateCollateralResponse {
    const message = {
      ...baseMsgLiquidateCollateralResponse,
    } as MsgLiquidateCollateralResponse;
    if (object.repayIn !== undefined && object.repayIn !== null) {
      message.repayIn = Coin.fromPartial(object.repayIn);
    } else {
      message.repayIn = undefined;
    }
    if (object.collateralOut !== undefined && object.collateralOut !== null) {
      message.collateralOut = Coin.fromPartial(object.collateralOut);
    } else {
      message.collateralOut = undefined;
    }
    return message;
  },
};

/** Msg defines the maker Msg service. */
export interface Msg {
  /**
   * MintBySwap mints Mer stablecoins by swapping in strong-backing assets and
   * Lion coins.
   */
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse>;
  /**
   * BurnBySwap burns Mer stablecoins by swapping out strong-backing assets and
   * Lion coins.
   */
  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse>;
  /** BuyBacking buys strong-backing assets by spending Lion coins. */
  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse>;
  /**
   * SellBacking sells strong-backing assets by earning Lion
   * coins.
   */
  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse>;
  /**
   * MintByCollateral mints Mer stablecoins by locking collateral assets and
   * spending Lion coins.
   */
  MintByCollateral(
    request: MsgMintByCollateral
  ): Promise<MsgMintByCollateralResponse>;
  /**
   * BurnByCollateral burns Mer stablecoins by unlocking collateral assets and
   * earning Lion coins.
   */
  BurnByCollateral(
    request: MsgBurnByCollateral
  ): Promise<MsgBurnByCollateralResponse>;
  /** DepositCollateral deposits collateral assets. */
  DepositCollateral(
    request: MsgDepositCollateral
  ): Promise<MsgDepositCollateralResponse>;
  /** RedeemCollateral redeems collateral assets and collateralized Lion coins. */
  RedeemCollateral(
    request: MsgRedeemCollateral
  ): Promise<MsgRedeemCollateralResponse>;
  /**
   * LiquidateCollateral liquidates collateral assets which is
   * undercollateralized.
   */
  LiquidateCollateral(
    request: MsgLiquidateCollateral
  ): Promise<MsgLiquidateCollateralResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  MintBySwap(request: MsgMintBySwap): Promise<MsgMintBySwapResponse> {
    const data = MsgMintBySwap.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "MintBySwap",
      data
    );
    return promise.then((data) =>
      MsgMintBySwapResponse.decode(new Reader(data))
    );
  }

  BurnBySwap(request: MsgBurnBySwap): Promise<MsgBurnBySwapResponse> {
    const data = MsgBurnBySwap.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "BurnBySwap",
      data
    );
    return promise.then((data) =>
      MsgBurnBySwapResponse.decode(new Reader(data))
    );
  }

  BuyBacking(request: MsgBuyBacking): Promise<MsgBuyBackingResponse> {
    const data = MsgBuyBacking.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "BuyBacking",
      data
    );
    return promise.then((data) =>
      MsgBuyBackingResponse.decode(new Reader(data))
    );
  }

  SellBacking(request: MsgSellBacking): Promise<MsgSellBackingResponse> {
    const data = MsgSellBacking.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "SellBacking",
      data
    );
    return promise.then((data) =>
      MsgSellBackingResponse.decode(new Reader(data))
    );
  }

  MintByCollateral(
    request: MsgMintByCollateral
  ): Promise<MsgMintByCollateralResponse> {
    const data = MsgMintByCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "MintByCollateral",
      data
    );
    return promise.then((data) =>
      MsgMintByCollateralResponse.decode(new Reader(data))
    );
  }

  BurnByCollateral(
    request: MsgBurnByCollateral
  ): Promise<MsgBurnByCollateralResponse> {
    const data = MsgBurnByCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "BurnByCollateral",
      data
    );
    return promise.then((data) =>
      MsgBurnByCollateralResponse.decode(new Reader(data))
    );
  }

  DepositCollateral(
    request: MsgDepositCollateral
  ): Promise<MsgDepositCollateralResponse> {
    const data = MsgDepositCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "DepositCollateral",
      data
    );
    return promise.then((data) =>
      MsgDepositCollateralResponse.decode(new Reader(data))
    );
  }

  RedeemCollateral(
    request: MsgRedeemCollateral
  ): Promise<MsgRedeemCollateralResponse> {
    const data = MsgRedeemCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "RedeemCollateral",
      data
    );
    return promise.then((data) =>
      MsgRedeemCollateralResponse.decode(new Reader(data))
    );
  }

  LiquidateCollateral(
    request: MsgLiquidateCollateral
  ): Promise<MsgLiquidateCollateralResponse> {
    const data = MsgLiquidateCollateral.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Msg",
      "LiquidateCollateral",
      data
    );
    return promise.then((data) =>
      MsgLiquidateCollateralResponse.decode(new Reader(data))
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
