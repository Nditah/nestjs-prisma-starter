import { Module } from '@nestjs/common';
import { TalentService } from './talent.service';
import { TalentResolver } from './talent.resolver';

@Module({
  providers: [TalentResolver, TalentService]
})
export class TalentModule {}
