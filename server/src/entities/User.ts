import { Field, ID, ObjectType } from "type-graphql";
import Child from "./child";

@ObjectType()
export default class User {
  @Field(type => ID)
  id!: number;
  @Field()
  createdAt!: Date;
  @Field()
  updatedAt!: Date;
  @Field()
  email!: string;
  @Field()
  name!: string;
  @Field(type => [Child], { nullable: true })
  children!: [Child]
}