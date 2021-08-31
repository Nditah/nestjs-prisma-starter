import { Module } from '@nestjs/common';
import { ProjectApplicationService } from './project-application.service';
import { ProjectApplicationResolver } from './project-application.resolver';

@Module({
  providers: [ProjectApplicationResolver, ProjectApplicationService]
})
export class ProjectApplicationModule {}
