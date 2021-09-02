import { Injectable } from '@nestjs/common';
import { CreateLocationCountryInput } from './dto/create-location-country.input';
import { UpdateLocationCountryInput } from './dto/update-location-country.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class LocationCountryService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateLocationCountryInput) {
    return this.prisma.locationCountry.create({
      data: {
        name: data.name,
        iso2: data.iso2,
        iso3: data.iso3,
        locations: { create: data.locations },
      },
    });
  }

  async findAll() {
    return this.prisma.locationCountry.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.locationCountry.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateLocationCountryInput) {
    return this.prisma.locationCountry.update({
      data: {
        name: data.name,
        iso2: data.iso2,
        iso3: data.iso3,
        locations: { create: data.locations },
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.locationCountry.delete({ where: { id } });
  }
}
