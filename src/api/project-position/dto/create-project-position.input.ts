import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectPositionInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
