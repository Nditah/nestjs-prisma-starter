import { ObjectType, Field, InputType } from '@nestjs/graphql';
import { Project } from 'src/api/project/entities/project.entity';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@InputType('ViewedProjectInput')
@ObjectType({ description: 'Viewed Project model' })
export class ViewedProject extends BaseModel {
  @Field(() => User, { description: 'Viewed Project user' })
  user: User;

  @Field(() => Project, { description: 'Viewed Project' })
  project: Project;
}
