import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateUserCircleInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
