import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';
import { Job } from 'src/api/job/entities/job.entity';

@ObjectType({ description: 'BookmarkedJob model' })
export class BookmarkedJob extends BaseModel {
  @Field(() => User, { description: 'User who Bookmarked the Job' })
  user: User;

  @Field(() => Job, { description: 'Job Bookmarked by User' })
  job: Job;
}
