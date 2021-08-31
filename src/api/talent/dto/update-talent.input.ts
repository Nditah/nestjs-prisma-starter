import { CreateTalentInput } from './create-talent.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateTalentInput extends PartialType(CreateTalentInput) {
  @Field(() => Int)
  id: number;
}
