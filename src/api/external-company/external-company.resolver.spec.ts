import { Test, TestingModule } from '@nestjs/testing';
import { ExternalCompanyResolver } from './external-company.resolver';
import { ExternalCompanyService } from './external-company.service';

describe('ExternalCompanyResolver', () => {
  let resolver: ExternalCompanyResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ExternalCompanyResolver, ExternalCompanyService],
    }).compile();

    resolver = module.get<ExternalCompanyResolver>(ExternalCompanyResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
