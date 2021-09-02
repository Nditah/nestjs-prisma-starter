import { Module } from '@nestjs/common';
import { LocationCountryService } from './location-country.service';
import { LocationCountryResolver } from './location-country.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LocationCountryResolver, LocationCountryService],
})
export class LocationCountryModule {}
