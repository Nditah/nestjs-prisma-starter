import { Module } from '@nestjs/common';
import { UserResolver } from './user.resolver';
import { UserService } from '../../services/user.service';
import { PasswordService } from '../../services/password.service';
import { PrismaModule } from './../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [UserResolver, UserService, PasswordService],
})
export class UserModule {}
