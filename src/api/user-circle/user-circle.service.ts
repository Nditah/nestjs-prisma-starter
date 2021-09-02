import { Injectable } from '@nestjs/common';
import { CreateUserCircleInput } from './dto/create-user-circle.input';
import { UpdateUserCircleInput } from './dto/update-user-circle.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class UserCircleService {
  create(createUserCircleInput: CreateUserCircleInput) {
    return 'This action adds a new userCircle';
  }

  findAll() {
    return `This action returns all userCircle`;
  }

  findOne(id: number) {
    return `This action returns a #${id} userCircle`;
  }

  update(id: number, updateUserCircleInput: UpdateUserCircleInput) {
    return `This action updates a #${id} userCircle`;
  }

  remove(id: number) {
    return `This action removes a #${id} userCircle`;
  }
}
