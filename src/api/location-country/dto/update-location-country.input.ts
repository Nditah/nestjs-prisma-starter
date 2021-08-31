import { CreateLocationCountryInput } from './create-location-country.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateLocationCountryInput extends PartialType(CreateLocationCountryInput) {
  @Field(() => Int)
  id: number;
}
