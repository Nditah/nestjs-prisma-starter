import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateBookmarkedProjectInput } from './create-bookmarked-project.input';

@InputType()
export class UpdateBookmarkedProjectInput extends PartialType(
  CreateBookmarkedProjectInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
