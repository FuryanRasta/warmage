package keeper_test

import (
	"testing"

	testkeeper "github.com/warmage-sports/warmage/testutil/keeper"
	"github.com/warmage-sports/warmage/x/gauge/types"
	"github.com/stretchr/testify/require"
)

func TestGetParams(t *testing.T) {
	k, ctx := testkeeper.GaugeKeeper(t)
	params := types.DefaultParams()

	k.SetParams(ctx, params)

	require.EqualValues(t, params, k.GetParams(ctx))
}
