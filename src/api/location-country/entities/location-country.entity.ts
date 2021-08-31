import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class LocationCountry {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
