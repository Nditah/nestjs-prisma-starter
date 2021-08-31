import { ObjectType, Field, Int } from '@nestjs/graphql';

@ObjectType()
export class FileItem {
  @Field(() => Int, { description: 'Example field (placeholder)' })
  exampleField: number;
}
