import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { ProjectApplication } from 'src/api/project-application/entities/project-application.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { Gender, PositionStatus } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';

@InputType('ProjectPositionInput')
@ObjectType({ description: 'Project Position model' })
export class ProjectPosition extends BaseModel {
  @Field(() => Project, { description: 'Project Position project' })
  project: Project;

  @Field(() => String, { description: 'Project Position type' })
  type: string;

  @Field(() => String, { description: 'Project Position role description' })
  roleDescription: string;

  @Field(() => Gender, { description: 'Project Position gender' })
  gender: Gender;

  @Field(() => String, {
    description: 'Project Position additional requirements',
  })
  additionalRequirements: string;

  @Field(() => Int, { description: 'Project Position minimum age' })
  minAge: number;

  @Field(() => Int, { description: 'Project Position maximum age' })
  maxAge: number;

  @Field(() => PositionStatus, { description: 'Project Position status' })
  status: PositionStatus;

  @Field(() => Date, { description: 'Project Position finished date' })
  finished: Date;

  @Field(() => [ProjectApplication], {
    description: 'Project Position applications',
  })
  projectApplications: ProjectApplication[];
}
