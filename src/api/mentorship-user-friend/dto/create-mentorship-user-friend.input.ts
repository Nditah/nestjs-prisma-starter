import { InputType, Field } from '@nestjs/graphql';
import { MentorshipUser } from 'src/api/mentorship-user/entities/mentorship-user.entity';
import { FriendRequestStatus } from 'src/common/enum';

@InputType()
export class CreateMentorshipUserFriendInput {
  @Field(() => MentorshipUser, { description: 'Mentorship User Friend sender' })
  requester: string;

  @Field(() => MentorshipUser, {
    description: 'Mentorship User Friend receiver',
  })
  receiver: string;

  @Field(() => FriendRequestStatus, {
    description: 'Mentorship User Friend status',
  })
  status: FriendRequestStatus;
}
