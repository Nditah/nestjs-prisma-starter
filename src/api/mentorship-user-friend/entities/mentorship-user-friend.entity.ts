import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { MentorshipUser } from 'src/api/mentorship-user/entities/mentorship-user.entity';
import { FriendRequestStatus } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';

@InputType('MentorshipUserFriendInput')
@ObjectType({ description: 'Mentorship User Friend model' })
export class MentorshipUserFriend extends BaseModel {
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
