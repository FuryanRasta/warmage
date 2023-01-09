/* eslint-disable */
import { Reader, Writer } from "protobufjs/minimal";

export const protobufPackage = "merlion.oracle.v1";

/**
 * MsgAggregateExchangeRatePrevote defines a message to submit
 * aggregate exchange rate prevote.
 */
export interface MsgAggregateExchangeRatePrevote {
  hash: string;
  feeder: string;
  validator: string;
}

/**
 * MsgAggregateExchangeRatePrevoteResponse defines the
 * MsgAggregateExchangeRatePrevote response type.
 */
export interface MsgAggregateExchangeRatePrevoteResponse {}

/**
 * MsgAggregateExchangeRateVote defines a message to submit
 * aggregate exchange rate vote.
 */
export interface MsgAggregateExchangeRateVote {
  salt: string;
  exchangeRates: string;
  feeder: string;
  validator: string;
}

/**
 * MsgAggregateExchangeRateVoteResponse defines the MsgAggregateExchangeRateVote
 * response type.
 */
export interface MsgAggregateExchangeRateVoteResponse {}

/**
 * MsgDelegateFeedConsent defines a message to
 * delegate oracle voting rights to another address.
 */
export interface MsgDelegateFeedConsent {
  operator: string;
  delegate: string;
}

/**
 * MsgDelegateFeedConsentResponse defines the MsgDelegateFeedConsent response
 * type.
 */
export interface MsgDelegateFeedConsentResponse {}

const baseMsgAggregateExchangeRatePrevote: object = {
  hash: "",
  feeder: "",
  validator: "",
};

export const MsgAggregateExchangeRatePrevote = {
  encode(
    message: MsgAggregateExchangeRatePrevote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.hash !== "") {
      writer.uint32(10).string(message.hash);
    }
    if (message.feeder !== "") {
      writer.uint32(18).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(26).string(message.validator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRatePrevote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAggregateExchangeRatePrevote,
    } as MsgAggregateExchangeRatePrevote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.hash = reader.string();
          break;
        case 2:
          message.feeder = reader.string();
          break;
        case 3:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAggregateExchangeRatePrevote {
    const message = {
      ...baseMsgAggregateExchangeRatePrevote,
    } as MsgAggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = String(object.hash);
    } else {
      message.hash = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: MsgAggregateExchangeRatePrevote): unknown {
    const obj: any = {};
    message.hash !== undefined && (obj.hash = message.hash);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAggregateExchangeRatePrevote>
  ): MsgAggregateExchangeRatePrevote {
    const message = {
      ...baseMsgAggregateExchangeRatePrevote,
    } as MsgAggregateExchangeRatePrevote;
    if (object.hash !== undefined && object.hash !== null) {
      message.hash = object.hash;
    } else {
      message.hash = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseMsgAggregateExchangeRatePrevoteResponse: object = {};

export const MsgAggregateExchangeRatePrevoteResponse = {
  encode(
    _: MsgAggregateExchangeRatePrevoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRatePrevoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAggregateExchangeRatePrevoteResponse,
    } as MsgAggregateExchangeRatePrevoteResponse;
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

  fromJSON(_: any): MsgAggregateExchangeRatePrevoteResponse {
    const message = {
      ...baseMsgAggregateExchangeRatePrevoteResponse,
    } as MsgAggregateExchangeRatePrevoteResponse;
    return message;
  },

  toJSON(_: MsgAggregateExchangeRatePrevoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAggregateExchangeRatePrevoteResponse>
  ): MsgAggregateExchangeRatePrevoteResponse {
    const message = {
      ...baseMsgAggregateExchangeRatePrevoteResponse,
    } as MsgAggregateExchangeRatePrevoteResponse;
    return message;
  },
};

const baseMsgAggregateExchangeRateVote: object = {
  salt: "",
  exchangeRates: "",
  feeder: "",
  validator: "",
};

export const MsgAggregateExchangeRateVote = {
  encode(
    message: MsgAggregateExchangeRateVote,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.salt !== "") {
      writer.uint32(10).string(message.salt);
    }
    if (message.exchangeRates !== "") {
      writer.uint32(18).string(message.exchangeRates);
    }
    if (message.feeder !== "") {
      writer.uint32(26).string(message.feeder);
    }
    if (message.validator !== "") {
      writer.uint32(34).string(message.validator);
    }
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRateVote {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAggregateExchangeRateVote,
    } as MsgAggregateExchangeRateVote;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.salt = reader.string();
          break;
        case 2:
          message.exchangeRates = reader.string();
          break;
        case 3:
          message.feeder = reader.string();
          break;
        case 4:
          message.validator = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgAggregateExchangeRateVote {
    const message = {
      ...baseMsgAggregateExchangeRateVote,
    } as MsgAggregateExchangeRateVote;
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = String(object.salt);
    } else {
      message.salt = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = String(object.exchangeRates);
    } else {
      message.exchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = String(object.feeder);
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = String(object.validator);
    } else {
      message.validator = "";
    }
    return message;
  },

  toJSON(message: MsgAggregateExchangeRateVote): unknown {
    const obj: any = {};
    message.salt !== undefined && (obj.salt = message.salt);
    message.exchangeRates !== undefined &&
      (obj.exchangeRates = message.exchangeRates);
    message.feeder !== undefined && (obj.feeder = message.feeder);
    message.validator !== undefined && (obj.validator = message.validator);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgAggregateExchangeRateVote>
  ): MsgAggregateExchangeRateVote {
    const message = {
      ...baseMsgAggregateExchangeRateVote,
    } as MsgAggregateExchangeRateVote;
    if (object.salt !== undefined && object.salt !== null) {
      message.salt = object.salt;
    } else {
      message.salt = "";
    }
    if (object.exchangeRates !== undefined && object.exchangeRates !== null) {
      message.exchangeRates = object.exchangeRates;
    } else {
      message.exchangeRates = "";
    }
    if (object.feeder !== undefined && object.feeder !== null) {
      message.feeder = object.feeder;
    } else {
      message.feeder = "";
    }
    if (object.validator !== undefined && object.validator !== null) {
      message.validator = object.validator;
    } else {
      message.validator = "";
    }
    return message;
  },
};

const baseMsgAggregateExchangeRateVoteResponse: object = {};

export const MsgAggregateExchangeRateVoteResponse = {
  encode(
    _: MsgAggregateExchangeRateVoteResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgAggregateExchangeRateVoteResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgAggregateExchangeRateVoteResponse,
    } as MsgAggregateExchangeRateVoteResponse;
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

  fromJSON(_: any): MsgAggregateExchangeRateVoteResponse {
    const message = {
      ...baseMsgAggregateExchangeRateVoteResponse,
    } as MsgAggregateExchangeRateVoteResponse;
    return message;
  },

  toJSON(_: MsgAggregateExchangeRateVoteResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgAggregateExchangeRateVoteResponse>
  ): MsgAggregateExchangeRateVoteResponse {
    const message = {
      ...baseMsgAggregateExchangeRateVoteResponse,
    } as MsgAggregateExchangeRateVoteResponse;
    return message;
  },
};

const baseMsgDelegateFeedConsent: object = { operator: "", delegate: "" };

export const MsgDelegateFeedConsent = {
  encode(
    message: MsgDelegateFeedConsent,
    writer: Writer = Writer.create()
  ): Writer {
    if (message.operator !== "") {
      writer.uint32(10).string(message.operator);
    }
    if (message.delegate !== "") {
      writer.uint32(18).string(message.delegate);
    }
    return writer;
  },

  decode(input: Reader | Uint8Array, length?: number): MsgDelegateFeedConsent {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    while (reader.pos < end) {
      const tag = reader.uint32();
      switch (tag >>> 3) {
        case 1:
          message.operator = reader.string();
          break;
        case 2:
          message.delegate = reader.string();
          break;
        default:
          reader.skipType(tag & 7);
          break;
      }
    }
    return message;
  },

  fromJSON(object: any): MsgDelegateFeedConsent {
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = String(object.operator);
    } else {
      message.operator = "";
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = String(object.delegate);
    } else {
      message.delegate = "";
    }
    return message;
  },

  toJSON(message: MsgDelegateFeedConsent): unknown {
    const obj: any = {};
    message.operator !== undefined && (obj.operator = message.operator);
    message.delegate !== undefined && (obj.delegate = message.delegate);
    return obj;
  },

  fromPartial(
    object: DeepPartial<MsgDelegateFeedConsent>
  ): MsgDelegateFeedConsent {
    const message = { ...baseMsgDelegateFeedConsent } as MsgDelegateFeedConsent;
    if (object.operator !== undefined && object.operator !== null) {
      message.operator = object.operator;
    } else {
      message.operator = "";
    }
    if (object.delegate !== undefined && object.delegate !== null) {
      message.delegate = object.delegate;
    } else {
      message.delegate = "";
    }
    return message;
  },
};

const baseMsgDelegateFeedConsentResponse: object = {};

export const MsgDelegateFeedConsentResponse = {
  encode(
    _: MsgDelegateFeedConsentResponse,
    writer: Writer = Writer.create()
  ): Writer {
    return writer;
  },

  decode(
    input: Reader | Uint8Array,
    length?: number
  ): MsgDelegateFeedConsentResponse {
    const reader = input instanceof Uint8Array ? new Reader(input) : input;
    let end = length === undefined ? reader.len : reader.pos + length;
    const message = {
      ...baseMsgDelegateFeedConsentResponse,
    } as MsgDelegateFeedConsentResponse;
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

  fromJSON(_: any): MsgDelegateFeedConsentResponse {
    const message = {
      ...baseMsgDelegateFeedConsentResponse,
    } as MsgDelegateFeedConsentResponse;
    return message;
  },

  toJSON(_: MsgDelegateFeedConsentResponse): unknown {
    const obj: any = {};
    return obj;
  },

  fromPartial(
    _: DeepPartial<MsgDelegateFeedConsentResponse>
  ): MsgDelegateFeedConsentResponse {
    const message = {
      ...baseMsgDelegateFeedConsentResponse,
    } as MsgDelegateFeedConsentResponse;
    return message;
  },
};

/** Msg defines the Msg service. */
export interface Msg {
  /** AggregateExchangeRatePrevote submits aggregate exchange rate prevote. */
  AggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote
  ): Promise<MsgAggregateExchangeRatePrevoteResponse>;
  /** AggregateExchangeRateVote submits aggregate exchange rate vote. */
  AggregateExchangeRateVote(
    request: MsgAggregateExchangeRateVote
  ): Promise<MsgAggregateExchangeRateVoteResponse>;
  /** DelegateFeedConsent sets the feeder delegation. */
  DelegateFeedConsent(
    request: MsgDelegateFeedConsent
  ): Promise<MsgDelegateFeedConsentResponse>;
}

export class MsgClientImpl implements Msg {
  private readonly rpc: Rpc;
  constructor(rpc: Rpc) {
    this.rpc = rpc;
  }
  AggregateExchangeRatePrevote(
    request: MsgAggregateExchangeRatePrevote
  ): Promise<MsgAggregateExchangeRatePrevoteResponse> {
    const data = MsgAggregateExchangeRatePrevote.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Msg",
      "AggregateExchangeRatePrevote",
      data
    );
    return promise.then((data) =>
      MsgAggregateExchangeRatePrevoteResponse.decode(new Reader(data))
    );
  }

  AggregateExchangeRateVote(
    request: MsgAggregateExchangeRateVote
  ): Promise<MsgAggregateExchangeRateVoteResponse> {
    const data = MsgAggregateExchangeRateVote.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Msg",
      "AggregateExchangeRateVote",
      data
    );
    return promise.then((data) =>
      MsgAggregateExchangeRateVoteResponse.decode(new Reader(data))
    );
  }

  DelegateFeedConsent(
    request: MsgDelegateFeedConsent
  ): Promise<MsgDelegateFeedConsentResponse> {
    const data = MsgDelegateFeedConsent.encode(request).finish();
    const promise = this.rpc.request(
      "merlion.oracle.v1.Msg",
      "DelegateFeedConsent",
      data
    );
    return promise.then((data) =>
      MsgDelegateFeedConsentResponse.decode(new Reader(data))
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
