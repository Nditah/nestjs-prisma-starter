import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateViewedProjectInput } from './create-viewed-project.input';

@InputType()
export class UpdateViewedProjectInput extends PartialType(
  CreateViewedProjectInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
