import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectApplicationService } from './project-application.service';
import { ProjectApplication } from './entities/project-application.entity';
import { CreateProjectApplicationInput } from './dto/create-project-application.input';
import { UpdateProjectApplicationInput } from './dto/update-project-application.input';

@Resolver(() => ProjectApplication)
export class ProjectApplicationResolver {
  constructor(
    private readonly projectApplicationService: ProjectApplicationService
  ) {}

  @Mutation(() => ProjectApplication)
  createProjectApplication(@Args('data') data: CreateProjectApplicationInput) {
    return this.projectApplicationService.create(data);
  }

  @Query(() => [ProjectApplication], { name: 'projectApplication' })
  findAll() {
    return this.projectApplicationService.findAll();
  }

  @Query(() => ProjectApplication, { name: 'projectApplication' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.projectApplicationService.findOne(id);
  }

  @Mutation(() => ProjectApplication)
  updateProjectApplication(@Args('data') data: UpdateProjectApplicationInput) {
    return this.projectApplicationService.update(data.id, data);
  }

  @Mutation(() => ProjectApplication)
  removeProjectApplication(@Args('id', { type: () => String }) id: string) {
    return this.projectApplicationService.remove(id);
  }
}
