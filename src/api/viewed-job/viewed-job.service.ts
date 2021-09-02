import { Injectable } from '@nestjs/common';
import { CreateViewedJobInput } from './dto/create-viewed-job.input';
import { UpdateViewedJobInput } from './dto/update-viewed-job.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ViewedJobService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateViewedJobInput) {
    return this.prisma.viewedJob.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        job: data.job && { connect: { id: data.job } },
      },
    });
  }

  async findAll() {
    return this.prisma.viewedJob.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.viewedJob.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateViewedJobInput) {
    return this.prisma.viewedJob.update({
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
    return this.prisma.viewedJob.delete({ where: { id } });
  }
}
