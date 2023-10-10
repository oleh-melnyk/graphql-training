# NestJS Server

GraphQL Server based on NestJS.

Code first approach.


## Requirements
- [NodeJS](https://nodejs.org/en) <= v18
- [NPM](https://www.npmjs.com/) or [Yarn](https://classic.yarnpkg.com/en/)
- [Postgres](https://www.postgresql.org/)

Postgres setup could be done by up & running `docker-compose.yml` or by local configuration
```
$ brew update
$ brew doctor
$ brew install postgresql@14
$ brew services start postgresql@14

$ createuser root -s -W
// password: "admin"
$ createdb nest-gql-db

// Verify db connection
$ psql -d nest-gql-db -U root -W

// Stop postgres
$ brew services stop postgresql@14
```


## Technology stack
- Programming language - [Typescript](https://www.typescriptlang.org/)
- Framework - [NestJS](https://docs.nestjs.com/)
- Database - [Postgres](https://www.postgresql.org/)
- Database ORM - [TypeORM](https://typeorm.io/)


## Commands
- `$ yarn build` - Build sources
- `$ yarn start` - Start w/o watch mode
- `$ yarn start:local` - Start w/ watch mode
- `$ yarn start:debug` - Start in debug mode
- `$ yarn start:prod` - Start in production mode
- `$ yarn lint` - Linting TS files
- `$ yarn format` - Formatting TS files


## GraphQL Playground
- http://localhost:3001/graphql


## Info
- https://orkhan.gitbook.io/typeorm/docs/find-options
- https://www.apollographql.com/docs/apollo-server/security/cors/
- https://doug-martin.github.io/nestjs-query/docs/introduction/getting-started
