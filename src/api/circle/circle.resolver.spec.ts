import { Test, TestingModule } from '@nestjs/testing';
import { CircleResolver } from './circle.resolver';
import { CircleService } from './circle.service';

describe('CircleResolver', () => {
  let resolver: CircleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CircleResolver, CircleService],
    }).compile();

    resolver = module.get<CircleResolver>(CircleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
