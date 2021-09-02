import { Injectable } from '@nestjs/common';
import { CreateProjectApplicationInput } from './dto/create-project-application.input';
import { UpdateProjectApplicationInput } from './dto/update-project-application.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectApplicationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProjectApplicationInput) {
    return this.prisma.projectApplication.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        projectPosition: data.projectPosition && {
          connect: { id: data.projectPosition },
        },
        project: data.project && { connect: { id: data.project } },
        coverLetter: data.coverLetter,
        cv: data.cv && { connect: { id: data.cv } },
        status: data.status,
        saved: data.saved,
      },
    });
  }

  async findAll() {
    return this.prisma.projectApplication.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.projectApplication.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateProjectApplicationInput) {
    return this.prisma.projectApplication.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        projectPosition: data.projectPosition && {
          connect: { id: data.projectPosition },
        },
        project: data.project && { connect: { id: data.project } },
        coverLetter: data.coverLetter,
        cv: data.cv && { connect: { id: data.cv } },
        status: data.status,
        saved: data.saved,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.projectApplication.delete({ where: { id } });
  }
}
