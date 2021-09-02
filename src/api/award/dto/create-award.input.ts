import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNotEmpty, MinLength, MaxLength } from 'class-validator';

@InputType()
export class CreateAwardInput {
  @IsNotEmpty()
  @Field(() => String, {
    nullable: true,
    description: 'User to receive the Award(Eze)',
  })
  user: string;

  @MinLength(100)
  @MaxLength(255)
  @IsNotEmpty()
  @Field(() => String, {
    nullable: true,
    description: 'User to receive the Award(Eze)',
  })
  title: string;

  @Field(() => String, { description: 'Award organization (Ensemble)' })
  organization: string;

  @Field(() => Int, { description: 'Year the award is given (2022)' })
  issuedYear: number;
}
