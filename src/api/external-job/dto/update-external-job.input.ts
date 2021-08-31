import { CreateExternalJobInput } from './create-external-job.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExternalJobInput extends PartialType(CreateExternalJobInput) {
  @Field(() => Int)
  id: number;
}
