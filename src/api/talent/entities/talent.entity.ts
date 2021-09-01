import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Gender } from 'src/common/enum';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Talent model' })
export class Talent extends BaseModel {
  @Field(() => User, { description: 'Talent user' })
  user: User;

  @Field(() => Gender, { description: 'Talent gender' })
  gender: Gender;

  @Field(() => String, { description: 'Talent website' })
  website: string;

  @Field(() => Int, { description: 'Talent weight' })
  weight: number;

  @Field(() => String, { description: 'Talent weight unit' })
  weightUnit: string;

  @Field(() => Int, { description: 'Talent height' })
  height: number;

  @Field(() => String, { description: 'Talent height unit' })
  heightUnit: string;

  @Field(() => Date, { description: 'Talent birthday' })
  birthday: Date;

  @Field(() => String, { description: 'Talent job title' })
  jobTitle: string;

  @Field(() => String, { description: 'Talent interests' })
  interests: string;

  @Field(() => String, { description: 'Talent biography' })
  biography: string;

  @Field(() => String, { description: 'Talent skills' })
  skills: string;

  @Field(() => String, { description: 'Talent industry' })
  industry: string;

  @Field(() => String, { description: 'Talent profession' })
  profession: string;

  @Field(() => String, { description: 'Talent ethnicity' })
  ethnicity: string;

  @Field(() => String, { description: 'Talent available locations' })
  availableLocations: string;

  @Field(() => String, { description: 'Talent languages' })
  languages: string;

  @Field(() => String, { description: 'Talent union status' })
  unionStatus: string;
}
