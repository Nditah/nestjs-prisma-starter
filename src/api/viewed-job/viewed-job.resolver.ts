import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ViewedJobService } from './viewed-job.service';
import { ViewedJob } from './entities/viewed-job.entity';
import { CreateViewedJobInput } from './dto/create-viewed-job.input';
import { UpdateViewedJobInput } from './dto/update-viewed-job.input';

@Resolver(() => ViewedJob)
export class ViewedJobResolver {
  constructor(private readonly viewedJobService: ViewedJobService) {}

  @Mutation(() => ViewedJob)
  createViewedJob(@Args('data') data: CreateViewedJobInput) {
    return this.viewedJobService.create(data);
  }

  @Query(() => [ViewedJob], { name: 'viewedJob' })
  findAll() {
    return this.viewedJobService.findAll();
  }

  @Query(() => ViewedJob, { name: 'viewedJob' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.viewedJobService.findOne(id);
  }

  @Mutation(() => ViewedJob)
  updateViewedJob(@Args('data') data: UpdateViewedJobInput) {
    return this.viewedJobService.update(data.id, data);
  }

  @Mutation(() => ViewedJob)
  removeViewedJob(@Args('id', { type: () => String }) id: string) {
    return this.viewedJobService.remove(id);
  }
}
