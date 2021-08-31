import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ProjectPositionService } from './project-position.service';
import { ProjectPosition } from './entities/project-position.entity';
import { CreateProjectPositionInput } from './dto/create-project-position.input';
import { UpdateProjectPositionInput } from './dto/update-project-position.input';

@Resolver(() => ProjectPosition)
export class ProjectPositionResolver {
  constructor(private readonly projectPositionService: ProjectPositionService) {}

  @Mutation(() => ProjectPosition)
  createProjectPosition(@Args('createProjectPositionInput') createProjectPositionInput: CreateProjectPositionInput) {
    return this.projectPositionService.create(createProjectPositionInput);
  }

  @Query(() => [ProjectPosition], { name: 'projectPosition' })
  findAll() {
    return this.projectPositionService.findAll();
  }

  @Query(() => ProjectPosition, { name: 'projectPosition' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.projectPositionService.findOne(id);
  }

  @Mutation(() => ProjectPosition)
  updateProjectPosition(@Args('updateProjectPositionInput') updateProjectPositionInput: UpdateProjectPositionInput) {
    return this.projectPositionService.update(updateProjectPositionInput.id, updateProjectPositionInput);
  }

  @Mutation(() => ProjectPosition)
  removeProjectPosition(@Args('id', { type: () => Int }) id: number) {
    return this.projectPositionService.remove(id);
  }
}
