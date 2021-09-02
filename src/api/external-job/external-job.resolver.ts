import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExternalJobService } from './external-job.service';
import { ExternalJob } from './entities/external-job.entity';
import { CreateExternalJobInput } from './dto/create-external-job.input';
import { UpdateExternalJobInput } from './dto/update-external-job.input';

@Resolver(() => ExternalJob)
export class ExternalJobResolver {
  constructor(private readonly externalJobService: ExternalJobService) {}

  @Mutation(() => ExternalJob)
  createExternalJob(@Args('data') data: CreateExternalJobInput) {
    return this.externalJobService.create(data);
  }

  @Query(() => [ExternalJob], { name: 'externalJob' })
  findAll() {
    return this.externalJobService.findAll();
  }

  @Query(() => ExternalJob, { name: 'externalJob' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.externalJobService.findOne(id);
  }

  @Mutation(() => ExternalJob)
  updateExternalJob(@Args('data') data: UpdateExternalJobInput) {
    return this.externalJobService.update(data.id, data);
  }

  @Mutation(() => ExternalJob)
  removeExternalJob(@Args('id', { type: () => Int }) id: number) {
    return this.externalJobService.remove(id);
  }
}
