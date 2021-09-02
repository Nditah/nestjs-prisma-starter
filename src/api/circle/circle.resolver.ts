import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CircleService } from './circle.service';
import { Circle } from './entities/circle.entity';
import { CreateCircleInput } from './dto/create-circle.input';
import { UpdateCircleInput } from './dto/update-circle.input';

@Resolver(() => Circle)
export class CircleResolver {
  constructor(private readonly circleService: CircleService) {}

  @Mutation(() => Circle)
  createCircle(@Args('data') data: CreateCircleInput) {
    return this.circleService.create(data);
  }

  @Query(() => [Circle], { name: 'circle' })
  findAll() {
    return this.circleService.findAll();
  }

  @Query(() => Circle, { name: 'circle' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.circleService.findOne(id);
  }

  @Mutation(() => Circle)
  updateCircle(@Args('data') data: UpdateCircleInput) {
    return this.circleService.update(data.id, data);
  }

  @Mutation(() => Circle)
  removeCircle(@Args('id', { type: () => String }) id: string) {
    return this.circleService.remove(id);
  }
}
