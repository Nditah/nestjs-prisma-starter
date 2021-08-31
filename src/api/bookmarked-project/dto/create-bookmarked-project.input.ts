import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateBookmarkedProjectInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
