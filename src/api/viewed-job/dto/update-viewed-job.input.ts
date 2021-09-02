import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateViewedJobInput } from './create-viewed-job.input';

@InputType()
export class UpdateViewedJobInput extends PartialType(CreateViewedJobInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
