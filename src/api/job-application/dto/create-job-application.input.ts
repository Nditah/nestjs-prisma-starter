import { InputType, Field } from '@nestjs/graphql';
import { Job } from 'src/api/job/entities/job.entity';
import { ApplicationStatus, FileType } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateJobApplicationInput {
  @Field(() => User, { description: 'Job Application user' })
  user: string;

  @Field(() => Job, { description: 'Job Application job' })
  job: string;

  @Field(() => String, { description: 'Job Application cover-letter' })
  coverLetter: string;

  @Field(() => FileType, { description: 'Job Application cv' })
  cv: FileType;

  @Field(() => String, { description: 'Job Application screening answers' })
  screeningAnswers: string;

  @Field(() => ApplicationStatus, { description: 'Job Application status' })
  status: ApplicationStatus;

  @Field(() => Boolean, { description: 'Job Application saved' })
  saved: boolean;
}
