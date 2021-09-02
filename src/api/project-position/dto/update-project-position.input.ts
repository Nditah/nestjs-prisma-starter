import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateProjectPositionInput } from './create-project-position.input';

@InputType()
export class UpdateProjectPositionInput extends PartialType(
  CreateProjectPositionInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
