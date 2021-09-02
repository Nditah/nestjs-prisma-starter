import { Injectable } from '@nestjs/common';
import { CreateFriendRequestInput } from './dto/create-friend-request.input';
import { UpdateFriendRequestInput } from './dto/update-friend-request.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FriendRequestService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateFriendRequestInput) {
    return 'This action adds a new friendRequest';
  }

  findAll() {
    return `This action returns all friendRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} friendRequest`;
  }

  update(id: number, data: UpdateFriendRequestInput) {
    return `This action updates a #${id} friendRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} friendRequest`;
  }
}
