import { Context } from './context'
import "reflect-metadata";
import { buildSchema, Resolver, Query } from 'type-graphql'



@Resolver()
class HelloResolver {
  @Query(() => String)
  async hello() { return "Helo world"; }
}

const resolvers = {
  Query: {
    allUsers: (parent = null, args: FindUserArgs, context: Context) => {
      return context.prisma.user.findMany();
    },
    getUser: (parent = null, args: FindUserArgs, context: Context) => {
      return context.prisma.user.findFirst({
        where: { id: args.id }
      })
    },
    allChildren: (parent = null, args = null, context: Context) => {
      return context.prisma.child.findMany();
    }
  },
  Mutation: {
    signupUser: (parent = null, args: RegisterUserArgs, context: Context) => {
      return context.prisma.user.create({
        data: {
          name: args.name,
          email: args.email
        }
      })
    }
  }
}


interface FindUserArgs {
  id: number,
  email: string
}
interface RegisterUserArgs {
  name: string,
  email: string
}


export const schema = buildSchema({
  resolvers: [Resolver],
})