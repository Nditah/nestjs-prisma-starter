import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateBookmarkedJobInput } from './create-bookmarked-job.input';

@InputType()
export class UpdateBookmarkedJobInput extends PartialType(
  CreateBookmarkedJobInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String)
  id: string;
}
