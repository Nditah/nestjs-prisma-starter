import { InputType, Field } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { User } from 'src/models/user.model';
import { Project } from 'src/api/project/entities/project.entity';

@InputType()
export class CreateBookmarkedProjectInput {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => User, { description: 'User who Bookmarked Project' })
  user: string;

  @IsUUID()
  @IsNotEmpty()
  @Field(() => Project, { description: 'Bookmarked Project' })
  project: string;
}
