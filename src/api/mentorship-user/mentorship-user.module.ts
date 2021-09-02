import { Module } from '@nestjs/common';
import { MentorshipUserService } from './mentorship-user.service';
import { MentorshipUserResolver } from './mentorship-user.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MentorshipUserResolver, MentorshipUserService],
})
export class MentorshipUserModule {}
