import { Module } from '@nestjs/common';
import { ExperienceService } from './experience.service';
import { ExperienceResolver } from './experience.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ExperienceResolver, ExperienceService],
})
export class ExperienceModule {}
