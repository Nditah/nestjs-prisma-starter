import { Injectable } from '@nestjs/common';
import { CreateProjectApplicationInput } from './dto/create-project-application.input';
import { UpdateProjectApplicationInput } from './dto/update-project-application.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class ProjectApplicationService {
  create(createProjectApplicationInput: CreateProjectApplicationInput) {
    return 'This action adds a new projectApplication';
  }

  findAll() {
    return `This action returns all projectApplication`;
  }

  findOne(id: number) {
    return `This action returns a #${id} projectApplication`;
  }

  update(id: number, updateProjectApplicationInput: UpdateProjectApplicationInput) {
    return `This action updates a #${id} projectApplication`;
  }

  remove(id: number) {
    return `This action removes a #${id} projectApplication`;
  }
}
