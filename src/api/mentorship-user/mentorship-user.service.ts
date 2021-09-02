import { Injectable } from '@nestjs/common';
import { CreateMentorshipUserInput } from './dto/create-mentorship-user.input';
import { UpdateMentorshipUserInput } from './dto/update-mentorship-user.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MentorshipUserService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMentorshipUserInput) {
    return this.prisma.mentorshipUser.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        userType: data.userType,
        professionalSelfDescribe: data.professionalSelfDescribe,
        professionalLevel: data.professionalLevel,
        quarterStart: data.quarterStart,
        selfDescribe: data.selfDescribe,
        reviewStatus: data.reviewStatus,
        paired: data.paired,
        isHaveNullableFields: data.isHaveNullableFields,
      },
    });
  }

  async findAll() {
    return this.prisma.mentorshipUser.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.mentorshipUser.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateMentorshipUserInput) {
    return this.prisma.mentorshipUser.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        userType: data.userType,
        professionalSelfDescribe: data.professionalSelfDescribe,
        professionalLevel: data.professionalLevel,
        quarterStart: data.quarterStart,
        selfDescribe: data.selfDescribe,
        reviewStatus: data.reviewStatus,
        paired: data.paired,
        isHaveNullableFields: data.isHaveNullableFields,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.mentorshipUser.delete({ where: { id } });
  }
}
