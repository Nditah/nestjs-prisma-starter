import { Injectable } from '@nestjs/common';
import { CreateJobApplicationInput } from './dto/create-job-application.input';
import { UpdateJobApplicationInput } from './dto/update-job-application.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class JobApplicationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateJobApplicationInput) {
    return this.prisma.jobApplication.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        job: data.job && { connect: { id: data.job } },
        coverLetter: data.coverLetter,
        cv: data.cv && { connect: { id: data.cv } },
        screeningAnswers: data.screeningAnswers,
        status: data.status,
        saved: data.saved,
      },
    });
  }

  async findAll() {
    return this.prisma.jobApplication.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.jobApplication.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateJobApplicationInput) {
    return this.prisma.jobApplication.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        job: data.job && { connect: { id: data.job } },
        coverLetter: data.coverLetter,
        cv: data.cv && { connect: { id: data.cv } },
        screeningAnswers: data.screeningAnswers,
        status: data.status,
        saved: data.saved,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.jobApplication.delete({ where: { id } });
  }
}
