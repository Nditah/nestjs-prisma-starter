import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Award model' })
export class Award extends BaseModel {
  @Field(() => User, { description: 'User to receive the Award(James Borne)' })
  user: string;

  @Field(() => String, { description: 'Award title (Best Actress)' })
  title: string;

  @Field(() => String, { description: 'Award organization (Ensemble)' })
  organization: string;

  @Field(() => Int, { description: 'Year the award is given (2022)' })
  issuedYear: number;
}