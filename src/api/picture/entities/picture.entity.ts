import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Picture {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
