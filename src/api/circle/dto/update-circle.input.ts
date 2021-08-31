import { CreateCircleInput } from './create-circle.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateCircleInput extends PartialType(CreateCircleInput) {
  @Field(() => Int)
  id: number;
}
