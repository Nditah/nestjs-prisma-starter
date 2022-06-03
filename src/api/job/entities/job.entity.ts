import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Location } from 'src/api/location/entities/location.entity';
import { JobStatus } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';

@InputType('JobInput')
@ObjectType({ description: 'Job model' })
export class Job extends BaseModel {

  @Field(() => String, { description: 'Job category' })
  category: string;

  @Field(() => String, { description: 'Job title' })
  title: string;

  @Field(() => String, { description: 'Job employment type' })
  employmentType: string;

  @Field(() => String, { description: 'Job description' })
  description: string;

  @Field(() => Location, { description: 'Job location' })
  location: Location;

  @Field(() => String, { description: 'Job responsibility' })
  responsibility: string;

  @Field(() => String, { description: 'Job requirements' })
  requirements: string;

  @Field(() => Int, { description: 'Job minimum salary' })
  salaryMin: number;

  @Field(() => Int, { description: 'Job maximum salary' })
  salaryMax: number;

  @Field(() => String, { description: 'Job experience level' })
  experienceLevel: string;

  @Field(() => String, { description: 'Job screening questions' })
  screeningQuestions: string;

  @Field(() => String, { description: 'Job tags' })
  tags: string;

  @Field(() => String, { description: 'Job poster department' })
  posterDepartment: string;

  @Field(() => String, { description: 'Job poster first name' })
  posterFirstName: string;

  @Field(() => String, { description: 'Job poster last name' })
  posterLastName: string;

  @Field(() => String, { description: 'Job poster email' })
  posterEmail: string;

  @Field(() => String, { description: 'Job poster phone' })
  posterPhone: string;

  @Field(() => JobStatus, { description: 'Job status' })
  status: JobStatus;

  @Field(() => Date, { description: 'Job DateTime' })
  finished: Date;

  // @Field(() => ExternalJob, { description: 'Job external job' })
  // externalJob: ExternalJob;
}
