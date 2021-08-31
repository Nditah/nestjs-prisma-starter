import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkedProjectResolver } from './bookmarked-project.resolver';
import { BookmarkedProjectService } from './bookmarked-project.service';

describe('BookmarkedProjectResolver', () => {
  let resolver: BookmarkedProjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarkedProjectResolver, BookmarkedProjectService],
    }).compile();

    resolver = module.get<BookmarkedProjectResolver>(BookmarkedProjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
