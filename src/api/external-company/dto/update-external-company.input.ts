import { CreateExternalCompanyInput } from './create-external-company.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateExternalCompanyInput extends PartialType(CreateExternalCompanyInput) {
  @Field(() => Int)
  id: number;
}
