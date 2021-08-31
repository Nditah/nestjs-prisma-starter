import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { CircleService } from './circle.service';
import { Circle } from './entities/circle.entity';
import { CreateCircleInput } from './dto/create-circle.input';
import { UpdateCircleInput } from './dto/update-circle.input';

@Resolver(() => Circle)
export class CircleResolver {
  constructor(private readonly circleService: CircleService) {}

  @Mutation(() => Circle)
  createCircle(@Args('createCircleInput') createCircleInput: CreateCircleInput) {
    return this.circleService.create(createCircleInput);
  }

  @Query(() => [Circle], { name: 'circle' })
  findAll() {
    return this.circleService.findAll();
  }

  @Query(() => Circle, { name: 'circle' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.circleService.findOne(id);
  }

  @Mutation(() => Circle)
  updateCircle(@Args('updateCircleInput') updateCircleInput: UpdateCircleInput) {
    return this.circleService.update(updateCircleInput.id, updateCircleInput);
  }

  @Mutation(() => Circle)
  removeCircle(@Args('id', { type: () => Int }) id: number) {
    return this.circleService.remove(id);
  }
}
