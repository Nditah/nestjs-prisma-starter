import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';

@ObjectType({ description: 'Circle model' })
export class Circle extends BaseModel {
  @Field(() => String, { description: 'Name of the Circle' })
  name: string;

  @Field(() => String, { description: 'Circle title ' })
  title: string;

  @Field(() => String, { description: 'Circle logo ' })
  logo: string;

  @Field(() => String, { description: 'Circle description ' })
  description: string;
}