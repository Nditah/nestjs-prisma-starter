import { Injectable } from '@nestjs/common';
import { CreateLocationCountryInput } from './dto/create-location-country.input';
import { UpdateLocationCountryInput } from './dto/update-location-country.input';

@Injectable()
export class LocationCountryService {
  create(createLocationCountryInput: CreateLocationCountryInput) {
    return 'This action adds a new locationCountry';
  }

  findAll() {
    return `This action returns all locationCountry`;
  }

  findOne(id: number) {
    return `This action returns a #${id} locationCountry`;
  }

  update(id: number, updateLocationCountryInput: UpdateLocationCountryInput) {
    return `This action updates a #${id} locationCountry`;
  }

  remove(id: number) {
    return `This action removes a #${id} locationCountry`;
  }
}
