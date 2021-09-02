import { Injectable } from '@nestjs/common';
import { CreateExternalCompanyInput } from './dto/create-external-company.input';
import { UpdateExternalCompanyInput } from './dto/update-external-company.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExternalCompanyService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateExternalCompanyInput) {
    return this.prisma.externalCompany.create({
      data: {
        logoLink: data.logoLink,
        companyName: data.companyName,
        externalJobs: {
          create: data.externalJobs,
        },
      },
    });
  }

  async findAll() {
    return this.prisma.externalCompany.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.externalCompany.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateExternalCompanyInput) {
    return this.prisma.externalCompany.update({
      data: {
        logoLink: data.logoLink,
        companyName: data.companyName,
        externalJobs: { create: data.externalJobs },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.externalCompany.delete({ where: { id } });
  }
}
