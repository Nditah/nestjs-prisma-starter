import { ObjectType, Field, Int, InputType } from '@nestjs/graphql';
import { Location } from 'src/api/location/entities/location.entity';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@InputType('EducationInput')
@ObjectType({ description: 'Education model' })
export class Education extends BaseModel {
  @Field(() => User, { description: 'Education owner as User' })
  user: User;

  @Field(() => String, { description: 'Education schoolName' })
  schoolName: string;

  @Field(() => String, { description: 'Education title' })
  title: number;

  @Field(() => Int, { description: 'Education start Year' })
  startYear: number;

  @Field(() => Int, { description: 'Education start Month' })
  startMonth: number;

  @Field(() => Int, { description: 'Education end Year' })
  endYear: number;

  @Field(() => Int, { description: 'Education end Month' })
  endMonth: number;

  @Field(() => Location, { description: 'Education location' })
  location: Location;
}
