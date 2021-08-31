import { Module } from '@nestjs/common';
import { BookmarkedProjectService } from './bookmarked-project.service';
import { BookmarkedProjectResolver } from './bookmarked-project.resolver';

@Module({
  providers: [BookmarkedProjectResolver, BookmarkedProjectService]
})
export class BookmarkedProjectModule {}
