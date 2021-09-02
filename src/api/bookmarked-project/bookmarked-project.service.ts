import { Injectable } from '@nestjs/common';
import { CreateBookmarkedProjectInput } from './dto/create-bookmarked-project.input';
import { UpdateBookmarkedProjectInput } from './dto/update-bookmarked-project.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BookmarkedProjectService {
  constructor(private prisma: PrismaService) {}

  create(data: CreateBookmarkedProjectInput) {
    return 'This action adds a new bookmarkedProject';
  }

  findAll() {
    return `This action returns all bookmarkedProject`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookmarkedProject`;
  }

  update(id: number, data: UpdateBookmarkedProjectInput) {
    return `This action updates a #${id} bookmarkedProject`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookmarkedProject`;
  }
}
