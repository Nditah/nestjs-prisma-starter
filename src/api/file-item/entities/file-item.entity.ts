import { ObjectType, Field, Int } from '@nestjs/graphql';
import { JobApplication } from 'src/api/job-application/entities/job-application.entity';
import { Job } from 'src/api/job/entities/job.entity';
import { ProjectApplication } from 'src/api/project-application/entities/project-application.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { FileType } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'File Item model' })
export class FileItem extends BaseModel {
  @Field(() => User, { description: 'File Item user' })
  user: User;

  @Field(() => String, { description: 'File Item name' })
  name: string;

  @Field(() => String, { description: 'File Item link' })
  link: string;

  @Field(() => FileType, { description: 'File Item fileType' })
  fileType: FileType;

  @Field(() => Project, { description: 'File Item project' })
  project: Project;

  @Field(() => Job, { description: 'File Item job' })
  job: Job;

  @Field(() => JobApplication, { description: 'File Item job application' })
  jobApplication: JobApplication;

  @Field(() => ProjectApplication, {
    description: 'File Item project application',
  })
  projectApplication: ProjectApplication;
}
