import { CreateBookmarkedJobInput } from './create-bookmarked-job.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateBookmarkedJobInput extends PartialType(CreateBookmarkedJobInput) {
  @Field(() => Int)
  id: number;
}
