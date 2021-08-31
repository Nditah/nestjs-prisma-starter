import { Test, TestingModule } from '@nestjs/testing';
import { LocationStateService } from './location-state.service';

describe('LocationStateService', () => {
  let service: LocationStateService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [LocationStateService],
    }).compile();

    service = module.get<LocationStateService>(LocationStateService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
