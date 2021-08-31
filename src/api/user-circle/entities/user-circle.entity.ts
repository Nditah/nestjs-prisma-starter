import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class UserCircle {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
