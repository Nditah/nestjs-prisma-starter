import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateUserCircleInput } from './create-user-circle.input';

@InputType()
export class UpdateUserCircleInput extends PartialType(CreateUserCircleInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
