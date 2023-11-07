# Appify

<br>
<br>

## Setup dev database

- create container

```
docker run --name appify-db -e POSTGRES_PASSWORD=password -e POSTGRES_DB=appify -p 5432:5432 -d postgres
```

<br>

- generate prisma migrations

```
yarn nx run server:generate
```

<br>

- migrate prisma

```
yarn prisma migrate dev --schema=apps/server/prisma/schema.prisma
```
