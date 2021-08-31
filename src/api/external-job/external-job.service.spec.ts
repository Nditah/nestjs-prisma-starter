import { Test, TestingModule } from '@nestjs/testing';
import { ExternalJobService } from './external-job.service';

describe('ExternalJobService', () => {
  let service: ExternalJobService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalJobService],
    }).compile();

    service = module.get<ExternalJobService>(ExternalJobService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
