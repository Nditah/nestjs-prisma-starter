import { Injectable } from '@nestjs/common';
import { CreateEducationInput } from './dto/create-education.input';
import { UpdateEducationInput } from './dto/update-education.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateEducationInput) {
    return this.prisma.education.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        schoolName: data.schoolName,
        title: data.title,
        startYear: data.startYear,
        startMonth: data.startMonth,
        endYear: data.endYear,
        endMonth: data.endMonth,
        location: data.location && { connect: { id: data.location } },
      },
    });
  }

  async findAll() {
    return this.prisma.education.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.education.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateEducationInput) {
    return this.prisma.education.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        schoolName: data.schoolName,
        title: data.title,
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
    return this.prisma.education.delete({ where: { id } });
  }
}
