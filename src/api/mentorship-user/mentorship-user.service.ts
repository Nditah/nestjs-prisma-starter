import { Injectable } from '@nestjs/common';
import { CreateMentorshipUserInput } from './dto/create-mentorship-user.input';
import { UpdateMentorshipUserInput } from './dto/update-mentorship-user.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MentorshipUserService {
  create(createMentorshipUserInput: CreateMentorshipUserInput) {
    return 'This action adds a new mentorshipUser';
  }

  findAll() {
    return `This action returns all mentorshipUser`;
  }

  findOne(id: number) {
    return `This action returns a #${id} mentorshipUser`;
  }

  update(id: number, updateMentorshipUserInput: UpdateMentorshipUserInput) {
    return `This action updates a #${id} mentorshipUser`;
  }

  remove(id: number) {
    return `This action removes a #${id} mentorshipUser`;
  }
}
