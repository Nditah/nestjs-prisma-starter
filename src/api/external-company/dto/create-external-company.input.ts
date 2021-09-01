import { InputType, Int, Field } from '@nestjs/graphql';
import { ExternalJob } from 'src/api/external-job/entities/external-job.entity';

@InputType()
export class CreateExternalCompanyInput {
  @Field(() => String, { description: 'External Company logo link' })
  logoLink: string;

  @Field(() => String, { description: 'External Company name' })
  companyName: string;

  @Field(() => [ExternalJob], { description: 'External Company externalJob' })
  externalJobs: ExternalJob[];
}
