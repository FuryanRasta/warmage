package keeper_test

import (
	"context"
	"testing"

	sdk "github.com/cosmos/cosmos-sdk/types"
	keepertest "github.com/warmage-sports/warmage/testutil/keeper"
	"github.com/warmage-sports/warmage/x/maker/keeper"
	"github.com/warmage-sports/warmage/x/maker/types"
)

func setupMsgServer(t testing.TB) (types.MsgServer, context.Context) {
	k, ctx := keepertest.MakerKeeper(t)
	return keeper.NewMsgServerImpl(*k), sdk.WrapSDKContext(ctx)
}
