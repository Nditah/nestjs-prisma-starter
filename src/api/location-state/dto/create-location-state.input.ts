import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateLocationStateInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
