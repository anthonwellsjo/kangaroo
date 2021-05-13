import 'reflect-metadata';
import { Query, Resolver } from 'type-graphql';
import { context } from '../context';
import User from '../entities/user';

@Resolver(of => User)
export default class UserResolver {
  @Query(returns => [User])
  async getAllUsers() {
    return (await context.prisma.user.findMany({ include: { children: true } }));
  }
}