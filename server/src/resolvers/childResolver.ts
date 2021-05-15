import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { context } from '../context';
import Child from '../entities/child';
import { CreateChildInput } from '../input/createChildInput';

@Resolver(of => Child)
export default class ChildResolver {
  @Mutation(returns => Child)
  async addChild(@Arg("child") childInput: CreateChildInput): Promise<Child> {
    console.log(childInput);
    const child = Object.assign(new Child(), {
      name: childInput.name,
      birthDate: childInput.birthDate,
      parentId: childInput.parentId
    });
    await context.prisma.child.create({data: childInput})
    return child;
  }

}