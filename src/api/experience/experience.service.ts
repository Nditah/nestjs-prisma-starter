import { Injectable } from '@nestjs/common';
import { CreateExperienceInput } from './dto/create-experience.input';
import { UpdateExperienceInput } from './dto/update-experience.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExperienceService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExperienceInput) {
    return this.prisma.experience.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        type: data.type,
        title: data.title,
        company: data.company,
        role: data.role,
        description: data.description,
        startYear: data.startYear,
        startMonth: data.startMonth,
        endYear: data.endYear,
        endMonth: data.endMonth,
        location: data.location && { connect: { id: data.location } },
      },
    });
  }

  async findAll() {
    return this.prisma.experience.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.experience.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateExperienceInput) {
    return this.prisma.experience.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        type: data.type,
        title: data.title,
        company: data.company,
        role: data.role,
        description: data.description,
        startYear: data.startYear,
        startMonth: data.startMonth,
        endYear: data.endYear,
        endMonth: data.endMonth,
        location: data.location && { connect: { id: data.location } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.experience.delete({ where: { id } });
  }
}
