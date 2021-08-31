import { Injectable } from '@nestjs/common';
import { CreateViewedJobInput } from './dto/create-viewed-job.input';
import { UpdateViewedJobInput } from './dto/update-viewed-job.input';

@Injectable()
export class ViewedJobService {
  create(createViewedJobInput: CreateViewedJobInput) {
    return 'This action adds a new viewedJob';
  }

  findAll() {
    return `This action returns all viewedJob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viewedJob`;
  }

  update(id: number, updateViewedJobInput: UpdateViewedJobInput) {
    return `This action updates a #${id} viewedJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} viewedJob`;
  }
}
