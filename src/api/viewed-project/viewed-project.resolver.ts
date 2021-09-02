import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ViewedProjectService } from './viewed-project.service';
import { ViewedProject } from './entities/viewed-project.entity';
import { CreateViewedProjectInput } from './dto/create-viewed-project.input';
import { UpdateViewedProjectInput } from './dto/update-viewed-project.input';

@Resolver(() => ViewedProject)
export class ViewedProjectResolver {
  constructor(private readonly viewedProjectService: ViewedProjectService) {}

  @Mutation(() => ViewedProject)
  createViewedProject(@Args('data') data: CreateViewedProjectInput) {
    return this.viewedProjectService.create(data);
  }

  @Query(() => [ViewedProject], { name: 'viewedProject' })
  findAll() {
    return this.viewedProjectService.findAll();
  }

  @Query(() => ViewedProject, { name: 'viewedProject' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.viewedProjectService.findOne(id);
  }

  @Mutation(() => ViewedProject)
  updateViewedProject(@Args('data') data: UpdateViewedProjectInput) {
    return this.viewedProjectService.update(data.id, data);
  }

  @Mutation(() => ViewedProject)
  removeViewedProject(@Args('id', { type: () => String }) id: string) {
    return this.viewedProjectService.remove(id);
  }
}
