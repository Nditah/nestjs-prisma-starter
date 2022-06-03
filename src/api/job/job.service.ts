import { Injectable } from '@nestjs/common';
import { CreateJobInput } from './dto/create-job.input';
import { UpdateJobInput } from './dto/update-job.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JobService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateJobInput) {
    return this.prisma.job.create({
      data: {
        status: data.status,
        category: data.category,
        title: data.title,
        employmentType: data.employmentType,
        description: data.description,
        location: data.location && { connect: { id: data.location } },
        responsibility: data.responsibility,
        requirements: data.requirements,
        salaryMin: data.salaryMin,
        salaryMax: data.salaryMax,
        experienceLevel: data.experienceLevel,
        screeningQuestions: data.screeningQuestions,
        tags: data.tags,
        posterDepartment: data.posterDepartment,
        posterFirstName: data.posterFirstName,
        posterLastName: data.posterLastName,
        posterEmail: data.posterEmail,
        posterPhone: data.posterPhone,
        finished: data.finished,
        // externalJob: data.externalJob && { connect: { id: data.externalJob } },
      },
    });
  }

  async findAll() {
    return this.prisma.job.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.job.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateJobInput) {
    return this.prisma.job.update({
      data: {
        status: data.status,
        category: data.category,
        title: data.title,
        employmentType: data.employmentType,
        description: data.description,
        location: data.location && { connect: { id: data.location } },
        responsibility: data.responsibility,
        requirements: data.requirements,
        salaryMin: data.salaryMin,
        salaryMax: data.salaryMax,
        experienceLevel: data.experienceLevel,
        screeningQuestions: data.screeningQuestions,
        tags: data.tags,
        posterDepartment: data.posterDepartment,
        posterFirstName: data.posterFirstName,
        posterLastName: data.posterLastName,
        posterEmail: data.posterEmail,
        posterPhone: data.posterPhone,
        finished: data.finished,
        // externalJob: data.externalJob && { connect: { id: data.externalJob } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.job.delete({ where: { id } });
  }
}
