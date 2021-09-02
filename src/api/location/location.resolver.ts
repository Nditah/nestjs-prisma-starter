import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { LocationService } from './location.service';
import { Location } from './entities/location.entity';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';

@Resolver(() => Location)
export class LocationResolver {
  constructor(private readonly locationService: LocationService) {}

  @Mutation(() => Location)
  createLocation(@Args('data') data: CreateLocationInput) {
    return this.locationService.create(data);
  }

  @Query(() => [Location], { name: 'location' })
  findAll() {
    return this.locationService.findAll();
  }

  @Query(() => Location, { name: 'location' })
  findOne(@Args('id', { type: () => String }) id: number) {
    return this.locationService.findOne(id);
  }

  @Mutation(() => Location)
  updateLocation(@Args('data') data: UpdateLocationInput) {
    return this.locationService.update(data.id, data);
  }

  @Mutation(() => Location)
  removeLocation(@Args('id', { type: () => String }) id: number) {
    return this.locationService.remove(id);
  }
}
