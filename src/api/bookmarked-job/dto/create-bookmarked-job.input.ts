import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookmarkedJobInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
