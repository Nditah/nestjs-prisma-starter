import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';

@Resolver(() => Company)
export class CompanyResolver {
  constructor(private readonly companyService: CompanyService) {}

  @Mutation(() => Company)
  createCompany(@Args('data') data: CreateCompanyInput) {
    return this.companyService.create(data);
  }

  @Query(() => [Company], { name: 'company' })
  findAll() {
    return this.companyService.findAll();
  }

  @Query(() => Company, { name: 'company' })
  findOne(@Args('id', { type: () => String }) id: number) {
    return this.companyService.findOne(id);
  }

  @Mutation(() => Company)
  updateCompany(@Args('data') data: UpdateCompanyInput) {
    return this.companyService.update(data.id, data);
  }

  @Mutation(() => Company)
  removeCompany(@Args('id', { type: () => String }) id: number) {
    return this.companyService.remove(id);
  }
}
