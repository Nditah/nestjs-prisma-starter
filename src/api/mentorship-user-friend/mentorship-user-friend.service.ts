import { Injectable } from '@nestjs/common';
import { CreateMentorshipUserFriendInput } from './dto/create-mentorship-user-friend.input';
import { UpdateMentorshipUserFriendInput } from './dto/update-mentorship-user-friend.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class MentorshipUserFriendService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateMentorshipUserFriendInput) {
    return this.prisma.mentorshipUserFriend.create({
      data: {
        requester: data.requester && { connect: { id: data.requester } },
        receiver: data.receiver && { connect: { id: data.receiver } },
        status: data.status,
      },
    });
  }

  async findAll() {
    return this.prisma.mentorshipUserFriend.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.mentorshipUserFriend.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateMentorshipUserFriendInput) {
    return this.prisma.mentorshipUserFriend.update({
      data: {
        requester: data.requester && { connect: { id: data.requester } },
        receiver: data.receiver && { connect: { id: data.receiver } },
        status: data.status,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.mentorshipUserFriend.delete({ where: { id } });
  }
}
