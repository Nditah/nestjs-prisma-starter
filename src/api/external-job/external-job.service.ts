import { Injectable } from '@nestjs/common';
import { CreateExternalJobInput } from './dto/create-external-job.input';
import { UpdateExternalJobInput } from './dto/update-external-job.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExternalJobService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExternalJobInput) {
    return this.prisma.externalJob.create({
      data: {
        categories: data.categories,
        jobLink: data.jobLink,
        jobs: { create: data.jobs },
        externalCompany: { create: data.externalCompany },
      },
    });
  }

  async findAll() {
    return this.prisma.externalJob.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.externalJob.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateExternalJobInput) {
    return this.prisma.externalJob.update({
      data: {
        categories: data.categories,
        jobLink: data.jobLink,
        jobs: { create: data.jobs },
        externalCompany: { create: data.externalCompany },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.externalJob.delete({ where: { id } });
  }
}
