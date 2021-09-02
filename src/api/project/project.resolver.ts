import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectService } from './project.service';
import { Project } from './entities/project.entity';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';

@Resolver(() => Project)
export class ProjectResolver {
  constructor(private readonly projectService: ProjectService) {}

  @Mutation(() => Project)
  createProject(@Args('data') data: CreateProjectInput) {
    return this.projectService.create(data);
  }

  @Query(() => [Project], { name: 'project' })
  findAll() {
    return this.projectService.findAll();
  }

  @Query(() => Project, { name: 'project' })
  findOne(@Args('id', { type: () => String }) id: number) {
    return this.projectService.findOne(id);
  }

  @Mutation(() => Project)
  updateProject(@Args('data') data: UpdateProjectInput) {
    return this.projectService.update(data.id, data);
  }

  @Mutation(() => Project)
  removeProject(@Args('id', { type: () => String }) id: number) {
    return this.projectService.remove(id);
  }
}
