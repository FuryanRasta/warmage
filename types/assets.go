package types

import (
	"strings"

	sdk "github.com/cosmos/cosmos-sdk/types"
	bankkeeper "github.com/cosmos/cosmos-sdk/x/bank/keeper"
	banktypes "github.com/cosmos/cosmos-sdk/x/bank/types"
)

// nolint
const (
	// DisplayDenom defines the denomination displayed to users in client applications.
	DisplayDenom = "mage"
	// BaseDenom defines to the default denomination used in Warmage (staking, EVM, governance, etc.)
	BaseDenom = AttoMageDenom

	AttoMageDenom = "amage" // 1e-18
	MicroUSFDenom = "uusf"  // 1e-6
)

var (
	// MicroUSFTarget defines the target exchange rate of uusf denominated in uUSD.
	MicroUSFTarget = sdk.OneDec()
)

func SetDenomMetaDataForStableCoins(ctx sdk.Context, k bankkeeper.Keeper) {
	for _, base := range []string{MicroUSFDenom} {
		if _, ok := k.GetDenomMetaData(ctx, base); ok {
			continue
		}

		display := base[1:] // e.g., usf
		// Register meta data to bank module
		k.SetDenomMetaData(ctx, banktypes.Metadata{
			Description: "The native stable token of the Warmage.",
			DenomUnits: []*banktypes.DenomUnit{
				{Denom: "u" + display, Exponent: uint32(0), Aliases: []string{"micro" + display}}, // e.g., uusf
				{Denom: "m" + display, Exponent: uint32(3), Aliases: []string{"milli" + display}}, // e.g., musm
				{Denom: display, Exponent: uint32(6), Aliases: []string{}},                        // e.g., usf
			},
			Base:    base,
			Display: display,
			Name:    strings.ToUpper(display), // e.g., USF
			Symbol:  strings.ToUpper(display), // e.g., USF
		})
	}
}
