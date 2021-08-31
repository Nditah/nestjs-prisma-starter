import { Module } from '@nestjs/common';
import { AwardService } from './award.service';
import { AwardResolver } from './award.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [AwardResolver, AwardService]
})
export class AwardModule {}
