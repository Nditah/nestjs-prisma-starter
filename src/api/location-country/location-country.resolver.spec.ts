import { Test, TestingModule } from '@nestjs/testing';
import { LocationCountryResolver } from './location-country.resolver';
import { LocationCountryService } from './location-country.service';

describe('LocationCountryResolver', () => {
  let resolver: LocationCountryResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationCountryResolver, LocationCountryService],
    }).compile();

    resolver = module.get<LocationCountryResolver>(LocationCountryResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
