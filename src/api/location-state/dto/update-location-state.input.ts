import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateLocationStateInput } from './create-location-state.input';

@InputType()
export class UpdateLocationStateInput extends PartialType(
  CreateLocationStateInput
) {
  @Field(() => Int)
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
