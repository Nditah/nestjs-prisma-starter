import { Injectable } from '@nestjs/common';
import { CreateCircleInput } from './dto/create-circle.input';
import { UpdateCircleInput } from './dto/update-circle.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CircleService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCircleInput) {
    return this.prisma.circle.create({
      data: {
        name: data.name,
        title: data.title,
        logo: data.logo,
        description: data.description,
      },
    });
  }

  async findAll() {
    return this.prisma.circle.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.circle.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateCircleInput) {
    return this.prisma.circle.update({
      data: {
        name: data.name,
        title: data.title,
        logo: data.logo,
        description: data.description,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.circle.delete({ where: { id } });
  }
}
