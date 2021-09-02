import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';
import { Project } from 'src/api/project/entities/project.entity';

@InputType('BookmarkedProjectInput')
@ObjectType({ description: 'BookmarkedProject model' })
export class BookmarkedProject extends BaseModel {
  @Field(() => User, { description: 'User who Bookmarked Project' })
  user: User;

  @Field(() => Project, { description: 'Bookmarked Project' })
  project: Project;
}
