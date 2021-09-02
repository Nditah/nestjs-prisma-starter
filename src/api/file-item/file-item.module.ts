import { Module } from '@nestjs/common';
import { FileItemService } from './file-item.service';
import { FileItemResolver } from './file-item.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [FileItemResolver, FileItemService],
})
export class FileItemModule {}
