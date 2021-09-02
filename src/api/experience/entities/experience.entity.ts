import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Location } from 'src/api/location/entities/location.entity';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Experience model' })
export class Experience extends BaseModel {
  @Field(() => User, { description: 'Experience owner as User' })
  user: User;

  @Field(() => String, { description: 'Experience type' })
  type: string;

  @Field(() => String, { description: 'Experience title' })
  title: string;

  @Field(() => String, { description: 'Experience company' })
  company: string;

  @Field(() => String, { description: 'Experience role' })
  role: string;

  @Field(() => String, { description: 'Experience description' })
  description: string;

  @Field(() => Int, { description: 'Experience start Year' })
  startYear: number;

  @Field(() => Int, { description: 'Experience start Month' })
  startMonth: number;

  @Field(() => Int, { description: 'Experience end Year' })
  endYear: number;

  @Field(() => Int, { description: 'Experience end Month' })
  endMonth: number;

  @Field(() => Location, { description: 'Experience location' })
  location: Location;
}
