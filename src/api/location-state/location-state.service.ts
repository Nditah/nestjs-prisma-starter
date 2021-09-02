import { Injectable } from '@nestjs/common';
import { CreateLocationStateInput } from './dto/create-location-state.input';
import { UpdateLocationStateInput } from './dto/update-location-state.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LocationStateService {
  create(createLocationStateInput: CreateLocationStateInput) {
    return 'This action adds a new locationState';
  }

  findAll() {
    return `This action returns all locationState`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationState`;
  }

  update(id: number, updateLocationStateInput: UpdateLocationStateInput) {
    return `This action updates a #${id} locationState`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationState`;
  }
}
