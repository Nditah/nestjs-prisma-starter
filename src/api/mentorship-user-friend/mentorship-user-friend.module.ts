import { Module } from '@nestjs/common';
import { MentorshipUserFriendService } from './mentorship-user-friend.service';
import { MentorshipUserFriendResolver } from './mentorship-user-friend.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [MentorshipUserFriendResolver, MentorshipUserFriendService],
})
export class MentorshipUserFriendModule {}
