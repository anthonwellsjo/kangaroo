import { Field, ID, ObjectType } from "type-graphql";

@ObjectType()
export default class Child {
  @Field(type => ID)
  id!: number;
  @Field()
  createdAt!: Date;
  @Field()
  updatedAt!: Date;
  @Field()
  name!: string;
  @Field()
  birthDate!: Date;
  @Field(type => ID)
  parentId!: number;
}