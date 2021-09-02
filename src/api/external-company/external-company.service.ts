import { Injectable } from '@nestjs/common';
import { CreateExternalCompanyInput } from './dto/create-external-company.input';
import { UpdateExternalCompanyInput } from './dto/update-external-company.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExternalCompanyService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateExternalCompanyInput) {
    return 'This action adds a new externalCompany';
  }

  findAll() {
    return `This action returns all externalCompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalCompany`;
  }

  update(id: number, data: UpdateExternalCompanyInput) {
    return `This action updates a #${id} externalCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalCompany`;
  }
}
