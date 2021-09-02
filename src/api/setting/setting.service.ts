import { Injectable } from '@nestjs/common';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SettingService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateSettingInput) {
    return 'This action adds a new setting';
  }

  findAll() {
    return `This action returns all setting`;
  }

  findOne(id: number) {
    return `This action returns a #${id} setting`;
  }

  update(id: number, data: UpdateSettingInput) {
    return `This action updates a #${id} setting`;
  }

  remove(id: number) {
    return `This action removes a #${id} setting`;
  }
}
