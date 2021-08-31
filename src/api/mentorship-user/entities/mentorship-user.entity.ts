import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class MentorshipUser {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
