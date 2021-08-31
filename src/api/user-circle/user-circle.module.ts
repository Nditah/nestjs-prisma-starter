import { Module } from '@nestjs/common';
import { UserCircleService } from './user-circle.service';
import { UserCircleResolver } from './user-circle.resolver';

@Module({
  providers: [UserCircleResolver, UserCircleService]
})
export class UserCircleModule {}
