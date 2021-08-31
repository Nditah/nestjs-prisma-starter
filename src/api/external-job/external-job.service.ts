import { Injectable } from '@nestjs/common';
import { CreateExternalJobInput } from './dto/create-external-job.input';
import { UpdateExternalJobInput } from './dto/update-external-job.input';

@Injectable()
export class ExternalJobService {
  create(createExternalJobInput: CreateExternalJobInput) {
    return 'This action adds a new externalJob';
  }

  findAll() {
    return `This action returns all externalJob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalJob`;
  }

  update(id: number, updateExternalJobInput: UpdateExternalJobInput) {
    return `This action updates a #${id} externalJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalJob`;
  }
}
