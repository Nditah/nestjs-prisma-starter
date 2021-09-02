import { Module } from '@nestjs/common';
import { BookmarkedProjectService } from './bookmarked-project.service';
import { BookmarkedProjectResolver } from './bookmarked-project.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [BookmarkedProjectResolver, BookmarkedProjectService],
})
export class BookmarkedProjectModule {}
