import { InputType, Field } from '@nestjs/graphql';
import { Project } from 'src/api/project/entities/project.entity';
import { User } from 'src/models/user.model';

@InputType()
export class CreateViewedProjectInput {
  @Field(() => User, { description: 'Viewed Project user' })
  user: string;

  @Field(() => Project, { description: 'Viewed Project' })
  project: string;
}
