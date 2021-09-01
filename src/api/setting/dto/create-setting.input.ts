import { InputType, Field } from '@nestjs/graphql';
import { User } from 'src/models/user.model';

@InputType()
export class CreateSettingInput {
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
