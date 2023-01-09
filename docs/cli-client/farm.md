# Farm

Farm module allows you to easily create farm activities on warmage.

## Available Commands

| Name                              | Description                                           |
| --------------------------------- | ----------------------------------------------------- |
| [create](#mage-tx-farm-create)    | Create a new farm pool                                |
| [adjust](#mage-tx-farm-adjust)    | Adjust farm pool parameters                           |
| [destroy](#mage-tx-farm-destroy)  | Destroy the farm pool and get back the invested bonus |
| [stake](#mage-tx-farm-stake)      | Deposit liquidity token                               |
| [harvest](#mage-tx-farm-harvest)  | Get back the bonus for participating in the farm pool |
| [farmer](#mage-query-farm-farmer) | Query farmer information                              |
| [pool](#mage-query-farm-pool)     | Query the current status of a farm pool               |
| [pools](#mage-query-farm-pools)   | Query farm pool information by page                   |
| [params](#mage-query-farm-params) | Query the management parameters of the farm module    |

## mage tx farm create

Create a new farm pool and pay the handling fee and bonus.

```bash
mage tx farm create <Farm Pool Name> [flags]
```

**Flags:**

| Name, shorthand    | Required | Default | Description                                              |
| ------------------ | -------- | ------- | -------------------------------------------------------- |
| --lp-token-denom   | true     |         | The liquidity token accepted by farm pool                |
| --reward-per-block | true     |         | The reward per block,ex: 1mage,1atom                     |
| --total-reward     | true     |         | The Total reward for the farm pool                       |
| --description      | false    | ""      | The simple description of a farm pool                    |
| --start-height     | true     |         | The start height the farm pool                           |
| --editable         | false    | false   | Is it possible to adjust the parameters of the farm pool |

### mage tx farm adjust

Adjust the parameters of the pool before the farm pool ends, such as `reward-per-block`, `total-reward`.

```bash
mage tx farm adjust <Farm Pool Name> [flags]
```

**Flags:**

| Name, shorthand     | Required                                  | Default | Description                          |
| ------------------- | ----------------------------------------- | ------- | ------------------------------------ |
| --additional-reward | And `--reward-per-block` must choose one  | ""      | Bonuses added to the farm pool       |
| --reward-per-block  | And `--additional-reward` must choose one | ""      | The reward per block,ex: 1mage,1atom |

## mage tx farm destroy

Destroy the farm pool and get back the invested bonus.The rewards earned by the user farm ends at this moment, requiring the user to manually retrieve the income and the liquidity of the deposit.

```bash
mage tx farm destroy <Farm Pool Name> [flags]
```

### mage tx farm stake

The farmer participates in farm activities by staking the liquidity tokens specified by the pool. The rewards obtained by participating in the activities are related to the number of staking tokens and farm pool parameters.

```bash
mage tx farm stake <Farm Pool Name> <lp token> [flags]
```

### mage tx farm harvest

The farmer withdraws his rewards back.

```bash
mage tx farm harvest <Farm Pool Name>
```

### mage query farm farmer

Query farmer's information, including unclaimed rewards, mortgage liquidity, etc.

```bash
mage query farm farmer <Farmer Address> --pool-name <Farm Pool Name>
```

**Flags:**

| Name, shorthand | Required | Default | Description        |
| --------------- | -------- | ------- | ------------------ |
| --pool-name     | false    | ""      | the farm pool name |

### mage query farm pool

Query related information of a farm pool by name

```bash
mage query farm pool <Farm Pool Name>
```

### mage query farm pools

Paging query farm pool

```bash
mage query farm pools
```

### mage query farm params

Paging query farm pool

```bash
mage query farm params
```
