import { Module } from '@nestjs/common';
import { EducationService } from './education.service';
import { EducationResolver } from './education.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [EducationResolver, EducationService],
})
export class EducationModule {}
