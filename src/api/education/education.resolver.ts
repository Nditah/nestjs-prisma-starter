import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { EducationService } from './education.service';
import { Education } from './entities/education.entity';
import { CreateEducationInput } from './dto/create-education.input';
import { UpdateEducationInput } from './dto/update-education.input';

@Resolver(() => Education)
export class EducationResolver {
  constructor(private readonly educationService: EducationService) {}

  @Mutation(() => Education)
  createEducation(@Args('createEducationInput') createEducationInput: CreateEducationInput) {
    return this.educationService.create(createEducationInput);
  }

  @Query(() => [Education], { name: 'education' })
  findAll() {
    return this.educationService.findAll();
  }

  @Query(() => Education, { name: 'education' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.educationService.findOne(id);
  }

  @Mutation(() => Education)
  updateEducation(@Args('updateEducationInput') updateEducationInput: UpdateEducationInput) {
    return this.educationService.update(updateEducationInput.id, updateEducationInput);
  }

  @Mutation(() => Education)
  removeEducation(@Args('id', { type: () => Int }) id: number) {
    return this.educationService.remove(id);
  }
}
