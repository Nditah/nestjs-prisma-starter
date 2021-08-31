import { Module } from '@nestjs/common';
import { ExternalCompanyService } from './external-company.service';
import { ExternalCompanyResolver } from './external-company.resolver';

@Module({
  providers: [ExternalCompanyResolver, ExternalCompanyService]
})
export class ExternalCompanyModule {}
