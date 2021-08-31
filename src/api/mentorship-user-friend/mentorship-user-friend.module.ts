import { Module } from '@nestjs/common';
import { MentorshipUserFriendService } from './mentorship-user-friend.service';
import { MentorshipUserFriendResolver } from './mentorship-user-friend.resolver';

@Module({
  providers: [MentorshipUserFriendResolver, MentorshipUserFriendService]
})
export class MentorshipUserFriendModule {}
