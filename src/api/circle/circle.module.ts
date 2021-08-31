import { Module } from '@nestjs/common';
import { CircleService } from './circle.service';
import { CircleResolver } from './circle.resolver';

@Module({
  providers: [CircleResolver, CircleService]
})
export class CircleModule {}
