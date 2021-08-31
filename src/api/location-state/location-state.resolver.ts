import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LocationStateService } from './location-state.service';
import { LocationState } from './entities/location-state.entity';
import { CreateLocationStateInput } from './dto/create-location-state.input';
import { UpdateLocationStateInput } from './dto/update-location-state.input';

@Resolver(() => LocationState)
export class LocationStateResolver {
  constructor(private readonly locationStateService: LocationStateService) {}

  @Mutation(() => LocationState)
  createLocationState(@Args('createLocationStateInput') createLocationStateInput: CreateLocationStateInput) {
    return this.locationStateService.create(createLocationStateInput);
  }

  @Query(() => [LocationState], { name: 'locationState' })
  findAll() {
    return this.locationStateService.findAll();
  }

  @Query(() => LocationState, { name: 'locationState' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.locationStateService.findOne(id);
  }

  @Mutation(() => LocationState)
  updateLocationState(@Args('updateLocationStateInput') updateLocationStateInput: UpdateLocationStateInput) {
    return this.locationStateService.update(updateLocationStateInput.id, updateLocationStateInput);
  }

  @Mutation(() => LocationState)
  removeLocationState(@Args('id', { type: () => Int }) id: number) {
    return this.locationStateService.remove(id);
  }
}
