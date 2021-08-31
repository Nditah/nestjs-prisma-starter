import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkedProjectService } from './bookmarked-project.service';

describe('BookmarkedProjectService', () => {
  let service: BookmarkedProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarkedProjectService],
    }).compile();

    service = module.get<BookmarkedProjectService>(BookmarkedProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
