# Slashing

Slashing module can unjail validator previously jailed for downtime

## Available Commands

| Name                                                | Description                                     |
| --------------------------------------------------- | ----------------------------------------------- |
| [unjail](#mage-tx-slashing-unjail)                  | Unjail validator previously jailed for downtime |
| [params](#mage-query-slashing-params)               | Query the current slashing parameters           |
| [signing-info](#mage-query-slashing-signing-info)   | Query a validator's signing information         |
| [signing-infos](#mage-query-slashing-signing-infos) | Query signing information of all validators     |

## mage tx slashing unjail

Unjail validator previously jailed for downtime.

```bash
mage tx slashing unjail [flags]
```

## mage query slashing params

Query the current slashing parameters.

```bash
mage query slashing params  [flags]
```

## mage query slashing signing-info

Query a validator's signing information.

```bash
mage query slashing signing-info [validator-conspub] [flags]
```

## mage query slashing signing-infos

Query signing information of all validators.

```bash
mage query slashing signing-infos [flags]
```
