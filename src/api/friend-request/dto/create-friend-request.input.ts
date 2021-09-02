import { InputType, Field } from '@nestjs/graphql';
import { FriendRequestStatus } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateFriendRequestInput {
  @Field(() => User, { description: 'Friend Request sender' })
  requester: string;

  @Field(() => User, { description: 'Friend Request receiver' })
  receiver: string;

  @Field(() => FriendRequestStatus, { description: 'Friend Request status' })
  status: FriendRequestStatus;
}
