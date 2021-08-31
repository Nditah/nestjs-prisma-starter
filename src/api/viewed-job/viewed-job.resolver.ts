import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ViewedJobService } from './viewed-job.service';
import { ViewedJob } from './entities/viewed-job.entity';
import { CreateViewedJobInput } from './dto/create-viewed-job.input';
import { UpdateViewedJobInput } from './dto/update-viewed-job.input';

@Resolver(() => ViewedJob)
export class ViewedJobResolver {
  constructor(private readonly viewedJobService: ViewedJobService) {}

  @Mutation(() => ViewedJob)
  createViewedJob(@Args('createViewedJobInput') createViewedJobInput: CreateViewedJobInput) {
    return this.viewedJobService.create(createViewedJobInput);
  }

  @Query(() => [ViewedJob], { name: 'viewedJob' })
  findAll() {
    return this.viewedJobService.findAll();
  }

  @Query(() => ViewedJob, { name: 'viewedJob' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.viewedJobService.findOne(id);
  }

  @Mutation(() => ViewedJob)
  updateViewedJob(@Args('updateViewedJobInput') updateViewedJobInput: UpdateViewedJobInput) {
    return this.viewedJobService.update(updateViewedJobInput.id, updateViewedJobInput);
  }

  @Mutation(() => ViewedJob)
  removeViewedJob(@Args('id', { type: () => Int }) id: number) {
    return this.viewedJobService.remove(id);
  }
}
