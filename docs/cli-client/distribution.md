# Distribution

The distribution module allows you to manage your [Staking Rewards](../concepts/general-concepts.md#staking-rewards).

## Available Subcommands

| Name                                                                                    | Description                                                                                                                                           |
| --------------------------------------------------------------------------------------- | ----------------------------------------------------------------------------------------------------------------------------------------------------- |
| [commission](#mage-query-distribution-commission)                                       | Query distribution validator commission                                                                                                               |
| [community-pool](#mage-query-distribution-community-pool)                               | Query the amount of coins in the community pool                                                                                                       |
| [params](#mage-query-distribution-params)                                               | Query distribution params                                                                                                                             |
| [rewards](#mage-query-distribution-rewards)                                             | Query all distribution delegator rewards or rewards from a particular validator                                                                       |
| [slashes](#mage-query-distribution-slashes)                                             | Query distribution validator slashes.                                                                                                                 |
| [validator-outstanding-rewards](#mage-query-distribution-validator-outstanding-rewards) | Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations                                                       |
| [fund-community-pool](#mage-tx-distribution-fund-community-pool)                        | Funds the community pool with the specified amount                                                                                                    |
| [set-withdraw-addr](#mage-tx-distribution-set-withdraw-addr)                            | Set the withdraw address for rewards associated with a delegator address                                                                              |
| [withdraw-all-rewards](#mage-tx-distribution-withdraw-all-rewards)                      | Withdraw all rewards for a single delegator                                                                                                           |
| [withdraw-rewards](#mage-tx-distribution-withdraw-rewards)                              | Withdraw rewards from a given delegation address,and optionally withdraw validator commission if the delegation address given is a validator operator |

## mage query distribution commission

Query validator commission rewards from delegators to that validator.

```bash
mage query distribution commission [validator] [flags]
```

## mage query distribution community-pool

Query all coins in the community pool which is under Governance control.

```bash
mage query distribution community-pool [flags]
```

## mage query distribution params

Query distribution params.

```bash
 mage query distribution params [flags]
```

## mage query distribution rewards

Query all rewards earned by a delegator, optionally restrict to rewards from a single validator.

```bash
mage query distribution rewards [delegator-addr] [validator-addr] [flags]
```

## mage query distribution slashes

Query all slashes of a validator for a given block range.

```bash
mage query distribution slashes [validator] [start-height] [end-height] [flags]
```

## mage query distribution validator-outstanding-rewards

Query distribution outstanding (un-withdrawn) rewards for a validator and all their delegations.

```bash
mage query distribution validator-outstanding-rewards [validator] [flags]
```

## mage tx distribution fund-community-pool

Funds the community pool with the specified amount.

```bash
mage tx distribution fund-community-pool [amount] [flags]
```

## mage tx distribution set-withdraw-addr

Set the withdraw address for rewards associated with a delegator address.

```bash
mage tx distribution set-withdraw-addr [withdraw-addr] [flags]
```

## mage tx distribution withdraw-all-rewards

Withdraw all rewards for a single delegator.

```bash
mage tx distribution withdraw-all-rewards [flags]
```

## mage tx distribution withdraw-rewards

Withdraw rewards from a given delegation address, and optionally withdraw validator commission if the delegation address given is a validator operator.

```bash
mage tx distribution withdraw-rewards [validator-addr] [flags]
```
