import { Test, TestingModule } from '@nestjs/testing';
import { ViewedJobResolver } from './viewed-job.resolver';
import { ViewedJobService } from './viewed-job.service';

describe('ViewedJobResolver', () => {
  let resolver: ViewedJobResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewedJobResolver, ViewedJobService],
    }).compile();

    resolver = module.get<ViewedJobResolver>(ViewedJobResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
