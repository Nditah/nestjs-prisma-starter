import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ExternalJob {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
