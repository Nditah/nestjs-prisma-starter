import { Test, TestingModule } from '@nestjs/testing';
import { MentorshipUserFriendService } from './mentorship-user-friend.service';

describe('MentorshipUserFriendService', () => {
  let service: MentorshipUserFriendService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorshipUserFriendService],
    }).compile();

    service = module.get<MentorshipUserFriendService>(MentorshipUserFriendService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
