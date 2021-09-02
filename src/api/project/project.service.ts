import { Injectable } from '@nestjs/common';
import { CreateProjectInput } from './dto/create-project.input';
import { UpdateProjectInput } from './dto/update-project.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProjectInput) {
    return this.prisma.project.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        coverImage: data.coverImage,
        title: data.title,
        type: data.type,
        description: data.description,
        keywords: data.keywords,
        paid: data.paid,
        location: data.location && { connect: { id: data.location } },
        status: data.status,
        projectPositions: { create: data.projectPositions },
        documents: { create: data.documents },
        schedule: data.schedule,
        housingDetails: data.housingDetails,
        childElderDetails: data.childElderDetails,
        finished: data.finished,
      },
    });
  }

  async findAll() {
    return this.prisma.project.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.project.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateProjectInput) {
    return this.prisma.project.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        coverImage: data.coverImage,
        title: data.title,
        type: data.type,
        description: data.description,
        keywords: data.keywords,
        paid: data.paid,
        location: data.location && { connect: { id: data.location } },
        status: data.status,
        projectPositions: { create: data.projectPositions },
        documents: { create: data.documents },
        schedule: data.schedule,
        housingDetails: data.housingDetails,
        childElderDetails: data.childElderDetails,
        finished: data.finished,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.project.delete({ where: { id } });
  }
}
