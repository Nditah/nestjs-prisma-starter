import { InputType, Field } from '@nestjs/graphql';
import { MentorshipUser } from 'src/api/mentorship-user/entities/mentorship-user.entity';
import { FriendRequestStatus } from 'src/common/enum';

@InputType()
export class CreateMentorshipUserFriendInput {
  @Field(() => MentorshipUser, { description: 'Mentorship User Friend sender' })
  requester: MentorshipUser;

  @Field(() => MentorshipUser, {
    description: 'Mentorship User Friend receiver',
  })
  receiver: MentorshipUser;

  @Field(() => FriendRequestStatus, {
    description: 'Mentorship User Friend status',
  })
  status: FriendRequestStatus;
}
