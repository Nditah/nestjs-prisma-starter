import { ObjectType, Field, Int } from '@nestjs/graphql';
import { ProjectApplication } from 'src/api/project-application/entities/project-application.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { Gender, PositionStatus } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';

@ObjectType({ description: 'Talent model' })
export class Talent extends BaseModel {
  @Field(() => Project, { description: 'Talent project' })
  project: Project;

  @Field(() => String, { description: 'Talent type' })
  type: string;

  @Field(() => String, { description: 'Talent role description' })
  roleDescription: string;

  @Field(() => Gender, { description: 'Talent gender' })
  gender: Gender;

  user               User?     @relation(fields: [userId], references: [id])
  userId             String?
  website            String
  weight             Float
  weightUnit         String
  height             Float
  heightUnit         String
  birthday           DateTime
  gender             Gender
  jobTitle           String
  interests          String
  biography          String
  skills             String
  industry           String
  profession         String
  ethnicity          String
  availableLocations String
  languages          String
  unionStatus        String
}
