import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateCircleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
