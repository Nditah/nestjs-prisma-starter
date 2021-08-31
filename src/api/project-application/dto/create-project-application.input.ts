import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateProjectApplicationInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
