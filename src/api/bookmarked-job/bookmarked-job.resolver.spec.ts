import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkedJobResolver } from './bookmarked-job.resolver';
import { BookmarkedJobService } from './bookmarked-job.service';

describe('BookmarkedJobResolver', () => {
  let resolver: BookmarkedJobResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarkedJobResolver, BookmarkedJobService],
    }).compile();

    resolver = module.get<BookmarkedJobResolver>(BookmarkedJobResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
