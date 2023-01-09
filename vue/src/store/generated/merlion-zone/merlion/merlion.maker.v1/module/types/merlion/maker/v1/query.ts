/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import {
  BackingRiskParams,
  CollateralRiskParams,
  PoolBacking,
  PoolCollateral,
  AccountCollateral,
  TotalBacking,
  TotalCollateral,
} from "../../../merlion/maker/v1/maker";
import { Params } from "../../../merlion/maker/v1/genesis";
import { Coin } from "../../../cosmos/base/v1beta1/coin";

export const protobufPackage = "merlion.maker.v1";

export interface QueryAllBackingRiskParamsRequest {}

export interface QueryAllBackingRiskParamsResponse {
  riskParams: BackingRiskParams[];
}

export interface QueryAllCollateralRiskParamsRequest {}

export interface QueryAllCollateralRiskParamsResponse {
  riskParams: CollateralRiskParams[];
}

export interface QueryAllBackingPoolsRequest {}

export interface QueryAllBackingPoolsResponse {
  backingPools: PoolBacking[];
}

export interface QueryAllCollateralPoolsRequest {}

export interface QueryAllCollateralPoolsResponse {
  collateralPools: PoolCollateral[];
}

export interface QueryBackingPoolRequest {
  backingDenom: string;
}

export interface QueryBackingPoolResponse {
  backingPool: PoolBacking | undefined;
}

export interface QueryCollateralPoolRequest {
  collateralDenom: string;
}

export interface QueryCollateralPoolResponse {
  collateralPool: PoolCollateral | undefined;
}

export interface QueryCollateralOfAccountRequest {
  account: string;
  collateralDenom: string;
}

export interface QueryCollateralOfAccountResponse {
  accountCollateral: AccountCollateral | undefined;
}

export interface QueryTotalBackingRequest {}

export interface QueryTotalBackingResponse {
  totalBacking: TotalBacking | undefined;
}

export interface QueryTotalCollateralRequest {}

export interface QueryTotalCollateralResponse {
  totalCollateral: TotalCollateral | undefined;
}

export interface QueryBackingRatioRequest {}

export interface QueryBackingRatioResponse {
  backingRatio: string;
  lastUpdateBlock: number;
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

export interface EstimateMintBySwapInRequest {
  mintOut: Coin | undefined;
  backingDenom: string;
  fullBacking: boolean;
}

export interface EstimateMintBySwapInResponse {
  backingIn: Coin | undefined;
  lionIn: Coin | undefined;
  mintFee: Coin | undefined;
}

export interface EstimateMintBySwapOutRequest {
  backingInMax: Coin | undefined;
  lionInMax: Coin | undefined;
  fullBacking: boolean;
}

export interface EstimateMintBySwapOutResponse {
  backingIn: Coin | undefined;
  lionIn: Coin | undefined;
  mintOut: Coin | undefined;
  mintFee: Coin | undefined;
}

export interface EstimateBurnBySwapInRequest {
  backingOutMax: Coin | undefined;
  lionOutMax: Coin | undefined;
}

export interface EstimateBurnBySwapInResponse {
  burnIn: Coin | undefined;
  backingOut: Coin | undefined;
  lionOut: Coin | undefined;
  burnFee: Coin | undefined;
}

export interface EstimateBurnBySwapOutRequest {
  burnIn: Coin | undefined;
  backingDenom: string;
}

export interface EstimateBurnBySwapOutResponse {
  backingOut: Coin | undefined;
  lionOut: Coin | undefined;
  burnFee: Coin | undefined;
}

export interface EstimateBuyBackingInRequest {
  backingOut: Coin | undefined;
}

export interface EstimateBuyBackingInResponse {
  lionIn: Coin | undefined;
  buybackFee: Coin | undefined;
}

export interface EstimateBuyBackingOutRequest {
  lionIn: Coin | undefined;
  backingDenom: string;
}

export interface EstimateBuyBackingOutResponse {
  backingOut: Coin | undefined;
  buybackFee: Coin | undefined;
}

export interface EstimateSellBackingInRequest {
  lionOut: Coin | undefined;
  backingDenom: string;
}

export interface EstimateSellBackingInResponse {
  backingIn: Coin | undefined;
  sellbackFee: Coin | undefined;
}

export interface EstimateSellBackingOutRequest {
  backingIn: Coin | undefined;
}

export interface EstimateSellBackingOutResponse {
  lionOut: Coin | undefined;
  sellbackFee: Coin | undefined;
}

const baseQueryAllBackingRiskParamsRequest: object = {};

export const QueryAllBackingRiskParamsRequest = {
  encode(
    _: QueryAllBackingRiskParamsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingRiskParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingRiskParamsRequest,
    } as QueryAllBackingRiskParamsRequest;
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

  fromJSON(_: any): QueryAllBackingRiskParamsRequest {
    const message = {
      ...baseQueryAllBackingRiskParamsRequest,
    } as QueryAllBackingRiskParamsRequest;
    return message;
  },

  toJSON(_: QueryAllBackingRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllBackingRiskParamsRequest>
  ): QueryAllBackingRiskParamsRequest {
    const message = {
      ...baseQueryAllBackingRiskParamsRequest,
    } as QueryAllBackingRiskParamsRequest;
    return message;
  },
};

const baseQueryAllBackingRiskParamsResponse: object = {};

export const QueryAllBackingRiskParamsResponse = {
  encode(
    message: QueryAllBackingRiskParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.riskParams) {
      BackingRiskParams.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingRiskParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingRiskParamsResponse,
    } as QueryAllBackingRiskParamsResponse;
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

  fromJSON(object: any): QueryAllBackingRiskParamsResponse {
    const message = {
      ...baseQueryAllBackingRiskParamsResponse,
    } as QueryAllBackingRiskParamsResponse;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(BackingRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllBackingRiskParamsResponse): unknown {
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
    object: DeepPartial<QueryAllBackingRiskParamsResponse>
  ): QueryAllBackingRiskParamsResponse {
    const message = {
      ...baseQueryAllBackingRiskParamsResponse,
    } as QueryAllBackingRiskParamsResponse;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(BackingRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllCollateralRiskParamsRequest: object = {};

export const QueryAllCollateralRiskParamsRequest = {
  encode(
    _: QueryAllCollateralRiskParamsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollateralRiskParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralRiskParamsRequest,
    } as QueryAllCollateralRiskParamsRequest;
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

  fromJSON(_: any): QueryAllCollateralRiskParamsRequest {
    const message = {
      ...baseQueryAllCollateralRiskParamsRequest,
    } as QueryAllCollateralRiskParamsRequest;
    return message;
  },

  toJSON(_: QueryAllCollateralRiskParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllCollateralRiskParamsRequest>
  ): QueryAllCollateralRiskParamsRequest {
    const message = {
      ...baseQueryAllCollateralRiskParamsRequest,
    } as QueryAllCollateralRiskParamsRequest;
    return message;
  },
};

const baseQueryAllCollateralRiskParamsResponse: object = {};

export const QueryAllCollateralRiskParamsResponse = {
  encode(
    message: QueryAllCollateralRiskParamsResponse,
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
  ): QueryAllCollateralRiskParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralRiskParamsResponse,
    } as QueryAllCollateralRiskParamsResponse;
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

  fromJSON(object: any): QueryAllCollateralRiskParamsResponse {
    const message = {
      ...baseQueryAllCollateralRiskParamsResponse,
    } as QueryAllCollateralRiskParamsResponse;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(CollateralRiskParams.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllCollateralRiskParamsResponse): unknown {
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
    object: DeepPartial<QueryAllCollateralRiskParamsResponse>
  ): QueryAllCollateralRiskParamsResponse {
    const message = {
      ...baseQueryAllCollateralRiskParamsResponse,
    } as QueryAllCollateralRiskParamsResponse;
    message.riskParams = [];
    if (object.riskParams !== undefined && object.riskParams !== null) {
      for (const e of object.riskParams) {
        message.riskParams.push(CollateralRiskParams.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllBackingPoolsRequest: object = {};

export const QueryAllBackingPoolsRequest = {
  encode(
    _: QueryAllBackingPoolsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingPoolsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingPoolsRequest,
    } as QueryAllBackingPoolsRequest;
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

  fromJSON(_: any): QueryAllBackingPoolsRequest {
    const message = {
      ...baseQueryAllBackingPoolsRequest,
    } as QueryAllBackingPoolsRequest;
    return message;
  },

  toJSON(_: QueryAllBackingPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllBackingPoolsRequest>
  ): QueryAllBackingPoolsRequest {
    const message = {
      ...baseQueryAllBackingPoolsRequest,
    } as QueryAllBackingPoolsRequest;
    return message;
  },
};

const baseQueryAllBackingPoolsResponse: object = {};

export const QueryAllBackingPoolsResponse = {
  encode(
    message: QueryAllBackingPoolsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.backingPools) {
      PoolBacking.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllBackingPoolsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllBackingPoolsResponse,
    } as QueryAllBackingPoolsResponse;
    message.backingPools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingPools.push(
            PoolBacking.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllBackingPoolsResponse {
    const message = {
      ...baseQueryAllBackingPoolsResponse,
    } as QueryAllBackingPoolsResponse;
    message.backingPools = [];
    if (object.backingPools !== undefined && object.backingPools !== null) {
      for (const e of object.backingPools) {
        message.backingPools.push(PoolBacking.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllBackingPoolsResponse): unknown {
    const obj: any = {};
    if (message.backingPools) {
      obj.backingPools = message.backingPools.map((e) =>
        e ? PoolBacking.toJSON(e) : undefined
      );
    } else {
      obj.backingPools = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllBackingPoolsResponse>
  ): QueryAllBackingPoolsResponse {
    const message = {
      ...baseQueryAllBackingPoolsResponse,
    } as QueryAllBackingPoolsResponse;
    message.backingPools = [];
    if (object.backingPools !== undefined && object.backingPools !== null) {
      for (const e of object.backingPools) {
        message.backingPools.push(PoolBacking.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryAllCollateralPoolsRequest: object = {};

export const QueryAllCollateralPoolsRequest = {
  encode(
    _: QueryAllCollateralPoolsRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollateralPoolsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralPoolsRequest,
    } as QueryAllCollateralPoolsRequest;
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

  fromJSON(_: any): QueryAllCollateralPoolsRequest {
    const message = {
      ...baseQueryAllCollateralPoolsRequest,
    } as QueryAllCollateralPoolsRequest;
    return message;
  },

  toJSON(_: QueryAllCollateralPoolsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAllCollateralPoolsRequest>
  ): QueryAllCollateralPoolsRequest {
    const message = {
      ...baseQueryAllCollateralPoolsRequest,
    } as QueryAllCollateralPoolsRequest;
    return message;
  },
};

const baseQueryAllCollateralPoolsResponse: object = {};

export const QueryAllCollateralPoolsResponse = {
  encode(
    message: QueryAllCollateralPoolsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.collateralPools) {
      PoolCollateral.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAllCollateralPoolsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAllCollateralPoolsResponse,
    } as QueryAllCollateralPoolsResponse;
    message.collateralPools = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralPools.push(
            PoolCollateral.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAllCollateralPoolsResponse {
    const message = {
      ...baseQueryAllCollateralPoolsResponse,
    } as QueryAllCollateralPoolsResponse;
    message.collateralPools = [];
    if (
      object.collateralPools !== undefined &&
      object.collateralPools !== null
    ) {
      for (const e of object.collateralPools) {
        message.collateralPools.push(PoolCollateral.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAllCollateralPoolsResponse): unknown {
    const obj: any = {};
    if (message.collateralPools) {
      obj.collateralPools = message.collateralPools.map((e) =>
        e ? PoolCollateral.toJSON(e) : undefined
      );
    } else {
      obj.collateralPools = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAllCollateralPoolsResponse>
  ): QueryAllCollateralPoolsResponse {
    const message = {
      ...baseQueryAllCollateralPoolsResponse,
    } as QueryAllCollateralPoolsResponse;
    message.collateralPools = [];
    if (
      object.collateralPools !== undefined &&
      object.collateralPools !== null
    ) {
      for (const e of object.collateralPools) {
        message.collateralPools.push(PoolCollateral.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryBackingPoolRequest: object = { backingDenom: "" };

export const QueryBackingPoolRequest = {
  encode(
    message: QueryBackingPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingDenom !== "") {
      writer.uint32(10).string(message.backingDenom);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryBackingPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingPoolRequest,
    } as QueryBackingPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolRequest {
    const message = {
      ...baseQueryBackingPoolRequest,
    } as QueryBackingPoolRequest;
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = String(object.backingDenom);
    } else {
      message.backingDenom = "";
    }
    return message;
  },

  toJSON(message: QueryBackingPoolRequest): unknown {
    const obj: any = {};
    message.backingDenom !== undefined &&
      (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBackingPoolRequest>
  ): QueryBackingPoolRequest {
    const message = {
      ...baseQueryBackingPoolRequest,
    } as QueryBackingPoolRequest;
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = object.backingDenom;
    } else {
      message.backingDenom = "";
    }
    return message;
  },
};

const baseQueryBackingPoolResponse: object = {};

export const QueryBackingPoolResponse = {
  encode(
    message: QueryBackingPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingPool !== undefined) {
      PoolBacking.encode(
        message.backingPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBackingPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingPoolResponse,
    } as QueryBackingPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingPool = PoolBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingPoolResponse {
    const message = {
      ...baseQueryBackingPoolResponse,
    } as QueryBackingPoolResponse;
    if (object.backingPool !== undefined && object.backingPool !== null) {
      message.backingPool = PoolBacking.fromJSON(object.backingPool);
    } else {
      message.backingPool = undefined;
    }
    return message;
  },

  toJSON(message: QueryBackingPoolResponse): unknown {
    const obj: any = {};
    message.backingPool !== undefined &&
      (obj.backingPool = message.backingPool
        ? PoolBacking.toJSON(message.backingPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBackingPoolResponse>
  ): QueryBackingPoolResponse {
    const message = {
      ...baseQueryBackingPoolResponse,
    } as QueryBackingPoolResponse;
    if (object.backingPool !== undefined && object.backingPool !== null) {
      message.backingPool = PoolBacking.fromPartial(object.backingPool);
    } else {
      message.backingPool = undefined;
    }
    return message;
  },
};

const baseQueryCollateralPoolRequest: object = { collateralDenom: "" };

export const QueryCollateralPoolRequest = {
  encode(
    message: QueryCollateralPoolRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collateralDenom !== "") {
      writer.uint32(10).string(message.collateralDenom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralPoolRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralPoolRequest,
    } as QueryCollateralPoolRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralPoolRequest {
    const message = {
      ...baseQueryCollateralPoolRequest,
    } as QueryCollateralPoolRequest;
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    return message;
  },

  toJSON(message: QueryCollateralPoolRequest): unknown {
    const obj: any = {};
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralPoolRequest>
  ): QueryCollateralPoolRequest {
    const message = {
      ...baseQueryCollateralPoolRequest,
    } as QueryCollateralPoolRequest;
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = object.collateralDenom;
    } else {
      message.collateralDenom = "";
    }
    return message;
  },
};

const baseQueryCollateralPoolResponse: object = {};

export const QueryCollateralPoolResponse = {
  encode(
    message: QueryCollateralPoolResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.collateralPool !== undefined) {
      PoolCollateral.encode(
        message.collateralPool,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralPoolResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralPoolResponse,
    } as QueryCollateralPoolResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.collateralPool = PoolCollateral.decode(
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

  fromJSON(object: any): QueryCollateralPoolResponse {
    const message = {
      ...baseQueryCollateralPoolResponse,
    } as QueryCollateralPoolResponse;
    if (object.collateralPool !== undefined && object.collateralPool !== null) {
      message.collateralPool = PoolCollateral.fromJSON(object.collateralPool);
    } else {
      message.collateralPool = undefined;
    }
    return message;
  },

  toJSON(message: QueryCollateralPoolResponse): unknown {
    const obj: any = {};
    message.collateralPool !== undefined &&
      (obj.collateralPool = message.collateralPool
        ? PoolCollateral.toJSON(message.collateralPool)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralPoolResponse>
  ): QueryCollateralPoolResponse {
    const message = {
      ...baseQueryCollateralPoolResponse,
    } as QueryCollateralPoolResponse;
    if (object.collateralPool !== undefined && object.collateralPool !== null) {
      message.collateralPool = PoolCollateral.fromPartial(
        object.collateralPool
      );
    } else {
      message.collateralPool = undefined;
    }
    return message;
  },
};

const baseQueryCollateralOfAccountRequest: object = {
  account: "",
  collateralDenom: "",
};

export const QueryCollateralOfAccountRequest = {
  encode(
    message: QueryCollateralOfAccountRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.account !== "") {
      writer.uint32(10).string(message.account);
    }
    if (message.collateralDenom !== "") {
      writer.uint32(18).string(message.collateralDenom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralOfAccountRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralOfAccountRequest,
    } as QueryCollateralOfAccountRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.account = reader.string();
          break;
        case 2:
          message.collateralDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryCollateralOfAccountRequest {
    const message = {
      ...baseQueryCollateralOfAccountRequest,
    } as QueryCollateralOfAccountRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = String(object.account);
    } else {
      message.account = "";
    }
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = String(object.collateralDenom);
    } else {
      message.collateralDenom = "";
    }
    return message;
  },

  toJSON(message: QueryCollateralOfAccountRequest): unknown {
    const obj: any = {};
    message.account !== undefined && (obj.account = message.account);
    message.collateralDenom !== undefined &&
      (obj.collateralDenom = message.collateralDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralOfAccountRequest>
  ): QueryCollateralOfAccountRequest {
    const message = {
      ...baseQueryCollateralOfAccountRequest,
    } as QueryCollateralOfAccountRequest;
    if (object.account !== undefined && object.account !== null) {
      message.account = object.account;
    } else {
      message.account = "";
    }
    if (
      object.collateralDenom !== undefined &&
      object.collateralDenom !== null
    ) {
      message.collateralDenom = object.collateralDenom;
    } else {
      message.collateralDenom = "";
    }
    return message;
  },
};

const baseQueryCollateralOfAccountResponse: object = {};

export const QueryCollateralOfAccountResponse = {
  encode(
    message: QueryCollateralOfAccountResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.accountCollateral !== undefined) {
      AccountCollateral.encode(
        message.accountCollateral,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryCollateralOfAccountResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryCollateralOfAccountResponse,
    } as QueryCollateralOfAccountResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.accountCollateral = AccountCollateral.decode(
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

  fromJSON(object: any): QueryCollateralOfAccountResponse {
    const message = {
      ...baseQueryCollateralOfAccountResponse,
    } as QueryCollateralOfAccountResponse;
    if (
      object.accountCollateral !== undefined &&
      object.accountCollateral !== null
    ) {
      message.accountCollateral = AccountCollateral.fromJSON(
        object.accountCollateral
      );
    } else {
      message.accountCollateral = undefined;
    }
    return message;
  },

  toJSON(message: QueryCollateralOfAccountResponse): unknown {
    const obj: any = {};
    message.accountCollateral !== undefined &&
      (obj.accountCollateral = message.accountCollateral
        ? AccountCollateral.toJSON(message.accountCollateral)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryCollateralOfAccountResponse>
  ): QueryCollateralOfAccountResponse {
    const message = {
      ...baseQueryCollateralOfAccountResponse,
    } as QueryCollateralOfAccountResponse;
    if (
      object.accountCollateral !== undefined &&
      object.accountCollateral !== null
    ) {
      message.accountCollateral = AccountCollateral.fromPartial(
        object.accountCollateral
      );
    } else {
      message.accountCollateral = undefined;
    }
    return message;
  },
};

const baseQueryTotalBackingRequest: object = {};

export const QueryTotalBackingRequest = {
  encode(
    _: QueryTotalBackingRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalBackingRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalBackingRequest,
    } as QueryTotalBackingRequest;
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

  fromJSON(_: any): QueryTotalBackingRequest {
    const message = {
      ...baseQueryTotalBackingRequest,
    } as QueryTotalBackingRequest;
    return message;
  },

  toJSON(_: QueryTotalBackingRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryTotalBackingRequest>
  ): QueryTotalBackingRequest {
    const message = {
      ...baseQueryTotalBackingRequest,
    } as QueryTotalBackingRequest;
    return message;
  },
};

const baseQueryTotalBackingResponse: object = {};

export const QueryTotalBackingResponse = {
  encode(
    message: QueryTotalBackingResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.totalBacking !== undefined) {
      TotalBacking.encode(
        message.totalBacking,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalBackingResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalBackingResponse,
    } as QueryTotalBackingResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalBacking = TotalBacking.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTotalBackingResponse {
    const message = {
      ...baseQueryTotalBackingResponse,
    } as QueryTotalBackingResponse;
    if (object.totalBacking !== undefined && object.totalBacking !== null) {
      message.totalBacking = TotalBacking.fromJSON(object.totalBacking);
    } else {
      message.totalBacking = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalBackingResponse): unknown {
    const obj: any = {};
    message.totalBacking !== undefined &&
      (obj.totalBacking = message.totalBacking
        ? TotalBacking.toJSON(message.totalBacking)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalBackingResponse>
  ): QueryTotalBackingResponse {
    const message = {
      ...baseQueryTotalBackingResponse,
    } as QueryTotalBackingResponse;
    if (object.totalBacking !== undefined && object.totalBacking !== null) {
      message.totalBacking = TotalBacking.fromPartial(object.totalBacking);
    } else {
      message.totalBacking = undefined;
    }
    return message;
  },
};

const baseQueryTotalCollateralRequest: object = {};

export const QueryTotalCollateralRequest = {
  encode(
    _: QueryTotalCollateralRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalCollateralRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalCollateralRequest,
    } as QueryTotalCollateralRequest;
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

  fromJSON(_: any): QueryTotalCollateralRequest {
    const message = {
      ...baseQueryTotalCollateralRequest,
    } as QueryTotalCollateralRequest;
    return message;
  },

  toJSON(_: QueryTotalCollateralRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryTotalCollateralRequest>
  ): QueryTotalCollateralRequest {
    const message = {
      ...baseQueryTotalCollateralRequest,
    } as QueryTotalCollateralRequest;
    return message;
  },
};

const baseQueryTotalCollateralResponse: object = {};

export const QueryTotalCollateralResponse = {
  encode(
    message: QueryTotalCollateralResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.totalCollateral !== undefined) {
      TotalCollateral.encode(
        message.totalCollateral,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryTotalCollateralResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryTotalCollateralResponse,
    } as QueryTotalCollateralResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.totalCollateral = TotalCollateral.decode(
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

  fromJSON(object: any): QueryTotalCollateralResponse {
    const message = {
      ...baseQueryTotalCollateralResponse,
    } as QueryTotalCollateralResponse;
    if (
      object.totalCollateral !== undefined &&
      object.totalCollateral !== null
    ) {
      message.totalCollateral = TotalCollateral.fromJSON(
        object.totalCollateral
      );
    } else {
      message.totalCollateral = undefined;
    }
    return message;
  },

  toJSON(message: QueryTotalCollateralResponse): unknown {
    const obj: any = {};
    message.totalCollateral !== undefined &&
      (obj.totalCollateral = message.totalCollateral
        ? TotalCollateral.toJSON(message.totalCollateral)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryTotalCollateralResponse>
  ): QueryTotalCollateralResponse {
    const message = {
      ...baseQueryTotalCollateralResponse,
    } as QueryTotalCollateralResponse;
    if (
      object.totalCollateral !== undefined &&
      object.totalCollateral !== null
    ) {
      message.totalCollateral = TotalCollateral.fromPartial(
        object.totalCollateral
      );
    } else {
      message.totalCollateral = undefined;
    }
    return message;
  },
};

const baseQueryBackingRatioRequest: object = {};

export const QueryBackingRatioRequest = {
  encode(
    _: QueryBackingRatioRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBackingRatioRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingRatioRequest,
    } as QueryBackingRatioRequest;
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

  fromJSON(_: any): QueryBackingRatioRequest {
    const message = {
      ...baseQueryBackingRatioRequest,
    } as QueryBackingRatioRequest;
    return message;
  },

  toJSON(_: QueryBackingRatioRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryBackingRatioRequest>
  ): QueryBackingRatioRequest {
    const message = {
      ...baseQueryBackingRatioRequest,
    } as QueryBackingRatioRequest;
    return message;
  },
};

const baseQueryBackingRatioResponse: object = {
  backingRatio: "",
  lastUpdateBlock: 0,
};

export const QueryBackingRatioResponse = {
  encode(
    message: QueryBackingRatioResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingRatio !== "") {
      writer.uint32(10).string(message.backingRatio);
    }
    if (message.lastUpdateBlock !== 0) {
      writer.uint32(16).int64(message.lastUpdateBlock);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryBackingRatioResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryBackingRatioResponse,
    } as QueryBackingRatioResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingRatio = reader.string();
          break;
        case 2:
          message.lastUpdateBlock = longToNumber(reader.int64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryBackingRatioResponse {
    const message = {
      ...baseQueryBackingRatioResponse,
    } as QueryBackingRatioResponse;
    if (object.backingRatio !== undefined && object.backingRatio !== null) {
      message.backingRatio = String(object.backingRatio);
    } else {
      message.backingRatio = "";
    }
    if (
      object.lastUpdateBlock !== undefined &&
      object.lastUpdateBlock !== null
    ) {
      message.lastUpdateBlock = Number(object.lastUpdateBlock);
    } else {
      message.lastUpdateBlock = 0;
    }
    return message;
  },

  toJSON(message: QueryBackingRatioResponse): unknown {
    const obj: any = {};
    message.backingRatio !== undefined &&
      (obj.backingRatio = message.backingRatio);
    message.lastUpdateBlock !== undefined &&
      (obj.lastUpdateBlock = message.lastUpdateBlock);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryBackingRatioResponse>
  ): QueryBackingRatioResponse {
    const message = {
      ...baseQueryBackingRatioResponse,
    } as QueryBackingRatioResponse;
    if (object.backingRatio !== undefined && object.backingRatio !== null) {
      message.backingRatio = object.backingRatio;
    } else {
      message.backingRatio = "";
    }
    if (
      object.lastUpdateBlock !== undefined &&
      object.lastUpdateBlock !== null
    ) {
      message.lastUpdateBlock = object.lastUpdateBlock;
    } else {
      message.lastUpdateBlock = 0;
    }
    return message;
  },
};

const baseQueryParamsRequest: object = {};

export const QueryParamsRequest = {
  encode(_: QueryParamsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
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

  fromJSON(_: any): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },

  toJSON(_: QueryParamsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryParamsRequest>): QueryParamsRequest {
    const message = { ...baseQueryParamsRequest } as QueryParamsRequest;
    return message;
  },
};

const baseQueryParamsResponse: object = {};

export const QueryParamsResponse = {
  encode(
    message: QueryParamsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.params !== undefined) {
      Params.encode(message.params, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryParamsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.params = Params.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromJSON(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },

  toJSON(message: QueryParamsResponse): unknown {
    const obj: any = {};
    message.params !== undefined &&
      (obj.params = message.params ? Params.toJSON(message.params) : undefined);
    return obj;
  },

  fromPartial(object: DeepPartial<QueryParamsResponse>): QueryParamsResponse {
    const message = { ...baseQueryParamsResponse } as QueryParamsResponse;
    if (object.params !== undefined && object.params !== null) {
      message.params = Params.fromPartial(object.params);
    } else {
      message.params = undefined;
    }
    return message;
  },
};

const baseEstimateMintBySwapInRequest: object = {
  backingDenom: "",
  fullBacking: false,
};

export const EstimateMintBySwapInRequest = {
  encode(
    message: EstimateMintBySwapInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.mintOut !== undefined) {
      Coin.encode(message.mintOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    if (message.fullBacking === true) {
      writer.uint32(24).bool(message.fullBacking);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapInRequest,
    } as EstimateMintBySwapInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.mintOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        case 3:
          message.fullBacking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapInRequest {
    const message = {
      ...baseEstimateMintBySwapInRequest,
    } as EstimateMintBySwapInRequest;
    if (object.mintOut !== undefined && object.mintOut !== null) {
      message.mintOut = Coin.fromJSON(object.mintOut);
    } else {
      message.mintOut = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = String(object.backingDenom);
    } else {
      message.backingDenom = "";
    }
    if (object.fullBacking !== undefined && object.fullBacking !== null) {
      message.fullBacking = Boolean(object.fullBacking);
    } else {
      message.fullBacking = false;
    }
    return message;
  },

  toJSON(message: EstimateMintBySwapInRequest): unknown {
    const obj: any = {};
    message.mintOut !== undefined &&
      (obj.mintOut = message.mintOut
        ? Coin.toJSON(message.mintOut)
        : undefined);
    message.backingDenom !== undefined &&
      (obj.backingDenom = message.backingDenom);
    message.fullBacking !== undefined &&
      (obj.fullBacking = message.fullBacking);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateMintBySwapInRequest>
  ): EstimateMintBySwapInRequest {
    const message = {
      ...baseEstimateMintBySwapInRequest,
    } as EstimateMintBySwapInRequest;
    if (object.mintOut !== undefined && object.mintOut !== null) {
      message.mintOut = Coin.fromPartial(object.mintOut);
    } else {
      message.mintOut = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = object.backingDenom;
    } else {
      message.backingDenom = "";
    }
    if (object.fullBacking !== undefined && object.fullBacking !== null) {
      message.fullBacking = object.fullBacking;
    } else {
      message.fullBacking = false;
    }
    return message;
  },
};

const baseEstimateMintBySwapInResponse: object = {};

export const EstimateMintBySwapInResponse = {
  encode(
    message: EstimateMintBySwapInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(18).fork()).ldelim();
    }
    if (message.mintFee !== undefined) {
      Coin.encode(message.mintFee, writer.uint32(26).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapInResponse,
    } as EstimateMintBySwapInResponse;
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
          message.mintFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapInResponse {
    const message = {
      ...baseEstimateMintBySwapInResponse,
    } as EstimateMintBySwapInResponse;
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
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = Coin.fromJSON(object.mintFee);
    } else {
      message.mintFee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateMintBySwapInResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn
        ? Coin.toJSON(message.backingIn)
        : undefined);
    message.lionIn !== undefined &&
      (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.mintFee !== undefined &&
      (obj.mintFee = message.mintFee
        ? Coin.toJSON(message.mintFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateMintBySwapInResponse>
  ): EstimateMintBySwapInResponse {
    const message = {
      ...baseEstimateMintBySwapInResponse,
    } as EstimateMintBySwapInResponse;
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
    if (object.mintFee !== undefined && object.mintFee !== null) {
      message.mintFee = Coin.fromPartial(object.mintFee);
    } else {
      message.mintFee = undefined;
    }
    return message;
  },
};

const baseEstimateMintBySwapOutRequest: object = { fullBacking: false };

export const EstimateMintBySwapOutRequest = {
  encode(
    message: EstimateMintBySwapOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingInMax !== undefined) {
      Coin.encode(message.backingInMax, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionInMax !== undefined) {
      Coin.encode(message.lionInMax, writer.uint32(18).fork()).ldelim();
    }
    if (message.fullBacking === true) {
      writer.uint32(24).bool(message.fullBacking);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapOutRequest,
    } as EstimateMintBySwapOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingInMax = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionInMax = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.fullBacking = reader.bool();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateMintBySwapOutRequest {
    const message = {
      ...baseEstimateMintBySwapOutRequest,
    } as EstimateMintBySwapOutRequest;
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
    if (object.fullBacking !== undefined && object.fullBacking !== null) {
      message.fullBacking = Boolean(object.fullBacking);
    } else {
      message.fullBacking = false;
    }
    return message;
  },

  toJSON(message: EstimateMintBySwapOutRequest): unknown {
    const obj: any = {};
    message.backingInMax !== undefined &&
      (obj.backingInMax = message.backingInMax
        ? Coin.toJSON(message.backingInMax)
        : undefined);
    message.lionInMax !== undefined &&
      (obj.lionInMax = message.lionInMax
        ? Coin.toJSON(message.lionInMax)
        : undefined);
    message.fullBacking !== undefined &&
      (obj.fullBacking = message.fullBacking);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateMintBySwapOutRequest>
  ): EstimateMintBySwapOutRequest {
    const message = {
      ...baseEstimateMintBySwapOutRequest,
    } as EstimateMintBySwapOutRequest;
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
    if (object.fullBacking !== undefined && object.fullBacking !== null) {
      message.fullBacking = object.fullBacking;
    } else {
      message.fullBacking = false;
    }
    return message;
  },
};

const baseEstimateMintBySwapOutResponse: object = {};

export const EstimateMintBySwapOutResponse = {
  encode(
    message: EstimateMintBySwapOutResponse,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateMintBySwapOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateMintBySwapOutResponse,
    } as EstimateMintBySwapOutResponse;
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

  fromJSON(object: any): EstimateMintBySwapOutResponse {
    const message = {
      ...baseEstimateMintBySwapOutResponse,
    } as EstimateMintBySwapOutResponse;
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

  toJSON(message: EstimateMintBySwapOutResponse): unknown {
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
    object: DeepPartial<EstimateMintBySwapOutResponse>
  ): EstimateMintBySwapOutResponse {
    const message = {
      ...baseEstimateMintBySwapOutResponse,
    } as EstimateMintBySwapOutResponse;
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

const baseEstimateBurnBySwapInRequest: object = {};

export const EstimateBurnBySwapInRequest = {
  encode(
    message: EstimateBurnBySwapInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingOutMax !== undefined) {
      Coin.encode(message.backingOutMax, writer.uint32(10).fork()).ldelim();
    }
    if (message.lionOutMax !== undefined) {
      Coin.encode(message.lionOutMax, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapInRequest,
    } as EstimateBurnBySwapInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOutMax = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.lionOutMax = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapInRequest {
    const message = {
      ...baseEstimateBurnBySwapInRequest,
    } as EstimateBurnBySwapInRequest;
    if (object.backingOutMax !== undefined && object.backingOutMax !== null) {
      message.backingOutMax = Coin.fromJSON(object.backingOutMax);
    } else {
      message.backingOutMax = undefined;
    }
    if (object.lionOutMax !== undefined && object.lionOutMax !== null) {
      message.lionOutMax = Coin.fromJSON(object.lionOutMax);
    } else {
      message.lionOutMax = undefined;
    }
    return message;
  },

  toJSON(message: EstimateBurnBySwapInRequest): unknown {
    const obj: any = {};
    message.backingOutMax !== undefined &&
      (obj.backingOutMax = message.backingOutMax
        ? Coin.toJSON(message.backingOutMax)
        : undefined);
    message.lionOutMax !== undefined &&
      (obj.lionOutMax = message.lionOutMax
        ? Coin.toJSON(message.lionOutMax)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBurnBySwapInRequest>
  ): EstimateBurnBySwapInRequest {
    const message = {
      ...baseEstimateBurnBySwapInRequest,
    } as EstimateBurnBySwapInRequest;
    if (object.backingOutMax !== undefined && object.backingOutMax !== null) {
      message.backingOutMax = Coin.fromPartial(object.backingOutMax);
    } else {
      message.backingOutMax = undefined;
    }
    if (object.lionOutMax !== undefined && object.lionOutMax !== null) {
      message.lionOutMax = Coin.fromPartial(object.lionOutMax);
    } else {
      message.lionOutMax = undefined;
    }
    return message;
  },
};

const baseEstimateBurnBySwapInResponse: object = {};

export const EstimateBurnBySwapInResponse = {
  encode(
    message: EstimateBurnBySwapInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.burnIn !== undefined) {
      Coin.encode(message.burnIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(18).fork()).ldelim();
    }
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(26).fork()).ldelim();
    }
    if (message.burnFee !== undefined) {
      Coin.encode(message.burnFee, writer.uint32(34).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapInResponse,
    } as EstimateBurnBySwapInResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        case 3:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        case 4:
          message.burnFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapInResponse {
    const message = {
      ...baseEstimateBurnBySwapInResponse,
    } as EstimateBurnBySwapInResponse;
    if (object.burnIn !== undefined && object.burnIn !== null) {
      message.burnIn = Coin.fromJSON(object.burnIn);
    } else {
      message.burnIn = undefined;
    }
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

  toJSON(message: EstimateBurnBySwapInResponse): unknown {
    const obj: any = {};
    message.burnIn !== undefined &&
      (obj.burnIn = message.burnIn ? Coin.toJSON(message.burnIn) : undefined);
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
    object: DeepPartial<EstimateBurnBySwapInResponse>
  ): EstimateBurnBySwapInResponse {
    const message = {
      ...baseEstimateBurnBySwapInResponse,
    } as EstimateBurnBySwapInResponse;
    if (object.burnIn !== undefined && object.burnIn !== null) {
      message.burnIn = Coin.fromPartial(object.burnIn);
    } else {
      message.burnIn = undefined;
    }
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

const baseEstimateBurnBySwapOutRequest: object = { backingDenom: "" };

export const EstimateBurnBySwapOutRequest = {
  encode(
    message: EstimateBurnBySwapOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.burnIn !== undefined) {
      Coin.encode(message.burnIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapOutRequest,
    } as EstimateBurnBySwapOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.burnIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBurnBySwapOutRequest {
    const message = {
      ...baseEstimateBurnBySwapOutRequest,
    } as EstimateBurnBySwapOutRequest;
    if (object.burnIn !== undefined && object.burnIn !== null) {
      message.burnIn = Coin.fromJSON(object.burnIn);
    } else {
      message.burnIn = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = String(object.backingDenom);
    } else {
      message.backingDenom = "";
    }
    return message;
  },

  toJSON(message: EstimateBurnBySwapOutRequest): unknown {
    const obj: any = {};
    message.burnIn !== undefined &&
      (obj.burnIn = message.burnIn ? Coin.toJSON(message.burnIn) : undefined);
    message.backingDenom !== undefined &&
      (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBurnBySwapOutRequest>
  ): EstimateBurnBySwapOutRequest {
    const message = {
      ...baseEstimateBurnBySwapOutRequest,
    } as EstimateBurnBySwapOutRequest;
    if (object.burnIn !== undefined && object.burnIn !== null) {
      message.burnIn = Coin.fromPartial(object.burnIn);
    } else {
      message.burnIn = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = object.backingDenom;
    } else {
      message.backingDenom = "";
    }
    return message;
  },
};

const baseEstimateBurnBySwapOutResponse: object = {};

export const EstimateBurnBySwapOutResponse = {
  encode(
    message: EstimateBurnBySwapOutResponse,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBurnBySwapOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBurnBySwapOutResponse,
    } as EstimateBurnBySwapOutResponse;
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

  fromJSON(object: any): EstimateBurnBySwapOutResponse {
    const message = {
      ...baseEstimateBurnBySwapOutResponse,
    } as EstimateBurnBySwapOutResponse;
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

  toJSON(message: EstimateBurnBySwapOutResponse): unknown {
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
    object: DeepPartial<EstimateBurnBySwapOutResponse>
  ): EstimateBurnBySwapOutResponse {
    const message = {
      ...baseEstimateBurnBySwapOutResponse,
    } as EstimateBurnBySwapOutResponse;
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

const baseEstimateBuyBackingInRequest: object = {};

export const EstimateBuyBackingInRequest = {
  encode(
    message: EstimateBuyBackingInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingOut !== undefined) {
      Coin.encode(message.backingOut, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingInRequest,
    } as EstimateBuyBackingInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingOut = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingInRequest {
    const message = {
      ...baseEstimateBuyBackingInRequest,
    } as EstimateBuyBackingInRequest;
    if (object.backingOut !== undefined && object.backingOut !== null) {
      message.backingOut = Coin.fromJSON(object.backingOut);
    } else {
      message.backingOut = undefined;
    }
    return message;
  },

  toJSON(message: EstimateBuyBackingInRequest): unknown {
    const obj: any = {};
    message.backingOut !== undefined &&
      (obj.backingOut = message.backingOut
        ? Coin.toJSON(message.backingOut)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBuyBackingInRequest>
  ): EstimateBuyBackingInRequest {
    const message = {
      ...baseEstimateBuyBackingInRequest,
    } as EstimateBuyBackingInRequest;
    if (object.backingOut !== undefined && object.backingOut !== null) {
      message.backingOut = Coin.fromPartial(object.backingOut);
    } else {
      message.backingOut = undefined;
    }
    return message;
  },
};

const baseEstimateBuyBackingInResponse: object = {};

export const EstimateBuyBackingInResponse = {
  encode(
    message: EstimateBuyBackingInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.buybackFee !== undefined) {
      Coin.encode(message.buybackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingInResponse,
    } as EstimateBuyBackingInResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionIn = Coin.decode(reader, reader.uint32());
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

  fromJSON(object: any): EstimateBuyBackingInResponse {
    const message = {
      ...baseEstimateBuyBackingInResponse,
    } as EstimateBuyBackingInResponse;
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromJSON(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.buybackFee !== undefined && object.buybackFee !== null) {
      message.buybackFee = Coin.fromJSON(object.buybackFee);
    } else {
      message.buybackFee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateBuyBackingInResponse): unknown {
    const obj: any = {};
    message.lionIn !== undefined &&
      (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.buybackFee !== undefined &&
      (obj.buybackFee = message.buybackFee
        ? Coin.toJSON(message.buybackFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBuyBackingInResponse>
  ): EstimateBuyBackingInResponse {
    const message = {
      ...baseEstimateBuyBackingInResponse,
    } as EstimateBuyBackingInResponse;
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromPartial(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.buybackFee !== undefined && object.buybackFee !== null) {
      message.buybackFee = Coin.fromPartial(object.buybackFee);
    } else {
      message.buybackFee = undefined;
    }
    return message;
  },
};

const baseEstimateBuyBackingOutRequest: object = { backingDenom: "" };

export const EstimateBuyBackingOutRequest = {
  encode(
    message: EstimateBuyBackingOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lionIn !== undefined) {
      Coin.encode(message.lionIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingOutRequest,
    } as EstimateBuyBackingOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateBuyBackingOutRequest {
    const message = {
      ...baseEstimateBuyBackingOutRequest,
    } as EstimateBuyBackingOutRequest;
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromJSON(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = String(object.backingDenom);
    } else {
      message.backingDenom = "";
    }
    return message;
  },

  toJSON(message: EstimateBuyBackingOutRequest): unknown {
    const obj: any = {};
    message.lionIn !== undefined &&
      (obj.lionIn = message.lionIn ? Coin.toJSON(message.lionIn) : undefined);
    message.backingDenom !== undefined &&
      (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateBuyBackingOutRequest>
  ): EstimateBuyBackingOutRequest {
    const message = {
      ...baseEstimateBuyBackingOutRequest,
    } as EstimateBuyBackingOutRequest;
    if (object.lionIn !== undefined && object.lionIn !== null) {
      message.lionIn = Coin.fromPartial(object.lionIn);
    } else {
      message.lionIn = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = object.backingDenom;
    } else {
      message.backingDenom = "";
    }
    return message;
  },
};

const baseEstimateBuyBackingOutResponse: object = {};

export const EstimateBuyBackingOutResponse = {
  encode(
    message: EstimateBuyBackingOutResponse,
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

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateBuyBackingOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateBuyBackingOutResponse,
    } as EstimateBuyBackingOutResponse;
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

  fromJSON(object: any): EstimateBuyBackingOutResponse {
    const message = {
      ...baseEstimateBuyBackingOutResponse,
    } as EstimateBuyBackingOutResponse;
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

  toJSON(message: EstimateBuyBackingOutResponse): unknown {
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
    object: DeepPartial<EstimateBuyBackingOutResponse>
  ): EstimateBuyBackingOutResponse {
    const message = {
      ...baseEstimateBuyBackingOutResponse,
    } as EstimateBuyBackingOutResponse;
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

const baseEstimateSellBackingInRequest: object = { backingDenom: "" };

export const EstimateSellBackingInRequest = {
  encode(
    message: EstimateSellBackingInRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.backingDenom !== "") {
      writer.uint32(18).string(message.backingDenom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingInRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingInRequest,
    } as EstimateSellBackingInRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.backingDenom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingInRequest {
    const message = {
      ...baseEstimateSellBackingInRequest,
    } as EstimateSellBackingInRequest;
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromJSON(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = String(object.backingDenom);
    } else {
      message.backingDenom = "";
    }
    return message;
  },

  toJSON(message: EstimateSellBackingInRequest): unknown {
    const obj: any = {};
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut
        ? Coin.toJSON(message.lionOut)
        : undefined);
    message.backingDenom !== undefined &&
      (obj.backingDenom = message.backingDenom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingInRequest>
  ): EstimateSellBackingInRequest {
    const message = {
      ...baseEstimateSellBackingInRequest,
    } as EstimateSellBackingInRequest;
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromPartial(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.backingDenom !== undefined && object.backingDenom !== null) {
      message.backingDenom = object.backingDenom;
    } else {
      message.backingDenom = "";
    }
    return message;
  },
};

const baseEstimateSellBackingInResponse: object = {};

export const EstimateSellBackingInResponse = {
  encode(
    message: EstimateSellBackingInResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    if (message.sellbackFee !== undefined) {
      Coin.encode(message.sellbackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingInResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingInResponse,
    } as EstimateSellBackingInResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sellbackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingInResponse {
    const message = {
      ...baseEstimateSellBackingInResponse,
    } as EstimateSellBackingInResponse;
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromJSON(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    if (object.sellbackFee !== undefined && object.sellbackFee !== null) {
      message.sellbackFee = Coin.fromJSON(object.sellbackFee);
    } else {
      message.sellbackFee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateSellBackingInResponse): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn
        ? Coin.toJSON(message.backingIn)
        : undefined);
    message.sellbackFee !== undefined &&
      (obj.sellbackFee = message.sellbackFee
        ? Coin.toJSON(message.sellbackFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingInResponse>
  ): EstimateSellBackingInResponse {
    const message = {
      ...baseEstimateSellBackingInResponse,
    } as EstimateSellBackingInResponse;
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromPartial(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    if (object.sellbackFee !== undefined && object.sellbackFee !== null) {
      message.sellbackFee = Coin.fromPartial(object.sellbackFee);
    } else {
      message.sellbackFee = undefined;
    }
    return message;
  },
};

const baseEstimateSellBackingOutRequest: object = {};

export const EstimateSellBackingOutRequest = {
  encode(
    message: EstimateSellBackingOutRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.backingIn !== undefined) {
      Coin.encode(message.backingIn, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingOutRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingOutRequest,
    } as EstimateSellBackingOutRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.backingIn = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingOutRequest {
    const message = {
      ...baseEstimateSellBackingOutRequest,
    } as EstimateSellBackingOutRequest;
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromJSON(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    return message;
  },

  toJSON(message: EstimateSellBackingOutRequest): unknown {
    const obj: any = {};
    message.backingIn !== undefined &&
      (obj.backingIn = message.backingIn
        ? Coin.toJSON(message.backingIn)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingOutRequest>
  ): EstimateSellBackingOutRequest {
    const message = {
      ...baseEstimateSellBackingOutRequest,
    } as EstimateSellBackingOutRequest;
    if (object.backingIn !== undefined && object.backingIn !== null) {
      message.backingIn = Coin.fromPartial(object.backingIn);
    } else {
      message.backingIn = undefined;
    }
    return message;
  },
};

const baseEstimateSellBackingOutResponse: object = {};

export const EstimateSellBackingOutResponse = {
  encode(
    message: EstimateSellBackingOutResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.lionOut !== undefined) {
      Coin.encode(message.lionOut, writer.uint32(10).fork()).ldelim();
    }
    if (message.sellbackFee !== undefined) {
      Coin.encode(message.sellbackFee, writer.uint32(18).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): EstimateSellBackingOutResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseEstimateSellBackingOutResponse,
    } as EstimateSellBackingOutResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.lionOut = Coin.decode(reader, reader.uint32());
          break;
        case 2:
          message.sellbackFee = Coin.decode(reader, reader.uint32());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): EstimateSellBackingOutResponse {
    const message = {
      ...baseEstimateSellBackingOutResponse,
    } as EstimateSellBackingOutResponse;
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromJSON(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.sellbackFee !== undefined && object.sellbackFee !== null) {
      message.sellbackFee = Coin.fromJSON(object.sellbackFee);
    } else {
      message.sellbackFee = undefined;
    }
    return message;
  },

  toJSON(message: EstimateSellBackingOutResponse): unknown {
    const obj: any = {};
    message.lionOut !== undefined &&
      (obj.lionOut = message.lionOut
        ? Coin.toJSON(message.lionOut)
        : undefined);
    message.sellbackFee !== undefined &&
      (obj.sellbackFee = message.sellbackFee
        ? Coin.toJSON(message.sellbackFee)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<EstimateSellBackingOutResponse>
  ): EstimateSellBackingOutResponse {
    const message = {
      ...baseEstimateSellBackingOutResponse,
    } as EstimateSellBackingOutResponse;
    if (object.lionOut !== undefined && object.lionOut !== null) {
      message.lionOut = Coin.fromPartial(object.lionOut);
    } else {
      message.lionOut = undefined;
    }
    if (object.sellbackFee !== undefined && object.sellbackFee !== null) {
      message.sellbackFee = Coin.fromPartial(object.sellbackFee);
    } else {
      message.sellbackFee = undefined;
    }
    return message;
  },
};

/** Query defines the maker gRPC querier service. */
export interface Query {
  /** AllBackingRiskParams queries risk params of all the backing pools. */
  AllBackingRiskParams(
    request: QueryAllBackingRiskParamsRequest
  ): Promise<QueryAllBackingRiskParamsResponse>;
  /** AllCollateralRiskParams queries risk params of all the collateral pools. */
  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest
  ): Promise<QueryAllCollateralRiskParamsResponse>;
  /** AllBackingPools queries all the backing pools. */
  AllBackingPools(
    request: QueryAllBackingPoolsRequest
  ): Promise<QueryAllBackingPoolsResponse>;
  /** AllCollateralPools queries all the collateral pools. */
  AllCollateralPools(
    request: QueryAllCollateralPoolsRequest
  ): Promise<QueryAllCollateralPoolsResponse>;
  /** BackingPool queries a backing pool. */
  BackingPool(
    request: QueryBackingPoolRequest
  ): Promise<QueryBackingPoolResponse>;
  /** CollateralPool queries a collateral pool. */
  CollateralPool(
    request: QueryCollateralPoolRequest
  ): Promise<QueryCollateralPoolResponse>;
  /** CollateralOfAccount queries the collateral of an account. */
  CollateralOfAccount(
    request: QueryCollateralOfAccountRequest
  ): Promise<QueryCollateralOfAccountResponse>;
  /** TotalBacking queries the total backing. */
  TotalBacking(
    request: QueryTotalBackingRequest
  ): Promise<QueryTotalBackingResponse>;
  /** TotalCollateral queries the total collateral. */
  TotalCollateral(
    request: QueryTotalCollateralRequest
  ): Promise<QueryTotalCollateralResponse>;
  /** BackingRatio queries the backing ratio. */
  BackingRatio(
    request: QueryBackingRatioRequest
  ): Promise<QueryBackingRatioResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
  /** EstimateMintBySwapIn estimates input of minting by swap. */
  EstimateMintBySwapIn(
    request: EstimateMintBySwapInRequest
  ): Promise<EstimateMintBySwapInResponse>;
  /** EstimateMintBySwapOut estimates output of minting by swap. */
  EstimateMintBySwapOut(
    request: EstimateMintBySwapOutRequest
  ): Promise<EstimateMintBySwapOutResponse>;
  /** EstimateBurnBySwapIn estimates input of burning by swap. */
  EstimateBurnBySwapIn(
    request: EstimateBurnBySwapInRequest
  ): Promise<EstimateBurnBySwapInResponse>;
  /** EstimateBurnBySwapOut estimates output of burning by swap. */
  EstimateBurnBySwapOut(
    request: EstimateBurnBySwapOutRequest
  ): Promise<EstimateBurnBySwapOutResponse>;
  /** EstimateBuyBackingIn estimates inpput of buying backing assets. */
  EstimateBuyBackingIn(
    request: EstimateBuyBackingInRequest
  ): Promise<EstimateBuyBackingInResponse>;
  /** EstimateBuyBackingOut estimates output of buying backing assets. */
  EstimateBuyBackingOut(
    request: EstimateBuyBackingOutRequest
  ): Promise<EstimateBuyBackingOutResponse>;
  /** EstimateSellBackingIn estimates input of selling backing assets. */
  EstimateSellBackingIn(
    request: EstimateSellBackingInRequest
  ): Promise<EstimateSellBackingInResponse>;
  /** EstimateSellBackingOut estimates output of selling backing assets. */
  EstimateSellBackingOut(
    request: EstimateSellBackingOutRequest
  ): Promise<EstimateSellBackingOutResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AllBackingRiskParams(
    request: QueryAllBackingRiskParamsRequest
  ): Promise<QueryAllBackingRiskParamsResponse> {
    const data = QueryAllBackingRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "AllBackingRiskParams",
      data
    );
    return promise.then((data) =>
      QueryAllBackingRiskParamsResponse.decode(new Reader(data))
    );
  }

  AllCollateralRiskParams(
    request: QueryAllCollateralRiskParamsRequest
  ): Promise<QueryAllCollateralRiskParamsResponse> {
    const data = QueryAllCollateralRiskParamsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "AllCollateralRiskParams",
      data
    );
    return promise.then((data) =>
      QueryAllCollateralRiskParamsResponse.decode(new Reader(data))
    );
  }

  AllBackingPools(
    request: QueryAllBackingPoolsRequest
  ): Promise<QueryAllBackingPoolsResponse> {
    const data = QueryAllBackingPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "AllBackingPools",
      data
    );
    return promise.then((data) =>
      QueryAllBackingPoolsResponse.decode(new Reader(data))
    );
  }

  AllCollateralPools(
    request: QueryAllCollateralPoolsRequest
  ): Promise<QueryAllCollateralPoolsResponse> {
    const data = QueryAllCollateralPoolsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "AllCollateralPools",
      data
    );
    return promise.then((data) =>
      QueryAllCollateralPoolsResponse.decode(new Reader(data))
    );
  }

  BackingPool(
    request: QueryBackingPoolRequest
  ): Promise<QueryBackingPoolResponse> {
    const data = QueryBackingPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "BackingPool",
      data
    );
    return promise.then((data) =>
      QueryBackingPoolResponse.decode(new Reader(data))
    );
  }

  CollateralPool(
    request: QueryCollateralPoolRequest
  ): Promise<QueryCollateralPoolResponse> {
    const data = QueryCollateralPoolRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "CollateralPool",
      data
    );
    return promise.then((data) =>
      QueryCollateralPoolResponse.decode(new Reader(data))
    );
  }

  CollateralOfAccount(
    request: QueryCollateralOfAccountRequest
  ): Promise<QueryCollateralOfAccountResponse> {
    const data = QueryCollateralOfAccountRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "CollateralOfAccount",
      data
    );
    return promise.then((data) =>
      QueryCollateralOfAccountResponse.decode(new Reader(data))
    );
  }

  TotalBacking(
    request: QueryTotalBackingRequest
  ): Promise<QueryTotalBackingResponse> {
    const data = QueryTotalBackingRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "TotalBacking",
      data
    );
    return promise.then((data) =>
      QueryTotalBackingResponse.decode(new Reader(data))
    );
  }

  TotalCollateral(
    request: QueryTotalCollateralRequest
  ): Promise<QueryTotalCollateralResponse> {
    const data = QueryTotalCollateralRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "TotalCollateral",
      data
    );
    return promise.then((data) =>
      QueryTotalCollateralResponse.decode(new Reader(data))
    );
  }

  BackingRatio(
    request: QueryBackingRatioRequest
  ): Promise<QueryBackingRatioResponse> {
    const data = QueryBackingRatioRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "BackingRatio",
      data
    );
    return promise.then((data) =>
      QueryBackingRatioResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.maker.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
  }

  EstimateMintBySwapIn(
    request: EstimateMintBySwapInRequest
  ): Promise<EstimateMintBySwapInResponse> {
    const data = EstimateMintBySwapInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateMintBySwapIn",
      data
    );
    return promise.then((data) =>
      EstimateMintBySwapInResponse.decode(new Reader(data))
    );
  }

  EstimateMintBySwapOut(
    request: EstimateMintBySwapOutRequest
  ): Promise<EstimateMintBySwapOutResponse> {
    const data = EstimateMintBySwapOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateMintBySwapOut",
      data
    );
    return promise.then((data) =>
      EstimateMintBySwapOutResponse.decode(new Reader(data))
    );
  }

  EstimateBurnBySwapIn(
    request: EstimateBurnBySwapInRequest
  ): Promise<EstimateBurnBySwapInResponse> {
    const data = EstimateBurnBySwapInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateBurnBySwapIn",
      data
    );
    return promise.then((data) =>
      EstimateBurnBySwapInResponse.decode(new Reader(data))
    );
  }

  EstimateBurnBySwapOut(
    request: EstimateBurnBySwapOutRequest
  ): Promise<EstimateBurnBySwapOutResponse> {
    const data = EstimateBurnBySwapOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateBurnBySwapOut",
      data
    );
    return promise.then((data) =>
      EstimateBurnBySwapOutResponse.decode(new Reader(data))
    );
  }

  EstimateBuyBackingIn(
    request: EstimateBuyBackingInRequest
  ): Promise<EstimateBuyBackingInResponse> {
    const data = EstimateBuyBackingInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateBuyBackingIn",
      data
    );
    return promise.then((data) =>
      EstimateBuyBackingInResponse.decode(new Reader(data))
    );
  }

  EstimateBuyBackingOut(
    request: EstimateBuyBackingOutRequest
  ): Promise<EstimateBuyBackingOutResponse> {
    const data = EstimateBuyBackingOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateBuyBackingOut",
      data
    );
    return promise.then((data) =>
      EstimateBuyBackingOutResponse.decode(new Reader(data))
    );
  }

  EstimateSellBackingIn(
    request: EstimateSellBackingInRequest
  ): Promise<EstimateSellBackingInResponse> {
    const data = EstimateSellBackingInRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateSellBackingIn",
      data
    );
    return promise.then((data) =>
      EstimateSellBackingInResponse.decode(new Reader(data))
    );
  }

  EstimateSellBackingOut(
    request: EstimateSellBackingOutRequest
  ): Promise<EstimateSellBackingOutResponse> {
    const data = EstimateSellBackingOutRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.maker.v1.Query",
      "EstimateSellBackingOut",
      data
    );
    return promise.then((data) =>
      EstimateSellBackingOutResponse.decode(new Reader(data))
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
