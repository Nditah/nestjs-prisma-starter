import { CreateLocationStateInput } from './create-location-state.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLocationStateInput extends PartialType(CreateLocationStateInput) {
  @Field(() => Int)
  id: number;
}
