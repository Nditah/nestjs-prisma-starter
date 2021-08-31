import {
  Resolver,
  Query,
  Mutation,
  Args,
  Int,
  ResolveField,
  Parent,
} from '@nestjs/graphql';
import { UseGuards } from '@nestjs/common';
import { AwardService } from './award.service';
import { Award } from './entities/award.entity';
import { CreateAwardInput } from './dto/create-award.input';
import { UpdateAwardInput } from './dto/update-award.input';
import { UserEntity } from 'src/decorators/user.decorator';
import { User } from 'src/models/user.model';

@Resolver(() => Award)
export class AwardResolver {
  constructor(private readonly awardService: AwardService) {}

  @Mutation(() => Award)
  async createAward(
    @UserEntity() user: User,
    @Args('data') data: CreateAwardInput
  ) {
    return this.awardService.create(data);
  }

  @Query(() => [Award], { name: 'allAwards' })
  findAll() {
    return this.awardService.findAll();
  }

  @Query(() => Award, { name: 'award' })
  findOne(@Args('id', { type: () => Int }) id: string) {
    return this.awardService.findOne(id);
  }

  @Mutation(() => Award)
  updateAward(@Args('data') data: UpdateAwardInput) {
    return this.awardService.update(data.id, data);
  }

  @Mutation(() => Award)
  removeAward(@Args('id', { type: () => Int }) id: string) {
    return this.awardService.remove(id);
  }
}
