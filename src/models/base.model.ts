import { Field, ObjectType, ID, HideField } from '@nestjs/graphql';

@ObjectType({ isAbstract: true })
export abstract class BaseModel {
  @Field(() => ID)
  id: string;

  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  createdAt: Date;

  @Field({
    description:
      'Identifies the date and time when the object was last updated.',
  })
  updatedAt: Date;

  @Field({
    description: 'Identifies the date and time when the object was created.',
  })
  deletedAt: Date;

  @Field({
    description: 'Identifies the object that has been soft deleted.',
  })
  @HideField()
  deleted: boolean;
}
