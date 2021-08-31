import { Test, TestingModule } from '@nestjs/testing';
import { ViewedProjectResolver } from './viewed-project.resolver';
import { ViewedProjectService } from './viewed-project.service';

describe('ViewedProjectResolver', () => {
  let resolver: ViewedProjectResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewedProjectResolver, ViewedProjectService],
    }).compile();

    resolver = module.get<ViewedProjectResolver>(ViewedProjectResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
