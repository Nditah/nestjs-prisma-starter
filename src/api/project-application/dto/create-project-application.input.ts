import { InputType, Field } from '@nestjs/graphql';
import { FileItem } from 'src/api/file-item/entities/file-item.entity';
import { ProjectPosition } from 'src/api/project-position/entities/project-position.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { ApplicationStatus } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateProjectApplicationInput {
  @Field(() => User, { description: 'Project Application user' })
  user: string;

  @Field(() => ProjectPosition, {
    description: 'Project Application project position',
  })
  projectPosition: string;

  @Field(() => Project, { description: 'Project Application project' })
  project: string;

  @Field(() => String, { description: 'Project Application cover-letter' })
  coverLetter: string;

  @Field(() => FileItem, { description: 'Project Application CV' })
  cv: string;

  @Field(() => ApplicationStatus, { description: 'Project Application status' })
  status: ApplicationStatus;

  @Field(() => Boolean, { description: 'Is Project Application saved' })
  saved: boolean;
}
