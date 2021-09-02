import { Module } from '@nestjs/common';
import { TalentService } from './talent.service';
import { TalentResolver } from './talent.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [TalentResolver, TalentService],
})
export class TalentModule {}
