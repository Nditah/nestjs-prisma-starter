import { InputType, Int, Field } from '@nestjs/graphql';
import { FriendRequestStatus } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateFriendRequestInput {
  @Field(() => User, { description: 'Friend Request sender' })
  requester: User;

  @Field(() => User, { description: 'Friend Request receiver' })
  receiver: User;

  @Field(() => FriendRequestStatus, { description: 'Friend Request status' })
  status: FriendRequestStatus;
}
