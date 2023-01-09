/* eslint-disable */
import * as Long from "long";
import { util, configure, Writer, Reader } from "protobufjs/minimal";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.maker.v1";

/** BackingRiskParams represents an object of backing coin risk parameters. */
export interface BackingRiskParams {
  /** backing coin denom */
  backingDenom: string;
  /** whether enabled */
  enabled: boolean;
  /** maximum total backing amount */
  maxBacking: string;
  /** maximum mintable Mer amount */
  maxMerMint: string;
  /** mint fee rate */
  mintFee: string;
  /** burn fee rate */
  burnFee: string;
  /** buyback fee rate */
  buybackFee: string;
  /** reback fee rate */
  rebackFee: string;
}

/** CollateralRiskParams represents an object of collateral risk parameters. */
export interface CollateralRiskParams {
  /** collateral coin denom */
  collateralDenom: string;
  /** whether enabled */
  enabled: boolean;
  /** maximum total collateral amount; empty means no limit */
  maxCollateral: string;
  /** maximum total mintable Mer amount; empty means no limit */
  maxMerMint: string;
  /** ratio at which a position is defined as undercollateralized */
  liquidationThreshold: string;
  /**
   * maximum ratio of maximum amount of currency that can be borrowed with a
   * specific collateral
   */
  loanToValue: string;
  /**
   * basic ratio of maximum amount of currency that can be borrowed with a
   * specific collateral
   */
  basicLoanToValue: string;
  /**
   * catalytic ratio of collateralized Lion to asset, to maximize the LTV
   * in [basic-LTV, LTV]
   */
  catalyticLionRatio: string;
  /**
   * liquidation fee rate, i.e., the discount a liquidator gets when buying
   * collateral flagged for a liquidation
   */
  liquidationFee: string;
  /** mint fee rate, i.e., extra fee debt */
  mintFee: string;
  /** annual interest fee rate (APR) */
  interestFee: string;
}

/**
 * RegisterBackingProposal is a gov Content type to register eligible
 * strong-backing asset with backing risk parameters.
 */
export interface RegisterBackingProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** backing risk params */
  riskParams: BackingRiskParams | undefined;
}

/**
 * RegisterCollateralProposal is a gov Content type to register eligible
 * collateral with collateral risk parameters.
 */
export interface RegisterCollateralProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** collateral risk params */
  riskParams: CollateralRiskParams | undefined;
}

/**
 * SetBackingRiskParamsProposal is a gov Content type to set backing coin risk
 * parameters.
 */
export interface SetBackingRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** backing risk params */
  riskParams: BackingRiskParams | undefined;
}

/**
 * SetCollateralRiskParamsProposal is a gov Content type to set collateral risk
 * parameters.
 */
export interface SetCollateralRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** collateral risk params */
  riskParams: CollateralRiskParams | undefined;
}

export interface BatchBackingRiskParams {
  /** batch of collateral risk params */
  riskParams: BackingRiskParams[];
}

/**
 * BatchSetBackingRiskParamsProposal is a gov Content type to batch set backing
 * coin risk parameters.
 */
export interface BatchSetBackingRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** batch of collateral risk params */
  riskParams: BackingRiskParams[];
}

export interface BatchCollateralRiskParams {
  /** batch of collateral risk params */
  riskParams: CollateralRiskParams[];
}

/**
 * BatchSetCollateralRiskParamsProposal is a gov Content type to batch set
 * collateral risk parameters.
 */
export interface BatchSetCollateralRiskParamsProposal {
  /** title of the proposal */
  title: string;
  /** proposal description */
  description: string;
  /** batch of collateral risk params */
  riskParams: CollateralRiskParams[];
}

export interface TotalBacking {
  /** total backing value in uUSD */
  backingValue: string;
  /** total minted mer; negative value means burned mer */
  merMinted: Coin | undefined;
  /** total burned lion; negative value means minted lion */
  lionBurned: Coin | undefined;
}

export interface PoolBacking {
  /** total minted mer; negative value means burned mer */
  merMinted: Coin | undefined;
  /** total backing */
  backing: Coin | undefined;
  /** total burned lion; negative value means minted lion */
  lionBurned: Coin | undefined;
}

export interface AccountBacking {}

export interface TotalCollateral {
  /**
   * total existing mer debt, including minted by collateral, mint fee, last
   * interest
   */
  merDebt: Coin | undefined;
  /** total collateralized lion */
  lionCollateralized: Coin | undefined;
}

export interface PoolCollateral {
  /** total collateral */
  collateral: Coin | undefined;
  /**
   * total existing mer debt, including minted by collateral, mint fee, last
   * interest
   */
  merDebt: Coin | undefined;
  /** total collateralized lion */
  lionCollateralized: Coin | undefined;
}

export interface AccountCollateral {
  /** account who owns collateral */
  account: string;
  /** existing collateral */
  collateral: Coin | undefined;
  /** remaining mer debt, including minted by collateral, mint fee, last interest */
  merDebt: Coin | undefined;
  /** total collateralized lion */
  lionCollateralized: Coin | undefined;
  /** remaining interest debt at last settlement */
  lastInterest: Coin | undefined;
  /** the block of last settlement */
  lastSettlementBlock: number;
}

const baseBackingRiskParams: object = {
  backingDenom: "",
  enabled: false,
  maxBacking: "",
  maxMerMint: "",
  mintFee: "",
  burnFee: "",
  buybackFee: "",
  rebackFee: "",
};

export const BackingRiskParams = {
  encode(message: BackingRiskParams, writer: Writer = Writer.create()): Writer {
    if (message.backingDenom !== "") {
      writer.uint32(10).string(message.backingDenom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.maxBacking !== "") {
      writer.uint32(26).string(message.maxBacking);
    }
    if (message.maxMerMint !== "") {
      writer.uint32(34).string(message.maxMerMint);
    }
    if (message.mintFee !== "") {
      writer.uint32(42).string(message.mintFee);
    }
    if (message.burnFee !== "") {
      writer.uint32(50).string(message.burnFee);
    }
    if (message.buybackFee !== "") {
      writer.uint32(58).string(message.buybackFee);
    }
    if (message.rebackFee !== "") {
      writer.uint32(66).string(message.rebackFee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BackingRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBackingRiskParams } as BackingRiskParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingDenom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.maxBacking = reader.string();
          break;
        case 4:
          message.maxMerMint = reader.string();
          break;
        case 5:
          message.mintFee = reader.string();
          break;
        case 6:
          message.burnFee = reader.string();
          break;
        case 7:
          message.buybackFee = reader.string();
          break;
        case 8:
          message.rebackFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BackingRiskParams {
    const message = { ...baseBackingRiskParams } as BackingRiskParams;
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = String(object.backingDenom);
    } else {
      message.backingDenom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.maxBacking !== undefined && object.maxBacking !== null) {
      message.maxBacking = String(object.maxBacking);
    } else {
      message.maxBacking = "";
    }
    if (object.maxMerMint !== undefined && object.maxMerMint !== null) {
      message.maxMerMint = String(object.maxMerMint);
    } else {
      message.maxMerMint = "";
    }
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = String(object.mintFee);
    } else {
      message.mintFee = "";
    }
    if (object.burnFee !== undefined && object.burnFee !== null) {
      message.burnFee = String(object.burnFee);
    } else {
      message.burnFee = "";
    }
    if (object.buybackFee !== undefined && object.buybackFee !== null) {
      message.buybackFee = String(object.buybackFee);
    } else {
      message.buybackFee = "";
    }
    if (object.rebackFee !== undefined && object.rebackFee !== null) {
      message.rebackFee = String(object.rebackFee);
    } else {
      message.rebackFee = "";
    }
    return message;
  },

  toJSON(message: BackingRiskParams): unknown {
    const obj: any = {};
    message.backingDenom !== undefined &&
      (obj.backingDenom = message.backingDenom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.maxBacking !== undefined && (obj.maxBacking = message.maxBacking);
    message.maxMerMint !== undefined && (obj.maxMerMint = message.maxMerMint);
    message.mintFee !== undefined && (obj.mintFee = message.mintFee);
    message.burnFee !== undefined && (obj.burnFee = message.burnFee);
    message.buybackFee !== undefined && (obj.buybackFee = message.buybackFee);
    message.rebackFee !== undefined && (obj.rebackFee = message.rebackFee);
    return obj;
  },

  fromPartial(object: DeepPartial<BackingRiskParams>): BackingRiskParams {
    const message = { ...baseBackingRiskParams } as BackingRiskParams;
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = object.backingDenom;
    } else {
      message.backingDenom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.maxBacking !== undefined && object.maxBacking !== null) {
      message.maxBacking = object.maxBacking;
    } else {
      message.maxBacking = "";
    }
    if (object.maxMerMint !== undefined && object.maxMerMint !== null) {
      message.maxMerMint = object.maxMerMint;
    } else {
      message.maxMerMint = "";
    }
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = object.mintFee;
    } else {
      message.mintFee = "";
    }
    if (object.burnFee !== undefined && object.burnFee !== null) {
      message.burnFee = object.burnFee;
    } else {
      message.burnFee = "";
    }
    if (object.buybackFee !== undefined && object.buybackFee !== null) {
      message.buybackFee = object.buybackFee;
    } else {
      message.buybackFee = "";
    }
    if (object.rebackFee !== undefined && object.rebackFee !== null) {
      message.rebackFee = object.rebackFee;
    } else {
      message.rebackFee = "";
    }
    return message;
  },
};

const baseCollateralRiskParams: object = {
  collateralDenom: "",
  enabled: false,
  maxCollateral: "",
  maxMerMint: "",
  liquidationThreshold: "",
  loanToValue: "",
  basicLoanToValue: "",
  catalyticLionRatio: "",
  liquidationFee: "",
  mintFee: "",
  interestFee: "",
};

export const CollateralRiskParams = {
  encode(
    message: CollateralRiskParams,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collateralDenom !== "") {
      writer.uint32(10).string(message.collateralDenom);
    }
    if (message.enabled === true) {
      writer.uint32(16).bool(message.enabled);
    }
    if (message.maxCollateral !== "") {
      writer.uint32(26).string(message.maxCollateral);
    }
    if (message.maxMerMint !== "") {
      writer.uint32(34).string(message.maxMerMint);
    }
    if (message.liquidationThreshold !== "") {
      writer.uint32(42).string(message.liquidationThreshold);
    }
    if (message.loanToValue !== "") {
      writer.uint32(50).string(message.loanToValue);
    }
    if (message.basicLoanToValue !== "") {
      writer.uint32(58).string(message.basicLoanToValue);
    }
    if (message.catalyticLionRatio !== "") {
      writer.uint32(66).string(message.catalyticLionRatio);
    }
    if (message.liquidationFee !== "") {
      writer.uint32(74).string(message.liquidationFee);
    }
    if (message.mintFee !== "") {
      writer.uint32(82).string(message.mintFee);
    }
    if (message.interestFee !== "") {
      writer.uint32(90).string(message.interestFee);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): CollateralRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseCollateralRiskParams } as CollateralRiskParams;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralDenom = reader.string();
          break;
        case 2:
          message.enabled = reader.bool();
          break;
        case 3:
          message.maxCollateral = reader.string();
          break;
        case 4:
          message.maxMerMint = reader.string();
          break;
        case 5:
          message.liquidationThreshold = reader.string();
          break;
        case 6:
          message.loanToValue = reader.string();
          break;
        case 7:
          message.basicLoanToValue = reader.string();
          break;
        case 8:
          message.catalyticLionRatio = reader.string();
          break;
        case 9:
          message.liquidationFee = reader.string();
          break;
        case 10:
          message.mintFee = reader.string();
          break;
        case 11:
          message.interestFee = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): CollateralRiskParams {
    const message = { ...baseCollateralRiskParams } as CollateralRiskParams;
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = Boolean(object.enabled);
    } else {
      message.enabled = false;
    }
    if (object.maxCollateral !== undefined && object.maxCollateral !== null) {
      message.maxCollateral = String(object.maxCollateral);
    } else {
      message.maxCollateral = "";
    }
    if (object.maxMerMint !== undefined && object.maxMerMint !== null) {
      message.maxMerMint = String(object.maxMerMint);
    } else {
      message.maxMerMint = "";
    }
    if (
      object.liquidationThreshold !== undefined &&
      object.liquidationThreshold !== null
    ) {
      message.liquidationThreshold = String(object.liquidationThreshold);
    } else {
      message.liquidationThreshold = "";
    }
    if (object.loanToValue !== undefined && object.loanToValue !== null) {
      message.loanToValue = String(object.loanToValue);
    } else {
      message.loanToValue = "";
    }
    if (
      object.basicLoanToValue !== undefined &&
      object.basicLoanToValue !== null
    ) {
      message.basicLoanToValue = String(object.basicLoanToValue);
    } else {
      message.basicLoanToValue = "";
    }
    if (
      object.catalyticLionRatio !== undefined &&
      object.catalyticLionRatio !== null
    ) {
      message.catalyticLionRatio = String(object.catalyticLionRatio);
    } else {
      message.catalyticLionRatio = "";
    }
    if (object.liquidationFee !== undefined && object.liquidationFee !== null) {
      message.liquidationFee = String(object.liquidationFee);
    } else {
      message.liquidationFee = "";
    }
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = String(object.mintFee);
    } else {
      message.mintFee = "";
    }
    if (object.interestFee !== undefined && object.interestFee !== null) {
      message.interestFee = String(object.interestFee);
    } else {
      message.interestFee = "";
    }
    return message;
  },

  toJSON(message: CollateralRiskParams): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    message.enabled !== undefined && (obj.enabled = message.enabled);
    message.maxCollateral !== undefined &&
      (obj.maxCollateral = message.maxCollateral);
    message.maxMerMint !== undefined && (obj.maxMerMint = message.maxMerMint);
    message.liquidationThreshold !== undefined &&
      (obj.liquidationThreshold = message.liquidationThreshold);
    message.loanToValue !== undefined &&
      (obj.loanToValue = message.loanToValue);
    message.basicLoanToValue !== undefined &&
      (obj.basicLoanToValue = message.basicLoanToValue);
    message.catalyticLionRatio !== undefined &&
      (obj.catalyticLionRatio = message.catalyticLionRatio);
    message.liquidationFee !== undefined &&
      (obj.liquidationFee = message.liquidationFee);
    message.mintFee !== undefined && (obj.mintFee = message.mintFee);
    message.interestFee !== undefined &&
      (obj.interestFee = message.interestFee);
    return obj;
  },

  fromPartial(object: DeepPartial<CollateralRiskParams>): CollateralRiskParams {
    const message = { ...baseCollateralRiskParams } as CollateralRiskParams;
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = object.collateralDenom;
    } else {
      message.collateralDenom = "";
    }
    if (object.enabled !== undefined && object.enabled !== null) {
      message.enabled = object.enabled;
    } else {
      message.enabled = false;
    }
    if (object.maxCollateral !== undefined && object.maxCollateral !== null) {
      message.maxCollateral = object.maxCollateral;
    } else {
      message.maxCollateral = "";
    }
    if (object.maxMerMint !== undefined && object.maxMerMint !== null) {
      message.maxMerMint = object.maxMerMint;
    } else {
      message.maxMerMint = "";
    }
    if (
      object.liquidationThreshold !== undefined &&
      object.liquidationThreshold !== null
    ) {
      message.liquidationThreshold = object.liquidationThreshold;
    } else {
      message.liquidationThreshold = "";
    }
    if (object.loanToValue !== undefined && object.loanToValue !== null) {
      message.loanToValue = object.loanToValue;
    } else {
      message.loanToValue = "";
    }
    if (
      object.basicLoanToValue !== undefined &&
      object.basicLoanToValue !== null
    ) {
      message.basicLoanToValue = object.basicLoanToValue;
    } else {
      message.basicLoanToValue = "";
    }
    if (
      object.catalyticLionRatio !== undefined &&
      object.catalyticLionRatio !== null
    ) {
      message.catalyticLionRatio = object.catalyticLionRatio;
    } else {
      message.catalyticLionRatio = "";
    }
    if (object.liquidationFee !== undefined && object.liquidationFee !== null) {
      message.liquidationFee = object.liquidationFee;
    } else {
      message.liquidationFee = "";
    }
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = object.mintFee;
    } else {
      message.mintFee = "";
    }
    if (object.interestFee !== undefined && object.interestFee !== null) {
      message.interestFee = object.interestFee;
    } else {
      message.interestFee = "";
    }
    return message;
  },
};

const baseRegisterBackingProposal: object = { title: "", description: "" };

export const RegisterBackingProposal = {
  encode(
    message: RegisterBackingProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      BackingRiskParams.encode(
        message.riskParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): RegisterBackingProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterBackingProposal,
    } as RegisterBackingProposal;
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
          message.riskParams = BackingRiskParams.decode(
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

  fromJSON(object: any): RegisterBackingProposal {
    const message = {
      ...baseRegisterBackingProposal,
    } as RegisterBackingProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = BackingRiskParams.fromJSON(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },

  toJSON(message: RegisterBackingProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams
        ? BackingRiskParams.toJSON(message.riskParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterBackingProposal>
  ): RegisterBackingProposal {
    const message = {
      ...baseRegisterBackingProposal,
    } as RegisterBackingProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = BackingRiskParams.fromPartial(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },
};

const baseRegisterCollateralProposal: object = { title: "", description: "" };

export const RegisterCollateralProposal = {
  encode(
    message: RegisterCollateralProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      CollateralRiskParams.encode(
        message.riskParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): RegisterCollateralProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseRegisterCollateralProposal,
    } as RegisterCollateralProposal;
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
          message.riskParams = CollateralRiskParams.decode(
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

  fromJSON(object: any): RegisterCollateralProposal {
    const message = {
      ...baseRegisterCollateralProposal,
    } as RegisterCollateralProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = CollateralRiskParams.fromJSON(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },

  toJSON(message: RegisterCollateralProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams
        ? CollateralRiskParams.toJSON(message.riskParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<RegisterCollateralProposal>
  ): RegisterCollateralProposal {
    const message = {
      ...baseRegisterCollateralProposal,
    } as RegisterCollateralProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = CollateralRiskParams.fromPartial(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },
};

const baseSetBackingRiskParamsProposal: object = { title: "", description: "" };

export const SetBackingRiskParamsProposal = {
  encode(
    message: SetBackingRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      BackingRiskParams.encode(
        message.riskParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SetBackingRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetBackingRiskParamsProposal,
    } as SetBackingRiskParamsProposal;
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
          message.riskParams = BackingRiskParams.decode(
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

  fromJSON(object: any): SetBackingRiskParamsProposal {
    const message = {
      ...baseSetBackingRiskParamsProposal,
    } as SetBackingRiskParamsProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = BackingRiskParams.fromJSON(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },

  toJSON(message: SetBackingRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams
        ? BackingRiskParams.toJSON(message.riskParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetBackingRiskParamsProposal>
  ): SetBackingRiskParamsProposal {
    const message = {
      ...baseSetBackingRiskParamsProposal,
    } as SetBackingRiskParamsProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = BackingRiskParams.fromPartial(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },
};

const baseSetCollateralRiskParamsProposal: object = {
  title: "",
  description: "",
};

export const SetCollateralRiskParamsProposal = {
  encode(
    message: SetCollateralRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    if (message.riskParams !== undefined) {
      CollateralRiskParams.encode(
        message.riskParams,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): SetCollateralRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseSetCollateralRiskParamsProposal,
    } as SetCollateralRiskParamsProposal;
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
          message.riskParams = CollateralRiskParams.decode(
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

  fromJSON(object: any): SetCollateralRiskParamsProposal {
    const message = {
      ...baseSetCollateralRiskParamsProposal,
    } as SetCollateralRiskParamsProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = CollateralRiskParams.fromJSON(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },

  toJSON(message: SetCollateralRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    message.riskParams !== undefined &&
      (obj.riskParams = message.riskParams
        ? CollateralRiskParams.toJSON(message.riskParams)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<SetCollateralRiskParamsProposal>
  ): SetCollateralRiskParamsProposal {
    const message = {
      ...baseSetCollateralRiskParamsProposal,
    } as SetCollateralRiskParamsProposal;
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      message.riskParams = CollateralRiskParams.fromPartial(object.riskParams);
    } else {
      message.riskParams = undefined;
    }
    return message;
  },
};

const baseBatchBackingRiskParams: object = {};

export const BatchBackingRiskParams = {
  encode(
    message: BatchBackingRiskParams,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.riskParams) {
      BackingRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): BatchBackingRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseBatchBackingRiskParams } as BatchBackingRiskParams;
    message.riskParams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskParams.push(
            BackingRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchBackingRiskParams {
    const message = { ...baseBatchBackingRiskParams } as BatchBackingRiskParams;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(BackingRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchBackingRiskParams): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) =>
        e ? BackingRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchBackingRiskParams>
  ): BatchBackingRiskParams {
    const message = { ...baseBatchBackingRiskParams } as BatchBackingRiskParams;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(BackingRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBatchSetBackingRiskParamsProposal: object = {
  title: "",
  description: "",
};

export const BatchSetBackingRiskParamsProposal = {
  encode(
    message: BatchSetBackingRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.riskParams) {
      BackingRiskParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BatchSetBackingRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBatchSetBackingRiskParamsProposal,
    } as BatchSetBackingRiskParamsProposal;
    message.riskParams = [];
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
          message.riskParams.push(
            BackingRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSetBackingRiskParamsProposal {
    const message = {
      ...baseBatchSetBackingRiskParamsProposal,
    } as BatchSetBackingRiskParamsProposal;
    message.riskParams = [];
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(BackingRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchSetBackingRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) =>
        e ? BackingRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchSetBackingRiskParamsProposal>
  ): BatchSetBackingRiskParamsProposal {
    const message = {
      ...baseBatchSetBackingRiskParamsProposal,
    } as BatchSetBackingRiskParamsProposal;
    message.riskParams = [];
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(BackingRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBatchCollateralRiskParams: object = {};

export const BatchCollateralRiskParams = {
  encode(
    message: BatchCollateralRiskParams,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.riskParams) {
      CollateralRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BatchCollateralRiskParams {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBatchCollateralRiskParams,
    } as BatchCollateralRiskParams;
    message.riskParams = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.riskParams.push(
            CollateralRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchCollateralRiskParams {
    const message = {
      ...baseBatchCollateralRiskParams,
    } as BatchCollateralRiskParams;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(CollateralRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchCollateralRiskParams): unknown {
    const obj: any = {};
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) =>
        e ? CollateralRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchCollateralRiskParams>
  ): BatchCollateralRiskParams {
    const message = {
      ...baseBatchCollateralRiskParams,
    } as BatchCollateralRiskParams;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(CollateralRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseBatchSetCollateralRiskParamsProposal: object = {
  title: "",
  description: "",
};

export const BatchSetCollateralRiskParamsProposal = {
  encode(
    message: BatchSetCollateralRiskParamsProposal,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.title !== "") {
      writer.uint32(10).string(message.title);
    }
    if (message.description !== "") {
      writer.uint32(18).string(message.description);
    }
    for (const v of message.riskParams) {
      CollateralRiskParams.encode(v!, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): BatchSetCollateralRiskParamsProposal {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseBatchSetCollateralRiskParamsProposal,
    } as BatchSetCollateralRiskParamsProposal;
    message.riskParams = [];
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
          message.riskParams.push(
            CollateralRiskParams.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): BatchSetCollateralRiskParamsProposal {
    const message = {
      ...baseBatchSetCollateralRiskParamsProposal,
    } as BatchSetCollateralRiskParamsProposal;
    message.riskParams = [];
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(CollateralRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: BatchSetCollateralRiskParamsProposal): unknown {
    const obj: any = {};
    message.title !== undefined && (obj.title = message.title);
    message.description !== undefined &&
      (obj.description = message.description);
    if (message.riskParams) {
      obj.riskParams = message.riskParams.map((e) =>
        e ? CollateralRiskParams.toJSON(e) : undefined
      );
    } else {
      obj.riskParams = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<BatchSetCollateralRiskParamsProposal>
  ): BatchSetCollateralRiskParamsProposal {
    const message = {
      ...baseBatchSetCollateralRiskParamsProposal,
    } as BatchSetCollateralRiskParamsProposal;
    message.riskParams = [];
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
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(CollateralRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseTotalBacking: object = { backingValue: "" };

export const TotalBacking = {
  encode(message: TotalBacking, writer: Writer = Writer.create()): Writer {
    if (message.backingValue !== "") {
      writer.uint32(10).string(message.backingValue);
    }
    if (message.merMinted !== undefined) {
      Coin.encode(message.merMinted, writer.uint32(18).fork()).ldelim();
    }
    if (message.lionBurned !== undefined) {
      Coin.encode(message.lionBurned, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TotalBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalBacking } as TotalBacking;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingValue = reader.string();
          break;
        case 2:
          message.merMinted = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.lionBurned = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalBacking {
    const message = { ...baseTotalBacking } as TotalBacking;
    if (object.backingValue !== undefined && object.backingValue !== null) {
      message.backingValue = String(object.backingValue);
    } else {
      message.backingValue = "";
    }
    if (object.merMinted !== undefined && object.merMinted !== null) {
      message.merMinted = Coin.fromJSON(object.merMinted);
    } else {
      message.merMinted = undefined;
    }
    if (object.lionBurned !== undefined && object.lionBurned !== null) {
      message.lionBurned = Coin.fromJSON(object.lionBurned);
    } else {
      message.lionBurned = undefined;
    }
    return message;
  },

  toJSON(message: TotalBacking): unknown {
    const obj: any = {};
    message.backingValue !== undefined &&
      (obj.backingValue = message.backingValue);
    message.merMinted !== undefined &&
      (obj.merMinted = message.merMinted
        ? Coin.toJSON(message.merMinted)
        : undefined);
    message.lionBurned !== undefined &&
      (obj.lionBurned = message.lionBurned
        ? Coin.toJSON(message.lionBurned)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalBacking>): TotalBacking {
    const message = { ...baseTotalBacking } as TotalBacking;
    if (object.backingValue !== undefined && object.backingValue !== null) {
      message.backingValue = object.backingValue;
    } else {
      message.backingValue = "";
    }
    if (object.merMinted !== undefined && object.merMinted !== null) {
      message.merMinted = Coin.fromPartial(object.merMinted);
    } else {
      message.merMinted = undefined;
    }
    if (object.lionBurned !== undefined && object.lionBurned !== null) {
      message.lionBurned = Coin.fromPartial(object.lionBurned);
    } else {
      message.lionBurned = undefined;
    }
    return message;
  },
};

const basePoolBacking: object = {};

export const PoolBacking = {
  encode(message: PoolBacking, writer: Writer = Writer.create()): Writer {
    if (message.merMinted !== undefined) {
      Coin.encode(message.merMinted, writer.uint32(10).fork()).ldelim();
    }
    if (message.backing !== undefined) {
      Coin.encode(message.backing, writer.uint32(18).fork()).ldelim();
    }
    if (message.lionBurned !== undefined) {
      Coin.encode(message.lionBurned, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolBacking } as PoolBacking;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merMinted = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backing = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.lionBurned = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolBacking {
    const message = { ...basePoolBacking } as PoolBacking;
    if (object.merMinted !== undefined && object.merMinted !== null) {
      message.merMinted = Coin.fromJSON(object.merMinted);
    } else {
      message.merMinted = undefined;
    }
    if (object.backing !== undefined && object.backing !== null) {
      message.backing = Coin.fromJSON(object.backing);
    } else {
      message.backing = undefined;
    }
    if (object.lionBurned !== undefined && object.lionBurned !== null) {
      message.lionBurned = Coin.fromJSON(object.lionBurned);
    } else {
      message.lionBurned = undefined;
    }
    return message;
  },

  toJSON(message: PoolBacking): unknown {
    const obj: any = {};
    message.merMinted !== undefined &&
      (obj.merMinted = message.merMinted
        ? Coin.toJSON(message.merMinted)
        : undefined);
    message.backing !== undefined &&
      (obj.backing = message.backing
        ? Coin.toJSON(message.backing)
        : undefined);
    message.lionBurned !== undefined &&
      (obj.lionBurned = message.lionBurned
        ? Coin.toJSON(message.lionBurned)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolBacking>): PoolBacking {
    const message = { ...basePoolBacking } as PoolBacking;
    if (object.merMinted !== undefined && object.merMinted !== null) {
      message.merMinted = Coin.fromPartial(object.merMinted);
    } else {
      message.merMinted = undefined;
    }
    if (object.backing !== undefined && object.backing !== null) {
      message.backing = Coin.fromPartial(object.backing);
    } else {
      message.backing = undefined;
    }
    if (object.lionBurned !== undefined && object.lionBurned !== null) {
      message.lionBurned = Coin.fromPartial(object.lionBurned);
    } else {
      message.lionBurned = undefined;
    }
    return message;
  },
};

const baseAccountBacking: object = {};

export const AccountBacking = {
  encode(_: AccountBacking, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountBacking {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountBacking } as AccountBacking;
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

  fromJSON(_: any): AccountBacking {
    const message = { ...baseAccountBacking } as AccountBacking;
    return message;
  },

  toJSON(_: AccountBacking): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<AccountBacking>): AccountBacking {
    const message = { ...baseAccountBacking } as AccountBacking;
    return message;
  },
};

const baseTotalCollateral: object = {};

export const TotalCollateral = {
  encode(message: TotalCollateral, writer: Writer = Writer.create()): Writer {
    if (message.merDebt !== undefined) {
      Coin.encode(message.merDebt, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionCollateralized !== undefined) {
      Coin.encode(
        message.lionCollateralized,
        writer.uint32(18).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): TotalCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseTotalCollateral } as TotalCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.merDebt = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionCollateralized = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): TotalCollateral {
    const message = { ...baseTotalCollateral } as TotalCollateral;
    if (object.merDebt !== undefined && object.merDebt !== null) {
      message.merDebt = Coin.fromJSON(object.merDebt);
    } else {
      message.merDebt = undefined;
    }
    if (
      object.lionCollateralized !== undefined &&
      object.lionCollateralized !== null
    ) {
      message.lionCollateralized = Coin.fromJSON(object.lionCollateralized);
    } else {
      message.lionCollateralized = undefined;
    }
    return message;
  },

  toJSON(message: TotalCollateral): unknown {
    const obj: any = {};
    message.merDebt !== undefined &&
      (obj.merDebt = message.merDebt
        ? Coin.toJSON(message.merDebt)
        : undefined);
    message.lionCollateralized !== undefined &&
      (obj.lionCollateralized = message.lionCollateralized
        ? Coin.toJSON(message.lionCollateralized)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<TotalCollateral>): TotalCollateral {
    const message = { ...baseTotalCollateral } as TotalCollateral;
    if (object.merDebt !== undefined && object.merDebt !== null) {
      message.merDebt = Coin.fromPartial(object.merDebt);
    } else {
      message.merDebt = undefined;
    }
    if (
      object.lionCollateralized !== undefined &&
      object.lionCollateralized !== null
    ) {
      message.lionCollateralized = Coin.fromPartial(object.lionCollateralized);
    } else {
      message.lionCollateralized = undefined;
    }
    return message;
  },
};

const basePoolCollateral: object = {};

export const PoolCollateral = {
  encode(message: PoolCollateral, writer: Writer = Writer.create()): Writer {
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(10).fork()).ldelim();
    }
    if (message.merDebt !== undefined) {
      Coin.encode(message.merDebt, writer.uint32(18).fork()).ldelim();
    }
    if (message.lionCollateralized !== undefined) {
      Coin.encode(
        message.lionCollateralized,
        writer.uint32(26).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): PoolCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...basePoolCollateral } as PoolCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.merDebt = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.lionCollateralized = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): PoolCollateral {
    const message = { ...basePoolCollateral } as PoolCollateral;
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.merDebt !== undefined && object.merDebt !== null) {
      message.merDebt = Coin.fromJSON(object.merDebt);
    } else {
      message.merDebt = undefined;
    }
    if (
      object.lionCollateralized !== undefined &&
      object.lionCollateralized !== null
    ) {
      message.lionCollateralized = Coin.fromJSON(object.lionCollateralized);
    } else {
      message.lionCollateralized = undefined;
    }
    return message;
  },

  toJSON(message: PoolCollateral): unknown {
    const obj: any = {};
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.merDebt !== undefined &&
      (obj.merDebt = message.merDebt
        ? Coin.toJSON(message.merDebt)
        : undefined);
    message.lionCollateralized !== undefined &&
      (obj.lionCollateralized = message.lionCollateralized
        ? Coin.toJSON(message.lionCollateralized)
        : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<PoolCollateral>): PoolCollateral {
    const message = { ...basePoolCollateral } as PoolCollateral;
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.merDebt !== undefined && object.merDebt !== null) {
      message.merDebt = Coin.fromPartial(object.merDebt);
    } else {
      message.merDebt = undefined;
    }
    if (
      object.lionCollateralized !== undefined &&
      object.lionCollateralized !== null
    ) {
      message.lionCollateralized = Coin.fromPartial(object.lionCollateralized);
    } else {
      message.lionCollateralized = undefined;
    }
    return message;
  },
};

const baseAccountCollateral: object = { account: "", lastSettlementBlock: 0 };

export const AccountCollateral = {
  encode(message: AccountCollateral, writer: Writer = Writer.create()): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.collateral !== undefined) {
      Coin.encode(message.collateral, writer.uint32(18).fork()).ldelim();
    }
    if (message.merDebt !== undefined) {
      Coin.encode(message.merDebt, writer.uint32(26).fork()).ldelim();
    }
    if (message.lionCollateralized !== undefined) {
      Coin.encode(
        message.lionCollateralized,
        writer.uint32(34).fork()
      ).ldelim();
    }
    if (message.lastInterest !== undefined) {
      Coin.encode(message.lastInterest, writer.uint32(42).fork()).ldelim();
    }
    if (message.lastSettlementBlock !== 0) {
      writer.uint32(48).int64(message.lastSettlementBlock);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): AccountCollateral {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseAccountCollateral } as AccountCollateral;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.collateral = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.merDebt = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.lionCollateralized = Coin.decode(reader, reader.uint32());
          break;
        case 5:
          message.lastInterest = Coin.decode(reader, reader.uint32());
          break;
        case 6:
          message.lastSettlementBlock = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): AccountCollateral {
    const message = { ...baseAccountCollateral } as AccountCollateral;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromJSON(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.merDebt !== undefined && object.merDebt !== null) {
      message.merDebt = Coin.fromJSON(object.merDebt);
    } else {
      message.merDebt = undefined;
    }
    if (
      object.lionCollateralized !== undefined &&
      object.lionCollateralized !== null
    ) {
      message.lionCollateralized = Coin.fromJSON(object.lionCollateralized);
    } else {
      message.lionCollateralized = undefined;
    }
    if (object.lastInterest !== undefined && object.lastInterest !== null) {
      message.lastInterest = Coin.fromJSON(object.lastInterest);
    } else {
      message.lastInterest = undefined;
    }
    if (
      object.lastSettlementBlock !== undefined &&
      object.lastSettlementBlock !== null
    ) {
      message.lastSettlementBlock = Number(object.lastSettlementBlock);
    } else {
      message.lastSettlementBlock = 0;
    }
    return message;
  },

  toJSON(message: AccountCollateral): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.collateral !== undefined &&
      (obj.collateral = message.collateral
        ? Coin.toJSON(message.collateral)
        : undefined);
    message.merDebt !== undefined &&
      (obj.merDebt = message.merDebt
        ? Coin.toJSON(message.merDebt)
        : undefined);
    message.lionCollateralized !== undefined &&
      (obj.lionCollateralized = message.lionCollateralized
        ? Coin.toJSON(message.lionCollateralized)
        : undefined);
    message.lastInterest !== undefined &&
      (obj.lastInterest = message.lastInterest
        ? Coin.toJSON(message.lastInterest)
        : undefined);
    message.lastSettlementBlock !== undefined &&
      (obj.lastSettlementBlock = message.lastSettlementBlock);
    return obj;
  },

  fromPartial(object: DeepPartial<AccountCollateral>): AccountCollateral {
    const message = { ...baseAccountCollateral } as AccountCollateral;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (object.collateral !== undefined && object.collateral !== null) {
      message.collateral = Coin.fromPartial(object.collateral);
    } else {
      message.collateral = undefined;
    }
    if (object.merDebt !== undefined && object.merDebt !== null) {
      message.merDebt = Coin.fromPartial(object.merDebt);
    } else {
      message.merDebt = undefined;
    }
    if (
      object.lionCollateralized !== undefined &&
      object.lionCollateralized !== null
    ) {
      message.lionCollateralized = Coin.fromPartial(object.lionCollateralized);
    } else {
      message.lionCollateralized = undefined;
    }
    if (object.lastInterest !== undefined && object.lastInterest !== null) {
      message.lastInterest = Coin.fromPartial(object.lastInterest);
    } else {
      message.lastInterest = undefined;
    }
    if (
      object.lastSettlementBlock !== undefined &&
      object.lastSettlementBlock !== null
    ) {
      message.lastSettlementBlock = object.lastSettlementBlock;
    } else {
      message.lastSettlementBlock = 0;
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
