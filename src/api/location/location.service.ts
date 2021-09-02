import { Injectable } from '@nestjs/common';
import { CreateLocationInput } from './dto/create-location.input';
import { UpdateLocationInput } from './dto/update-location.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LocationService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLocationInput) {
    return this.prisma.location.create({
      data: {
        city: data.city,
        latitude: data.latitude,
        longitude: data.longitude,
        state: data.state && { connect: { id: data.state } },
        country: data.country && { connect: { id: data.state } },
      },
    });
  }

  async findAll() {
    return this.prisma.location.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.location.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateLocationInput) {
    return this.prisma.location.update({
      data: {
        city: data.city,
        latitude: data.latitude,
        longitude: data.longitude,
        state: data.state && { connect: { id: data.state } },
        country: data.country && { connect: { id: data.state } },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.location.delete({ where: { id } });
  }
}
