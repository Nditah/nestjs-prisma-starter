import { Injectable } from '@nestjs/common';
import { CreateFileItemInput } from './dto/create-file-item.input';
import { UpdateFileItemInput } from './dto/update-file-item.input';

@Injectable()
export class FileItemService {
  create(createFileItemInput: CreateFileItemInput) {
    return 'This action adds a new fileItem';
  }

  findAll() {
    return `This action returns all fileItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} fileItem`;
  }

  update(id: number, updateFileItemInput: UpdateFileItemInput) {
    return `This action updates a #${id} fileItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} fileItem`;
  }
}
