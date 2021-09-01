import { InputType, Int, Field } from '@nestjs/graphql';
import { Location } from 'src/api/location/entities/location.entity';
import { User } from 'src/models/user.model';

@InputType()
export class CreateExperienceInput {
  @Field(() => User, { description: 'Experience owner as User' })
  user: User;

  @Field(() => String, { description: 'Experience type' })
  type: string;

  @Field(() => String, { description: 'Experience title' })
  title: string;

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
