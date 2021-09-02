import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateEducationInput } from './create-education.input';

@InputType()
export class UpdateEducationInput extends PartialType(CreateEducationInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
