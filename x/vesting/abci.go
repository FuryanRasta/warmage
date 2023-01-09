package vesting

import (
	"time"

	"github.com/cosmos/cosmos-sdk/telemetry"
	sdk "github.com/cosmos/cosmos-sdk/types"
	warmage "github.com/warmage-sports/warmage/types"
	"github.com/warmage-sports/warmage/x/vesting/keeper"
	"github.com/warmage-sports/warmage/x/vesting/types"
)

// EndBlocker is called at the end of every block
func EndBlocker(ctx sdk.Context, k keeper.Keeper) {
	defer telemetry.ModuleMeasureSince(types.ModuleName, time.Now(), telemetry.MetricKeyEndBlocker)

	if warmage.IsPeriodLastBlock(ctx, types.ClaimVestedPeriod) {
		k.ClaimVested(ctx)
	}
}
