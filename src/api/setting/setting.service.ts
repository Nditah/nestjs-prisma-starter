import { Injectable } from '@nestjs/common';
import { CreateSettingInput } from './dto/create-setting.input';
import { UpdateSettingInput } from './dto/update-setting.input';
import { PrismaService } from '../../prisma/prisma.service';

@Injectable()
export class SettingService {
  constructor(private prisma: PrismaService) {}

  async create(data: CreateSettingInput) {
    return this.prisma.setting.create({
      data: {
        user: data.user && { connect: { id: data.user } },
        privateVisibleToAllTalents: data.privateVisibleToAllTalents,
        privateVisibleToAllCompanies: data.privateVisibleToAllCompanies,
        emailPhoneVisibleToAllTalents: data.emailPhoneVisibleToAllTalents,
        notificationNewConnectionRequest: data.notificationNewConnectionRequest,
        notificationNewConnectionAccepted:
          data.notificationNewConnectionAccepted,
        notificationFeedUpdate: data.notificationFeedUpdate,
      },
    });
  }

  async findAll() {
    return this.prisma.setting.findMany({});
  }

  async findOne(id: string) {
    return this.prisma.setting.findUnique({ where: { id } });
  }

  async update(id: string, data: UpdateSettingInput) {
    return this.prisma.setting.update({
      data: {
        user: data.user && { connect: { id: data.user } },
        privateVisibleToAllTalents: data.privateVisibleToAllTalents,
        privateVisibleToAllCompanies: data.privateVisibleToAllCompanies,
        emailPhoneVisibleToAllTalents: data.emailPhoneVisibleToAllTalents,
        notificationNewConnectionRequest: data.notificationNewConnectionRequest,
        notificationNewConnectionAccepted:
          data.notificationNewConnectionAccepted,
        notificationFeedUpdate: data.notificationFeedUpdate,
      },
      where: {
        id,
      },
    });
  }

  async remove(id: string) {
    return this.prisma.setting.delete({ where: { id } });
  }
}
