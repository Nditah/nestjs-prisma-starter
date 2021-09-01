import { InputType, Int, Field } from '@nestjs/graphql';
import { ExternalCompany } from 'src/api/external-company/entities/external-company.entity';
import { Job } from 'src/api/job/entities/job.entity';

@InputType()
export class CreateExternalJobInput {
  @Field(() => String, { description: 'External Job categories' })
  categories: string;

  @Field(() => String, { description: 'External Job link' })
  jobLink: string;

  @Field(() => [Job], { description: 'External Job' })
  jobs: Job[];

  @Field(() => ExternalCompany, { description: 'External Company' })
  externalCompany: ExternalCompany;
}
