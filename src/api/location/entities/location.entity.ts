import { ObjectType, Field, Float } from '@nestjs/graphql';
import { Education } from 'src/api/education/entities/education.entity';
import { Experience } from 'src/api/experience/entities/experience.entity';
import { Job } from 'src/api/job/entities/job.entity';
import { LocationCountry } from 'src/api/location-country/entities/location-country.entity';
import { LocationState } from 'src/api/location-state/entities/location-state.entity';
import { Project } from 'src/api/project/entities/project.entity';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Location model' })
export class Location extends BaseModel {
  @Field(() => String, { description: 'Location city' })
  city: string;

  @Field(() => Float, { description: 'Location latitude' })
  latitude: number;

  @Field(() => Float, { description: 'Location longitude' })
  longitude: number;

  @Field(() => LocationCountry, { description: 'Location country' })
  country: LocationCountry;

  @Field(() => LocationState, { description: 'Location state' })
  state: LocationState;

  @Field(() => [User], { description: 'Location users' })
  users: User[];

  @Field(() => [Job], { description: 'Location jobs' })
  jobs: Job[];

  @Field(() => [Experience], { description: 'Location experiences' })
  experiences: Experience[];

  @Field(() => Education, { description: 'Location educations' })
  educations: Education;

  @Field(() => [Project], { description: 'Location projects' })
  projects: Project[];
}
