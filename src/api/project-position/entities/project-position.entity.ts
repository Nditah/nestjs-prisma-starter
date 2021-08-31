import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectPosition {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
