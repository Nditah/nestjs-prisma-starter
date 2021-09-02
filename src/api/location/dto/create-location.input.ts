import { InputType, Float, Field } from '@nestjs/graphql';
import { LocationCountry } from 'src/api/location-country/entities/location-country.entity';
import { LocationState } from 'src/api/location-state/entities/location-state.entity';

@InputType()
export class CreateLocationInput {
  @Field(() => String, { description: 'Location city' })
  city: string;

  @Field(() => Float, { description: 'Location latitude' })
  latitude: number;

  @Field(() => Float, { description: 'Location longitude' })
  longitude: number;

  @Field(() => LocationCountry, { description: 'Location country' })
  country: string;

  @Field(() => LocationState, { description: 'Location state' })
  state: string;
}
