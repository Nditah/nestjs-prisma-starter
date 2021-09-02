import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateJobApplicationInput } from './create-job-application.input';

@InputType()
export class UpdateJobApplicationInput extends PartialType(
  CreateJobApplicationInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
