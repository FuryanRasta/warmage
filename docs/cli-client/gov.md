# Gov

This module provides the basic functionalities for [Governance](../features/governance.md).

## Available Commands

| Name                                            | Description                                                       |
| ----------------------------------------------- | ----------------------------------------------------------------- |
| [proposal](#mage-query-gov-proposal)            | Query details of a single proposal                                |
| [proposals](#mage-query-gov-proposals)          | Query proposals with optional filter                              |
| [vote](#mage-query-gov-vote)                    | Query details of a single vote                                    |
| [votes](#mage-query-gov-votes)                  | Query votes on a proposal                                         |
| [deposit](#mage-query-gov-deposit)              | Query details of a deposit                                        |
| [deposits](#mage-query-gov-deposits)            | Query deposits on a proposal                                      |
| [tally](#mage-query-gov-tally)                  | Get the tally of a proposal vote                                  |
| [param](#mage-query-gov-param)                  | Query the parameters (voting                                      |
| [params](#mage-query-gov-params)                | Query the parameters of the governance process                    |
| [proposer](#mage-query-gov-proposer)            | Query which address proposed a proposal with a given ID.          |
| [submit-proposal](#mage-tx-gov-submit-proposal) | Submit a proposal along with an initial deposit                   |
| [deposit](#mage-tx-gov-deposit)                 | Deposit tokens for an active proposal                             |
| [vote](#mage-tx-gov-vote)                       | Vote for an active proposal, options: yes/no/no_with_veto/abstain |

## mage query gov proposal

Query details of a proposal.

```bash
mage query gov proposal [proposal-id] [flags]
```

### Query a proposal

```bash
mage query gov proposal <proposal-id>
```

## mage query gov proposals

Query proposals with optional filter.

```bash
mage query gov proposals [flags]
```

**Flags:**

| Name, shorthand | Type    | Required | Default | Description                                                         |
| --------------- | ------- | -------- | ------- | ------------------------------------------------------------------- |
| --depositor     | Address |          |         | Filter proposals by depositor address                               |
| --limit         | uint    |          |         | Limit to the latest [number] of proposals. Default to all proposals |
| --status        | string  |          |         | Filter proposals by status                                          |
| --voter         | Address |          |         | Filter proposals by voter address                                   |

### Query all proposals

```bash
mage query gov proposals
```

### Query proposals by conditions

```bash
mage query gov proposals --limit=3 --status=Passed --depositor=<iaa...>
```

## mage query gov vote

Query details of a single vote.

```bash
mage query gov vote [proposal-id] [voter-addr] [flags]
```

### Query a vote

```bash
mage query gov vote <proposal-id> <iaa...>
```

## mage query gov votes

Query votes on a proposal.

```bash
mage query gov votes [proposal-id] [flags]
```

### Query all votes of a proposal

```bash
mage query gov votes <proposal-id>
```

## mage query gov deposit

Query details for a single proposal deposit on a proposal by its identifier.

```bash
mage query gov deposit [proposal-id] [depositer-addr] [flags]
```

### Query a deposit of a proposal

```bash
mage query gov deposit <proposal-id> <iaa...>
```

## mage query gov deposits

Query details for all deposits on a proposal.

```bash
mage query gov deposits [proposal-id] [flags]
```

### Query all deposits of a proposal

```bash
mage query gov deposits <proposal-id>
```

## mage query gov tally

Query tally of votes on a proposal. You can find the proposal-id by running "mage query gov proposals".

```bash
mage query gov tally [proposal-id] [flags]
```

### Query the statistics of a proposal

```bash
mage query gov tally <proposal-id>
```

## mage query gov param

Query the parameters (voting|tallying|deposit) of the governance process.

```bash
mage query gov param [param-type] [flags]
```

Example:

```bash
> mage query gov param voting
> mage query gov param tallying
> mage query gov param deposit
```

## mage query gov params

Query the all the parameters for the governance process.

```bash
mage query gov params [flags]
```

## mage query gov proposer

Query which address proposed a proposal with a given ID.

```bash
mage query gov proposer [proposal-id] [flags]
```

## mage tx gov submit-proposal

Submit a proposal along with an initial deposit. Proposal title, description, type and deposit can be given directly or through a proposal JSON file.
Available Commands:  `community-pool-spend`, `param-change`, `software-upgrade`, `cancel-software-upgrade` .

### mage tx gov submit-proposal community-pool-spend

Submit a community pool spend proposal along with an initial deposit.
The proposal details must be supplied via a JSON file.

```bash
mage tx gov submit-proposal community-pool-spend <path/to/proposal.json> --from=<key_or_address>
```

Where proposal.json contains:

```json
{
    "title": "Community Pool Spend",
    "description": "Pay me some Atoms!",
    "recipient": "iaa1mjk4p68mmulwla3x5uzlgjwsc3zrms448rel3q",
    "amount": "1000umage",
    "deposit": "1000umage"
}
```

### mage tx gov submit-proposal param-change

Submit a parameter proposal along with an initial deposit.
The proposal details must be supplied via a JSON file. For values that contains objects, only non-empty fields will be updated.

IMPORTANT: Currently parameter changes are evaluated but not validated, so it is very important that any "value" change is valid (ie. correct type and within bounds) for its respective parameter, eg. "MaxValidators" should be an integer and not a decimal.

Proper vetting of a parameter change proposal should prevent this from happening (no deposits should occur during the governance process), but it should be noted regardless.

```bash
mage tx gov submit-proposal param-change <path/to/proposal.json> --from=<key_or_address>
```

Where proposal.json contains:

```json
{
    "title": "Staking Param Change",
    "description": "Update max validators",
    "changes": [
        {
        "subspace": "staking",
        "key": "MaxValidators",
        "value": 105
        }
    ],
    "deposit": "1000umage"
}
```

### mage tx gov submit-proposal software-upgrade

Submit a software upgrade along with an initial deposit.
Please specify a unique name and height OR time for the upgrade to take effect.

```bash
mage tx gov submit-proposal software-upgrade [name] (--upgrade-height [height] | --upgrade-time [time]) (--upgrade-info [info]) [flags]
```

**Flags:**

| Name, shorthand  | Type   | Required | Default | Description                                                                               |
| ---------------- | ------ | -------- | ------- | ----------------------------------------------------------------------------------------- |
| --deposit        | Coin   | Yes      |         | Deposit of the proposal                                                                   |
| --title          | string | Yes      |         | Title of proposal                                                                         |
| --description    | string | Yes      |         | Description of proposal                                                                   |
| --upgrade-height | int64  |          |         | The height at which the upgrade must happen (not to be used together with --upgrade-time) |
| --time           | string |          |         | The time at which the upgrade must happen (not to be used together with --upgrade-height) |
| --info           | string |          |         | Optional info for the planned upgrade such as commit hash, etc.                           |

### mage tx gov submit-proposal cancel-software-upgrade

Cancel a software upgrade along with an initial deposit.

```bash
mage tx gov submit-proposal cancel-software-upgrade [flags]
```

**Flags:**

| Name, shorthand | Type   | Required | Default | Description             |
| --------------- | ------ | -------- | ------- | ----------------------- |
| --deposit       | Coin   | Yes      |         | Deposit of the proposal |
| --title         | string | Yes      |         | Title of proposal       |
| --description   | string | Yes      |         | Description of proposal |

## mage tx gov deposit

Submit a deposit for an active proposal. You can find the proposal-id by running "mage query gov proposals".

```bash
mage tx gov deposit [proposal-id] [deposit] [flags]
```

### Deposit for an active proposal

```bash
mage tx gov deposit [proposal-id] [deposit]
```

## mage tx gov vote

Submit a vote for an active proposal. You can find the proposal-id by running "mage query gov proposals".
Vote for an active proposal, options: yes/no/no_with_veto/abstain.

```bash
mage tx gov vote [proposal-id] [option] [flags]
```

### Vote for an active proposal

```bash
mage tx gov vote <proposal-id> <option> --from=<key-name> --fees=0.3mage
```
