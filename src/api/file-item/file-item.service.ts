import { Injectable } from '@nestjs/common';
import { CreateFileItemInput } from './dto/create-file-item.input';
import { UpdateFileItemInput } from './dto/update-file-item.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class FileItemService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateFileItemInput) {
    return this.prisma.fileItem.create({
      data: {
        name: data.name,
        link: data.link,
        fileType: data.fileType,
        user: data.user && { connect: { id: data.user } },
      },
    });
  }

  async findAll() {
    return this.prisma.fileItem.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.fileItem.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateFileItemInput) {
    return this.prisma.fileItem.update({
      data: {
        name: data.name,
        link: data.link,
        fileType: data.fileType,
        user: data.user && { connect: { id: data.user } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.fileItem.delete({ where: { id } });
  }
}
