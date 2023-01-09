# NFT

`NFT` provides the ability to digitize assets. Through this module, each off-chain asset will be modeled as a unique on-chain nft.

## Available Commands

| Name                                          | Description                                                                                         |
| --------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| [issue](#mage-tx-nft-issue)                   | Specify the nft Denom (nft classification) and metadata JSON Schema to issue nft.                   |
| [transfer-denom](#mage-tx-nft-transfer-denom) | The owner of the NFT classification can transfer the ownership of the NFT classification to others. |
| [mint](#mage-tx-nft-mint)                     | Additional issuance (create) of specific nft of this type can be made.                              |
| [edit](#mage-tx-nft-edit)                     | The metadata of the specified nft can be updated.                                                   |
| [transfer](#mage-tx-nft-transfer)             | Transfer designated nft.                                                                            |
| [burn](#mage-tx-nft-burn)                     | Destroy the created nft.                                                                            |
| [supply](#mage-query-nft-supply)              | Query the total amount of nft according to Denom; accept the optional owner parameter.              |
| [owner](#mage-query-nft-owner)                | Query all nft owned by an account; you can specify the Denom parameter.                             |
| [collection](#mage-query-nft-collection)      | Query all nft according to Denom.                                                                   |
| [denom](#mage-query-nft-denom)                | Query nft denom information based on Denom.                                                         |
| [denoms](#mage-query-nft-denoms)              | Query the total amount of nft according to Denom; accept the optional owner parameter.              |
| [token](#mage-query-nft-token)                | Query specific nft based on Denom and ID.                                                           |

## mage tx nft issue

Specify the nft Denom (nft classification) and metadata JSON Schema to issue nft.

```bash
mage tx nft issue [denom-id] [flags]
```

**Flags:**

| Name, shorthand     | Required | Default                                                                                                                                                                                                                     | Description |
| ------------------- | -------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------- |
| --name              |          | The name of the denom                                                                                                                                                                                                       |             |
| --uri               |          | The uri of the denom                                                                                                                                                                                                        |             |
| --data              |          | Off-chain metadata for supplementation (JSON object)                                                                                                                                                                        |             |
| --schema            |          | Denom data structure definition                                                                                                                                                                                             |             |
| --symbol            |          | The symbol of the denom                                                                                                                                                                                                     |             |
| --mint-restricted   |          | This field indicates whether there are restrictions on the issuance of NFTs under this classification, true means that only Denom owners can issue NFTs under this classification, false means anyone can                   |             |
| --update-restricted |          | This field indicates whether there are restrictions on updating NFTs under this classification, true means that no one under this classification can update the NFT, false means that only the owner of this NFT can update |             |

## mage tx nft transfer-denom

The owner of the NFT classification can transfer the ownership of the NFT classification to others.

```bash
mage tx nft transfer-denom [recipient] [denom-id]
```

## mage tx nft mint

Additional issuance (create) of specific nft of this type can be made.  

```bash
mage tx nft mint [denomID] [tokenID] [flags]
```

**Flags:**

| Name, shorthand | Required | Default                     | Description |
| --------------- | -------- | --------------------------- | ----------- |
| --uri           |          | URI of off-chain token data |             |
| --recipient     |          | Receiver of the nft         |             |
| --name          |          | The name of nft             |             |

## mage tx nft edit

The metadata of the specified nft can be updated.

```bash
mage tx nft edit [denomID] [tokenID] [flags]
```

**Flags:**

| Name, shorthand | Required | Default                     | Description |
| --------------- | -------- | --------------------------- | ----------- |
| --uri           |          | URI of off-chain token data |             |
| --name          |          | The name of nft             |             |

## mage tx nft transfer

Transfer designated nft.

```bash
mage tx nft transfer [recipient] [denomID] [tokenID] [flags]
```

**Flags:**

| Name, shorthand | Required | Default                     | Description |
| --------------- | -------- | --------------------------- | ----------- |
| --uri           |          | URI of off-chain token data |             |
| --name          |          | The name of nft             |             |

## mage tx nft burn

Destroy the created nft.

```bash
mage tx nft burn [denomID] [tokenID] [flags]
```

## mage query nft

Query nft

### mage query nft supply

```bash
mage query nft supply [denomID]
mage query nft supply [denomID] --owner=<owner address>
```

### mage query nft owner

```bash
mage query nft owner [owner address]
mage query nft owner [owner address] --denom=<denomID>
```

### mage query nft collection

```bash
mage query nft collection [denomID]
```

### mage query nft denom

```bash
mage query nft denom [denomID]
```

### mage query nft denoms

```bash
mage query nft denoms
```

### mage query nft token

```bash
mage query nft token [denomID] [tokenID]
```
