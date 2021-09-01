import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';

@ObjectType({ description: 'Picture model' })
export class Picture extends BaseModel {
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
