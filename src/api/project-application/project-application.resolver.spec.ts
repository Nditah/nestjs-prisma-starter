import { Test, TestingModule } from '@nestjs/testing';
import { ProjectApplicationResolver } from './project-application.resolver';
import { ProjectApplicationService } from './project-application.service';

describe('ProjectApplicationResolver', () => {
  let resolver: ProjectApplicationResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectApplicationResolver, ProjectApplicationService],
    }).compile();

    resolver = module.get<ProjectApplicationResolver>(ProjectApplicationResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
