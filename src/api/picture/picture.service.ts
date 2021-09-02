import { Injectable } from '@nestjs/common';
import { CreatePictureInput } from './dto/create-picture.input';
import { UpdatePictureInput } from './dto/update-picture.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class PictureService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreatePictureInput) {
    return this.prisma.picture.create({
      data: {
        page: data.page,
        pictureLink: data.pictureLink,
        redirectLink: data.redirectLink,
        numberPosition: data.numberPosition,
        title: data.title,
        description: data.description,
        isVideo: data.isVideo,
      },
    });
  }

  async findAll() {
    return this.prisma.picture.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.picture.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdatePictureInput) {
    return this.prisma.picture.update({
      data: {
        page: data.page,
        pictureLink: data.pictureLink,
        redirectLink: data.redirectLink,
        numberPosition: data.numberPosition,
        title: data.title,
        description: data.description,
        isVideo: data.isVideo,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.picture.delete({ where: { id } });
  }
}
