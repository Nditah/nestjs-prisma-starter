import { Project } from 'src/api/project/entities/project.entity';
import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/models/user.model';

@InputType()
export class CreateBookmarkedProjectInput {
  @Field(() => User, { description: 'User who Bookmarked Project' })
  user: User;

  @Field(() => Project, { description: 'Bookmarked Project' })
  project: Project;
}
