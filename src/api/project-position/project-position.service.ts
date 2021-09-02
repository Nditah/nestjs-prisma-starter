import { Injectable } from '@nestjs/common';
import { CreateProjectPositionInput } from './dto/create-project-position.input';
import { UpdateProjectPositionInput } from './dto/update-project-position.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectPositionService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateProjectPositionInput) {
    return this.prisma.projectPosition.create({
      data: {
        project: data.project && { connect: { id: data.project } },
        type: data.type,
        roleDescription: data.roleDescription,
        gender: data.gender,
        additionalRequirements: data.additionalRequirements,
        minAge: data.minAge,
        maxAge: data.maxAge,
        status: data.status,
        finished: data.finished,
      },
    });
  }

  async findAll() {
    return this.prisma.projectPosition.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.projectPosition.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateProjectPositionInput) {
    return this.prisma.projectPosition.update({
      data: {
        project: data.project && { connect: { id: data.project } },
        type: data.type,
        roleDescription: data.roleDescription,
        gender: data.gender,
        additionalRequirements: data.additionalRequirements,
        minAge: data.minAge,
        maxAge: data.maxAge,
        status: data.status,
        finished: data.finished,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.projectPosition.delete({ where: { id } });
  }
}
