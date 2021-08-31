import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ViewedProject {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
