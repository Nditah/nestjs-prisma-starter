import { Injectable } from '@nestjs/common';
import { CreateUserCircleInput } from './dto/create-user-circle.input';
import { UpdateUserCircleInput } from './dto/update-user-circle.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserCircleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateUserCircleInput) {
    return this.prisma.userCircle.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        circle: data.circle && { connect: { id: data.circle } },
        status: data.status,
      },
    });
  }

  async findAll() {
    return this.prisma.userCircle.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.userCircle.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateUserCircleInput) {
    return this.prisma.userCircle.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        circle: data.circle && { connect: { id: data.circle } },
        status: data.status,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.userCircle.delete({ where: { id } });
  }
}
