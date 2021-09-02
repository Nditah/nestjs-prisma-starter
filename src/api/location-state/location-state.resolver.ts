import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationStateService } from './location-state.service';
import { LocationState } from './entities/location-state.entity';
import { CreateLocationStateInput } from './dto/create-location-state.input';
import { UpdateLocationStateInput } from './dto/update-location-state.input';

@Resolver(() => LocationState)
export class LocationStateResolver {
  constructor(private readonly locationStateService: LocationStateService) {}

  @Mutation(() => LocationState)
  createLocationState(@Args('data') data: CreateLocationStateInput) {
    return this.locationStateService.create(data);
  }

  @Query(() => [LocationState], { name: 'locationState' })
  findAll() {
    return this.locationStateService.findAll();
  }

  @Query(() => LocationState, { name: 'locationState' })
  findOne(@Args('id', { type: () => String }) id: string) {
    return this.locationStateService.findOne(id);
  }

  @Mutation(() => LocationState)
  updateLocationState(@Args('data') data: UpdateLocationStateInput) {
    return this.locationStateService.update(data.id, data);
  }

  @Mutation(() => LocationState)
  removeLocationState(@Args('id', { type: () => String }) id: string) {
    return this.locationStateService.remove(id);
  }
}
