import { InputType, Int, Field } from '@nestjs/graphql';

@InputType()
export class CreatePictureInput {
  @Field(() => String, { description: 'Picture page' })
  page: string;

  @Field(() => String, { description: 'Picture picture link' })
  pictureLink: string;

  @Field(() => String, { description: 'Picture redirect link' })
  redirectLink: string;

  @Field(() => Int, { description: 'Picture number position' })
  numberPosition: number;

  @Field(() => String, { description: 'Picture title' })
  title: string;

  @Field(() => String, { description: 'Picture description' })
  description: string;

  @Field(() => Boolean, { description: 'Is Picture a video' })
  isVideo: boolean;
}
