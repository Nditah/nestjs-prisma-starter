import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class Talent {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
