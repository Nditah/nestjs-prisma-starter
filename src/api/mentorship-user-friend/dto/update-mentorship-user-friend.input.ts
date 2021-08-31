import { CreateMentorshipUserFriendInput } from './create-mentorship-user-friend.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateMentorshipUserFriendInput extends PartialType(CreateMentorshipUserFriendInput) {
  @Field(() => Int)
  id: number;
}
