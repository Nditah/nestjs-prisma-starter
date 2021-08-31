import { Module } from '@nestjs/common';
import { LocationCountryService } from './location-country.service';
import { LocationCountryResolver } from './location-country.resolver';

@Module({
  providers: [LocationCountryResolver, LocationCountryService]
})
export class LocationCountryModule {}
