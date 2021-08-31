import { Module } from '@nestjs/common';
import { MentorshipUserService } from './mentorship-user.service';
import { MentorshipUserResolver } from './mentorship-user.resolver';

@Module({
  providers: [MentorshipUserResolver, MentorshipUserService]
})
export class MentorshipUserModule {}
