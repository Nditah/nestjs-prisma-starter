import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateMentorshipUserInput } from './create-mentorship-user.input';

@InputType()
export class UpdateMentorshipUserInput extends PartialType(
  CreateMentorshipUserInput
) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
