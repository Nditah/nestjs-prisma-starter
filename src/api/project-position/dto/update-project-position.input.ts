import { CreateProjectPositionInput } from './create-project-position.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectPositionInput extends PartialType(CreateProjectPositionInput) {
  @Field(() => Int)
  id: number;
}
