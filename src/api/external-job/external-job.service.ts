import { Injectable } from '@nestjs/common';
import { CreateExternalJobInput } from './dto/create-external-job.input';
import { UpdateExternalJobInput } from './dto/update-external-job.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ExternalJobService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateExternalJobInput) {
    return 'This action adds a new externalJob';
  }

  findAll() {
    return `This action returns all externalJob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} externalJob`;
  }

  update(id: number, data: UpdateExternalJobInput) {
    return `This action updates a #${id} externalJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} externalJob`;
  }
}
