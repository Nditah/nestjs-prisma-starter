import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class ProjectApplication {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
