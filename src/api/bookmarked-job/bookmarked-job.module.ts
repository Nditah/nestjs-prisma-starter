import { Module } from '@nestjs/common';
import { BookmarkedJobService } from './bookmarked-job.service';
import { BookmarkedJobResolver } from './bookmarked-job.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BookmarkedJobResolver, BookmarkedJobService],
})
export class BookmarkedJobModule {}
