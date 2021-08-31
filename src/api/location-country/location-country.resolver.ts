import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { LocationCountryService } from './location-country.service';
import { LocationCountry } from './entities/location-country.entity';
import { CreateLocationCountryInput } from './dto/create-location-country.input';
import { UpdateLocationCountryInput } from './dto/update-location-country.input';

@Resolver(() => LocationCountry)
export class LocationCountryResolver {
  constructor(private readonly locationCountryService: LocationCountryService) {}

  @Mutation(() => LocationCountry)
  createLocationCountry(@Args('createLocationCountryInput') createLocationCountryInput: CreateLocationCountryInput) {
    return this.locationCountryService.create(createLocationCountryInput);
  }

  @Query(() => [LocationCountry], { name: 'locationCountry' })
  findAll() {
    return this.locationCountryService.findAll();
  }

  @Query(() => LocationCountry, { name: 'locationCountry' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.locationCountryService.findOne(id);
  }

  @Mutation(() => LocationCountry)
  updateLocationCountry(@Args('updateLocationCountryInput') updateLocationCountryInput: UpdateLocationCountryInput) {
    return this.locationCountryService.update(updateLocationCountryInput.id, updateLocationCountryInput);
  }

  @Mutation(() => LocationCountry)
  removeLocationCountry(@Args('id', { type: () => Int }) id: number) {
    return this.locationCountryService.remove(id);
  }
}
