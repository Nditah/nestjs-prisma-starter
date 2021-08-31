import { InputType, Int, Field } from '@nestjs/graphql';
import { User } from 'src/models/user.model';

@InputType()
export class CreateAwardInput {
  @Field(() => String, { description: 'User to receive the Award(placeholder)' })
  user: string;

  @Field(() => String, { description: 'Award title (placeholder)' })
  title: string;

  @Field(() => String, { description: 'Award organization (Ensemble)' })
  organization: string;

  @Field(() => Int, { description: 'Year the award is given (2022)' })
  issuedYear: number;
}
