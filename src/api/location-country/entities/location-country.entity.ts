import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Location } from 'src/api/location/entities/location.entity';
import { BaseModel } from 'src/models/base.model';

@InputType('LocationCountryInput')
@ObjectType({ description: 'LocationCountry model' })
export class LocationCountry extends BaseModel {
  @Field(() => String, { description: 'Location Country name' })
  name: string;

  @Field(() => String, { description: 'Location Country iso2' })
  iso2: string;

  @Field(() => String, { description: 'Location Country iso3' })
  iso3: string;

  @Field(() => [Location], { description: 'Location Country locations' })
  locations: Location[];
}
