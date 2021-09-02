import { Module } from '@nestjs/common';
import { ProjectApplicationService } from './project-application.service';
import { ProjectApplicationResolver } from './project-application.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ProjectApplicationResolver, ProjectApplicationService],
})
export class ProjectApplicationModule {}
