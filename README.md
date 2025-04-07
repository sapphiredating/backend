# Technical documentation

This is a node.js project is built using npm.

## Deployment

> [!NOTE]\
> **typescript**\
> This project is written in typescript, so it needs to be compiled to javascript before deployment. The `tsconfig.json` we have is set up to compile to `dist/` so that's where the compiled code will be. Notice that in `package.json` the `start` script is `node dist/index.js` accordingly. Use

The main server file resides at `./app.ts`.

## Database

The schema is in `./prisma/schema.prisma`. To update the database, run `npx prisma migrate dev --name <name of the migration>`. This will create a new migration in `./prisma/migrations/` and apply it to the database. To update the prisma client (necessary for typescript to know about the new schema), run `npx prisma generate`. \
You'll need to set the `DATABASE_URL` environment variable to the connection string for the database. Make sure not to commit the connection string to git.
