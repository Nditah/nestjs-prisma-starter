import { Injectable } from '@nestjs/common';
import { CreateAwardInput } from './dto/create-award.input';
import { UpdateAwardInput } from './dto/update-award.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class AwardService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateAwardInput) {
    return this.prisma.award.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        title: data.title,
        organization: data.organization,
        issuedYear: data.issuedYear,
      },
    });
  }

  async findAll() {
    return this.prisma.award.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.award.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateAwardInput) {
    return this.prisma.award.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        title: data.title,
        organization: data.organization,
        issuedYear: data.issuedYear,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.award.delete({ where: { id } });
  }
}
