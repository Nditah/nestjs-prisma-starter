import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationCountryInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
