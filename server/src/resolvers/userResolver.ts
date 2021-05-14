import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { context } from '../context';
import Child from '../entities/child';
import User from '../entities/user';

@Resolver(of => User)
export default class UserResolver {
  @Query(returns => [User])
  async getAllUsers() {
    return (await context.prisma.user.findMany({ include: { children: true } }));
  }
  @Query(returns => User)
  async getUserWithEmail(@Arg("email") email: string) {
    return (await context.prisma.user.findFirst({ where:{email:{equals: email}}, include:{children: true}}));
  }
}

