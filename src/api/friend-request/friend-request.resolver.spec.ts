import { Test, TestingModule } from '@nestjs/testing';
import { FriendRequestResolver } from './friend-request.resolver';
import { FriendRequestService } from './friend-request.service';

describe('FriendRequestResolver', () => {
  let resolver: FriendRequestResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [FriendRequestResolver, FriendRequestService],
    }).compile();

    resolver = module.get<FriendRequestResolver>(FriendRequestResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
