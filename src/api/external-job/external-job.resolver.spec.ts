import { Test, TestingModule } from '@nestjs/testing';
import { ExternalJobResolver } from './external-job.resolver';
import { ExternalJobService } from './external-job.service';

describe('ExternalJobResolver', () => {
  let resolver: ExternalJobResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalJobResolver, ExternalJobService],
    }).compile();

    resolver = module.get<ExternalJobResolver>(ExternalJobResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
