import { InputType, Field } from '@nestjs/graphql';
import { Circle } from 'src/api/circle/entities/circle.entity';
import { UserCircleStatus } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateUserCircleInput {
  @Field(() => User, { description: 'User Circle user' })
  user: User;

  @Field(() => Circle, { description: 'User Circle' })
  circle: Circle;

  @Field(() => UserCircleStatus, { description: 'User Circle status' })
  status: UserCircleStatus;
}
