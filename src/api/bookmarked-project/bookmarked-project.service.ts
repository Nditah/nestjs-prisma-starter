import { Injectable } from '@nestjs/common';
import { CreateBookmarkedProjectInput } from './dto/create-bookmarked-project.input';
import { UpdateBookmarkedProjectInput } from './dto/update-bookmarked-project.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BookmarkedProjectService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateBookmarkedProjectInput) {
    return this.prisma.bookmarkedProject.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        project: data.project && { connect: { id: data.project } },
      },
    });
  }

  async findAll() {
    return this.prisma.bookmarkedProject.findMany({
      include: {
        user: true,
      },
    });
  }

  async findOne(id: string) {
    return this.prisma.bookmarkedProject.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateBookmarkedProjectInput) {
    return this.prisma.bookmarkedProject.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        project: data.project && { connect: { id: data.project } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.bookmarkedProject.delete({ where: { id } });
  }
}
