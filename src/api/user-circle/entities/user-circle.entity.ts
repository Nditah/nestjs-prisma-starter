import { ObjectType, Field } from '@nestjs/graphql';
import { Circle } from 'src/api/circle/entities/circle.entity';
import { UserCircleStatus } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'User Circle model' })
export class UserCircle extends BaseModel {
  @Field(() => User, { description: 'User Circle user' })
  user: User;

  @Field(() => Circle, { description: 'User Circle' })
  circle: Circle;

  @Field(() => UserCircleStatus, { description: 'User Circle status' })
  status: UserCircleStatus;
}
