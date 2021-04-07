
import { PrismaClient } from '@prisma/client';
import { ApolloServer } from 'apollo-server-express'
import { context } from './context'
import express from 'express';
import 'reflect-metadata';
import { buildSchema, Field, ID, ObjectType, Query, Resolver } from 'type-graphql'

@Resolver()
class getAllUsers {
  @Query(() => [User])
  async getAllUsers() {
    return (await context.prisma.user.findMany({ include: { children: true } }));
  }
}

@ObjectType()
class User {
  @Field(type => ID)
  id!: number;
  @Field()
  createdAt!: string;
  @Field()
  updatedAt!: string;
  @Field()
  email!: string;
  @Field()
  name!: string;
  @Field(type => [Child], { nullable: true })
  children!: [Child]
}

@ObjectType()
class Child {
  @Field(type => ID)
  id!: number;
  @Field()
  createdAt!: string;
  @Field()
  updatedAt!: string;
  @Field()
  name!: string;
  @Field()
  birthDate!: string;
}

const prisma = new PrismaClient();

const main = async () => {
  const schema = await buildSchema({
    resolvers: [getAllUsers]
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
