import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Job } from 'src/api/job/entities/job.entity';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@InputType('ViewedJobInput')
@ObjectType({ description: 'Viewed Job model' })
export class ViewedJob extends BaseModel {
  @Field(() => User, { description: 'Viewed Job user' })
  user: User;

  @Field(() => Job, { description: 'Viewed Job' })
  job: Job;
}
