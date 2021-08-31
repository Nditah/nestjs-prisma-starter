import { Module } from '@nestjs/common';
import { LocationStateService } from './location-state.service';
import { LocationStateResolver } from './location-state.resolver';

@Module({
  providers: [LocationStateResolver, LocationStateService]
})
export class LocationStateModule {}
