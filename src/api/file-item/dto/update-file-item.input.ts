import { CreateFileItemInput } from './create-file-item.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';

@InputType()
export class UpdateFileItemInput extends PartialType(CreateFileItemInput) {
  @Field(() => Int)
  id: number;
}
