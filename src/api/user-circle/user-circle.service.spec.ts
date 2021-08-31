import { Test, TestingModule } from '@nestjs/testing';
import { UserCircleService } from './user-circle.service';

describe('UserCircleService', () => {
  let service: UserCircleService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCircleService],
    }).compile();

    service = module.get<UserCircleService>(UserCircleService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
