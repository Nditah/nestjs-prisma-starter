import { Test, TestingModule } from '@nestjs/testing';
import { BookmarkedJobService } from './bookmarked-job.service';

describe('BookmarkedJobService', () => {
  let service: BookmarkedJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [BookmarkedJobService],
    }).compile();

    service = module.get<BookmarkedJobService>(BookmarkedJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
