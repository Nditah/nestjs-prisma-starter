import { Module } from '@nestjs/common';
import { FileItemService } from './file-item.service';
import { FileItemResolver } from './file-item.resolver';

@Module({
  providers: [FileItemResolver, FileItemService]
})
export class FileItemModule {}
