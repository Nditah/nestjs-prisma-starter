import { ObjectType, Field } from '@nestjs/graphql';
import { Project } from 'src/api/project/entities/project.entity';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Viewed Project model' })
export class ViewedProject extends BaseModel {
  @Field(() => User, { description: 'Viewed Project user' })
  user: User;

  @Field(() => Project, { description: 'Viewed Project' })
  project: Project;
}
