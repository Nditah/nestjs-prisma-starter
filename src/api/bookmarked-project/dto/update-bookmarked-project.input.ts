import { CreateBookmarkedProjectInput } from './create-bookmarked-project.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookmarkedProjectInput extends PartialType(CreateBookmarkedProjectInput) {
  @Field(() => Int)
  id: number;
}
