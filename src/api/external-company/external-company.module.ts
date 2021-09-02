import { Module } from '@nestjs/common';
import { ExternalCompanyService } from './external-company.service';
import { ExternalCompanyResolver } from './external-company.resolver';
import { PrismaModule } from '../../prisma/prisma.module';

@Module({
  imports: [PrismaModule],
  providers: [ExternalCompanyResolver, ExternalCompanyService],
})
export class ExternalCompanyModule {}
