import { Test, TestingModule } from '@nestjs/testing';
import { MentorshipUserService } from './mentorship-user.service';

describe('MentorshipUserService', () => {
  let service: MentorshipUserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [MentorshipUserService],
    }).compile();

    service = module.get<MentorshipUserService>(MentorshipUserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
