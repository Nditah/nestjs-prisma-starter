import { Module } from '@nestjs/common';
import { ExternalJobService } from './external-job.service';
import { ExternalJobResolver } from './external-job.resolver';

@Module({
  providers: [ExternalJobResolver, ExternalJobService]
})
export class ExternalJobModule {}
