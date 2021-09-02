import { Injectable } from '@nestjs/common';
import { CreateFriendRequestInput } from './dto/create-friend-request.input';
import { UpdateFriendRequestInput } from './dto/update-friend-request.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FriendRequestService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFriendRequestInput) {
    return this.prisma.friendRequest.create({
      data: {
        status: data.status,
        requester: data.requester && { connect: { id: data.requester } },
        receiver: data.receiver && { connect: { id: data.receiver } },
      },
    });
  }

  async findAll() {
    return this.prisma.friendRequest.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.friendRequest.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateFriendRequestInput) {
    return this.prisma.friendRequest.update({
      data: {
        status: data.status,
        requester: data.requester && { connect: { id: data.requester } },
        receiver: data.receiver && { connect: { id: data.receiver } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.friendRequest.delete({ where: { id } });
  }
}
