import { Module } from '@nestjs/common';
import { PictureService } from './picture.service';
import { PictureResolver } from './picture.resolver';

@Module({
  providers: [PictureResolver, PictureService]
})
export class PictureModule {}
