import { Injectable } from '@nestjs/common';
import { CreateTalentInput } from './dto/create-talent.input';
import { UpdateTalentInput } from './dto/update-talent.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TalentService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateTalentInput) {
    return 'This action adds a new talent';
  }

  findAll() {
    return `This action returns all talent`;
  }

  findOne(id: number) {
    return `This action returns a #${id} talent`;
  }

  update(id: number, data: UpdateTalentInput) {
    return `This action updates a #${id} talent`;
  }

  remove(id: number) {
    return `This action removes a #${id} talent`;
  }
}
