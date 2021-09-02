import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreatePictureInput } from './create-picture.input';

@InputType()
export class UpdatePictureInput extends PartialType(CreatePictureInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
