import { Injectable } from '@nestjs/common';
import { CreateEducationInput } from './dto/create-education.input';
import { UpdateEducationInput } from './dto/update-education.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class EducationService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateEducationInput) {
    return 'This action adds a new education';
  }

  findAll() {
    return `This action returns all education`;
  }

  findOne(id: number) {
    return `This action returns a #${id} education`;
  }

  update(id: number, data: UpdateEducationInput) {
    return `This action updates a #${id} education`;
  }

  remove(id: number) {
    return `This action removes a #${id} education`;
  }
}
