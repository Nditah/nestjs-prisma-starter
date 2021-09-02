import { Injectable } from '@nestjs/common';
import { CreateProjectPositionInput } from './dto/create-project-position.input';
import { UpdateProjectPositionInput } from './dto/update-project-position.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectPositionService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateProjectPositionInput) {
    return 'This action adds a new projectPosition';
  }

  findAll() {
    return `This action returns all projectPosition`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectPosition`;
  }

  update(id: number, data: UpdateProjectPositionInput) {
    return `This action updates a #${id} projectPosition`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectPosition`;
  }
}
