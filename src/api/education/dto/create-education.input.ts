import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/models/user.model';

@InputType()
export class CreateEducationInput {
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
  endYear: string;

  @Field(() => Int, { description: 'Education end Month' })
  endMonth: number;

  @Field(() => Location, { description: 'Education location' })
  location: Location;
}
