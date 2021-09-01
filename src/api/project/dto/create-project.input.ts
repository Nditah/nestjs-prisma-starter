import { InputType, Field } from '@nestjs/graphql';
import { BookmarkedProject } from 'src/api/bookmarked-project/entities/bookmarked-project.entity';
import { FileItem } from 'src/api/file-item/entities/file-item.entity';
import { Location } from 'src/api/location/entities/location.entity';
import { ProjectApplication } from 'src/api/project-application/entities/project-application.entity';
import { ProjectPosition } from 'src/api/project-position/entities/project-position.entity';
import { ViewedProject } from 'src/api/viewed-project/entities/viewed-project.entity';
import { JobStatus } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateProjectInput {
  @Field(() => User, { description: 'Project user' })
  user: User;

  @Field(() => String, { description: 'Project cover image' })
  coverImage: string;

  @Field(() => String, { description: 'Project title' })
  title: string;

  @Field(() => String, { description: 'Project type' })
  type: string;

  @Field(() => String, { description: 'Project description' })
  description: string;

  @Field(() => String, { description: 'Project keywords' })
  keywords: string;

  @Field(() => Boolean, { description: 'Is Project paid' })
  paid: boolean;

  @Field(() => Location, { description: 'Project location' })
  location: Location;

  @Field(() => JobStatus, { description: 'Project status' })
  status: JobStatus;

  @Field(() => [ProjectPosition], { description: 'Project project positions' })
  projectPositions: ProjectPosition[];

  @Field(() => [FileItem], { description: 'Project documents' })
  documents: FileItem[];

  @Field(() => String, { description: 'Project schedule' })
  schedule: string;

  @Field(() => String, { description: 'Project housing details' })
  housingDetails: string;

  @Field(() => String, { description: 'Project child elder details' })
  childElderDetails: string;

  @Field(() => Date, { description: 'Project finished' })
  finished: Date;

  @Field(() => [ViewedProject], { description: 'Project views' })
  viewedProjects: ViewedProject[];

  @Field(() => [ProjectApplication], { description: 'Project applications' })
  projectApplications: ProjectApplication[];

  @Field(() => [BookmarkedProject], { description: 'Project bookmarked' })
  bookmarkedProjects: BookmarkedProject[];
}
