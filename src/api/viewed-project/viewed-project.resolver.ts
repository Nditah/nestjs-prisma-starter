import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ViewedProjectService } from './viewed-project.service';
import { ViewedProject } from './entities/viewed-project.entity';
import { CreateViewedProjectInput } from './dto/create-viewed-project.input';
import { UpdateViewedProjectInput } from './dto/update-viewed-project.input';

@Resolver(() => ViewedProject)
export class ViewedProjectResolver {
  constructor(private readonly viewedProjectService: ViewedProjectService) {}

  @Mutation(() => ViewedProject)
  createViewedProject(@Args('createViewedProjectInput') createViewedProjectInput: CreateViewedProjectInput) {
    return this.viewedProjectService.create(createViewedProjectInput);
  }

  @Query(() => [ViewedProject], { name: 'viewedProject' })
  findAll() {
    return this.viewedProjectService.findAll();
  }

  @Query(() => ViewedProject, { name: 'viewedProject' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.viewedProjectService.findOne(id);
  }

  @Mutation(() => ViewedProject)
  updateViewedProject(@Args('updateViewedProjectInput') updateViewedProjectInput: UpdateViewedProjectInput) {
    return this.viewedProjectService.update(updateViewedProjectInput.id, updateViewedProjectInput);
  }

  @Mutation(() => ViewedProject)
  removeViewedProject(@Args('id', { type: () => Int }) id: number) {
    return this.viewedProjectService.remove(id);
  }
}
