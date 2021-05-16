import 'reflect-metadata';
import { Arg, Mutation, Query, Resolver } from 'type-graphql';
import { context } from '../context';
import Child from '../entities/child';
import { CreateChildInput } from '../input/createChildInput';

@Resolver(of => Child)
export default class ChildResolver {
  @Mutation(returns => Child)
  async addChild(@Arg("child") childInput: CreateChildInput): Promise<Child> {
    console.log("Adding child", childInput);
    const child = Object.assign(new Child(), {
      name: childInput.name,
      birthDate: childInput.birthDate,
      parentId: childInput.parentId
    });
    await context.prisma.child.create({ data: childInput })
    console.log("Returning new child", child);
    return child;
  }

  @Mutation(returns => Child)
  async removeChild(@Arg("id") id: number): Promise<Child> {
    console.log("Deleting child", id);
    const child = await context.prisma.child.delete({ where: { id: id } })
    console.log("Deleting child", child);
    return child;
  }

}