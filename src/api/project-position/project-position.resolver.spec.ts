import { Test, TestingModule } from '@nestjs/testing';
import { ProjectPositionResolver } from './project-position.resolver';
import { ProjectPositionService } from './project-position.service';

describe('ProjectPositionResolver', () => {
  let resolver: ProjectPositionResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectPositionResolver, ProjectPositionService],
    }).compile();

    resolver = module.get<ProjectPositionResolver>(ProjectPositionResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
