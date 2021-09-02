import { Module } from '@nestjs/common';
import { ExternalJobService } from './external-job.service';
import { ExternalJobResolver } from './external-job.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ExternalJobResolver, ExternalJobService],
})
export class ExternalJobModule {}
