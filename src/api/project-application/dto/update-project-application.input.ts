import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateProjectApplicationInput } from './create-project-application.input';

@InputType()
export class UpdateProjectApplicationInput extends PartialType(
  CreateProjectApplicationInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
