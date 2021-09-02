import { ObjectType, Field, Int } from '@nestjs/graphql';
import { FileItem } from 'src/api/file-item/entities/file-item.entity';
import { ProjectPosition } from 'src/api/project-position/entities/project-position.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { ApplicationStatus } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Project Application model' })
export class ProjectApplication extends BaseModel {
  @Field(() => User, { description: 'Project Application user' })
  user: User;

  @Field(() => ProjectPosition, {
    description: 'Project Application project position',
  })
  projectPosition: ProjectPosition;

  @Field(() => Project, { description: 'Project Application project' })
  project: Project;

  @Field(() => String, { description: 'Project Application cover-letter' })
  coverLetter: string;

  @Field(() => FileItem, { description: 'Project Application CV' })
  cv: FileItem;

  @Field(() => ApplicationStatus, { description: 'Project Application status' })
  status: ApplicationStatus;

  @Field(() => Boolean, { description: 'Is Project Application saved' })
  saved: boolean;
}
