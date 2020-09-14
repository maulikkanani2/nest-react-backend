## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## migration 
npx typeorm migration:create -n ProductsTable -d src/migrations

## seeding URL
note : Run this URL in browser after completed migration
http://localhost:5000/product/5


