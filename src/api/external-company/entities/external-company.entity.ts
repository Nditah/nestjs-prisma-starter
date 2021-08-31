import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ExternalCompany {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
