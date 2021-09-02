import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';

@InputType()
export class CreateBookmarkedJobInput {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, {
    description: 'BookmarkedJob by User',
  })
  user: string;

  @IsNotEmpty()
  @Field(() => String, {
    description: 'Job Bookmarked by User',
  })
  job: string;
}
