import { Module } from '@nestjs/common';
import { UserCircleService } from './user-circle.service';
import { UserCircleResolver } from './user-circle.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserCircleResolver, UserCircleService],
})
export class UserCircleModule {}
