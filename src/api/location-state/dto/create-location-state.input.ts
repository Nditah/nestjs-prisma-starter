import { InputType, Field } from '@nestjs/graphql';
import { Location } from 'src/api/location/entities/location.entity';

@InputType()
export class CreateLocationStateInput {
  @Field(() => String, { description: 'Location State name' })
  name: string;

  @Field(() => String, { description: 'Location State abbreviation' })
  abbreviation: string;

  @Field(() => [Location], { description: 'Location State locations' })
  locations: Location[];
}
