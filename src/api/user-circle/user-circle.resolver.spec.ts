import { Test, TestingModule } from '@nestjs/testing';
import { UserCircleResolver } from './user-circle.resolver';
import { UserCircleService } from './user-circle.service';

describe('UserCircleResolver', () => {
  let resolver: UserCircleResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserCircleResolver, UserCircleService],
    }).compile();

    resolver = module.get<UserCircleResolver>(UserCircleResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
