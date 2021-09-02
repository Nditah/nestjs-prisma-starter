import { Module } from '@nestjs/common';
import { ViewedProjectService } from './viewed-project.service';
import { ViewedProjectResolver } from './viewed-project.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ViewedProjectResolver, ViewedProjectService],
})
export class ViewedProjectModule {}
