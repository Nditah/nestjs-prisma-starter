import { Test, TestingModule } from '@nestjs/testing';
import { MentorshipUserFriendResolver } from './mentorship-user-friend.resolver';
import { MentorshipUserFriendService } from './mentorship-user-friend.service';

describe('MentorshipUserFriendResolver', () => {
  let resolver: MentorshipUserFriendResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorshipUserFriendResolver, MentorshipUserFriendService],
    }).compile();

    resolver = module.get<MentorshipUserFriendResolver>(MentorshipUserFriendResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
