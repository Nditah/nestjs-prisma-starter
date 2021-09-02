import { Module } from '@nestjs/common';
import { ViewedJobService } from './viewed-job.service';
import { ViewedJobResolver } from './viewed-job.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ViewedJobResolver, ViewedJobService],
})
export class ViewedJobModule {}
