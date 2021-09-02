import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateExternalJobInput } from './create-external-job.input';

@InputType()
export class UpdateExternalJobInput extends PartialType(
  CreateExternalJobInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
