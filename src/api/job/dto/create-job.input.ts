import { InputType, Int, Field } from '@nestjs/graphql';
import { JobStatus } from 'src/common/enum';
import { Company } from 'src/api/company/entities/company.entity';
import { ExternalJob } from 'src/api/external-job/entities/external-job.entity';
import { FileItem } from 'src/api/file-item/entities/file-item.entity';
import { JobApplication } from 'src/api/job-application/entities/job-application.entity';
import { Location } from 'src/api/location/entities/location.entity';

@InputType()
export class CreateJobInput {
  @Field(() => Company, { description: 'Job company' })
  company: string;

  @Field(() => String, { description: 'Job category' })
  category: string;

  @Field(() => String, { description: 'Job title' })
  title: string;

  @Field(() => String, { description: 'Job employment type' })
  employmentType: string;

  @Field(() => String, { description: 'Job description' })
  description: string;

  @Field(() => Location, { description: 'Job location' })
  location: string;

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

  @Field(() => [FileItem], { description: 'Job documents' })
  documents: FileItem[];

  @Field(() => [JobApplication], { description: 'Job applications' })
  applications: JobApplication[];

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

  @Field(() => ExternalJob, { description: 'Job external job' })
  externalJob: string;
}
