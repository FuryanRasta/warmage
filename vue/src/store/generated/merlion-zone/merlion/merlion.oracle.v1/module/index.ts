// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgAggregateExchangeRatePrevote } from "./types/merlion/oracle/v1/tx";
import { MsgDelegateFeedConsent } from "./types/merlion/oracle/v1/tx";
import { MsgAggregateExchangeRateVote } from "./types/merlion/oracle/v1/tx";


const types = [
  ["/merlion.oracle.v1.MsgAggregateExchangeRatePrevote", MsgAggregateExchangeRatePrevote],
  ["/merlion.oracle.v1.MsgDelegateFeedConsent", MsgDelegateFeedConsent],
  ["/merlion.oracle.v1.MsgAggregateExchangeRateVote", MsgAggregateExchangeRateVote],
  
];
export const MissingWalletError = new Error("wallet is required");

export const registry = new Registry(<any>types);

const defaultFee = {
  amount: [],
  gas: "200000",
};

interface TxClientOptions {
  addr: string
}

interface SignAndBroadcastOptions {
  fee: StdFee,
  memo?: string
}

const txClient = async (wallet: OfflineSigner, { addr: addr }: TxClientOptions = { addr: "http://localhost:26657" }) => {
  if (!wallet) throw MissingWalletError;
  let client;
  if (addr) {
    client = await SigningStargateClient.connectWithSigner(addr, wallet, { registry });
  }else{
    client = await SigningStargateClient.offline( wallet, { registry });
  }
  const { address } = (await wallet.getAccounts())[0];

  return {
    signAndBroadcast: (msgs: EncodeObject[], { fee, memo }: SignAndBroadcastOptions = {fee: defaultFee, memo: ""}) => client.signAndBroadcast(address, msgs, fee,memo),
    msgAggregateExchangeRatePrevote: (data: MsgAggregateExchangeRatePrevote): EncodeObject => ({ typeUrl: "/merlion.oracle.v1.MsgAggregateExchangeRatePrevote", value: MsgAggregateExchangeRatePrevote.fromPartial( data ) }),
    msgDelegateFeedConsent: (data: MsgDelegateFeedConsent): EncodeObject => ({ typeUrl: "/merlion.oracle.v1.MsgDelegateFeedConsent", value: MsgDelegateFeedConsent.fromPartial( data ) }),
    msgAggregateExchangeRateVote: (data: MsgAggregateExchangeRateVote): EncodeObject => ({ typeUrl: "/merlion.oracle.v1.MsgAggregateExchangeRateVote", value: MsgAggregateExchangeRateVote.fromPartial( data ) }),
    
  };
};

interface QueryClientOptions {
  addr: string
}

const queryClient = async ({ addr: addr }: QueryClientOptions = { addr: "http://localhost:1317" }) => {
  return new Api({ baseUrl: addr });
};

export {
  txClient,
  queryClient,
};
