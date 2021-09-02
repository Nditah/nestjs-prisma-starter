import { Injectable } from '@nestjs/common';
import { CreateCircleInput } from './dto/create-circle.input';
import { UpdateCircleInput } from './dto/update-circle.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class CircleService {
  create(createCircleInput: CreateCircleInput) {
    return 'This action adds a new circle';
  }

  findAll() {
    return `This action returns all circle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} circle`;
  }

  update(id: number, updateCircleInput: UpdateCircleInput) {
    return `This action updates a #${id} circle`;
  }

  remove(id: number) {
    return `This action removes a #${id} circle`;
  }
}
