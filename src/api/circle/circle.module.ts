import { Module } from '@nestjs/common';
import { CircleService } from './circle.service';
import { CircleResolver } from './circle.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [CircleResolver, CircleService],
})
export class CircleModule {}
