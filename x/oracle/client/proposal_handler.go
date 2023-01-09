package client

import (
	govclient "github.com/cosmos/cosmos-sdk/x/gov/client"
	"github.com/warmage-sports/warmage/x/oracle/client/cli"
	"github.com/warmage-sports/warmage/x/oracle/client/rest"
)

var (
	RegisterTargetProposalHandler = govclient.NewProposalHandler(cli.NewRegisterTargetProposalCmd, rest.RegisterTargetProposalRESTHandler)
)
