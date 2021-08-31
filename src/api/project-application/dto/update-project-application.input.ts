import { CreateProjectApplicationInput } from './create-project-application.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateProjectApplicationInput extends PartialType(CreateProjectApplicationInput) {
  @Field(() => Int)
  id: number;
}
