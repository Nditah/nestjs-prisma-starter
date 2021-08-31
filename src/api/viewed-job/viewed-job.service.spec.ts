import { Test, TestingModule } from '@nestjs/testing';
import { ViewedJobService } from './viewed-job.service';

describe('ViewedJobService', () => {
  let service: ViewedJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewedJobService],
    }).compile();

    service = module.get<ViewedJobService>(ViewedJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
