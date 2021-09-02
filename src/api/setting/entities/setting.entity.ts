import { ObjectType, Field, Int } from '@nestjs/graphql';
import { BaseModel } from 'src/models/base.model';
import { User } from 'src/models/user.model';

@ObjectType({ description: 'Setting model' })
export class Setting extends BaseModel {
  @Field(() => User, { description: 'Setting user' })
  user: User;

  @Field(() => Boolean, { description: 'Setting private VisibleToAllTalents' })
  privateVisibleToAllTalents: boolean;

  @Field(() => Boolean, {
    description: 'Setting private Visible To All Companies',
  })
  privateVisibleToAllCompanies: boolean;

  @Field(() => Boolean, {
    description: 'Setting email Phone Visible To All Talents',
  })
  emailPhoneVisibleToAllTalents: boolean;

  @Field(() => Boolean, {
    description: 'Setting notification New Connection Request',
  })
  notificationNewConnectionRequest: boolean;

  @Field(() => Boolean, {
    description: 'Setting notification New Connection Accepted',
  })
  notificationNewConnectionAccepted: boolean;

  @Field(() => Boolean, { description: 'Setting notification Feed Update' })
  notificationFeedUpdate: boolean;
}
