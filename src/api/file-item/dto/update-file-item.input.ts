import { InputType, Field, PartialType } from '@nestjs/graphql';
import { IsNotEmpty, IsUUID } from 'class-validator';
import { CreateFileItemInput } from './create-file-item.input';

@InputType()
export class UpdateFileItemInput extends PartialType(CreateFileItemInput) {
  @IsUUID()
  @IsNotEmpty()
  @Field(() => String, { description: 'PrimaryKey' })
  id: string;
}
