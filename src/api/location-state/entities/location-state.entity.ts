import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocationState {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
