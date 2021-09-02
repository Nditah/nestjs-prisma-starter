import { Module } from '@nestjs/common';
import { ProjectPositionService } from './project-position.service';
import { ProjectPositionResolver } from './project-position.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProjectPositionResolver, ProjectPositionService],
})
export class ProjectPositionModule {}
