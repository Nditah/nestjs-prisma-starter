import { Module } from '@nestjs/common';
import { LocationStateService } from './location-state.service';
import { LocationStateResolver } from './location-state.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [LocationStateResolver, LocationStateService],
})
export class LocationStateModule {}
