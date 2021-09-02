import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { TalentService } from './talent.service';
import { Talent } from './entities/talent.entity';
import { CreateTalentInput } from './dto/create-talent.input';
import { UpdateTalentInput } from './dto/update-talent.input';

@Resolver(() => Talent)
export class TalentResolver {
  constructor(private readonly talentService: TalentService) {}

  @Mutation(() => Talent)
  createTalent(@Args('data') data: CreateTalentInput) {
    return this.talentService.create(data);
  }

  @Query(() => [Talent], { name: 'talent' })
  findAll() {
    return this.talentService.findAll();
  }

  @Query(() => Talent, { name: 'talent' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.talentService.findOne(id);
  }

  @Mutation(() => Talent)
  updateTalent(@Args('data') data: UpdateTalentInput) {
    return this.talentService.update(data.id, data);
  }

  @Mutation(() => Talent)
  removeTalent(@Args('id', { type: () => Int }) id: number) {
    return this.talentService.remove(id);
  }
}
