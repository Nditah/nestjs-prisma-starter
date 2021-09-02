import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateLocationCountryInput } from './create-location-country.input';

@InputType()
export class UpdateLocationCountryInput extends PartialType(
  CreateLocationCountryInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
