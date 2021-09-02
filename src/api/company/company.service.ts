import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CompanyService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateCompanyInput) {
    return this.prisma.company.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        name: data.name,
        industry: data.industry,
        website: data.website,
        contactorName: data.contactorName,
        contactorEmail: data.contactorEmail,
        contactorPhone: data.contactorPhone,
        contactorJobTitle: data.contactorJobTitle,
        contactorDepartment: data.contactorDepartment,
        introduction: data.introduction,
        employees: data.employees,
        skills: data.skills,
        fields: data.fields,
        jobs: {
          create: data.jobs,
        },
      },
    });
  }

  async findAll() {
    return this.prisma.company.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.company.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateCompanyInput) {
    return this.prisma.company.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        name: data.name,
        industry: data.industry,
        website: data.website,
        contactorName: data.contactorName,
        contactorEmail: data.contactorEmail,
        contactorPhone: data.contactorPhone,
        contactorJobTitle: data.contactorJobTitle,
        contactorDepartment: data.contactorDepartment,
        introduction: data.introduction,
        employees: data.employees,
        skills: data.skills,
        fields: data.fields,
        jobs: { create: data.jobs },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.company.delete({ where: { id } });
  }
}
