import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { ExternalJob } from 'src/api/external-job/entities/external-job.entity';
import { BaseModel } from 'src/models/base.model';

@InputType('ExternalCompanyInput')
@ObjectType({ description: 'External Company model' })
export class ExternalCompany extends BaseModel {
  @Field(() => String, { description: 'External Company logo link' })
  logoLink: string;

  @Field(() => String, { description: 'External Company name' })
  companyName: string;

  @Field(() => [ExternalJob], { description: 'External Company externalJob' })
  externalJobs: ExternalJob[];
}
