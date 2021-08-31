import { Test, TestingModule } from '@nestjs/testing';
import { ExternalCompanyService } from './external-company.service';

describe('ExternalCompanyService', () => {
  let service: ExternalCompanyService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalCompanyService],
    }).compile();

    service = module.get<ExternalCompanyService>(ExternalCompanyService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
