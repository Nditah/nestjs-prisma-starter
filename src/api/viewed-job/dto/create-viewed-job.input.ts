import { InputType, Field } from '@nestjs/graphql';
import { Job } from 'src/api/job/entities/job.entity';
import { User } from 'src/models/user.model';

@InputType()
export class CreateViewedJobInput {
  @Field(() => User, { description: 'Viewed Job user' })
  user: User;

  @Field(() => Job, { description: 'Viewed Job' })
  job: Job;
}
