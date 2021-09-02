import { Injectable } from '@nestjs/common';
import { CreateBookmarkedJobInput } from './dto/create-bookmarked-job.input';
import { UpdateBookmarkedJobInput } from './dto/update-bookmarked-job.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BookmarkedJobService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBookmarkedJobInput) {
    return this.prisma.bookmarkedJob.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        job: data.job && { connect: { id: data.job } },
      },
    });
  }

  async findAll() {
    return this.prisma.bookmarkedJob.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.bookmarkedJob.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateBookmarkedJobInput) {
    return this.prisma.bookmarkedJob.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        job: data.job && { connect: { id: data.job } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.bookmarkedJob.delete({ where: { id } });
  }
}
