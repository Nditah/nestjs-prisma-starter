import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateViewedProjectInput {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
