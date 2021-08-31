import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { ExternalCompanyService } from './external-company.service';
import { ExternalCompany } from './entities/external-company.entity';
import { CreateExternalCompanyInput } from './dto/create-external-company.input';
import { UpdateExternalCompanyInput } from './dto/update-external-company.input';

@Resolver(() => ExternalCompany)
export class ExternalCompanyResolver {
  constructor(private readonly externalCompanyService: ExternalCompanyService) {}

  @Mutation(() => ExternalCompany)
  createExternalCompany(@Args('createExternalCompanyInput') createExternalCompanyInput: CreateExternalCompanyInput) {
    return this.externalCompanyService.create(createExternalCompanyInput);
  }

  @Query(() => [ExternalCompany], { name: 'externalCompany' })
  findAll() {
    return this.externalCompanyService.findAll();
  }

  @Query(() => ExternalCompany, { name: 'externalCompany' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.externalCompanyService.findOne(id);
  }

  @Mutation(() => ExternalCompany)
  updateExternalCompany(@Args('updateExternalCompanyInput') updateExternalCompanyInput: UpdateExternalCompanyInput) {
    return this.externalCompanyService.update(updateExternalCompanyInput.id, updateExternalCompanyInput);
  }

  @Mutation(() => ExternalCompany)
  removeExternalCompany(@Args('id', { type: () => Int }) id: number) {
    return this.externalCompanyService.remove(id);
  }
}
