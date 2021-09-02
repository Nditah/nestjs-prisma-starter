import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Location } from 'src/api/location/entities/location.entity';
import { BaseModel } from 'src/models/base.model';

@InputType('LocationStateInput')
@ObjectType({ description: 'LocationState model' })
export class LocationState extends BaseModel {
  @Field(() => String, { description: 'Location State name' })
  name: string;

  @Field(() => String, { description: 'Location State abbreviation' })
  abbreviation: string;

  @Field(() => [Location], { description: 'Location State locations' })
  locations: Location[];
}
