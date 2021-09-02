import { Injectable } from '@nestjs/common';
import { CreateBookmarkedJobInput } from './dto/create-bookmarked-job.input';
import { UpdateBookmarkedJobInput } from './dto/update-bookmarked-job.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class BookmarkedJobService {
  create(createBookmarkedJobInput: CreateBookmarkedJobInput) {
    return 'This action adds a new bookmarkedJob';
  }

  findAll() {
    return `This action returns all bookmarkedJob`;
  }

  findOne(id: number) {
    return `This action returns a #${id} bookmarkedJob`;
  }

  update(id: number, updateBookmarkedJobInput: UpdateBookmarkedJobInput) {
    return `This action updates a #${id} bookmarkedJob`;
  }

  remove(id: number) {
    return `This action removes a #${id} bookmarkedJob`;
  }
}
