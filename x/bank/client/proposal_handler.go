package client

import (
	govclient "github.com/cosmos/cosmos-sdk/x/gov/client"
	"github.com/warmage-sports/warmage/x/bank/client/cli"
	"github.com/warmage-sports/warmage/x/bank/client/rest"
)

var (
	SetDenomMetaDataProposalHandler = govclient.NewProposalHandler(cli.NewSetDenomMetaDataProposalCmd, rest.SetDenomMetadataProposalRESTHandler)
)
