import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectApplicationService } from './project-application.service';
import { ProjectApplication } from './entities/project-application.entity';
import { CreateProjectApplicationInput } from './dto/create-project-application.input';
import { UpdateProjectApplicationInput } from './dto/update-project-application.input';

@Resolver(() => ProjectApplication)
export class ProjectApplicationResolver {
  constructor(private readonly projectApplicationService: ProjectApplicationService) {}

  @Mutation(() => ProjectApplication)
  createProjectApplication(@Args('createProjectApplicationInput') createProjectApplicationInput: CreateProjectApplicationInput) {
    return this.projectApplicationService.create(createProjectApplicationInput);
  }

  @Query(() => [ProjectApplication], { name: 'projectApplication' })
  findAll() {
    return this.projectApplicationService.findAll();
  }

  @Query(() => ProjectApplication, { name: 'projectApplication' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectApplicationService.findOne(id);
  }

  @Mutation(() => ProjectApplication)
  updateProjectApplication(@Args('updateProjectApplicationInput') updateProjectApplicationInput: UpdateProjectApplicationInput) {
    return this.projectApplicationService.update(updateProjectApplicationInput.id, updateProjectApplicationInput);
  }

  @Mutation(() => ProjectApplication)
  removeProjectApplication(@Args('id', { type: () => Int }) id: number) {
    return this.projectApplicationService.remove(id);
  }
}
