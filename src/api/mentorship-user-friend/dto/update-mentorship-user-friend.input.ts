import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateMentorshipUserFriendInput } from './create-mentorship-user-friend.input';

@InputType()
export class UpdateMentorshipUserFriendInput extends PartialType(
  CreateMentorshipUserFriendInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
