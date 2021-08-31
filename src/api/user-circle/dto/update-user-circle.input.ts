import { CreateUserCircleInput } from './create-user-circle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateUserCircleInput extends PartialType(CreateUserCircleInput) {
  @Field(() => Int)
  id: number;
}
