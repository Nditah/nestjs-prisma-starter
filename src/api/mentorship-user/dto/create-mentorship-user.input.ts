import { InputType, Field } from '@nestjs/graphql';
import { MentorshipUserType, ReviewStatus } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateMentorshipUserInput {
  @Field(() => User, { description: 'Mentorship User' })
  user: string;

  @Field(() => MentorshipUserType, { description: 'Mentorship user type' })
  userType: MentorshipUserType;

  @Field(() => String, {
    description: 'Mentorship User professional self-describe',
  })
  professionalSelfDescribe: string;

  @Field(() => String, { description: 'Mentorship User professional level' })
  professionalLevel: string;

  @Field(() => String, { description: 'Mentorship User quarter start' })
  quarterStart: string;

  @Field(() => String, { description: 'Mentorship User self-describe' })
  selfDescribe: string;

  @Field(() => ReviewStatus, { description: 'Mentorship user review status' })
  reviewStatus: ReviewStatus;

  @Field(() => Boolean, { description: 'Is Mentorship user paired' })
  paired: boolean;

  @Field(() => Boolean, { description: 'Is Mentorship have nullable fields' })
  isHaveNullableFields: boolean;
}
