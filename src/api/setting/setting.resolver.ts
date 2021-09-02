import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { SettingService } from './setting.service';
import { Setting } from './entities/setting.entity';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';

@Resolver(() => Setting)
export class SettingResolver {
  constructor(private readonly settingService: SettingService) {}

  @Mutation(() => Setting)
  createSetting(@Args('data') data: CreateSettingInput) {
    return this.settingService.create(data);
  }

  @Query(() => [Setting], { name: 'setting' })
  findAll() {
    return this.settingService.findAll();
  }

  @Query(() => Setting, { name: 'setting' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.settingService.findOne(id);
  }

  @Mutation(() => Setting)
  updateSetting(@Args('data') data: UpdateSettingInput) {
    return this.settingService.update(data.id, data);
  }

  @Mutation(() => Setting)
  removeSetting(@Args('id', { type: () => Int }) id: number) {
    return this.settingService.remove(id);
  }
}
