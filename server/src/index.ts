
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express'
import { context } from './context'
import express from 'express';
import 'reflect-metadata';
import { buildSchema, Query, Resolver } from 'type-graphql'
import User from './entities/user';
import UserResolver from './resolvers/userResolver';







const prisma = new PrismaClient();

const main = async () => {
  const schema = await buildSchema({
    resolvers: [UserResolver]
  })
  const apolloServer = new ApolloServer({ schema });
  const app = express();
  apolloServer.applyMiddleware({ app });
  app.listen(4000, () => {
    console.log(`\
    ⭐️ Server running at: http://localhost:4000/graphql
    `);
  });
}

main().catch(e => {
  throw e
})
  .finally(async () => {
    await prisma.$disconnect()
  });
