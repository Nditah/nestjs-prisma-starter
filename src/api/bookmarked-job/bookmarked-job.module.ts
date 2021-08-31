import { Module } from '@nestjs/common';
import { BookmarkedJobService } from './bookmarked-job.service';
import { BookmarkedJobResolver } from './bookmarked-job.resolver';

@Module({
  providers: [BookmarkedJobResolver, BookmarkedJobService]
})
export class BookmarkedJobModule {}
