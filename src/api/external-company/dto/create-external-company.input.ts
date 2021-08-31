import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateExternalCompanyInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
