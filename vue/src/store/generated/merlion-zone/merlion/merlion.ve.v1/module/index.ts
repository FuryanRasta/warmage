// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgCreate } from "./types/merlion/ve/v1/tx";
import { MsgDeposit } from "./types/merlion/ve/v1/tx";
import { MsgMerge } from "./types/merlion/ve/v1/tx";
import { MsgExtendTime } from "./types/merlion/ve/v1/tx";
import { MsgWithdraw } from "./types/merlion/ve/v1/tx";


const types = [
  ["/merlion.ve.v1.MsgCreate", MsgCreate],
  ["/merlion.ve.v1.MsgDeposit", MsgDeposit],
  ["/merlion.ve.v1.MsgMerge", MsgMerge],
  ["/merlion.ve.v1.MsgExtendTime", MsgExtendTime],
  ["/merlion.ve.v1.MsgWithdraw", MsgWithdraw],
  
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
    msgCreate: (data: MsgCreate): EncodeObject => ({ typeUrl: "/merlion.ve.v1.MsgCreate", value: MsgCreate.fromPartial( data ) }),
    msgDeposit: (data: MsgDeposit): EncodeObject => ({ typeUrl: "/merlion.ve.v1.MsgDeposit", value: MsgDeposit.fromPartial( data ) }),
    msgMerge: (data: MsgMerge): EncodeObject => ({ typeUrl: "/merlion.ve.v1.MsgMerge", value: MsgMerge.fromPartial( data ) }),
    msgExtendTime: (data: MsgExtendTime): EncodeObject => ({ typeUrl: "/merlion.ve.v1.MsgExtendTime", value: MsgExtendTime.fromPartial( data ) }),
    msgWithdraw: (data: MsgWithdraw): EncodeObject => ({ typeUrl: "/merlion.ve.v1.MsgWithdraw", value: MsgWithdraw.fromPartial( data ) }),
    
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
