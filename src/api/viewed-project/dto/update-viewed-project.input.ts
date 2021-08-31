import { CreateViewedProjectInput } from './create-viewed-project.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateViewedProjectInput extends PartialType(CreateViewedProjectInput) {
  @Field(() => Int)
  id: number;
}
