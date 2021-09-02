import { Injectable } from '@nestjs/common';
import { CreateFileItemInput } from './dto/create-file-item.input';
import { UpdateFileItemInput } from './dto/update-file-item.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FileItemService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateFileItemInput) {
    return 'This action adds a new fileItem';
  }

  findAll() {
    return `This action returns all fileItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileItem`;
  }

  update(id: number, data: UpdateFileItemInput) {
    return `This action updates a #${id} fileItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileItem`;
  }
}
