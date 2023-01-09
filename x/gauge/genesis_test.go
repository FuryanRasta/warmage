package gauge_test

import (
	"testing"

	keepertest "github.com/warmage-sports/warmage/testutil/keeper"
	"github.com/warmage-sports/warmage/testutil/nullify"
	"github.com/warmage-sports/warmage/x/gauge"
	"github.com/warmage-sports/warmage/x/gauge/types"
	"github.com/stretchr/testify/require"
)

func TestGenesis(t *testing.T) {
	genesisState := types.GenesisState{
		Params: types.DefaultParams(),

		// this line is used by starport scaffolding # genesis/test/state
	}

	k, ctx := keepertest.GaugeKeeper(t)
	gauge.InitGenesis(ctx, *k, genesisState)
	got := gauge.ExportGenesis(ctx, *k)
	require.NotNil(t, got)

	nullify.Fill(&genesisState)
	nullify.Fill(got)

	// this line is used by starport scaffolding # genesis/test/assert
}
