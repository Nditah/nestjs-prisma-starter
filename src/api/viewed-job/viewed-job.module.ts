import { Module } from '@nestjs/common';
import { ViewedJobService } from './viewed-job.service';
import { ViewedJobResolver } from './viewed-job.resolver';

@Module({
  providers: [ViewedJobResolver, ViewedJobService]
})
export class ViewedJobModule {}
