import { Injectable } from '@nestjs/common';
import { CreateLocationStateInput } from './dto/create-location-state.input';
import { UpdateLocationStateInput } from './dto/update-location-state.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LocationStateService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLocationStateInput) {
    return this.prisma.locationState.create({
      data: {
        name: data.name,
        abbreviation: data.abbreviation,
        locations: { create: data.locations },
      },
    });
  }

  async findAll() {
    return this.prisma.locationState.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.locationState.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateLocationStateInput) {
    return this.prisma.locationState.update({
      data: {
        name: data.name,
        abbreviation: data.abbreviation,
        locations: { create: data.locations },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.locationState.delete({ where: { id } });
  }
}
