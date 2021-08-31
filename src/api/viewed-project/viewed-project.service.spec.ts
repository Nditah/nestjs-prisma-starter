import { Test, TestingModule } from '@nestjs/testing';
import { ViewedProjectService } from './viewed-project.service';

describe('ViewedProjectService', () => {
  let service: ViewedProjectService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ViewedProjectService],
    }).compile();

    service = module.get<ViewedProjectService>(ViewedProjectService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
