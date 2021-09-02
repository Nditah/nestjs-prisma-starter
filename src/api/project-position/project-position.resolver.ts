import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ProjectPositionService } from './project-position.service';
import { ProjectPosition } from './entities/project-position.entity';
import { CreateProjectPositionInput } from './dto/create-project-position.input';
import { UpdateProjectPositionInput } from './dto/update-project-position.input';

@Resolver(() => ProjectPosition)
export class ProjectPositionResolver {
  constructor(
    private readonly projectPositionService: ProjectPositionService
  ) {}

  @Mutation(() => ProjectPosition)
  createProjectPosition(@Args('data') data: CreateProjectPositionInput) {
    return this.projectPositionService.create(data);
  }

  @Query(() => [ProjectPosition], { name: 'projectPosition' })
  findAll() {
    return this.projectPositionService.findAll();
  }

  @Query(() => ProjectPosition, { name: 'projectPosition' })
  findOne(@Args('id', { type: () => String }) id: number) {
    return this.projectPositionService.findOne(id);
  }

  @Mutation(() => ProjectPosition)
  updateProjectPosition(@Args('data') data: UpdateProjectPositionInput) {
    return this.projectPositionService.update(data.id, data);
  }

  @Mutation(() => ProjectPosition)
  removeProjectPosition(@Args('id', { type: () => String }) id: number) {
    return this.projectPositionService.remove(id);
  }
}
