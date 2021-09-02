import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { Job } from 'src/api/job/entities/job.entity';
import { User } from 'src/models/user.model';

@InputType()
export class CreateBookmarkedJobInput {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => User, {
    description: 'BookmarkedJob by User',
  })
  user: string;

  @IsUUID()
  @IsNotEmpty()
  @Field(() => Job, {
    description: 'Job Bookmarked by User',
  })
  job: string;
}
