import { CreateViewedJobInput } from './create-viewed-job.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateViewedJobInput extends PartialType(CreateViewedJobInput) {
  @Field(() => Int)
  id: number;
}
