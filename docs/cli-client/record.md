# Record

Record module allows you to manage record on MAGE Hub

## Available Commands

| Name                                | Description        |
| ----------------------------------- | ------------------ |
| [create](#mage-tx-record-create)    | Create a record    |
| [record](#mage-query-record-record) | Query record by id |

## mage tx record create

Create a record

```bash
mage tx record create [digest] [digest-algo] [flags]
```

**Flags:**

| Name, shorthand | Type   | Required | Default | Description                                |
| --------------- | ------ | -------- | ------- | ------------------------------------------ |
| --uri           | string |          |         | Source uri of record, such as an ipfs link |
| --meta          | string |          |         | meta data of record                        |

## mage query record record

Query record by id

```bash
mage query record record [record-id]
```
