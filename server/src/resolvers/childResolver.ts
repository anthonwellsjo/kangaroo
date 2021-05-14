import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { context } from '../context';
import Child from '../entities/child';
import { CreateChildInput } from '../input/createChildInput';

@Resolver(of => Child)
export class ChildResolver {
  @Mutation(returns => Child)
  async addChild(@Arg("child") childInput: CreateChildInput): Promise<Child> {
    const child = Object.assign(new Child(), {
      id:1,
      name: childInput.name,
      birthDate: childInput.birthDate,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    await context.prisma.child.create({data: child})
    return child;
  }
  
}