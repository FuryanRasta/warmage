package types

import (
	"testing"

	warmage "github.com/warmage-sports/warmage/types"
	"github.com/stretchr/testify/require"
)

func TestDefaultParams(t *testing.T) {
	params := DefaultParams()
	require.Equal(t, warmage.BaseDenom, params.LockDenom)
}
