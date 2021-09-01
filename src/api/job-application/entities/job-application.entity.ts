import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Job } from 'src/api/job/entities/job.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { ApplicationStatus, FileType } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Job Application model' })
export class JobApplication extends BaseModel {
  @Field(() => User, { description: 'Job Application user' })
  user: User;

  @Field(() => Job, { description: 'Job Application job' })
  job: Job;

  @Field(() => String, { description: 'Job Application cover-letter' })
  coverLetter: string;

  @Field(() => FileType, { description: 'Job Application cv' })
  cv: FileType;

  @Field(() => Project, { description: 'Job Application screening answers' })
  screeningAnswers: Project;

  @Field(() => ApplicationStatus, { description: 'Job Application status' })
  status: ApplicationStatus;

  @Field(() => Boolean, { description: 'Job Application saved' })
  saved: boolean;
}
