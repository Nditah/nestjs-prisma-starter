import { Injectable } from '@nestjs/common';
import { CreatePictureInput } from './dto/create-picture.input';
import { UpdatePictureInput } from './dto/update-picture.input';

@Injectable()
export class PictureService {
  create(createPictureInput: CreatePictureInput) {
    return 'This action adds a new picture';
  }

  findAll() {
    return `This action returns all picture`;
  }

  findOne(id: number) {
    return `This action returns a #${id} picture`;
  }

  update(id: number, updatePictureInput: UpdatePictureInput) {
    return `This action updates a #${id} picture`;
  }

  remove(id: number) {
    return `This action removes a #${id} picture`;
  }
}
