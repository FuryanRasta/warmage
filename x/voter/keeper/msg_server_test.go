package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/warmage-sports/warmage/testutil/keeper"
	"github.com/warmage-sports/warmage/x/voter/keeper"
	"github.com/warmage-sports/warmage/x/voter/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.VoterKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
