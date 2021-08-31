import { Module } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { FriendRequestResolver } from './friend-request.resolver';

@Module({
  providers: [FriendRequestResolver, FriendRequestService]
})
export class FriendRequestModule {}
