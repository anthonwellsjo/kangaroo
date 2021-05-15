import 'reflect-metadata';
import { Field, InputType } from "type-graphql";
import Child from "../entities/child";

@InputType({ description: "New child data" })
export class CreateChildInput implements Partial<Child> {
  @Field()
  name!: string;

  @Field()
  birthDate!: Date;

  @Field()
  parentId!: number;
}
