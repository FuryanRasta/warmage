/* eslint-disable */
import { Reader, util, configure, Writer } from "protobufjs/minimal";
import * as Long from "long";
import { DecCoin } from "../../../cosmos/base/v1beta1/coin";
import {
  AggregateExchangeRatePrevote,
  AggregateExchangeRateVote,
  Params,
} from "../../../merlion/oracle/v1/oracle";

export const protobufPackage = "merlion.oracle.v1";

/**
 * QueryExchangeRateRequest is the request type for the Query/ExchangeRate RPC
 * method.
 */
export interface QueryExchangeRateRequest {
  /** denom defines the denomination to query for. */
  denom: string;
}

/**
 * QueryExchangeRateResponse is response type for the
 * Query/ExchangeRate RPC method.
 */
export interface QueryExchangeRateResponse {
  /**
   * exchange_rate defines the exchange rate of the denom asset denominated in
   * uUSD.
   */
  exchangeRate: string;
}

/**
 * QueryExchangeRatesRequest is the request type for the Query/ExchangeRates RPC
 * method.
 */
export interface QueryExchangeRatesRequest {}

/**
 * QueryExchangeRatesResponse is response type for the
 * Query/ExchangeRates RPC method.
 */
export interface QueryExchangeRatesResponse {
  /**
   * exchange_rates defines a list of the exchange rate for all whitelisted
   * denoms.
   */
  exchangeRates: DecCoin[];
}

/** QueryActivesRequest is the request type for the Query/Actives RPC method. */
export interface QueryActivesRequest {}

/**
 * QueryActivesResponse is response type for the
 * Query/Actives RPC method.
 */
export interface QueryActivesResponse {
  /**
   * actives defines a list of the denomination which oracle prices aggreed
   * upon.
   */
  actives: string[];
}

/**
 * QueryVoteTargetsRequest is the request type for the Query/VoteTargets RPC
 * method.
 */
export interface QueryVoteTargetsRequest {}

/**
 * QueryVoteTargetsResponse is response type for the
 * Query/VoteTargets RPC method.
 */
export interface QueryVoteTargetsResponse {
  /**
   * vote_targets defines a list of the denomination in which everyone
   * should vote in the current vote period.
   */
  voteTargets: string[];
}

/**
 * QueryTargetsRequest is the request type for the Query/Targets RPC
 * method.
 */
export interface QueryTargetsRequest {}

/**
 * QueryTargetsResponse is response type for the
 * Query/Targets RPC method.
 */
export interface QueryTargetsResponse {
  /**
   * targets defines a list of the denomination which will be fed
   * with price quotation (including voting targets).
   */
  targets: string[];
}

/**
 * QueryFeederDelegationRequest is the request type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryFeederDelegationResponse is response type for the
 * Query/FeederDelegation RPC method.
 */
export interface QueryFeederDelegationResponse {
  /** feeder_addr defines the feeder delegation of a validator. */
  feederAddr: string;
}

/**
 * QueryMissCounterRequest is the request type for the Query/MissCounter RPC
 * method.
 */
export interface QueryMissCounterRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryMissCounterResponse is response type for the
 * Query/MissCounter RPC method.
 */
export interface QueryMissCounterResponse {
  /** miss_counter defines the oracle miss counter of a validator. */
  missCounter: number;
}

/**
 * QueryAggregatePrevoteRequest is the request type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryAggregatePrevoteResponse is response type for the
 * Query/AggregatePrevote RPC method.
 */
export interface QueryAggregatePrevoteResponse {
  /**
   * aggregate_prevote defines oracle aggregate prevote submitted by a validator
   * in the current vote period.
   */
  aggregatePrevote: AggregateExchangeRatePrevote | undefined;
}

/**
 * QueryAggregatePrevotesRequest is the request type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesRequest {}

/**
 * QueryAggregatePrevotesResponse is response type for the
 * Query/AggregatePrevotes RPC method.
 */
export interface QueryAggregatePrevotesResponse {
  /**
   * aggregate_prevotes defines all oracle aggregate prevotes submitted in the
   * current vote period.
   */
  aggregatePrevotes: AggregateExchangeRatePrevote[];
}

/**
 * QueryAggregateVoteRequest is the request type for the Query/AggregateVote RPC
 * method.
 */
export interface QueryAggregateVoteRequest {
  /** validator defines the validator address to query for. */
  validatorAddr: string;
}

/**
 * QueryAggregateVoteResponse is response type for the
 * Query/AggregateVote RPC method.
 */
export interface QueryAggregateVoteResponse {
  /**
   * aggregate_vote defines oracle aggregate vote submitted by a validator in
   * the current vote period.
   */
  aggregateVote: AggregateExchangeRateVote | undefined;
}

/**
 * QueryAggregateVotesRequest is the request type for the Query/AggregateVotes
 * RPC method.
 */
export interface QueryAggregateVotesRequest {}

/**
 * QueryAggregateVotesResponse is response type for the
 * Query/AggregateVotes RPC method.
 */
export interface QueryAggregateVotesResponse {
  /**
   * aggregate_votes defines all oracle aggregate votes submitted in the current
   * vote period.
   */
  aggregateVotes: AggregateExchangeRateVote[];
}

/** QueryParamsRequest is request type for the Query/Params RPC method. */
export interface QueryParamsRequest {}

/** QueryParamsResponse is response type for the Query/Params RPC method. */
export interface QueryParamsResponse {
  /** params holds all the parameters of this module. */
  params: Params | undefined;
}

const baseQueryExchangeRateRequest: object = { denom: "" };

export const QueryExchangeRateRequest = {
  encode(
    message: QueryExchangeRateRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.denom !== "") {
      writer.uint32(10).string(message.denom);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRateRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRateRequest,
    } as QueryExchangeRateRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.denom = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRateRequest {
    const message = {
      ...baseQueryExchangeRateRequest,
    } as QueryExchangeRateRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = String(object.denom);
    } else {
      message.denom = "";
    }
    return message;
  },

  toJSON(message: QueryExchangeRateRequest): unknown {
    const obj: any = {};
    message.denom !== undefined && (obj.denom = message.denom);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExchangeRateRequest>
  ): QueryExchangeRateRequest {
    const message = {
      ...baseQueryExchangeRateRequest,
    } as QueryExchangeRateRequest;
    if (object.denom !== undefined && object.denom !== null) {
      message.denom = object.denom;
    } else {
      message.denom = "";
    }
    return message;
  },
};

const baseQueryExchangeRateResponse: object = { exchangeRate: "" };

export const QueryExchangeRateResponse = {
  encode(
    message: QueryExchangeRateResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.exchangeRate !== "") {
      writer.uint32(10).string(message.exchangeRate);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRateResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRateResponse,
    } as QueryExchangeRateResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRateResponse {
    const message = {
      ...baseQueryExchangeRateResponse,
    } as QueryExchangeRateResponse;
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = String(object.exchangeRate);
    } else {
      message.exchangeRate = "";
    }
    return message;
  },

  toJSON(message: QueryExchangeRateResponse): unknown {
    const obj: any = {};
    message.exchangeRate !== undefined &&
      (obj.exchangeRate = message.exchangeRate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExchangeRateResponse>
  ): QueryExchangeRateResponse {
    const message = {
      ...baseQueryExchangeRateResponse,
    } as QueryExchangeRateResponse;
    if (object.exchangeRate !== undefined && object.exchangeRate !== null) {
      message.exchangeRate = object.exchangeRate;
    } else {
      message.exchangeRate = "";
    }
    return message;
  },
};

const baseQueryExchangeRatesRequest: object = {};

export const QueryExchangeRatesRequest = {
  encode(
    _: QueryExchangeRatesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRatesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRatesRequest,
    } as QueryExchangeRatesRequest;
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

  fromJSON(_: any): QueryExchangeRatesRequest {
    const message = {
      ...baseQueryExchangeRatesRequest,
    } as QueryExchangeRatesRequest;
    return message;
  },

  toJSON(_: QueryExchangeRatesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryExchangeRatesRequest>
  ): QueryExchangeRatesRequest {
    const message = {
      ...baseQueryExchangeRatesRequest,
    } as QueryExchangeRatesRequest;
    return message;
  },
};

const baseQueryExchangeRatesResponse: object = {};

export const QueryExchangeRatesResponse = {
  encode(
    message: QueryExchangeRatesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.exchangeRates) {
      DecCoin.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryExchangeRatesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryExchangeRatesResponse,
    } as QueryExchangeRatesResponse;
    message.exchangeRates = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.exchangeRates.push(DecCoin.decode(reader, reader.uint32()));
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryExchangeRatesResponse {
    const message = {
      ...baseQueryExchangeRatesResponse,
    } as QueryExchangeRatesResponse;
    message.exchangeRates = [];
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      for (const e of object.exchangeRates) {
        message.exchangeRates.push(DecCoin.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryExchangeRatesResponse): unknown {
    const obj: any = {};
    if (message.exchangeRates) {
      obj.exchangeRates = message.exchangeRates.map((e) =>
        e ? DecCoin.toJSON(e) : undefined
      );
    } else {
      obj.exchangeRates = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryExchangeRatesResponse>
  ): QueryExchangeRatesResponse {
    const message = {
      ...baseQueryExchangeRatesResponse,
    } as QueryExchangeRatesResponse;
    message.exchangeRates = [];
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      for (const e of object.exchangeRates) {
        message.exchangeRates.push(DecCoin.fromPartial(e));
      }
    }
    return message;
  },
};

const baseQueryActivesRequest: object = {};

export const QueryActivesRequest = {
  encode(_: QueryActivesRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryActivesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
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

  fromJSON(_: any): QueryActivesRequest {
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
    return message;
  },

  toJSON(_: QueryActivesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryActivesRequest>): QueryActivesRequest {
    const message = { ...baseQueryActivesRequest } as QueryActivesRequest;
    return message;
  },
};

const baseQueryActivesResponse: object = { actives: "" };

export const QueryActivesResponse = {
  encode(
    message: QueryActivesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.actives) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryActivesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.actives.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryActivesResponse {
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    if (object.actives !== undefined && object.actives !== null) {
      for (const e of object.actives) {
        message.actives.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryActivesResponse): unknown {
    const obj: any = {};
    if (message.actives) {
      obj.actives = message.actives.map((e) => e);
    } else {
      obj.actives = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryActivesResponse>): QueryActivesResponse {
    const message = { ...baseQueryActivesResponse } as QueryActivesResponse;
    message.actives = [];
    if (object.actives !== undefined && object.actives !== null) {
      for (const e of object.actives) {
        message.actives.push(e);
      }
    }
    return message;
  },
};

const baseQueryVoteTargetsRequest: object = {};

export const QueryVoteTargetsRequest = {
  encode(_: QueryVoteTargetsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryVoteTargetsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteTargetsRequest,
    } as QueryVoteTargetsRequest;
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

  fromJSON(_: any): QueryVoteTargetsRequest {
    const message = {
      ...baseQueryVoteTargetsRequest,
    } as QueryVoteTargetsRequest;
    return message;
  },

  toJSON(_: QueryVoteTargetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryVoteTargetsRequest>
  ): QueryVoteTargetsRequest {
    const message = {
      ...baseQueryVoteTargetsRequest,
    } as QueryVoteTargetsRequest;
    return message;
  },
};

const baseQueryVoteTargetsResponse: object = { voteTargets: "" };

export const QueryVoteTargetsResponse = {
  encode(
    message: QueryVoteTargetsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.voteTargets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryVoteTargetsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryVoteTargetsResponse,
    } as QueryVoteTargetsResponse;
    message.voteTargets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.voteTargets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryVoteTargetsResponse {
    const message = {
      ...baseQueryVoteTargetsResponse,
    } as QueryVoteTargetsResponse;
    message.voteTargets = [];
    if (object.voteTargets !== undefined && object.voteTargets !== null) {
      for (const e of object.voteTargets) {
        message.voteTargets.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryVoteTargetsResponse): unknown {
    const obj: any = {};
    if (message.voteTargets) {
      obj.voteTargets = message.voteTargets.map((e) => e);
    } else {
      obj.voteTargets = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryVoteTargetsResponse>
  ): QueryVoteTargetsResponse {
    const message = {
      ...baseQueryVoteTargetsResponse,
    } as QueryVoteTargetsResponse;
    message.voteTargets = [];
    if (object.voteTargets !== undefined && object.voteTargets !== null) {
      for (const e of object.voteTargets) {
        message.voteTargets.push(e);
      }
    }
    return message;
  },
};

const baseQueryTargetsRequest: object = {};

export const QueryTargetsRequest = {
  encode(_: QueryTargetsRequest, writer: Writer = Writer.create()): Writer {
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTargetsRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTargetsRequest } as QueryTargetsRequest;
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

  fromJSON(_: any): QueryTargetsRequest {
    const message = { ...baseQueryTargetsRequest } as QueryTargetsRequest;
    return message;
  },

  toJSON(_: QueryTargetsRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(_: DeepPartial<QueryTargetsRequest>): QueryTargetsRequest {
    const message = { ...baseQueryTargetsRequest } as QueryTargetsRequest;
    return message;
  },
};

const baseQueryTargetsResponse: object = { targets: "" };

export const QueryTargetsResponse = {
  encode(
    message: QueryTargetsResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.targets) {
      writer.uint32(10).string(v!);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryTargetsResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseQueryTargetsResponse } as QueryTargetsResponse;
    message.targets = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.targets.push(reader.string());
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryTargetsResponse {
    const message = { ...baseQueryTargetsResponse } as QueryTargetsResponse;
    message.targets = [];
    if (object.targets !== undefined && object.targets !== null) {
      for (const e of object.targets) {
        message.targets.push(String(e));
      }
    }
    return message;
  },

  toJSON(message: QueryTargetsResponse): unknown {
    const obj: any = {};
    if (message.targets) {
      obj.targets = message.targets.map((e) => e);
    } else {
      obj.targets = [];
    }
    return obj;
  },

  fromPartial(object: DeepPartial<QueryTargetsResponse>): QueryTargetsResponse {
    const message = { ...baseQueryTargetsResponse } as QueryTargetsResponse;
    message.targets = [];
    if (object.targets !== undefined && object.targets !== null) {
      for (const e of object.targets) {
        message.targets.push(e);
      }
    }
    return message;
  },
};

const baseQueryFeederDelegationRequest: object = { validatorAddr: "" };

export const QueryFeederDelegationRequest = {
  encode(
    message: QueryFeederDelegationRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFeederDelegationRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeederDelegationRequest,
    } as QueryFeederDelegationRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeederDelegationRequest {
    const message = {
      ...baseQueryFeederDelegationRequest,
    } as QueryFeederDelegationRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryFeederDelegationRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeederDelegationRequest>
  ): QueryFeederDelegationRequest {
    const message = {
      ...baseQueryFeederDelegationRequest,
    } as QueryFeederDelegationRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryFeederDelegationResponse: object = { feederAddr: "" };

export const QueryFeederDelegationResponse = {
  encode(
    message: QueryFeederDelegationResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.feederAddr !== "") {
      writer.uint32(10).string(message.feederAddr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryFeederDelegationResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryFeederDelegationResponse,
    } as QueryFeederDelegationResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.feederAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryFeederDelegationResponse {
    const message = {
      ...baseQueryFeederDelegationResponse,
    } as QueryFeederDelegationResponse;
    if (object.feederAddr !== undefined && object.feederAddr !== null) {
      message.feederAddr = String(object.feederAddr);
    } else {
      message.feederAddr = "";
    }
    return message;
  },

  toJSON(message: QueryFeederDelegationResponse): unknown {
    const obj: any = {};
    message.feederAddr !== undefined && (obj.feederAddr = message.feederAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryFeederDelegationResponse>
  ): QueryFeederDelegationResponse {
    const message = {
      ...baseQueryFeederDelegationResponse,
    } as QueryFeederDelegationResponse;
    if (object.feederAddr !== undefined && object.feederAddr !== null) {
      message.feederAddr = object.feederAddr;
    } else {
      message.feederAddr = "";
    }
    return message;
  },
};

const baseQueryMissCounterRequest: object = { validatorAddr: "" };

export const QueryMissCounterRequest = {
  encode(
    message: QueryMissCounterRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): QueryMissCounterRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMissCounterRequest,
    } as QueryMissCounterRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMissCounterRequest {
    const message = {
      ...baseQueryMissCounterRequest,
    } as QueryMissCounterRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryMissCounterRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMissCounterRequest>
  ): QueryMissCounterRequest {
    const message = {
      ...baseQueryMissCounterRequest,
    } as QueryMissCounterRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryMissCounterResponse: object = { missCounter: 0 };

export const QueryMissCounterResponse = {
  encode(
    message: QueryMissCounterResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.missCounter !== 0) {
      writer.uint32(8).uint64(message.missCounter);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryMissCounterResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryMissCounterResponse,
    } as QueryMissCounterResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.missCounter = longToNumber(reader.uint64() as Long);
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryMissCounterResponse {
    const message = {
      ...baseQueryMissCounterResponse,
    } as QueryMissCounterResponse;
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = Number(object.missCounter);
    } else {
      message.missCounter = 0;
    }
    return message;
  },

  toJSON(message: QueryMissCounterResponse): unknown {
    const obj: any = {};
    message.missCounter !== undefined &&
      (obj.missCounter = message.missCounter);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryMissCounterResponse>
  ): QueryMissCounterResponse {
    const message = {
      ...baseQueryMissCounterResponse,
    } as QueryMissCounterResponse;
    if (object.missCounter !== undefined && object.missCounter !== null) {
      message.missCounter = object.missCounter;
    } else {
      message.missCounter = 0;
    }
    return message;
  },
};

const baseQueryAggregatePrevoteRequest: object = { validatorAddr: "" };

export const QueryAggregatePrevoteRequest = {
  encode(
    message: QueryAggregatePrevoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevoteRequest,
    } as QueryAggregatePrevoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevoteRequest {
    const message = {
      ...baseQueryAggregatePrevoteRequest,
    } as QueryAggregatePrevoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevoteRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregatePrevoteRequest>
  ): QueryAggregatePrevoteRequest {
    const message = {
      ...baseQueryAggregatePrevoteRequest,
    } as QueryAggregatePrevoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryAggregatePrevoteResponse: object = {};

export const QueryAggregatePrevoteResponse = {
  encode(
    message: QueryAggregatePrevoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.aggregatePrevote !== undefined) {
      AggregateExchangeRatePrevote.encode(
        message.aggregatePrevote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevoteResponse,
    } as QueryAggregatePrevoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevote = AggregateExchangeRatePrevote.decode(
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

  fromJSON(object: any): QueryAggregatePrevoteResponse {
    const message = {
      ...baseQueryAggregatePrevoteResponse,
    } as QueryAggregatePrevoteResponse;
    if (
      object.aggregatePrevote !== undefined &&
      object.aggregatePrevote !== null
    ) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromJSON(
        object.aggregatePrevote
      );
    } else {
      message.aggregatePrevote = undefined;
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevoteResponse): unknown {
    const obj: any = {};
    message.aggregatePrevote !== undefined &&
      (obj.aggregatePrevote = message.aggregatePrevote
        ? AggregateExchangeRatePrevote.toJSON(message.aggregatePrevote)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregatePrevoteResponse>
  ): QueryAggregatePrevoteResponse {
    const message = {
      ...baseQueryAggregatePrevoteResponse,
    } as QueryAggregatePrevoteResponse;
    if (
      object.aggregatePrevote !== undefined &&
      object.aggregatePrevote !== null
    ) {
      message.aggregatePrevote = AggregateExchangeRatePrevote.fromPartial(
        object.aggregatePrevote
      );
    } else {
      message.aggregatePrevote = undefined;
    }
    return message;
  },
};

const baseQueryAggregatePrevotesRequest: object = {};

export const QueryAggregatePrevotesRequest = {
  encode(
    _: QueryAggregatePrevotesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevotesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevotesRequest,
    } as QueryAggregatePrevotesRequest;
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

  fromJSON(_: any): QueryAggregatePrevotesRequest {
    const message = {
      ...baseQueryAggregatePrevotesRequest,
    } as QueryAggregatePrevotesRequest;
    return message;
  },

  toJSON(_: QueryAggregatePrevotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAggregatePrevotesRequest>
  ): QueryAggregatePrevotesRequest {
    const message = {
      ...baseQueryAggregatePrevotesRequest,
    } as QueryAggregatePrevotesRequest;
    return message;
  },
};

const baseQueryAggregatePrevotesResponse: object = {};

export const QueryAggregatePrevotesResponse = {
  encode(
    message: QueryAggregatePrevotesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.aggregatePrevotes) {
      AggregateExchangeRatePrevote.encode(
        v!,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregatePrevotesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregatePrevotesResponse,
    } as QueryAggregatePrevotesResponse;
    message.aggregatePrevotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregatePrevotes.push(
            AggregateExchangeRatePrevote.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregatePrevotesResponse {
    const message = {
      ...baseQueryAggregatePrevotesResponse,
    } as QueryAggregatePrevotesResponse;
    message.aggregatePrevotes = [];
    if (
      object.aggregatePrevotes !== undefined &&
      object.aggregatePrevotes !== null
    ) {
      for (const e of object.aggregatePrevotes) {
        message.aggregatePrevotes.push(
          AggregateExchangeRatePrevote.fromJSON(e)
        );
      }
    }
    return message;
  },

  toJSON(message: QueryAggregatePrevotesResponse): unknown {
    const obj: any = {};
    if (message.aggregatePrevotes) {
      obj.aggregatePrevotes = message.aggregatePrevotes.map((e) =>
        e ? AggregateExchangeRatePrevote.toJSON(e) : undefined
      );
    } else {
      obj.aggregatePrevotes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregatePrevotesResponse>
  ): QueryAggregatePrevotesResponse {
    const message = {
      ...baseQueryAggregatePrevotesResponse,
    } as QueryAggregatePrevotesResponse;
    message.aggregatePrevotes = [];
    if (
      object.aggregatePrevotes !== undefined &&
      object.aggregatePrevotes !== null
    ) {
      for (const e of object.aggregatePrevotes) {
        message.aggregatePrevotes.push(
          AggregateExchangeRatePrevote.fromPartial(e)
        );
      }
    }
    return message;
  },
};

const baseQueryAggregateVoteRequest: object = { validatorAddr: "" };

export const QueryAggregateVoteRequest = {
  encode(
    message: QueryAggregateVoteRequest,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.validatorAddr !== "") {
      writer.uint32(10).string(message.validatorAddr);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVoteRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVoteRequest,
    } as QueryAggregateVoteRequest;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.validatorAddr = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVoteRequest {
    const message = {
      ...baseQueryAggregateVoteRequest,
    } as QueryAggregateVoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = String(object.validatorAddr);
    } else {
      message.validatorAddr = "";
    }
    return message;
  },

  toJSON(message: QueryAggregateVoteRequest): unknown {
    const obj: any = {};
    message.validatorAddr !== undefined &&
      (obj.validatorAddr = message.validatorAddr);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregateVoteRequest>
  ): QueryAggregateVoteRequest {
    const message = {
      ...baseQueryAggregateVoteRequest,
    } as QueryAggregateVoteRequest;
    if (object.validatorAddr !== undefined && object.validatorAddr !== null) {
      message.validatorAddr = object.validatorAddr;
    } else {
      message.validatorAddr = "";
    }
    return message;
  },
};

const baseQueryAggregateVoteResponse: object = {};

export const QueryAggregateVoteResponse = {
  encode(
    message: QueryAggregateVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.aggregateVote !== undefined) {
      AggregateExchangeRateVote.encode(
        message.aggregateVote,
        writer.uint32(10).fork()
      ).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVoteResponse,
    } as QueryAggregateVoteResponse;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVote = AggregateExchangeRateVote.decode(
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

  fromJSON(object: any): QueryAggregateVoteResponse {
    const message = {
      ...baseQueryAggregateVoteResponse,
    } as QueryAggregateVoteResponse;
    if (object.aggregateVote !== undefined && object.aggregateVote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromJSON(
        object.aggregateVote
      );
    } else {
      message.aggregateVote = undefined;
    }
    return message;
  },

  toJSON(message: QueryAggregateVoteResponse): unknown {
    const obj: any = {};
    message.aggregateVote !== undefined &&
      (obj.aggregateVote = message.aggregateVote
        ? AggregateExchangeRateVote.toJSON(message.aggregateVote)
        : undefined);
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregateVoteResponse>
  ): QueryAggregateVoteResponse {
    const message = {
      ...baseQueryAggregateVoteResponse,
    } as QueryAggregateVoteResponse;
    if (object.aggregateVote !== undefined && object.aggregateVote !== null) {
      message.aggregateVote = AggregateExchangeRateVote.fromPartial(
        object.aggregateVote
      );
    } else {
      message.aggregateVote = undefined;
    }
    return message;
  },
};

const baseQueryAggregateVotesRequest: object = {};

export const QueryAggregateVotesRequest = {
  encode(
    _: QueryAggregateVotesRequest,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVotesRequest {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVotesRequest,
    } as QueryAggregateVotesRequest;
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

  fromJSON(_: any): QueryAggregateVotesRequest {
    const message = {
      ...baseQueryAggregateVotesRequest,
    } as QueryAggregateVotesRequest;
    return message;
  },

  toJSON(_: QueryAggregateVotesRequest): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<QueryAggregateVotesRequest>
  ): QueryAggregateVotesRequest {
    const message = {
      ...baseQueryAggregateVotesRequest,
    } as QueryAggregateVotesRequest;
    return message;
  },
};

const baseQueryAggregateVotesResponse: object = {};

export const QueryAggregateVotesResponse = {
  encode(
    message: QueryAggregateVotesResponse,
    writer: Writer = Writer.create()
  ): Writer {
    for (const v of message.aggregateVotes) {
      AggregateExchangeRateVote.encode(v!, writer.uint32(10).fork()).ldelim();
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): QueryAggregateVotesResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseQueryAggregateVotesResponse,
    } as QueryAggregateVotesResponse;
    message.aggregateVotes = [];
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.aggregateVotes.push(
            AggregateExchangeRateVote.decode(reader, reader.uint32())
          );
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): QueryAggregateVotesResponse {
    const message = {
      ...baseQueryAggregateVotesResponse,
    } as QueryAggregateVotesResponse;
    message.aggregateVotes = [];
    if (object.aggregateVotes !== undefined && object.aggregateVotes !== null) {
      for (const e of object.aggregateVotes) {
        message.aggregateVotes.push(AggregateExchangeRateVote.fromJSON(e));
      }
    }
    return message;
  },

  toJSON(message: QueryAggregateVotesResponse): unknown {
    const obj: any = {};
    if (message.aggregateVotes) {
      obj.aggregateVotes = message.aggregateVotes.map((e) =>
        e ? AggregateExchangeRateVote.toJSON(e) : undefined
      );
    } else {
      obj.aggregateVotes = [];
    }
    return obj;
  },

  fromPartial(
    object: DeepPartial<QueryAggregateVotesResponse>
  ): QueryAggregateVotesResponse {
    const message = {
      ...baseQueryAggregateVotesResponse,
    } as QueryAggregateVotesResponse;
    message.aggregateVotes = [];
    if (object.aggregateVotes !== undefined && object.aggregateVotes !== null) {
      for (const e of object.aggregateVotes) {
        message.aggregateVotes.push(AggregateExchangeRateVote.fromPartial(e));
      }
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

/** Query defines the gRPC querier service. */
export interface Query {
  /** ExchangeRate returns exchange rate of a denom. */
  ExchangeRate(
    request: QueryExchangeRateRequest
  ): Promise<QueryExchangeRateResponse>;
  /** ExchangeRates returns exchange rates of all denoms. */
  ExchangeRates(
    request: QueryExchangeRatesRequest
  ): Promise<QueryExchangeRatesResponse>;
  /** Actives returns all active denoms. */
  Actives(request: QueryActivesRequest): Promise<QueryActivesResponse>;
  /** VoteTargets returns all vote target denoms. */
  VoteTargets(
    request: QueryVoteTargetsRequest
  ): Promise<QueryVoteTargetsResponse>;
  /** Targets returns all target denoms (including vote targets). */
  Targets(request: QueryTargetsRequest): Promise<QueryTargetsResponse>;
  /** FeederDelegation returns feeder delegation of a validator. */
  FeederDelegation(
    request: QueryFeederDelegationRequest
  ): Promise<QueryFeederDelegationResponse>;
  /** MissCounter returns oracle miss counter of a validator. */
  MissCounter(
    request: QueryMissCounterRequest
  ): Promise<QueryMissCounterResponse>;
  /** AggregatePrevote returns an aggregate prevote of a validator. */
  AggregatePrevote(
    request: QueryAggregatePrevoteRequest
  ): Promise<QueryAggregatePrevoteResponse>;
  /** AggregatePrevotes returns aggregate prevotes of all validators. */
  AggregatePrevotes(
    request: QueryAggregatePrevotesRequest
  ): Promise<QueryAggregatePrevotesResponse>;
  /** AggregateVote returns an aggregate vote of a validator. */
  AggregateVote(
    request: QueryAggregateVoteRequest
  ): Promise<QueryAggregateVoteResponse>;
  /** AggregateVotes returns aggregate votes of all validators. */
  AggregateVotes(
    request: QueryAggregateVotesRequest
  ): Promise<QueryAggregateVotesResponse>;
  /** Parameters queries the parameters of the module. */
  Params(request: QueryParamsRequest): Promise<QueryParamsResponse>;
}

export class QueryClientImpl implements Query {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  ExchangeRate(
    request: QueryExchangeRateRequest
  ): Promise<QueryExchangeRateResponse> {
    const data = QueryExchangeRateRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "ExchangeRate",
      data
    );
    return promise.then((data) =>
      QueryExchangeRateResponse.decode(new Reader(data))
    );
  }

  ExchangeRates(
    request: QueryExchangeRatesRequest
  ): Promise<QueryExchangeRatesResponse> {
    const data = QueryExchangeRatesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "ExchangeRates",
      data
    );
    return promise.then((data) =>
      QueryExchangeRatesResponse.decode(new Reader(data))
    );
  }

  Actives(request: QueryActivesRequest): Promise<QueryActivesResponse> {
    const data = QueryActivesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "Actives",
      data
    );
    return promise.then((data) =>
      QueryActivesResponse.decode(new Reader(data))
    );
  }

  VoteTargets(
    request: QueryVoteTargetsRequest
  ): Promise<QueryVoteTargetsResponse> {
    const data = QueryVoteTargetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "VoteTargets",
      data
    );
    return promise.then((data) =>
      QueryVoteTargetsResponse.decode(new Reader(data))
    );
  }

  Targets(request: QueryTargetsRequest): Promise<QueryTargetsResponse> {
    const data = QueryTargetsRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "Targets",
      data
    );
    return promise.then((data) =>
      QueryTargetsResponse.decode(new Reader(data))
    );
  }

  FeederDelegation(
    request: QueryFeederDelegationRequest
  ): Promise<QueryFeederDelegationResponse> {
    const data = QueryFeederDelegationRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "FeederDelegation",
      data
    );
    return promise.then((data) =>
      QueryFeederDelegationResponse.decode(new Reader(data))
    );
  }

  MissCounter(
    request: QueryMissCounterRequest
  ): Promise<QueryMissCounterResponse> {
    const data = QueryMissCounterRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "MissCounter",
      data
    );
    return promise.then((data) =>
      QueryMissCounterResponse.decode(new Reader(data))
    );
  }

  AggregatePrevote(
    request: QueryAggregatePrevoteRequest
  ): Promise<QueryAggregatePrevoteResponse> {
    const data = QueryAggregatePrevoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "AggregatePrevote",
      data
    );
    return promise.then((data) =>
      QueryAggregatePrevoteResponse.decode(new Reader(data))
    );
  }

  AggregatePrevotes(
    request: QueryAggregatePrevotesRequest
  ): Promise<QueryAggregatePrevotesResponse> {
    const data = QueryAggregatePrevotesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "AggregatePrevotes",
      data
    );
    return promise.then((data) =>
      QueryAggregatePrevotesResponse.decode(new Reader(data))
    );
  }

  AggregateVote(
    request: QueryAggregateVoteRequest
  ): Promise<QueryAggregateVoteResponse> {
    const data = QueryAggregateVoteRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "AggregateVote",
      data
    );
    return promise.then((data) =>
      QueryAggregateVoteResponse.decode(new Reader(data))
    );
  }

  AggregateVotes(
    request: QueryAggregateVotesRequest
  ): Promise<QueryAggregateVotesResponse> {
    const data = QueryAggregateVotesRequest.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Query",
      "AggregateVotes",
      data
    );
    return promise.then((data) =>
      QueryAggregateVotesResponse.decode(new Reader(data))
    );
  }

  Params(request: QueryParamsRequest): Promise<QueryParamsResponse> {
    const data = QueryParamsRequest.encode(request).finish();
    const promise = this.rpc.request("merlion.oracle.v1.Query", "Params", data);
    return promise.then((data) => QueryParamsResponse.decode(new Reader(data)));
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
