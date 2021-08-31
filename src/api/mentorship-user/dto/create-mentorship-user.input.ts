import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateMentorshipUserInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
