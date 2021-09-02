import { InputType, Field } from '@nestjs/graphql';
import { FileType } from 'src/common/enum';
import { User } from 'src/models/user.model';

@InputType()
export class CreateFileItemInput {
  @Field(() => User, { description: 'File Item user' })
  user: string;

  @Field(() => String, { description: 'File Item name' })
  name: string;

  @Field(() => String, { description: 'File Item link' })
  link: string;

  @Field(() => FileType, { description: 'File Item fileType' })
  fileType: FileType;
}
