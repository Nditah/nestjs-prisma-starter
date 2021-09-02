import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { EducationService } from './education.service';
import { Education } from './entities/education.entity';
import { CreateEducationInput } from './dto/create-education.input';
import { UpdateEducationInput } from './dto/update-education.input';

@Resolver(() => Education)
export class EducationResolver {
  constructor(private readonly educationService: EducationService) {}

  @Mutation(() => Education)
  createEducation(@Args('data') data: CreateEducationInput) {
    return this.educationService.create(data);
  }

  @Query(() => [Education], { name: 'education' })
  findAll() {
    return this.educationService.findAll();
  }

  @Query(() => Education, { name: 'education' })
  findOne(@Args('id', { type: () => String }) id: number) {
    return this.educationService.findOne(id);
  }

  @Mutation(() => Education)
  updateEducation(@Args('data') data: UpdateEducationInput) {
    return this.educationService.update(data.id, data);
  }

  @Mutation(() => Education)
  removeEducation(@Args('id', { type: () => String }) id: number) {
    return this.educationService.remove(id);
  }
}
