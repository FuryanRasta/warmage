// THIS FILE IS GENERATED AUTOMATICALLY. DO NOT MODIFY.

import { StdFee } from "@cosmjs/launchpad";
import { SigningStargateClient } from "@cosmjs/stargate";
import { Registry, OfflineSigner, EncodeObject, DirectSecp256k1HdWallet } from "@cosmjs/proto-signing";
import { Api } from "./rest";
import { MsgBurnBySwap } from "./types/merlion/maker/v1/tx";
import { MsgSellBacking } from "./types/merlion/maker/v1/tx";
import { MsgBuyBacking } from "./types/merlion/maker/v1/tx";
import { MsgMintByCollateral } from "./types/merlion/maker/v1/tx";
import { MsgRedeemCollateral } from "./types/merlion/maker/v1/tx";
import { MsgMintBySwap } from "./types/merlion/maker/v1/tx";
import { MsgBurnByCollateral } from "./types/merlion/maker/v1/tx";
import { MsgDepositCollateral } from "./types/merlion/maker/v1/tx";
import { MsgLiquidateCollateral } from "./types/merlion/maker/v1/tx";


const types = [
  ["/merlion.maker.v1.MsgBurnBySwap", MsgBurnBySwap],
  ["/merlion.maker.v1.MsgSellBacking", MsgSellBacking],
  ["/merlion.maker.v1.MsgBuyBacking", MsgBuyBacking],
  ["/merlion.maker.v1.MsgMintByCollateral", MsgMintByCollateral],
  ["/merlion.maker.v1.MsgRedeemCollateral", MsgRedeemCollateral],
  ["/merlion.maker.v1.MsgMintBySwap", MsgMintBySwap],
  ["/merlion.maker.v1.MsgBurnByCollateral", MsgBurnByCollateral],
  ["/merlion.maker.v1.MsgDepositCollateral", MsgDepositCollateral],
  ["/merlion.maker.v1.MsgLiquidateCollateral", MsgLiquidateCollateral],
  
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
    msgBurnBySwap: (data: MsgBurnBySwap): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgBurnBySwap", value: MsgBurnBySwap.fromPartial( data ) }),
    msgSellBacking: (data: MsgSellBacking): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgSellBacking", value: MsgSellBacking.fromPartial( data ) }),
    msgBuyBacking: (data: MsgBuyBacking): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgBuyBacking", value: MsgBuyBacking.fromPartial( data ) }),
    msgMintByCollateral: (data: MsgMintByCollateral): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgMintByCollateral", value: MsgMintByCollateral.fromPartial( data ) }),
    msgRedeemCollateral: (data: MsgRedeemCollateral): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgRedeemCollateral", value: MsgRedeemCollateral.fromPartial( data ) }),
    msgMintBySwap: (data: MsgMintBySwap): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgMintBySwap", value: MsgMintBySwap.fromPartial( data ) }),
    msgBurnByCollateral: (data: MsgBurnByCollateral): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgBurnByCollateral", value: MsgBurnByCollateral.fromPartial( data ) }),
    msgDepositCollateral: (data: MsgDepositCollateral): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgDepositCollateral", value: MsgDepositCollateral.fromPartial( data ) }),
    msgLiquidateCollateral: (data: MsgLiquidateCollateral): EncodeObject => ({ typeUrl: "/merlion.maker.v1.MsgLiquidateCollateral", value: MsgLiquidateCollateral.fromPartial( data ) }),
    
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
