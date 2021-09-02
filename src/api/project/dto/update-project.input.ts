import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateProjectInput } from './create-project.input';

@InputType()
export class UpdateProjectInput extends PartialType(CreateProjectInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
