import { Test, TestingModule } from '@nestjs/testing';
import { ProjectPositionService } from './project-position.service';

describe('ProjectPositionService', () => {
  let service: ProjectPositionService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ProjectPositionService],
    }).compile();

    service = module.get<ProjectPositionService>(ProjectPositionService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
