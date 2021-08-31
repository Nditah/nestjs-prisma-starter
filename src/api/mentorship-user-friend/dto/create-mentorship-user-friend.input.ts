import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMentorshipUserFriendInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
