import { CreateMentorshipUserInput } from './create-mentorship-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMentorshipUserInput extends PartialType(CreateMentorshipUserInput) {
  @Field(() => Int)
  id: number;
}
