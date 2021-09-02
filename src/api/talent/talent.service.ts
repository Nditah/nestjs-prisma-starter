import { Injectable } from '@nestjs/common';
import { CreateTalentInput } from './dto/create-talent.input';
import { UpdateTalentInput } from './dto/update-talent.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class TalentService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateTalentInput) {
    return this.prisma.talent.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        website: data.website,
        weight: data.weight,
        weightUnit: data.weightUnit,
        height: data.height,
        heightUnit: data.heightUnit,
        birthday: data.birthday,
        gender: data.gender,
        jobTitle: data.jobTitle,
        interests: data.interests,
        biography: data.biography,
        skills: data.skills,
        industry: data.industry,
        profession: data.profession,
        ethnicity: data.ethnicity,
        availableLocations: data.availableLocations,
        languages: data.languages,
        unionStatus: data.unionStatus,
      },
    });
  }

  async findAll() {
    return this.prisma.talent.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.talent.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateTalentInput) {
    return this.prisma.talent.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        website: data.website,
        weight: data.weight,
        weightUnit: data.weightUnit,
        height: data.height,
        heightUnit: data.heightUnit,
        birthday: data.birthday,
        gender: data.gender,
        jobTitle: data.jobTitle,
        interests: data.interests,
        biography: data.biography,
        skills: data.skills,
        industry: data.industry,
        profession: data.profession,
        ethnicity: data.ethnicity,
        availableLocations: data.availableLocations,
        languages: data.languages,
        unionStatus: data.unionStatus,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.talent.delete({ where: { id } });
  }
}
