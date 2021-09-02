import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateFriendRequestInput } from './create-friend-request.input';

@InputType()
export class UpdateFriendRequestInput extends PartialType(
  CreateFriendRequestInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
