import { Test, TestingModule } from '@nestjs/testing';
import { LocationStateResolver } from './location-state.resolver';
import { LocationStateService } from './location-state.service';

describe('LocationStateResolver', () => {
  let resolver: LocationStateResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationStateResolver, LocationStateService],
    }).compile();

    resolver = module.get<LocationStateResolver>(LocationStateResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
