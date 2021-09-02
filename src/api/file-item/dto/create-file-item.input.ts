import { InputType, Field } from '@nestjs/graphql';
import { FileType } from 'src/common/enum';
import { User } from 'src/models/user.model';
import { JobApplication } from 'src/api/job-application/entities/job-application.entity';
import { Job } from 'src/api/job/entities/job.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { ProjectApplication } from 'src/api/project-application/entities/project-application.entity';

@InputType()
export class CreateFileItemInput {
  @Field(() => User, { description: 'File Item user' })
  user: string;

  @Field(() => String, { description: 'File Item name' })
  name: string;

  @Field(() => String, { description: 'File Item link' })
  link: string;

  @Field(() => FileType, { description: 'File Item fileType' })
  fileType: FileType;
}
