import { Module } from '@nestjs/common';
import { FriendRequestService } from './friend-request.service';
import { FriendRequestResolver } from './friend-request.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FriendRequestResolver, FriendRequestService],
})
export class FriendRequestModule {}
