import { InputType, Int, Field } from '@nestjs/graphql';
import { Job } from 'src/api/job/entities/job.entity';
import { User } from 'src/models/user.model';

@InputType()
export class CreateBookmarkedJobInput {
  @Field(() => User, { description: 'User who Bookmarked the Job' })
  user: User;

  @Field(() => Job, { description: 'Job Bookmarked by User' })
  job: Job;
}
