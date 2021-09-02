import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { CreateAwardInput } from './create-award.input';

@InputType()
export class UpdateAwardInput extends PartialType(CreateAwardInput) {
  @Field(() => String, { description: 'PrimaryKey of Award' })
  id: string;
}
