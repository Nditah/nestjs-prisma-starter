import { Injectable } from '@nestjs/common';
import { CreateViewedProjectInput } from './dto/create-viewed-project.input';
import { UpdateViewedProjectInput } from './dto/update-viewed-project.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ViewedProjectService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateViewedProjectInput) {
    return this.prisma.viewedProject.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        project: data.project && { connect: { id: data.project } },
      },
    });
  }

  async findAll() {
    return this.prisma.viewedProject.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.viewedProject.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateViewedProjectInput) {
    return this.prisma.viewedProject.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        project: data.project && { connect: { id: data.project } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.viewedProject.delete({ where: { id } });
  }
}
