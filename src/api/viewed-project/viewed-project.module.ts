import { Module } from '@nestjs/common';
import { ViewedProjectService } from './viewed-project.service';
import { ViewedProjectResolver } from './viewed-project.resolver';

@Module({
  providers: [ViewedProjectResolver, ViewedProjectService]
})
export class ViewedProjectModule {}
