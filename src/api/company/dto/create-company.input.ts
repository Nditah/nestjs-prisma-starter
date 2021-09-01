import { InputType, Int, Field } from '@nestjs/graphql';
import { Job } from 'src/api/job/entities/job.entity';
import { User } from 'src/models/user.model';

@InputType()
export class CreateCompanyInput {
  @Field(() => String, { description: 'Name of the Company' })
  name: string;

  @Field(() => String, { description: 'Company industry' })
  industry: string;

  @Field(() => String, { description: 'Company website' })
  website: string;

  @Field(() => String, { description: 'Company contactor Name' })
  contactorName: string;

  @Field(() => String, { description: 'Company contactor Email' })
  contactorEmail: string;

  @Field(() => String, { description: 'Company contactor Phone' })
  contactorPhone: string;

  @Field(() => String, { description: 'Company contactor Job Title' })
  contactorJobTitle: string;

  @Field(() => String, { description: 'Company contactor Department' })
  contactorDepartment: string;

  @Field(() => String, { description: 'Company introduction' })
  introduction: string;

  @Field(() => Int, { description: 'Company number of employees' })
  employees: number;

  @Field(() => String, { description: 'Company skills' })
  skills: string;

  @Field(() => String, { description: 'Company fields' })
  fields: string;

  @Field(() => User, { description: 'Company owner as User' })
  user: string;

  @Field(() => Job, { description: 'Company owner as User' })
  jobs: Job[];
}
