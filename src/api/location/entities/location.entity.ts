import { ObjectType, Field, Float, InputType } from '@nestjs/graphql';
import { Job } from 'src/api/job/entities/job.entity';
import { LocationCountry } from 'src/api/location-country/entities/location-country.entity';
import { LocationState } from 'src/api/location-state/entities/location-state.entity';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@InputType('LocationInput')
@ObjectType({ description: 'Location model' })
export class Location extends BaseModel {
  @Field(() => String, { description: 'Location city' })
  city: string;

  @Field(() => Float, { description: 'Location latitude' })
  latitude: number;

  @Field(() => Float, { description: 'Location longitude' })
  longitude: number;

  @Field(() => LocationCountry, { description: 'Location country' })
  country: LocationCountry;

  @Field(() => LocationState, { description: 'Location state' })
  state: LocationState;

  @Field(() => [User], { description: 'Location users' })
  users: User[];

  @Field(() => [Job], { description: 'Location jobs' })
  jobs: Job[];
}
