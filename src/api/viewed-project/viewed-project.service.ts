import { Injectable } from '@nestjs/common';
import { CreateViewedProjectInput } from './dto/create-viewed-project.input';
import { UpdateViewedProjectInput } from './dto/update-viewed-project.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ViewedProjectService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateViewedProjectInput) {
    return 'This action adds a new viewedProject';
  }

  findAll() {
    return `This action returns all viewedProject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} viewedProject`;
  }

  update(id: number, data: UpdateViewedProjectInput) {
    return `This action updates a #${id} viewedProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} viewedProject`;
  }
}
