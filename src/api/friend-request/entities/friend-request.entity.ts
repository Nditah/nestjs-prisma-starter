import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { FriendRequestStatus } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@InputType('FriendRequestInput')
@ObjectType({ description: 'Friend Request model' })
export class FriendRequest extends BaseModel {
  @Field(() => User, { description: 'Friend Request sender' })
  requester: User;

  @Field(() => User, { description: 'Friend Request receiver' })
  receiver: User;

  @Field(() => FriendRequestStatus, { description: 'Friend Request status' })
  status: FriendRequestStatus;
}
