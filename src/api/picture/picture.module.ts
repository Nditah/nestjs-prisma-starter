import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { PictureResolver } from './picture.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [PictureResolver, PictureService],
})
export class PictureModule {}
