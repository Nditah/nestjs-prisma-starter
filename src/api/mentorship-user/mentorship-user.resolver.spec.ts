import { Test, TestingModule } from '@nestjs/testing';
import { MentorshipUserResolver } from './mentorship-user.resolver';
import { MentorshipUserService } from './mentorship-user.service';

describe('MentorshipUserResolver', () => {
  let resolver: MentorshipUserResolver;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorshipUserResolver, MentorshipUserService],
    }).compile();

    resolver = module.get<MentorshipUserResolver>(MentorshipUserResolver);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });
});
