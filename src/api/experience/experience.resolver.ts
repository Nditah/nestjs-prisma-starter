import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { ExperienceService } from './experience.service';
import { Experience } from './entities/experience.entity';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';

@Resolver(() => Experience)
export class ExperienceResolver {
  constructor(private readonly experienceService: ExperienceService) {}

  @Mutation(() => Experience)
  createExperience(@Args('data') data: CreateExperienceInput) {
    return this.experienceService.create(data);
  }

  @Query(() => [Experience], { name: 'experience' })
  findAll() {
    return this.experienceService.findAll();
  }

  @Query(() => Experience, { name: 'experience' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.experienceService.findOne(id);
  }

  @Mutation(() => Experience)
  updateExperience(@Args('data') data: UpdateExperienceInput) {
    return this.experienceService.update(data.id, data);
  }

  @Mutation(() => Experience)
  removeExperience(@Args('id', { type: () => String }) id: string) {
    return this.experienceService.remove(id);
  }
}
