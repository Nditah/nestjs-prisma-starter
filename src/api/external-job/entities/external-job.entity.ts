import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ExternalCompany } from 'src/api/external-company/entities/external-company.entity';
import { Job } from 'src/api/job/entities/job.entity';
import { BaseModel } from 'src/models/base.model';

@ObjectType({ description: 'External Job model' })
export class ExternalJob extends BaseModel {
  @Field(() => String, { description: 'External Job categories' })
  categories: string;

  @Field(() => String, { description: 'External Job link' })
  jobLink: string;

  @Field(() => [Job], { description: 'External Job' })
  jobs: Job[];

  @Field(() => ExternalCompany, { description: 'External Company' })
  externalCompany: ExternalCompany;
}
