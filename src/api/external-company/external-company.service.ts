import { Injectable } from '@nestjs/common';
import { CreateExternalCompanyInput } from './dto/create-external-company.input';
import { UpdateExternalCompanyInput } from './dto/update-external-company.input';

@Injectable()
export class ExternalCompanyService {
  create(createExternalCompanyInput: CreateExternalCompanyInput) {
    return 'This action adds a new externalCompany';
  }

  findAll() {
    return `This action returns all externalCompany`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalCompany`;
  }

  update(id: number, updateExternalCompanyInput: UpdateExternalCompanyInput) {
    return `This action updates a #${id} externalCompany`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalCompany`;
  }
}
