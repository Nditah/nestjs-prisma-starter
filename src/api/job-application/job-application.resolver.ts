import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { JobApplicationService } from './job-application.service';
import { JobApplication } from './entities/job-application.entity';
import { CreateJobApplicationInput } from './dto/create-job-application.input';
import { UpdateJobApplicationInput } from './dto/update-job-application.input';

@Resolver(() => JobApplication)
export class JobApplicationResolver {
  constructor(private readonly jobApplicationService: JobApplicationService) {}

  @Mutation(() => JobApplication)
  createJobApplication(@Args('data') data: CreateJobApplicationInput) {
    return this.jobApplicationService.create(data);
  }

  @Query(() => [JobApplication], { name: 'jobApplication' })
  findAll() {
    return this.jobApplicationService.findAll();
  }

  @Query(() => JobApplication, { name: 'jobApplication' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.jobApplicationService.findOne(id);
  }

  @Mutation(() => JobApplication)
  updateJobApplication(@Args('data') data: UpdateJobApplicationInput) {
    return this.jobApplicationService.update(data.id, data);
  }

  @Mutation(() => JobApplication)
  removeJobApplication(@Args('id', { type: () => Int }) id: number) {
    return this.jobApplicationService.remove(id);
  }
}
