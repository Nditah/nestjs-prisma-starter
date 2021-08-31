import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreateAwardInput {
  @Field(() => String, { description: 'User to receive the Award(Eze)' })
  user: string;

  @Field(() => String, { description: 'Award title (Best Actor)' })
  title: string;

  @Field(() => String, { description: 'Award organization (Ensemble)' })
  organization: string;

  @Field(() => Int, { description: 'Year the award is given (2022)' })
  issuedYear: number;
}
