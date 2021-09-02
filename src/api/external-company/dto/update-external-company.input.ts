import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateExternalCompanyInput } from './create-external-company.input';

@InputType()
export class UpdateExternalCompanyInput extends PartialType(
  CreateExternalCompanyInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
