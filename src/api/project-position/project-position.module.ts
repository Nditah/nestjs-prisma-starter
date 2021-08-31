import { Module } from '@nestjs/common';
import { ProjectPositionService } from './project-position.service';
import { ProjectPositionResolver } from './project-position.resolver';

@Module({
  providers: [ProjectPositionResolver, ProjectPositionService]
})
export class ProjectPositionModule {}
